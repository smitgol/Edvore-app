import styled from 'styled-components';
import { RideText } from '../Rides/RideStyle';
const RideInfoContainer = styled.div`
    display:flex;
    padding: 0px 43px;
    flex-direction: column;
    gap: 13px;
    height: 73vh;
    overflow-y: auto;
`

const RideInfo = styled.div`
    background: #171717;
    border-radius: 10px;
    display: flex;
    padding: 0px 30px;
    padding-bottom: 28px;
    padding-top: 22px;
    gap: 44px;
`
const RideContent = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 100%;
`
const RideTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const RideLabelRow = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 34px;
`
const RideLabel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 4px 10px;
    gap: 10px;
    background: rgba(0, 0, 0, 0.56);
    border-radius: 16px;
`
const RideLabelText = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
`
const RideTextRow = styled.div`
    display:flex;
    gap: 4px;
`
const RideParameterText = styled(RideText)`
    color: #CFCFCF;
`
const RideValue = styled(RideText)`
    color: #fff;
    display: flex;
`

export {RideInfoContainer, RideInfo, RideContent, RideTextContainer, RideLabel, RideLabelRow, RideLabelText, RideValue, RideTextRow, RideParameterText}