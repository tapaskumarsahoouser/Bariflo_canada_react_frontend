import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phno: '',
    companyname: '',
    message: '',
  });
  const [loading, setLoading] = useState(false); // to manage loading state
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState();
  const apiUrl = process.env.REACT_APP_API_URL;
  
  console.log(apiUrl);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await axios.post(`${apiUrl}/contact/`, formData);
      console.log(response.data.message);

      if (response.status === 201 && response.data.message) {
        console.log("Form submitted successfully");
        setSuccess(true);
        setMessage(response.data.message);
        setFormData({
          name: '',
          email: '',
          phno: '',
          companyname: '',
          message: '',
        });
        e.target.reset();
      } else {
        setError('Unexpected response from the server.');
        console.error('Error:', error);
      }
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      if (error.response) {
        setError(`Server Error: ${error.response.status} - ${error.response.statusText}`);
      } else if (error.request) {
        setError('No response from the server. Please check your network connection.');
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-start mt-4 bg-[#F5F5F4]">
      <div className="w-full max-w-4xl p-2 sm:p-10 bg-[#F5F5F4]">
        <h1 className="font-bold text-3xl text-center mb-4">Contact Us</h1>
        <div className="rounded-lg overflow-hidden flex flex-col sm:flex-row w-full bg-[#F5F5F4]">
          <div className="w-full sm:w-1/2 p-2 sm:p-3 bg-[#F5F5F4]">
            <h2 className="font-bold text-xl text-gray-800 mb-2">Welcome to Our Contact Page</h2>
            <p className="text-gray-600 mb-2">
              We're here to assist you with any questions or concerns you may have.
              Please fill out the form on the right to get in touch with us.
            </p>
            <p className="text-gray-600 mb-2">
              Our team is dedicated to providing you with the best service possible.
              We look forward to hearing from you and will respond as soon as we can.
            </p>
            <p className="text-gray-600 mb-2">
              For immediate assistance, you can also reach us at our customer service
              hotline available 24/7.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-2 sm:p-3 bg-[#F5F5F4]">

            <h2 className="font-bold text-xl text-gray-800 mb-2">Connect with us</h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md py-1 px-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0F73BE] focus:border-transparent"
                  type="text"
                  placeholder="Name *"
                  required
                />
              </div>

              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md py-1 px-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0F73BE] focus:border-transparent"
                  type="email"
                  placeholder="Email *"
                  required
                />
              </div>

              <div>
                <input
                  name="phno"
                  value={formData.phno}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md py-1 px-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0F73BE] focus:border-transparent"
                  type="text"
                  placeholder="Mobile Number *"
                  required
                />
              </div>

              <div>
                <input
                  name="companyname"
                  value={formData.companyname}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md py-1 px-2 w-full focus:outline-none focus:ring-2 focus:ring-[#0F73BE] focus:border-transparent"
                  type="text"
                  placeholder="Company Name"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md py-1 px-2 w-full h-20 focus:outline-none focus:ring-2 focus:ring-[#0F73BE] focus:border-transparent"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                className="bg-[#0F73BE] text-lg text-white rounded-md py-2 px-4 font-semibold hover:bg-[#0F73BE] transition duration-300 ease-in-out"
                type="submit"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500 text-2xl font-serif italic ">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
