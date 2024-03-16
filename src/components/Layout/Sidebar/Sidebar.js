import React, {useState} from 'react'

import { SidebarData } from '../../../Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons';
import './sidebar.css';
import Logo from '../../../imgs/logo.png';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  // const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate()

   return (
    <div className='Sidebar'>
      {/* Menu */}

      <div className='menu'>
      {SidebarData.map((item,index)=>{
        return(
          <div className={selected===index?'menuItem active':'menuItem'}
             key={index}
             onClick={()=>{
              navigate(`${item.to}`)
              setSelected(index)}
             }
             >
             <item.icon/>
                 <span>
                  {item.heading}
                 </span>                
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Sidebar