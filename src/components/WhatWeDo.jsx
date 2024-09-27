import WeDoBox from "./../ui/WeDoBox";

function WhatWeDo({ reference }) {
  // const h3Style =
  //   "text-blue-600 font-bold text-3xl text-center tracking-wide md:text-left md:text-4xl";
  // const h2Style =
  //   "text-black font-semibold text-xl text-center md:text-left md:text-3xl";
 
const pStyle = {
  fontFamily: 'Poppins, sans-serif',
  fontSize: '16px',
};

  return (
    <div ref={reference} className="px-2 bg-stone-100">
      <h2 className="font-semibold text-3xl pt-10 text-center">What We Do</h2>
      
      <div className="flex flex-col md:flex-row justify-center md:space-x-8 lg:space-x-12 mt-6">
        <WeDoBox src="/whatWeDo/prawn2.jpg" alt="aqua-bodies"  >
          {/* <h3 className={h3Style} style={{color:"#0F73BE"}}>Bariflo Cybernetics</h3> */}
          <h2 className={"text-black font-semibold text-xl text-center md:text-left md:text-3xl"} style={{color:"#0F73BE"}}>Intelligent Aqua Bodies Management</h2>
          <p style={pStyle}>
          Our patented sediment aeration device diffuses air at the sediment level, 
          enhancing dissolved oxygen and reducing energy consumption by up to 75% and capital
           costs by 20%. Our AI-based monitoring device provides real-time data across the waterbody,
            predicting water quality parameters like dissolved oxygen, ammonia, phosphate, and more. It activates aeration and monitoring processes as needed. Additionally, our intelligent floating agriculture platform uses phytoremediation to remove nitrogen and phosphorus, reducing algae and weed growth.
          </p>
        </WeDoBox>

        <WeDoBox src="whatWeDo/indore.png" alt="water-bodies" reverse>
          {/* <h3 className={h3Style} style={{color:"#0F73BE"}}>Bariflo Cybernetics</h3> */}
          <h2 className={"text-black font-semibold text-xl text-center md:text-left md:text-3xl mt-0"} 
            style={{color:"#0F73BE", marginBottom: '10px'}}>Intelligent Indoor Farm Management</h2>
          <p style={pStyle}>
          Indoor aquaculture shrimp farming is an innovative and sustainable method of cultivating shrimp in controlled environments. This approach offers several advantages over traditional outdoor farming, including improved biosecurity, environmental control, and year-round production. As the demand for shrimp continues to rise globally, indoor shrimp farming presents a viable solution to meet this demand while minimizing ecological impacts.
          </p>
        </WeDoBox>
      </div>
    </div>
  );
}

export default WhatWeDo;
