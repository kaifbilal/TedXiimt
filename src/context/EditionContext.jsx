import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';
import { ARCHIVE_EDITIONS, getArchiveEdition } from '../data/archiveData';

const EditionContext = createContext(null);

export const useEdition = () => {
  const context = useContext(EditionContext);
  if (!context) {
    throw new Error('useEdition must be used within an EditionProvider');
  }
  return context;
};

export const EditionProvider = ({ children }) => {
  const [activeEdition, setActiveEdition] = useState(ARCHIVE_EDITIONS[0]);
  const [editionsList, setEditionsList] = useState(ARCHIVE_EDITIONS);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEditions = async () => {
      try {
        const [activeRes, listRes] = await Promise.allSettled([
          api.get('/api/editions/events/active/'),
          api.get('/api/editions/events/library/'),
        ]);

        if (activeRes.status === 'fulfilled' && activeRes.value) {
          setActiveEdition(activeRes.value);
        }
        if (listRes.status === 'fulfilled' && listRes.value?.length > 0) {
          setEditionsList(listRes.value);
        }
      } catch (e) {
        console.log('[Edition] Using default initial edition data.');
      } finally {
        setLoading(false);
      }
    };

    fetchEditions();
  }, []);

  const getEditionByYear = async (year) => {
    try {
      return await api.get(`/api/editions/events/${year}/`);
    } catch (e) {
      // Fallback
      return getArchiveEdition(year) || activeEdition;
    }
  };

  const value = {
    activeEdition,
    editionsList,
    loading,
    getEditionByYear,
  };

  return <EditionContext.Provider value={value}>{children}</EditionContext.Provider>;
};
