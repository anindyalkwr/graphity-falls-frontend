import { useState } from 'react'
import { useRouter } from 'next/router'
import { FaSearch } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('') // Store the input value
    const router = useRouter() // Initialize Next.js router for programmatic navigation

    // Handle the search button click
    const handleSearch = () => {
        if (searchQuery.trim()) {
            // Redirect to the search results page with the input value in the URL
            router.push(`/search/${searchQuery}`)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            {/* Title with Type Animation */}
            <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center leading-snug">
                Get to know all the fun and quirky characters from
                <br />
                <span className="text-orange-500">
                    <TypeAnimation
                        sequence={[
                            'SpongeBob SquarePants, including SpongeBob, Patrick, Squidward, and more!',
                            2500,
                            'Discover episodes from the hit series, from the classic "Pilot" to fan favorites like "Band Geeks"!',
                            2500,
                            'Explore and search for characters, episodes, and iconic moments from the show!',
                            2500,
                            'Use the search bar to dive into quirky SpongeBob adventures!',
                            2500,
                        ]}
                        wrapper="span"
                        speed={40}
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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
                />
                <button
                    className="flex items-center justify-center bg-blue-500 text-white p-2 md:p-3 rounded-full hover:bg-blue-600 transition-colors"
                    onClick={handleSearch} // Trigger search when button is clicked
                >
                    <FaSearch className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </button>
            </div>
        </div>
    )
}

export default Home
