# user-crud

## Project installation
1. In project root folder run npm install 
2. Create .env file, add environment variables using .env.example template
3. After installation of all packages, run `npm run dev`
4. That's it, now project is ready to listen user crud endpoints

## Supported endpoints

1. POST `/user/create` => to create new user in MongoDb
2. GET `/user/:id` => fetch specific user data
3. POST `/user` => fetch all users list, this endpoint is supporting pagination, filtering and sorting
4. PUT `/update/:id` => update specific user info
5. DELETE `/delete/:id` => to delete user from MongoDb