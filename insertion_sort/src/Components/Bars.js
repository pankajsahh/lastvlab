import { useEffect, useState } from "react";
import './Bar.css'
const Bars=(props)=>{
    const [len,setlen]=useState(props.length);

    //  const colors=['#B4FEE7','#FD49A0', '#368980','#603F8B'];
    const colors=['#B4FEE7','#0000FF','#00FF00','#FF0000'];

     useEffect(()=>{
         setlen(props.length);
     },[props.length]);

    let textStyle={
        width:props.length,
        top:Math.floor(props.length/2)-10,
        left:-Math.floor(props.length/2)+11,
    }
    let barStyle={
        background:colors[props.colorKey],
        // background:'#ff304a',
        height:props.length,
        marginTop:200-props.length,
    
    }

    let quantitybtnStyle={
        top:props.length-10,
    }
    const handleChange=(e)=>{
        setlen(e.target.value);
        props.changeArray(props.index,e.target.value);
    }
    const incerement=()=>{
    setlen(len+1);
    props.changeArray(props.index,len+1);
    }
     const decrement=()=>{
       setlen(len-1);
       props.changeArray(props.index,len-1);
     }
     return (
         <div className="bar" style={barStyle}>
             <input type="number" className="text" value={len} onChange={handleChange} style={textStyle}/>
             <div className="quantityNav">
                 <div className="quantity-btn quantity-up" style={quantitybtnStyle} onClick={incerement}> + </div>
                 
                 <div className="quantity-btn quantity-down" style={quantitybtnStyle} onClick={decrement}> - </div>

             </div>
             
         </div> 
     );
}
export default Bars;