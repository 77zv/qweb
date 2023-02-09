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
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                    <div className="space-y-5 sm:space-y-4">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Judges!</h2>
                        <p className="text-xl text-gray-500">
                            {description}
                        </p>
                    </div>
                    <div className="lg:col-span-2">
                        <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                            {people.map((person) => (
                                <li key={person.name}>
                                    <div className="flex items-center space-x-4 lg:space-x-6">
                                        <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src={person.imageUrl}
                                             alt=""/>
                                        <div className="font-medium text-lg leading-6 space-y-1">
                                            <h3>{person.name}</h3>
                                            <p className="text-indigo-600">{person.role}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}