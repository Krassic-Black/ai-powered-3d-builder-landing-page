import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*Local imports*/

/*Images*/
import humanoid from "../../../assets/images/pikaso_texttoimage_35mm-film-photography-photo-a-futuristic-neon-ligh 3.svg";
import logoAsana from "../../../assets/images/logo-asana.svg";
import logoGumroad from "../../../assets/images/logo-gumroad.svg";
import logoHubspot from "../../../assets/images/logo-hubspot.svg";
import logoMailchimp from "../../../assets/images/logo-mailchimp.svg";
import logoStripe from "../../../assets/images/logo-stripe.svg";
import logoWebflow from "../../../assets/images/logo-webflow.svg";

import { MdNavigateNext } from "react-icons/md";

const Hero = () => {
  const settings = {
    dots: true,
    slidesToShow: 6,
    infinite: true,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  const images = [
    {
      img: logoAsana,
    },
    {
      img: logoGumroad,
    },
    {
      img: logoHubspot,
    },
    {
      img: logoMailchimp,
    },
    {
      img: logoStripe,
    },
    {
      img: logoWebflow,
    },
  ];
  return (
    <section className="px-4 sm:px-40 w-full relative z-20">
      {/* <div className="bottom-blob absolute w-[150px] h-[300px] rounded-full  bg-b-blob-bg top-40 z-10" /> */}

      <div className="hero-container grid md:grid-cols-2 md:mt-16">
        {/* grid-el-one */}
        <div className="hero-text order-2 md:order-1 col-span-1">
          <p className="w-fit bg-text-bg text-secondary text-xs sm:text-base py-1.5 px-2.5 sm:py-2.5 sm:px-3.5 rounded-4xl border-t border-header-border font-normal">
            Lightning-fast, low-cost, easy.
          </p>

          {/* Background 1 */}
          <h2 className="text-primary text-4xl md:text-7xl font-medium my-2.5 sm:my-5">
            Your AI-Powered 3D Builder
          </h2>

          <p className=" text-secondary text-sm sm:text-base py-1.5 sm:py-2.5 rounded-4xl font-normal">
            Create stunning 3D assets effortlessly. No coding required.
          </p>

          <div className="actiob-btns text-primary font-semibold flex flex-col sm:flex-row items-center gap-5">
            <button className="flex items-center gap-1.5 sm:gap-2.5 bg-text-bg text-sm sm:text-base py-1.5 px-2.5 sm:py-2.5 sm:px-3.5 rounded-4xl border-t border-[#96519F] transition-all duration-300 hover:shadow-[0_4px_10px_rgba(218,38,222,0.22)] cursor-pointer">
              Start creating 3D
              <MdNavigateNext size={18} />
            </button>
            <button
              className=" hover:text-gray-400 transition-all 
            flex items-center gap-1.5 sm:gap-2.5 text-sm sm:text-base py-1.5 px-2.5 sm:py-2.5 sm:px-3.5 rounded-4xl duration-300 cursor-pointer
            "
            >
              Guide
              <MdNavigateNext size={18} />
            </button>
          </div>
        </div>
        {/* grid-el-two */}
        <div className="hero-image order-1 md:order-2 col-span-1 relative z-20 mb-2.5 sm:mb-0 ">
          <img
            className="w-full h-full object-cover pointer-events-none drop-shadow-2xl"
            src={humanoid}
            alt="Humanoid"
          />

          <p className="absolute md:top-45 top-25 md:left-25 left-3 z-30 bg-[rgba(144, 128, 146, 0.15)] border border-[rgba(144,128,146,0.5)] backdrop-blur-[10px] text-primary text-xs sm:text-sm font-medium px-4 py-1.5 rounded-lg md:rounded-xl">
            No GPU needed
          </p>
          <p className="absolute md:bottom-30 bottom-12 md:right-8 right-0 z-30 bg-[rgba(144, 128, 146, 0.15)] border border-[rgba(144,128,146,0.5)] backdrop-blur-[10px] text-primary text-xs sm:text-sm font-medium px-4 py-1.5 rounded-lg md:rounded-xl">
            Up to 12 images per session
          </p>
          <p className="absolute md:bottom-13 bottom-2 md:left-22 left-0 z-30 bg-[rgba(144, 128, 146, 0.15)] border border-[rgba(144,128,146,0.5)] backdrop-blur-[10px] text-primary text-xs sm:text-sm font-medium px-4 py-1.5 rounded-lg md:rounded-xl">
            Super low-cost &#x28; &#x3c;&#xFF04;0.5&#x2215;image&#x29;
          </p>

          {/* Blob */}
          <div className="blobb bottom-blob absolute size-40  md:size-60 rounded-full bg-b-blob-bg blur-3xl -bottom-2 right-10 md:right-50 -z-10" />
        </div>
      </div>
      {/* Partners and sponsers */}
      <div className="border border-[#0F141C] rounded-lg my-2.5 md:my-0 backdrop-blur-2xl relative z-20">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div className="" key={index}>
              <div className="flex justify-center sm:py-2.5 backdrop-blur-2xl">
                <img src={img.img} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
