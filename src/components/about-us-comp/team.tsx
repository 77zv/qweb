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

export default function Team() {
    return (
        <div className="bg-white">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                    <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
                        <p className="text-xl text-gray-500">
                            {description}
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                    >
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="space-y-10">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="rounded-lg object-cover shadow-lg h-72 w-72" src={person.imageUrl} alt="" />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                            <h3>{person.name}</h3>
                                            <p className="text-indigo-600">{person.role}</p>
                                        </div>
                                        <ul role="list" className="flex space-x-5">
                                            <li>
                                                <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                                                    <span className="sr-only">Twitter</span>
                                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
