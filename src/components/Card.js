import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import './Card.css';
import { useState } from "react";


const Card = (props) => {

    const person = props.reviews;
    console.log(person);
    // const person = props.reviews[index];
    // console.log(person);

    return(
        <div className='person1  space-y-3'>
            <div>
                <img className=' w-32 rounded-full absolute top-[-100px] left-10' src={person.image}></img>
            </div>

            <div>
                <p className='font-bold text-2xl'>{person.name}</p>
            </div>

            <div>
                <p className=' text-violet-200 font-medium'>{person.job}</p>
            </div>

            <div>
                <FaQuoteLeft className=' text-violet-400 mx-auto'/>
            </div>

            <div>
                <p className='font-medium text-slate-400'>{person.text}</p>
            </div>

            <div>
                <FaQuoteRight className=' text-violet-400 mx-auto'/>
            </div>

            
        </div>
    )
        
}

export default Card;