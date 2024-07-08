"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { recoilPersist } from "recoil-persist";
import { cartAtom } from "@/app/atoms/cart";

function Cart() {
  const navigate = useRouter();
  const addToCart = () => {
		// Adding product to cart
		const product = { id, name: productName, price, qty: 1, img: productImage };
		// check if product exist in cart
		let existingProduct = carts.find((cart) => cart.id == product.id);
		// end the function
		if (existingProduct) {
      alert("Product already exist in cart")
      closeModal()
      return
    };
		// add product to cart
		setCart((prev) => [...prev, product]);
    closeModal()
		alert("Product was added successfully");
	};

  return (
    <div>
      <Link href="/cart"></Link>
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
          <Link href="/addtocart">
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
      <div className="relative w-full h-[100vh] ">
        <Link
          href="/"
          className=" absolute w-20 h-8 text-xs text-white left-10 top-1 bg-black "
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

        <Image
          src="/IMG_8174.JPG"
          alt="/"
          width={300}
          height={500}
          className="absolute left-10 top-10"
        />
        <Image
          src="/IMG_8171.JPG"
          alt="/"
          width={300}
          height={90}
          className="absolute left-10 top-80 h-60"
        />
        <Image
          src="/IMG_8173.JPG"
          alt="/"
          width={400}
          height={400}
          className="absolute left-[29%] top-10"
        />
        <div className=" absolute right-0 top-10 w-[35vw] h-[90%] border p-2 ">
          <div className=" absolute font-bold text-2xl top-0">
            ADIDAS GAZELLE
          </div>
          <div className=" absolute font-bold text-lg top-10">$250</div>
          <div className=" absolute text-sm top-32">
            Promo codes will not apply to this product.
          </div>
          <div className=" absolute font-bold text-lg top-48">Colors</div>
          <div className="absolute border p-2 border-black top-56 w-14 h-14 bg-black cursor-pointer"></div>
          <div className="absolute border p-2 border-yellow-400 top-56 w-14 h-14 bg-yellow-400 left-20 cursor-pointer"></div>
          <div className="absolute border p-2 border-black top-56 w-14 h-14 bg-white left-40 cursor-pointer"></div>
          <div className="absolute border p-2 border-red-500 top-56 w-14 h-14 bg-red-500 left-60 cursor-pointer"></div>
          <div className=" absolute font-bold text-lg top-80">Size</div>
          <div className="absolute border p-2 border-black top-[67%] w-14 h-10 bg-black cursor-pointer text-white">
            8
          </div>
          <div className="absolute border p-2 border-black top-[67%] w-14 h-10 bg-black left-20 cursor-pointer text-white">
            {" "}
            8.5{" "}
          </div>
          <div className="absolute border p-2 border-black top-[67%] w-14 h-10 bg-black left-40 cursor-pointer text-white">
            {" "}
            9
          </div>
          <div className="absolute border p-2 border-black top-[67%] w-14 h-10 bg-black left-60 cursor-pointer text-white">
            {" "}
            9.5
          </div>
          <button 
            onClick
            type="submit" 
            className=" absolute border-2 p-2 border-gray-600 hover:border-none bottom-0 w-80 h-10 hover:bg-gray-500 rounded-md bg-gray-400 cursor-pointer text-white">
            ADD TO CART
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 right-5 top-2 absolute"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
          {/* <Link href="" className="absolute border-2 p-2 border-gray-600 hover:border-none bottom-0 w-80 h-10 hover:bg-gray-500 rounded-md bg-gray-400 cursor-pointer text-white">
            {" "}
            ADD TO CART
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 absolute top-2 right-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link> */}
          <div className="absolute border-2 p-2 border-gray-600 hover:border-none bottom-16 w-80 h-10 hover:bg-gray-500 rounded-md bg-gray-400 cursor-pointer text-white">
            ADD TO WISHLIST
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 absolute top-2 right-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className=" relative w-full h-72">
        <div className=" absolute top-4 cursor-pointer p-3 left-10 font-bold text-2xl h-16 w-96 border-2 border-black border-x-0">
          Highlights
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 right-1 top-4 absolute"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className=" absolute top-24 cursor-pointer p-3 left-10 font-bold text-2xl h-16 w-96 border-2 border-black border-x-0">
          Description
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 right-1 top-4 absolute"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className=" absolute top-44 cursor-pointer p-3 left-10 font-bold text-2xl h-16 w-96 border-2 border-black border-x-0">
          Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 right-1 top-4 absolute"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      <div className="relative w-full h-96 bg-white">
        <div className="absolute font-bold text-6xl top-16 left-12">
          {" "}
          COMPLETE THE LOOK{" "}
        </div>
        <Image
          src="/man-1.png"
          alt="/"
          width={200}
          height={50}
          className="absolute h-48 w-52 left-40 top-44"
        />
        <Image
          src="/man-2.png"
          alt="/"
          width={200}
          height={50}
          className="absolute h-48 w-52 left-[35%] top-44"
        />
        <Image
          src="/pexels-timegrocery.jpg"
          alt="/"
          width={200}
          height={50}
          className="absolute h-48 w-72 left-[57%] top-44"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 top-48 absolute left-[26%]"
        >
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 top-48 absolute left-[48%]"
        >
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 top-48 absolute right-[23%]"
        >
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        <div className="absolute border-gray-400 border-2 rounded-2xl p-2 w-32 right-20 top-11  hover:bg-gray-400 hover:text-white cursor-pointer">
          <p>VIEW ALL</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 absolute right-1 top-2"
          >
            <path
              fill-rule="evenodd"
              d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="w-full relative h-52">
        <div className="w-full h-20 bg-yellow-400 absolute top-14 ">
          <p className="absolute top-6 text-3xl left-60 ">
            JOIN OUR ADICLUB & GET 15% OFF
          </p>
          <button className=" absolute top-6 bg-yellow-600 text-white p-2 right-40 w-64 hover:bg-black border-white border-2">
            SIGN UP FOR FREE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 absolute top-2 right-3"
            >
              <path
                fill-rule="evenodd"
                d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <Image
          src="/facebook_icon-icons.com_53612.png"
          alt="/"
          width={20}
          height={20}
          className="absolute left-[40%] top-44 cursor-pointer"
        />
        <Image
          src="/linkedin_icon-icons.com_65929.png"
          alt="/"
          width={20}
          height={20}
          className="absolute left-[43%] top-44 cursor-pointer"
        />
        <Image
          src="/Instagram_icon-icons.com_66804.png"
          alt="/"
          width={20}
          height={20}
          className="absolute left-[46%] top-44 cursor-pointer "
        />
        <Image
          src="/twitter_socialnetwork_20007.png"
          alt="/"
          width={20}
          height={20}
          className="absolute left-[49%] top-44 cursor-pointer "
        />
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

export default Cart;
