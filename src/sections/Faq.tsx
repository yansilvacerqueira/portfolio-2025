import { Accordion } from "@/components/Accordion"

export const FaqSection = () => {
  return (
    <section id="faq" className=" pb-16 lg:py-24">
      <div className="container">
        <p className="uppercase font-semibold  tracking-widest bg-gradient-to-r from-gray-600 to-gray-800  text-transparent bg-clip-text text-center">
          some doubts
        </p>

        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          Frequently Questions
        </h2>

        <p className="text-center text-gray-500 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
          Your answers here.
        </p>

        <div className="flex justify-center mt-10">
          <Accordion />
        </div>

        <div className="flex justify-center mt-20">
          <button className='inline-flex items-center justify-center  gap-2  bg-black  text-white  px-6 h-12 rounded-xl hover:animate-button-hover'>
            <span className='animate-hand-wave'>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};
