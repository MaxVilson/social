import React from 'react';
import styles from './Users.module.css';
import avatar from '../../assets/images/avatar.png';

const Users = (props) => {

    // Выводим номера страниц (пагинация)
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.pagination}>
                {
                    pages.map((page, i) => {
                        return (
                            <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page
                                ? styles.pagination__itemActive + ' ' + styles.pagination__item
                                : styles.pagination__item}
                                key={i}>{page}
                            </span>
                        )
                    })
                }
            </div>

            {
                props.users.map((user) => {
                    return (
                        <div className={styles.users} key={user.id}>
                            <div className={styles.column}>
                                <div className={styles.avatar}>
                                    <img src={
                                        user.photos.small !== null
                                            ? user.photos.small
                                            : avatar
                                    } alt='avatar' />
                                    {user.follow
                                        ? <button onClick={() => props.unfollow(user.id)} className={styles.btn}>Unfollow</button>
                                        : <button onClick={() => props.follow(user.id)} className={styles.btn}>Follow</button>
                                    }
                                </div>
                            </div>
                            <div className={styles.column + ' ' + styles.columnText}>
                                <div className={styles.block}>
                                    <div className={styles.name}> {user.name} </div>
                                    <div className={styles.status}> {user.status} </div>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.country}> {user.country} </div>
                                    <div className={styles.city}> {user.city} </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;