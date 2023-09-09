import React from 'react'
import Nav from '../Components/Nav'

//compoonants
import Tasks from '../Components/Tasks'

function HomeTechnican() {


  return (
    <div>
        <Nav/>
        {/* Supervisor Panel */}
        <div className='flex flex-col items-start gap-10 ml-40'>
        <h1 className='w-7/12 text-2xl mt-14'>Supervisor Panel</h1>
          <div className='flex w-full'>
            <Tasks/>
            
          </div>
        </div>
    </div>
  )
}

export default HomeTechnican