import React from 'react'
import LandingPageView from './landing.view'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  const getStartedClick = () => {
    navigate("/ships")
  }
  return (
    <LandingPageView getStartedClick={getStartedClick} />
  )
}

export default LandingPage