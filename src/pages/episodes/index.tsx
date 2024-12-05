import Link from 'next/link'
import Image from 'next/image'
import episodes from '@/data/episodes' // Import episodes data

const Episodes = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-yellow-400 drop-shadow-md">
                Ahoy! Dive Into Yer Favorite Episodes!
            </h2>

            {/* Carousel */}
            <div className="relative w-full overflow-hidden py-4">
                <div className="flex space-x-6 animate-scroll">
                    {/* Render the episodes twice for smooth scrolling */}
                    {episodes.concat(episodes).map((episode, index) => (
                        <Link href={`/episodes/${episode.name}`} key={index}>
                            <div
                                className="min-w-[250px] max-w-xs w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out z-10 hover:z-20"
                                style={{ padding: '10px', margin: '0 10px' }}
                            >
                                <div className="bg-white w-full h-48 flex items-center justify-center">
                                    <Image
                                        src={episode.image}
                                        alt={episode.title}
                                        width={250} // Set width for image
                                        height={200} // Set height for image
                                        className="object-contain bg-white"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="font-extrabold text-lg text-blue-500 drop-shadow-lg">
                                        {episode.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm italic">
                                        {episode.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <style>{`
              .animate-scroll {
                display: flex;
                animation: scroll 30s linear infinite;
                width: calc(250px * ${episodes.length} * 2 + 10px * ${episodes.length} * 2);
              }
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
        </div>
    )
}

export default Episodes
