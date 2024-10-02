export const components: {
    title: string
    href: string
    description: string
}[] = [
    {
        title: 'Characters',
        href: '/characters',
        description:
            'Explore the list of characters from SpongeBob SquarePants.',
    },
    {
        title: 'Episodes',
        href: '/episodes',
        description:
            'Browse through all the episodes of the SpongeBob SquarePants series.',
    },
]

export const characters: {
    title: string
    href: string
    description: string
}[] = [
    {
        title: 'SpongeBob',
        href: '/characters/spongebob',
        description:
            'SpongeBob SquarePants is the title character of the show.',
    },
    {
        title: 'Patrick',
        href: '/characters/patrick',
        description: "Patrick Star is SpongeBob's best friend.",
    },
    {
        title: 'Squidward',
        href: '/characters/squidward',
        description: "Squidward Tentacles is SpongeBob's grumpy neighbor.",
    },
]

export const episodes: { title: string; href: string; description: string }[] =
    [
        {
            title: 'Pilot',
            href: '/episodes/pilot',
            description: 'The first episode of SpongeBob SquarePants.',
        },
        {
            title: 'Band Geeks',
            href: '/episodes/band-geeks',
            description:
                'Squidward assembles a band to perform at the Bubble Bowl.',
        },
        {
            title: 'F.U.N.',
            href: '/episodes/fun',
            description: 'SpongeBob tries to teach Plankton about fun.',
        },
    ]
