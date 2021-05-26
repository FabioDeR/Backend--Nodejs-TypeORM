import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { Category } from '../../../models/Category';
import { Todo } from '../../../models/Todo.model';

export async function createTodo(req:Request, res:Response){ 
      
    const TodoRepository = getManager().getRepository(Todo);
    const newTodo = await TodoRepository.create(req.body);
    await TodoRepository.save(newTodo);
        res.json(newTodo);
}

export async function getAllTodo(req:Request, res: Response){
    const TodoRepository = getManager().getRepository(Todo);
    const allTodo = await TodoRepository.find();
    console.table(allTodo);
    res.json(allTodo);
}