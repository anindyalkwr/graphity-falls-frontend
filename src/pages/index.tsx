import { TypeAnimation } from 'react-type-animation'
import { FaSearch } from 'react-icons/fa'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            {/* Title with Type Animation */}
            <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center leading-snug">
                Discover the Power of
                <br />
                <span className="text-blue-500">
                    <TypeAnimation
                        sequence={[
                            ' Graphity Falls: A Graph Database',
                            2500,
                            ' for SpongeBob Episodes',
                            2500,
                            ' of Iconic Characters',
                            2500,
                            ' and Fun Adventures',
                            2500,
                            ' in Quirky Moments!',
                            2500,
                        ]}
                        wrapper="span"
                        speed={25}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                    />
                </span>
            </h1>

            {/* Search Bar with Button */}
            <div className="flex w-full md:w-1/2 items-center bg-white shadow-md rounded-full px-4 py-1 md:py-2">
                <input
                    type="text"
                    placeholder="Search for episodes, characters, or moments..."
                    className="flex-grow bg-transparent text-gray-700 focus:outline-none text-sm md:text-base lg:text-lg py-2 px-2"
                />
                <button className="flex items-center justify-center bg-blue-500 text-white p-2 md:p-3 rounded-full hover:bg-blue-600 transition-colors">
                    <FaSearch className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </button>
            </div>
        </div>
    )
}

export default Home
