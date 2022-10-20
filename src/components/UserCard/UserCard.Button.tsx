import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

interface CardButtonProps {
  userId: number
}

function CardButton({userId}: CardButtonProps) {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/users/${userId}`)
  }

  return (
    <>
    <button 
      className='bg-indigo-500 text-white px-3 py-2 rounded-lg shadow-md shadow-indigo-500/50'
      onClick={handleClick}
    >
      MORE DETAILS
    </button>
    </>
  )
}

export default CardButton