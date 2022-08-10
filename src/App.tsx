import React from "react"
import { Routes, Route } from "react-router-dom"
import { DirectoryManager } from "./components/DirectoryManager"

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<DirectoryManager />} />
    </Routes>
  )
}

export default App
