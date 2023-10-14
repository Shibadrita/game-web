export const catchAsync = (func) => {
    return () => {
        func().catch(error => console.error(error))
    }
}