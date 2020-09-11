let posts = [
	{
		title : 'post one',
		description : 'my first post'
	},
	{
		title : "post two",
		description : "my second post"
	}
];
function getPost(){
	let output = "" ;
	setTimeout(()=>{
	posts.forEach((post,index) => {
		output += `<li>${index} ${post.title}</li>`
		document.body.innerHTML = output ; 
	});
	},1000);
	
}
// getPost(); 

function createPost(post, callback){
	setTimeout(()=>{
		posts.push(post);
		callback(); 
	}, 2000);
	
}
post = {
	title:"post three",
	description :"my third post"
}
createPost(post, getPost);