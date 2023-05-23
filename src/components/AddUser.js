import React from 'react'

const AddUser = ({ onAdd }) => {

    // handle submit function
    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.name.value);
        e.target.name.value = "";


    }

    return (
        <div className='list center'>
            <form onSubmit={handleOnSubmit}>
                <h1>ENTER YOUR TASK BELOW</h1>
                <input placeholder='Add your task here' name='name' required />
                <button onSubmit={handleOnSubmit}><b>Add</b></button>
            </form>
        </div>
    )
}

export default AddUser