import React from 'react'
import LandingPageView from './landing.view'
import { Navigate, useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  const getStartedClick = () => {
    navigate("/rockets")
  }
  return (
    <LandingPageView getStartedClick={getStartedClick} />
  )
}

export default LandingPage