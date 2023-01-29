import React from 'react';
import Layout from "../components/layout";
/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const people = [
    {
        name: 'Aidon McComb',
        role: 'Lead Frontend Dev',
        imageUrl:
            'https://cdn.discordapp.com/attachments/958153229491925072/1069157120072753172/2017-09-18_08.37.38.jpg',
        bio: 'Chris Evans is an American actor best known for his role as Captain America in the Marvel Cinematic Universe.',
        twitterUrl: 'https://twitter.com/aidonmccomb',
        linkedinUrl: 'https://www.instagram.com/aidon.ca/',
    },
    {
        name: 'Jasmine Johnson',
        role: 'Product Manager',
        imageUrl:
            'https://cdn.discordapp.com/attachments/958153229491925072/1069157120072753172/2017-09-18_08.37.38.jpg',
        bio: 'Jasmine Johnson is a seasoned product manager with a passion for delivering innovative and user-centered solutions.',
        twitterUrl: 'https://twitter.com/jazzjohnson',
        linkedinUrl: 'https://linkedin.com/in/jasmine-johnson',
    },
    {
        name: 'Connor Ray',
        role: 'Lead Backend Dev',
        imageUrl:
            'https://cdn.discordapp.com/attachments/958153229491925072/1069157120072753172/2017-09-18_08.37.38.jpg',
        bio: 'Connor Ray is a skilled software engineer with expertise in back-end development and cloud computing.',
        twitterUrl: 'https://twitter.com/connor_ray',
        linkedinUrl: 'https://linkedin.com/in/connor-ray',
    },
    {
        name: 'Lila Patel',
        role: 'Data Scientist',
        imageUrl:
            'https://cdn.discordapp.com/attachments/958153229491925072/1069157120072753172/2017-09-18_08.37.38.jpg',
        bio: 'Lila Patel is a data scientist with a background in machine learning and a focus on using data to drive business decisions.',
        twitterUrl: 'https://twitter.com/lila_patel',
        linkedinUrl: 'https://linkedin.com/in/lila-patel',
    },
]

export default function Example() {
    return (
        <Layout>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                        <div className="space-y-5 sm:space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
                            <p className="text-xl text-gray-500">
                                The Queen's Business Brigade is a dynamic organization comprised of ambitious young professionals and students. With a focus on community outreach and skill-building, the Brigade strives to create meaningful impact in the local business landscape. Members participate in events, workshops, and networking opportunities, gaining valuable experience and making valuable connections. The Brigade also hosts guest speakers and arranges tours of successful businesses to provide members with a unique perspective on the business world. Ultimately, the Queen's Business Brigade prepares its members for successful careers by fostering a spirit of innovation and collaboration.
                            </p>
                        </div>
                        <div className="lg:col-span-2">
                            <ul
                                role="list"
                                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
                            >
                                {people.map((person) => (
                                    <li key={person.name}>
                                        <div className="space-y-4">
                                            <div className="aspect-w-3 aspect-h-2">
                                                <img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" />
                                            </div>
                                            <div className="space-y-1 text-lg font-medium leading-6">
                                                <h3>{person.name}</h3>
                                                <p className="text-indigo-600">{person.role}</p>
                                            </div>
                                            <div className="text-lg">
                                                <p className="text-gray-500">{person.bio}</p>
                                            </div>

                                            <ul role="list" className="flex space-x-5">
                                                <li>
                                                    <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                                                        <span className="sr-only">Twitter</span>
                                                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                                        <span className="sr-only">LinkedIn</span>
                                                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

