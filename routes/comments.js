module.exports={
    getComment(req,res){
        res.status(200).send(req.store.posts[req.params.postID].comments);
    },

    postComment(req,res){
        const newComment=req.body;
        const newID= req.store.posts[req.params.postID].comments.length;
        req.store.posts[req.params.postID].comments.push(newComment);
        res.status(201).send({commentID:newID});
    },

    putComment(req,res){
        req.store.posts[req.params.postID].comments[req.params.commentID]=req.body;
        res.status(200).send(req.store.posts[req.params.postID].comments[req.params.commentID]);
    },

    deleteComment(req,res){
        req.store.posts[req.params.postID].comments.splice(req.params.commentID,1);
        res.status(204).send();
    }
};