import {FaStar} from "react-icons/fa";

const StarRating= ()=>{
    return (
    <div>
        {["Awful", "Bad", "Ok Ok", "Good", "Amazing"].map(star =>{
            return <FaStar size={100}/>
        })}
    </div>
    );
};

export default StarRating;