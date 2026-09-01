"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const API_URL =
  "https://toshconsultblogfastapi.onrender.com/auth/admin-login";

export default function AdminPage() {
  const searchParams = useSearchParams();

  // If user came from /dashboard, send them back there after login.
  // Otherwise, default to /dashboard.
  const redirectTo = searchParams.get("redirect") || "/dashboard";

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        if (response.status === 422 && data?.detail) {
          if (Array.isArray(data.detail)) {
            setError(
              data.detail
                .map((item) => item.msg)
                .filter(Boolean)
                .join(", ") || "Please check your information."
            );
          } else {
            setError(String(data.detail));
          }
        } else {
          setError(
            data?.detail ||
              data?.message ||
              "Invalid admin email or password."
          );
        }

        return;
      }

      console.log("Admin login response:", data);

      /*
       * =========================================================
       * GET TOKEN
       * =========================================================
       */

      let token = null;

      if (typeof data === "string") {
        token = data;
      } else if (data?.token) {
        token = data.token;
      } else if (data?.access_token) {
        token = data.access_token;
      } else if (data?.accessToken) {
        token = data.accessToken;
      }

      /*
       * =========================================================
       * MAKE SURE API ACTUALLY RETURNED A TOKEN
       * =========================================================
       */

      if (!token) {
        console.error("No token returned by admin login:", data);

        setError(
          "Login succeeded, but the server did not return an admin token."
        );

        return;
      }

      /*
       * =========================================================
       * SAVE ADMIN TOKEN
       * =========================================================
       */

      localStorage.setItem("admin_token", token);

      setSuccess("Admin login successful!");

      /*
       * =========================================================
       * GO TO DASHBOARD
       * =========================================================
       */

      setTimeout(() => {
        window.location.href = redirectTo;
      }, 500);
    } catch (err) {
      console.error("Login error:", err);

      setError(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="flex min-h-screen w-full items-start justify-center px-6">
        <div className="mt-[150px] w-full max-w-[600px]">

          {/* LOGO */}
          <div className="mb-[60px] flex justify-center">
            <img
              src="/images/logo.png"
              alt="Toshconsult Technologies Inc"
              className="h-auto w-[140px] object-contain"
            />
          </div>

          {/* TITLE */}
          <h1 className="mb-[50px] text-[34px] font-bold leading-[42px] text-[#111111]">
            Sign In As An Admin
          </h1>

          {/* FORM */}
          <form onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className="mb-[35px]">
              <label
                htmlFor="email"
                className="mb-[15px] block text-[16px] font-medium leading-[22px] text-[#666666]"
              >
                EMAIL ADDRESS
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="James.Mike@Gmail.Com"
                autoComplete="email"
                disabled={loading}
                className="
                  h-[68px]
                  w-full
                  rounded-[16px]
                  border
                  border-[#dddddd]
                  bg-white
                  px-[24px]
                  text-[18px]
                  font-normal
                  text-[#444444]
                  outline-none
                  placeholder:text-[#888888]
                  transition-all
                  duration-200
                  focus:border-[#cccccc]
                  focus:ring-2
                  focus:ring-[#ff9900]/10
                  disabled:cursor-not-allowed
                  disabled:bg-[#fafafa]
                "
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-[32px]">
              <label
                htmlFor="password"
                className="mb-[15px] block text-[16px] font-medium leading-[22px] text-[#666666]"
              >
                PASSWORD
              </label>

              <div className="relative w-full">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••••••"
                  autoComplete="current-password"
                  disabled={loading}
                  className="
                    h-[68px]
                    w-full
                    rounded-[16px]
                    border
                    border-[#dddddd]
                    bg-white
                    px-[24px]
                    pr-[70px]
                    text-[18px]
                    font-normal
                    tracking-[1px]
                    text-[#444444]
                    outline-none
                    placeholder:text-[#888888]
                    transition-all
                    duration-200
                    focus:border-[#cccccc]
                    focus:ring-2
                    focus:ring-[#ff9900]/10
                    disabled:cursor-not-allowed
                    disabled:bg-[#fafafa]
                  "
                />

                {/* SHOW / HIDE PASSWORD */}
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  disabled={loading}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  className="
                    absolute
                    right-[18px]
                    top-1/2
                    flex
                    h-[42px]
                    w-[42px]
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-transparent
                    p-0
                    text-[#777777]
                    transition-colors
                    duration-200
                    hover:text-[#333333]
                    disabled:cursor-not-allowed
                  "
                >
                  {showPassword ? (
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 3L21 21"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      <path
                        d="M10.6 10.6C10.24 10.96 10.04 11.45 10.04 12C10.04 13.08 10.92 13.96 12 13.96C12.55 13.96 13.04 13.76 13.4 13.4"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      <path
                        d="M9.88 5.08C10.55 4.87 11.26 4.76 12 4.76C18.5 4.76 22 12 22 12C22 12 20.83 14.42 18.6 16.44"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M6.61 6.61C3.7 8.55 2 12 2 12C2 12 5.5 19.24 12 19.24C13.64 19.24 15.13 18.84 16.44 18.16"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12C2 12 5.5 5 12 5C18.5 5 22 12 22 12C22 12 18.5 19 12 19C5.5 19 2 12 2 12Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* ERROR */}
            {error && (
              <div className="mb-[28px] rounded-[14px] border border-red-100 bg-red-50 px-[20px] py-[16px]">
                <p className="text-[15px] leading-[22px] text-red-600">
                  {error}
                </p>
              </div>
            )}

            {/* SUCCESS */}
            {success && (
              <div className="mb-[28px] rounded-[14px] border border-green-100 bg-green-50 px-[20px] py-[16px]">
                <p className="text-[15px] leading-[22px] text-green-600">
                  {success}
                </p>
              </div>
            )}

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                h-[68px]
                w-full
                rounded-[16px]
                bg-[#ff9900]
                text-[18px]
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:bg-[#f28f00]
                hover:shadow-md
                active:scale-[0.98]
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}