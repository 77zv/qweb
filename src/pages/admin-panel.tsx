import React from "react";
import { type NextPage } from "next";
import Layout from "../components/layout";

import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";

import { api } from "../utils/api";


interface Person {
  id: string,
  name: string,
  email: string,
  role: string
}


const AdminPanel: NextPage = () => {
    const { data: id, isLoading } = api.events.getEvent.useQuery();
    const { data: users } = api.users.getUsers.useQuery();

    const updateRole = api.users.updateUserRole.useMutation();
    const updateEvent = api.events.updateEvent.useMutation();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const createEvent = api.events.createEvent.useMutation();
    const [selectedPerson, setSelectedPerson] = useState<Person | string>("");
    const [persons, setPersons] = useState<Person[]>([]);
    const [file, setFile] = useState<File | null | undefined>(null);


    if (id === null && !isLoading) {
      return (
        <Layout>
          {/*⚠️⚠️⚠️⚠️ THE MARGIN BELOW BREAKS MOBILE VIEW ⚠️⚠️⚠️⚠️⚠️⚠️⚠️ */}
          <div className="mr-64 ml-64 mt-9">
            {/*⚠️⚠️⚠️⚠️ THE MARGIN ABOVE BREAKS MOBILE VIEW ⚠️⚠️⚠️⚠️⚠️⚠️⚠️ */}
            <form
              className="space-y-8 divide-y divide-gray-200"
              onSubmit={(event) => {
                console.log("submitting");
                event.preventDefault();
                // check if id is undefined
                createEvent.mutate({
                  title,
                  description
                });
                // map through persons and update role
                persons.forEach((person) => {
                  updateRole.mutate({
                    id: person.id,
                    role: person.role
                  });
                });
                setTitle("");
                setDescription("");
                setSelectedPerson("");
                setPersons([]);


              }
              }
            >
              <div className="space-y-8 divide-y divide-gray-200">
                <div>
                  <div>
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900">Edit
                      Event</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      This information will be displayed publicly.
                    </p>
                  </div>

                  <div
                    className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label htmlFor="title"
                             className="block text-sm font-medium text-gray-700">
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
                      <label htmlFor="about"
                             className="block text-sm font-medium text-gray-700">
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
                      <p className="mt-2 text-sm text-gray-500">Write a
                        description for the event.</p>
                    </div>

                    {/*date stuff*/}
                    <div className="sm:col-span-4">
                      <label htmlFor="title"
                             className="block text-sm font-medium text-gray-700">
                        Submissions Open
                      </label>
                      <div className="mt-1 flex rounded-md rounded-md shadow-sm">
                        <input
                          type="datetime-local"
                          name="title"
                          id="title"
                          className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="cover-photo"
                             className="block text-sm font-medium text-gray-700">
                        Cover photo
                      </label>
                      <div
                        className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
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

                              <input id="file-upload" name="file-upload"
                                     type="file" className="sr-only"
                                     onChange={(event) => {
                                       // check if files are null
                                       if (event.target.files != undefined){
                                         const file = event.target.files[-1];
                                         // set the file
                                         setFile(file);
                                       }
                                       // get the first file
                                     }} />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="sm:col-span-4 block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                      <Combobox as="div" value={selectedPerson}
                                onChange={setSelectedPerson}>
                        <Combobox.Label
                          className=" block text-sm font-medium text-gray-700">Judges</Combobox.Label>
                        <div className="relative mt-1">
                          <Combobox.Input
                            className=" w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            onChange={(event) => setSelectedPerson(event.target.value)}
                            displayValue={(person: Person) => person?.name}
                          />
                          <Combobox.Button
                            className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400"
                                               aria-hidden="true" />
                          </Combobox.Button>

                          {users != undefined && users.length > 0 && (
                            <Combobox.Options
                              className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {users.map((user) => (
                                <Combobox.Option
                                  key={user.id}
                                  value={user}
                                  className={({ active }) =>
                                    classNames(
                                      "relative cursor-default select-none py-2 pl-3 pr-9",
                                      active ? "bg-indigo-600 text-white" : "text-gray-900"
                                    )
                                  }
                                >
                                  {({ active, selected }) => (
                                    <>
                                    <span
                                      className={classNames("block truncate", selected && "font-semibold")}>{user.name}</span>

                                      {selected && (
                                        <span
                                          className={classNames(
                                            "absolute inset-y-0 right-0 flex items-center pr-4",
                                            active ? "text-white" : "text-indigo-600"
                                          )}
                                        >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
                                const selectedUser = users?.find((user) => user.name === selectedPerson.name);
                                const personExists = persons.find((person) => person.id === selectedUser?.id);
                                if (selectedUser != undefined && !personExists) {
                                  setPersons([...persons, selectedUser]);
                                  setSelectedPerson("");
                                }
                              }
                            }
                          }}>
                          Add Judge
                        </button>
                        <div className="mt-3">
                          <label htmlFor="title"
                                 className="col-span-4 block text-2xl font-medium text-gray-700">
                            Current Judges
                          </label>
                        </div>
                        {persons.map((person) => (
                          <div className="col-span-4 block text-sm  mt-1"
                               key={person.id}>{person.name}</div>
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
    }

    return (
      <Layout>
        {/*⚠️⚠️⚠️⚠️ THE MARGIN BELOW BREAKS MOBILE VIEW ⚠️⚠️⚠️⚠️⚠️⚠️⚠️ */}
        <div className="mr-64 ml-64 mt-9">
          {/*⚠️⚠️⚠️⚠️ THE MARGIN ABOVE BREAKS MOBILE VIEW ⚠️⚠️⚠️⚠️⚠️⚠️⚠️ */}
          <form
            className="space-y-8 divide-y divide-gray-200"
            onSubmit={(event) => {
              event.preventDefault();
              console.log("Submitting form");
              // check if id is undefined
              if (id && !isLoading) {
                updateEvent.mutate({
                    id: id.id,
                    title,
                    description
                  }
                );
                // loop through persons and update their role
                persons.forEach((person) => {
                  console.log(person.id);
                  updateRole.mutate({
                    id: person.id,
                    role: "judge"
                  });
                });
              }
              setTitle("");
              setDescription("");
              setSelectedPerson("");
              setPersons([]);
            }}>
            <div className="space-y-8 divide-y divide-gray-200">
              <div>
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Edit
                    Event</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This information will be displayed publicly.
                  </p>
                </div>

                <div
                  className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label htmlFor="title"
                           className="block text-sm font-medium text-gray-700">
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
                    <label htmlFor="about"
                           className="block text-sm font-medium text-gray-700">
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
                    <p className="mt-2 text-sm text-gray-500">Write a description
                      for the event.</p>
                  </div>

                  {/*date stuff*/}
                  <div className="sm:col-span-4">
                    <label htmlFor="title"
                           className="block text-sm font-medium text-gray-700">
                      Submissions Open
                    </label>
                    <div className="mt-1 flex rounded-md rounded-md shadow-sm">
                      <input
                        type="datetime-local"
                        name="title"
                        id="title"
                        className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="cover-photo"
                           className="block text-sm font-medium text-gray-700">
                      Instructions PDF
                    </label>
                    <div
                      className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
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
                            <input id="file-upload" name="file-upload" type="file"
                                   className="sr-only"
                                   onChange={(event) => {
                                     // check if files are null
                                     if (event.target.files != undefined){
                                       // get the first file
                                       const file = event.target.files[-1];
                                       // set the file
                                       setFile(file);
                                     }
                                   }} />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="sm:col-span-4 block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <Combobox as="div" value={selectedPerson}
                              onChange={setSelectedPerson}>
                      <Combobox.Label
                        className=" block text-sm font-medium text-gray-700">Judges</Combobox.Label>
                      <div className="relative mt-1">
                        <Combobox.Input
                          className=" w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                          onChange={(event) => setSelectedPerson(event.target.value)}
                          displayValue={(person: Person) => person?.name}
                        />
                        <Combobox.Button
                          className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                          <ChevronUpDownIcon className="h-5 w-5 text-gray-400"
                                             aria-hidden="true" />
                        </Combobox.Button>

                        {users != undefined && users.length > 0 && (
                          <Combobox.Options
                            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {users.map((user) => (
                              <Combobox.Option
                                key={user.id}
                                value={user}
                                className={({ active }) =>
                                  classNames(
                                    "relative cursor-default select-none py-2 pl-3 pr-9",
                                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                                  )
                                }
                              >
                                {({ active, selected }) => (
                                  <>
                                    <span
                                      className={classNames("block truncate", selected && "font-semibold")}>{user.name}</span>

                                    {selected && (
                                      <span
                                        className={classNames(
                                          "absolute inset-y-0 right-0 flex items-center pr-4",
                                          active ? "text-white" : "text-indigo-600"
                                        )}
                                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
                              const selectedUser = users?.find((user) => user.name === selectedPerson.name);
                              const personExists = persons.find((person) => person.id === selectedUser?.id);
                              if (selectedUser != undefined && !personExists) {
                                setPersons([...persons, selectedUser]);
                                setSelectedPerson("");
                              }
                            }
                          }
                        }}>
                        Add Judge
                      </button>
                      <div className="mt-3">
                        <label htmlFor="title"
                               className="col-span-4 block text-2xl font-medium text-gray-700">
                          Current Judges
                        </label>
                      </div>
                      {persons.map((person) => (
                        <div className="col-span-4 block text-sm  mt-1"
                             key={person.id}>{person.name}</div>
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
  }
;


function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

// const Users: React.FC = () => {
//     const { data: users } = api.users.getUsers.useQuery();
//     const [selectedPerson, setSelectedPerson] = useState<Person | string>("");
//     const [persons, setPersons] = useState<Person[]>([]);
//     const updateRole = api.users.updateUserRole.useMutation();
//
//
//     return (
//       <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
//         <Combobox.Label className=" block text-sm font-medium text-gray-700">Judges</Combobox.Label>
//         <div className="relative mt-1">
//           <Combobox.Input
//             className=" w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
//             onChange={(event) => setSelectedPerson(event.target.value)}
//             displayValue={(person: Person) => person?.name}
//           />
//           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//           </Combobox.Button>
//
//           {users != undefined && users.length > 0 && (
//             <Combobox.Options
//               className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//               {users.map((user) => (
//                 <Combobox.Option
//                   key={user.id}
//                   value={user}
//                   className={({ active }) =>
//                     classNames(
//                       "relative cursor-default select-none py-2 pl-3 pr-9",
//                       active ? "bg-indigo-600 text-white" : "text-gray-900"
//                     )
//                   }
//                 >
//                   {({ active, selected }) => (
//                     <>
//                       <span className={classNames("block truncate", selected && "font-semibold")}>{user.name}</span>
//
//                       {selected && (
//                         <span
//                           className={classNames(
//                             "absolute inset-y-0 right-0 flex items-center pr-4",
//                             active ? "text-white" : "text-indigo-600"
//                           )}
//                         >
//                         <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                       </span>
//                       )}
//                     </>
//                   )}
//                 </Combobox.Option>
//               ))}
//             </Combobox.Options>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="mt-6 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//           onClick={(e) => {
//             e.preventDefault();
//             if (selectedPerson != undefined) {
//               // find selectedPerson in users as a function
//
//               if (typeof selectedPerson === "object") {
//                 const selectedUser = users?.find((user) => user.name === selectedPerson.name);
//                 const personExists = persons.find((person) => person.id === selectedUser?.id);
//                 if (selectedUser != undefined && !personExists) {
//                   setPersons([...persons, selectedUser]);
//                   setSelectedPerson("");
//                 }
//               }
//             }
//           }}>
//           Add Judge
//         </button>
//         <div className="mt-3">
//           <label htmlFor="title" className="col-span-4 block text-2xl font-medium text-gray-700">
//             Current Judges
//           </label>
//         </div>
//         {persons.map((person) => (
//           <div className="col-span-4 block text-sm  mt-1" key={person.id}>{person.name}</div>
//         ))}
//       </Combobox>
//     );
//   }
// ;

export default AdminPanel;

