import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
    src: string;
    poster?: string;
    type?: string;
}

export default function VideoPlayer({ src, poster, type = 'video/mp4' }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<Player>(null);

    useEffect(() => {
        if (videoRef.current && !playerRef.current) {
            playerRef.current = videojs(videoRef.current, {
                controls: true,
                autoplay: false,
                preload: 'auto',
                responsive: true,
                fluid: true,
            });
        }

        return () => {
            playerRef.current?.dispose();
            playerRef.current = null;
        }
    }, []);
    
    return (
        <div data-vjs-player>
            <video
                ref={videoRef}
                className="video-js vjs-big-play-centered"
                poster={poster}
            >
                <source src={src} type={type} />
            </video>
        </div>
    );
}