import { Request, Response } from 'express';
import { getManager, getRepository } from 'typeorm';
import { Category } from '../../../models/Category';
import { Todo } from '../../../models/Todo.model';

export async function createTodo(req:Request, res:Response){      
    
    
    const categories = (await getRepository(Category).findByIds(req.body.categories)); 
     const TodoRepository = await getManager().getRepository(Todo);     
     if((categories)){
        const newTodo = await TodoRepository.create({
            title: req.body.title,
            description:req.body.description,
            user :req.body.user,
            categories           
        });
        await TodoRepository.save(newTodo);
        res.json(newTodo);

     } else{
         res.status(401).json('Category not found');         
     }
}
   



    
    
    
    
 

export async function getAllTodo(req:Request, res: Response){
    const TodoRepository = getManager().getRepository(Todo);
    const allTodo = await TodoRepository.find();
    console.table(allTodo);
    res.json(allTodo);
}