import styled from "styled-components";

function User(props){

    const {photo, name, numOfReviews, numOfWatched, numOfFing, numOfFers} = props;

    return (
        <UserWrapper>

            <BasicInfoWrapper>
                <PhotoWrapper>
                    <img src = {photo} width = '100px' height= '100px' alt = 'failed'></img>
                </PhotoWrapper>
                <div>
                    <h4>{name}</h4>
                    <span>{numOfReviews} reviews</span>
                </div>
            </BasicInfoWrapper>

            <AccountInfoWrapper>
                <div>
                    <h4>Watched</h4>
                    <span>{numOfWatched}</span>
                </div>
                <div>
                    <h4>Following</h4>
                    <span>{numOfFing}</span>
                </div>
                <div>
                    <h4>Followers</h4>
                    <span>{numOfFers}</span>
                </div>
            </AccountInfoWrapper>

        </UserWrapper>
    )

}

const BasicInfoWrapper = styled.div`
    border: 1px solid red;
    display: flex;
    align-items: center;
    padding: 20px;
    width: 23%;
`
const UserWrapper = styled.div`
    border: 2px solid black;
    display: flex;
`;
const PhotoWrapper = styled.div`
    border: 1px solid green;
    margin-right: 10px;
`
const AccountInfoWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid blue;
    width: 87%;
`

export {User}