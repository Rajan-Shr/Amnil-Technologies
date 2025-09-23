import { useEffect, useState } from 'react'
import Table from './components/Table';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Users List</h2>
        <Table data={users} />
      </div>
    </>
  )
}

export default App
