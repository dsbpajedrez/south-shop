import React from 'react'
import { Container,SocialMediaImg } from './sytles'
import linkedin_icon from '../../assets/linkedin_icon.svg'
import twitter_icon from '../../assets/twitter_icon.svg'
import github_icon from '../../assets/github_icon.svg'
const Footer = () => {
  return (
    <Container>
      <a href='https://www.linkedin.com/in/david-santiago-benjumea-p%C3%A9rez/'>
      <SocialMediaImg src={linkedin_icon} />
      </a>
      <a href='https://twitter.com/DavidSBenjumea'>
      <SocialMediaImg src={twitter_icon} />
      </a>
      <a href='https://github.com/dsbpajedrez'>
      <SocialMediaImg src={github_icon} />
      </a>
    </Container>
  )
}

export default Footer
