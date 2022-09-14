import type { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import gitImage from '../../public/assets/github.svg'
import todoThumb from '../../public/assets/todothumb.svg'
import pokedexThumb from '../../public/assets/pokedexthumb.svg'
import Vertical from '../../component/Vertical'

const Work: NextPage = () => {
  return (
    <>
      <Navbar/>
      <div className='container-fluid d-flex justify-content-center mt-5'>
          <div className="card me-1" style={{border: '1px solid #6DAFAC'}}>            
            <div className="card-body">
              <div className="card-title">
                <h5 className='me-2'>Todo List App</h5>
              </div>
              <p className="card-text">
                <Image src={todoThumb} height={400} width={400} alt={'Todolist-thumb'}/>
              </p>
              <p className="card-text">
                This is a to-do list created with react using an api to use, change and delete data
              </p>
              <p className='card-text'>You can see this project on my github 
                <a className='ms-2' href='https://github.com/MarcoAntunes37/todo-list'>
                <Image src={gitImage} width={20} height={20} alt={'Todo-list-github'}/>
              </a> </p>
              <a 
                href="https://todo-list-hzfwj7cm2-marcoantunes37.vercel.app" 
                className="btn btn-primary"
              >
                Go to site
              </a>
            </div>
          </div>       
          <div className="card ms-1" style={{border: '1px solid #6DAFAC'}}>            
            <div className="card-body">
              <div className="card-title">
                <h5 className='me-2'>Pokedex App</h5>
              </div>
              <p className="card-text">
                <Image src={pokedexThumb} width={400} height={400} alt={'Todolist-thumb'}/>               
              </p>
              <p className="card-text">
                This is a pokedex based on PokeApiV2 data
              </p>
              <p className='card-text'>You can see this project on my github 
              <a className='ms-2' href='https://github.com/MarcoAntunes37/pokedex'>
                <Image src={gitImage} width={20} height={20} alt={'Todo-list-github'}/>
              </a></p>
              <a 
                href="https://pokedex-ecru-alpha.vercel.app" 
                className="btn btn-primary"
              >
                Go to site
              </a>
            </div>
          </div>
      </div>
      <Vertical/>
      <Footer/>
    </>
  )
}

export default Work
