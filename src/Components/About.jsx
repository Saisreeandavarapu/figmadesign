import { memo } from 'react';
import Heading from './Heading';

const About = () => {
  return (
    <div>
     <Heading name="ABOUT US"/>
     <section className="bg-[url('/image-copy-18.png')] w-full h-auto bg-cover bg-center">
        <div className='text-[#2c4d60] lg:text-6xl font-bold text-center pt-20 '>Building Excellence for Over a Decade</div>
        <div className='text-lg  leading-8 xl:text-5xl tracking-wider xl:leading-18 p-10  text-justify'>we are more than just a construction company;
          
             we are builders of dreams, architects of innovation,
              and creators of lasting impressions. With a rich legacy
               spanning 10 years, we have established ourselves as a trusted 
               name in the construction industry.</div>
     </section>
     <Heading name="OUR PROMISE"/>
     <section className='bg-[url("image2.png")] w-full h-auto bg-cover bg-center'>
   <div className='xl:flex xl:justify-around items-center pt-20 grid sm:grid-cols-1'>
    <div className='w-[310px] h-[427px] border-[1px] rounded-xl shadow-2xl border-gray-400 bg-white m-20'>
            <img src="image copy 18.png" alt="" />
            <div className='bg-[#def1ff] text-center font-medium text-lg p-1'>
                Quality
            </div>
            <div className='text-center pt-5'>
                We never compromise on quality. 
                Our work speaks for itself, 
                showcasing the highest standards
                 in craftsmanship.    
            </div>
            
        </div>
        <div className='xl:flex xl:flex-col  xl:gap-40'>
        <div className='w-[310px] h-[427px] border-[1px] rounded-xl border-gray-400 bg-white m-20'>
            <img src="image copy 19.png" alt="" />
            <div className='bg-[#def1ff] text-center font-medium text-lg p-1'>
                Safety
            </div>
            <div className='text-center pt-5'>
                We never compromise on quality. Our work speaks for itself, showcasing the highest standards in craftsmanship.   
            </div>
            
        </div>
        <div className='w-[310px] h-[427px] border-[1px] rounded-xl border-gray-400 bg-white shadow-2xl  m-20 mt-40'>
            <img src="image copy 20.png" alt="" />
            <div className='bg-[#def1ff] text-center font-medium text-lg p-1'>
                Innovation
            </div>
            <div className='text-center pt-5'>
                We embrace innovation and constantly seek better, more efficient ways to build.   
            </div>
            
        </div>
        </div>
         <div className='w-[310px] h-[427px] border-[1px] rounded-xl border-gray-400 bg-white shadow-2xl m-20'>
            <img src="image copy 21.png" alt="" />
            <div className='bg-[#def1ff] text-center font-medium text-lg p-1'>
                Customer-Centric Aproach
            </div>
            <div className='text-center pt-5'>
              Our clients are at the heart of everything we do. We listen, collaborate, and deliver on promises. 
            </div>
            
        </div>
   </div>
     </section>
     <Heading name="OUR TEAM"/>
     <section className='bg-white'>
      <div className=' w-full h-auto bg-[url("/image3.png")] bg-center bg-cover'>
      <div className='xl:flex xl:justify-around pt-15 '>
      <div className='relative p-10'>
        <img src="/image copy 22.png" alt="" className='w-[500px] h-[500px] '/>
        <div className='w-[354px] h-[87px] bg-[#004d59] rounded-md absolute top-113 left-25 text-center'>
         <div className='text-white font-bold text-4xl'>Andrew J</div> 
         <div className='text-white text-2xl'>Managing Director</div>
        </div>
      </div>
      <div className='relative p-10'>
        <img src="/image copy 22.png" alt="" className='w-[500px] h-[500px] '/>
        <div className='w-[354px] h-[87px] bg-[#004d59] rounded-md absolute top-113 left-25 text-center'>
         <div className='text-white font-bold text-4xl'>Andrew J</div> 
         <div className='text-white text-2xl'>Managing Director</div>
        </div>
      </div>
      </div>
      <div className='text-center xl:ps-75 xl:p-60 xl:pt-10 xl:pb-0 pb-10'>
      <div className='text-white xl:text-3xl xl:leading-10 xl:tracking-wider '>wish you success in your journey toward finding your perfect property. Whether you’re looking for your dream home, a solid investment, or a space to grow your business, </div>
<div className='text-white xl:text-3xl font-bold xl:leading-20 xl:tracking-wider '>we are here to support you every step of the way.</div>
<div className='text-white xl:text-3xl xl:leading-10 xl:tracking-wider '>Your trust is our greatest asset, and we are committed to delivering excellence in service, transparency, and the expertise needed to help you make the best decisions. We look forward to being part of your real estate journey!</div>
</div>
      </div>

     </section>
    </div>
  );
};

export default memo(About);