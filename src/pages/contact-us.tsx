import { BsEnvelope, BsInstagram, BsLinkedin, BsTelephone } from "react-icons/bs";
import Layout from "../components/layout";

export default function Example() {


    return (
      <Layout>
          <div className="relative bg-white">

              <div className="absolute inset-0">
                  <div className="absolute inset-y-0 left-0 w-full bg-gray-50" />
              </div>
              <div className="relative mx-auto max-w-max justify-center">
                  <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                      <div className="mx-auto max-w-lg">
                          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Get in
                              touch</h2>
                          <p className="mt-3 text-lg leading-6 text-gray-500">
                              Feel free to contact us through these plateforms
                              and we will get back to you as soon as possible. Visit us on Social Media
                              to find out more about us
                          </p>
                          <dl className="mt-8 text-base text-gray-500">
                              <div>
                                  <dt className="sr-only">Postal address</dt>
                                  <dd>

                                  </dd>
                              </div>
                              <div className="mt-6">
                                  <dt className="sr-only">Instagram</dt>
                                  <dd className="flex">
                                      <BsInstagram className="h-6 w-6 flex-shrink-0 text-gray-400"
                                                   aria-hidden="true" />
                                      <a href="https://www.instagram.com/qubusinessbrigades/"
                                         className="ml-3 underline">
                                          @qubusinessbrigades
                                      </a>
                                  </dd>
                              </div>
                              <div className="mt-6">
                                  <dt className="sr-only">linkedin</dt>
                                  <dd className="flex">
                                      <BsLinkedin className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                      <a href="https://www.linkedin.com/company/queen-s-business-brigades/about/"
                                         className="ml-3 underline">
                                          Queen&apos;s Business Brigades
                                      </a>
                                  </dd>
                              </div>
                              <div className="mt-6">
                                  <dt className="sr-only">Email</dt>
                                  <dd className="flex">
                                      <BsEnvelope className="h-6 w-6 flex-shrink-0 text-gray-400"
                                                  aria-hidden="true" />
                                      <span className="ml-3">qubusinessbrigades@gmail.com</span>
                                  </dd>
                              </div>
                          </dl>
                          <p className="mt-6 text-base text-gray-500">
                              Looking for more?{" "}
                              <a href="https://linktr.ee/qubusinessbrigades"
                                 className="font-medium text-gray-700 underline">
                                  Here&apos;s our LinkTree
                              </a>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </Layout>
    );
}