import { use } from "react";
import Friend from './Friend';

export default function Friends({friendsPromise}){
    const friendContent = use(friendsPromise);
    console.log(friendContent);
    return(
        <div className="borderCard">
            <h3>Friends : {friendContent.length}</h3>
            {
                friendContent.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}