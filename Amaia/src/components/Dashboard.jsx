import React from 'react'
import ListItems from './ListItems'
import {AiOutlineHome} from 'react-icons/ai'
import {FiFolder} from "react-icons/fi"
import {CiMoneyCheck1} from "react-icons/ci"

function Dashboard() {
  return (
    <div className='dashboard-container'>

       
        <div className='dashboard-content'>
            <div className='dashboard-pannel'>
                <div className='dashboard-icons-container'>
                    <ul className='dashboard-icons'>
                        <li><AiOutlineHome color='white' style={{fontSize: "50px"}}/></li>
                        <li><FiFolder color='white' style={{fontSize: "50px"}}/></li>
                        <li><CiMoneyCheck1 style={{fontSize: "60px"}} color='white'/></li>
                    </ul> 
                </div>
            </div>
            
            <ListItems />
        </div>
        
    </div>
  )
}

export default Dashboard