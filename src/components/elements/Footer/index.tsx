import { LogoIcon } from '@/components/icons'
import React from 'react'

const Footer = () => {
    return (
        <footer className="py-8 px-4 mt-auto bg-blue-300 text-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-700 pt-8">
                {/* Column 1: Logo and Copyright */}
                <div className="text-center md:text-left">
                    <LogoIcon className="h-16 w-16 mx-auto md:mx-0 mb-4" />
                    <h3 className="text-lg font-bold mb-2">Graphity Falls</h3>
                    <p className="text-sm font-semibold">
                        &copy; 2023 Graphity Falls. All rights reserved.
                    </p>
                </div>

                {/* Column 2: About Graph Database Usage */}
                <div>
                    <h3 className="text-lg font-bold mb-2">
                        About This Project
                    </h3>
                    <p className="text-sm font-semibold">
                        This graph database is designed specifically for
                        exploring characters and episodes from SpongeBob
                        SquarePants. It allows users to easily search and find
                        connections between characters, episodes, and iconic
                        moments in a fun, interactive way.
                    </p>
                </div>

                {/* Column 3: Team Members */}
                <div>
                    <h3 className="text-lg font-bold mb-2">Team Members</h3>
                    <ul>
                        <li className="text-sm font-semibold">
                            Anindya Lokeswara - 2106633696
                        </li>
                        <li className="text-sm font-semibold">
                            Rayhan Putra Randi - 1234567890
                        </li>
                        <li className="text-sm font-semibold">
                            Debby Fitriani - 1234567890
                        </li>
                        <li className="text-sm font-semibold">
                            Teuku Gevin - 1234567890
                        </li>
                    </ul>
                </div>

                {/* Column 4: Contact Us */}
                <div>
                    <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                    <p className="text-sm font-semibold">
                        Email: contact@graphityfalls.com
                    </p>
                    <p className="text-sm font-semibold">
                        Phone: (123) 456-7890
                    </p>
                    <p className="text-sm font-semibold">
                        Address: Depok, Universitas Indonesia
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
