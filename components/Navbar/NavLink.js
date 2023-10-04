import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ label, href }) => {
    const path = usePathname()
    return (<Link
        className={`${path === href && 'bg-slate-100 dark:bg-gray-900'} hover:bg-slate-100 dark:hover:bg-gray-900 transition-colors px-3 py-2 mx-2 rounded`}
        href={href}
    >{label}</Link>)
}

export default NavLink