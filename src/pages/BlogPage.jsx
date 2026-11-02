import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Clock, ArrowRight, Sparkles } from 'lucide-react';
import api from '../services/api';

const BlogPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchBlogData = async () => {
      setLoading(true);
      try {
        const [catsData, postsData] = await Promise.all([
          api.get('/api/blog/categories/').catch(() => []),
          api.get('/api/blog/posts/', {
            category: selectedCategory !== 'all' ? selectedCategory : undefined,
            search: searchTerm ? searchTerm : undefined
          }).catch(() => [])
        ]);

        if (isMounted) {
          const catsList = Array.isArray(catsData) ? catsData : (catsData?.results || []);
          const postsList = Array.isArray(postsData) ? postsData : (postsData?.results || []);
          setCategories([{ id: 0, name: 'All Stories', slug: 'all' }, ...catsList]);
          setPosts(postsList);
        }
      } catch (err) {
        console.warn('Blog data fetch error:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    const timer = setTimeout(fetchBlogData, 200);
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [selectedCategory, searchTerm]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <main className="pt-24 md:pt-28">
        
        {/* Hero Section */}
        <section className="relative w-full px-6 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#EB0028]/10 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EB0028]/10 border border-[#EB0028]/30 text-[#EB0028] text-xs font-bold uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              Editorial & Thought Leadership
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
              Ideas, Insights & <span className="text-[#EB0028]">Stories</span>
            </h1>
            
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Explore speaker announcements, research essays, stagecraft behind the scenes, and the philosophy behind TEDxIIMT University 2025.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto pt-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles by title, speaker, or topic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-zinc-950 border border-zinc-800 rounded-2xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#EB0028] transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="container mx-auto px-4 sm:px-6 mb-12">
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.slug || cat.id}
                onClick={() => setSelectedCategory(cat.slug || 'all')}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                  selectedCategory === (cat.slug || 'all')
                    ? 'bg-[#EB0028] text-white shadow-lg shadow-[#EB0028]/25'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="container mx-auto px-4 sm:px-6 pb-24 max-w-6xl">
          {loading ? (
            <div className="py-20 text-center text-zinc-500">
              <div className="w-8 h-8 border-2 border-[#EB0028] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-sm">Loading Editorial Articles...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16 text-zinc-500 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 max-w-lg mx-auto">
              <p>No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="bg-zinc-950 border border-zinc-800 hover:border-[#EB0028]/60 rounded-3xl overflow-hidden group cursor-pointer flex flex-col transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
                  onClick={() => window.location.href = `/blog/${post.slug}`}
                >
                  <div className="h-52 bg-zinc-900 relative overflow-hidden">
                    <img
                      src={post.cover_image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80'}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#EB0028] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                        {post.category_name || 'Story'}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-4 text-zinc-300 text-xs flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-[#EB0028]" />
                      {post.read_time || '5 min read'}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div>
                      <div className="text-zinc-500 text-xs mb-2 font-mono">
                        {formatDate(post.publish_date)} • {post.author_name}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#EB0028] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-zinc-400 text-xs line-clamp-3 mt-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-zinc-900 text-xs font-bold">
                      <span className="text-[#EB0028] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                        Read Story <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                      {post.views_count > 0 && (
                        <span className="text-zinc-500 font-mono text-[11px]">{post.views_count} views</span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>

      </main>
    </div>
  );
};

export default BlogPage;