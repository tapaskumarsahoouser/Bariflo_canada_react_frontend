function Title() {
  return (
    <div className="absolute top-[7rem] sm:top-[9rem] md:top-[15rem] lg:top-[17rem] px-3 sm:px-7 md:px-10 space-y-2 z-20">
      <h2 
        className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl"
        style={{ color: '#83f287' }} 
      >
        Mission is about people
      </h2>
      <p className="text-white text-md md:text-xl md:font-semibold lg:text-2xl">
        Develop sustainable technology
        <br />
        for aquaculture farming by solving critical water and disease issues
      </p>
    </div>
  );
}

export default Title;
