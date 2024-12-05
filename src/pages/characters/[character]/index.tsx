import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaSpinner } from 'react-icons/fa' // Spinner for loading state

interface ApiResponse {
    predicate: string
    objects: {
        object: {
            type: string
            value: string
            datatype?: string
            person_uri?: string // Optional person_uri for some objects
        }
        label?: {
            type: string
            value: string
        }
    }[]
}

const CharacterInfo = () => {
    const router = useRouter()
    const { character } = router.query // Extract character parameter from URL
    const [data, setData] = useState<ApiResponse[]>([])
    const [loading, setLoading] = useState(true)

    // Fetch data when character changes or on initial mount
    useEffect(() => {
        if (character) {
            fetchData(character as string)
        }
    }, [character])

    const fetchData = async (character: string) => {
        try {
            setLoading(true)
            const apiUrl = process.env.NEXT_PUBLIC_API_URL // Access the environment variable
            if (!apiUrl)
                throw new Error('API URL not defined in environment variables')

            const res = await fetch(`${apiUrl}/api/query/entity/${character}`)
            if (!res.ok) {
                throw new Error('Failed to fetch data')
            }
            const result: ApiResponse[] = await res.json()
            setData(result)
        } catch (error) {
            console.error('Error fetching data:', error)
        } finally {
            setLoading(false)
        }
    }

    const renderItems = (predicate: string, items: ApiResponse['objects']) => {
        return items.map((item, index) => {
            const rawValue = item.object.value
            const displayText = item.label
                ? item.label.value
                : rawValue.includes('/')
                  ? rawValue.split('/').pop() // Extract the last part of the value if it's a URI
                  : rawValue

            const lastPart = rawValue.split('/').pop()

            // Check if person_uri exists for the object (for people)
            if (item.object.person_uri) {
                return (
                    <span key={index}>
                        {index > 0 && ' , '}
                        <Link
                            href={item.object.person_uri}
                            className="text-blue-600 hover:underline"
                        >
                            {item.label?.value || displayText}
                        </Link>
                    </span>
                )
            }

            // If it's a URI, link it to the appropriate page (character or episode)
            if (item.object.type === 'uri') {
                const href =
                    predicate.includes('#hasFirstAppearance') ||
                    predicate.includes('hasFirstAppearance') ||
                    predicate.includes('#hasLatestAppearance') ||
                    predicate.includes('hasLatestAppearance') ||
                    predicate.includes('#hasAppearance') ||
                    predicate.includes('hasAppearance')
                        ? `/episodes/${lastPart}`
                        : `/characters/${lastPart}`

                return (
                    <span key={index}>
                        {index > 0 && ' , '}
                        <Link
                            href={href}
                            className="text-blue-600 hover:underline"
                        >
                            {displayText}
                        </Link>
                    </span>
                )
            }

            // For literal values (non-URI), just display the value as text
            return (
                <span key={index}>
                    {index > 0 && ' , '}
                    {displayText}
                </span>
            )
        })
    }

    return (
        <div className="container mx-auto p-4">
            {loading && (
                <div className="text-center">
                    <FaSpinner className="animate-spin text-2xl text-gray-600" />
                </div>
            )}

            {!loading && data.length > 0 && (
                <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 mt-20">
                    <h2 className="text-3xl font-semibold text-center mb-6">
                        Character Information
                    </h2>

                    {/* Iterate over predicates and objects */}
                    {data.map((item, index) => (
                        <div key={index} className="space-y-2">
                            <div className="text-gray-600 font-medium">
                                {item.predicate.split('#').pop()}
                            </div>

                            {/* Render objects as comma-separated values */}
                            <div className="text-gray-800">
                                {renderItems(item.predicate, item.objects)}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Show message if no data */}
            {!loading && data.length === 0 && (
                <div className="text-center text-gray-500 mt-80">
                    No information available for this character.
                </div>
            )}
        </div>
    )
}

export default CharacterInfo
