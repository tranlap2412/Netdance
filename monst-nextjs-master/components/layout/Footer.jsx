import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="py-20">
        <div
          className="container px-4 mx-auto wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        >
          <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
            <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
              <Link href="/">
                <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                  <img
                    className="h-20"
                    src="/assets/imgs/logos/logo.png"
                    alt="NetDance"
                  />
                </a>
              </Link>
            </div>
            {/* <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
              <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">
                Helping you <strong>maximize</strong> operations management with
                digitization
              </p>
            </div> */}
            <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                Fearute
              </p>
              <p className="lg:text-lg text-blueGray-400">2032939203</p>
              <p className="lg:text-lg text-blueGray-400">2032939203</p>
              <p className="lg:text-lg text-blueGray-400">2032939203</p>
              <p className="lg:text-lg text-blueGray-400">2032939203</p>
              <p className="lg:text-lg text-blueGray-400">2032939203</p>
            </div>
            <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                Fearute
              </p>
              <p className="lg:text-lg text-blueGray-400">2032939203</p>
              <p className="lg:text-lg text-blueGray-400">2032939203</p>
              <p className="lg:text-lg text-blueGray-400">2032939203</p>
              <p className="lg:text-lg text-blueGray-400">2032939203</p>
              <p className="lg:text-lg text-blueGray-400">2032939203</p>
            </div>
            <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                Fearute
              </p>
              <p className="lg:text-lg text-blueGray-400">2032939203</p>
              <p className="lg:text-lg text-blueGray-400">2032939203</p>
              <p className="lg:text-lg text-blueGray-400">2032939203</p>
              <p className="lg:text-lg text-blueGray-400">2032939203</p>
              <p className="lg:text-lg text-blueGray-400">2032939203</p>
            </div>
            <div className="w-full lg:w-1/5 px-3">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                Contacts
              </p>
              <p className="lg:text-lg text-blueGray-400">802392039023</p>
              <p className="lg:text-lg text-blueGray-400">NetDance.com</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <p className="text-sm text-blueGray-400">
              &copy; 2022. All rights.{" "}
              <a
                className="text-blue-400"
                // href="https://alithemes.com"
                target="_blank"
              >
                Netdance.com
              </a>
            </p>
            <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
              <a className="inline-block w-64 px-2" href="https://facebook.com">
                <img
                  src="/assets/imgs/icons/facebook-blue.svg"
                  alt="NetDance"
                />
              </a>
              <a className="inline-block w-64 px-2" href="https://twitter.com">
                <img src="/assets/imgs/icons/twitter-blue.svg" alt="NetDance" />
              </a>
              <a
                className="inline-block w-64 px-2"
                href="https://www.instagram.com"
              >
                <img
                  src="/assets/imgs/icons/instagram-blue.svg"
                  alt="NetDance"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
