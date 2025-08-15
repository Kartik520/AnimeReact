import React, { useEffect, useRef } from 'react';
import AnimeSource from '../data/animeSource';

const getVideoIdFromUrl = (url) => {
  const match = url.match(/v=([^&]+)/);
  return match ? match[1] : '';
};

const CharacterVideoList = ({ character, SearchValue }) => {
  const containerRef = useRef();
  const charData = AnimeSource[character];
  const videos = charData?.videos || [];
  const color = 'bg-white';
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(SearchValue?.toLowerCase() || '')
  );

  useEffect(() => {
    const container = containerRef.current;
    const updateCardScales = () => {
      const cards = container?.querySelectorAll('.character-card');
      if (!cards) return;

      const centerY = window.innerHeight / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - cardCenterY);

        let scale = 1;
        let opacity = 1;

        if (distance < 100) {
          scale = 1;
          opacity = 1;
        } else if (distance < 250) {
          scale = 0.9;
          opacity = 0.8;
        } else if (distance < 400) {
          scale = 0.8;
          opacity = 0.6;
        } else {
          scale = 0.7;
          opacity = 0.4;
        }

        card.style.transform = `scale(${scale})`;
        card.style.opacity = opacity;
      });
    };

    container?.addEventListener('scroll', updateCardScales);
    window.addEventListener('resize', updateCardScales);
    setTimeout(updateCardScales, 100);

    return () => {
      container?.removeEventListener('scroll', updateCardScales);
      window.removeEventListener('resize', updateCardScales);
    };
  }, [character]);

  if (!character || filteredVideos.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 gap-4 overflow-y-auto max-h-[80vh] px-4 snap-y"
    >
      {filteredVideos.map((video, idx) => (
        <div
          key={idx}
          className={`character-card snap-center relative ${color} shadow-lg p-4 rounded-2xl transition-all duration-300 ease-in-out text-center`}
        >
          <svg className="absolute bottom-0 left-0 w-full h-40 z-0" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              fillOpacity="0.5"
              d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,122.7C672,128,768,128,864,122.7C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64L1440,320L0,320Z"
            ></path>
          </svg>
          <h3 className="relative z-10 text-xl font-semibold mb-2 text-gray-800">
            {video.title}
          </h3>
          <iframe
            className="relative z-10 rounded-md w-full"
            height="200"
            src={`https://www.youtube.com/embed/${getVideoIdFromUrl(video.url)}?autoplay=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default CharacterVideoList;
