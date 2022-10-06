import img2 from './img2.png'
const TargetAudience=()=>{
    return (
        <div className="">
                        <h1 className="md:text-3xl text-xl font-rubik  text-center mt-5 text-slate-500  ">Virtual Lab On Sorting Algorithm</h1>

        <div className="flex justify-center items-center p-5 md:p-5 md:ml-2">

        <ul className="pl-5 text-xs md:text-2xl font-medium md:font-semibold list-disc text-slate-600">
        <li >UG
            <ul className="list-disc list-inside ">
                <li>B. Tech/ B.E/ B.Sc in Computer Science <br></br> Engineering /Information Technology.</li>
            </ul>
        </li>
        <li>PG
            <ul className="list-disc list-inside">
                <li>
                    M.Sc/Ph. D. Beginners in Computer Science <br></br> Enginerring/Information Technology.
                </li>
            </ul>
        </li>
        </ul>
        <img src={img2} alt="hello" className='md:w-48 w-24 sm:w-32 ml-11'></img>
        </div>
        </div>
    );
}
export default TargetAudience;