import React from 'react'

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M10 2a8 8 0 016.32 13.328l4.388 4.39-1.414 1.414-4.39-4.388A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z" />
    </svg>
)

export default SearchIcon
