import axios from 'axios';
import React from 'react'
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"




const Landingpage = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setPosts(res.data))

  })

  return (
    <>
    {posts?.map((post) => 
      <div className='posts'>
          <Link to={`/post/${post.id}`} state={post}>
            <h3>{post.title}</h3>
          </Link>
      </div>
      )}
    </>
  )
  }

export default Landingpage;
