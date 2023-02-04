import React from 'react';
import Layout from "../components/layout";

const description = "The Queen's Business Brigade is a dynamic organization comprised of ambitious young" +
    " professionals and students. With a focus on community outreach and skill-building, the" +
    " Brigade strives to create meaningful impact in the local business landscape. Members" +
    " participate in events, workshops, and networking opportunities, gaining valuable" +
    " experience and making valuable connections. The Brigade also hosts guest speakers and" +
    " arranges tours of successful businesses to provide members with a unique perspective on" +
    " the business world. Ultimately, the Queen's Business Brigade prepares its members for" +
    "  successful careers by fostering a spirit of innovation and collaboration."

const people = [
    {
        name: 'Charlotte Klajman',
        role: 'Co-Chair',
        imageUrl:
            'https://cdn.discordapp.com/attachments/1015736391004606510/1071530578781929472/image.jpg',
        twitterUrl: 'https://twitter.com/aidonmccomb',
    },
    {
        name: 'Jazlyn McGuinty',
        role: 'Co-Chair',
        imageUrl:
            'https://cdn.discordapp.com/attachments/1015736391004606510/1071530578131812362/image_1.jpg',
        twitterUrl: 'https://twitter.com/jazzjohnson',
    },
    {
        name: 'Aiofe Hamilton',
        role: 'Education Co-Director',
        imageUrl:
            'https://cdn.discordapp.com/attachments/1015736391004606510/1071530578349920378/image_2.jpg',
        twitterUrl: 'https://twitter.com/jazzjohnson',
    },
    {
        name: 'Will Wu',
        role: 'Education Co-Director',
        imageUrl:
            'https://cdn.discordapp.com/attachments/1015736391004606510/1071530578572222484/image_3.jpg',
        twitterUrl: 'https://twitter.com/jazzjohnson',
    },
    {
        name: 'Ava Slotman',
        role: 'Chapter Advisor',
        imageUrl:
            'https://cdn.discordapp.com/attachments/1015736391004606510/1071530578974871603/image_2023-02-04_153213285.jpg',
        twitterUrl: 'https://twitter.com/jazzjohnson',
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
                                {description}
                            </p>
                        </div>
                        <div className="lg:col-span-2">
                            <ul
                                role="list"
                                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
                            >
                                {people.map((person, index) => (
                                    <li key={person.name} className={index === people.length - 1 && people.length % 2 !== 0 ? "lg:justify-center" : ""}>
                                        <div className="space-y-4">
                                            <div className="aspect-w-3 aspect-h-2">
                                                <img className="rounded-lg object-cover shadow-lg h-64 w-64" src={person.imageUrl}
                                                     alt=""/>
                                            </div>
                                            <div className="space-y-1 text-lg font-medium leading-6">
                                                <h3>{person.name}</h3>
                                                <p className="text-indigo-600">{person.role}</p>
                                            </div>

                                            <ul role="list" className="flex space-x-5">
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