import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";
import './App.css';

const App = () => {
  return (
    <div className='bg-slate-200 h-screen  m-0'>
      <h1 className='font-bold text-3xl text-center pt-24'>Our Testimonials</h1>
      <div className=' w-[300px] h-1 bg-violet-600 rounded-md  mx-auto mt-2'></div>
      <Testimonial reviews={reviews}/>
    </div>);
};

export default App;
