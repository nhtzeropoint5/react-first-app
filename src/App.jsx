import Counter from './Count';
import './App.css'
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').
then(res => res.json());
 
const fetchFriends = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
 }



function App() {

const friendsPromise = fetchFriends();

  return (
    <>
    <h3>Vite + React</h3>
    <button >Click Me</button>
    <Counter></Counter>
    
    <Suspense fallback={<h3>Loading........</h3>}>
    <Users fetchUsers ={fetchUsers}></Users></Suspense>

    <Suspense fallback={<h3>Bubby j kobe thik hobe</h3>}>
    <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense>
    </>
  )
  
}

export default App


///useEffect jinishta age data load korar jonno use kora hoito