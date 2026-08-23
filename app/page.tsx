"use client";

import React from "react";

/* =========================================================
    HERO
========================================================= */

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ===================================================== */}

      <div className="pointer-events-none absolute -left-[180px] -top-[120px] h-[500px] w-[550px] rounded-full bg-[#f9e7fa] opacity-80 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-[180px] -right-[150px] h-[500px] w-[550px] rounded-full bg-[#f5ddf7] opacity-70 blur-[110px]" />

      {/* =====================================================
          HERO CONTENT

          Navbar is fixed at 100px.
          We only add padding inside the hero content,
          instead of reducing the Hero height.
      ===================================================== */}

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

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="max-w-[560px]">

            <h1
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
            </h1>

            <p
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
            </p>

            <button
              type="button"
              className="
                mt-7
                flex
                h-[52px]
                w-[315px]
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
              <span>
                Book A Free Consultation
              </span>

              <span className="text-[27px] leading-none">
                ↗
              </span>
            </button>

          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex justify-center lg:justify-end">

            <div
              className="
                w-full
                max-w-[520px]
                overflow-hidden
                rounded-[15px]
                border-[3px]
                border-[#c52db4]
              "
            >

              <img
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

            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          CLIENT LOGOS
      ===================================================== */}

      <div
        className="
          relative
          flex
          min-h-[105px]
          w-full
          items-center
          bg-[#fff9df]
        "
      >

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1050px]
            items-center
            justify-between
            gap-10
            px-8
          "
        >

          <img
            src="/images/Matmos logo.png"
            alt="Matmos"
            className="max-h-[42px] w-auto object-contain"
          />

          <img
            src="/images/ALPHABILLS STRAIGHT.png"
            alt="Alphabills"
            className="max-h-[38px] w-auto object-contain"
          />

          <img
            src="/images/adalo.png"
            alt="TismaBit"
            className="max-h-[35px] w-auto object-contain"
          />

          <img
            src="/images/airrand.png"
            alt="AirRand"
            className="max-h-[45px] w-auto object-contain"
          />

          <img
            src="/images/paytonaira.png"
            alt="Paytonaira"
            className="max-h-[38px] w-auto object-contain"
          />

        </div>

      </div>
    </section>
  );
}


/* =========================================================
    ABOUT
========================================================= */

function About() {
  return (
    <section
      id="about"
      className="bg-white"
    >

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

          <div className="flex justify-center lg:justify-start">

            <img
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

          </div>


          {/* TEXT */}

          <div className="max-w-[500px]">

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

            <button
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
            </button>

          </div>

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


        {/* CARDS */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-7
            md:grid-cols-3
          "
        >

          {services.map((service) => (
            <div
              key={service.title}
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

              <div
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
              </div>

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

              <button
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
              </button>

            </div>
          ))}

        </div>


        {/* VIEW ALL SERVICES */}

        <div className="flex justify-end">

          <button
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
          </button>

        </div>

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

        <div className="text-center">

          <h2 className="text-[34px] font-medium text-black">
            Technologies We’re Using
          </h2>

          <p className="mt-4 text-[12px] text-[#777777]">
            Below is the list of technologies we are using for our
            professional services
          </p>

        </div>


        {/* TECHNOLOGY GRID */}

        <div
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
            <div
              key={technology.name}
              className="
                flex
                flex-col
                items-center
                justify-start
              "
            >

              <div
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

              </div>

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

            </div>
          ))}

        </div>

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
          {/* Top-Left: Mission Text */}
          <div className="max-w-[500px]">
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
          </div>

          {/* Top-Right: Mission Image */}
          <div className="flex justify-center lg:justify-end">
            <img
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
          </div>

          {/* Bottom-Left: Vision Image */}
          <div className="flex justify-center lg:justify-start">
            <img
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
          </div>

          {/* Bottom-Right: Vision Text */}
          <div className="max-w-[500px]">
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
          </div>
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
        <div className="text-center">
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
        </div>

        {/* TESTIMONIAL CARDS */}
        <div
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
            <div
              key={testimonial.name}
              className="
                min-h-[205px]
                rounded-[12px]
                bg-white
                px-9
                py-8
              "
            >
              <img
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
            </div>
          ))}
        </div>

        {/* BOTTOM CONTROLS */}
        <div
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
            <span className="h-[11px] w-[11px] rounded-full bg-[#f6a000]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#f4d99d]" />
          </div>

          <a
            href="#contact"
            className="
              text-[12px]
              font-medium
              text-[#bd37a7]
              underline
            "
          >
            View All Reviews
          </a>
        </div>
      </div>
    </section>
  );
}


/* =========================================================
    CONSULTATION BANNER (Updated with exact text & arrow button from a9_2.jpg)
========================================================= */

function ConsultationBanner() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1180px] px-8 lg:px-12 xl:px-0">
        <div
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
          <h2 className="text-[24px] font-medium text-black sm:text-[30px]">
            Schedule A 30 Minutes Project Consultation!
          </h2>

          <p
            className="
              mt-4
              max-w-[620px]
              text-[12px]
              leading-[1.6]
              text-[#777777]
              sm:text-[13px]
            "
          >
            Are you a business owner, having low revenue or looking forward to increase
            your online sales? Worry no more!
            <br />
            Our skilled engineers are ready to transform your buesiness
          </p>

          <button
            type="button"
            className="
              mt-8
              flex
              h-[52px]
              w-[270px]
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

            {/* Right Arrow Icon matching image a9_2.jpg */}
            <span className="text-[20px] leading-none">
              ➔
            </span>
          </button>
        </div>
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