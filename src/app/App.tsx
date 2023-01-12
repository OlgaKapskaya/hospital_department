import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { EmployeesList } from '../features/EmployeesList/EmployeesList'
import { PATH } from '../common/constants/path'
import { WorklogsList } from '../features/WorklogsList/WorklogsList'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<EmployeesList />} />
        <Route path={PATH.employees} element={<EmployeesList />} />
        <Route path={PATH.worklogs} element={<WorklogsList />} />
      </Routes>
    </div>
  )
}

export default App
