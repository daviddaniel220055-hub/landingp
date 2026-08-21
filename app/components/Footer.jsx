"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative min-h-[397px] w-full overflow-hidden bg-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[100px] -top-[100px] h-[300px] w-[350px] rounded-full bg-[#f8e8fa] blur-[80px]" />

        <div className="absolute -bottom-[130px] -right-[100px] h-[320px] w-[380px] rounded-full bg-[#f5def6] blur-[85px]" />
      </div>

      {/* Main content */}
      <div className="relative mx-auto w-full max-w-[879px]">

        {/* ================= TOP ROW ================= */}

        <div className="flex items-start justify-between px-[0px] pt-[55px]">

          {/* Logo */}
          <div className="flex items-start">
            <Image
              src="/images/logo.png"
              alt="Joshconsult Technologies Inc"
              width={105}
              height={55}
              className="h-auto w-[62px] object-contain"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-[15px] pt-[13px] pr-[0px]">

            <Image
              src="/images/instagram.png"
              alt="Instagram"
              width={25}
              height={25}
              className="h-[25px] w-[25px] object-contain"
            />

            <Image
              src="/images/twitter.png"
              alt="Twitter"
              width={25}
              height={25}
              className="h-[25px] w-[25px] object-contain"
            />

            <Image
              src="/images/linkedin.png"
              alt="LinkedIn"
              width={25}
              height={25}
              className="h-[25px] w-[25px] object-contain"
            />

            <Image
              src="/images/facebook.png"
              alt="Facebook"
              width={25}
              height={25}
              className="h-[25px] w-[25px] object-contain"
            />

          </div>
        </div>


        {/* ================= FOOTER COLUMNS ================= */}

        <div className="mt-[46px] grid grid-cols-[1.7fr_0.9fr_1.05fr_0.7fr] gap-[55px]">

          {/* ================= CONTACT ================= */}

          <div>
            <h3 className="mb-[21px] text-[12px] font-medium text-[#111111]">
              Contact
            </h3>

            <div className="space-y-[17px] text-[9px] font-normal text-[#777777]">

              <div className="flex items-center">
                <span className="w-[65px] shrink-0">
                  Enquiries:
                </span>

                <span>
                  support@toshconsultinc.com
                </span>
              </div>

              <div className="flex items-center">
                <span className="w-[73px] shrink-0">
                  Partnership
                </span>

                <span>
                  partnership@toshconsultinc.com
                </span>
              </div>

              <div className="flex items-center">
                <span className="w-[50px] shrink-0">
                  Admin
                </span>

                <span>
                  admin@toshconsultinc.com
                </span>
              </div>

            </div>
          </div>


          {/* ================= PRODUCTS ================= */}

          <div>
            <h3 className="mb-[21px] text-[12px] font-medium text-[#111111]">
              Products
            </h3>

            <div className="space-y-[11px] text-[8px] font-normal text-[#777777]">
              <p>TismaBit</p>
              <p>FreeQuery</p>
              <p>FalconPay</p>
              <p>Alphabills</p>
              <p>SmartFarmers</p>
              <p>EasyTechAfrica</p>
              <p>Courses For Children</p>
            </div>
          </div>


          {/* ================= SERVICES ================= */}

          <div>
            <h3 className="mb-[21px] text-[12px] font-medium text-[#111111]">
              Services
            </h3>

            <div className="space-y-[11px] text-[8px] font-normal text-[#777777]">
              <p>Website Development</p>
              <p>Mobile App Development</p>
              <p>Digital Marketing</p>
              <p>Software Development</p>
              <p>UI/UX Design</p>
              <p>SEO Management</p>
              <p>Social Media Management</p>
            </div>
          </div>


          {/* ================= ABOUT ================= */}

          <div>
            <h3 className="mb-[21px] text-[12px] font-medium text-[#111111]">
              About
            </h3>

            <div className="space-y-[11px] text-[8px] font-normal text-[#777777]">
              <p>About Us</p>
              <p>Contact Us</p>
              <p>FAQ</p>
            </div>
          </div>

        </div>


        {/* ================= COPYRIGHT ================= */}

        <div className="mt-[54px] pb-[32px] text-center">
          <p className="text-[9px] font-normal text-[#777777]">
            Copyright © 2015 - 2023 | All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}