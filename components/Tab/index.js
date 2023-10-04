import Link from "next/link"
import Image from "next/image"

const Tab = ({ label, href, className }) => {
    return (<Link
        className={`group hover:cursor-pointer hover:opacity-80 transition-opacity ${className}`}
        href={href}
    >
        <Image
            className='rounded-3xl p-2'
            src={'https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80'}
            height={200}
            width={200}
        />
        <span className='w-52 absolute hidden group-hover:block text-center'>{label}</span>
    </Link>)
}

export default Tab