import Card from "./Card"
import './Testimonial.css';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";

const Testimonial = (props) => {
    const reviews = props.reviews;
    // console.log(reviews.length);
    let [index,setIndex] = useState(0);

    function previosImage(){
        index===0 ? setIndex(4) : setIndex(--index);
    }

    function nextImage(){
        index===4 ? setIndex(0) : setIndex(++index);
    }

    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }
    
    return(
        <div className='w-[660px] space-y-3 rounded bg-white py-9 px-6 items-center 
         text-center  mx-auto relative flex flex-col mt-8'>
            <Card reviews={reviews[index]}/>

            <div className='space-x-8 py-4'>
                <button onClick={previosImage}>
                    <FaAngleLeft className='text-violet-400 h-7' />
                </button>
                <button onClick={nextImage}>
                    <FaAngleRight className='text-violet-400 h-7' />
                </button>
            </div>

            <button onClick={surpriseHandler} className='px-12 py-3 rounded-md bg-violet-500 text-white font-semibold'>Surprise Me </button>
        </div>
        
    )
}


export default Testimonial;