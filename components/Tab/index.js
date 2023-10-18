import Link from "next/link"
import Image from "next/image"

const Tab = ({ label, href, image, className }) => {
    return (<Link
        className={`group hover:cursor-pointer hover:opacity-80 transition-opacity ${className}`}
        href={href}
    >
        <Image
            className='rounded-3xl p-2'
            src={image}
            height={200}
            width={200}
            alt={label}
        />
        <span className='w-52 absolute hidden group-hover:block text-center'>{label}</span>
    </Link>)
}

export default Tab