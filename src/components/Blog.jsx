import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';
import api from '../services/api';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchPosts = async () => {
      try {
        const data = await api.get('/api/blog/posts/featured/');
        const list = Array.isArray(data) ? data : (data?.results || []);
        if (isMounted && list.length > 0) {
          setPosts(list.slice(0, 3));
        }
      } catch (err) {
        console.warn('Featured blog fetch error:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchPosts();
    return () => { isMounted = false; };
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading || posts.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 bg-zinc-950 px-5 py-16 text-white sm:px-6 md:py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#EB0028]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EB0028]/10 border border-[#EB0028]/30 text-[#EB0028] text-xs font-bold uppercase mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Editorial Stories
          </div>
          <h2 className="mb-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Latest <span className="text-[#EB0028]">Articles & Insights</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Explore speaker spotlights, stagecraft stories, and deep dives into the 2025 theme "Break the Flow".
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-[0_14px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#EB0028]/60 hover:bg-white/[0.06]"
              onClick={() => window.location.href = `/blog/${post.slug}`}
            >
              {/* Post Image */}
              <div className="relative h-52 overflow-hidden bg-zinc-800 sm:h-56">
                <img
                  src={post.cover_image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80'}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-[#EB0028] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow">
                    {post.category_name || 'Editorial'}
                  </span>
                </div>
                <div className="absolute bottom-3 right-4 text-zinc-300 text-xs flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3 text-[#EB0028]" />
                  {post.read_time || '4 min read'}
                </div>
              </div>

              {/* Post Content */}
              <div className="flex flex-grow flex-col justify-between space-y-5 p-6">
                <div>
                  <div className="mb-3 text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                    {formatDate(post.publish_date)} • By {post.author_name}
                  </div>
                  <h3 className="line-clamp-2 text-xl font-bold leading-tight text-white transition-colors group-hover:text-[#EB0028]">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-2 border-t border-white/10 pt-4 text-xs font-bold text-[#EB0028] transition-transform group-hover:translate-x-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;