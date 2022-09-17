import axios from "axios"
import {useState, useEffect} from "react"
import {useParams, Link} from "react-router-dom"



const Post = () => {
  const {id} = useParams()
  const [comment, setComment] = useState(null)
  const [blogpost, setBlogpost] = useState(null) 

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments/`)
    .then((res) => setComment(res.data))

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => setBlogpost(res.data))
  }, [])


  return ( 
<>
  <h1>{blogpost?.title}</h1>
  <h2 >{blogpost?.body}</h2>
  <Link to="/">Ey ta mig tillbaka</Link>
   <div className="blogpost-container">
      <ul>
    {comment && comment.map((user) => {
     if(user.postId === +id){
    return (  
    <li>
    <h2> namn: {user.name} </h2>
    <h3>mail: {user.email} </h3>
    <h3>id:{user.id}#</h3>
    <p className="userBody">{user.body}</p>
    </li>
    
    )
    }
  })} 
</ul>
</div> 
</>
    

  )
}

export default Post;