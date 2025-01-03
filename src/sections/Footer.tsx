import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="py-6 border-t border-black/20 flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div>
            <p className="text-sm">
              &copy; {year}. All Rights reserverd.
            </p>
          </div>

          <nav className="flex flex-col gap-6 md:flex-row">
            <a href="https://www.linkedin.com/in/yan-cerqueira/" target="_blank" className=" text-black inline-flex items-center gap-2 hover:animate-button-hover">
              <span className="font-semibold">
                Linkedin
              </span>

              <ArrowUpRightIcon />
            </a>

            <a href="https://github.com/yansilvacerqueira" target="_blank" className="text-black inline-flex items-center gap-2 hover:animate-button-hover">
              <span className="font-semibold">
                Github
              </span>

              <ArrowUpRightIcon />
            </a>
          </nav>

        </div>
      </div>
    </footer>
  );
};
