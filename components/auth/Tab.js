const Tab = ({ label, onClick, isActive }) => {
    return (<span className={`${isActive ? 'bg-white dark:bg-slate-600' : 'text-white'} text-lg hover:cursor-pointer px-5 py-1 rounded-t`} onClick={onClick}>
        {label}
    </span>)
}

export default Tab