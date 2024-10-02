import React from 'react'

const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 22.2C6.42944 22.2 1.8 17.5706 1.8 12C1.8 6.42944 6.42944 1.8 12 1.8C17.5706 1.8 22.2 6.42944 22.2 12C22.2 17.5706 17.5706 22.2 12 22.2ZM13.5 6.75V12L18 14.25L16.75 15.75L12 13.5V6.75H13.5Z" />
    </svg>
)

export default LogoIcon
