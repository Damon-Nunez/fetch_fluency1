function getPost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(obj => {
        const arrMap = console.log(`Title:${obj.title} Post: ${obj.body}`)
    })
}
function logUsers() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(array => {
            const arrMap = array.map(obj => {
                console.log(obj.name)
            })
        })
    }
function getBizUsers() {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
        .then(response => response.json())
        .then(array => {
            const arrMap = array.map(obj => {
                if(obj.email.includes(".biz") === true){
                    console.log([obj])
                }
            })
        })
    }
        function longestPost() {
            let longestPostId;
            let longPost = 0;
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(array => {
              const arrMap = array.map(obj=> {
                if(obj.body.length > longPost){
                        longPost = obj.body.length
                        console.log(longPost)
                        longestPostId = obj.id
                    }
               
              }) 
               console.log(array[longestPostId - 1].body )
            })
        }
    function getCompletedTasks() {
        let finalArray = []
            fetch(`https://jsonplaceholder.typicode.com/todos/`)
            .then(response => response.json())
            .then(array => {
                const arrMap = array.map(obj => {
                    if(obj.completed === true){
                        finalArray.push(obj.title)
                    }
                })
                console.log(finalArray)
            })
        }
    // function displayPhotos() {
    //     fetch(`https://jsonplaceholder.typicode.com/photos`)
    //         .then(response => response.json())
    //         .then(array => {
    //             document.getElementById("photo").innerHTML = `"https://via.placeholder.com/600/92c952"`;
    //         })
    // }
        function numOfLongPosts() {
            let count = 0
            fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(array => {
                const arrMap= array.map(obj => {
                    let splitString = obj.body.split("")
                    if(splitString.length > 20){
                        count++
                    }
                })
                console.log(count)
            })
        }
        function getUserFromPost(title) {
            fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(array => {
                const arrMap = array.map(obj => {
                    if(title === obj.title){
                        console.log(obj)
                    }
                })
            })
        }