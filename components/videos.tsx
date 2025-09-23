"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Video } from "@/types/content";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { useRef, useState } from "react";

interface VideosProps {
  videos: Video[];
}

export default function Videos({ videos }: VideosProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const toggleVideoPlay = (videoId: number, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }

    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      if (playingVideos.has(videoId)) {
        videoElement.pause();
        setPlayingVideos((prev) => {
          const newSet = new Set(prev);
          newSet.delete(videoId);
          return newSet;
        });
      } else {
        videoElement.play();
        setPlayingVideos((prev) => new Set(prev).add(videoId));
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Nossos{" "}
            <span className="bg-gradient-to-r from-rose-gold to-champagne bg-clip-text text-transparent">
              Trabalhos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja as transformações incríveis que realizamos para nossas clientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 h-full overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative" onClick={() => openVideo(video)}>
                  <div className="h-64 relative overflow-hidden">
                    <video
                      ref={(el) => {
                        videoRefs.current[video.id] = el;
                      }}
                      src={video.url}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onLoadedData={() => {
                        // Pause the video initially
                        const videoElement = videoRefs.current[video.id];
                        if (videoElement) {
                          videoElement.pause();
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={(e) => toggleVideoPlay(video.id, e)}
                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 hover:bg-white/30"
                      >
                        {playingVideos.has(video.id) ? (
                          <div className="w-6 h-6 flex space-x-1">
                            <div className="w-2 h-6 bg-white"></div>
                            <div className="w-2 h-6 bg-white"></div>
                          </div>
                        ) : (
                          <Play className="h-8 w-8 text-white ml-1" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-rose-gold transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{video.description}</p>

                  <Button
                    onClick={() => openVideo(video)}
                    className="w-full bg-gradient-to-r from-rose-gold to-champagne text-black hover:from-champagne hover:to-rose-gold transition-all duration-300"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Assistir em Tela Cheia
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-black transition-all duration-300"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Ver no YouTube
          </Button>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeVideo}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-4xl mx-4 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo.url}
              className="w-full h-full rounded-lg"
              controls
              autoPlay
              muted
            />
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-rose-gold transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
