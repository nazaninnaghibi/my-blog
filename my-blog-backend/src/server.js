// import express from 'express';
// import bodyParser from 'body-parser';
// import { MongoClient } from 'mongodb';


// const app = express();

// app.use(bodyParser.json());

// app.get('/api/articles/:name', async (req,res)=> {
//     try{
//         const articleName = req.params.name;
//         const client = await MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true});
//         const db = client.db('my-blog');
//         const articleInfo = await db.collection('articles').findOne({name: articleName})
//         res.status(200).json(articleInfo);
//         client.close();
//     }
//     catch (error) {
//         res.status(500).json({message:'Error connection to db', error});
//     }
   
// });

// app.post('/api/articles/:name/upvote', async(req, res) => {
//     try{
//         const articleName = req.params.name;
//         const client = await MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true});
//         const db = client.db('my-blog');
    
//         const articleInfo = await db.collection('articles').findOne({name: articleName});
//         await db.collection('articles').updateOne({name: articleName},{
//             '$set':{
//                 upvotes: articleInfo.upvotes +1 , 
//             },
//         });
        
//         const updatedArticleInfo = await db.collection('articles').findOne({name: articleName});
//         res.status(200).json(updatedArticleInfo);
//         client.close;

//     } catch (error){
//       res.status(500).json({message:'Error connection to db', error});
//     }

//     // articlesInfo[articleName].upvotes += 1;
//     // res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`);
// });

// app.post('/api/articles/:name/add-comment',(req,res)=>{
//     const {username, text} = req.body;
//     const articleName = req.params.name;

//     articlesInfo[articleName].comments.push({username, text});
//     res.status(200).send(articlesInfo[articleName])
// });

// app.listen(8000,() => console.log('listening on port 8000'));
import path from 'path';

const express = require('express');
const articleRoutes = require('../controllers/article');

const connectDB = require('../config/connectDB');

const app = express();

//coneect to db
connectDB();

//set a middleware to parse dat
app.use(express.json());
app.use(express.static(path.join(__dirname, '/build')));

app.use('/api/article', articleRoutes);

app.get('*',(req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(5000, () => {
  console.log('Server started');
});


