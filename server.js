const routes=require('./routes');
const express=require('express');
const logger=require('morgan');
const errorhandler=require('errorhandler');
const bodyparser=require('body-parser');

let app=express();
app.use(bodyparser.json());
app.use(logger('dev'));
app.use(errorhandler());

let store={
    posts:[]
};

app.use((req,res,next)=>{
    req.store=store;
    next();
});

app.get('/posts',routes.posts.getPost);
app.post('/posts',routes.posts.postPost);
app.put('/posts/:postID',routes.posts.putPost);
app.delete('/posts/:postID',routes.posts.deletePost);

app.get('/posts/:postID/comments',routes.comments.getComment);
app.post('/posts/:postID/comments',routes.comments.postComment);
app.put('/posts/:postID/comments/:commentID',routes.comments.putComment);
app.delete('/posts/:postID/comments/:commentID',routes.comments.deleteComment);


app.listen(3000,()=>{
    console.log("Listening at port 3000...");
});
