import type { NextPage } from 'next'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import Vertical from '../../component/Vertical'

const Contact: NextPage = () => {
  return (
    <>
      <Navbar/>
      <div className='container-fluid 
          d-flex 
          justify-content-center'
        >
          <div className="container-fluid ms-5 me-5 mt-5">
            If you want to talk with me, you can call me on +55 11 96283-9582 its also my whatsapp number.
            Or you can email me on marcoantunesdev@gmail.com.
          </div>
      </div>
      <Vertical/>
      <Footer/>
    </>
  )
}

export default Contact
