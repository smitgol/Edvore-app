import styled from "styled-components";

const RideContainer = styled.div`
    display:flex;
    padding: 30px 43px;
    align-items: center;
    justify-content: space-between;
    color: white;
`
const RidesRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 44px;
`
const RideText = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #D0CBCB;
    animation-name: Dissolve;
    transition-timing-function: ease-in;
    animation-duration: 300ms;
    cursor: pointer;
`
const FilterRow = styled.div`
    display:flex;
    gap: 8px;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    cursor: pointer;
`
export {RideContainer, RidesRow, RideText, FilterRow}