import axios from 'axios'

const base_url  = 'https://api.thecatapi.com/v1/images/search?limit='

export const TaskService = {
    async get() {
        return (await  axios.get(`${base_url}10`, {headers: {
                'Content-Type': 'application/json',
                'x-api-key': `${import.meta.env.VITE_API_KEY}`
            }})).data
    },
}
