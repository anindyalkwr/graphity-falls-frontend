import Link from 'next/link'
import { useState, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { LogoIcon } from '@/components/icons'
import { characters, episodes } from './constant'
import { FaBars, FaTimes } from 'react-icons/fa'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-white shadow-md py-4 px-6 flex items-center relative">
            {/* Logo and Title */}
            <div className="flex items-center space-x-2 w-full lg:w-auto">
                <Link href="/" className="flex items-center space-x-2">
                    <LogoIcon className="h-8 w-8 text-black" />
                    <span className="scroll-m-20 text-blue-600 text-2xl font-bold tracking-tight">
                        Graphity Falls
                    </span>
                </Link>
            </div>

            {/* Burger Icon for Mobile */}
            <button
                className="lg:hidden text-2xl text-gray-700 focus:outline-none"
                onClick={toggleMenu}
            >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Navigation Menu for Larger Screens */}
            <div className="hidden lg:flex items-center space-x-6 ml-6">
                <NavigationMenu>
                    <NavigationMenuList className="hidden lg:flex lg:space-x-4 ml-6">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Characters
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/characters"
                                            >
                                                <LogoIcon className="h-6 w-6" />
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Explore the Characters
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Get to know all the fun and
                                                    quirky characters from
                                                    SpongeBob SquarePants,
                                                    including SpongeBob,
                                                    Patrick, Squidward, and
                                                    more.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    {characters.map((character) => (
                                        <ListItem
                                            key={character.title}
                                            title={character.title}
                                            href={character.href}
                                        >
                                            {character.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Episodes
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/episodes"
                                            >
                                                <LogoIcon className="h-6 w-6" />
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Watch All Episodes
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Discover episodes from the
                                                    hit series SpongeBob
                                                    SquarePants, from the
                                                    classic &quot;Pilot&quot; to
                                                    fan favorites like
                                                    &quot;Band Geeks&quot; and
                                                    more.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    {episodes.map((episode) => (
                                        <ListItem
                                            key={episode.title}
                                            title={episode.title}
                                            href={episode.href}
                                        >
                                            {episode.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/" passHref legacyBehavior>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Homepage
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Dropdown Menu for Mobile */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-6 z-50">
                    <ul className="space-y-4">
                        <li>
                            <Link
                                href="/characters"
                                className="block rounded-md p-3 text-gray-700 hover:bg-gray-200 hover:text-blue-600 transition-colors font-semibold"
                                onClick={toggleMenu}
                            >
                                Characters
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/episodes"
                                className="block rounded-md p-3 text-gray-700 hover:bg-gray-200 hover:text-blue-600 transition-colors font-semibold"
                                onClick={toggleMenu}
                            >
                                Episodes
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="block rounded-md p-3 text-gray-700 hover:bg-gray-200 hover:text-blue-600 transition-colors font-semibold"
                                onClick={toggleMenu}
                            >
                                Homepage
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

// ListItem Component
const ListItem = forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = 'ListItem'

export default Navbar
