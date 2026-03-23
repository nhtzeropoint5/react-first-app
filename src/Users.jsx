import { use } from "react"
export default function Users({fetchUsers}){
    const UserContent = use(fetchUsers);
    return(
        <div className="borderCard">
            <h3>Users</h3>
        </div>
    )
}