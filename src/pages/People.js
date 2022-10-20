import { UserTable } from "../components/UserTable"
import {userData} from '../data/userData'

function People(){

    return (
        <div>
            <h1>My peeps</h1>
            <UserTable users = {userData}></UserTable>
        </div>
    )
}

export {People}