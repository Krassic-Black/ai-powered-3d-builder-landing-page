import alcosLogo from "../../../assets/images/logo-alcos.svg";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

interface NavItems {
  name: string;
  href: string;
}

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!isOpen);
  };

  const navItems: NavItems[] = [
    { name: "Home", href: "/home" },
    { name: "Product", href: "/product" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Company", href: "/company" },
  ];

  // prevent scroll when nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-5 px-4 sm:px-40 w-full z-50">
      {/* Blobs */}
      <div className="top-right-blob absolute top-0 left-5 md:left-50 md:s size-10 md:size-15 bg-tr-blob-bg md:blur-none blur-3xl -z-10" />

      <div className="top-right-blob absolute top-0 left-5 md:left-0 md:s size-10 md:size-30 bg-tr-blob-bg blur-[120px] -z-10 md:rounded-full hidden md:block" />

      <div className="blob-2 absolute -top-2 md:-top-50 left-35 md:left-135 size-15 md:size-60 bg-tm-blob-bg blur-2xl md:blur-2xl  -z-10 md:rounded-full md:hidden" />

      <div className="blob-3 absolute top-0 right-10 md:right-50 size-9 bg-tl-blob-bg -z-20" />
      {/* Header container */}
      <div className="header-container flex justify-between items-center py-2.5 sm:px-5 sm:py-1.5 bg-header-bg border border-header-border rounded-full mt-5 backdrop-blur-3xl">
        {/* Logo */}
        <div className="logo-container flex items-center size-10 sm:size-12">
          <img className="h-full w-full" src={alcosLogo} alt="Alcos Logo" />
          <p className="text-primary font-medium sm:font-bold">
            Alc<span className="uppercase">os</span>
          </p>
        </div>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-4">
          {navItems.map((navItem, index) => (
            <a
              href={navItem.href}
              key={index}
              className="font-medium text-primary text-sm"
            >
              {navItem.name}
            </a>
          ))}
        </nav>

        {/* Menu Icon for Mobile */}
        <div
          className="menu-icon sm:hidden border border-gray-400 font-bold rounded-[4px] mr-3 z-50"
          onClick={handleMenuClick}
        >
          {!isOpen ? (
            <FaBars className="text-primary p-0.5" size={24} />
          ) : (
            <IoClose className="text-primary p-0.5" size={24} />
          )}
        </div>
      </div>

      {/* Mobile nav menu (separate from header flow) */}
      <div
        className={`sm:hidden fixed mt-2.5 top-18 right-0 h-screen w-2/3 bg-nav-bg backdrop-blur-2xl transform transition-transform z-40 ${
          isOpen ? "translate-x-0" : "translate-x-120"
        }`}
      >
        <nav className="flex flex-col gap-4 px-5 pt-1.5">
          {navItems.map((navItem, index) => (
            <a
              href={navItem.href}
              key={index}
              className="font-medium text-primary text-sm"
            >
              {navItem.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
