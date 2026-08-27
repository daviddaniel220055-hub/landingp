import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-[#202027]">

      <section className="relative overflow-hidden bg-white px-6 pb-8 pt-3 md:pb-12 md:pt-6">

        <div className="absolute -left-20 -top-24 h-34 w-64 rounded-full bg-purple-100/70 blur-3xl" />
        <div className="absolute -right-20 -top-16 h-34 w-64 rounded-full bg-purple-100/70 blur-3xl" />

        <div className="relative mx-auto mt-35 max-w-5xl text-center">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Discover Our Story. Who We
            <br />
            Are And What We Stand For
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-[12px] leading-5 text-gray-600 md:text-sm md:leading-6">
            Get to know our story, our values and what makes us different.
            <br />
            We are committed to delivering innovative technology solutions.
          </p>
        </div>
      </section>


      <section className="bg-[#fff8e5] px-6 py-5 md:py-7">
        <div className="mx-auto max-w-6xl">

          <p className="mb-5 text-[11px] font-semibold text-gray-700 md:text-xs">
            Our Clients
          </p>

          <div className="flex flex-wrap items-center justify-between gap-6 md:gap-10">

           <img className="h-12" src="/mamtos.png" alt="" />

           <img className="h-7" src="/alpha.png" alt="" />

            <img className="h-8" src="/adalo.png" alt="" />

            <img className="h-12" src="/mamtos.png" alt="" />

            <img className="h-7" src="/alpha.png" alt="" />

          </div>
        </div>
      </section>


      <main className="mx-auto max-w-6xl px-6">

        <section className="grid items-center gap-8 py-10 md:grid-cols-2 md:gap-16 md:py-14">

          <div className="overflow-hidden rounded-lg">
            <img
              src="/img1.png"
              alt="Office"
              className="h-[220px] w-full object-cover md:h-[300px]"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Our Mission
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-gray-600 md:text-sm md:leading-7">
              At our company, technology is at the heart of everything we do.
              We are passionate about creating innovative solutions that help
              businesses overcome challenges and achieve their goals.
            </p>

            <p className="mt-3 text-[12px] leading-6 text-gray-600 md:text-sm md:leading-7">
              We combine creativity, technology and expertise to deliver
              products and services that create meaningful impact for our
              clients and their customers.
            </p>
          </div>

        </section>


        <section className="pb-14 md:pb-18">

          <p className="text-[11px] font-semibold text-orange-400 md:text-xs">
            Advantages Of Our Services
          </p>

          <h2 className="mt-1 text-2xl font-bold leading-tight md:text-3xl">
            Innovative Solution At
            <br />
            Techsolutions
          </h2>

          <p className="mt-3 max-w-xl text-[12px] leading-6 text-gray-600 md:text-sm md:leading-7">
            We provide modern digital solutions that help businesses improve
            their operations, reach more customers and grow successfully.
          </p>


          <div className="mt-8 grid gap-9 md:grid-cols-2 md:gap-x-20 md:gap-y-12">

            <div className="flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-purple-50 text-purple-500">
                ✦
              </div>

              <div>
                <h3 className="text-[11px] font-bold md:text-xs">
                  COMPREHENSIVE SOFTWARE
                  <br />
                  DEVELOPMENT SERVICES
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-gray-600 md:text-xs md:leading-6">
                  Our team provides complete software development solutions
                  tailored to your business needs.
                </p>
              </div>

            </div>


            <div className="flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-400">
                ◇
              </div>

              <div>
                <h3 className="text-[11px] font-bold md:text-xs">
                  EXPERT TRAINING
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-gray-600 md:text-xs md:leading-6">
                  We provide practical training that helps individuals develop
                  valuable technology skills.
                </p>
              </div>

            </div>


            <div className="flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-400">
                ✧
              </div>

              <div>
                <h3 className="text-[11px] font-bold md:text-xs">
                  INNOVATIVE SOLUTIONS
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-gray-600 md:text-xs md:leading-6">
                  We use modern technology and creative thinking to solve
                  complex business problems.
                </p>
              </div>

            </div>


            <div className="flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-purple-50 text-purple-500">
                ✦
              </div>

              <div>
                <h3 className="text-[11px] font-bold md:text-xs">
                  EXCEPTIONAL CUSTOMER
                  <br />
                  EXPERIENCE
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-gray-600 md:text-xs md:leading-6">
                  We focus on delivering quality solutions while ensuring
                  our customers have an excellent experience.
                </p>
              </div>

            </div>

          </div>
        </section>


        <section className="pb-16 md:pb-20">

          <p className="text-[11px] font-semibold text-orange-400 md:text-xs">
            Services
          </p>

          <h2 className="mt-1 text-2xl font-bold md:text-3xl">
            Our Services
          </h2>

          <p className="mt-3 max-w-xl text-[12px] leading-6 text-gray-600 md:text-sm md:leading-7">
            We provide a wide range of technology services designed to help
            businesses improve, grow and succeed.
          </p>


          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <div className="flex gap-4 rounded-lg border border-gray-100 bg-white p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-purple-50 text-purple-500">
                ♧
              </div>

              <div>
                <h3 className="text-[11px] font-bold md:text-xs">
                  MOBILE APP DEVELOPMENT
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-gray-600 md:text-xs md:leading-6">
                  Build modern mobile applications that are fast, reliable
                  and easy to use.
                </p>
              </div>

            </div>


            <div className="flex gap-4 rounded-lg border border-gray-100 bg-white p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-400">
                □
              </div>

              <div>
                <h3 className="text-[11px] font-bold md:text-xs">
                  WEBSITE DEVELOPMENT
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-gray-600 md:text-xs md:leading-6">
                  Responsive websites designed to give your business a strong
                  online presence.
                </p>
              </div>

            </div>


            <div className="flex gap-4 rounded-lg border border-gray-100 bg-white p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-purple-50 text-purple-500">
                ⚑
              </div>

              <div>
                <h3 className="text-[11px] font-bold md:text-xs">
                  DIGITAL MARKETING
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-gray-600 md:text-xs md:leading-6">
                  Helping businesses reach more customers through effective
                  digital marketing strategies.
                </p>
              </div>

            </div>


            <div className="flex gap-4 rounded-lg border border-gray-100 bg-white p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-400">
                ◎
              </div>

              <div>
                <h3 className="text-[11px] font-bold md:text-xs">
                  UI/UX DESIGN
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-gray-600 md:text-xs md:leading-6">
                  Beautiful and intuitive interfaces that provide a great
                  user experience.
                </p>
              </div>

            </div>

          </div>

        </section>


        <section className="border-t border-gray-100 py-14 md:py-18">

          <div className="mb-8">

            <p className="text-[11px] font-semibold text-orange-400 md:text-xs">
              Team
            </p>

            <h2 className="mt-1 text-2xl font-bold md:text-3xl">
              Our Teams
            </h2>

            <p className="mt-3 max-w-md text-[12px] leading-6 text-gray-600 md:text-sm">
              Meet the talented people behind our innovative solutions and
              exceptional service.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">

            <div className="relative overflow-hidden rounded-lg">

              <img
                src="/TOSH.png"
                alt="Team member"
                className="h-97 w-full object-cover"
              />

              <div className="absolute bottom-3 left-3 right-3 rounded-md bg-white px-4 py-3 text-center shadow-sm">
                <h3 className="text-[11px] font-bold">
                TOSH
                </h3>

                <p className="mt-1 text-[10px] text-gray-500">
                  CEO & FOUNDER
                </p>
              </div>

            </div>


            <div className="relative overflow-hidden justify-center rounded-lg">

              <img
                src="/aunty.jpeg"
                alt="Team member"
                className="h-97 w-full object-cover"
              />

              <div className="absolute bottom-3 left-3 right-3 rounded-md bg-white px-4 py-3 text-center shadow-sm">
                <h3 className="text-[11px] font-bold">
                 Tijani Fathia
                </h3>

                <p className="mt-1 text-[10px] text-gray-500">
                 Data scientist
                </p>
              </div>

            </div>


            <div className="relative overflow-hidden rounded-xs">

              <img
                src="/punk.jpg"
                alt="Team member"
                className="h-97 w-full object-cover"
              />

              <div className="absolute bottom-3 left-3 right-3 rounded-md bg-white px-4 py-3 text-center shadow-sm">
                <h3 className="text-[11px] font-bold">
                   Abdul Kadir MuBarak

                </h3>

                <p className="mt-1 text-[10px] text-gray-500">
                  FullStack Developer
                </p>
              </div>

            </div>

          </div>

          <div className="mt-8 flex justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-200"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-200"></span>
          </div>

        </section>

      </main>


      <section className="bg-[#fff8e5] px-6 py-14 md:py-18">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <h2 className="text-2xl font-bold md:text-3xl">
              What People Are Saying
            </h2>

            <p className="mx-auto mt-3 max-w-md text-[12px] leading-6 text-gray-600 md:text-sm">
              Hear from some of the people who have experienced our services
              and solutions.
            </p>

          </div>


          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-lg bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Customer"
                  className="h-9 w-9 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-[11px] font-bold">
                    MARIA JOHNSON
                  </h3>

                  <p className="text-[10px] text-gray-400">
                    Business Owner
                  </p>
                </div>

              </div>

              <p className="mt-4 text-[12px] leading-6 text-gray-600">
                "The team delivered exactly what we needed. Their attention
                to detail and professionalism was outstanding."
              </p>

            </div>


            <div className="rounded-lg bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
                  alt="Customer"
                  className="h-9 w-9 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-[11px] font-bold">
                    STEPHEN RICHARDS
                  </h3>

                  <p className="text-[10px] text-gray-400">
                    Business Owner
                  </p>
                </div>

              </div>

              <p className="mt-4 text-[12px] leading-6 text-gray-600">
                "Working with them was a great experience. The final product
                was modern, clean and exactly what we envisioned."
              </p>

            </div>

          </div>


          <div className="mt-8 flex justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
          </div>


          <div className="mt-5 text-right">
            <span className="text-[11px] font-semibold text-purple-600">
              View All Reviews
            </span>
          </div>

        </div>

      </section>


      <section className="px-6 py-10 md:py-14">

        <div className="mx-auto max-w-5xl rounded-lg bg-[#c326c9] px-6 py-10 text-center shadow-sm md:px-10 md:py-14">

          <h2 className="text-2xl font-bold text-white md:text-3xl">
            LIKE TO JOIN US?
          </h2>

          <p className="mx-auto mt-3 max-w-md text-[12px] leading-6 text-white/90 md:text-sm">
            Become part of our team and help us create innovative solutions
            that make a difference.
          </p>

          <button className="mt-5 rounded-full cursor-pointer bg-white px-6 py-2.5 text-[11px] font-semibold text-purple-600">
            Join Our Team
          </button>

        </div>

      </section>


    </div>
  );
};

export default App;