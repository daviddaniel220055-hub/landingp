"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // ==========================================
  // HANDLE INPUT
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccess("");
    setError("");
  };

  // ==========================================
  // SUBMIT CONTACT FORM
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        "https://toshconsultblogfastapi.onrender.com/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            full_name: formData.full_name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(
          "Your message has been sent successfully. We will get back to you soon."
        );

        setFormData({
          full_name: "",
          email: "",
          message: "",
        });
      } else {
        if (data.detail) {
          if (Array.isArray(data.detail)) {
            const errorMessage = data.detail
              .map((item) => item.msg)
              .join(", ");

            setError(errorMessage);
          } else {
            setError(data.detail);
          }
        } else {
          setError("Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      console.error("Contact API error:", err);

      setError(
        "Unable to send your message right now. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white pt-[100px] text-[#111111]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          flex
          min-h-[260px]
          w-full
          flex-col
          items-center
          justify-center
          overflow-hidden
          bg-gradient-to-r
          from-[#fceaf7]
          via-white
          to-[#faedf4]
          px-5
        "
      >

        {/* LEFT DECORATION */}

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
            rotate: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 45,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="
            absolute
            left-[5%]
            top-[150px]
            h-[100px]
            w-[100px]
            border
            border-[#e8b82d]/20
          "
        >
          <div
            className="
              absolute
              left-[17px]
              top-[17px]
              h-[65px]
              w-[65px]
              border
              border-[#e8b82d]/15
            "
          />
        </motion.div>


        {/* RIGHT DECORATION */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
            rotate: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 45,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            absolute
            right-[3%]
            top-[145px]
            h-[90px]
            w-[90px]
            border
            border-[#ec93a9]/20
          "
        >
          <div
            className="
              absolute
              left-[15px]
              top-[15px]
              h-[58px]
              w-[58px]
              border
              border-[#ec93a9]/15
            "
          />
        </motion.div>


        {/* TITLE */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            z-10
            m-0
            mb-4
            text-center
            text-[30px]
            font-bold
            leading-tight
            sm:text-[34px]
            md:text-[38px]
          "
        >
          Contact Us For More...
        </motion.h1>


        {/* BREADCRUMB */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="
            relative
            z-10
            flex
            items-center
            gap-2
            text-[13px]
            text-[#777777]
          "
        >
          <span>Home</span>

          <span className="text-[#aaa]">
            &gt;
          </span>

          <span>Contact</span>
        </motion.div>

      </section>


      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <section
        className="
          mx-auto
          min-h-[850px]
          w-full
          max-w-[1100px]
          px-5
          py-[70px]
          sm:px-8
          md:px-12
          md:py-[90px]
        "
      >

        {/* CONTACT LABEL */}

        <motion.span
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-3
            block
            text-[13px]
            font-semibold
            uppercase
            tracking-wide
            text-[#ff9800]
          "
        >
          Contact
        </motion.span>


        {/* HEADING */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            m-0
            mb-5
            text-[28px]
            font-semibold
            leading-tight
            sm:text-[32px]
          "
        >
          Send Us Your Message.
        </motion.h2>


        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            m-0
            max-w-[650px]
            text-[14px]
            leading-[1.8]
            text-[#666666]
            sm:text-[15px]
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ignot Amet Accumsan Bibendum Gravida Molestie Augue.
          Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
          Ignot Amet Accumsan Bibendum Gravida Molestie Augue.
        </motion.p>


        {/* =====================================================
            FORM HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0.85,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-[55px]
            mb-[35px]
            flex
            min-h-[60px]
            w-full
            max-w-[700px]
            origin-left
            items-center
            rounded-[8px]
            bg-[#fff7d9]
            px-5
            sm:px-6
          "
        >
          <span
            className="
              text-[12px]
              font-bold
              tracking-wide
              text-[#ff9800]
              sm:text-[13px]
            "
          >
            FILL THE FORM BELOW
          </span>
        </motion.div>


        {/* =====================================================
            FORM
        ===================================================== */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            w-full
            max-w-[600px]
          "
        >

          {/* FULL NAME */}

          <div className="mb-[28px] flex w-full flex-col">

            <label
              htmlFor="full_name"
              className="
                mb-2
                text-[12px]
                font-medium
                uppercase
                tracking-wide
                text-[#555555]
              "
            >
              Full Name
            </label>

            <input
              id="full_name"
              name="full_name"
              type="text"
              value={formData.full_name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="
                h-[52px]
                w-full
                rounded-[7px]
                border
                border-[#e8e0e5]
                bg-white
                px-4
                text-[14px]
                text-[#222222]
                outline-none
                transition-all
                duration-200
                placeholder:text-[#aaa]
                focus:border-[#ff9800]
                focus:ring-2
                focus:ring-[#ff9800]/10
              "
            />

          </div>


          {/* EMAIL */}

          <div className="mb-[28px] flex w-full flex-col">

            <label
              htmlFor="email"
              className="
                mb-2
                text-[12px]
                font-medium
                uppercase
                tracking-wide
                text-[#555555]
              "
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="
                h-[52px]
                w-full
                rounded-[7px]
                border
                border-[#e8e0e5]
                bg-white
                px-4
                text-[14px]
                text-[#222222]
                outline-none
                transition-all
                duration-200
                placeholder:text-[#aaa]
                focus:border-[#ff9800]
                focus:ring-2
                focus:ring-[#ff9800]/10
              "
            />

          </div>


          {/* MESSAGE */}

          <div className="mb-[28px] flex w-full flex-col">

            <label
              htmlFor="message"
              className="
                mb-2
                text-[12px]
                font-medium
                uppercase
                tracking-wide
                text-[#555555]
              "
            >
              Type Your Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Type your message here..."
              className="
                min-h-[170px]
                w-full
                resize-y
                rounded-[7px]
                border
                border-[#e8e0e5]
                bg-white
                p-4
                text-[14px]
                leading-[1.6]
                text-[#222222]
                outline-none
                transition-all
                duration-200
                placeholder:text-[#aaa]
                focus:border-[#ff9800]
                focus:ring-2
                focus:ring-[#ff9800]/10
              "
            />

          </div>


          {/* SUCCESS */}

          {success && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                mb-6
                rounded-[7px]
                border
                border-green-200
                bg-green-50
                px-4
                py-3
                text-[13px]
                leading-[1.6]
                text-green-700
              "
            >
              {success}
            </motion.div>
          )}


          {/* ERROR */}

          {error && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                mb-6
                rounded-[7px]
                border
                border-red-200
                bg-red-50
                px-4
                py-3
                text-[13px]
                leading-[1.6]
                text-red-600
              "
            >
              {error}
            </motion.div>
          )}


          {/* SEND BUTTON */}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={
              !loading
                ? {
                    y: -3,
                    scale: 1.03,
                  }
                : {}
            }
            whileTap={
              !loading
                ? {
                    scale: 0.97,
                  }
                : {}
            }
            className="
              min-h-[48px]
              min-w-[125px]
              rounded-[7px]
              bg-[#ff9800]
              px-6
              text-[13px]
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:bg-[#e99500]
              hover:shadow-md
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading ? "Sending..." : "Send Now"}
          </motion.button>

        </motion.form>

      </section>


      {/* =====================================================
          FAQ SECTION
      ===================================================== */}

      <section
        className="
          flex
          min-h-[400px]
          w-full
          items-center
          justify-center
          border-t
          border-[#f3ebf0]
          bg-white
          px-5
          text-center
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="w-full max-w-[700px]"
        >

          <h2
            className="
              m-0
              mb-4
              text-[20px]
              font-bold
              text-[#ff9800]
            "
          >
            READ OUR FAQ
          </h2>


          <p
            className="
              mx-auto
              mb-7
              max-w-[600px]
              text-[13px]
              leading-[1.8]
              text-[#666666]
              sm:text-[14px]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ignot Amet Accumsan Bibendum Gravida Molestie Augue.
            Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
          </p>


          <motion.button
            type="button"
            whileHover={{
              y: -3,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              min-h-[45px]
              rounded-[7px]
              bg-[#ff9800]
              px-7
              text-[13px]
              font-medium
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:bg-[#e99500]
              hover:shadow-md
            "
          >
            Click Here
          </motion.button>

        </motion.div>

      </section>

    </div>
  );
}