import axios from 'axios';

export default axios.create({
    baseURL: 'https://accounts.google.com/o/oauth2/auth'
})