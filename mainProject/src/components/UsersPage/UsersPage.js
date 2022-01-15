import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const Users = () => {

        const [users, setUsers] = useState(null)
        const [loading, setLoading] = useState(true)

        const getUsers = async () => {
            fetch('https://reqres.in/api/users?per_page=12')
                .then(respons => respons.json())
                .then(
                    result => setUsers(result.data),
                    e => console.error(e)
                )
        }

        useEffect(async () => {
            await getUsers()
        }, [])

        useEffect(() => {
            console.log(users)
            if (!users)
                setLoading(false)
            else
                setLoading(true)
        }, [users])

        return (
            <div>
                {loading ? 'Идет зегрузка...' :
                    users.map(user => {
                        return (
                            <div>
                                <NavLink to={`/user/:${user.id}`}>{user.first_name}{user.last_name}</NavLink>
                            </div>
                        )
                    })
                }
                <h2>Страница всех пользователей</h2>
            </div>
        )
    }


export default Users;