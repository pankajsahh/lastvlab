import img2 from './img2.png'
const TargetAudience=()=>{
    return (
        <div className="">
                        <h1 className="text-3xl font-semibold  text-center mt-5 text-red-500 ">Virtual Lab On Sorting Algorithm</h1>

        <div className="flex justify-center items-center mt-5">

        <ul className="text-2xl font-semibold list-disc">
        <li>UG
            <ul className="list-disc list-inside">
                <li>B. Tech/ B.E/ B.sc in Computer Science <br></br> Engineering /Information Technology</li>
            </ul>
        </li>
        <li>PG
            <ul className="list-disc list-inside">
                <li>
                    MS/Ph. D. Beginners in Computer Science <br></br> Enginerring/Information Technology
                </li>
            </ul>
        </li>
        </ul>
        <img src={img2} alt="hello" className='w-48 ml-11'></img>
        </div>
        </div>
    );
}
export default TargetAudience;