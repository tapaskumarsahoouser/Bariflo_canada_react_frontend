import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function HeadQuarter() {
  const iconsStyle = "text-blue-600  text-2xl m-2 ml-0 font-bold";
  return (
    <div className="px-8 py-3">
      <div className="lg:pl-6 lg:pr-8 ">
        <h2 className="heading">Bariflo Cybernetics - HQ</h2>
        <p>Chennai, Tamilnadu</p>
      </div>

      <div className=" lg:px-6  py-2">
        <h2 className="heading">Odisha - HQ</h2>
        <p>
          207, TBI2, KIIT TBI, Campus 11, <br></br>Patia Estate, Bhubaneswar,
          Odisha - 751024
        </p>
      </div>

      <div className="  lg:px-6  py-2">
        <h2 className="heading">Get in touch</h2>
        <p>
          Mobile: +91 9777171033 <br /> Email: care@bariflolabs.com
        </p>
      </div>

      <div className="w-[15rem] lg:px-6  py-2  flex flex-col">
        <h2 className="heading">Follow Us On</h2>
        <div className="flex">
          <FaFacebookF className={iconsStyle} />
          <FaLinkedinIn className={iconsStyle} />
          <FaXTwitter className={iconsStyle} />
          <FaInstagram className={iconsStyle} />
        </div>
      </div>
    </div>
  );
}

export default HeadQuarter;
