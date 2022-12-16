import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Simulation=()=>{

    const [array,setArray]=useState([]);
    const [manual,setManual]=useState('');
    const [boxes,updateBoxes]=useState();
    const [val,changeVal]=useState('');
    const[errors,setErrors]=useState({size:'',element:''});

    const [key,setKey]=useState();
    const [jth,setJth]=useState();
    const [ith,setIth]=useState();
    const [statement,setStatement]=useState('');

    // Initially disable all buttons ,run this hook only once when page load
    useEffect(()=>{
        if(!val){
            console.log("useEffet disabled buttons")
            const btns=document.getElementsByClassName('btns');
        for(let i =0;i<btns.length;i++){
                btns[i].disabled=true;
                btns[i].style.opacity=0.5;
        }
    }} ,[])
 
    const changeLineColour=(resolve,id,time)=>{
        // remove color from all lines 
        for(let  i=101;i<108;i++){
            if(i!=id){
            document.getElementById(i).style.color='Black';}
            else{
                const line= document.getElementById(id);
        line.style.color='red';
            }
        }
        
        return setTimeout(resolve,time);
    }
    // function to change key box color 
    const changeKeyBoxColor=(id)=>{
        const key=document.getElementById(id);
        key.style.backgroundColor="Yellow";
        const box= document.getElementById('keyBox');
        box.style.backgroundColor='Yellow';
    }
    // Change Jth comparing index color 
    const changeJcolor=(id)=>{
        if(id>=0){
           for(let i=0;i<=id+1;i++){
            if(i!=id){
        const J= document.getElementById(i);
        J.style.backgroundColor='Green';
        J.style.color='white';

            }else {
        const J= document.getElementById(id);
        J.style.backgroundColor='Blue';
            }
           }
        }
    }
    // Change till sorted index
    const changeTillSorted=(i)=>{
        let boxes=[];
        for(let j=0;j<=i;j++){
            boxes[j]=document.getElementById(j);
        }
        for(let j=0;j<boxes.length;j++){
            boxes[j].style.backgroundColor="Green";
             boxes[j].style.color='white';
        }
        
    }
    // Enable disable start button 
    const enableStartButton=async ()=>{
        const btn=document.getElementsByClassName('btns')[2];
        btn.disabled=false;
        btn.style.opacity=1;
    }
    const disableStartButton= ()=>{
        console.log('hello  i am here')
        const btn=document.getElementsByClassName('btns')[2];
        console.log(btn)
        btn.disabled=true;
        btn.style.opacity=0.5;
        console.log("Even here")
    }

    
    
    // Enable disable generate buttons 
    const enableGenerateButtons=()=>{
        const btns=document.getElementsByClassName('btns');
        for(let i =0;i<btns.length-1;i++){
                btns[i].disabled=false;
                btns[i].style.opacity=1;
        }
    }
    const disableGenerateButtons=()=>{
        const btns=document.getElementsByClassName('btns');
        for(let i=0;i<btns.length-1;i++){
            btns[i].disabled=true;
            btns[i].style.opacity=0.5;
        }
       } 
    // Enable disable submit button of input box
    const submitButton=()=>{
        if(flag){
        const btn= document.getElementById('submit');
        if(btn.disabled===true){
            btn.disabled=false;
            btn.style.opacity=1
        }else{
            console.log("Submit button disabled")
            btn.disabled=true;
            btn.style.opacity=0.5;
        }
    }
    }
    // Enable disable array size input box 
    const arraySizeButton=()=>{
        const size=document.getElementById('size');
        if(size.disabled===true){
            size.disabled=false;
            size.style.backgroundColor=null;
        }else{
            size.disabled=true;
            size.style.backgroundColor='grey';
        }
    }
    const algorithm=async()=>{
        // dibsable generate button
        disableGenerateButtons();
        disableStartButton();
        submitButton();
        // disable size input box
        arraySizeButton();
        console.log("Array before sorting ",array)
        for(let i=1;i<val;i++){  //Line 101
            setIth(i);
            await new Promise(resolve=>changeLineColour(resolve,'101',4000));
            let key=array.at(i);         //Line 102
            setKey(key);
            changeKeyBoxColor(i);
            await new Promise(resolve=>changeLineColour(resolve,'102',4000));
            // console.log(key)
            let j=i-1;          //Line 103
            setJth(j);
            changeJcolor(j);
            await new Promise(resolve=>changeLineColour(resolve,'103',4000));
            let flag=false; //track if while loop is executed
            while(j>=0 && array.at(j)>key)     //Line 104
            {
                flag=true; //track if while loop is executed 
                setStatement(`${array[j]} is greater than key (${key}). Now shfiting needs to occur to place key ${key} at its correct position.`)
                await new Promise(resolve=>changeLineColour(resolve,'104',6000));
                setStatement('');

                array[j+1]=array.at(j);    //Line 105

                setStatement(`array[j] ${array[j]} is shifted to one index right to create space for key ${key}`)
                updateBoxes(array.map((item,index)=>{
                    console.log("Array index ",index)
                    return(<div className='inline border-2 border-slate-500 p-4 text-center self-center shadow-md z-10 rounded transition ease-in-out duration-700' key={index} id={index}>{item} </div>)
                    
                })
                )
                
                await new Promise(resolve=>changeLineColour(resolve,'105',5000));
                
               
                
                setStatement('');

                j--;        //Line 106 
                setJth(j)
                changeJcolor(j);
                await new Promise(resolve=>changeLineColour(resolve,'106',4000));
               flag=false;
            }if(!flag){
                if(j<0){
                    setStatement(`Since j ${j} is less than 0, while loop condition fails.`)

                }else
                {
                setStatement(`Since array[j] ${array[j]} is less than key ${key}, while loop condition fails.`)
                }
                await new Promise(resolve=>changeLineColour(resolve,'104',5000));
                
            }
            setStatement('')
            array[j+1]=key;     //Line 107 

            updateBoxes(array.map((item,index)=>{
                console.log("Array index ",index)
                return(<div className='inline border-2 border-slate-500 p-4 text-center self-center shadow-md z-10 rounded transition ease-in-out duration-700' key={index} id={index}>{item} </div>)
                
            })

            )
            setStatement(`Key ${key} is placed to its correct position j+1 i.e. ${j+1} `)
            
            await new Promise(resolve=>changeLineColour(resolve,'107',5000));
            
            setStatement('');
            changeTillSorted(i);
        }
        setIth(array.length)
        setStatement(`i= ${array.length},which is equal to array size. For loop condition fails.`)
        await new Promise(resolve=>changeLineColour(resolve,'101',4000));

        document.getElementById('107').style.color=null;
        document.getElementById('keyBox').style.backgroundColor=null;
        setJth();
        setKey();
        setIth();
        setStatement('Hurray! Our array is sorted now.');
        setFlag(false);//close input box
         for(let i=101;i<108;i++){
            document.getElementById(i).style.color=null;
        }
        // enable generate buttons
        enableGenerateButtons(); 
        // Enable array size  input box 
       arraySizeButton();
    }
    
  useEffect(()=>{
    if(val<=0){
        disableGenerateButtons();
        disableStartButton();
    }else{
        enableGenerateButtons();
    }
  },[val])
    
    const handleChange=(e)=>{
        
       changeVal(e.target.value);
        // console.log("value",val)
              setErrors({size:''})
    }
// Generae random numbers 
    const generateRandom=(max,min)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }
    // Reset box styles 
    const resetStyles=()=>{
        setJth();
        setIth();
        setStatement('');
        for(let i=0;i<array.length;i++){
            document.getElementById(i).style.backgroundColor=null;
            document.getElementById(i).style.color=null;

        }
    }
    
    const generateElements =()=>{
        if(val>10){
            return setErrors({size:"*Maximum allowed size is 10."})
        }
        setFlag(false);//Close input box 
        // Enable start button
        enableStartButton();        
        let array=[];
        for(let i=0;i<val;i++){
            array.push(generateRandom(10,100))
        }
         setArray(array);
        console.log("Array elements",array.at(0))
        updateBoxes(array.map((item,index)=>{
            console.log("Array index ",index)
            return(<div className='inline border-2 border-slate-500 p-4 text-center self-centern reset shadow-md z-10 rounded transition ease-in-out duration-700' key={index} id={index}>{item} </div>)
            
        })
        )
        // reset every style to default 
            resetStyles();
    }
    // function to get array elements manually 
    const  [flag,setFlag]=useState(false); // flag for input box 
    const generateInput=()=>{
        if(val>10){
           return setErrors({size:"*Maximum allowed size is 10."})
        }
          setFlag(true);
    }

    const generateManualArray=()=>{
    
     if(document.getElementById(0)!=null){
      resetStyles();
     }
       const text=manual.split(' ');
    //    console.log(text.length)
       if(text.length!=val){
        return setErrors({element:'*Incorrect number of elements.'})
       }else {
        
        setErrors({element:''});
        setArray(text);
    
        updateBoxes(array.map((item,index)=>{
            console.log("Array index ",index)
            return(<div className='inline border-2 border-slate-500 p-4 text-center self-centern reset shadow-md z-10 rounded transition ease-in-out duration-700' key={index} id={index}>{item} </div>)           
        })
        )
        if(boxes){
            enableStartButton();
        }
    }
    }
    const handleManual=(e)=>{
        setErrors({element:''});
        setManual(e.target.value);
        console.log(manual);
    }
    // set message that display on hover of submit button 
       const[info,setInfo]=useState('');
    return (
        <div className="xl:flex justify-evenly m-5">

            {/* Input box */}
            <div className="border-slate-300 border-4  p-5 w-full md:w-2/3 xl:w-1/3 relative">
                <h2 className="text-center text-2xl font-bold  text-black rounded shadow-md z-10  m-auto mb-5  w-max">Input</h2>
                
                <label htmlFor="size" className=" font-semibold tracking-wide text-xl">Array size:- </label>
                <input type="number" name="size" className="mb-12 border-2 border-slate-300 hover:bg-blue-500 hover:text-white rounded z-10 shadow-md font-semibold" id='size' value={val} onChange={handleChange} placeholder='Enter array size'></input>
                {errors.size?<div className="text-red-500 m-0 absolute top-24 left-32">{errors.size}</div>:null}
                <br></br>
                
                <div className=" ">
                    <div>
                <button className="lg:p-2 sm:p-1 sm:text-sm lg:first-letter lg:text-base  bg-gradient-to-r from-sky-500 to-indigo-500 text-white m-2 lg:m-1 rounded btns  md:absolute sm:static    left-0 shadow-md z-10"  onClick={generateElements} >Random elements.</button></div>
                <div>
                <button className="lg:p-2 sm:p-1 sm:text-sm lg:text-base bg-gradient-to-r from-sky-500 to-indigo-500 text-white lg:m-2 sm:m-1 rounded btns   md:absolute sm:static right-0 space-x-1 shadow-md z-10" onClick={generateInput}>Enter elements manually</button></div>
                </div>

                <button className="p-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white m-2 rounded btns absolute bottom-0 right-0 shadow-md z-10" onClick={algorithm}>Start.</button><br/>
               {flag?<div className="w-full absolute top-48 left-auto"><input type='text' placeholder="White space between elements" className="rounded border-2 border-black w-64 shadow-md z-10" id='manual' value={manual} onChange={handleManual}></input>
               <div className="inline-block group"><button type="submit" className="p-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white m-2 rounded shadow-md z-10 " id='submit' onClick={generateManualArray}>Submit</button><p className='absolute top-2 left-auto -right-1  bg-white text-black p-0 z-10 group-hover:visible invisible text-sm'>Double Click</p></div>
               {errors.element?<div className="text-red-500 m-0 absolute top-9">{errors.element}</div>:null}</div>:null}
               <Link to='/Experiment/InsertionSort/Simulation/Test'><button className="p-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white m-2 rounded absolute left-0 bottom-0 shadow-md z-10">Try Yourself</button></Link>
            </div>

                {/* Code Box */}
                
            <div className="border-slate-300 border-4 p-5 w-full md:w-2/3 xl:w-1/3">
                <h2 className="text-center font-bold text-2xl   text-black rounded shadow-md z-10  m-auto mb-5 w-max">Code</h2>
                <div className="font-bold -tracking-wider text-xl ">
               <p id='101'>for(i=1;i&lt;{array.length};i++)</p>
               <p id='102' className="pl-5 mt-2">key = array[i]</p>
               <p id='103' className="pl-5 mt-2">j= i-1 </p>
               <p id='104' className="pl-5 mt-2reset">while(j&gt;=0 && array[j]&gt;key)</p>
               <p id='105' className="pl-12 mt-2">array[j+1]=array[j]</p>
               <p id='106' className="pl-12 mt-2">j--</p>
               <p id='107' className="pl-5 mt-2">array[j+1]=key</p>

            </div>
            </div>

            {/* Output Box  */}
            <div className="border-slate-300 border-4  p-5 xl:w-2/3 md:w-2/3 w-full text-center">
                <h2 className="text-center font-bold text-2xl  text-black rounded shadow-md z-10  m-auto mb-5 w-max">Output</h2>
                <div className="mt-5">{boxes}</div>
                {boxes ?
                <div className="mt-4">
                <div className="font-bold text-xl border-2 border-black mt-4 inline-block p-2" >I={ith}</div>
                 
                <div className="font-bold text-xl border-2 border-black mt-4 inline-block p-2" >J={jth}</div>

                <div className="font-bold text-xl border-2 border-black mt-4 inline-block p-2" id="keyBox">Key={key}</div>
                <div className="mt-10"><p className="text-red-500 text-lg font-semibold">{statement}</p></div></div>:<h2 className="font-bold xl:text-xl tracking-wide">Please enter array size and click RandomElements.</h2>}
            </div>
        </div>
    );
}
export default Simulation;