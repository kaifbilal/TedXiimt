// API Client configured for TEDx Django Backend with fallback support

const API_BASE = 'http://localhost:8000';

class ApiService {
  constructor() {
    this.token = localStorage.getItem('tedx_access_token');
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('tedx_access_token', token);
    } else {
      localStorage.removeItem('tedx_access_token');
    }
  }

  getHeaders(isFormData = false) {
    const headers = {};
    if (!isFormData) {
      headers['Content-Type'] = 'application/json';
    }
    const token = this.token || localStorage.getItem('tedx_access_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  }

  async request(endpoint, options = {}) {
    const url = endpoint.startsWith('http') ? endpoint : `${API_BASE}${endpoint}`;
    const headers = this.getHeaders(options.body instanceof FormData);

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...headers,
          ...options.headers,
        },
      });

      const isLoginRequest = endpoint.endsWith('/login/');
      if (response.status === 401 && !isLoginRequest && localStorage.getItem('tedx_refresh_token')) {
        // Try token refresh
        const refreshed = await this.refreshToken();
        if (refreshed) {
          // Retry original request
          const retryHeaders = this.getHeaders(options.body instanceof FormData);
          return fetch(url, {
            ...options,
            headers: {
              ...retryHeaders,
              ...options.headers,
            },
          }).then(res => res.json());
        }
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const error = new Error(errorData.error || errorData.message || `Request failed with status ${response.status}`);
        error.status = response.status;
        error.data = errorData;
        throw error;
      }

      return await response.json();
    } catch (err) {
      console.warn(`[API] Endpoint ${endpoint} request failed:`, err.message);
      throw err;
    }
  }

  async refreshToken() {
    const refresh = localStorage.getItem('tedx_refresh_token');
    if (!refresh) return false;
    try {
      const res = await fetch(`${API_BASE}/api/accounts/token/refresh/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh }),
      });
      if (res.ok) {
        const data = await res.json();
        this.setToken(data.access);
        if (data.refresh) {
          localStorage.setItem('tedx_refresh_token', data.refresh);
        }
        return true;
      }
    } catch (e) {
      console.error('[API] Refresh token failed:', e);
    }
    return false;
  }

  get(endpoint, params) {
    let url = endpoint;
    if (params) {
      const query = new URLSearchParams(params).toString();
      url += `?${query}`;
    }
    return this.request(url, { method: 'GET' });
  }

  post(endpoint, body) {
    return this.request(endpoint, {
      method: 'POST',
      body: body instanceof FormData ? body : JSON.stringify(body),
    });
  }

  patch(endpoint, body) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: body instanceof FormData ? body : JSON.stringify(body),
    });
  }

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

export const api = new ApiService();
export default api;
