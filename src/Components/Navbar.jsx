import minify from '../assets/minify.png'
export default function Navbar() {
  return (
    <div className="Navbar w-full h-[100px] flex justify-between items-center px-[30px]       ">
        <img src={minify} className='w-[100px] max-md:w-[80px]'  />
        <button className='bg-[#132B63] px-[20px] py-[15px] rounded-md text-[1.2rem] font-[600] max-md:px-[10px] max-md:py-[5px] '>Try Now !</button>
    </div>
  );
}