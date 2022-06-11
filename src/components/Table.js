import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Table = ({ data, oldData, newData }) => {
  const navigate = useNavigate()

  const naviGatePage = () => {
    navigate('/form')
  }

  const deleteData = (id) => {
    const deleteItem = data.filter((elem, i) => {
      return i !== id
    })
    oldData(deleteItem)

  }
  const editData = (id) => {
    navigate('/form')
    const editItem = data.find((elem, i) => {
      return i === id
    })
    newData(editItem)
    const deleteItem = data.filter((elem, i) => {
      return i !== id
    })
    oldData(deleteItem)
  }


  return (
    <>
      <div className="plusButton my-2 ">

        <button className='btn btn-outline-dark  plusButton' onClick={naviGatePage}>➕</button>
      </div>
      <div className="container-fluid mt-5">
        <div className='table-responsive'>
          <table className="table table-hover">
            <thead className="thead-light bg-light">
              <tr>
                <th>Fullname</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Subject</th>
                <th>Degree</th>
                <th>Range</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((elem, index) => {
                  return (
                    <>
                      <tr key={index} id={index}>
                        <td>{elem.fullname}</td>
                        <td>{elem.email}</td>
                        <td>{elem.phone}</td>
                        <td>{elem.gender}</td>
                        <td>{elem.subject}</td>
                        <td>{elem.degree}</td>
                        <td>{elem.range}</td>
                        <td><button className='btn btn-outline-danger tableBtn' onClick={() => deleteData(index)}>delete</button></td>
                        <td><button className='btn btn-outline-secondary tableBtn' onClick={() => editData(index)}>edit</button></td>
                      </tr>
                    </>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Table;

