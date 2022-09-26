import React ,{useState} from "react";
import {FaStar} from "react-icons/fa";

const StarRating = (e)=>{

    const [rating,setRating] = useState(null);
    const [hover,setHover] = useState(null);

    return (

    <div className="flex">
        {[...Array(5)].map((star,i) => {
            
            const ratingValue = i + 1;

            return (
            <>
            <label>
            <input className="hidden" 
                type="radio" 
                name="rating" 
                value={ratingValue} 
                onClick={()=>setRating(ratingValue)} 
                key={i} 
                onMouseEnter={()=>setHover(ratingValue)} 
                onMouseLeave={()=>setHover(null)}
            />
            <FaStar className="star px-2 cursor-pointer transition duration-200 hover:scale-125" size={50} color={ratingValue <= (hover || rating) ? "#fcdc00" : "#cccccc"}/>
            </label>
            </>
        );
        })
        }
    </div>
    ); 
};

export default StarRating;