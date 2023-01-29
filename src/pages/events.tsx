/* This example requires Tailwind CSS v2.0+ */
import {PaperClipIcon} from '@heroicons/react/20/solid'
import Layout from "../components/layout";

//only change dropbox and not event box

export default function Example() {
    return (
        <Layout>
            <div>
                <div className="m-10 border-2">
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Stock Picking Competition 2023</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Showcase your skills and win big prizes!</p>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                            <dl className="sm:divide-y sm:divide-gray-200">
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Start Date</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">March 1st, 2023</dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">End Date</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">May 31st, 2023</dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Description</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        Are you an expert in stock picking? Join our Stock Picking Competition 2023 and put your
                                        skills to the test. Compete against other investors and traders from all over the world to
                                        see who can make the most profit in three months.

                                        Participants must pick a portfolio of five stocks and track their performance until the end of
                                        the competition. Prizes will be awarded to the top three performers with the highest returns. So,
                                        what are you waiting for? Sign up now and show the world your stock picking prowess!
                                    </dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        <ul role="list"
                                            className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                <div className="flex w-0 flex-1 items-center">
                                                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                                   aria-hidden="true"/>
                                                    <span
                                                        className="ml-2 w-0 flex-1 truncate">event_package_one.zip</span>
                                                </div>
                                                <div className="ml-4 flex-shrink-0">
                                                    <a href="#"
                                                       className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        Download
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
                <SubmissionDropbox/>
            </div>
        </Layout>
    )
}
const SubmissionDropbox = () => {
    return(
        <div className="m-10 border-2">
            <div className="overflow-hidden bg-white sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Submit your Solution</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Please upload a single file.</p>
                </div>
            </div>
            <div className="">
                <div
                    className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 pt-5 pb-6 m-3">
                    <div className="space-y-1 text-center">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF</p>
                    </div>
                </div>
            </div>
        </div>
    )
}