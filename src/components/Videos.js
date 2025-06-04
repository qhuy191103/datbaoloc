import React, { useEffect, useRef, useState } from 'react';
import { PlayCircle } from 'lucide-react';

function Videos() {
  const containerRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new window.YT.Player('yt-player', {
        height: '100%',
        width: '100%',
        videoId: '2uoi3Cptukg',
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          mute: 1, // quan trọng để được autoplay
          enablejsapi: 1,
        },
        events: {
          onReady: (event) => {
            setPlayer(event.target);
          },
        },
      });
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || !player) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          player.playVideo();
        } else {
          player.pauseVideo();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [player]);

  return (
    <section className="bg-gray-900 py-24" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
        </div>
        {/* Video */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-700 group">
          <div className="relative w-full pb-[56.25%] bg-black">
            <div
              id="yt-player"
              className="absolute top-0 left-0 w-full h-full"
            ></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Videos;
