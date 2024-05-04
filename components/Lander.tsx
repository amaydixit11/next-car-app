import Image from "next/image";
import CustomButton from "./CustomButton";

const Lander = () => {
  function handleScroll(){
    
  }
  return (
    <div className = "lander flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className = "flex-1 pt-36 padding-x">
        <h1 className = "title 2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Buy or Rent a Book - quickly and easily!
        </h1>
        <p className = "subtitle text-[27px] text-black-100 font-light mt-5">
          Make your home a library with our lightning fast deliveries!
        </p>
      </div>
      <CustomButton 
        title = "See Available Books"
        containerStyles = "bg-primary-blue text-white rounded-full mt-10"
        handleClick = {handleScroll}
      />

    </div>
  )
}

export default Lander