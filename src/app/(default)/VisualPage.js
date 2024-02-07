"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import RotatingChakra from "../../../public/RotatingChakra.svg";
import Image from "next/image";
import FourLeafFlowerSVG from "../../../public/FourLeafFlower.svg";
import SandGlass from "../../../public/SandGlass.svg";
import Thunder from "../../../public/Thunder.svg";
import RotatingFlower from "../../../public/RotatingFlower.svg";
import HeroForm from "@/components/forms/HeroForm";

const HomePage = () => {
  const [showSVG, setShowSVG] = useState(true);
  const controlsA = useAnimation();
  const controlsB = useAnimation();

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShowSVG(false);
    }, 2000);
    return () => clearTimeout(animationTimeout);
  }, []);

  useEffect(() => {
    const animateCharacterA = async () => {
      await controlsA.start({ y: "100%", opacity: [0, 1, 0] });
    };

    const animateCharacterB = async () => {
      await controlsB.start({ y: "0%", opacity: 1 });
    };
    animateCharacterA();
    animateCharacterB();
  }, [controlsA, controlsB]);

  const eVariants = {
    hidden: { opacity: 0, z: "5rem", y: "0%" },
    visible: { opacity: 1, z: 0, y: "0%" },
  };

  const handleAnimationComplete = () => {
    document.getElementById("a")?.remove();
  };

  const animationVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
      rotate: -1080,
      transformOrigin: "50% 50%",
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 5,
        ease: "easeInOut",
      },
      transformOrigin: "50% 50%",
    },
  };

  const controls = useAnimation();

  const rotateLeft = {
    rotate: -20,
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  const rotateRight = {
    rotate: 20,
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  const initialOpacityAnimation = {
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut" },
  };

  useEffect(() => {
    const runAnimation = async () => {
      await controls.start(initialOpacityAnimation);
      while (true) {
        await controls.start(rotateRight);
        await controls.start(rotateLeft);
      }
    };

    runAnimation();

    return () => controls.stop();
  }, [controls]);

  const handleAnimationCompleteChakra = () => {
    document.getElementById("chakra")?.remove();
  };

  return (
    <div className="flex justify-center pt-10 bg-normal-dark text-white  h-screen flex-col md:px-12 lg:px-16 xl:px-20 2xl:px-24 px-6 mb-8">
      <div className="flex justify-center items-baseline">
        <div>
          <motion.span
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 4, type: "spring", stiffness: 50 }}
            className="text-[5.2rem] min-[425px]:text-[88.66px] sm:text-[134px] min-[500px]:text-[118px] md:text-[168px] lg:text-[200px] xl:text-[224px] min-[1440px]:text-[236px] font-bold inline-block"
          >
            L
          </motion.span>
        </div>
        <div className="relative flex">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-[5.2rem] min-[425px]:text-[88.66px] sm:text-[134px] min-[500px]:text-[118px] md:text-[168px] lg:text-[200px] xl:text-[224px] min-[1440px]:text-[236px] font-bold inline-block"
          >
            ı
          </motion.span>
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: -20,
              rotate: [0, 90],
              opacity: [0, 1],
            }}
            transition={{
              y: { duration: 1, type: "tween" },
              rotate: { duration: 1, ease: "linear", repeat: Infinity },
            }}
            className="w-12 absolute"
          >
            <Image src={RotatingFlower} alt="Your Alt Text" className="w-12" />
          </motion.span>
          {/* <motion.span/> */}
        </div>
        {showSVG ? (
          <motion.span
            className="w-12 inline-block"
            initial={{ opacity: 0, x: "-20vw" }}
            animate={{ opacity: 1, x: 0, rotate: [0, 360] }}
            transition={{
              x: { duration: 1, type: "tween" },
              rotate: {
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                stiffness: 70,
              },
            }}
            id="chakra"
            onAnimationComplete={handleAnimationCompleteChakra}
          >
            <Image src={RotatingChakra} alt="Your Alt Text" className="w-12" />
          </motion.span>
        ) : (
          <motion.span
            variants={eVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "linear" }}
            className="text-[5.2rem] min-[425px]:text-[88.66px] sm:text-[134px] min-[500px]:text-[118px] md:text-[168px] lg:text-[200px] xl:text-[224px] min-[1440px]:text-[236px] font-bold inline-block"
          >
            n
          </motion.span>
        )}
        <motion.span
          initial={{ opacity: 0, rotate: -90, originY: 0 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-[5.2rem] min-[425px]:text-[88.66px] sm:text-[134px] min-[500px]:text-[118px] md:text-[168px] lg:text-[200px] xl:text-[224px] min-[1440px]:text-[236px] font-bold inline-block"
        >
          k
        </motion.span>
        <div className="relative">
          <motion.div
            id="a"
            initial={{ y: "0%", opacity: 0 }}
            animate={showSVG ? controlsA : { opacity: 0, y: "0%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-[5.2rem] min-[425px]:text-[88.66px] sm:text-[118px] min-[500px]:text-[99px] md:text-[134.4px] lg:text-[168.5px] xl:text-[202.6px] min-[1440px]:text-[224px] 2xl:text-[236.8px] font-bold inline-block absolute"
            onAnimationComplete={handleAnimationComplete}
          >
            I
          </motion.div>
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={controlsB}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-[5.2rem] min-[425px]:text-[88.66px] sm:text-[134px] min-[500px]:text-[118px] md:text-[168px] lg:text-[200px] xl:text-[224px] min-[1440px]:text-[236px] font-bold inline-block"
          >
            I
          </motion.div>
        </div>
        {showSVG ? (
          <motion.div
            key="initial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[5.2rem] min-[425px]:text-[88.66px] sm:text-[134px] min-[500px]:text-[118px] md:text-[168px] lg:text-[200px] xl:text-[224px] min-[1440px]:text-[236px] font-bold inline-block"
          >
            00
          </motion.div>
        ) : (
          <motion.div
            key="final"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 10,
              damping: 25,
            }}
            className="text-[5.2rem] min-[425px]:text-[88.66px] sm:text-[134px] min-[500px]:text-[118px] md:text-[168px] lg:text-[200px] xl:text-[224px] min-[1440px]:text-[236px] font-bold inline-block"
          >
            T
          </motion.div>
        )}
      </div>
       <div className="flex items-center justify-center">
         <HeroForm/>
      </div>
      <div className="flex justify-center items-baseline">
        <motion.span
          initial={{ opacity: 0, scaleY: 0, originY: 1 }}
          animate={{ opacity: 1, scaleY: 1, originY: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="text-[5.2rem] min-[425px]:text-[88.66px] sm:text-[134px] min-[500px]:text-[118px] md:text-[168px] lg:text-[200px] xl:text-[224px] min-[1440px]:text-[236px] font-bold inline-block"
        >
          N
        </motion.span>
        <motion.span
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={controls}
        >
          <Image src={SandGlass} alt="Your Alt Text" className="w-12" />
        </motion.span>
        <motion.span
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          className="text-[5.2rem] min-[425px]:text-[88.66px] sm:text-[134px] min-[500px]:text-[118px] md:text-[168px] lg:text-[200px] xl:text-[224px] min-[1440px]:text-[236px] font-bold inline-block"
        >
          o
        </motion.span>
        {showSVG ? (
          <motion.span
            className="inline-block"
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              opacity: 1,
              scale: [1, 0.9, 1.1, 1],
              transition: { repeat: Infinity, duration: 1 },
            }}
          >
            <Image src={Thunder} alt="Your Alt Text" className="w-12" />
          </motion.span>
        ) : (
          <motion.div
            variants={eVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2, ease: "linear" }}
            className="text-[5.2rem] min-[425px]:text-[88.66px] sm:text-[134px] min-[500px]:text-[118px] md:text-[168px] lg:text-[200px] xl:text-[224px] min-[1440px]:text-[236px] font-bold inline-block"
          >
            w
          </motion.div>
        )}
        <motion.span
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          whileHover={{ rotate: 1080 }}
        >
          <Image src={FourLeafFlowerSVG} alt="Your Alt Text" className="w-12" />
        </motion.span>
      </div>
     
      
    </div>
  );
};

export default HomePage;