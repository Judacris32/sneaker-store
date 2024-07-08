"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav relative w-full>
        <div className=" absolute top-0">
          <svg
            xmlns="http://www.nw3.org/2000/svg"
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
              className="absolute right-40 top-0 font-bold border-slate-300 border-2 px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 bg-green-50 ml-[300px]"
            />
          </div>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 absolute top-2 right-32"
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
      <div class="relative h-96 bg-black">
        <img
          class="absolute w-full aspect-video h-96"
          src="/pexels-shyam.jpg"
        />
        <h1 class="absolute top-[27%] left-[25%] font-bold text-8xl text-white">
          {" "}
          INFINITE SHOE{" "}
        </h1>
        <h1 class="absolute top-[50%] left-[34%] font-bold text-8xl text-white">
          {" "}
          CHOICES{" "}
        </h1>
      </div>
      <div className="  w-full h-20 relative">
        <div className="absolute left-6 top-3 h-16 w-[40%] ">
          <p className=" text-base text-balance font-bold left-16 absolute ">
            ADIDAS designs for athletes of all kinds. Creators who love to
            change the game. People who challenge conventions, break the rules,
            and define new ones. Then break them all over again. We design
            sports apparel that gets you moving, winning, and living life to the
            fullest.
          </p>
        </div>
        <div className=" absolute right-0 flex flex-row gap-5 ">
          <svg
            role="img"
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            class="w-10 h-20"
          >
            <path d="m 1.9172694,10.965625 c -0.25408,-0.038 -0.4418,-0.1401 -0.62859,-0.3418 -0.13883,-0.15 -0.21631,-0.3002 -0.25915,-0.5024 -0.0393,-0.1853999 -0.0394,-0.2409999 -10e-4,-0.4203999 0.096,-0.4532 0.45055,-0.7873 0.90346,-0.8515 0.1936,-0.027 0.40808,0 0.58192,0.085 0.0749,0.035 0.13988,0.064 0.14444,0.064 0.005,0 0.008,-0.024 0.008,-0.053 l 0,-0.053 0.23538,0 0.23538,0 0,1.0165 0,1.0163999 -0.23538,0 -0.23538,0 0,-0.053 c 0,-0.029 -0.004,-0.053 -0.008,-0.053 -0.005,0 -0.0696,0.029 -0.14444,0.063 -0.0749,0.035 -0.19873,0.073 -0.27523,0.085 -0.15404,0.024 -0.15458,0.024 -0.32098,-3e-4 z m 0.40657,-0.5218 c 0.19136,-0.097 0.34237,-0.3271 0.34237,-0.5222999 0,-0.3187 -0.27665,-0.6025 -0.58691,-0.6021 -0.32279,5e-4 -0.59066,0.2662 -0.58953,0.5849 8.4e-4,0.2349999 0.11604,0.4216999 0.32556,0.5276999 0.12111,0.061 0.14849,0.067 0.28383,0.059 0.0835,-0.01 0.18291,-0.026 0.22468,-0.047 z m 1.91592,0.5215 c -0.16478,-0.025 -0.40051,-0.1385 -0.53418,-0.2573 -0.38992,-0.3466 -0.47079,-0.9414999 -0.18755,-1.3796999 0.22203,-0.3436 0.63957,-0.5352 1.04182,-0.4783 0.13363,0.019 0.34421,0.089 0.38423,0.1285 0.0112,0.011 0.028,0.02 0.0374,0.02 0.009,0 0.0171,-0.1829 0.0171,-0.4065 l 0,-0.4066 0.24608,0 0.24609,0 0,1.3695 0,1.3694999 -0.24609,0 -0.24608,0 0,-0.053 c 0,-0.062 -0.006,-0.064 -0.0703,-0.023 -0.15008,0.097 -0.46832,0.1509 -0.68858,0.1176 z m 0.4337,-0.5346 c 0.21474,-0.1073 0.3268,-0.2912 0.32355,-0.5309999 -0.004,-0.3121 -0.22853,-0.5503 -0.54111,-0.5745 -0.33931,-0.026 -0.63417,0.251 -0.63417,0.5963 0,0.2317999 0.19392,0.4837999 0.42672,0.5543999 0.12958,0.039 0.29005,0.022 0.42501,-0.045 z m 2.69047,0.5339 c -0.19731,-0.029 -0.42034,-0.1458 -0.57752,-0.3029 -0.21367,-0.2137 -0.31128,-0.4501 -0.31128,-0.7538999 0,-0.3039 0.0976,-0.5403 0.31128,-0.754 0.31515,-0.3151 0.79001,-0.403 1.18367,-0.2191 0.0749,0.035 0.13987,0.064 0.14443,0.064 0.005,0 0.008,-0.1832 0.008,-0.4072 l 0,-0.4073 0.24073,0.01 0.24074,0.01 0.005,1.3641 0.006,1.3641999 -0.24624,0 -0.24624,0 0,-0.053 c 0,-0.029 -0.004,-0.053 -0.008,-0.053 -0.005,0 -0.0696,0.029 -0.14443,0.063 -0.0749,0.035 -0.19874,0.073 -0.27524,0.085 -0.15475,0.025 -0.15247,0.025 -0.33091,0 z m 0.40626,-0.5188 c 0.45808,-0.2134 0.47012,-0.8278999 0.021,-1.0690999 -0.1217,-0.065 -0.39148,-0.065 -0.51453,0 -0.21346,0.1134 -0.34612,0.3517 -0.32506,0.584 0.0131,0.1446999 0.0567,0.2385999 0.16254,0.3499999 0.17582,0.1852 0.43428,0.2384 0.6561,0.1351 z m 1.92541,0.5217 c -0.52512,-0.083 -0.90893,-0.5307 -0.90893,-1.0596999 0,-0.5905 0.46628,-1.0591 1.05874,-1.064 0.1821796,0 0.3774696,0.043 0.4987096,0.1134 0.0893,0.052 0.0897,0.052 0.0897,-0.012 l 0,-0.053 0.24608,0 0.24608,0 0,1.0165 0,1.0163999 -0.24608,0 -0.24608,0 0,-0.053 c 0,-0.061 -0.0148,-0.065 -0.0746,-0.02 -0.11376,0.086 -0.4665196,0.1481 -0.6636496,0.1168 z m 0.3538696,-0.5037 c 0.13273,-0.047 0.26506,-0.1645 0.32885,-0.2925 0.11124,-0.2232999 0.0555,-0.5441999 -0.12019,-0.6919999 -0.3129896,-0.2634 -0.7492496,-0.1843 -0.9311696,0.1687 -0.0763,0.1481 -0.0793,0.3616999 -0.007,0.5115999 0.0592,0.1229 0.20689,0.2582 0.32915,0.3016 0.11772,0.042 0.28656,0.043 0.4004296,0 z m 1.71233,0.4499 c -0.36473,-0.083 -0.58616,-0.3015 -0.60669,-0.5994 l -0.004,-0.064 0.27283,-0.01 c 0.26396,-0.01 0.27283,0 0.27283,0.039 0,0.084 0.065,0.1732 0.15656,0.2147 0.0637,0.029 0.13904,0.041 0.26104,0.041 0.20165,6e-4 0.30438,-0.042 0.34598,-0.1442 0.0233,-0.057 0.0214,-0.072 -0.015,-0.1183 -0.0547,-0.07 -0.14372,-0.1033 -0.49183,-0.1864 -0.47164,-0.1125999 -0.64521,-0.2209999 -0.7069,-0.4412999 -0.0603,-0.2154 0.0228,-0.51 0.18165,-0.6445 0.21081,-0.1783 0.619,-0.24 0.99601,-0.1504 0.30028,0.071 0.49838,0.2744 0.51718,0.5301 l 0.007,0.096 -0.25932,0.01 -0.25933,0.01 -0.012,-0.06 c -0.007,-0.033 -0.0319,-0.085 -0.0562,-0.1161 -0.079,-0.1005 -0.35952,-0.1324 -0.52011,-0.059 -0.0657,0.03 -0.11213,0.1259 -0.0918,0.1899 0.0215,0.068 0.11697,0.1065 0.50503,0.2057 0.19515,0.05 0.39469,0.1111 0.44343,0.1359 0.23063,0.1177 0.31372,0.2615999 0.30063,0.5206999 -0.0143,0.283 -0.16464,0.4721 -0.45692,0.5746 -0.16996,0.06 -0.58049,0.076 -0.77979,0.031 z m -6.0304696,-1.0326999 0.006,-1.0432 0.26213,-0.01 0.26213,-0.01 0,1.0492 0,1.0491999 -0.26768,0 -0.26769,0 0.006,-1.0431999 z m -0.005,-1.439 0,-0.2354 0.26748,0 0.26748,0 0,0.2354 0,0.2353 -0.26748,0 -0.26748,0 0,-0.2353 z m 6.8034496,0.1295 c -0.10343,-0.031 -0.14849,-0.067 -0.19127,-0.1508 -0.0549,-0.1076 -0.0543,-0.1986 0.002,-0.2987 0.0836,-0.1487 0.26694,-0.2014 0.42155,-0.1211 0.21753,0.1129 0.2037,0.446 -0.0228,0.5488 -0.0977,0.044 -0.12539,0.047 -0.20944,0.022 z m 0.21693,-0.081 c 0.21843,-0.129 0.11715,-0.477 -0.13883,-0.477 -0.17447,0 -0.30158,0.1694 -0.24827,0.331 0.0533,0.1615 0.24105,0.2323 0.3871,0.146 z m -0.27988,-0.2232 0,-0.1742 0.1075,0.013 c 0.0591,0.01 0.1169,0.019 0.12839,0.026 0.0381,0.024 0.0218,0.1143 -0.0267,0.1483 -0.0262,0.018 -0.0379,0.033 -0.026,0.033 0.0118,0 0.0386,0.029 0.0595,0.064 0.0327,0.055 0.0334,0.064 0.005,0.064 -0.018,0 -0.0471,-0.028 -0.0646,-0.062 -0.0268,-0.052 -0.0722,-0.088 -0.11009,-0.088 -0.005,0 -0.009,0.034 -0.009,0.075 0,0.052 -0.01,0.075 -0.0321,0.075 -0.0259,0 -0.0321,-0.034 -0.0321,-0.1742 z m 0.20529,-0.043 c 0.0182,-0.029 -0.0477,-0.082 -0.10239,-0.082 -0.027,0 -0.0387,0.016 -0.0387,0.053 0,0.045 0.0101,0.053 0.0629,0.053 0.0346,0 0.0698,-0.011 0.0782,-0.025 z m -10.2922696,-0.2552 c -0.0724,-0.1234 -0.11791,-0.2227 -0.10699,-0.2332 0.0283,-0.027 1.69944,-1.0276 1.7166,-1.0276 0.008,0 0.20182,0.3105 0.43048,0.6901 0.22866,0.3795 0.42948,0.7118 0.44626,0.7382 l 0.0305,0.048 -1.19542,-4e-4 -1.19542,-4e-4 -0.12602,-0.2149 z m 2.67236,-0.9114 c -0.37203,-0.6199 -0.67828,-1.1362 -0.68055,-1.1474 -0.006,-0.029 1.72093,-1.0702 1.73969,-1.049 0.0124,0.014 1.95316,3.249 1.9842,3.3074 0.005,0.01 -0.52595,0.016 -1.17919,0.016 l -1.18773,0 -0.67642,-1.1271 z m 2.65122,-0.9451 -1.24333,-2.0722 0.8617,-0.517 c 0.47393,-0.2844 0.86974,-0.5169 0.87957,-0.5167 0.017,4e-4 3.1099496,5.1369 3.1099496,5.1648 0,0.01 -0.53203,0.013 -1.18228,0.013 l -1.1822696,0 -1.24334,-2.0722 z" />
          </svg>
          <svg
            role="img"
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            class="w-10 h-20"
          >
            <path d="m 1.7414517,9.9869992 c -0.35187,-0.1687 -0.65089,-0.4752 -0.71578,-0.7337 -0.0760999,-0.3034 0.0231,-0.8892 0.22683,-1.3384 0.1922,-0.4239 0.73357,-1.273 1.07388,-1.6844 l 0.16019,-0.1936 -0.1292,0.3695 c -0.17969,0.5139 -0.17252,1.0639 0.0175,1.3459 0.28427,0.4218 0.84807,0.6471 1.35703,0.5421 0.37495,-0.077 4.01189,-1.0646 4.14367,-1.1248 0.0919,-0.042 -0.0151,-0.06 -0.37112,-0.063 l -0.5002,0 -0.005,-0.3388 c -0.003,-0.1864 -0.0244,-0.4632 -0.0484,-0.6151 l -0.0436,-0.2761 -0.22267,0.615 -0.22268,0.615 -0.37434,0 c -0.20589,0 -0.37434,-0.025 -0.37434,-0.055 0,-0.03 0.20619,-0.6038 0.45821,-1.2747 0.25201,-0.6708 0.51549,-1.3722 0.58551,-1.5586 l 0.12732,-0.3388 0.38261,0 c 0.21044,0 0.38262,0.01 0.38262,0.02 0,0.011 -0.0724,0.2049 -0.16094,0.4307 -0.0885,0.2259 -0.15326,0.4184 -0.14387,0.4278 0.009,0.01 0.17621,-0.1834 0.37071,-0.4284 l 0.35363,-0.4455 1.1848,0 c 1.0579293,0 1.1805793,0.01 1.1453493,0.1005 -0.0217,0.057 -0.057,0.1727 -0.0784,0.2581 -0.036,0.1435 -0.0701,0.1554 -0.4428793,0.1554 l -0.40388,0 -0.12906,0.3389 -0.12906,0.3388 0.34631,0.019 c 0.19047,0.011 0.34631,0.048 0.34631,0.083 0,0.035 -0.0414,0.1626 -0.0921,0.2839 -0.088,0.2107 -0.10858,0.2213 -0.46435,0.2399 l -0.37223,0.02 -0.1488,0.3849 c -0.0819,0.2117 -0.14881,0.3933 -0.14881,0.4034 0,0.01 0.2024,0.018 0.44977,0.018 0.37328,0 0.44345,0.017 0.41262,0.097 -0.0204,0.053 -0.008,0.097 0.0281,0.097 0.0359,0 0.8135193,-0.2033 1.7280293,-0.4518 1.56793,-0.426 2.00125,-0.5135 1.50299,-0.3034 -0.1192,0.05 -2.13365,0.9197 -4.4765293,1.9321 -2.34289,1.0124 -4.47763,1.9198 -4.74387,2.0164 -0.31654,0.1148998 -0.66276,0.1859998 -1.00041,0.2053998 -0.44994,0.026 -0.55817,0.01 -0.84169,-0.1262998 z m 6.61127,-4.6535 c 0.25232,-0.6709 0.45742,-1.2372 0.45578,-1.2586 -0.002,-0.021 -0.24801,0.2226 -0.54749,0.542 l -0.54451,0.5809 -3.9e-4,0.5486 c -5.2e-4,0.6754 0.0612,1.115 0.13065,0.9315 0.026,-0.069 0.25366,-0.6736 0.50598,-1.3444 z m -5.60525,1.4325 c 0.0715,-0.188 0.34265,-0.9082 0.60255,-1.6004 l 0.47254,-1.2586 0.42149,-0.019 0.42149,-0.019 -0.0227,0.277 c -0.0545,0.6647 -0.0775,1.0839 -0.0595,1.0839 0.0107,0 0.13135,-0.3048 0.26819,-0.6773 l 0.2488,-0.6773 0.37112,-7e-4 c 0.20411,0 0.37111,0.024 0.37111,0.055 0,0.03 -0.20619,0.6039 -0.4582,1.2747 -0.25202,0.6709 -0.5155,1.3722 -0.58552,1.5586 l -0.12731,0.3389 -0.42185,0 -0.42185,0 0.0384,-0.6616 c 0.0211,-0.3639 0.024,-0.6325 0.007,-0.597 -0.0175,0.035 -0.12882,0.3259 -0.24727,0.6454 l -0.21537,0.5809 -0.39629,0.019 -0.39628,0.019 0.13,-0.3419 z m 2.06239,0.2809 c 0,-0.03 0.20619,-0.6039 0.4582,-1.2748 0.25202,-0.6708 0.5155,-1.3722 0.58552,-1.5585 l 0.12731,-0.3389 0.388,0 c 0.2134,0 0.37831,0.025 0.36648,0.056 -0.0118,0.031 -0.28291,0.7566 -0.6024,1.6129 l -0.58088,1.5568 -0.37112,6e-4 c -0.20411,7e-4 -0.37111,-0.024 -0.37111,-0.054 z" />
          </svg>
          <svg
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-20"
          >
            <g id="Logos">
              <g id="Puma">
                <path
                  d="M21.17,12.59c-.1,0-.19.38-.38.57s-.32.13-.41.29,0,.17-.06.28S20,14,20,14.17s.23.29.42.46.17.24.36.31.4-.13.61-.06.34.09.38.27,0,.42-.21.39a2.31,2.31,0,0,0-.77-.07c-.46,0-1,.2-1,.71a.59.59,0,0,0,.67.56c.23,0,.12-.32.25-.46s1.13.61,2,.61a1.15,1.15,0,0,0,.93-.39s.06-.07.1-.07a.39.39,0,0,1,.13.05,4.61,4.61,0,0,0,3.9,1.75,1.82,1.82,0,0,1,1.14.5,3,3,0,0,1,.66,1.18A6.4,6.4,0,0,0,31,22l.68.53s0,.11,0,.17c0,.44-.08,1.71.87,1.77.23,0,.17-.15.17-.27a1.31,1.31,0,0,1,.08-.67c.16-.31-.34-.45-.33-1.13,0-.5-.41-.42-.62-.8a1,1,0,0,1-.23-.61,5.29,5.29,0,0,0-.51-2.78c-.15-.19-.27-.26-.13-.35a2.42,2.42,0,0,0,1-1,6.08,6.08,0,0,1,1.32-2.29,3.89,3.89,0,0,1,.54-.36,3.64,3.64,0,0,0,.89-.51c.22-.22.4-.68.18-.95s-.73-.07-.93,0c-1.46.86-1.67,2.39-2.18,3.26a2.33,2.33,0,0,1-1.64,1.26A3,3,0,0,1,28.77,17a7.13,7.13,0,0,1-1.92-1.27c-.31-.24-2.69-2.58-4.63-2.68,0,0-.24-.48-.3-.48s-.29.28-.39.32-.26-.33-.36-.32"
                  id="path100"
                />
                <path
                  d="M12.65,26.59a.36.36,0,0,1-.34-.34v-6h-2v6.65a.6.6,0,0,0,.59.6h3.48a.59.59,0,0,0,.59-.6V20.21H13v6a.36.36,0,0,1-.34.34"
                  id="path102"
                />
                <path
                  d="M19.31,20.21h-3a.65.65,0,0,0-.65.65v6.6h2V21.41a.35.35,0,0,1,.34-.34.34.34,0,0,1,.34.33v6.06h2V21.4a.34.34,0,0,1,.68,0v6.05h2v-6.6a.65.65,0,0,0-.65-.65h-3"
                  id="path104"
                />
                <path
                  d="M9,25.64H7v1.82H5V20.21H9a.64.64,0,0,1,.64.65V25A.65.65,0,0,1,9,25.64ZM7.66,21.42a.34.34,0,0,0-.33-.35H7v3.67h.34a.34.34,0,0,0,.33-.34v-3"
                  id="path106"
                />
                <path
                  d="M26.31,27.46V25.64h-.68v1.82h-2v-6.6a.65.65,0,0,1,.65-.65h3.36a.65.65,0,0,1,.64.65v6.6Zm0-2.72V21.4a.34.34,0,0,0-.34-.32.34.34,0,0,0-.34.33v3.33h.68"
                  id="path112"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="w-full h-[150vh] relative ">
        <p className="absolute left-[35%] top-20 text-6xl font-bold">
          {" "}
          MEET A NEW{" "}
        </p>

        <Image
          src="/travis.png"
          alt="/"
          width={200}
          height={50}
          className="absolute left-[35%] top-[20%] h-auto w-96"
        />
        <p className="absolute left-[30%] top-36 text-6xl font-bold">
          CLASSIC ARRIVAL
        </p>
        <Image
          src="/pink-sneakers.png"
          alt="/"
          width={200}
          height={50}
          className="absolute left-[8%] top-[25%] h-80 w-80"
        />
        <Image
          src="/green-sneakers.png"
          alt="/"
          width={200}
          height={50}
          className="absolute right-[10%] top-[25%] h-80 w-72"
        />
        <Image
          src="/dark-sneakers.png"
          alt="/"
          width={200}
          height={50}
          className="absolute left-[8%] top-[63%] h-80 w-80"
        />
        <Image
          src="/green-sneakers-full.png"
          alt="/"
          width={200}
          height={50}
          className="absolute right-[10%] top-[63%] h-80 w-72"
        />
        <Image
          src="/pink-bottom.png"
          alt="/"
          width={200}
          height={50}
          className="absolute left-[35%] top-[63%] h-80 w-96"
        />
      </div>
      <div className="w-full h-44 relative">
        <p className=" h-44 w-80 text-justify text-sm absolute left-[38%] font-bold">
          Through sports, we have the power to change lives. Sports keep us fit.
          They keep us mindful. They bring us together. Athletes inspire us.
          They help us to get up and get moving.
        </p>
        <div className="absolute border-gray-400 border-2 rounded-2xl w-56 p-2 left-[42%] top-24 hover:bg-gray-400 hover:text-white">
          <p>EXPLORE PRODUCT</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 absolute left-48 top-2"
          >
            <path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
          </svg>
        </div>
      </div>
      <div className="w-full h-32 relative ">
        <p className="absolute font-bold text-6xl top-8 left-12">NEW ARRIVAL</p>
        <p className="absolute font-bold text-slate-300 left-[38%] text-3xl top-14">
          WHAT'S TRENDING
        </p>
        <div className="absolute border-gray-400 border-2 rounded-2xl p-2 w-32 right-20 top-11 hover:bg-gray-400 hover:text-white">
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
      <div className="w-full h-80 relative">
        <Image
          src="/IMG_8173.JPG"
          alt="/"
          width={200}
          height={50}
          className="absolute h-48 w-52 left-32 top-4"
        />
        <div className=" absolute top-44 left-36 font-extrabold text-sm text-black  border-2 p-2 text-center rounded ">
          FCTRY LAB X NLE <br/> CHOPPA "DUCK BOOT"
        </div>
        <Image
          src="/IMG_8164.JPG"
          alt="/"
          width={200}
          height={50}
          className="absolute h-48 w-52 left-[31%] top-4"
        />
        <div className=" absolute top-44 left-[33%] font-extrabold text-sm text-black bg-white  border-2 p-2 text-center rounded ">
          AIR JORDAN 3 <br/> "VALENTINE'S DAY"
        </div>
        <Image
          src="/IMG_8185.JPG"
          alt="/"
          width={200}
          height={50}
          className="absolute h-48 w-52 left-[51%] top-4"
        />
        <div className=" absolute top-44 left-[54%] font-extrabold text-sm text-black bg-white  border-2 p-2 text-center rounded ">
          AIR JORDAN 4 <br/> "MILITARY BLUE"
        </div>
        <Image
          src="/IMG_8177.JPG"
          alt="/"
          width={200}
          height={50}
          className="absolute h-44 w-56 right-40 top-4"
        />
        <div className=" absolute top-44 right-48 font-extrabold text-sm text-black bg-white border-2 p-2 text-center rounded ">
          AIR JORDAN 4 <br/> "WHITE THUNDER"
        </div>
        <div className="absolute left-52 top-[75%] text-xs font-bold text-gray-700">
          $250
        </div>
        
        <div className="absolute left-[38%] top-[75%] text-xs font-bold text-gray-700">
          $250
        </div>
        
        <div className="absolute left-[58%] top-[75%] text-xs font-bold text-gray-700">
          $250
        </div>
        
        <div className="absolute right-[20%] top-[75%] text-xs font-bold text-gray-700">
          $250
        </div>
        <Link href="/cart">
          <button className="absolute top-[83%] left-28 text-xs border-2 font-bold border-black px-2 py-2 text-slate-700 rounded-lg  hover:bg-red-600 hover:text-white hover:border-white">
            PREVIEW
          </button>
        </Link>
        <Link href="/preview">
          <button className="absolute top-[83%] left-[30%] text-xs border-2 font-bold border-black px-2 py-2 text-slate-700 rounded-lg  hover:bg-red-600 hover:text-white hover:border-white">
            PREVIEW
          </button>
        </Link>
        <Link href="/cart">
          <button className="absolute top-[83%] left-[50%] text-xs border-2 font-bold border-black px-2 py-2 text-slate-700 rounded-lg hover:bg-red-600 hover:text-white hover:border-white">
            PREVIEW
          </button>
        </Link>
        <Link href="/cart">
          <button className="absolute top-[83%] right-[22%] text-xs border-2 font-bold border-black px-2 py-2 text-slate-700 rounded-lg hover:bg-red-600 hover:text-white hover:border-white">
            PREVIEW
          </button>
        </Link>
        <Link href="/addtocart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 absolute top-[83%] right-[13%] cursor-pointer"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
        </Link>
        <Link href="/addtocart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 absolute top-[83%] right-[34%] cursor-pointer"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
        </Link>
        <Link href="/addtocart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 absolute top-[83%] left-[24%] cursor-pointer"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
        </Link>
        <Link href="/addtocart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 absolute top-[83%] left-[45%] cursor-pointer"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
        </Link>
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
