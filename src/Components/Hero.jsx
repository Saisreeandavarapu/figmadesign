import { memo } from "react";

const Hero = () => {
  return (
    <section className="relative max-w-full sm:w-full  min-h-screen bg-[url('/image1.png')] bg-cover bg-center">
      
      
      <div className="absolute inset-0 bg-black/50" />

      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <h1 className="text-white font-semibold text-center leading-tight
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Where your dream home becomes <br className="hidden sm:block" />
          our blueprint for success.
        </h1>
      </div>

     
      <img
        src="/image copy 34.png"
        alt=""
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[400px]"
      />
    </section>
  );
};

export default memo(Hero);
