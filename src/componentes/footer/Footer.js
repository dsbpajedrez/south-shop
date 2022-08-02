import React from 'react'
import { Container,SocialMediaImg } from './sytles'
import facebook_icon from '../../assets/facebook_icon.svg'
import instagram_icon from '../../assets/instagram_icon.svg'
import github_icon from '../../assets/github_icon.svg'
const Footer = () => {
  return (
    <Container>
      <a href='https://www.facebook.com/david.benjumeaperez'>
      <SocialMediaImg src={facebook_icon} />
      </a>
      <a href='https://www.instagram.com/davidbenjumea94/'>
      <SocialMediaImg src={instagram_icon} />
      </a>
      <a href='https://github.com/dsbpajedrez'>
      <SocialMediaImg src={github_icon} />
      </a>
    </Container>
  )
}

export default Footer
