import { useState } from 'react';
import './App.css'

function App() {
  const [users, setUsers] = useState([
    {id: 101, name: "Ashot", salary: 155000},
    {id: 102, name: "Lusine", salary: 300000},
    {id: 103, name: "Arman", salary: 250000},
    {id: 104, name: "Gurgen", salary: 400000},
  ])

  const salaryUp = id =>{
     setUsers(
       users.map(user=> user.id === id ? {...user, salary: user.salary + 50000} : user)
     )
  }

  const salaryDown = id =>{
    setUsers(
      users.map(user=> user.id === id ? {...user, salary: user.salary >= 100000 ? user.salary - 50000: 50000} : user)
    )
  }

  const removeUser = id =>{
    setUsers(
      users.map(user=> user.id === id ? {} : user)
    )
  }

  return (
    <>
     <table>
      <thead>
          <tr>
             <td>id</td>
             <td>name</td>
             <td>salary</td>
             <td>action</td>
          </tr>
      </thead>
      <tbody>
          {
            users.map(user=> <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.salary} AMD</td>
              <td id="btns">
                 <button onClick={()=> salaryUp(user.id)}>Salary Up</button>
                 <button onClick={()=> salaryDown(user.id)}>Salary Down</button>
                 <button onClick={()=> removeUser(user.id)}>Remove User</button>
              </td>
            </tr>)
          }
      </tbody>
      </table>
    </>
  )
}

export default App
