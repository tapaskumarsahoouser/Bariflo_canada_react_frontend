function WeDoBox({ children, src, alt, reverse }) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-col-reverse' : ''} items-center my-6 py-6 px-4 md:py-10 md:px-6 md:mx-4 w-full md:w-1/2 bg-white shadow-lg rounded-lg`}>
      <img
        className="w-full sm:max-w-[20rem] lg:max-w-[28rem] mb-4 rounded-lg"
        src={src}
        alt={alt}
      />
      <div className="py-4 space-y-4 px-6">
        {children}
      </div>
    </div>
  );
}

export default WeDoBox;
