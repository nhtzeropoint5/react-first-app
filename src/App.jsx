import Counter from './Count';
import './App.css'
import Users from './Users';

function App() {

function handleClick(){
  alert('I am Clicked')  
}



  return (
    <>
    <h3>Vite + React</h3>
    <button onClick = {handleClick}>Click Me</button>
    <Counter></Counter>
    <Users></Users>
    </>
  )
  
}

export default App
