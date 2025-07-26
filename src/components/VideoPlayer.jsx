import React from 'react';

const VideoPlayer = ({ character, videoId }) => {
  console.log("character : " + character +", videoId : " + videoId);
  if (!videoId) return null;

  return (
    <div id="videoPlayer" className="flex flex-col items-center justify-center min-h-screen text-white">
      <iframe
        width="100%"
        height="300"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={character}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
