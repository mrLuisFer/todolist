import React from 'react'

import ReactDOM from 'react-dom'

/**
 *
 * @param {JSX.Element | React.FC} component
 * @param {string} elementId
 * @returns JSX.Element
 */
export default function Modal({ jsxComponent, elementId = '' }) {
  return (
    <div>
      {ReactDOM.createPortal(jsxComponent, document.getElementById(`${elementId}`))}
    </div>
  )
}
