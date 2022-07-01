import styled from "styled-components";


const HeaderStyles = styled.div`
    position: sticky;
    top: 0px;
    padding: 21px 43px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #101010;
    width: 100%;
    color: white;
`
const EdvoreText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const UserProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
`
const UserName= styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
`
const UserImage = styled.div`
    transform: rotate(-0.36deg);
    width: 44px;
    height: 44px; 
`
export {HeaderStyles, EdvoreText, UserProfile, UserName, UserImage};