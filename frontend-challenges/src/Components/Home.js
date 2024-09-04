import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Link to={'/star-rating'}>Star Rating Challenge</Link><br />
    <Link to={'/toast-notify'}>Toast Notification Challenge</Link><br />
    <Link to={'/accordian'}>Accordian Challenge</Link><br />
    <Link to={'/form'}>User Registration Form Challenge</Link><br />
    <Link to={'/todo'}>Todo Challenge</Link><br />
    <Link to={'/search'}>Autosearch Challenge</Link><br />
    <Link to={'/pagination'}>Pagination Challenge</Link><br />

    
    </>
  )
}

export default Home