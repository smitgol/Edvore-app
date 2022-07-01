import React from 'react'
import {RideInfoContainer, RideInfo, RideContent, RideTextContainer, RideLabelRow, RideLabel, RideLabelText, RideValue, RideTextRow, RideParameterText} from "./RideInfoCardStyle"
import Image from 'next/image'
import MapImg from "../../map_img.jpg"

const RideInfoCard = ({ride}) => {
  return (
        <RideInfo>
            <Image src={MapImg} height="148" width="296" style={{ borderRadius: '5px'}}/>
            <RideContent>
                <RideTextContainer>
                    <RideTextRow>
                        <RideParameterText>Ride Id : </RideParameterText>
                        <RideValue>{ride.id}</RideValue>
                    </RideTextRow>
                    <RideTextRow>
                        <RideParameterText>Origin Station : </RideParameterText>
                        <RideValue>{ride.origin_station_code}</RideValue>
                    </RideTextRow>
                    <RideTextRow>
                        <RideParameterText>Station_path : </RideParameterText>
                        <RideValue>[{ride.station_path.map((station)=> {return <div>{station},</div>})}]</RideValue>
                    </RideTextRow>
                    <RideTextRow>
                        <RideParameterText>Date : </RideParameterText>
                        <RideValue>{ride.date}</RideValue>
                    </RideTextRow>
                    <RideTextRow>
                        <RideParameterText>Distance : </RideParameterText>
                        <RideValue>{ride.distance}</RideValue>
                    </RideTextRow>
                </RideTextContainer>
                <RideLabelRow>
                    <RideLabel>
                        <RideLabelText>{ride.city}</RideLabelText>
                    </RideLabel>
                    <RideLabel>
                        <RideLabelText>{ride.state}</RideLabelText>
                    </RideLabel>
                </RideLabelRow>
            </RideContent>
        </RideInfo>
  )
}

export default RideInfoCard