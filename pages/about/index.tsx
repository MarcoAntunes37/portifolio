import type { NextPage } from 'next'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import Vertical from '../../component/Vertical'

const About: NextPage = () => {
  const fY = new Date().getFullYear()
  const bY = 1993
  const year = (fY-bY)
  return (
    <>
        <Navbar/>
        <div className='container-fluid d-flex justify-content-center mb-2 mt-5'>
          <div className="container-fluid ms-5 me-5">
            My name is Marco, I&apos;m {year} years old and I&apos;m passionate about technology and computers. 
            Since my childhood I was fascinated by how it all worked at a time when the concept of the internet 
            was still very new. During all that time I have seen the change and improvement continue on the internet 
            to what it is today.
          </div>          
        </div>
        <div className='container-fluid d-flex justify-content-center mt-2'>
          <div className="container-fluid ms-5 me-5">
            I have few hobbies, they include mainly reading articles related to technology and other cultures, 
            watching series and listening to music like everyone else, playing video games, meeting new places 
            and new people.
          </div>         
        </div>        
        <Vertical/>
        <Footer/>
    </>
  )
}

export default About
