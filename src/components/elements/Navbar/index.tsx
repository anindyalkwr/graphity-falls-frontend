import Link from 'next/link'
import { useState, forwardRef } from 'react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { LogoIcon, SearchIcon, BurgerIcon } from '@/components/icons'
import { characters, episodes } from './constant' // Import characters and episodes

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

    return (
        <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
            {/* Left Side: Logo, Web Name, and Navigation Menu */}
            <div className="flex items-center space-x-4 w-full lg:w-auto">
                <div className="flex items-center space-x-4">
                    <LogoIcon className="h-8 w-8 text-black" />
                    <Link
                        href="/"
                        className="scroll-m-20 text-2xl font-semibold tracking-tight"
                    >
                        Graphity Falls
                    </Link>
                </div>

                <NavigationMenu>
                    <NavigationMenuList className="hidden lg:flex lg:space-x-4 ml-6">
                        {/* Dropdown for Characters */}
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

                        {/* Dropdown for Episodes */}
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

                        {/* No dropdown for Homepage */}
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
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

            {/* Right Side: Search Bar and Burger Menu */}
            <div className="flex items-center w-full lg:w-auto">
                {/* Search Bar for Larger Screens */}
                <div className="hidden lg:block w-full lg:max-w-2xl">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search..."
                            className="w-full border border-gray-300 rounded-md p-2 pl-2"
                        />
                        <button className="absolute right-2 top-2 flex items-center">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* Burger Menu for Small Screens */}
                <div className="lg:hidden relative absolute">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <BurgerIcon className="h-8 w-8 text-gray-800" />
                    </button>

                    {isMenuOpen && (
                        <div className="absolute top-16 right-0 w-64 bg-white shadow-lg">
                            <ul className="flex flex-col space-y-2 p-4">
                                <li>
                                    <Link href="/" className="text-gray-800">
                                        Homepage
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/characters"
                                        className="text-gray-800"
                                    >
                                        Characters
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/episodes"
                                        className="text-gray-800"
                                    >
                                        Episodes
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

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
