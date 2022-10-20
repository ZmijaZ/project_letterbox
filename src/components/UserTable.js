import styled from 'styled-components'
import { User } from "./User";


function UserTable(props){

    const {users} = props;

    const items = users.map(function(newItem){
        return (
            <User key = {newItem.id} photo = {newItem.photo} name = {newItem.name} numOfReviews = {newItem.numOfReviews} numOfWatched = {newItem.numOfWatched} numOfFing = {newItem.numOfFing} numOfFers = {newItem.numOfFers} ></User>
        )
    })

    return (
        <UserTableWrapper>
            <TableHeader>
                <h4>Name</h4>
                <h4>Watched</h4>
                <h4>Following</h4>
                <h4>Followers</h4>
            </TableHeader>
            {items}
        </UserTableWrapper>
    )

}

const UserTableWrapper = styled.div`
    width: 85%;
    margin: auto;
`
const TableHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: red;
`

export {UserTable}