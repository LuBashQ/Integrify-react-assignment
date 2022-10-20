import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../../models/User/User'
import { BaseUrl } from '../../shared/BaseUrl'
import UserNotFoundError from '../Errors/UserNotFoundError'
import LoadingStatus from '../Status/LoadingStatus'

function UserDetails() {

    const {userId} = useParams()
    const [user, setUser] = useState<User>()
    const [error, setError] = useState(false)
    
    async function fetchUser() {
        // slowing the response on purpose to show the loading status component
        setTimeout(async () => {
            await axios
                .get<User>(`${BaseUrl}/${userId}`)
                .then(response => {
                    setUser(response.data)
                })
                .catch(_ => setError(true))
        }, 1000)
    }

    useEffect(() => {
      if (userId !== undefined) {
        fetchUser()
      }
      else {
        setError(true)
      }
    }, [])
    

    if(error) return <UserNotFoundError />
    else if(!user) return <LoadingStatus />
    return (
        <div className='flex items-center justify-center text-slate-700'>
            <ul className='border-2 p-6 border-slate-200 list-disc list-inside marker:text-slate-400 text-left'>
                <li><span className='font-bold'>name</span>: {user?.name}</li>
                <li><span className='font-bold'>username</span>: {user?.username}</li>
                <li><span className='font-bold'>email</span>: {user?.email}</li>
                <li><span className='font-bold'>phone</span>: {user?.phone}</li>
                <li><span className='font-bold'>company</span>: {user?.company.name}</li>
                <li><span className='font-bold'>website</span>: {user?.website}</li>
                <li><span className='font-bold'>addres</span>: 
                    <ul className='pl-5 list-square list-inside marker:text-slate-400'>
                        <li><span className='font-bold'>street</span>: {user?.address.street}</li>
                        <li><span className='font-bold'>suite</span>: {user?.address.suite}</li>
                        <li><span className='font-bold'>city</span>: {user?.address.city}</li>
                        <li><span className='font-bold'>zipcode</span>: {user?.address.zipcode}</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default UserDetails