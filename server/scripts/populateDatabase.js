const dotEnv = require('dotenv')
const axios = require('axios')
dotEnv.config()

const PORT = process.env.PORT || 3001
const signupApi = `http://localhost:${PORT}/api/v1/user/signup`

const users = [
    {
        firstName: 'Tony',
        lastName: 'Stark',
        email: 'tony@stark.com',
        password: 'password123'
    },
    {
        firstName: 'Steve',
        lastName: 'Rogers',
        email: 'steve@rogers.com',
        password: 'password123'
    },
    {
        firstName: 'Bruce',
        lastName: 'Banner',
        email: 'bruce@banner.com',
        password: 'password123'
    },
    {
        firstName: 'Natasha',
        lastName: 'Romanoff',
        email: 'natasha@romanoff',
        password: 'password123'
    },
    {
        firstName: 'Thor',
        lastName: 'Odinson',
        email: 'thos@odinson.com',
        password: 'password123'
    }
]

users.forEach(user => {
    axios
        .post(signupApi, user)
        .then(response => console.log(response))
        .catch(error => console.log(error))
})
