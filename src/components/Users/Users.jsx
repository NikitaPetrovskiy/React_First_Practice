import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers( [
            {id: 1, photoURL: 'https://i.pinimg.com/originals/51/ed/61/51ed61582f576218b346de53c93bb3c4.jpg',
                followed: false, fullName: 'Nikita', status: 'I am future React developer', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, photoURL: 'https://pm1.narvii.com/6748/1b5910ed4b45c98438a1fed6e8625597ff74c155v2_hq.jpg',
                followed: true, fullName: 'Dima', status: 'I am backend developer', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoURL: 'https://event.ru/wp-content/uploads/2018/03/5-velikih-kinotsitat-dlya-motivatsii-event-menedzhera.jpg',
                followed: false, fullName: 'Andrey', status: 'I am student', location: {city: 'Kiev', country: 'Ukraine'}},
            {id: 4, photoURL: 'https://vafloc02.s3.amazonaws.com/isyn/images/f297/img-2009297-f.jpg',
                followed: true, fullName: 'Sasha', status: 'I am sales manager', location: {city: 'Los Angeles', country: 'USA'}},
        ])
    }
    return <div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoURL} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button> :
                                <button onClick={() => { props.follow(u.id)}}>Follow</button>}
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
                </div>)
            }
        </div>
}

export default Users;