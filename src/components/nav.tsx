/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import { Popover, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  LifebuoyIcon,
  XMarkIcon,
  ClipboardIcon,
  BriefcaseIcon
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import Link from "next/link";

const resources = [
  {
    name: "Contact Us",
    description: "Having an issue? contact our support team.",
    href: "contact-us",
    icon: LifebuoyIcon
  },
  {
    name: "Learn More",
    description: "Learn more about the Global Brigade program.",
    href: "https://business.globalbrigades.org/",
    icon: CalendarIcon
  }
];

const adminResources = [
  {
    name: "contact-us",
    description: "Having an issue? contact our support team.",
    href: "contact-us",
    icon: LifebuoyIcon
  },
  {
    name: "Learn More",
    description: "Learn more about the Global Brigade program.",
    href: "https://business.globalbrigades.org/",
    icon: CalendarIcon
  },
  {
    name: "Judges Panel", description: "Judges can access submissions here.",
    href: "judges-panel",
    icon: ClipboardIcon
  },
  {
    name: "Admin Panel", description: "Admins can access submissions here.",
    href: "admin-panel",
    icon: BriefcaseIcon
  }
];

const JudgeResources = [
  {
    name: "contact-us",
    description: "Having an issue? contact our support team.",
    href: "contact-us",
    icon: LifebuoyIcon
  },
  {
    name: "Judges Panel", description: "Judges can access submissions here.",
    href: "judges-panel",
    icon: ClipboardIcon
  }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {

  return (
    <NavBar />
  );
}



const NavBar = () => {
  const { data: sessionData } = useSession();
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Your Company</span>
              <img
                className="h-1 w-auto sm:h-10"
                src="https://cdn.discordapp.com/attachments/1015736391004606510/1069146447834005514/My_project-1_12.png"
                alt=""
              />
            </Link>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link href="events" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Events
            </Link>
            <Link href="about-us" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About Us
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel
                      className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {
                            sessionData?.user?.role === "admin" ? adminResources.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </Link>
                            )) : (
                              sessionData?.user?.role === "judge" ? JudgeResources.map((item) => (
                                resources.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  >
                                    <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                  </Link>
                                )))) : (
                                resources.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  >
                                    <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                  </Link>
                                ))))
                          }
                          {/*ADD JUDGES STUFF HERE*/}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {sessionData ? (
              <button
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-900"
                onClick={() => void signOut({ redirect: false })}>
                Sign Out
              </button>
            ) : (
              <>
                <button
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  onClick={() => void signIn("google")}>
                  Sign in
                </button>
                <button
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-900"
                  onClick={() => void signIn("google")}>
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=#22287A"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className="inline-flex items-center justify-center rounded-md bg-white p-2  hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};