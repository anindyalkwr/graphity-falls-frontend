import Link from 'next/link'
import characters from './constant'

const Characters = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-yellow-400 drop-shadow-md">
                Ahoy! Meet Yer Fave Bikini Bottom Buddies!
            </h2>

            {/* Carousel */}
            <div className="relative w-full overflow-hidden py-4">
                <div className="flex space-x-6 animate-scroll">
                    {/* Render the characters twice for smooth scrolling */}
                    {characters.concat(characters).map((character, index) => (
                        <Link
                            href={`/characters/${character.name}`}
                            key={index}
                        >
                            <div
                                className="min-w-[250px] max-w-xs w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out z-10 hover:z-20"
                                style={{ padding: '10px', margin: '0 10px' }}
                            >
                                <div className="bg-white w-full h-48 flex items-center justify-center">
                                    <img
                                        src={character.image}
                                        alt={character.title}
                                        className="w-full h-full object-contain bg-white"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="font-extrabold text-lg text-blue-500 drop-shadow-lg">
                                        {character.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm italic">
                                        {character.description}
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
            // Ensuring enough width to accommodate duplicated characters for a seamless scroll
            width: calc(250px * ${characters.length} * 2 + 10px * ${characters.length} * 2);
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

export default Characters
