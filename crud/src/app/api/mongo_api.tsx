import connectMongo from "../database/conct";
import { NextApiRequest,NextApiResponse } from "next";
import mongoose from "mongoose";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
     connectMongo()     
    res.status(200).json({name:'John Doe'})
}

    