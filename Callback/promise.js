posts = [
    {
        title: 'Post one',
        desc :'this is the first post'
    },
    {
        title: 'Post two',
        desc :'this is the second post'
    }
]; 

function getPost(){
    let output = '';
    setTimeout(()=>{
        posts.forEach(element => {
           output += `<li>${element.title}<li>`,
           document.body.innerHTML = output ; 
        });
    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push(post)
            let error = true ;
            if (error){
                reject('Something happen in the bad way ');
            }else{
                resolve();
            }},2000);
    } );
}
createPost({title:"Post three", desc:"This is the third post"})
.then(getPost)
.catch(err => console.error(err)); 