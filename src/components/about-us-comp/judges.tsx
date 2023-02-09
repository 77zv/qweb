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
        bio: 'Lindsay Walton is an experienced and highly respected judge with a strong background in the legal field. She has been a lead judge for several high-profile cases and is known for her impartiality and ability to make tough decisions. In her free time, Lindsay enjoys reading, hiking and spending time with her family.'
    },
    {
        name: 'Jason Smith',
        role: 'Judge',
        imageUrl:
            'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
        bio: 'Jason Smith is a dedicated and hard-working judge with a passion for the legal system. He has a wealth of experience in the field, having worked on many important cases during his career. In his free time, Jason enjoys playing basketball, traveling and trying new restaurants.'
    },
    {
        name: 'Matthew Davis',
        role: 'Judge',
        imageUrl:
            'https://cdn.discordapp.com/attachments/1015736391004606510/1072624815380377703/9042676952_b1e9742549.png',
        twitterUrl: '#',
        linkedinUrl: '#',
        bio: 'Matthew Davis is a well-respected judge who has made a significant impact in the legal community. He has a keen eye for detail and a deep understanding of the law, making him a valuable asset to any case. In his free time, Matthew enjoys woodworking, playing guitar and hiking in the mountains.'
    },
    {
        name: 'Sophie Johnson',
        role: 'Judge',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
        bio: 'Sophie Johnson is a well-rounded judge with a passion for justice and fairness. She has a strong background in the legal field and is known for her ability to handle complex cases with ease. In her free time, Sophie enjoys painting, practicing yoga and exploring the great outdoors.'
    }
]

export default function Judges() {
   return (
            <div className="bg-white">
                <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                        <div className="space-y-5 sm:space-y-4">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
                            <p className="text-xl text-gray-500">
                                {description}
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
                                                <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                                            </div>
                                            <div className="text-lg leading-6 font-medium space-y-1">
                                                <h3>{person.name}</h3>
                                                <p className="text-indigo-600">{person.role}</p>
                                            </div>
                                            <div className="text-lg">
                                                <p className="text-gray-500">{person.bio}</p>
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
        )
}