import { Request, Response } from 'express';
import { Message } from '../models/product';

export const getMessages = async (req: Request, res: Response) => {
    const listMessages = await Message.findAll();

    res.json(listMessages)
}