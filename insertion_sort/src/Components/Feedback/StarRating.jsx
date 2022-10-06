import React ,{createContext, useState} from "react";
import {FaStar} from "react-icons/fa";
import { Button } from "semantic-ui-react";

const StarRating = (e)=>{

    const [rating,setRating] = useState(null);
    const [hover,setHover] = useState(null);

    const handleChange = (event) => {
        setRating(event.target.value)
      };

      const resetRadioState = () => {
        setRating('');
      };

      
    return (
    <>
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
                checked={ratingValue}
                onChange={handleChange}
                onClick={()=>setRating(ratingValue)} 
                key={i} 
                onMouseEnter={()=>setHover(ratingValue)} 
                onMouseLeave={()=>setHover(null)}
            />
            <FaStar className="star px-2 cursor-pointer transition duration-200 hover:scale-125" size={50} color={ratingValue <= (hover || rating) ? "#fcdc00" : "#cccccc"} uncheck={resetRadioState}/>
            </label>
            {console.log(rating)}
            </>
        );
        })
        }
    </div>
    {/* <div>
        <Button type="reset" onClick={resetRadioState}>Reset</Button>
    </div> */}
    </>
    ); 
};

export default StarRating;