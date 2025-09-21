import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import Child from './components/Child'


function App() {
  const [childData, setChildData] = useState('');

  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h1>Lifting State Up Demo</h1>
        <Child onSendData={handleChildData} />
        <p><strong>Data from Child:</strong> {childData}</p>
      </div>
      <hr />
      <div>
        <h2>PropTypes </h2>
        <Card title="Elephant" description="A very good elephant" imageUrl="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
      </div>
    </>
  )
}

export default App
