import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 pt-14 lg:py-24 lg:pt-20">
      <div className="container text-white">
        <div className="bg-black p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8 md:gap-16">

          <div>
            <h2 className="sm:text-center md:text-left font-serif text-2xl md:text-3xl">Let's create a contact</h2>

            <p className="sm:text-center md:text-left text-sm md:text-base mt-5">
              Ready to bring your next project to life ?
              Let's connect and discuss your next project.
              How I can help you achieve your goals.
            </p>
          </div>

          <div>
            <button className="bg-slate-100 text-black p-3 inline-flex items-center rounded-lg w-max gap-2 hover:animate-button-hover">
              <span className="font-semibold">
                Contact Me
              </span>

              <ArrowUpRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
