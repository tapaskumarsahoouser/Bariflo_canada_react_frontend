import HeadQuarter from "./../ui/HeadQuarter";

function Contact() {
  return (
    <div className="contact-color px-2 py-2 pt-6 flex flex-col md:flex-row justify-center items-center gap-6">
      <div className="flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1684.0550735898914!2d-78.97924916394302!3d43.91547596088354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51f1d0037da8d%3A0x8a7b6433ce69f831!2s20%20Micklefield%20Ave!5e1!3m2!1sen!2sin!4v1728295325660!5m2!1sen!2sin"
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
