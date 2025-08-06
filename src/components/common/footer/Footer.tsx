import alcosLogo from "../../../assets/images/logo-alcos.svg";
const Footer = () => {
  const currDate = new Date().getFullYear();
  return (
    <footer className="w-full mt-20">
      <div className="border-t border-[#0F141C] px-4 sm:px-40 py-5">
        <h2 className="text-primary text-xl font-bold">
          AI-Powered 3D Builder
        </h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between items-start">
          {/* Logo */}
          <div className="logo-container flex items-center size-10 sm:size-12 my-2.5 md:my-auto">
            <img className="h-full w-full" src={alcosLogo} alt="Alcos Logo" />
            <p className="text-primary font-medium sm:font-bold">
              Alc<span className="uppercase">os</span>
            </p>
          </div>
          <p className="text-secondary py-2.5">
            Design by <span className="text-primary">Wahib Irawan</span> from
            Figma community file.{" "}
          </p>
          <a
            href="https://www.linkedin.com/in/techwithulunji"
            target="_blank"
            className="text-secondary"
          >
            &copy; {currDate}-
            <span className="text-blue-400">techwithulunji</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
