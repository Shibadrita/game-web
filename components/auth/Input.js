import { forwardRef } from "react"

const Input = forwardRef(({ label, type, isValid, onChange, error }, ref) => {
    return (<div className='flex flex-col mb-3'>
        <label className='text-sm py-2' htmlFor={label}>{label}</label>
        <input className={`dark:bg-neutral-200 dark:text-black border-2 ${isValid ? 'border-gray-200 focus:border-gray-500' : 'border-red-500'} p-1 rounded outline-none`}
            id={label}
            type={type}
            ref={ref}
            onChange={onChange}
        />
        {!isValid && <div className='text-xs text-red-500 dark:text-red-200 mt-1'>{error}</div>}
    </div>)
})

export default Input