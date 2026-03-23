import Counter from './Count';
import './App.css'

function App() {

function handleClick(){
  alert('I am Clicked')  
}



  return (
    <>
    <h3>Vite + React</h3>
    <button onClick = {handleClick}>Click Me</button>
    <Counter></Counter>
    </>
  )
  
}

export default App
