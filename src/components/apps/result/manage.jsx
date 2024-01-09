import React from 'react'
import '../../../styles/manage.scss'

const Manage = () => {
  return (
    <div className='manage_container'>
        <div className="manage_btnContainer">
            <button className="manage_btnEdit">Edit</button>
            <button className="manage_btnDelete">Delete</button>
        </div>
    </div>
  )
}

export default Manage