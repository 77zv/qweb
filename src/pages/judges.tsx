const description = "The judges team is composed of highly experienced and knowledgeable individuals with a passion for excellence. " +
    "With diverse backgrounds in the industry, each judge brings a unique perspective to the competition, ensuring a fair and impartial evaluation of participants. " +
    "The judges have earned a reputation for their impartiality, integrity and attention to detail, making them the perfect choice to lead the competition. " +
    "Their experience and expertise make them well-equipped to recognize exceptional talent and provide valuable feedback to contestants."

const people = [
    {
        name: 'Lindsay Walton',
        role: 'Lead Judge',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Jason Smith',
        role: 'Judge',
        imageUrl:
            'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Matthew Davis',
        role: 'Judge',
        imageUrl:
            'https://cdn.discordapp.com/attachments/1015736391004606510/1072624815380377703/9042676952_b1e9742549.png',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Sophie Johnson',
        role: 'Judge',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Emily Lee',
        role: 'Junior Judge',
        imageUrl:
            'https://cdn.discordapp.com/attachments/1015736391004606510/1072625174114996324/16438633031_7086587b07.png',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'John Doe',
        role: 'Junior Judge',
        imageUrl:
            'https://cdn.discordapp.com/attachments/1015736391004606510/1072624581883478147/iu.png',
        twitterUrl: '#',
        linkedinUrl: '#',
    }
]

export default function Judges() {
    return (
        <div className="bg-white">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                    <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Judges</h2>
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
                                <div className="space-y-4">
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
