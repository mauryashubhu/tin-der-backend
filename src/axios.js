import axios from 'axios'

const instance =axios.create({
    baseURL: 'https://tin-der-backend.herokuapp.com/'

})

export default instance