const description = "The judges team is composed of highly experienced and knowledgeable individuals with a passion for excellence. " +
    "With diverse backgrounds in the industry, each judge brings a unique perspective to the competition, ensuring a fair and impartial evaluation of participants. " +
    "The judges have earned a reputation for their impartiality, integrity and attention to detail, making them the perfect choice to lead the competition. " +
    "Their experience and expertise make them well-equipped to recognize exceptional talent and provide valuable feedback to contestants."

const people = [
    {
        name: 'Amir Alinaghian',
        role: 'Judge',
        imageUrl:
        "judges/amir.png",
        twitterUrl: '#',
        linkedinUrl: '#',
        bio: 'Hello, my name is Amir Alinaghian. I\'m a Product Manager at Kijiji - Canada’s largest marketplace empowering millions of Canadians to buy and sell online. Recently, I launched Stratalife, a software startup focusing on online education and peer-to-peer support such as therapy, coaching, and mentorship. In the past, I have worked for industry leading companies such as Deloitte, Oracle, Manulife, and iA Financial Group.'
    },
    {
        name: 'Juan David',
        role: 'Judge',
        imageUrl:
        'judges/juan.png',
        twitterUrl: '#',
        linkedinUrl: '#',
        bio: 'Juan David has over 10 years of experience in Business Consulting and Microfinance in Latin America. He majored in Business Studies in the United Kingdom and has a specialization in Business Innovation Management from George Washington University. Juan David has visited over 30 countries with the goal of investigating the impact of business, financial inclusion, and entrepreneurship in economic development worldwide. He will provide insights on consulting microenterprises in emerging economies and recommendations on how to navigate cultural differences.\n'
    },
    {
        name: 'Valerie Smith',
        role: 'Judge',
        imageUrl:
        'judges/valerie.png',
        twitterUrl: '#',
        linkedinUrl: '#',
        bio:'Valerie Smith is currently the Director of Programs at Parachute. Parachute is Canada’s leading injury prevention organization. She oversees all of Parachute’s campaigns and programs and helps to support their extensive network of stakeholders across Canada. Prior to working with Parachute Valerie was a senior program manager at a number of charities including Smartrisk, Katimavik, and Youth Challenge International. She spent a substantial part of her career working on HIV/AIDS programs with partners in South America and East Africa. She holds a MA in international and comparative education. She also currently volunteers with CUSO supporting the resource mobilization for an NGO in Nigeria. She currently lives in Creemore, Ontario with her daughter and her daughter.'
    },
    {
        name: 'Jonah Kawarsky',
        role: 'Judge',
        imageUrl:
        'judges/jonah.png',
        twitterUrl: '#',
        linkedinUrl: '#',
        bio: 'Jonah obtained his B.Sc. in Bio-Medical Science from the University of Guelph in 2022. He is currently completing his MBS in Regenerative Medicine at the University of Guelph.\n' +
          'In 2018, Jonah founded the University of Guelph chapter of Medical Brigades, an international non-profit organization of students and medical professionals that works with under-resourced communities to create sustainable health systems. In 2021 and 2022, Jonah was hired as a Volunteer Engagement Manager and worked to connect campus Global Brigade chapters with the greater Guelph Community. He now serves on the Board of Directors for his second year.\n' +
          'Inspired by his experiences at the University of Guelph and his work within the campus community, Jonah wrote and published the book, 5 Top Soft Skills for Successful Student Leaders. This book provides advice on how to improve communication, teamwork, emotional intelligence, problem-solving and listening. \n' +
          'In his free time, Jonah enjoys reading, spending time with family, and rock climbing.\n'
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
                                                <p className="text-blue-900">{person.role}</p>
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