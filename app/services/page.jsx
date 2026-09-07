
"use client";

import React from "react";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
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
    x: 60,
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
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
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
    y: 45,
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

/* ================= PAGE ================= */

const App = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#202027]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#fffaf0] px-6 py-16 md:py-24">

        {/* Decorative squares */}
        <motion.div
          className="absolute left-10 top-10 h-20 w-20 rotate-45 border border-[#f1e4c7]"
          animate={{
            rotate: [45, 55, 45],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-28 top-20 h-20 w-20 rotate-45 border border-[#f1e4c7]"
          animate={{
            rotate: [45, 35, 45],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Purple glow */}
        <motion.div
          className="absolute right-0 top-0 h-56 w-56 rounded-full bg-purple-200/40 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="relative mx-auto mt-25 max-w-6xl text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >

          <motion.h1
            variants={fadeUp}
            className="text-3xl font-bold leading-tight md:text-5xl"
          >
            We Believe In Innovation
            <br />
            And Creativity
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-5 flex justify-center gap-3 text-xs text-gray-400"
          >
            <span>Home</span>
            <span>/</span>
            <span>Services</span>
          </motion.div>

        </motion.div>
      </section>

      {/* =====================================================
          BENEFITS SECTION
      ===================================================== */}

      <section className="px-6 py-16 md:py-24">

        <div className="mx-auto max-w-6xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
          >

            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#c92bc7]">
              Benefits
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              The Purpose Of Hiring Us
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
              We help businesses transform their ideas into meaningful digital
              experiences. Our team combines creativity, strategy and technology
              to create solutions that deliver real results.
            </p>

          </motion.div>

          {/* Benefit Cards */}

          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={staggerContainer}
          >

            {/* Card 1 */}
            <motion.div
              variants={cardAnimation}
              className="rounded-xl border border-gray-100 bg-white p-7 shadow-sm"
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0px 15px 35px rgba(0,0,0,0.08)",
              }}
              transition={{
                duration: 0.25,
              }}
            >

              <motion.div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f9e7fa] text-sm font-bold text-[#c72bc5]"
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                }}
              >
                <img src="/tailor.png" alt="" />
              </motion.div>

              <h3 className="text-sm font-bold">
                EXPERIENCED INSTRUCTOR
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Our team combines creativity, experience and technology
                to deliver quality digital solutions.
              </p>

            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardAnimation}
              className="rounded-xl border border-gray-100 bg-white p-7 shadow-sm"
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0px 15px 35px rgba(0,0,0,0.08)",
              }}
              transition={{
                duration: 0.25,
              }}
            >

              <motion.div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#fff5dc] text-sm font-bold text-orange-400"
                whileHover={{
                  rotate: -10,
                  scale: 1.1,
                }}
              >
                <img src="/work.png" alt="" />
              </motion.div>

              <h3 className="text-sm font-bold">
                WORKING EXPERIENCE
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Every solution we create is designed around your unique
                business needs and objectives.
              </p>

            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={cardAnimation}
              className="rounded-xl border border-gray-100 bg-white p-7 shadow-sm"
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0px 15px 35px rgba(0,0,0,0.08)",
              }}
              transition={{
                duration: 0.25,
              }}
            >

              <motion.div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#fff5dc] text-sm font-bold text-orange-400"
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                }}
              >
                <img src="/collab.png" alt="" />
              </motion.div>

              <h3 className="text-sm font-bold">
                COLLABORATIVE PROJECT
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                We pay attention to every detail to ensure our products
                meet high quality standards.
              </p>

            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          SERVICES SECTION
      ===================================================== */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-6xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
          >

            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#c92bc7]">
              All Services
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Our Services
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
              We provide complete digital solutions designed to help businesses
              grow, connect with customers and stand out online.
            </p>

          </motion.div>

          {/* Service Grid */}

          <motion.div
            className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={staggerContainer}
          >

            {/* ================= SERVICE 1 ================= */}

            <motion.div
              variants={cardAnimation}
              whileHover={{
                y: -8,
              }}
            >

              <div className="overflow-hidden rounded-xl">

                <motion.img
                  src="/69.png"
                  alt="Mobile App Development"
                  className="h-48 w-full rounded-xl object-cover"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />

              </div>

              <h3 className="mt-5 text-sm font-bold">
                MOBILE APP DEVELOPMENT
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                We create modern, fast and user-friendly mobile applications
                that help businesses connect with their customers.
              </p>

              <motion.button
                className="mt-5 cursor-pointer rounded-md bg-[#c72bc7] px-5 py-2.5 text-xs font-semibold text-white"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                VIEW SERVICE
              </motion.button>

            </motion.div>

            {/* ================= SERVICE 2 ================= */}

            <motion.div
              variants={cardAnimation}
              whileHover={{
                y: -8,
              }}
            >

              <div className="overflow-hidden rounded-xl">

                <motion.img
                  src="/70.png"
                  alt="Website Development"
                  className="h-48 w-full rounded-xl object-cover"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />

              </div>

              <h3 className="mt-5 text-sm font-bold">
                WEBSITE DEVELOPMENT
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                We build responsive and high-performing websites designed
                to give your business a strong online presence.
              </p>

              <motion.button
                className="mt-5 cursor-pointer rounded-md bg-orange-400 px-5 py-2.5 text-xs font-semibold text-white"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                VIEW SERVICE
              </motion.button>

            </motion.div>

            {/* ================= SERVICE 3 ================= */}

            <motion.div
              variants={cardAnimation}
              whileHover={{
                y: -8,
              }}
            >

              <div className="overflow-hidden rounded-xl">

                <motion.img
                  src="/71.png"
                  alt="UI UX Design"
                  className="h-48 w-full rounded-xl object-cover"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />

              </div>

              <h3 className="mt-5 text-sm font-bold">
                UI/UX DESIGN
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                We design clean, beautiful and intuitive interfaces that
                make digital products simple and enjoyable to use.
              </p>

              <motion.button
                className="mt-5 cursor-pointer rounded-md bg-[#c72bc5] px-5 py-2.5 text-xs font-semibold text-white"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                VIEW SERVICE
              </motion.button>

            </motion.div>

            {/* ================= SERVICE 4 ================= */}

            <motion.div
              variants={cardAnimation}
              whileHover={{
                y: -8,
              }}
            >

              <div className="overflow-hidden rounded-xl">

                <motion.img
                  src="/72.png"
                  alt="Social Media Management"
                  className="h-48 w-full rounded-xl object-cover"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />

              </div>

              <h3 className="mt-5 text-sm font-bold">
                SOCIAL MEDIA MANAGEMENT
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Grow your brand online with engaging content, strategic
                campaigns and consistent social media management.
              </p>

              <motion.button
                className="mt-5 cursor-pointer rounded-md bg-[#c72bc5] px-5 py-2.5 text-xs font-semibold text-white"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                VIEW SERVICE
              </motion.button>

            </motion.div>

            {/* ================= SERVICE 5 ================= */}

            <motion.div
              variants={cardAnimation}
              whileHover={{
                y: -8,
              }}
            >

              <div className="overflow-hidden rounded-xl">

                <motion.img
                  src="/73.png"
                  alt="Software Development"
                  className="h-48 w-full rounded-xl object-cover"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />

              </div>

              <h3 className="mt-5 text-sm font-bold">
                SOFTWARE DEVELOPMENT
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                We develop reliable software solutions tailored to your
                business needs and workflow.
              </p>

              <motion.button
                className="mt-5 cursor-pointer rounded-md bg-orange-400 px-5 py-2.5 text-xs font-semibold text-white"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                VIEW SERVICE
              </motion.button>

            </motion.div>

            {/* ================= SERVICE 6 ================= */}

            <motion.div
              variants={cardAnimation}
              whileHover={{
                y: -8,
              }}
            >

              <div className="overflow-hidden rounded-xl">

                <motion.img
                  src="/74.png"
                  alt="Digital Marketing"
                  className="h-48 w-full rounded-xl object-cover"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />

              </div>

              <h3 className="mt-5 text-sm font-bold">
                DIGITAL MARKETING
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Reach more customers with effective digital marketing
                strategies built around your business goals.
              </p>

              <motion.button
                className="mt-5 cursor-pointer rounded-md bg-[#c72bc5] px-5 py-2.5 text-xs font-semibold text-white"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                VIEW SERVICE
              </motion.button>

            </motion.div>

            {/* ================= SERVICE 7 ================= */}

            <motion.div
              variants={cardAnimation}
              whileHover={{
                y: -8,
              }}
            >

              <div className="overflow-hidden rounded-xl">

                <motion.img
                  src="/Rectangle 75.png"
                  alt="SEO Management"
                  className="h-48 w-full rounded-xl object-cover"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />

              </div>

              <h3 className="mt-5 text-sm font-bold">
                SEO MANAGEMENT
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Improve your search visibility and attract more organic
                traffic with effective SEO strategies.
              </p>

              <motion.button
                className="mt-5 cursor-pointer rounded-md bg-[#c72bc5] px-5 py-2.5 text-xs font-semibold text-white"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                VIEW SERVICE
              </motion.button>

            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="bg-[#fff8e5] px-6 py-14 md:py-18">

        <div className="mx-auto max-w-5xl">

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUp}
          >

            <h2 className="text-2xl font-bold md:text-3xl">
              What People Are Saying
            </h2>

            <p className="mx-auto mt-3 max-w-md text-[12px] leading-6 text-gray-600 md:text-sm">
              Hear from some of the people who have experienced our services
              and solutions.
            </p>

          </motion.div>

          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={staggerContainer}
          >

            {/* Testimonial 1 */}

            <motion.div
              className="rounded-lg bg-white p-6 shadow-sm"
              variants={fadeLeft}
              whileHover={{
                y: -7,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.08)",
              }}
            >

              <div className="flex items-center gap-3">

                <motion.img
                  src="/ib.png"
                  alt="Customer"
                  className="h-9 w-9 rounded-full object-cover"
                  whileHover={{
                    scale: 1.15,
                  }}
                />

                <div>
                  <h3 className="text-[11px] font-bold">
                    IBRAHIM OMOTOSHO
                  </h3>
                </div>

              </div>

              <p className="mt-4 text-[12px] leading-6 text-gray-600">
                "The team delivered exactly what we needed. Their attention
                to detail and professionalism was outstanding."
              </p>

            </motion.div>

            {/* Testimonial 2 */}

            <motion.div
              className="rounded-lg bg-white p-6 shadow-sm"
              variants={fadeRight}
              whileHover={{
                y: -7,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.08)",
              }}
            >

              <div className="flex items-center gap-3">

                <motion.img
                  src="/mo.png"
                  alt="Customer"
                  className="h-9 w-9 rounded-full object-cover"
                  whileHover={{
                    scale: 1.15,
                  }}
                />

                <div>
                  <h3 className="text-[11px] font-bold">
                    KOREDE MOHAMMED
                  </h3>
                </div>

              </div>

              <p className="mt-4 text-[12px] leading-6 text-gray-600">
                "Working with them was a great experience. The final product
                was modern, clean and exactly what we envisioned."
              </p>

            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CLIENTS
      ===================================================== */}

      <section className="px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <motion.p
            className="mb-8 text-center text-sm font-semibold text-gray-700 md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUp}
          >
            Our Trusted Clients
          </motion.p>

          <motion.div
            className="
              grid
              grid-cols-1
              items-center
              justify-items-center
              gap-10
              sm:grid-cols-1
              sm:gap-10
              md:flex
              md:flex-wrap
              md:items-center
              md:justify-between
              md:gap-8
            "
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={staggerContainer}
          >

            {[
              ["/mamtos.png", "Mamtos", "h-11"],
              ["/alpha.png", "Alpha", "h-6"],
              ["/adalo.png", "Adalo", "h-8"],
              ["/mamtos.png", "Mamtos", "h-11"],
              ["/alpha.png", "Alpha", "h-6"],
            ].map(([src, alt, height], index) => (

              <motion.img
                key={index}
                src={src}
                alt={alt}
                className={`${height} w-auto object-contain`}
                variants={scaleUp}
                whileHover={{
                  scale: 1.12,
                  y: -5,
                }}
              />

            ))}

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 pb-16">

        <motion.div
          className="mx-auto max-w-6xl rounded-xl bg-gradient-to-r from-[#c529c6] via-[#d523ce] to-[#ec16d8] px-6 py-12 text-center text-white md:px-20 md:py-14"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={scaleUp}
        >

          <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold md:text-3xl"
          >
            LIKE TO WORK WITH US?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80"
          >
            Let's turn your ideas into something amazing. Whether you need
            a website, application, branding or digital marketing,
            we're here to help.
          </motion.p>

          <motion.button
            variants={fadeUp}
            className="mt-6 cursor-pointer rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#c72bc5]"
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Contact Us
          </motion.button>

        </motion.div>

      </section>

    </main>
  );
};

export default App;

