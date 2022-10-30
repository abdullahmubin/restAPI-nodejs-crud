const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const Post = require("../model/Post");

router.get("/", async (req, res) => {
    try{
        const posts = await Post.find();

        res.json(posts);
    }
    catch(err) {
        res.json({ message: err });
    }
})

router.get("/:postId", async (req, res) => {
    try{
        const posts = await Post.findById(req.params.postId);

        res.json(posts);
    }
    catch(err) {
        res.json({ message: err });
    }
})

router.patch("/:postId", async (req, res) => {
    try{
        const updatePost = await Post.updateOne(
            { $_id: req.params.postId },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description
                }
            }
            )
            res.json(updatePost);
    }
    catch(err) {
        res.json({ message: err });
    }
})

router.delete("/:postId", async (req, res) => {
    try{
        const updatePost = await Post.remove(
            { _id: req.params.postId }
            )
            res.json(updatePost);
    }
    catch(err) {
        res.json({ message: err });
    }
})

router.post("/", async (req, res) => {
    console.log(req.body)

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try{
        const savePost = await post.save();
        res.json(savePost);

    }catch(err) {
        res.json({ message: err })
    }

    // post.save().then((data) => {
    //     console.log(`test test`);
    //     res.json(data);
    // }).catch((err) => {
    //     console.log(`test test erro`);
    //     res.json({ message: err })
    // });
})

router.get("/specific", (req, res) => {
    res.send("Im inside posts specific")
})

module.exports = router;