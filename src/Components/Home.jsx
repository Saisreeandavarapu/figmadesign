import { memo } from 'react';
import Hero from './Hero';
import Heading from './Heading';
import Services from './Services';
import {  } from 'lucide-react';

const Home = () => {
  return (
    <div>
    <Hero/>
    <Heading name="OUR SERVICES"/>
    <Services/>
     <Heading name="SUCCESS GROWTH"/>
     <section className='w-full  bg-white sm:h-auto h-auto '>
        <div className='grid lg:grid-cols-5 pt-10 sm:grid-cols-1 p-20'>
        <div className='w-[250px] h-[250px] rounded-full bg-[linear-gradient(180deg,#3490DA_0%,#1C4D74_100%)] relative m-10 '>
        <img src="image copy 7.png" alt="" className='w-[74px] h-[76px] absolute top-15 left-24'/>
        <div className='text-white font-semibold text-xl  absolute top-35 left-20'>
            20+ <br />
            PROJECTS
        </div>
        </div>
         <div className='w-[250px] h-[250px] rounded-full bg-[linear-gradient(180deg,#3490DA_0%,#1C4D74_100%)] relative m-10'>
        <img src="image copy 9.png" alt="" className='w-[74px] h-[76px] absolute top-15 left-24'/>
        <div className='text-white font-semibold text-xl  absolute top-35 left-18'>
           100+ <br />GROWTH RATIO
        </div>
        </div>
         <div className='w-[250px] h-[250px] rounded-full bg-[linear-gradient(180deg,#3490DA_0%,#1C4D74_100%)] relative m-10'>
        <img src="image copy 10.png" alt="" className='w-[74px] h-[76px] absolute top-15 left-24'/>
        <div className='text-white font-semibold text-xl  absolute top-35 left-18'>
            200+ <br />HAPPY CLIENTS
        </div>
        </div>
         <div className='w-[250px] h-[250px] rounded-full bg-[linear-gradient(180deg,#3490DA_0%,#1C4D74_100%)] relative m-10'>
        <img src="image copy 11.png" alt="" className='w-[74px] h-[76px] absolute top-15 left-24'/>
        <div className='text-white font-semibold text-xl  absolute top-40 left-12'>
           ON TIME
DELIVERY
        </div>
        </div>
         <div className='w-[250px] h-[250px] rounded-full bg-[linear-gradient(180deg,#3490DA_0%,#1C4D74_100%)] relative m-10'>
        <img src="image copy 12.png" alt="" className='w-[74px] h-[76px] absolute top-15 left-24'/>
        <div className='text-white font-semibold text-xl  absolute top-40 left-18'>
            HIGH
QUALITY
        </div>
        </div>
        </div>
     </section>
    <Heading name="EXPERTISE PROJECTS"/>
    <section className='w-full h-auto bg-white lg:flex lg:justify-around grid sm:grid-cols-1'>
          <img src="image copy 6.png" alt="" className='w-[626px] h-[418px]  p-10' />
     <img src="image copy 8.png" alt="" className='w-[626px] h-[418px]  p-10' />
    </section>
   <Heading name="GET A QUOTE"/>
   <section className='w-full h-auto xl:flex xl:justify-around xl:items-center sm:grid sm:grid-cols-1'>
    <div>
    <div className='xl:text-4xl text-center sm:text-xl md:text-2xl lg:text-4xl mt-10'>
        We are expert in this field <br />
since almost 10 years.

    </div>
    <div className='xl:flex xl:justify-around xl:gap-10 mt-5 sm:grid sm:grid-cols-1'>
        <img src="image copy 13.png" alt="" className='w-[316px] h-[163px] m-10' />
         <img src="image copy 14.png" alt="" className='w-[316px] h-[163px] m-10' />
        
    </div>
    <div className='xl:flex xl:justify-around xl:gap-10 mt-5 sm:grid sm:grid-cols-1'>
        <img src="image copy 15.png" alt="" className='w-[316px] h-[163px] m-10' />
         <img src="image copy 16.png" alt="" className='w-[316px] h-[163px] m-10' />
        
    </div>
    </div>
    <div className='w-[500px] h-[440px] bg-[#2C4D60] p-15 rounded-2xl text-center '>
        <div className='flex gap-2 '>
            <input type="text" placeholder='First Name' className='border-2 border-[#d9d9d9] text-[#d9d9d9] w-full h-10 px-5 rounded-md' />
             <input type="text" placeholder='Last Name' className='border-2 border-[#d9d9d9] text-[#d9d9d9] w-full h-10 px-5 rounded-md' />
        </div>
         <div className='flex gap-2 mt-5'>
            <input type="text" placeholder='Contact no' className='border-2 border-[#d9d9d9] text-[#d9d9d9] w-full h-10 px-5 rounded-md' />
             <input type="text" placeholder='Email ID' className='border-2 border-[#d9d9d9] text-[#d9d9d9] w-full h-10 px-5 rounded-md' />
        </div>
        <div className='mt-5'>
            <textarea name="" id="" placeholder='Message' className='border-2 border-[#d9d9d9] text-[#d9d9d9] w-full h-24 px-5 rounded-md'></textarea>
        </div>
        <button className='bg-[#3490DA] text-white w-[118px] h-[51px] rounded-md mt-10'>Submit</button>
    </div>
   </section>
   <Heading name="OUR HAPPY CLIENTS"/>
   <section className='w-full h-[500px] bg-white'>
    <img src="image copy 17.png" alt="" className='pt-20'/>
    </section> 
    </div>
  );
};

export default memo(Home);