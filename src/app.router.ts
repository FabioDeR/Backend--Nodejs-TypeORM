import {createCategory, getAllCategory } from './controller/api/v1/Category.controller';
import { createTodo, getAllTodo } from './controller/api/v1/Todo.controller';
import { getAllUser, registerUser } from './controller/api/v1/Users.controller';


export const AppRoutes = [
    //API CATEGORY
    {
        path:'/api/v1/postCategory',
        method : 'post',
        action : createCategory
    },
    {
        path:'/api/v1/allCategory',
        method : 'get',
        action : getAllCategory 
    },
    //API USER
    {
        path:'/api/v1/registerUser',
        method : 'post',
        action : registerUser
    },
    {
        path:'/api/v1/allUsers',
        method : 'get',
        action : getAllUser
    },
    //API TODO
    {
        path:'/api/v1/createTodo',
        method : 'post',
        action : createTodo
    },
    {
        path:'/api/v1/allTodo',
        method : 'get',
        action : getAllTodo
    }
];