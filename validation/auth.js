export const regexp = {
    email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
}

export const error = {
    email: 'You gave us an invalid email.',
    password: 'Password must contain at least one lowercase letter, at least one uppercase letter, at least one digit and a minimum length of 8 characters.',
    confirm: 'Password does not match the original one.'
}