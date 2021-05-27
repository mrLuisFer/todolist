import React from 'react'

export default function ErrorMsg({ msgContent }) {
  return (
    <div>
      <i className='fas fa-exclamation'></i>
      <p>{msgContent}</p>
    </div>
  )
}
