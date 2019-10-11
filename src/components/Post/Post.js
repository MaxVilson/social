import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.img}>
                <img src='https://habrastorage.org/getpro/moikrug/uploads/user/100/014/278/9/avatar/medium_134166cbbb3aa78cb0865b8c0dff70e2.jpg' alt='logo' />
            </div>
            <div className={style.wrapper}>
                <div className={style.text}>
                    {props.text}
                </div>
                <div className={style.likes}>
                    {props.likes}
                </div>
            </div>
        </div>
    )
}

export default Post;