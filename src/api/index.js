import axios from 'axios'


export const fetchUsers = async () => {
    let res = await axios.get('https://jsonplaceholder.typicode.com/users')
    return res.data
}