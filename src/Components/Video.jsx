import { useRef } from 'react';

const Video = () => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <div className="mt-[276px] flex justify-center">
            <video
                width="2326"
                height="1150"
                className="rounded-[20px]"
                ref={videoRef}
                src="sample.mp4"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                preload="auto"
                playsInline
                muted
            />
        </div>
    );
};

export default Video;