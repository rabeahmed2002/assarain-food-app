import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-blue-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full rounded-md overflow-hidden shadow-lg">
          <video
            src="/path-to-your-video/video.mp4" // path of actual video
            controls
            className="w-full h-[400px] object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
