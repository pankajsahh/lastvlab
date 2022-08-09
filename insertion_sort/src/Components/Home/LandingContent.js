import img1 from './img1.png';
const LandingContent =()=>{
    return (
        <div className=' fixed h-3/5'>
        <div className='sm:flex justify-around pb-'>
        <div className='sm:m-10 sm:p-5 text-center mt-2 '>
            <h2 className='font-rubik text-center px-7 pt-2 sm:text-3xl lg:p-7 tracking-wider '>Welcome to <span className='text-blue-500'>Vlab</span></h2>
            <small className=' sm:text-xl text-sm text-left'>Virtual Labs project is an initiative of Ministry of Human Resource Development (MHRD), Government of India under the aegis of National Mission on Education through Information and Communication Technology (NMEICT). This project is a consortium activity of twelve participating institutes and IIT Delhi is coordinating institute.This virtual lab deals with data structures algorithms.</small>
            </div>
            <img src={img1}   className="h-52 lg:h-fit" alt="Vlab"></img></div>
            </div>
    );
}
export default LandingContent;