import React from 'react'
import {HeaderStyles, EdvoreText, UserProfile, UserName, UserImage} from './HeaderStyles'
import Image from 'next/image'
import userImg from "../../user_img.jpg";

const Header = ({user_info}) => {
  return (
    <HeaderStyles>
        <EdvoreText>Edvore</EdvoreText>
        <UserProfile>
        <UserName>{user_info.name}</UserName>
        <UserImage>
          <Image src={user_info.url} style={{ borderRadius: '22px' }}  width="100%" height="100%" layout="responsive" objectFit="contain" />
        </UserImage>
        </UserProfile>
    </HeaderStyles>
  )
}

export default Header