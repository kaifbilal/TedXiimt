import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import speakersData from '../data/speakersData';
import './Speakers.css';

const Speakers = ({ isHomepage = false }) => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const speakers = speakersData;

  const displaySpeakers = isHomepage ? speakers.slice(0, 4) : speakers;

  const handleSpeakerClick = (speaker) => {
    setSelectedSpeaker(speaker);
  };

  const closeModal = () => {
    setSelectedSpeaker(null);
  };

  return (
    <section className="speakers-section">
      <div className="speakers-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="speakers-header"
        >
          <h2 className="speakers-title">
            Our <span className="speakers-title-highlight">Speakers</span>
          </h2>
          <p className="speakers-subtitle">
            Meet the brilliant minds sharing their ideas at TEDxIIMT UNIVERSITY 2025: Break the Flow
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="speakers-grid">
          {displaySpeakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="speaker-card"
              onClick={() => handleSpeakerClick(speaker)}
            >
              {/* Image Container */}
              <div className="speaker-image-wrapper">
                <div className="speaker-image-container">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="speaker-image"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="speaker-image-overlay"></div>
                </div>
              </div>

              {/* Info Container */}
              <div className="speaker-info">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-designation">{speaker.designation}</p>
                <p className="speaker-bio">{speaker.shortBio}</p>
                <div className="speaker-quote">
                  <svg className="quote-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                  <p className="quote-text">{speaker.quote}</p>
                </div>
              </div>

              {/* Read More Indicator */}
              <div className="speaker-read-more">
                <span>View Full Bio</span>
                <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Speaker Details */}
        <AnimatePresence>
          {selectedSpeaker && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="speaker-modal-overlay"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="speaker-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="speaker-modal-close"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="speaker-modal-content">
                  <div className="speaker-modal-image-container">
                    <img
                      src={selectedSpeaker.image}
                      alt={selectedSpeaker.name}
                      className="speaker-modal-image"
                    />
                  </div>

                  <div className="speaker-modal-info">
                    <h3 className="speaker-modal-name">{selectedSpeaker.name}</h3>
                    <p className="speaker-modal-designation">{selectedSpeaker.designation}</p>

                    {selectedSpeaker.topic && (
                      <div className="mb-4">
                        <span className="text-xs uppercase tracking-widest text-[#EB0028] font-bold block mb-1">Talk Topic</span>
                        <p className="text-lg font-bold text-white">{selectedSpeaker.topic}</p>
                      </div>
                    )}

                    <div className="speaker-modal-bio">
                      <h4 className="speaker-modal-section-title">About the Speaker</h4>
                      <p>{selectedSpeaker.detailedBio}</p>
                    </div>

                    <div className="speaker-modal-quote">
                      <svg className="quote-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                      <p>{selectedSpeaker.quote}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Speakers;
