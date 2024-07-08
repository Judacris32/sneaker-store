"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function Checkout() {
  const navigate = useRouter();

  return (
    <div>
      <nav relative w-full>
        <div className=" absolute top-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-20 h-20 top-3 left-10 absolute"
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a6.715 6.715 0 0 0-3.722 1.118.75.75 0 1 1-.828-1.25 8.25 8.25 0 0 1 12.8 6.883c0 3.014-.574 5.897-1.62 8.543a.75.75 0 0 1-1.395-.551A21.69 21.69 0 0 0 18.75 10.5 6.75 6.75 0 0 0 12 3.75ZM6.157 5.739a.75.75 0 0 1 .21 1.04A6.715 6.715 0 0 0 5.25 10.5c0 1.613-.463 3.12-1.265 4.393a.75.75 0 0 1-1.27-.8A6.715 6.715 0 0 0 3.75 10.5c0-1.68.503-3.246 1.367-4.55a.75.75 0 0 1 1.04-.211ZM12 7.5a3 3 0 0 0-3 3c0 3.1-1.176 5.927-3.105 8.056a.75.75 0 1 1-1.112-1.008A10.459 10.459 0 0 0 7.5 10.5a4.5 4.5 0 1 1 9 0c0 .547-.022 1.09-.067 1.626a.75.75 0 0 1-1.495-.123c.041-.495.062-.996.062-1.503a3 3 0 0 0-3-3Zm0 2.25a.75.75 0 0 1 .75.75c0 3.908-1.424 7.485-3.781 10.238a.75.75 0 0 1-1.14-.975A14.19 14.19 0 0 0 11.25 10.5a.75.75 0 0 1 .75-.75Zm3.239 5.183a.75.75 0 0 1 .515.927 19.417 19.417 0 0 1-2.585 5.544.75.75 0 0 1-1.243-.84 17.915 17.915 0 0 0 2.386-5.116.75.75 0 0 1 .927-.515Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="relative flex flex-row gap-5 pl-40 my-10">
          <Link
            href="/"
            className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            Men
          </Link>
          <Link
            href="/"
            className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            WOMEN
          </Link>
          <Link
            href="/"
            className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            KIDS
          </Link>
          <Link
            href="/"
            className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            PROMO
          </Link>

          <div>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search"
              className="font-bold border-slate-300 border-2 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 bg-green-50 ml-[300px]"
            />
          </div>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 absolute top-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 absolute top-2 right-24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <Link href="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 absolute top-2 right-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </Link>
        </div>
      </nav>
      <Link
          href="/"
          className=" absolute w-20 h-8 text-xs text-white left-10 top-32 bg-black "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-4 absolute top-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          <p className=" absolute top-2 left-7"> HOME</p>
        </Link>
        <Link
          href="/cart"
          className=" absolute w-20 h-8 text-xs text-white left-32 top-32 bg-black "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-4 absolute top-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          <p className=" absolute top-2 left-7"> BACK</p>
        </Link>
      <div className=" w-full h-20 text-4xl flex justify-center">CHECKOUT</div>
      <div className="w-full h-14 bg-black relative">
        <p className=" absolute left-20 font-bold top-4 text-white cursor-pointer">
          {" "}
          Returning customer? Click here to login
        </p>
        <p className=" absolute right-20 font-bold top-4 cursor-pointer text-white">
          {" "}
          Have a coupon? Click here to enter your code
        </p>
      </div>
      <div className="relative  h-[170vh] bg-gray-100 w-full border-red-500 ">
        <form className=" absolute border border-white rounded-sm w-[55%] bg-white p-10 h-[159vh] left-20 top-10">
          <div>
            <label className="flex text-3xl mb-5 font-bold font-serif text-gray-900">
              Billing details
            </label>
            <div className=" flex gap-48">
              <div>
                <label
                  htmlFor="last-name"
                  className="flex flex-row font-bold text-sm mb-4 leading-6 text-gray-900"
                >
                  First name *
                </label>

                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="family-name"
                  placeholder=" first name"
                  className=" w-52 rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="flex text-sm mb-4 font-bold leading-6 text-gray-900"
                >
                  Last name *
                </label>

                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder=" Last name"
                  className="w-52 rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <label
              htmlFor="email"
              className="block text-sm font-bold mt-4 text-gray-900"
            >
              Email address *
            </label>
            <div className="mt-4">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder=" Email"
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className=" mt-4">
            <label
              htmlFor="country"
              className="block text-sm  mb-4 font-medium leading-6 text-gray-900"
            >
              Country *
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm "
              >
                <option>United States</option>
                <option>Nigeria</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div className=" mt-4">
            <label
              htmlFor="last-name"
              className="flex flex-row font-bold text-sm mb-4 leading-6 text-gray-900"
            >
              Street address *
            </label>

            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              placeholder=" House number and street name"
              className=" w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className=" mt-4">
            <label
              htmlFor="town"
              className="flex flex-row font-bold text-sm mb-4 leading-6 text-gray-900"
            >
              Town / City *
            </label>

            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className=" w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className=" mt-4">
            <label
              htmlFor="town"
              className="flex flex-row font-bold text-sm mb-4 leading-6 text-gray-900"
            >
              Phone *
            </label>

            <input
              type="text"
              name="Phone"
              id="Phone"
              autoComplete="family-name"
              className=" w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className=" mt-4">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Order notes
            </label>
            <div className="mt-4">
              <textarea
                id="Order notes "
                name="Order notes "
                rows={3}
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                placeholder=" Notes about your order, eg. special notes for delivery. "
              />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="rounded-md bg-indigo-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
        <div className=" absolute w-96 h-96 bg-white rounded-md top-10 right-20">
          <div className="mt-6 flex justify-center font-serif font-bold">
            Order summary
          </div>
          <div className="absolute top-14 border-2 border-x-0 border-gray-200 h-10 w-full ">
            <div className=" absolute top-1 left-5 font-serif font-medium">
              Item's total (2)
            </div>
            <div className=" absolute top-1 right-5 font-serif font-medium text-xl">
              $500.00
            </div>
          </div>
          <div className="absolute top-24 border-2 border-x-0 border-t-0 border-gray-200 h-10 w-full ">
            <div className=" absolute top-1 left-5 font-serif font-medium">
              Total
            </div>
            <div className=" absolute top-1 right-5 font-serif font-medium text-xl">
              $500.00
            </div>
          </div>
          <div className=" flex mt-24 border-2 border-x-0 border-t-0 border-gray-200 h-16 p-3 w-full ">
            <div className=" flex font-serif  text-sm ">
              You will be able to add a voucher when selecting your payment
              method.
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6  "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>
          </div>
          <div className="flex mt-5 justify-center">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 w-60 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              CONFIRM ORDER
            </button>
          </div>
          <div className=" flex font-serif text-xs font-semibold justify-center mt-3">
            (Complete the steps in order to proceed)
          </div>

          <div className="mt-2 p-4 ">
            <div className="relative flex cursor-pointer ">
              <div className="flex h-6 gap-2 items-center">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="comments"
                  className="font-medium text-gray-900 text-xs"
                >
                  Debit/Credit Cards.
                </label>
                <Image
                  src="/Mastercard_icon-icons.com_60554.png"
                  alt="/"
                  width={30}
                  height={30}
                  className="flex"
                />
                <Image
                  src="/Visa_icon-icons.com_60549.png"
                  alt="/"
                  width={30}
                  height={30}
                  className="flex"
                />
                <Image
                  src="/Paypal-39_icon-icons.com_60555.png"
                  alt="/"
                  width={50}
                  height={50}
                  className="flex"
                />
              </div>
            </div>
            <div className="text-sm mt-2">
              <p className="text-gray-500">
                Make payment using your debit and credit cards.{" "}
              </p>
            </div>
          </div>
          <div className=" flex justify-between mt-7 p-3 text-xs font-semibold">
            {" "}
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </div>
        </div>
      </div>
      <div className="w-full h-44 relative">
        <div className="absolute left-14 top-10 text-sm font-bold">
          {" "}
          CANADA{" "}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 absolute top-10 left-60"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
        <div className="absolute left-80 top-10 text-sm font-bold">
          UNITED STATES
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 absolute top-10 left-[40%]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
        <p className="absolute left-14 top-16 text-sm font-bold">
          104 Toronto street, Toronto, xc
        </p>
        <p className="absolute left-80 top-16 text-sm font-bold">
          100 Corporate Woods, Suite 210
        </p>
        <p className="absolute left-14 top-36 text-sm font-bold">
          STAY IN TOUCH ALL RIGHTS RESERVED
        </p>
        <div className="absolute border-gray-400 border-2 rounded-2xl p-2 w-14 right-64 top-10 hover:bg-gray-400 hover:text-white cursor-pointer">
          MEN
        </div>
        <div className="absolute border-gray-400 border-2 rounded-2xl p-2 w-24 right-36 top-10 hover:bg-gray-400 hover:text-white cursor-pointer">
          WOMEN
        </div>
        <div className="absolute border-gray-400 border-2 rounded-2xl p-2 w-14 right-16 top-10 hover:bg-gray-400 hover:text-white cursor-pointer">
          KIDS
        </div>
      </div>
    </div>
  );
}

export default Checkout;
