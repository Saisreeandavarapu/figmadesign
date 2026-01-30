import { memo } from 'react';
import Heading from './Heading';

const Projects = () => {
  return (
    <div>
     <Heading name="PROJECTS"/>
     <section className='bg-[url("/image4.png")] bg-center bg-cover w-full h-[540px]'>
        <div className='text-8xl text-white/80 text-center pt-28'>
            "Your satisfaction drives us; <br />
we build relationships as we build structures."
        </div>
     </section>
     <Heading name="OUR CURRENT PROJECTS"/>
     <section className='bg-white flex justify-evenly w-full h-[550px] pt-20'>
         <div className='w-[300px] h-[450px] relative'>
            <img src="/image copy 23.png" alt="" />
            <div className='border-[1px] text-center  text-3xl h-13 text-[#2C4D60] rounded-md mt-5 p-1'>
                Book Your Flat
            </div>
            <div className='text-center pt-5 text-2xl'>
                Achuthapuram,<br />
                CBM Compound    <br />
                <div className='text-center text-3xl mt-5'>VSKP</div>
            </div>
           
        </div>
         <div className='w-[300px] h-[450px] relative'>
            <img src="/image copy 24.png" alt="" />
            <div className='border-[1px] text-center  text-3xl h-13 text-[#2C4D60] rounded-md mt-5 p-1'>
                Book Your Flat
            </div>
            <div className='text-center pt-5 text-2xl'>
                Achuthapuram,<br />
                CBM Compound    <br />
                <div className='text-center text-3xl mt-5'>VSKP</div>
            </div>
           
        </div>
         <div className='w-[300px] h-[450px] relative'>
            <img src="/image copy 25.png" alt="" />
            <div className='border-[1px] text-center  text-3xl h-13 text-[#2C4D60] rounded-md mt-5 p-1'>
                Book Your Flat
            </div>
            <div className='text-center pt-5 text-2xl'>
                Achuthapuram,<br />
                CBM Compound    <br />
                <div className='text-center text-3xl mt-5'>VSKP</div>
            </div>
           
        </div>
         <div className='w-[300px] h-[450px] relative'>
            <img src="/image copy 26.png" alt="" />
            <div className='border-[1px] text-center  text-3xl h-13 text-[#2C4D60] rounded-md mt-5 p-1'>
                Book Your Flat
            </div>
            <div className='text-center pt-5 text-2xl'>
                Achuthapuram,<br />
                CBM Compound    <br />
                <div className='text-center text-3xl mt-5'>VSKP</div>
            </div>
           
        </div>
     </section>
     <section className='ps-70'>
        <div className='text-center max-w-3/4 mt-20'>
            <span className='text-[#04315A] text-4xl font-semibold border-b-2'>Our Journey</span>
            <div className='text-lg text-[#04315A] mt-10'>
                Our journey began a decade ago with a vision to redefine construction practices and set new benchmarks for quality, efficiency, and sustainability. Over the years, we have evolved, adapted, and grown, always striving to exceed expectations.
            </div>
        </div>
         <div className='text-center max-w-3/4 mt-10'>
            <span className='text-[#04315A] text-4xl font-semibold border-b-2'>Our Expertise</span>
            <div className='text-lg text-[#04315A] mt-10 '>
                Nithish Infracon specializes in taking on a wide spectrum of construction projects. Whether it's residential, commercial, industrial, or infrastructure development, we have the expertise, resources, and commitment to deliver excellence. Our team of seasoned professionals brings a wealth of knowledge and experience to every project, ensuring precision and perfection in every detail.
            </div>
        </div>
         <div className='text-center max-w-3/4 mt-10'>
            <span className='text-[#04315A] text-4xl font-semibold border-b-2'>What Sets Us Apart</span>
            <div className='text-lg text-[#04315A] mt-10 '>
                At Nithish Infracon, we believe that what sets us apart is our unwavering commitment to quality, safety, and customer satisfaction. We understand that every project is a partnership, and we work closely with our clients to bring their visions to life. Our dedication to using cutting-edge technology and sustainable construction practices not only ensures the longevity of our structures but also minimizes our environmental footprint.
            </div>
        </div>
        <div className='text-center max-w-3/4 mt-10'>
            <span className='text-[#04315A] text-4xl font-semibold border-b-2'>Our Promise</span>
            <div className='text-lg text-[#04315A] mt-10 '>
              <ul className='list-disc'>
                <li ><span className='font-bold'>Quality:</span> We never compromise on quality. Our work speaks for itself, showcasing the highest standards in craftsmanship.</li>
                 <li ><span className='font-bold'>Safety:</span> Safety is paramount. We are committed to creating a secure work environment for our team and stakeholders.</li>
                  <li ><span className='font-bold'>Customer-Centric Approach:</span>  Our clients are at the heart of everything we do. We listen, collaborate, and deliver on promises.</li>
                   <li ><span className='font-bold'>Innovation:</span>  We embrace innovation and constantly seek better, more efficient ways to build.</li>
              </ul>
            </div>
        </div>
        <div className='text-center max-w-3/4 mt-10'>
            <span className='text-[#04315A] text-4xl font-semibold border-b-2'>Our Future</span>
            <div className='text-lg text-[#04315A] mt-10'>
                As we move forward, our commitment to excellence remains steadfast. We look to the future with optimism and determination, ready to take on new challenges and continue building a better world.
            </div>
        </div>
        <div className='text-4xl font-semibold  text-[#04315A] pr-60 pt-10 text-center leading-12'>
            Join us on our journey to build the future, one project at a time.
Thank you for considering Nithish Infracon Pvt Ltd for your construction needs.
        </div>
     </section>
     <Heading name="OUR UPCOMING PROJECTS"/>
     <section className='bg-white'>
        <div className='bg-[url("/image5.png")] bg-cover bg-center w-full h-screen flex justify-around mt-15'>
            <img src="/image copy 27.png" alt="" className='w-[626px] h-[358px] rounded-sm mt-20' />
       <img src="/image copy 28.png" alt="" className='w-[626px] h-[358px] rounded-sm mt-90 ' />
        </div>

     </section>
    </div>
  );
};

export default memo(Projects);