function Video() {
  return (
    <div className="relative overflow-hidden h-[30rem] sm:h-[40rem] md:h-[46rem] lg:h-[20rem] xl:h-[45rem] max-h-[60rem] pt-16">
      <img
        src="./mainimage.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

export default Video;
