import HeadQuarter from "./../ui/HeadQuarter";

function Contact() {
  return (
    <div className="contact-color px-2 py-2 pt-6 flex flex-col md:flex-row justify-center items-center gap-6">
      <div className="flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.5681101089485!2d85.82024651439652!3d20.35945311566612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093b62fa50b3%3A0x5073c243873b34be!2sKIIT-Technology%20Business%20Incubator%20(KIIT-TBI)!5e0!3m2!1sen!2sin!4v1659680779367!5m2!1sen!2sin"
          title="location-map"
          width="360px"  
          height="400" 
          loading="lazy"
          className="rounded-md shadow-md"
        ></iframe>
      </div>
      <HeadQuarter />
    </div>
  );
}

export default Contact;
