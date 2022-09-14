import type { NextPage } from 'next'
import Social from '../Social'
import Email from '../Email'

const Vertical: NextPage = () => {
  return (
    <div className='container-fluid d-flex justify-content-between mb-3'>
        <Social/>
        <Email/>       
    </div>
  )
}

export default Vertical
