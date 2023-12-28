import React from 'react'
import './App.css'
import Filters from './components/Filters'
import DataTable from './components/DataTable'
const App = () => {
  return (
    <div>
      <Filters/>
      <DataTable/>
    </div>
  )
}

export default App