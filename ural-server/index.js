const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
require ('dotenv').config();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a744t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
    try{
        await client.connect();
        console.log('Connected to database')
        const database = client.db("uralPackage");
        const servicesCollection = database.collection("package");
        const orderCollection = database.collection("order");

        // post api
        app.post('/services', async(req,res) => {
            const service = req.body;
            console.log("hit services server",service);
            const result = await servicesCollection.insertOne(service);
            console.log(result);
            res.json('post services hited')
        });
        // get Services
        app.get('/services', async(req,res)=>{
            const cursor = servicesCollection.find({});
            const services = await cursor.toArray();
            res.send(services);
        }) 
        // get Single Service 
        app.get('/services/:id', async(req,res)=>{
            const id = req.params.id;
            console.log(id)
            const query = { _id:ObjectId(id)}
            const service = await servicesCollection.findOne(query);
            res.json(service);
        });
        // order api 
        // order post api
        app.post('/orders', async(req,res) => {
            const order = req.body;
            console.log("hit order server",order);
            const result = await orderCollection.insertOne(order);
            console.log(result);
            res.json('post order hited')
        });
        // get order 
        app.get('/orders',async(req,res)=>{
            const cursor = orderCollection.find({});
            const order = await cursor.toArray();
            res.send(order);
        })
         // get Single order 
        app.get('/orders/:id', async(req,res)=>{
            const id = req.params.id;
            console.log(id)
            const query = { _id:ObjectId(id)}
            const service = await orderCollection.findOne(query);
            res.json(service);
        });
        // order delete
        app.delete('/orders/:id',async(req,res)=>{
            const id = req.params.id;
            console.log('order delete id ',id)
            const query = { _id: ObjectId(id)}
            const result = await orderCollection.deleteOne(query);
            res.json(result);
        }) 
        // order Update
        app.put('/orders/:id',async(req,res)=>{
            const id = req.params.id;
            const updateOrder = req.body;
            console.log('order Stage Update id ',updateOrder)
            const options = {upsert:true};
            const find = { _id: ObjectId(id)}
            const updatedoc = {
                $set:{
                    state:updateOrder.state
                },
            };
            const result = await orderCollection.updateOne(find , updatedoc,options);
            res.json(result);
        }) 

    }
    finally{
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send('Running Ural Server')
});

app.listen(port,()=>{
    console.log('Ural Server port', port);
})