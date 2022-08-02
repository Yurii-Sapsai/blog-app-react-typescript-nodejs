import React, { FC, useEffect } from 'react';
import './Posts.sass';
import PostCard from './PostCard/PostCard';

import { useAppSelector } from '../../store/hooks';
import { IPost } from '../../interfaces/IPost';



const Posts:FC = () => {

    const store = useAppSelector((state) => state.posts)

    console.log(store.posts)
    return (
        <div className='posts' >
            {store.posts.map((post, index) => (
                <PostCard 
                    title={post.title} 
                    text={post.text}
                    author={post.user.fullName} 
                    date={post.createdAt} 
                    key={index} />
            ))}
        </div>
    )
}

export default Posts;