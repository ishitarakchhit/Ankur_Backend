import React from 'react'
import './AU_section2.css'
import img1 from '../../../Images/au/aboutUs-img2.png'

const AU_Section2 = () => {
  return (
    <>
    {/* <br></br> */}
    <br></br>
    <h2 style={{ fontWeight: "bold", textAlign: "center" }}>About Ankur: Empowering Inclusive Education &nbsp; </h2>
    <div className="AU_section2_mainContainer">
    <div className="AU_section2_gridContainer">
      <div className="AU_section2_gridContainerDiv">
        <img className='AU_section2_gridContainerDiv-img' src={img1} alt="" />
      </div>
      <div className="AU_section2_gridContainerDiv">
        <div className="AU_section2_gridContainerDiv_text">

        <p className='AU_section2_gridContainerDiv_text_Para'> 
        <br></br>
        
        At Ankur, we are passionate about fostering inclusive education and empowering individuals with mental disabilities to thrive in mainstream schooling environments.
        <br></br>
        <br></br>
        Founded by a team of engineers with a vision to change the landscape of education for people with special needs, Ankur is driven by a shared vision of creating a world where every student has equal access to quality education and opportunities for success.
        <br></br>
        <br></br>
        We are committed to innovation and continuous improvement. From our therapy-based learning resources to our monitoring and feedback tools, we leverage the latest technologies and best practices to create impactful solutions for inclusive education.
        </p>
        </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default AU_Section2