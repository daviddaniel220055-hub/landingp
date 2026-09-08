"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";
import { motion } from "framer-motion";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const scaleUp = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* BACKGROUND GLOWS */}

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 0.8,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute -left-[180px] -top-[120px] h-[500px] w-[550px] rounded-full bg-[#f9e7fa] blur-[100px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 0.7,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute -bottom-[180px] -right-[150px] h-[500px] w-[550px] rounded-full bg-[#f5ddf7] blur-[110px]"
      />

      {/* HERO CONTENT */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1180px]
          items-center
          px-8
          pb-[105px]
          pt-[100px]
          lg:px-12
          xl:px-0
        "
      >
        <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="max-w-[560px]"
          >
            <motion.h1
              variants={fadeLeft}
              className="
                text-[42px]
                font-bold
                leading-[1.08]
                tracking-[-1.5px]
                text-black
                sm:text-[48px]
                lg:text-[52px]
              "
            >
              Award Winning Bespoke
              <br />
              Software Development
              <br />
              Company
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="
                mt-6
                max-w-[540px]
                text-[14px]
                leading-[1.65]
                text-[#777777]
                sm:text-[15px]
              "
            >
              We Help Medium To Large Businesses Boost Their Online
              Sales Through The Help Of Technologies. You’ve Got An
              Idea? Bring It Up, Our Skilled Engineers Will Turn It To A Live
              Product.
            </motion.p>

            <motion.button
              type="button"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(246,160,0,0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="
                mt-7
                flex
                h-[52px]
                w-full
                max-w-[315px]
                items-center
                justify-center
                gap-3
                rounded-[9px]
                bg-[#f6a000]
                text-[17px]
                font-medium
                text-white
              "
            >
              <span>Book A Free Consultation</span>

              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="text-[27px] leading-none"
              >
                ↗
              </motion.span>
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="
                w-full
                max-w-[520px]
                overflow-hidden
                rounded-[15px]
                border-[3px]
                border-[#c52db4]
              "
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="/images/hero.png"
                alt="Software development"
                className="
                  h-[320px]
                  w-full
                  object-cover
                  sm:h-[360px]
                  lg:h-[385px]
                "
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* CLIENT LOGOS */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="
          relative
          flex
          min-h-[105px]
          w-full
          items-center
          bg-[#fff9df]
        "
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mx-auto
            grid
            w-full
            max-w-[1050px]
            grid-cols-2
            items-center
            justify-items-center
            gap-8
            px-8
            sm:grid-cols-3
            lg:flex
            lg:justify-between
          "
        >
          {[
            ["/images/Matmos logo.png", "Matmos", "max-h-[42px]"],
            ["/images/ALPHABILLS STRAIGHT.png", "Alphabills", "max-h-[38px]"],
            ["/images/adalo.png", "TismaBit", "max-h-[35px]"],
            ["/images/airrand.png", "AirRand", "max-h-[45px]"],
            ["/images/paytonaira.png", "Paytonaira", "max-h-[38px]"],
          ].map(([src, alt, height]) => (
            <motion.img
              key={alt}
              variants={scaleUp}
              whileHover={{
                scale: 1.1,
              }}
              src={src}
              alt={alt}
              className={`${height} w-auto object-contain`}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}


/* =========================================================
   ABOUT
========================================================= */

function About() {
  return (
    <section id="about" className="bg-white">

      <div
        className="
          mx-auto
          flex
          min-h-[600px]
          w-full
          max-w-[1180px]
          items-center
          px-8
          py-20
          lg:px-12
          xl:px-0
        "
      >

        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-16
            lg:grid-cols-2
            lg:gap-24
          "
        >

          {/* IMAGE */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center lg:justify-start"
          >
            <motion.img
              whileHover={{
                scale: 1.04,
              }}
              transition={{ duration: 0.4 }}
              src="/images/Rectangle 86.png"
              alt="Joshconsult team"
              className="
                h-[400px]
                w-full
                max-w-[430px]
                rounded-[15px]
                object-cover
              "
            />
          </motion.div>


          {/* TEXT */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-[500px]"
          >
            <p className="text-[14px] font-medium text-[#f2a000]">
              About
            </p>

            <h2
              className="
                mt-4
                text-[34px]
                font-medium
                leading-[1.15]
                text-black
              "
            >
              We’re Building The Future Of
              <br />
              Technology
            </h2>

            <p
              className="
                mt-6
                text-[13px]
                leading-[1.7]
                text-[#777777]
              "
            >
              We Are Committed To Delivering Exceptional Service And Quality
              Products In Website Design, Web Development, App Development,
              And All Aspects Of Software Development, While Also Providing
              Accessible And Comprehensive Training To Help People Transition
              To Tech Careers.
            </p>

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              type="button"
              className="
                mt-7
                h-[42px]
                w-[110px]
                rounded-[9px]
                bg-[#f6a000]
                text-[12px]
                font-medium
                text-white
              "
            >
              Learn More
            </motion.button>

          </motion.div>

        </div>
      </div>

    </section>
  );
}


/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "BESPOKE WEB DEVELOPMENT",
    description:
      "From custom designs to robust business solutions, we have the expertise to deliver a website that will set you apart from the competition.",
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    description:
      "With years of experience and a commitment to quality, we work closely with you to understand your unique needs and create an app that perfectly represents your brand.",
  },
  {
    title: "DIGITAL MARKETING",
    description:
      "Our team of skilled digital experts uses the latest technologies and frameworks to create high-performance solutions that look great on any device.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#fff9e3]"
    >

      <div
        className="
          mx-auto
          min-h-[600px]
          w-full
          max-w-[1180px]
          px-8
          py-20
          lg:px-12
          xl:px-0
        "
      >

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-[14px] font-medium text-[#f2a000]">
            Services
          </p>

          <h2 className="mt-4 text-[34px] font-medium text-black">
            Our Services
          </h2>

          <p
            className="
              mt-4
              max-w-[650px]
              text-[13px]
              leading-[1.6]
              text-[#777777]
            "
          >
            We help small, medium and large businesses transform their sales
            and increase ROI through our versatile software development and
            digital marketing team. We work closely with you to deliver what
            your audience would love to consume.
          </p>
        </motion.div>


        {/* CARDS */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            mt-12
            grid
            grid-cols-1
            gap-7
            md:grid-cols-3
          "
        >

          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardAnimation}
              whileHover={{
                y: -10,
                boxShadow: "0px 15px 35px rgba(0,0,0,0.08)",
              }}
              transition={{ duration: 0.3 }}
              className="
                flex
                min-h-[285px]
                flex-col
                items-center
                rounded-[12px]
                bg-white
                px-8
                py-8
                text-center
              "
            >

              {/* ICON */}

              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  flex
                  h-[48px]
                  w-[48px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#fff8dc]
                  text-[20px]
                  text-[#f6a000]
                "
              >
                ◉
              </motion.div>

              <h3 className="mt-7 text-[13px] font-bold text-black">
                {service.title}
              </h3>

              <p
                className="
                  mt-4
                  max-w-[270px]
                  text-[11px]
                  leading-[1.65]
                  text-[#777777]
                "
              >
                {service.description}
              </p>

              <motion.button
                whileHover={{
                  scale: 1.06,
                  backgroundColor: "#c83db6",
                  color: "#ffffff",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                type="button"
                className="
                  mt-auto
                  h-[38px]
                  w-[125px]
                  rounded-[8px]
                  border
                  border-[#c83db6]
                  bg-white
                  text-[11px]
                  font-medium
                  text-[#c83db6]
                "
              >
                Learn More
              </motion.button>

            </motion.div>
          ))}

        </motion.div>


        {/* VIEW ALL SERVICES */}

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-end"
        >
          <motion.button
            whileHover={{
              scale: 1.08,
              x: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            type="button"
            className="
              mt-10
              h-[40px]
              w-[135px]
              rounded-[9px]
              bg-[#f6a000]
              text-[11px]
              font-medium
              text-white
            "
          >
            View All Services
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}


/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  {
    name: "HTML",
    image: "/images/html.png",
  },
  {
    name: "TAILWIND CSS",
    image: "/images/tailwind.png",
  },
  {
    name: "JAVASCRIPT",
    image: "/images/javascript.png",
  },
  {
    name: "REACT.JS",
    image: "/images/react.png",
  },
  {
    name: "PYTHON",
    image: "/images/python.png",
  },
  {
    name: "JAVA",
    image: "/images/java.png",
  },
  {
    name: "REACT NATIVE",
    image: "/images/react-native.png",
  },
  {
    name: "WORDPRESS",
    image: "/images/wordpress.png",
  },
  {
    name: "PHP",
    image: "/images/php.png",
  },
  {
    name: "ASP.NET",
    image: "/images/csharp.png",
  },
];

function Technologies() {
  return (
    <section
      id="courses"
      className="bg-white"
    >

      <div
        className="
          mx-auto
          min-h-[620px]
          w-full
          max-w-[1050px]
          px-8
          py-20
        "
      >

        {/* HEADING */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[34px] font-medium text-black">
            Technologies We’re Using
          </h2>

          <p className="mt-4 text-[12px] text-[#777777]">
            Below is the list of technologies we are using for our
            professional services
          </p>
        </motion.div>


        {/* TECHNOLOGY GRID */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            mx-auto
            mt-16
            grid
            max-w-[900px]
            grid-cols-2
            gap-y-16
            sm:grid-cols-4
          "
        >

          {technologies.map((technology) => (
            <motion.div
              key={technology.name}
              variants={cardAnimation}
              whileHover={{
                y: -8,
              }}
              className="
                flex
                flex-col
                items-center
                justify-start
              "
            >

              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  flex
                  h-[65px]
                  w-[65px]
                  items-center
                  justify-center
                "
              >
                <img
                  src={technology.image}
                  alt={technology.name}
                  className="
                    h-[58px]
                    w-[58px]
                    object-contain
                  "
                />
              </motion.div>

              <p
                className="
                  mt-4
                  text-center
                  text-[14px]
                  font-medium
                  text-[#eaa000]
                "
              >
                {technology.name}
              </p>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}


/* =========================================================
   MISSION + VISION
========================================================= */

function MissionVision() {
  return (
    <section
      id="career"
      className="bg-white"
    >

      <div
        className="
          mx-auto
          flex
          min-h-[450px]
          w-full
          max-w-[1180px]
          items-center
          px-8
          py-20
          lg:px-12
          xl:px-0
        "
      >

        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-16
            lg:grid-cols-2
            lg:gap-24
          "
        >

          {/* MISSION TEXT */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-[500px]"
          >
            <p className="text-[14px] font-medium text-[#f2a000]">
              Mission
            </p>

            <h2 className="mt-4 text-[34px] font-medium text-black">
              Why Toshconsult
            </h2>

            <p
              className="
                mt-5
                text-[13px]
                leading-[1.7]
                text-[#777777]
              "
            >
              At Toshconsult Inc, our mission is to deliver exceptional
              software solutions that redefine industry standards and exceed
              customer expectations. We are dedicated to innovation, customer
              satisfaction, global impact, social responsibility, agility and
              quality excellent.
            </p>
          </motion.div>


          {/* MISSION IMAGE */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              src="/images/Rectangle.png"
              alt="Mission"
              className="
                h-[300px]
                w-full
                max-w-[500px]
                rounded-[18px]
                object-cover
              "
            />
          </motion.div>


          {/* VISION IMAGE */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center lg:justify-start"
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              src="/images/vision.png"
              alt="Vision"
              className="
                h-[300px]
                w-full
                max-w-[500px]
                rounded-[18px]
                object-cover
              "
            />
          </motion.div>


          {/* VISION TEXT */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-[500px]"
          >
            <p className="text-[14px] font-medium text-[#f2a000]">
              Vision
            </p>

            <h2 className="mt-4 text-[34px] font-medium text-black">
              Our Vision
            </h2>

            <p
              className="
                mt-5
                text-[13px]
                leading-[1.7]
                text-[#777777]
              "
            >
              We envision a future where technology seamlessly integrates
              with human potential, empowering individuals and organizations
              to achieve their fullest capabilities. Our vision is to be at
              the forefront of innovation, driving positive change through
              cutting-edge software solutions that enhance efficiency,
              foster creativity, and elevate the human experience.
            </p>
          </motion.div>

        </div>
      </div>

    </section>
  );
}


/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    name: "OLADIPO MATTHEW",
    image: "/images/testimonial1.png",
    text: `"Toshconsult Technologies built our Insurance Management software and also increases our monthly revenue by 300x."`,
  },
  {
    name: "KOREDE MOHAMMED",
    image: "/images/testimonial2.png",
    text: `"Our restaurant sales got skyrocket after Toshconsult restructure our existing software and gave us a targeted ads."`,
  },
];

function Testimonials() {
  return (
    <section
      id="contact"
      className="bg-[#fff9e3]"
    >

      <div
        className="
          mx-auto
          min-h-[520px]
          w-full
          max-w-[1050px]
          px-8
          py-20
        "
      >

        {/* HEADING */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[30px] font-medium text-black">
            What People Are Saying
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[450px]
              text-[12px]
              leading-[1.6]
              text-[#777777]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Eget aenean accumsan bibendum gravida maecenas augue.
          </p>
        </motion.div>


        {/* TESTIMONIAL CARDS */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            mx-auto
            mt-14
            grid
            max-w-[900px]
            grid-cols-1
            gap-10
            md:grid-cols-2
          "
        >

          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardAnimation}
              whileHover={{
                y: -8,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.07)",
              }}
              className="
                min-h-[205px]
                rounded-[12px]
                bg-white
                px-9
                py-8
              "
            >

              <motion.img
                whileHover={{
                  scale: 1.12,
                }}
                src={testimonial.image}
                alt={testimonial.name}
                className="
                  h-[42px]
                  w-[42px]
                  rounded-full
                  object-cover
                "
              />

              <h3 className="mt-6 text-[11px] font-bold text-black">
                {testimonial.name}
              </h3>

              <p
                className="
                  mt-3
                  text-[11px]
                  italic
                  leading-[1.65]
                  text-[#777777]
                "
              >
                {testimonial.text}
              </p>

            </motion.div>
          ))}

        </motion.div>


        {/* BOTTOM CONTROLS */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mx-auto
            mt-10
            flex
            max-w-[900px]
            items-center
            justify-between
          "
        >

          <div className="flex gap-1">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="h-[11px] w-[11px] rounded-full bg-[#f6a000]"
            />

            <span className="h-[11px] w-[11px] rounded-full bg-[#f4d99d]" />
          </div>

          <motion.a
            whileHover={{
              x: 5,
            }}
            href="#contact"
            className="
              text-[12px]
              font-medium
              text-[#bd37a7]
              underline
            "
          >
            View All Reviews
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}


/* =========================================================
   CONSULTATION BANNER
========================================================= */

function ConsultationBanner() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-[1180px] px-8 lg:px-12 xl:px-0">

        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="
            relative
            mx-auto
            flex
            max-w-[960px]
            flex-col
            items-center
            rounded-[20px]
            bg-[#f9e7fa]
            px-8
            py-16
            text-center
            sm:px-16
          "
        >

          {/* DECORATIVE FLOATING EFFECT */}

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -right-4
              -top-4
              h-10
              w-10
              rounded-full
              bg-[#c83db6]
              opacity-20
            "
          />

          <motion.h2
            variants={fadeUp}
            className="text-[24px] font-medium text-black sm:text-[30px]"
          >
            Schedule A 30 Minutes Project Consultation!
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              mt-4
              max-w-[620px]
              text-[12px]
              leading-[1.6]
              text-[#777777]
              sm:text-[13px]
            "
          >
            Are you a business owner, having low revenue or looking forward
            to increase your online sales? Worry no more!
            <br />
            Our skilled engineers are ready to transform your buesiness
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(200,61,182,0.25)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            type="button"
            className="
              mt-8
              flex
              h-[52px]
              w-full
              max-w-[270px]
              items-center
              justify-between
              rounded-[9px]
              bg-[#c83db6]
              px-6
              text-[14px]
              font-medium
              text-white
            "
          >
            <span>Book a free consultation</span>

            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
              }}
              className="text-[20px] leading-none"
            >
              ➔
            </motion.span>
          </motion.button>

        </motion.div>

      </div>
    </section>
    
  );
  
}


/* =========================================================
   PAGE
========================================================= */

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Technologies />
      <MissionVision />
      <Testimonials />
      <ConsultationBanner />
    </main>

  );
}