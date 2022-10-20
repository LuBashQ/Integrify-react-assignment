import './App.css'
import CardButton from './components/UserCard/UserCard.Button'
import { Route, Routes } from 'react-router-dom'
import UserCard from './components/UserCard/UserCard'
import Users from './components/Users'
import UserDetails from './components/UserDetails/UserDetails'

function App() {

  return (
      <Routes>
        <Route path="users">
          <Route path='' element={<Users />}></Route>
          <Route path=':userId' element={<UserDetails />}></Route>
        </Route>
      </Routes>
  )
}

export default App
