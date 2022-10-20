import React from 'react'
import { User } from '../../models/User/User'
import CardButton from './UserCard.Button'

interface UserCardProps {
  user: User 
}

function UserCard({user}: UserCardProps) {

  return (
    <div className='shadow-md rounded'>

      {/* Icon with first name capital letter */}
      <section className='flex items-center justify-center'>
        <div className='bg-slate-200 text-slate-500 rounded-full flex items-center justify-center w-24 h-24 font-bold text-4xl'>
          {user.name[0].toUpperCase()}
        </div>
      </section>

      {/* Name */}
      <section className='mt-3'>
        <p className='text-center text-slate-600 font-bold text-lg whitespace-wrap'>
          {user.name}
        </p>
      </section>
      
      {/* Username */}
      <section className='mt-1'>
        <p className='text-center text-slate-400'>
          @{user.username}
        </p>
      </section>

      {/* Website link */}
      <section className='mt-2'>
        <a href="#" className='underline text-indigo-500 hover:text-indigo-800 visited:text-purple-600'>
          {user.website}
        </a>
      </section>

      {/* More informations */}
      <section className='pb-6 mt-6'>
        <CardButton userId={user.id} />
      </section>
    </div>
  )
}

export default UserCard