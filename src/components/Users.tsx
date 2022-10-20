import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { User } from '../models/User/User'
import { BaseUrl } from '../shared/BaseUrl'
import FetchExceptionError from './Errors/FetchExceptionError'
import LoadingStatus from './Status/LoadingStatus'
import UserCard from './UserCard/UserCard'

function Users() {

    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState(false)

    async function fetchData() {
        // Slowing the request on purpose to showcase the loaading status component
        setTimeout(async () => {
            await axios.get<User[]>(BaseUrl)
                .then(response => {
                    setUsers(response.data)
                })
                .catch(_ => setError(true))
        }, 1000)
    }

    // Load data when component is mounted
    useEffect(() => {
        fetchData()
    }, [])

    if(error) return <FetchExceptionError />
    else if(!users || users.length == 0) return <LoadingStatus />
    return (
        <div className='grid sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10'>
            {users.map(user => 
                <UserCard key={user.id} user={user} />)}
        </div>
    )
}

export default Users