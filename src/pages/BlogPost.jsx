import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Eye, Share2 } from 'lucide-react';
import api from '../services/api';

const BlogPost = ({ slug }) => {
  const postSlug = slug || window.location.pathname.split('/').pop();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Reading progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    let isMounted = true;
    const fetchPost = async () => {
      setLoading(true);
      try {
        const data = await api.get(`/api/blog/posts/${postSlug}/`);
        if (isMounted) {
          setPost(data);
        }
      } catch (err) {
        console.warn('Post not found:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (postSlug) {
      fetchPost();
    }
    return () => { isMounted = false; };
  }, [postSlug]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="bg-black text-white font-sans min-h-screen pt-32 text-center text-zinc-500">
        <div className="w-8 h-8 border-2 border-[#EB0028] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm">Loading Story...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-black text-white font-sans min-h-screen">
        <main className="pt-32 flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4 max-w-md mx-auto px-6">
            <h1 className="text-3xl font-bold text-white">Story Not Found</h1>
            <p className="text-zinc-400 text-sm">The article you're looking for doesn't exist or has been moved.</p>
            <a 
              href="/blog" 
              className="inline-flex items-center gap-2 bg-[#EB0028] hover:bg-[#c90022] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Stories
            </a>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#EB0028] origin-left z-50"
        style={{ scaleX }}
      />
      
      <main className="pt-24 md:pt-28">
        {/* Article Header */}
        <section className="relative w-full px-6 py-16 bg-gradient-to-br from-black via-zinc-950 to-red-950/20">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <a href="/" className="hover:text-[#EB0028] transition-colors">Home</a>
              <span>/</span>
              <a href="/blog" className="hover:text-[#EB0028] transition-colors">Stories</a>
              <span>/</span>
              <span className="text-zinc-300 truncate max-w-xs">{post.title}</span>
            </nav>

            {/* Category and Featured Badge */}
            <div className="flex items-center gap-3">
              <span className="bg-[#EB0028] text-white text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider">
                {post.category_name || 'Editorial'}
              </span>
              {post.is_featured && (
                <span className="bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs px-3 py-1 rounded-full font-bold">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-white">
              {post.title}
            </h1>

            {post.subtitle && (
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                {post.subtitle}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-xs font-mono border-t border-zinc-800/80 pt-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#EB0028]" />
                <span>{formatDate(post.publish_date)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#EB0028]" />
                <span>{post.author_name} ({post.author_title || 'Contributor'})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#EB0028]" />
                <span>{post.read_time || '5 min read'}</span>
              </div>
              {post.views_count > 0 && (
                <div className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#EB0028]" />
                  <span>{post.views_count} views</span>
                </div>
              )}
            </div>

            {/* Excerpt Lead */}
            <p className="text-lg text-zinc-300 leading-relaxed italic border-l-4 border-[#EB0028] pl-6 bg-zinc-950/60 py-3 rounded-r-2xl">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Cover Image */}
        {post.cover_image && (
          <div className="max-w-4xl mx-auto px-6 -mt-4 mb-12">
            <div className="aspect-[16/9] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <section className="w-full px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert max-w-none text-zinc-300 text-base sm:text-lg leading-relaxed whitespace-pre-line space-y-6">
              {post.content}
            </article>

            {/* Tags */}
            {Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-wrap items-center gap-2">
                <span className="text-xs text-zinc-500 font-bold uppercase mr-2">Tags:</span>
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs rounded-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Related Posts */}
        {Array.isArray(post.related_posts) && post.related_posts.length > 0 && (
          <section className="w-full px-6 py-16 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-2xl font-bold text-white">Related Stories</h3>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {post.related_posts.map((rPost) => (
                  <a
                    key={rPost.id}
                    href={`/blog/${rPost.slug}`}
                    className="p-5 bg-zinc-900 border border-zinc-800 hover:border-[#EB0028]/60 rounded-2xl block transition-all group"
                  >
                    <span className="text-[10px] font-bold uppercase text-[#EB0028] block mb-2">{rPost.category_name}</span>
                    <h4 className="font-bold text-sm text-white group-hover:text-[#EB0028] transition-colors line-clamp-2">{rPost.title}</h4>
                    <p className="text-xs text-zinc-400 mt-2 line-clamp-2">{rPost.excerpt}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default BlogPost;