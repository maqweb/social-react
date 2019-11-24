import React from 'react';
import style from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                followed: true,
                fullName: 'Vitaly',
                status: 'I look React position!',
                location: {city: 'Moscow', country: 'Russian Federation'}
            },
            {
                id: 2,
                photoUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                followed: false,
                fullName: 'Empty',
                status: 'I look React position!',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                followed: false,
                fullName: 'NextEmpty',
                status: 'I look React position!',
                location: {city: 'Minsk', country: 'Belarus'}
            }
        ]);
    }

    return (
        <div>
            {
                props.users.map(u => (
                    <div key={u.id}>
                    <span>
                        <div>
                            <img className={style.userPic} src={u.photoUrl} alt=""/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                    </div>
                ))
            }
        </div>
    )
};

export default Users;