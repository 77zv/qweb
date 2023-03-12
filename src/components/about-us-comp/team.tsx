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
            './team/Charlotte-CoChair.jpg',
    },
    {
        name: 'Jazlyn McGuinty',
        role: 'Co-Chair',
        imageUrl:
            './team/Jazlyn-CoChair.jpg',
    },
    {
        name: 'Aiofe Hamilton',
        role: 'Education Co-Director',
        imageUrl:
            './team/Aiofe-CoDir.jpg',
    },
    {
        name: 'Will Wu',
        role: 'Education Co-Director',
        imageUrl:
            './team/Will-CoDir.jpg',
    },
    {
        name: 'Ava Slotman',
        role: 'Chapter Advisor',
        imageUrl:
            './team/Ava-ChapAdvis.jpg',
    },

    {
        name: 'Maddy Locher',
        role: 'First-Year Representative',
        imageUrl:
          './team/Maddy-FirstYear.png',
    },
    {
        name: 'Siddharth Seth',
        role: 'Logistics Director',
        imageUrl:
          './team/Siddharth-LogDir.png',
    },
    {
        name: 'Rhea Pai',
        role: 'Finance Director',
        imageUrl:
          './team/Rhea-FinDir.png',
    },
    {
        name: 'Antonia Huang',
        role: 'Outreach Director',
        imageUrl:
          './team/Antonia-OutDir.png',
    },
    {
        name: 'Igor Serafini',
        role: 'Outreach Coordinator',
        imageUrl:
          './team/Igor-OutCoor.png',
    },
    {
        name: 'Andrew Liu',
        role: 'Sponsorship Coordinator',
        imageUrl:
            './team/Andrew-SponCoor.png',
    },
    {
        name: 'Jack Biggar',
        role: 'Marketing Director',
        imageUrl:
            './team/Jack-MarDir.png',
    },
    {
        name: 'Katlean Tam',
        role: 'Social Media Coordinator',
        imageUrl:
            './team/Antonia-OutDir.png',
    },
    {
        name: 'Renee Tung',
        role: 'Recruitment Coordinator',
        imageUrl:
            './team/Renee-RecCoor.png',
    },
]
//TODO fix break points for mobile and smaller screen sizes

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
