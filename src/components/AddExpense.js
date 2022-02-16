import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { v4 as uuidv4 } from 'uuid'

const AddExpense = () => {
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const { dispatch } = useContext(AppContext)

    const handleSubmit = e =>{
        e.preventDefault()

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
          <div className="row">
          <div className="col-sm">
                <label htmlFor="name">Name</label>
                <input type="text" required className='form-control' id='name'
                    onChange={(e) => setName(e.target.value)} value={ name}
                />
            </div>
            <div className="col-sm">
                <label htmlFor="cost">Cost</label>
                <input type="text" required className='form-control' id='cost'
                    onChange={(e) => setCost(e.target.value)} value={cost}
                />
            </div>
          </div>
          <div className="row">
              <div className="col-sm">
                  <button type="submit" className="btn btn-primary mt-3">
                      Save
                </button>
                </div>
          </div>
        </form>
    </>
  )
}

export default AddExpense