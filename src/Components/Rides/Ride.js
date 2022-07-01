import {RideContainer, RidesRow, RideText, FilterRow} from './RideStyle'
import Popup from 'reactjs-popup';
import {PopUpContainer} from "../../styles/gobalStyles";
import Form from "../Form";
import { useContext, useEffect, useState } from 'react';
import {RideInfoContainer} from "../RideInfoCard/RideInfoCardStyle"
import RideInfoCard from "../RideInfoCard/RideInfoCard"
import React from 'react';
import {CityContext} from "../../context";

const getRides = (rides, city, state) => {
  if (city === '' && state === '') {
    return rides
  }
  else if (state === '' && city != '') {
    return rides.filter((rides)=> rides.city === city)
  }
  else if (city === '' && state != '') {
    return rides.filter((rides)=> rides.state === state)
  }
  else {
    return rides.filter((ride)=> ride.state === state && ride.city === city)
  }
}

const Ride = ({rides_arr, state_list, city_list}) => {
  const [activeRideTab, setActiveRideTab] = useState(0)
  const [posts, setPosts] = useState([])
  const {city, state} = useContext(CityContext)
  
  useEffect(()=> {
    let filtered_post = getRides(rides_arr, city, state)
    setPosts(filtered_post)
  }, [city, state])
  
  const handleActiveTab = (val) => {
    setActiveRideTab(val)
  }
  const getNearestRides = () => {
    let nearest_ride = posts.filter(ride => ride.distance < 3)
    let sorted_ride = nearest_ride.sort((a,b)=> a.distance - b.distance)
    return sorted_ride
  }
  const getUpcomingRides = () => {
    let upcoming_ride = posts.filter(ride => new Date() < new Date(Date.parse(ride.date)))
    return upcoming_ride
  }
  const getPastRides = () => {
    let past_ride = posts.filter(ride => new Date() > new Date(Date.parse(ride.date)))
    return past_ride
  }

  const renderRideContent = (func) => {
    let rides = func()
    if (rides.length === 0) {
      return <div>No Rides Found</div>
    }
    return rides.map((ride)=> {
      return (<RideInfoCard ride={ride} key={ride.id} />)
    })
  }
  const renderRides = () => {
    if (activeRideTab === 0) {
      return renderRideContent(getNearestRides)
    }
    else if (activeRideTab === 1) {
      return renderRideContent(getUpcomingRides)
    }
    else if(activeRideTab === 2) {
      return renderRideContent(getPastRides)
    }
  }
  const rides_label = [{Name:'Nearest rides', func: ''}, {Name:'Upcoming rides', func: getUpcomingRides}, {Name: 'Past rides', func: getPastRides}]
  return (
    <React.Fragment>
    <RideContainer>
      <RidesRow>
        {rides_label.map((ride, index)=> {
          const count = ride.func != '' ? `(${ride.func().length})` : '';
          return (<RideText key={index} onClick={()=> {handleActiveTab(index)}} className={activeRideTab === index ? 'active_ride' : ''}>{ride.Name}{count}</RideText>)
        })}
      </RidesRow>
      <div>
        <Popup trigger={
          <FilterRow>
          <RideText> 
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-6.10352e-05 12.0001H5.99994V10.0001H-6.10352e-05V12.0001ZM-6.10352e-05 9.15527e-05V2.00009H17.9999V9.15527e-05H-6.10352e-05ZM-6.10352e-05 7.00009H11.9999V5.00009H-6.10352e-05V7.00009Z" fill="white" fillOpacity="0.8"/>
          </svg>
          </RideText>
          <RideText>Filters</RideText>
        </FilterRow>
      }
      position={'bottom left'}
      closeOnDocumentClick>
        <PopUpContainer>
          <Form city_list={city_list} state_list={state_list}/>
          </PopUpContainer>
        </Popup>
      </div>
    </RideContainer>
    <RideInfoContainer>
      {renderRides()}
    </RideInfoContainer>
    </React.Fragment>
  )
}


export default Ride