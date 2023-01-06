import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { EmployeesList } from '../features/EmployeesList/EmployeesList'
import { PATH } from '../common/constants/path'
import { WorklogsList } from '../features/WorklogsList/WorklogsList'

function App() {
  return (
    <div>
      <Routes>
        <Route path={PATH.employees} element={<EmployeesList />} />
        <Route path={PATH.worklogs} element={<WorklogsList />} />
        <Route path="/" element={<Navigate to={PATH.employees} />} />
      </Routes>
    </div>
  )
}

export default App
