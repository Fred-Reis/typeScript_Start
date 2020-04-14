import express from 'express';

import createUser from './services/CreateUser'

const app = express()

const user = createUser({
  name: 'Frederico',
  email: 'frederico@gmail.com',
  password:'teste123',
  techs: [
   'NodeJS', 
   'ReactJS',
   {title: 'React Native', experience: 70}
 ]
})

app.get('/',(request, response) => {
  return response.json({mesage: 'Hello World!'});
})

app.listen(3333)