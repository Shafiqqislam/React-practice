const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ObjectID = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5rirp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express()
app.use(bodyParser.json());
app.use(cors());


const port = 5000;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const appointmentCollection = client.db("restoreService").collection("appointments");
    const ordersCollection = client.db("restoreService").collection("orders");
    const reviewCollection = client.db("restoreService").collection("reviews");

    app.post('/addService', (req, res) => {
        const newProduct = req.body;
        console.log('adding new product', newProduct);
        appointmentCollection.insertOne(newProduct)
            .then(result => {
                console.log('inserted count', result.insertedCount)
                res.send(result.insertedCount > 0)
            })
    })
    app.post('/addReview', (req, res) => {
        const newReview = req.body;
        console.log('adding new review', newReview);
        reviewCollection.insertOne(newReview)
            .then(result => {
                console.log('inserted count', result.insertedCount)
                res.send(result.insertedCount > 0)
            })
    })
    app.get('/services', (req, res) => {
        appointmentCollection.find()
            .toArray((err, items) => {
                res.send(items);
                // console.log('from database',items)
            })
    })
    app.get('/reviews', (req, res) => {
        reviewCollection.find()
            .toArray((err, items) => {
                res.send(items);
                // console.log('from database',items)
            })
    })

    app.get('/appointments', (req, res) => {
        ordersCollection.find({})
            .toArray((err, documents) => {
                res.send(documents);
            })
    })

    app.get('/service/:id', (req, res) => {
        console.log('from', req.params.id)
        appointmentCollection.find({ _id: ObjectID(req.params.id) })
            .toArray((err, documents) => {
                res.send(documents[0]);
            })
    })
    app.delete('/deleteProduct/:id', (req, res) => {
        const id = ObjectID(req.params.id)
        console.log('delete this id', id)
        appointmentCollection.deleteOne({ _id: id })
            .then(result => {
                console.log('delete post', result.deletedCount)
                res.send(result.deletedCount > 0)
            })
    })
    app.post('/addOrder', (req, res) => {
        const order = req.body;
        console.log('adding new product', order);
        ordersCollection.insertOne(order)
            .then(result => {
                console.log('inserted count', result.insertedCount)
                res.send(result.insertedCount > 0)
            })
    })
});
app.get('/', (req, res) => {
    res.send("hello from db it's working working")
})

app.listen(process.env.PORT || port)