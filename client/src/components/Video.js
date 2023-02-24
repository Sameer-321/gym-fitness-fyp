import React from 'react';

const Video = ({ src, type}) => {
  return (
    <video controls className={`h-[calc(100vh-34px)] flex w-full rounded-lg shadow-lg`}>
      <source src={src} type={type} />
    </video>
  );
};

export default Video;
