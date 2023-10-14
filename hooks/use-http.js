import { useState } from "react"

export const useGet = () => {
    const [isLoading, setIsLoading] = useState()
    const getRequest = async (url, token) => {
        try {
            setIsLoading(true)
            const response = await fetch(`http://localhost:8000${url}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            const { success, message, data } = await response.json()
            if (!success) throw new Error(message)
            setIsLoading(false)
            return { message, data }
        } catch (error) {
            setIsLoading(false)
            return { message: error.message, data: {} }
        }
    }
    return { getRequest, isLoading }
}

export const usePost = () => {
    const [isLoading, setIsLoading] = useState()
    const postRequest = async (url, body, token) => {
        try {
            setIsLoading(true)
            const response = await fetch(`http://localhost:8000${url}`, {
                method: 'post',
                body: JSON.stringify(body),
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            const { success, message, data } = await response.json()
            if (!success) throw new Error(message)
            setIsLoading(false)
            return { message, data }
        } catch (error) {
            setIsLoading(false)
            return { message: error.message, data: {} }
        }
    }
    return { postRequest, isLoading }
}