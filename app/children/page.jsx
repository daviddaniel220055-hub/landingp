import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-[#202027]">

      <section className="relative overflow-hidden bg-[#fff8e5] px-6 py-20 md:py-24">

        <div className="absolute -left-20 -top-20 h-56 w-80 rounded-full bg-purple-100/70 blur-3xl" />

        <div className="absolute -right-20 -top-16 h-56 w-80 rounded-full bg-purple-100/70 blur-3xl" />

        <div className="relative mt-20 mx-auto max-w-6xl text-center">

          <h1 className="text-2xl font-bold leading-tight md:text-6xl">
            All Courses For Students
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg md:leading-8">
            Get To Know Our Tools And Our Mission To Provide Exceptional Service
            <br />
            and Quality Products
          </p>

        </div>
      </section>


      <section className="px-6 py-16 md:py-20">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-semibold text-orange-400 md:text-base">
            Benefits
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Best Place To Learn Growth
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base md:leading-8">
            Get access to practical courses and resources designed to help
            you develop your skills and grow professionally.
          </p>


          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">

            <div className="rounded-xl border border-gray-100 bg-white p-7 text-center shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-purple-50 text-2xl text-purple-500">
                ✦
              </div>

              <h3 className="mt-5 text-sm font-bold md:text-base">
                EXPLORE INSPIRATION
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Discover creative ideas and practical resources designed
                to help you grow.
              </p>

            </div>


            <div className="rounded-xl border border-gray-100 bg-white p-7 text-center shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-2xl text-orange-400">
                ◇
              </div>

              <h3 className="mt-5 text-sm font-bold md:text-base">
                MODERN EXPERIENCE
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Learn through a simple, engaging and modern learning
                experience.
              </p>

            </div>


            <div className="rounded-xl border border-gray-100 bg-white p-7 text-center shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-2xl text-orange-400">
                ✧
              </div>

              <h3 className="mt-5 text-sm font-bold md:text-base">
                COLLABORATIVE LEARNING
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Connect with other learners and develop valuable
                practical skills.
              </p>

            </div>


            <div className="rounded-xl border border-gray-100 bg-white p-7 text-center shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-purple-50 text-2xl text-purple-500">
                ✦
              </div>

              <h3 className="mt-5 text-sm font-bold md:text-base">
                INTERACTIVE MODULES
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enjoy structured modules designed for effective and
                flexible learning.
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="px-6 pb-20 md:pb-24">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm pl-16 font-semibold text-orange-400 md:text-base">
            All Courses
          </p>

          <h2 className="mt-2 pl-16 text-3xl font-bold md:text-4xl">
            Available Courses
          </h2>

          <p className="mt-4 pl-16 max-w-2xl text-sm leading-7 text-gray-600 md:text-base md:leading-8">
            Learn from carefully structured courses created to help you
            develop valuable digital skills.
          </p>


          <div className="mx-auto mt-10 grid max-w-4xl gap-7">

            <div className="grid gap-7 rounded-xl border border-gray-100 bg-white p-5 shadow-md md:grid-cols-[270px_1fr]">

              <div className="overflow-hidden rounded-lg">

                <img
                  src="/front.png"
                  alt="Front-end development"
                  className="h-60 w-full object-cover md:h-full"
                />

              </div>


              <div className="py-2">

                <h3 className="text-lg font-bold md:text-xl">
                  FRONT-END DEVELOPMENT
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                  Learn modern HTML, CSS, JavaScript and responsive web
                  development from the ground up.
                </p>


                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">

                  <span>⌁ 5 HRS</span>
                  <span>◉ 2</span>
                  <span>◈ Beginner</span>
                  <span>★ 4.8</span>
                  <span>▣ Certificate</span>

                </div>


                <div className="mt-7 flex flex-wrap items-center gap-5">

                  <div className="flex flex-wrap gap-5 text-sm text-gray-500">

                    <span>● 6 of 8 modules</span>
                    <span>● Bootcamp</span>

                  </div>


                  <button className="ml-auto cursor-pointer rounded-lg bg-orange-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500">
                    Learn More
                  </button>

                </div>

              </div>

            </div>


            <div className="grid gap-7 rounded-xl border border-gray-100 bg-white p-5 shadow-md md:grid-cols-[270px_1fr]">

              <div className="overflow-hidden rounded-lg">

                <img
                  src="/back.png"
                  alt="Back-end development"
                  className="h-60 w-full object-cover md:h-full"
                />

              </div>


              <div className="py-2">

                <h3 className="text-lg font-bold md:text-xl">
                  BACK-END DEVELOPMENT
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                  Build powerful server-side applications, APIs and
                  databases using modern technologies.
                </p>


                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">

                  <span>⌁ 5 HRS</span>
                  <span>◉ 2</span>
                  <span>◈ Beginner</span>
                  <span>★ 4.8</span>
                  <span>▣ Certificate</span>

                </div>


                <div className="mt-7 flex flex-wrap items-center gap-5">

                  <div className="flex flex-wrap gap-5 text-sm text-gray-500">

                    <span>● 6 of 8 modules</span>
                    <span>● Bootcamp</span>

                  </div>


                  <button className="ml-auto cursor-pointer rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700">
                    Learn More
                  </button>

                </div>

              </div>

            </div>


            <div className="grid gap-7 rounded-xl border border-gray-100 bg-white p-5 shadow-md md:grid-cols-[270px_1fr]">

              <div className="overflow-hidden rounded-lg">

                <img
                  src="/python.png"
                  alt="Python development"
                  className="h-60 w-full object-cover md:h-full"
                />

              </div>


              <div className="py-2">

                <h3 className="text-lg font-bold md:text-xl">
                  PYTHON FULL-STACK DEVELOPMENT
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                  Master Python, backend development and full-stack
                  application development.
                </p>


                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">

                  <span>⌁ 5 HRS</span>
                  <span>◉ 2</span>
                  <span>◈ Beginner</span>
                  <span>★ 4.8</span>
                  <span>▣ Certificate</span>

                </div>


                <div className="mt-7 flex flex-wrap items-center gap-5">

                  <div className="flex flex-wrap gap-5 text-sm text-gray-500">

                    <span>● 6 of 8 modules</span>
                    <span>● Bootcamp</span>

                  </div>


                  <button className="ml-auto cursor-pointer rounded-lg bg-orange-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500">
                    Learn More
                  </button>

                </div>

              </div>

            </div>


            <div className="grid gap-7 rounded-xl border border-gray-100 bg-white p-5 shadow-md md:grid-cols-[270px_1fr]">

              <div className="overflow-hidden rounded-lg">

                <img
                  src="/ui.png"
                  alt="UI UX design"
                  className="h-60 w-full object-cover md:h-full"
                />

              </div>


              <div className="py-2">

                <h3 className="text-lg font-bold md:text-xl">
                  UI/UX DESIGN
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                  Create beautiful interfaces and intuitive digital
                  experiences using modern design principles.
                </p>


                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">

                  <span>⌁ 5 HRS</span>
                  <span>◉ 2</span>
                  <span>◈ Beginner</span>
                  <span>★ 4.8</span>
                  <span>▣ Certificate</span>

                </div>


                <div className="mt-7 flex flex-wrap items-center gap-5">

                  <div className="flex flex-wrap gap-5 text-sm text-gray-500">

                    <span>● 6 of 8 modules</span>
                    <span>● Bootcamp</span>

                  </div>


                  <button className="ml-auto cursor-pointer rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700">
                    Learn More
                  </button>

                </div>

              </div>

            </div>

          </div>


          <div className="mt-10 flex justify-center gap-3">

            <button className="h-10 w-10 rounded-lg bg-purple-600 text-sm font-semibold text-white">
              1
            </button>

            <button className="h-10 w-10 rounded-lg text-sm font-semibold text-orange-400">
              2
            </button>

            <button className="h-10 w-10 rounded-lg text-sm font-semibold text-orange-400">
              3
            </button>

          </div>

        </div>

      </section>


      <section className="bg-[#fff8e5] px-6 py-16 md:py-20">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-3xl font-bold md:text-4xl">
            What Our Students Are Saying
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-7 text-gray-600 md:text-base">
            Hear from students who have experienced our courses and
            grown their skills.
          </p>


          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-xl bg-white p-7 shadow-sm">

              <div className="flex items-center gap-4">

                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="Student"
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>

                  <h3 className="text-sm font-bold">
                    MICHAEL JOHNSON
                  </h3>

                  <p className="mt-1 text-xs text-gray-400">
                    Student
                  </p>

                </div>

              </div>

              <p className="mt-5 text-sm leading-7 text-gray-600">
                "The courses are easy to follow and extremely practical.
                I gained confidence in my skills very quickly."
              </p>

            </div>


            <div className="rounded-xl bg-white p-7 shadow-sm">

              <div className="flex items-center gap-4">

                <img
                  src="https://i.pravatar.cc/100?img=47"
                  alt="Student"
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>

                  <h3 className="text-sm font-bold">
                    SOPHIE MAXWELL
                  </h3>

                  <p className="mt-1 text-xs text-gray-400">
                    Student
                  </p>

                </div>

              </div>

              <p className="mt-5 text-sm leading-7 text-gray-600">
                "I really enjoyed the learning experience. Everything
                is simple, organized and easy to understand."
              </p>

            </div>

          </div>


          <div className="mt-10 flex justify-center gap-2">

            <span className="h-2 w-2 rounded-full bg-orange-400"></span>

            <span className="h-2 w-2 rounded-full bg-gray-300"></span>

            <span className="h-2 w-2 rounded-full bg-gray-300"></span>

          </div>


          <div className="mt-6 text-center">

            <span className="text-sm font-semibold text-purple-600">
              View All Reviews
            </span>

          </div>

        </div>

      </section>


      <section className="px-6 py-12 md:py-16">

        <div className="mx-auto max-w-5xl rounded-2xl bg-[#c326c9] px-6 py-14 text-center shadow-md md:px-10 md:py-16">

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            LIKE TO JOIN US?
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/90 md:text-base">
            Become part of our learning community and build the
            skills you need for your future.
          </p>

          <button className="mt-7 cursor-pointer rounded-full bg-white px-8 py-3 text-sm font-semibold text-purple-600 transition hover:bg-gray-100">
            Apply Now
          </button>

        </div>

      </section>

    </div>
  );
};

export default App;