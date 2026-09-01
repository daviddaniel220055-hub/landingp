
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  // Animation for sections
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Animation for individual items
  const itemAnimation = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Animation for social icons
  const socialAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="relative min-h-[397px] w-full overflow-hidden bg-white">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Left glow */}
        <div className="absolute -left-[100px] -top-[100px] h-[300px] w-[350px] rounded-full bg-[#f8e8fa] blur-[80px]" />

        {/* Right bottom glow */}
        <div className="absolute -bottom-[130px] -right-[100px] h-[320px] w-[380px] rounded-full bg-[#f5def6] blur-[85px]" />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative mx-auto w-full max-w-[879px] px-4 sm:px-0">

        {/* ================= TOP CONTACT SECTION ================= */}
        <motion.div
          className="flex items-start justify-between pt-[40px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {/* ================= CONTACT INFORMATION ================= */}
          <motion.div
            className="space-y-[12px] text-[12px] font-normal text-[#777777]"
            variants={fadeUp}
          >
            {/* ADDRESS */}
            <motion.div
              className="flex items-start"
              variants={itemAnimation}
            >
              <span className="mr-[10px] min-w-[65px] font-medium text-[#111111]">
                Address:
              </span>

              <span>
                Block 20 Ibrahim Taiwo Road, Ilorin, Kwara, NG
              </span>
            </motion.div>

            {/* PHONE */}
            <motion.div
              className="flex items-start"
              variants={itemAnimation}
            >
              <span className="mr-[10px] min-w-[65px] font-medium text-[#111111]">
                Phone No:
              </span>

              <span>08080595043</span>
            </motion.div>

            {/* EMAIL */}
            <motion.div
              className="flex items-start"
              variants={itemAnimation}
            >
              <span className="mr-[10px] min-w-[65px] font-medium text-[#111111]">
                Email:
              </span>

              <span>Hello@Toshconsult.Com</span>
            </motion.div>
          </motion.div>

          {/* ================= SOCIAL ICONS ================= */}
          <motion.div
            className="flex items-center gap-[15px] pt-[5px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              staggerChildren: 0.1,
            }}
          >
            {/* INSTAGRAM */}
            <motion.div
              variants={socialAnimation}
              whileHover={{
                scale: 1.15,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                width={25}
                height={25}
                className="h-[25px] w-[25px] object-contain"
              />
            </motion.div>

            {/* TWITTER */}
            <motion.div
              variants={socialAnimation}
              whileHover={{
                scale: 1.15,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Image
                src="/images/twitter.png"
                alt="Twitter"
                width={25}
                height={25}
                className="h-[25px] w-[25px] object-contain"
              />
            </motion.div>

            {/* LINKEDIN */}
            <motion.div
              variants={socialAnimation}
              whileHover={{
                scale: 1.15,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={25}
                height={25}
                className="h-[25px] w-[25px] object-contain"
              />
            </motion.div>

            {/* FACEBOOK */}
            <motion.div
              variants={socialAnimation}
              whileHover={{
                scale: 1.15,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={25}
                height={25}
                className="h-[25px] w-[25px] object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ================= LOGO ================= */}
        <motion.div
          className="mt-[25px]"
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.05,
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Joshconsult Technologies Inc"
            width={105}
            height={55}
            className="h-auto w-[62px] object-contain"
          />
        </motion.div>

        {/* ================= FOOTER COLUMNS ================= */}
        <motion.div
          className="mt-[35px] grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.7fr_1.15fr_1.15fr_0.8fr] lg:gap-[55px]"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {/* ================= COURSES ================= */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-[21px] text-[15px] font-medium text-[#111111]">
              Courses
            </h3>

            <div className="space-y-[11px] text-[11px] font-normal text-[#777777]">
              <Link
                href="/courses/frontend-development"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                Front-End Development
              </Link>

              <Link
                href="/courses/backend-development"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                Back-End Development
              </Link>

              <Link
                href="/courses/mobile-app-development"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                Mobile App Development
              </Link>

              <Link
                href="/courses/ui-ux-design"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                UI/UX Design
              </Link>

              <Link
                href="/courses/python-full-stack-development"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                Python Full-Stack Development
              </Link>

              <Link
                href="/courses/javascript-full-stack-development"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                Javascript Full-Stack Development
              </Link>
            </div>
          </motion.div>

          {/* ================= SERVICES ================= */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-[21px] text-[15px] font-medium text-[#111111]">
              Services
            </h3>

            <div className="space-y-[11px] text-[11px] font-normal text-[#777777]">
              <Link
                href="/services/website-development"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                Website Development
              </Link>

              <Link
                href="/services/mobile-app-development"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                Mobile App Development
              </Link>

              <Link
                href="/services/digital-marketing"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                Digital Marketing
              </Link>

              <Link
                href="/services/software-development"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                Software Development
              </Link>

              <Link
                href="/services/ui-ux-design"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                UI/UX Design
              </Link>

              <Link
                href="/services/seo-management"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                SEO Management
              </Link>

              <Link
                href="/services/social-media-management"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                Social Media Management
              </Link>
            </div>
          </motion.div>

          {/* ================= ABOUT ================= */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-[21px] text-[15px] font-medium text-[#111111]">
              About
            </h3>

            <div className="space-y-[11px] text-[11px] font-normal text-[#777777]">
              <Link
                href="/about"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                Contact Us
              </Link>

              <Link
                href="/faq"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                FAQ
              </Link>
            </div>
          </motion.div>

          {/* ================= RESOURCES ================= */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-[21px] text-[15px] font-medium text-[#111111]">
              Resources
            </h3>

            <div className="space-y-[11px] text-[11px] font-normal text-[#777777]">
              <Link
                href="/docs"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                Docs
              </Link>

              <Link
                href="/career"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                Career
              </Link>

              <Link
                href="/blogpost"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                Blog
              </Link>

              <Link
                href="/post"
                className="block transition-colors duration-200 hover:text-[#111111]"
              >
                Post
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= COPYRIGHT ================= */}
        <motion.div
          className="mt-[54px] pb-[32px] text-left"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <p className="text-[11px] font-normal text-[#777777]">
            Copyright © 2015 - 2023 | All Rights Reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}

