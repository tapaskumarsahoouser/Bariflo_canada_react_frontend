import LeadAndSpotItem from "../ui/LeadAndSpotItem";

function Spotlight() {
  return (
    <div className="py-6">
      <h2 className="font-semibold text-3xl text-center px-8">Spotlights</h2>
      <ul className="flex flex-col lg:py-4 md:flex-row md:px-6 lg:mx-6 gap-4 justify-center items-center  px-3  lg:my-7 my-5">
        <LeadAndSpotItem
          src="1.png"
          alt=""
          href="https://www.youtube.com/watch?v=_9CRE38f7Mo"
        />
        <LeadAndSpotItem
          src="1.png"
          alt=""
          href="https://www.youtube.com/watch?v=_9CRE38f7Mo"
        />
        <LeadAndSpotItem
          src="1.png"
          alt=""
          href="https://www.youtube.com/watch?v=_9CRE38f7Mo"
        />
      </ul>
    </div>
  );
}

export default Spotlight;
