import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface Entity {
    entLabel: { value: string }
    entType: { value: string }
    entity: { value: string }
}

const SearchPage = () => {
    const router = useRouter()
    const { filter } = router.query
    const [entities, setEntities] = useState<Entity[]>([]) // Specify the type for entities
    const [pagination, setPagination] = useState({
        page: 1,
        pageSize: 10,
        totalPages: 1,
    })
    const [loading, setLoading] = useState(false)
    const [inputPage, setInputPage] = useState(pagination.page)

    const fetchData = async (filter: string, page = 1) => {
        if (!filter) return
        setLoading(true)
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL
            if (!apiUrl)
                throw new Error('API URL not defined in environment variables')

            const res = await fetch(
                `${apiUrl}/api/query/entities/${filter}?page=${page}`
            )
            if (!res.ok) throw new Error('Failed to fetch data')
            const data = await res.json()

            setEntities(data.entities)
            setPagination({
                page: data.pagination.page,
                pageSize: data.pagination.page_size,
                totalPages: data.pagination.total_pages,
            })
        } catch (error) {
            console.error('Error fetching data:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (filter) {
            fetchData(filter as string, pagination.page)
        }
    }, [filter, pagination.page])

    const handlePageChange = (page: number) => {
        setPagination((prev) => ({
            ...prev,
            page,
        }))
        setInputPage(page)
    }

    const handleRedirect = (entType: string, entId: string) => {
        const type = entType.split('/').pop()
        const id = entId.split('/').pop()
        if (type === 'Character') {
            router.push(`/characters/${id}`)
        } else if (type === 'Episode') {
            router.push(`/episodes/${id}`)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const page = Number(inputPage)
            if (page >= 1 && page <= pagination.totalPages) {
                handlePageChange(page)
            } else {
                alert('Please enter a valid page number.')
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-50">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center text-yellow-400 drop-shadow-md mt-20">
                Search results for &quot;{filter}&quot;
            </h2>

            {loading && (
                <div className="text-center text-gray-500">Loading...</div>
            )}

            {!loading && entities.length > 0 && (
                <div className="w-full max-w-6xl">
                    <div className="space-y-4">
                        {entities
                            .filter((entity) =>
                                ['Character', 'Episode'].includes(
                                    entity.entType.value.split('/').pop()!
                                )
                            )
                            .map((entity, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between space-x-4 hover:shadow-xl transition-shadow"
                                >
                                    <div className="flex-1">
                                        <h3
                                            className={`text-lg font-medium text-gray-800 truncate ${
                                                entity.entType.value.includes(
                                                    'Character'
                                                )
                                                    ? 'font-semibold'
                                                    : ''
                                            }`}
                                            style={{ maxWidth: '250px' }}
                                        >
                                            {entity.entLabel.value}
                                        </h3>
                                        <p
                                            className={`text-sm text-gray-600 ${
                                                entity.entType.value.includes(
                                                    'Character'
                                                )
                                                    ? 'font-bold'
                                                    : ''
                                            }`}
                                        >
                                            {entity.entType.value
                                                .split('/')
                                                .pop()}{' '}
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <button
                                            className="flex justify-center items-center px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                                            onClick={() =>
                                                handleRedirect(
                                                    entity.entType.value,
                                                    entity.entity.value
                                                )
                                            }
                                        >
                                            <FaArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            )}

            {!loading && entities.length === 0 && (
                <div className="text-center text-gray-500">
                    No results found.
                </div>
            )}

            {!loading && (
                <div className="flex justify-center items-center space-x-4 mt-6">
                    <button
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                        onClick={() =>
                            handlePageChange(
                                pagination.page > 1 ? pagination.page - 1 : 1
                            )
                        }
                        disabled={pagination.page <= 1}
                    >
                        Previous
                    </button>

                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Page</span>
                        <input
                            type="number"
                            value={inputPage}
                            onChange={(e) => {
                                setInputPage(Number(e.target.value))
                            }}
                            onKeyDown={handleKeyDown}
                            className="w-16 px-3 py-2 border rounded-lg text-center"
                            min={1}
                            max={pagination.totalPages}
                        />
                        <span className="text-sm text-gray-600">
                            of {pagination.totalPages}
                        </span>
                    </div>

                    <button
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                        onClick={() =>
                            handlePageChange(
                                pagination.page < pagination.totalPages
                                    ? pagination.page + 1
                                    : pagination.page
                            )
                        }
                        disabled={pagination.page >= pagination.totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}

export default SearchPage
