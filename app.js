const express = require('express'),
userRouter = require('./routes/users'),
listRouter = require('./routes/list'),
archiveRouter = require('./routes/archive'),
path = require('path'),

app = express();
app.use(express.json());

//Reglage Erreurs CORS
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content, Accept,Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH,OPTIONS');
    next();
})
app.use('/files',express.static(path.join(__dirname,'files')))

app.get('/',(req,res)=>{
    res.json('Hello World ! ')
})
// users api
app.use('/users',userRouter);
app.use('/list',listRouter)
app.use('/archive',archiveRouter)


module.exports= app;