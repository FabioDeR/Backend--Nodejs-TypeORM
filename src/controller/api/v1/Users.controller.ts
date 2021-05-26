import { Request, Response } from 'express';
import { table } from 'node:console';
import { getManager } from 'typeorm';
import { User } from '../../../models/User.model';



export async function registerUser(req:Request, res:Response){
    const userRepository = getManager().getRepository(User);
    const newUser = userRepository.create(req.body, req.body.password);
    await userRepository.save(newUser);
    res.json(newUser);
}

export async function getAllUser(req:Request, res: Response){
    const userRepository = getManager().getRepository(User);
    const allUser = await userRepository.find();
    console.table(allUser);
    res.json(allUser);
}