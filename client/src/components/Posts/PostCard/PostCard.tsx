import React, { FC } from 'react';
import './PostCard.sass';

type PostProps = {
    title: String,
    text: String,
    author: String,
    date: any
}

const PostCard: FC<PostProps> = ({ title, text, author, date }) => {

    return (
        <div className='postCard'>

            <h1><mark>{title}</mark></h1>
            {/*             <img src={imgUrl} alt={title} />
 */}            <p>{text}</p>
            <span>{author}</span><br />
            <span>{date}</span>
        </div>
    )
}

export default PostCard;