import { Collection, MongoClient } from "mongodb";
import clientPromise from "../../../lib/mongodb";
import { User } from "../../models/user.interface";

export default async (req: any, res: any) => {
   try {
       const client = await clientPromise;
       const db = client.db("gamble");
       const collection = db.collection('users');

       if (req.method === 'GET') {
        const scores = await db
           .collection("users")
           .find({})
           .sort({ budget: -1 })
           .toArray();

		   res.status(201).json(scores);
      } else {
       	   res.status(405).end(); 
      }
   } catch (e) {
       console.error(e);
   }
};