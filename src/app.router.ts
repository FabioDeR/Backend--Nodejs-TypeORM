import {createCategory, getAllCategory } from './controller/api/v1/Category.controller';


export const AppRoutes = [
    {
        path:'/api/v1/postCategory',
        method : 'post',
        action : createCategory
    },
    {
        path:'/api/v1/allCategory',
        method : 'get',
        action : getAllCategory 
    }
];