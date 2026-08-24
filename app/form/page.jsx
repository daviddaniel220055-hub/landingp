"use client";

import { useState } from "react";

const courses = [
  "Web Development",
  "Graphic Design",
  "Digital Marketing",
  "UI/UX Design",
  "Data Analysis",
];

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    course: "",
    state: "",
    city: "",
    courseType: "",
    others: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Registration Data:", formData);

    alert("Registration submitted successfully!");
  };

  return (
    <div className="min-h-screen w-full bg-white">

      {/* =====================================================
          MAIN PAGE
      ====================================================== */}

      <main
        className="
          mx-auto
          w-[90%]
          max-w-[850px]
          pb-[80px]
          pt-[190px]

          max-[768px]:w-[92%]
          max-[768px]:pt-[175px]

          max-[480px]:w-[94%]
          max-[480px]:pt-[160px]
        "
      >

        {/* ===================================================
            LOGO
        ==================================================== */}

        <div className="mb-[30px] flex justify-center">
          <img
            src="/images/logo.png"
            alt="Joshconsult Technologies Inc"
            className="
              h-auto
              w-[100px]
              object-contain

              max-[480px]:w-[85px]
            "
          />
        </div>

        {/* ===================================================
            FORM TITLE
        ==================================================== */}

        <div
          className="
            mb-[40px]
            flex
            h-[52px]
            items-center
            rounded-[6px]
            bg-[#fff8d8]
            px-[25px]
            text-[15px]
            font-medium
            text-[#e5a21a]

            max-[768px]:text-[14px]

            max-[480px]:
            mb-[30px]
            h-[48px]
            px-[18px]
            text-[12px]
          "
        >
          Register For Our Training
        </div>

        {/* ===================================================
            FORM
        ==================================================== */}

        <form onSubmit={handleSubmit}>

          {/* =================================================
              FULL NAME + EMAIL
          ================================================== */}

          <div
            className="
              grid
              grid-cols-2
              gap-x-[30px]

              max-[600px]:grid-cols-1
              max-[600px]:gap-x-0
            "
          >

            {/* FULL NAME */}

            <div className="mb-[32px] w-full">

              <label
                htmlFor="fullName"
                className="
                  mb-[10px]
                  block
                  text-[11px]
                  font-medium
                  text-[#505050]

                  max-[480px]:text-[10px]
                "
              >
                FULL NAME
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className="
                  h-[42px]
                  w-full
                  rounded-[4px]
                  border
                  border-[#e8e8e8]
                  bg-white
                  px-[12px]
                  text-[12px]
                  text-[#333]
                  outline-none
                  transition

                  focus:border-[#f6a000]
                  focus:ring-2
                  focus:ring-[#f6a000]/10
                "
              />

            </div>

            {/* EMAIL */}

            <div className="mb-[32px] w-full">

              <label
                htmlFor="email"
                className="
                  mb-[10px]
                  block
                  text-[11px]
                  font-medium
                  text-[#505050]

                  max-[480px]:text-[10px]
                "
              >
                EMAIL
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="
                  h-[42px]
                  w-full
                  rounded-[4px]
                  border
                  border-[#e8e8e8]
                  bg-white
                  px-[12px]
                  text-[12px]
                  text-[#333]
                  outline-none
                  transition

                  focus:border-[#f6a000]
                  focus:ring-2
                  focus:ring-[#f6a000]/10
                "
              />

            </div>

          </div>

          {/* =================================================
              CHOOSE COURSE
          ================================================== */}

          <div className="mb-[32px] w-full">

            <label
              htmlFor="course"
              className="
                mb-[10px]
                block
                text-[11px]
                font-medium
                text-[#505050]

                max-[480px]:text-[10px]
              "
            >
              CHOOSE COURSE
            </label>

            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="
                h-[42px]
                w-full
                cursor-pointer
                rounded-[4px]
                border
                border-[#e8e8e8]
                bg-white
                px-[12px]
                text-[12px]
                text-[#333]
                outline-none
                transition

                focus:border-[#f6a000]
                focus:ring-2
                focus:ring-[#f6a000]/10
              "
            >
              <option value="">
                Select a course
              </option>

              {courses.map((course) => (
                <option
                  key={course}
                  value={course}
                >
                  {course}
                </option>
              ))}
            </select>

          </div>

          {/* =================================================
              STATE + CITY
          ================================================== */}

          <div
            className="
              grid
              grid-cols-2
              gap-x-[30px]

              max-[600px]:grid-cols-1
              max-[600px]:gap-x-0
            "
          >

            {/* STATE */}

            <div className="mb-[32px] w-full">

              <label
                htmlFor="state"
                className="
                  mb-[10px]
                  block
                  text-[11px]
                  font-medium
                  text-[#505050]

                  max-[480px]:text-[10px]
                "
              >
                STATE
              </label>

              <input
                id="state"
                name="state"
                type="text"
                value={formData.state}
                onChange={handleChange}
                className="
                  h-[42px]
                  w-full
                  rounded-[4px]
                  border
                  border-[#e8e8e8]
                  bg-white
                  px-[12px]
                  text-[12px]
                  text-[#333]
                  outline-none
                  transition

                  focus:border-[#f6a000]
                  focus:ring-2
                  focus:ring-[#f6a000]/10
                "
              />

            </div>

            {/* CITY */}

            <div className="mb-[32px] w-full">

              <label
                htmlFor="city"
                className="
                  mb-[10px]
                  block
                  text-[11px]
                  font-medium
                  text-[#505050]

                  max-[480px]:text-[10px]
                "
              >
                CITY
              </label>

              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                className="
                  h-[42px]
                  w-full
                  rounded-[4px]
                  border
                  border-[#e8e8e8]
                  bg-white
                  px-[12px]
                  text-[12px]
                  text-[#333]
                  outline-none
                  transition

                  focus:border-[#f6a000]
                  focus:ring-2
                  focus:ring-[#f6a000]/10
                "
              />

            </div>

          </div>

          {/* =================================================
              COURSE TYPE + OTHERS
          ================================================== */}

          <div
            className="
              grid
              grid-cols-2
              gap-x-[30px]

              max-[600px]:grid-cols-1
              max-[600px]:gap-x-0
            "
          >

            {/* COURSE TYPE */}

            <div className="mb-[32px] w-full">

              <label
                htmlFor="courseType"
                className="
                  mb-[10px]
                  block
                  text-[11px]
                  font-medium
                  text-[#505050]

                  max-[480px]:text-[10px]
                "
              >
                COURSE TYPE
              </label>

              <select
                id="courseType"
                name="courseType"
                value={formData.courseType}
                onChange={handleChange}
                className="
                  h-[42px]
                  w-full
                  cursor-pointer
                  rounded-[4px]
                  border
                  border-[#e8e8e8]
                  bg-white
                  px-[12px]
                  text-[12px]
                  text-[#333]
                  outline-none
                  transition

                  focus:border-[#f6a000]
                  focus:ring-2
                  focus:ring-[#f6a000]/10
                "
              >
                <option value="">
                  Select course type
                </option>

                <option value="Online">
                  Online
                </option>

                <option value="Physical">
                  Physical
                </option>

                <option value="Hybrid">
                  Hybrid
                </option>
              </select>

            </div>

            {/* OTHERS */}

            <div className="mb-[32px] w-full">

              <label
                htmlFor="others"
                className="
                  mb-[10px]
                  block
                  text-[11px]
                  font-medium
                  text-[#505050]

                  max-[480px]:text-[10px]
                "
              >
                OTHERS
              </label>

              <input
                id="others"
                name="others"
                type="text"
                value={formData.others}
                onChange={handleChange}
                className="
                  h-[42px]
                  w-full
                  rounded-[4px]
                  border
                  border-[#e8e8e8]
                  bg-white
                  px-[12px]
                  text-[12px]
                  text-[#333]
                  outline-none
                  transition

                  focus:border-[#f6a000]
                  focus:ring-2
                  focus:ring-[#f6a000]/10
                "
              />

            </div>

          </div>

          {/* =================================================
              WHY DO YOU WANT TO LEARN THIS COURSE?
          ================================================== */}

          <div className="mb-[25px] w-full">

            <label
              htmlFor="reason"
              className="
                mb-[10px]
                block
                text-[11px]
                font-medium
                text-[#505050]

                max-[480px]:text-[10px]
              "
            >
              WHY DO YOU WANT TO LEARN THIS COURSE?
            </label>

            <p
              className="
                mb-[12px]
                text-[10px]
                leading-[1.5]
                text-[#777]

                max-[480px]:text-[9px]
              "
            >
              The question is meant to help us understand why
              you want this particular skill and to prepare you
              better.
            </p>

            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="
                block
                h-[140px]
                w-full
                resize-none
                rounded-[4px]
                border
                border-[#e8e8e8]
                bg-white
                p-[12px]
                text-[12px]
                text-[#333]
                outline-none
                transition

                focus:border-[#f6a000]
                focus:ring-2
                focus:ring-[#f6a000]/10
              "
            />

          </div>

          {/* =================================================
              NOTICE
          ================================================== */}

          <p
            className="
              mb-[12px]
              text-[10px]
              leading-[1.5]
              text-[#777]

              max-[480px]:text-[9px]
            "
          >
            Submit your application for our course.
            You should get back to you within 24 hours.
          </p>

          {/* =================================================
              SUBMIT BUTTON
          ================================================== */}

          <button
            type="submit"
            className="
              h-[42px]
              min-w-[100px]
              rounded-[8px]
              bg-[#f6a000]
              px-[20px]
              text-[12px]
              font-medium
              text-white
              transition
              duration-200

              hover:bg-[#e99500]
              active:scale-95
            "
          >
            Submit
          </button>

        </form>

        {/* =================================================
            BACK TO HOME
        ================================================== */}

        <a
          href="/"
          className="
            mx-auto
            mt-[45px]
            block
            w-fit
            text-[11px]
            font-medium
            text-[#e9a51a]
            underline
            transition
            duration-200
            hover:text-[#d99400]
          "
        >
          Back to home
        </a>

      </main>
    </div>
  );
}