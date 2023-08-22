import clientPromise from "../../../lib/mongodb";

export default async (req: any, res: any) => {
   try {
       const client = await clientPromise;
       const db = client.db("gamble");
       const collection = db.collection('users');

       const documentToInsert = {
        key1: 'value1',
        key2: 'value2',
      };

       const users = await db
           .collection("users")
           .find({})
           .limit(10)
           .toArray();

           collection.insertOne(documentToInsert)
           .then((result) => {
             console.log('Document inserted successfully:', result.insertedId);
           })
           .catch((err) => {
             console.error('Error inserting document:', err);
           })
           .finally(() => {
             // Close the connection when done
             client.close();
           });

       res.json(users);
   } catch (e) {
       console.error(e);
   }
};