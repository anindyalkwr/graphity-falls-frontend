import { FaExclamationTriangle } from 'react-icons/fa'
import React from 'react'

const Custom404 = () => {
    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
                {/* Column 2: Icon - Placed first on small screens */}
                <div className="flex justify-center items-center md:order-last mb-4 md:mb-0">
                    <FaExclamationTriangle className="text-8xl md:text-[10rem] text-yellow-500" />
                </div>

                {/* Column 1: Quirky Text */}
                <div className="text-center md:text-left md:justify-self-center">
                    <h1
                        className="text-5xl font-extrabold text-orange-500 mb-4"
                        style={{ letterSpacing: '-1px' }}
                    >
                        Oops!
                    </h1>
                    <p
                        className="text-3xl font-bold text-blue-500 mb-2"
                        style={{ letterSpacing: '0.5px' }}
                    >
                        Page Not Found
                    </p>
                    <p className="text-lg font-semibold text-gray-700">
                        It seems that the page you&apos;re looking for
                        doesn&apos;t exist. If you think this is an error,
                        please check the URL or reach out to us through the
                        contact information in the footer.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Custom404
