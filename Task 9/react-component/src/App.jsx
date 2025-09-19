import './App.css'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  return (
    <>
      <Input label="Full name" placeholder="Enter your full name" />
      <Input label="Username" placeholder="Enter your username" />
      <Input label="Email" placeholder="Enter your email" />
      <Input placeholder="Enter your phone" />
      <Button variant="primary" text="Submit"/>
      <Button variant="secondary" text="Cancel"/>
    </>
  )
}

export default App
