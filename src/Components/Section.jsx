import { useState } from "react";
import axios from 'axios';
export default function Section() {
  const [url,setUrl]=useState("");
  const [btnValue,setBtnValue]=useState("Minify URL")

  const handleInputChange = (e) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    if (newUrl === "") {
      setBtnValue("Minify URL");
    }
  };

  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(url==""){
      alert("Please enter your link");
    }
    const response=await axios.post("https://ez-shortner-api.vercel.app",{
      originalUrl:url
    })
    const shortUrl= await response.data.shortUrl;
    setUrl(shortUrl);
    setBtnValue("Copy URL")

  }
  return (
    <div className="Section w-full flex flex-col justify-center items-center pt-[20px] gap-[50px] max-md:pt-[30px] max-md:gap-[30px]">
        <h3 className="text-[5rem]  font-[900] max-w-[800px]  text-[#EB6440] max-md:text-[3.5rem] ">minify.</h3>
        <div className="container flex flex-col justify-center items-center bg-[#132B63] rounded-md w-[800px]  px-[20px] py-[40px] gap-[30px] max-md:w-[300px] max-md:p-[20px] max-md:gap-[20px]">
            <h3 className="text-[1.8rem]  font-[900] max-w-[800px] max-md:text-[1rem] max-md:font-[500]">Paste the URL to be shortened</h3>
            <form onSubmit={handleSubmit} className="input-box flex  items-center  bg-[#F6F5E3]  rounded-md  h-[57px] ">
                <input type="text" placeholder="Enter the link here" value={url} onChange={handleInputChange} className="w-[500px] h-[55px]   rounded-md outline-0 bg-[#F6F5E3] placeholder:text-[#AAA797] px-[10px] text-[1.2rem] text-[black]  max-md:w-[180px] " />
                <button  className="bg-[#EB6440] text-[#551F13] px-[20px] py-[14.3px] rounded-md  rounded-l-[0px] text-[1.2rem] font-[800] hover:bg-[#fa582b]  max-md:px-[10px] max-md:py-[7px] max-md:text-[0.9rem] " >{btnValue}</button>
            </form>
        </div>
    </div>
  );
}