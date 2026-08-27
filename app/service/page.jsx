import React from "react";

const App = () => {
  return (
    <main className="min-h-screen bg-white text-[#202027]">

      <section className="relative overflow-hidden bg-[#fffaf0] px-6 py-16 md:py-24">

        <div className="absolute left-10 top-10 h-20 w-20 rotate-45 border border-[#f1e4c7]" />
        <div className="absolute left-28 top-20 h-20 w-20 rotate-45 border border-[#f1e4c7]" />

        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-purple-200/40 blur-3xl" />

        <div className="relative mx-auto mt-25 max-w-6xl text-center">

          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            We Believe In Innovation
            <br />
            And Creativity
          </h1>

          <div className="mt-5 flex justify-center gap-3 text-xs text-gray-400">
            <span>Home</span>
            <span>/</span>
            <span>Services</span>
          </div>

        </div>
      </section>


      <section className="px-6 py-16 md:py-24">

        <div className="mx-auto max-w-6xl">

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


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl border border-gray-100 bg-white p-7 shadow-sm">

              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f9e7fa] text-sm font-bold text-[#c72bc5]">
                01
              </div>

              <h3 className="text-sm font-bold">
                EXPERIENCED TEAM
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Our team combines creativity, experience and technology
                to deliver quality digital solutions.
              </p>

            </div>


            <div className="rounded-xl border border-gray-100 bg-white p-7 shadow-sm">

              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#fff5dc] text-sm font-bold text-orange-400">
                02
              </div>

              <h3 className="text-sm font-bold">
                TAILORED SOLUTIONS
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Every solution we create is designed around your unique
                business needs and objectives.
              </p>

            </div>


            <div className="rounded-xl border border-gray-100 bg-white p-7 shadow-sm">

              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#fff5dc] text-sm font-bold text-orange-400">
                03
              </div>

              <h3 className="text-sm font-bold">
                QUALITY ASSURANCE
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                We pay attention to every detail to ensure our products
                meet high quality standards.
              </p>

            </div>

          </div>

        </div>
      </section>


      <section className="px-6 pb-20">

        <div className="mx-auto max-w-6xl">

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


          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">


            <div>

              <img
                src="/69.png"
                alt="Mobile App Development"
                className="h-48 w-full rounded-xl object-cover"
              />

              <h3 className="mt-5 text-sm font-bold">
                MOBILE APP DEVELOPMENT
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                We create modern, fast and user-friendly mobile applications
                that help businesses connect with their customers.
              </p>

              <button className="mt-5 rounded-md bg-[#c72bc7] cursor-pointer px-5 py-2.5 text-xs font-semibold text-white">
                VIEW SERVICE
              </button>

            </div>


            <div>

              <img
                src="/70.png"
                alt="Website Development"
                className="h-48 w-full rounded-xl object-cover"
              />

              <h3 className="mt-5 text-sm font-bold">
                WEBSITE DEVELOPMENT
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                We build responsive and high-performing websites designed
                to give your business a strong online presence.
              </p>

              <button className="mt-5 rounded-md bg-orange-400 cursor-pointer px-5 py-2.5 text-xs font-semibold text-white">
                VIEW SERVICE
              </button>

            </div>


            <div>

              <img
                src="/71.png"
                alt="UI UX Design"
                className="h-48 w-full rounded-xl object-cover"
              />

              <h3 className="mt-5 text-sm font-bold">
                UI/UX DESIGN
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                We design clean, beautiful and intuitive interfaces that
                make digital products simple and enjoyable to use.
              </p>

              <button className="mt-5 rounded-md bg-[#c72bc5] cursor-pointer px-5 py-2.5 text-xs font-semibold text-white">
                VIEW SERVICE
              </button>

            </div>


            <div>

              <img
                src="/72.png"
                alt="Social Media Management"
                className="h-48 w-full rounded-xl object-cover"
              />

              <h3 className="mt-5 text-sm font-bold">
                SOCIAL MEDIA MANAGEMENT
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Grow your brand online with engaging content, strategic
                campaigns and consistent social media management.
              </p>

              <button className="mt-5 rounded-md bg-[#c72bc5] cursor-pointer px-5 py-2.5 text-xs font-semibold text-white">
                VIEW SERVICE
              </button>

            </div>


            <div>

              <img
                src="/73.png"
                alt="Software Development"
                className="h-48 w-full rounded-xl object-cover"
              />

              <h3 className="mt-5 text-sm font-bold">
                SOFTWARE DEVELOPMENT
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                We develop reliable software solutions tailored to your
                business needs and workflow.
              </p>

              <button className="mt-5 rounded-md bg-orange-400 cursor-pointer px-5 py-2.5 text-xs font-semibold text-white">
                VIEW SERVICE
              </button>

            </div>


            <div>

              <img
                src="/74.png"
                alt="Digital Marketing"
                className="h-48 w-full rounded-xl object-cover"
              />

              <h3 className="mt-5 text-sm font-bold">
                DIGITAL MARKETING
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Reach more customers with effective digital marketing
                strategies built around your business goals.
              </p>

              <button className="mt-5 rounded-md bg-[#c72bc5] cursor-pointer px-5 py-2.5 text-xs font-semibold text-white">
                VIEW SERVICE
              </button>

            </div>


            <div>

              <img
                src="/Rectangle 75.png"
                alt="SEO Management"
                className="h-48 w-full rounded-xl object-cover"
              />

              <h3 className="mt-5 text-sm font-bold">
                SEO MANAGEMENT
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Improve your search visibility and attract more organic
                traffic with effective SEO strategies.
              </p>

              <button className="mt-5 rounded-md bg-[#c72bc5] cursor-pointer px-5 py-2.5 text-xs font-semibold text-white">
                VIEW SERVICE
              </button>

            </div>

          </div>


          <div className="mt-16 flex justify-center gap-4 text-sm">

            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#c72bc5] font-bold text-white">
              1
            </span>

            <span className="flex h-8 w-8 items-center justify-center text-gray-400">
              2
            </span>

            <span className="flex h-8 w-8 items-center justify-center text-gray-400">
              3
            </span>

          </div>

        </div>
      </section>


      <section className="bg-[#fff9e8] px-6 py-16 md:py-20">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <h2 className="text-2xl font-bold md:text-3xl">
              What Our Clients Are Saying
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-500">
              Here's what some of our clients have to say about working
              with our team.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <div className="rounded-xl bg-white p-7">

              <div className="flex items-center gap-4">

                <div className="h-10 w-10 rounded-full bg-gray-200" />

                <div>
                  <h3 className="text-sm font-bold">
                    EMMANUEL JOHNSON
                  </h3>

                  <p className="mt-1 text-xs text-gray-400">
                    Happy Client
                  </p>
                </div>

              </div>

              <p className="mt-5 text-sm leading-6 text-gray-500">
                "Working with this team was an amazing experience.
                They understood our vision and delivered exactly
                what we needed."
              </p>

            </div>


            <div className="rounded-xl bg-white p-7">

              <div className="flex items-center gap-4">

                <div className="h-10 w-10 rounded-full bg-gray-200" />

                <div>
                  <h3 className="text-sm font-bold">
                    AMANDA MOHAMMED
                  </h3>

                  <p className="mt-1 text-xs text-gray-400">
                    Happy Client
                  </p>
                </div>

              </div>

              <p className="mt-5 text-sm leading-6 text-gray-500">
                "Professional, creative and very easy to work with.
                Our new website has completely transformed our
                online presence."
              </p>

            </div>

          </div>


          <div className="mt-8 text-right">
            <span className="text-sm font-semibold text-[#c72bc5] underline">
              View All Reviews
            </span>
          </div>

        </div>
      </section>


      <section className="px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <p className="mb-8 text-sm font-semibold">
            Our Trusted Clients
          </p>

          <div className="flex flex-wrap items-center justify-between gap-8">

           <img className="h-11" src="/mamtos.png" alt="" />

           <img className="h-6" src="/alpha.png" alt="" />

           <img className="h-8" src="/adalo.png" alt="" />

           <img className="h-11" src="/mamtos.png" alt="" />

           <img className="h-6" src="/alpha.png" alt="" />

          </div>

        </div>
      </section>


      <section className="px-6 pb-16">

        <div className="mx-auto max-w-6xl rounded-xl bg-gradient-to-r from-[#c529c6] via-[#d523ce] to-[#ec16d8] px-6 py-12 text-center text-white md:px-20 md:py-14">

          <h2 className="text-2xl font-bold md:text-3xl">
            LIKE TO WORK WITH US?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80">
            Let's turn your ideas into something amazing. Whether you need
            a website, application, branding or digital marketing,
            we're here to help.
          </p>

          <button className="mt-6 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#c72bc5]">
            Contact Us
          </button>

        </div>

      </section>

    </main>
  );
};

export default App;