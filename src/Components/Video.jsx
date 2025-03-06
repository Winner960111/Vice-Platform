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
        <div className="mt-[125px] flex justify-center">
            <video
                width="1081"
                height="534"
                className="rounded-[20px] cursor-pointer  max-w-[1600px]"
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