import styled from 'styled-components';

const PopUpContainer = styled.div`
    position: absolute;
    left: -130px;
    height: auto;
    width: auto;
    z-index: 20;
    background: #131313;
    border-radius: 15px;
    padding: 24px 30px;
`
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`
const FilterLabel = styled.div`
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #A5A5A5;
    padding-bottom: 12px;
    border-bottom: 1px solid #CBCBCB;
`

const FiterSelect = styled.select`
    width: 168.45px;
    height: 37.5px;
    background: #232323;
    border-radius: 4.68775px;
    border-color: #232323;
    color: #fff;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
`
export {PopUpContainer, FormContainer, FilterLabel, FiterSelect}