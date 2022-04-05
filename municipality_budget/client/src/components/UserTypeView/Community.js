import React from 'react'
import Navbar from '../UIComponents/navUI';
import CommunityView from './UserView/communityView';


export default function Community() {
  return (
    <>
      <Navbar />
      <div className='d-flex align-items-center justify-content-center mt-3'><h1 className='text-primary text-uppercase fw-bold'>Community</h1></div>
      <CommunityView />
    </>
  )
}
