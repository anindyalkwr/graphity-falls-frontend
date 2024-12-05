import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaSpinner } from 'react-icons/fa' // For the loading spinner

interface ApiResponse {
    predicate: string
    objects: Array<{
        object: {
            type: string
            value: string
            datatype?: string
            person_uri?: string // Add person_uri as an optional property
        }
        label?: {
            type: string
            value: string
        }
    }>
}

const EpisodeInfo = () => {
    const router = useRouter()
    const { episode } = router.query // Extract episode parameter from URL
    const [data, setData] = useState<ApiResponse[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (episode) {
            fetchData(episode as string)
        }
    }, [episode])

    const fetchData = async (episode: string) => {
        try {
            setLoading(true)
            const apiUrl = process.env.NEXT_PUBLIC_API_URL // Access the environment variable
            if (!apiUrl)
                throw new Error('API URL not defined in environment variables')

            const res = await fetch(`${apiUrl}/api/query/entity/${episode}`)
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

            // Check if person_uri is available
            if (item.object.person_uri) {
                // Link to person's Wikidata page
                return (
                    <span key={index}>
                        {index > 0 && ' , '}
                        <Link
                            href={item.object.person_uri}
                            className="text-blue-600 hover:underline"
                        >
                            {displayText || lastPart}
                        </Link>
                    </span>
                )
            }

            // If the object type is a URI (but not a person), link to episode or character
            if (item.object.type === 'uri') {
                const href =
                    predicate.includes('#hasCharacter') ||
                    predicate.includes('hasCharacter')
                        ? `/characters/${lastPart}`
                        : `/episodes/${lastPart}`

                return (
                    <span key={index}>
                        {index > 0 && ' , '}
                        <Link
                            href={href}
                            className="text-blue-600 hover:underline"
                        >
                            {displayText || lastPart}
                        </Link>
                    </span>
                )
            }

            // For literal types (non-URI), display the value as plain text
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
                        Episode Information
                    </h2>

                    {/* Iterate over predicates and objects */}
                    {data.map((item, index) => (
                        <div key={index} className="space-y-2">
                            <div className="text-gray-600 font-medium">
                                {item.predicate.split('#').pop()}
                            </div>

                            {/* Render objects in a comma-separated format */}
                            <div className="text-gray-800">
                                {renderItems(item.predicate, item.objects)}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Show a message if no data is returned */}
            {!loading && data.length === 0 && (
                <div className="text-center text-gray-500 mt-80">
                    No information available for this episode.
                </div>
            )}
        </div>
    )
}

export default EpisodeInfo
