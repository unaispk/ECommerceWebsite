import React, { useEffect, useState } from 'react'
import axios from 'axios';

const User = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/users').then((res) => {
            console.log(res.data)
            setUsers(res.data)
        })
    }, [])

    return (
        <>
            <div className="flex flex-wrap mt-24">
                {users &&
                    users.map((user, key) => (
                        <div key={key} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">

                            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 w-84">
                                <div className="flex items-center">
                                    <img src={user.avatar} alt='image' className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <h2 className="text-lg font-semibold">{user.name}</h2>
                                        <p className="text-sm text-gray-600">{user.email}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
            </div>
        </>
    )
}

export default User
