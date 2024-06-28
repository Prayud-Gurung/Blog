// index.js
import bodyParser from "body-parser"
import express from "express"
import lodash from "lodash"

const app = express()
const port = 3000
const _ = lodash()

var posts = []

app.listen(port, function (){
    console.log(`listening to port ${port}`);
})

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.render("index.ejs", {posts: posts})
})

app.get("/addpost", function(req, res){
    res.render("addpost.ejs")
})

app.post("/create-post", function(req, res){
    let post = {
        title: req.body.title,
        description: req.body.description
    }
    posts.push(post)
    console.log(posts);
    res.redirect("/")
})

//Delete
app.post("/delete-post/:index", function(req, res){
    const index = req.params.index
    posts.splice(index, 1)

    //using fetch window.location = res.url
    res.redirect("/")
})

// Edit Route params
app.get("/edit-post/:index", function(req, res){
    const index = req.params.index

    res.render("editpost.ejs", { 
        index: index,
        title: posts[index].title,
        description: posts[index].description
    })
})


// //Edit Query params
// app.get("/edit-post", function(req, res){
//     const index = req.query.index

//     res.render("editpost.ejs", { 
//         index: index,
//         title: posts[index].title,
//         description: posts[index].description
//     })
// })


app.post("/update-post/:index", function(req, res){
    const index = req.params.index

    let post = {
        title: req.body.title,
        description: req.body.description
    }

    posts[index] = post
    res.redirect("/")
})
