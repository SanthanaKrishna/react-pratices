import React, { useState, useEffect } from 'react'
import axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState([])
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    //get single value
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    //click on button API call for single value
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    //get all data
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            {/* list single data from input */}
            <div>{post.title}</div>
            {/* list out all data */}
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DataFetching
