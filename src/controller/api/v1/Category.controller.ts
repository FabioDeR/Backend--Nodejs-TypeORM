import { Request, request, Response } from 'express';
import { getManager } from 'typeorm';
import { Category } from '../../../models/Category';





export async function createCategory(req:Request, res:Response){  
    const categoryRepository = getManager().getRepository(Category);
    const newCategory = await categoryRepository.create(req.body);
    await categoryRepository.save(newCategory);
        res.json(newCategory);
}

export async function getAllCategory(req:Request, res: Response){
    const categoryRepository = getManager().getRepository(Category);
    const allCategory = await categoryRepository.find();
    res.json(allCategory);
}
