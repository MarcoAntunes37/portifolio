import type { NextPage } from 'next'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import Vertical from '../../component/Vertical'

const Experience: NextPage = () => {
  return (
    <>
      <Navbar/>
      <div className='container-fluid 
        d-flex 
        justify-content-center 
        mt-5'
      >
        <div className="experience-content">
          <div className="card" style={{borderColor: '#6DAFAC'}}>
            <div className="card-body">
              <h5 className="card-title">Astrein Engenharia</h5>
              <p className="card-text">
                  My experience at the company was in the development and product department, where I worked in 
                maintenance and implementing features in the SSA-CAD tool, this included services such as windows 
                service/webservice, back-end, database and front-end.
              </p>
              <p className="card-text">
                From: 03/2021
                To: 03/2022
              </p>
              <a 
                href="https://www.astrein.com.br" 
                className="btn btn-primary"
              >
                Go to site
              </a>
            </div>
          </div>
        </div>
      </div>
      <Vertical/>
      <Footer/>
    </>
  )
}

export default Experience
