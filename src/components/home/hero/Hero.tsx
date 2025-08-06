import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import { MdNavigateNext } from "react-icons/md";

/*Images*/
import humanoid from "../../../assets/images/pikaso_texttoimage_35mm-film-photography-photo-a-futuristic-neon-ligh 3.svg";
import logoAsana from "../../../assets/images/logo-asana.svg";
import logoGumroad from "../../../assets/images/logo-gumroad.svg";
import logoHubspot from "../../../assets/images/logo-hubspot.svg";
import logoMailchimp from "../../../assets/images/logo-mailchimp.svg";
import logoStripe from "../../../assets/images/logo-stripe.svg";
import logoWebflow from "../../../assets/images/logo-webflow.svg";

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
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const images = [
    { img: logoAsana },
    { img: logoGumroad },
    { img: logoHubspot },
    { img: logoMailchimp },
    { img: logoStripe },
    { img: logoWebflow },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const badgeVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.2,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    }),
    hover: {
      y: -3,
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.8, duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(218,38,222,0.3)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const secondaryButtonVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.9, duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const blobVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1.5,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const sliderItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2 + i * 0.1,
        duration: 0.5,
      },
    }),
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      className="px-4 sm:px-40 w-full relative z-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="hero-container grid md:grid-cols-2 mt-16">
        {/* Text Content */}
        <motion.div
          className="hero-text order-2 md:order-1 col-span-1"
          variants={containerVariants}
        >
          <motion.p
            className="w-fit bg-text-bg text-secondary text-sm sm:text-base py-1.5 px-2.5 sm:py-2.5 sm:px-3.5 rounded-4xl border-t border-header-border font-normal"
            variants={itemVariants}
          >
            Lightning-fast, low-cost, easy.
          </motion.p>

          <motion.h2
            className="text-primary text-4xl md:text-7xl font-medium my-5 sm:my-5"
            variants={itemVariants}
          >
            Your AI-Powered 3D Builder
          </motion.h2>

          <motion.p
            className="text-secondary text-sm sm:text-base py-1.5 sm:py-2.5 rounded-4xl font-normal"
            variants={itemVariants}
          >
            Create stunning 3D assets effortlessly. No coding required.
          </motion.p>

          <motion.div
            className="action-btns text-primary font-semibold flex flex-col sm:flex-row items-center gap-5 my-5"
            variants={containerVariants}
          >
            <motion.button
              className="flex items-center sm:w-auto w-full justify-center gap-1.5 sm:gap-2.5 bg-text-bg text-sm sm:text-base py-2.5 px-2.5 sm:py-2.5 sm:px-3.5 rounded-4xl border-t border-[#96519F] transition-all duration-300 hover:shadow-[0_4px_10px_rgba(218,38,222,0.22)] cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Start creating 3D
              <MdNavigateNext size={18} />
            </motion.button>
            <motion.button
              className="hover:text-gray-400 transition-all flex items-center gap-1.5 sm:gap-2.5 text-sm sm:text-base py-1.5 px-2.5 sm:py-2.5 sm:px-3.5 rounded-4xl duration-300 cursor-pointer"
              variants={secondaryButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Guide
              <MdNavigateNext size={18} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="hero-image order-1 md:order-2 col-span-1 relative z-20 mb-2.5 sm:mb-0"
          variants={imageVariants}
        >
          <motion.img
            className="w-full h-full object-cover pointer-events-none drop-shadow-2xl"
            src={humanoid}
            alt="Humanoid"
            whileHover="hover"
          />

          <motion.p
            className="absolute md:top-45 top-30 md:left-25 left-3 z-30 bg-[rgba(144, 128, 146, 0.15)] border border-[rgba(144,128,146,0.5)] backdrop-blur-[10px] text-primary text-sm sm:text-sm font-medium px-4 py-1.5 rounded-lg md:rounded-xl"
            variants={badgeVariants}
            custom={0}
            whileHover="hover"
          >
            No GPU needed
          </motion.p>
          <motion.p
            className="absolute md:bottom-30 bottom-18 md:right-8 right-0 z-30 bg-[rgba(144, 128, 146, 0.15)] border border-[rgba(144,128,146,0.5)] backdrop-blur-[10px] text-primary text-sm sm:text-sm font-medium px-4 py-1.5 rounded-lg md:rounded-xl"
            variants={badgeVariants}
            custom={1}
            whileHover="hover"
          >
            Up to 12 images per session
          </motion.p>
          <motion.p
            className="absolute md:bottom-13 bottom-2 md:left-22 left-0 z-30 bg-[rgba(144, 128, 146, 0.15)] border border-[rgba(144,128,146,0.5)] backdrop-blur-[10px] text-primary text-sm sm:text-sm font-medium px-4 py-1.5 rounded-lg md:rounded-xl"
            variants={badgeVariants}
            custom={2}
            whileHover="hover"
          >
            Super low-cost &#x28; &#x3c;&#xFF04;0.5&#x2215;image&#x29;
          </motion.p>

          {/* Animated Blob */}
          <motion.div
            className="blobb bottom-blob absolute size-40 md:size-60 rounded-full bg-b-blob-bg blur-3xl -bottom-2 right-10 md:right-50 -z-10"
            variants={blobVariants}
          />
        </motion.div>
      </motion.div>

      {/* Partners and Sponsors Slider */}
      <motion.div
        className="border border-[#0F141C] rounded-lg my-5 md:my-0 backdrop-blur-2xl relative z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <Slider {...settings}>
          {images.map((img, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={sliderItemVariants}
              whileHover="hover"
            >
              <div className="flex justify-center sm:py-2.5 backdrop-blur-2xl">
                <img src={img.img} alt={`Slide ${index + 1}`} />
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
