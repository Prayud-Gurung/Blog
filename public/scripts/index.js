// scripts/index.js
$(".delete-btn").click(function(){
    const index = $(this).attr("post-index")

    fetch(`/delete-post/${index}`, {
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded"}
    })
    .then(function(res){
        window.location = res.url

        // window.location.reload()
    })
})

$("#add-memory-btn").click(function(){
    fetch("/addpost", {
        method: "get",
        headers: { "Content-Type": "application/x-www-form-urlencoded"}
    })
    .then(function(res){
        window.location = res.url
    })
})

// $(".edit-btn").click(function(){
//     console.log("clicked");
//     const index = $(this).attr("post-index")

//     // fetch(`/edit-post/${index}`, {
//     //     method: "get",
//     //     headers: { "Content-Type": "application/x-www-form-urlencoded"}
//     // })
//     // .then(function(){

//     // })

//     window.location.href = `/edit-post/${index}`
// })

// $(".edit-btn").click(function(){
//     console.log("clicked");
//     const index = $(this).attr("post-index")

//     fetch(`/edit-post?index=${index}`, {
//         method: "get",
//         headers: { "Content-Type": "application/x-www-form-urlencoded"}
//     })

//     // window.location.href = `/edit-post?index=${index}`;
// })

$(".edit-btn").click(function(){
    console.log("clicked");
    const index = $(this).attr("post-index")

    window.location.href = `/edit-post/${index}`;
})




// //Vanilla js
// const allEditBtn = document.querySelectorAll(".edit-btn")
// const allDeleteBtn = document.querySelectorAll(".delete-btn")

// allDeleteBtn.forEach(element => {
//     element.addEventListener("click", handleClick)
// });

// function handleClick(event){
//     const index = event.currentTarget.getAttribute("post-index")
//     console.log(index);
// }