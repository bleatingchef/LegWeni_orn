import axios from 'axios';
import React, { useState } from 'react';


const Book_appointment = () => {
  const [form,setForm] = useState({
    name:"",
    phone:"",
    email:"",
    comment:""
  })


  const handler = (e)=>{
    const {name , value} = e.target;
    setForm({
      ...form,
      [name]:value
    });
  }

  const submitData = async ()=>{
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/appoint/user`,form,{withCredentials:true})
      console.log("the data has been sended");
      
    } catch (error) {
      console.error("data is not sended");
      
    }
  }
  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen  px-4 sm:px-6 lg:px-20">
      <div className="w-full md:w-1/2 lg:w-1/3 p-6 sm:p-10 bg-slate-950 text-white rounded-3xl shadow-lg">
        <form className="space-y-6 sm:space-y-10">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name"></label>
            <input type="text" id="name" name="name" value={form.name} onChange={handler} className="w-full px-4 py-2 sm:px-6 sm:py-3 border border-white-700 rounded-3xl bg-slate-950 text-white focus:ring focus:ring-white-500" placeholder="Name"/>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="phone"></label>
            <input type="text" id="phone" name="phone" value={form.phone} onChange={handler} className="w-full px-4 py-2 sm:px-6 sm:py-3 border border-white-700 rounded-3xl bg-slate-950 text-white focus:ring focus:ring-white-500" placeholder="Ph. Number"/>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email"></label>
            <input type="email" id="email" name="email" value={form.email} onChange={handler} className="w-full px-4 py-2 sm:px-6 sm:py-3 border border-white-700 rounded-3xl bg-slate-950 text-white focus:ring focus:ring-white-500" placeholder="Mail"/>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message"></label>
            <textarea id="message" name="comment" value={form.comment} onChange={handler} className="w-full px-4 py-2 sm:px-6 sm:py-3 border border-white-700 rounded-3xl bg-slate-950 text-white focus:ring focus:ring-white-500" rows="4" placeholder="Your Message Here..."></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="px-6 py-3 sm:px-10 bg-white text-blue-900 rounded-md hover:bg-gray-200 transition duration-300" onClick={submitData}>Submit</button>
          </div>
        </form>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 mt-10 md:mt-0 md:pl-12 lg:pl-24 text-slate-950">
        <h2 className="text-4xl sm:text-5xl md:text-6xl mb-10 md:mb-20">Book An Appointment</h2>
        <p className="text-lg sm:text-2xl md:text-3xl mb-8">
          A-52, Som Bazar Chowk, Vikas Nagar<br/>
          Uttam Nagar, New Delhi-59 (INDIA)
        </p>
        <hr className='border-1 max-w-lg border-black' />
        <p className="text-lg sm:text-2xl md:text-3xl mb-2 mt-8">info@markletechandmedia.com</p>
        <p className="text-lg sm:text-2xl md:text-3xl mb-2">markletechandmedia@gmail.com</p>
        <p className="text-lg sm:text-2xl md:text-3xl mb-2">+91-798-233-2070 / +91-767-810-2159</p>
      </div>
    </div>
  );
}

export default Book_appointment;
