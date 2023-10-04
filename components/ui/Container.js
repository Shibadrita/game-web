const Container = ({ children }) => {
    return (<div className="px-10 py-20 after:absolute after:-z-10 after:h-4/5 after:w-2/3 after:-translate-y-full after:rounded-full after:bg-gradient-radial after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] after:dark:from-sky-900 after:dark:via-[#0141ff]/40" >
        {children}
    </div >)
}

export default Container