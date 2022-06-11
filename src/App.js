import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';

const getLocalItmes = () => {
  let cData = localStorage.getItem('data');

  if (cData) {
    return JSON.parse(localStorage.getItem('data'));
  } else {
    return [];
  }
}
const App = () => {
  const [newsData, setNewData] = useState();
  const [data, setData] = useState(getLocalItmes());


  const addData = (inputData) => {
    setData([...data, inputData])
    setNewData(null)
  }
  const oldData = (deleteItem) => {
    setData(deleteItem)
  }
  const newData = (editItem) => {
    setNewData(editItem)
  }
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])
  return (
    <>
      <Routes>
        <Route path='/' element={<Table data={data} oldData={oldData} newData={newData} />} />
        <Route path='/*' element={<Navigate to='/' />} />
        <Route path='/form' element={<Form passData={addData} newsData={newsData} />} />
      </Routes>

    </>
  );

}
export default App;

