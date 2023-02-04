import React, { useEffect, useState } from "react";
import { type NextPage } from "next";
import Layout from "../components/layout";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";

import { api } from "../utils/api";

interface Person {
    id: string;
    name: string;
    email: string;
    role: string;
}

const AdminPanel: NextPage = () => {
    const { data: event, isLoading: isLoadingEvent } = api.events.getEvent.useQuery();
    const { data: users, isLoading: isLoadingUsers } = api.users.getUsers.useQuery();

    const updateRole = api.users.updateUserRole.useMutation();
    const upsertEvent = api.events.upsertEvent.useMutation();

    const [title, setTitle] = useState("");
    const [id, setId] = useState("");
    const [description, setDescription] = useState("");
    const [selectedPerson, setSelectedPerson] = useState<Person | string>("");
    const [judges, setJudges] = useState<Person[]>([]);
    const [submissionsOpen, setSubmissionsOpen] = useState<Date | undefined>(undefined);
    const [submissionsClose, setSubmissionsClose] = useState<Date | undefined>(undefined);
    const [file, setFile] = useState<File | undefined>(undefined);
    const [fileUrl, setFileUrl] = useState<string | undefined>(undefined);

    
    useEffect(() => {
        if (event) {
            setId(event.id);
            setTitle(event.title);
            setDescription(event.description);
            setSubmissionsOpen(event.submissionsOpen ? event.submissionsOpen : undefined);
            setSubmissionsClose(event.submissionsClose ? event.submissionsClose : undefined);
            setFileUrl(event.fileUrl);
        }
        if (users) {
            setJudges(users.filter((user) => user.role === "judge"));
        }
    }, [event, isLoadingEvent, isLoadingUsers, users]);

    return (
        <Layout>
            {/*⚠️⚠️⚠️⚠️ THE MARGIN BELOW BREAKS MOBILE VIEW ⚠️⚠️⚠️⚠️⚠️⚠️⚠️ */}
            <div className="mr-64 ml-64 mt-9">
                {/*⚠️⚠️⚠️⚠️ THE MARGIN ABOVE BREAKS MOBILE VIEW ⚠️⚠️⚠️⚠️⚠️⚠️⚠️ */}
                <form
                    className="space-y-8 divide-y divide-gray-200"
                    onSubmit={async (e: React.FormEvent)=> {
                        e.preventDefault();
                        upsertEvent.mutate({
                            id,
                            title,
                            description,
                            submissionsOpen,
                            submissionsClose,
                            file: file
                                ? await (async () => {
                                      return {
                                          name: file.name,
                                          body: await file.text(),
                                      };
                                  })()
                                : undefined,
                        });

                        judges.map((judge) => {
                            updateRole.mutate({ id: judge.id, role: "judge" });
                        });

                    }
                    }
                >
                    <div className="space-y-8 divide-y divide-gray-200">
                        <div>
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Edit Event</h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    This information will be displayed publicly.
                                </p>
                            </div>

                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                        Title
                                    </label>
                                    <div className="mt-1 flex rounded-md rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            value={title}
                                            onChange={(event) => setTitle(event.target.value)}
                                            className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-6">
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                        Description
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={3}
                                            value={description}
                                            onChange={(event) => setDescription(event.target.value)}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                {/*date stuff*/}
                                <div className="sm:col-span-4">
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                        Submissions Open
                                    </label>
                                    <div className="mt-1 flex rounded-md rounded-md shadow-sm">
                                        <input
                                            type="datetime-local"
                                            name="submissionsOpen"
                                            id="submissionsOpen"
                                            className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            value={submissionsOpen ? submissionsOpen.toISOString().slice(0, 16) : ""}
                                            onChange={(event) => setSubmissionsOpen(new Date(event.target.value))}
                                        />
                                    </div>
                                </div>

                                {/*date stuff*/}
                                <div className="sm:col-span-4">
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                        Submissions Close
                                    </label>
                                    <div className="mt-1 flex rounded-md rounded-md shadow-sm">
                                        <input
                                            type="datetime-local"
                                            name="submissionClose"
                                            id="submissionsClose"
                                            className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            value={submissionsClose ? submissionsClose.toISOString().slice(0, 16) : ""}
                                            onChange={(event) => setSubmissionsClose(new Date(event.target.value))}
                                        />
                                    </div>
                                </div>

                                {/*file stuff*/}
                                <div className="sm:col-span-6">
                                    <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700">
                                        PDF
                                    </label>
                                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
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
                                                    <input
                                                        id="file-upload"
                                                        name="file-upload"
                                                        type="file"
                                                        className="sr-only"
                                                        onChange={(event) => {
                                                            // check if files are null
                                                            if (event.target.files != undefined) {
                                                                const file = event.target.files[0];
                                                                // set the file
                                                                setFile(file);
                                                            }
                                                        }}
                                                    />
                                                </label>
                                            </div>
                                            <p className="text-xs text-gray-500">
                                                {fileUrl ? <a href={fileUrl} target="_blank" rel="noreferrer">Current File</a> : "Upload File" }
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/*judge stuff*/}
                                <div className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:col-span-4 sm:text-sm">
                                    <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
                                        <Combobox.Label className=" block text-sm font-medium text-gray-700">
                                            Judges
                                        </Combobox.Label>
                                        <div className="relative mt-1">
                                            <Combobox.Input
                                                className=" w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                                onChange={(event) => setSelectedPerson(event.target.value)}
                                                displayValue={(person: Person) => person?.name}
                                            />
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                                <ChevronUpDownIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </Combobox.Button>

                                            {users != undefined && users.length > 0 && (
                                                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {users.map((user) => (
                                                        <Combobox.Option
                                                            key={user.id}
                                                            value={user}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    "relative cursor-default select-none py-2 pl-3 pr-9",
                                                                    active
                                                                        ? "bg-indigo-600 text-white"
                                                                        : "text-gray-900"
                                                                )
                                                            }
                                                        >
                                                            {({ active, selected }) => (
                                                                <>
                                                                    <span
                                                                        className={classNames(
                                                                            "block truncate",
                                                                            selected && "font-semibold"
                                                                        )}
                                                                    >
                                                                        {user.name}
                                                                    </span>

                                                                    {selected && (
                                                                        <span
                                                                            className={classNames(
                                                                                "absolute inset-y-0 right-0 flex items-center pr-4",
                                                                                active
                                                                                    ? "text-white"
                                                                                    : "text-indigo-600"
                                                                            )}
                                                                        >
                                                                            <CheckIcon
                                                                                className="h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </span>
                                                                    )}
                                                                </>
                                                            )}
                                                        </Combobox.Option>
                                                    ))}
                                                </Combobox.Options>
                                            )}
                                        </div>
                                        <button
                                            type="submit"
                                            className="mt-6 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (selectedPerson != undefined) {
                                                    // find selectedPerson in users as a function

                                                    if (typeof selectedPerson === "object") {
                                                        const selectedUser = users?.find(
                                                            (user) => user.name === selectedPerson.name
                                                        );
                                                        const personExists = judges.find(
                                                            (person) => person.id === selectedUser?.id
                                                        );
                                                        if (selectedUser != undefined && !personExists) {
                                                            setJudges([...judges, selectedUser]);
                                                            setSelectedPerson("");
                                                        }
                                                    }
                                                }
                                            }}
                                        >
                                            Add Judge
                                        </button>
                                        <div className="mt-3">
                                            <label
                                                htmlFor="title"
                                                className="col-span-4 block text-2xl font-medium text-gray-700"
                                            >
                                                Current Judges
                                            </label>
                                        </div>
                                        {judges.map((person) => (
                                            <div className="col-span-4 mt-1 block  text-sm" key={person.id}>
                                                {person.name}
                                            </div>
                                        ))}
                                    </Combobox>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(" ");
}

export default AdminPanel;
