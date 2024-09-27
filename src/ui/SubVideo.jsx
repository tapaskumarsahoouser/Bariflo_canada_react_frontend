import { useState } from "react";

function SubVideo() {
  const [videoVisible, setVideoVisible] = useState(false);
  return (
    <div className=" flex flex-col px-5 mt-3 lg:mt-8 lg:mx-16 lg:px-16 py-1 justify-center items-center">
      <h2 className="font-semibold text-2xl md:text-3xl  text-center pb-3 lg:py-8">
        Watch Our Story on YouTube
      </h2>
      {!videoVisible && (
        <img
          src="poster.jpeg"
          alt="video"
          className="max-h-[30rem] hover:cursor-pointer"
          onClick={() => setVideoVisible(!videoVisible)}
        />
      )}

      {videoVisible && (
        <div>
          <video
            preload="auto"
            controls
            autoPlay
            muted
            className="max-h-[30rem]"
          >
            <source src="/video1.mp4"></source>
          </video>
        </div>
        // <iframe
        //   class="p-5"
        //   width="100%"
        //   height="550"
        //   src="https://www.youtube.com/embed/cL_214QnjZI"
        //   title="YouTube video player"
        //   frameborder="0"
        //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //   allowfullscreen=""
        // ></iframe>
      )}
    </div>
  );
}

export default SubVideo;
