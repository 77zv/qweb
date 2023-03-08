import { type NextPage } from "next";
import Head from "next/head";
import React from "react";


import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queens Business Brigade</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Layout>
        <main>
          <HeroContent />
          <LearnAboutTeam />
          <ContentSection/>
          <Sponsors />
        </main>
      </Layout>
    </>
  );
};

const HeroContent: React.FC = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Queens University</span>{" "}
                  <span className="block text-blue-900 xl:inline">Business Brigades</span>
                </h1>
                <p
                  className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  International movement of students and professionals building economic
                  opportunities in the developing world.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  {!sessionData &&
                    <div className="rounded-md shadow">
                      <button
                        onClick={() => void signIn("google")}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 transition duration-100 hover:bg-indigo-900 hover:-translate-y-1 md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                      </button>
                    </div>
                  }
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/events"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-indigo-100 transition duration-100 hover:bg-indigo-200 hover:-translate-y-1 md:py-4 md:text-lg md:px-10"
                    >
                      Events
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-md"
            src="/queens-students.jpg"
            alt="queens-students"
          />
        </div>
      </div>
    </div>
  );
};

const LearnAboutTeam: React.FC = () => {

  const description = 'Queen’s Business Brigades is an economic and financial ' +
    'consulting chapter of Global Brigades. Global Brigades, founded in 2007,  ' +
    'is a nonprofit health and sustainable development organization that works ' +
    'with student volunteers from around the world, as well as local staff in ' +
    'Central America and West Africa to partner with communities to reduce ' +
    'inequalities. \n In the past, QBB has assisted small businesses and community ' +
    'banks in regions of Panama in fields like capital allocation, budgeting, ' +
    'and market research. QBB volunteers have gained invaluable experience in ' +
    'areas such as consulting and finance.'

  return (
    <div className="relative py-36 bg-white">
      <div className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block" aria-hidden="true" />
      <div className="max-w-7xl mx-auto bg-blue-900 lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div className="absolute -z-10 inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="false" />
            <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img
                  className="object-cover object-center rounded-3xl shadow-2xl"
                  src="students.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="relative bg-blue-900 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
            <div className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block" aria-hidden="true">
              <svg
                className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-indigo-500" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
              <svg
                className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-indigo-500" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
            </div>
            <div
              className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
              <h2 className="text-3xl font-extrabold text-white" id="join-heading">
                Checkout Our Team
              </h2>
              <p className="text-lg text-white">
                {description}
              </p>
              <a
                className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-indigo-700 hover:bg-gray-50 sm:inline-block sm:w-auto"
                href="/about-us"
              >
                Learn more about our team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sponsors = () => {
  /* This example requires Tailwind CSS v2.0+ */
  return (
    <div className="bg-indigo-200 bg-opacity-25">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <h2 className="max-w-md mx-auto text-3xl font-extrabold text-blue-900 text-center lg:max-w-xl lg:text-left">
            Our amazing partners and sponsors
          </h2>
          <div className="flow-root self-center mt-8 lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src="sponsors/sponsor1.png"
                  alt="McMaster University"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src="sponsors/sponsor2.png"
                  alt="Tuple"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src="sponsors/sponsor3.png"
                  alt="Level"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentSection = () => {
  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/deloitte.jpg"
                alt=""
              />
              <div className="absolute inset-0 bg-indigo-400 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-indigo-900 opacity-90" />
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      Working with Global Brigades provided a valuable connection between Deloitte and
                      the local businesses that we were partnered with. Going into our work with a baseline
                      of trust and cultural awareness made our job much easier.
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-indigo-200">Kassidy Knight , Deloitte Consulting</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              Business & Financial Consulting to Better Lives
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                GBB proudly partners with Deloitte to increase impact on brigades! Deloitte
                consultants accompany our university volunteers to ensure higher quality
                business guidance for the community members while providing our students
                with valuable career insight.
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            {/*<dl className="grid grid-cols-2 gap-x-4 gap-y-8">*/}
            {/*  {stats.map((stat) => (*/}
            {/*    <div key={stat.label} className="border-t-2 border-gray-100 pt-6">*/}
            {/*      <dt className="text-base font-medium text-gray-500">{stat.label}</dt>*/}
            {/*      <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>*/}
            {/*    </div>*/}
            {/*  ))}*/}
            {/*</dl>*/}
            <div className="mt-10">
              <a href="https://business.globalbrigades.org/" className="text-base font-medium text-blue-900">
                {" "}
                Learn more about how we're changing the world <span aria-hidden="true">&rarr;</span>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;