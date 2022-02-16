import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({ name, cost, id}) => {
  const { dispatch } = useContext(AppContext)

  const handleDelete = () =>{
    dispatch({
      type:"DELETE_EXPENSE",
      payload: id
    })
  }
  return (
    <>
        <div className="list-group-item d-flex justify-content-between align-center">
            { name}
            <div>
                <span className="badge badge-primary badge-pill mr-3">
                    $ { cost }
                </span>
                </div>
                <TiDelete size='1.5em' onClick={handleDelete}></TiDelete>
        </div>
    </>
  )
}

export default ExpenseItem