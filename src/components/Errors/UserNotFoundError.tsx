import React from 'react'

function UserNotFoundError() {
  return (
    <div className='bg-red-200 border-l-4 border-red-600 text-red-700 p-4 text-left' role="alert">
      <p className='font-bold'>Error</p>
      <p>User could not be loaded. Please <span className="font-bold">try again</span> by reloading the page</p>
    </div>
  )
}

export default UserNotFoundError