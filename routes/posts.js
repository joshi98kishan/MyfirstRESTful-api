module.exports={
    getPost(req,res){
        res.status(200).send(req.store.posts);
    },

    postPost(req,res){
        const newPost=req.body;
        const newID= req.store.posts.length;
        req.store.posts.push(newPost);
        res.status(201).send({postID:newID});
    },

    putPost(req,res){
        const newPost=req.body;
        const id=req.params.postID;
        req.store.posts[id]=newPost;
        res.status(200).send(req.store.posts[id]);
    },

    deletePost(req,res){
        const id=req.params.postID;
        req.store.posts.splice(id,1);
        res.status(204).send();
    }
};