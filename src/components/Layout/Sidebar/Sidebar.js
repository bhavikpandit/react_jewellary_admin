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
  const [isLoggedIn, setIsLoggedIn] = useState("")

  const getParseItems = (key) => {
      const parsed_value = localStorage.getItem(key);
      if (
          parsed_value !== null &&
          parsed_value !== "" &&
          parsed_value !== undefined
      ) {
          return parsed_value;
      } else {
          return null;
      }
  };

  const Logout = () => {
      localStorage.removeItem('user-token')
      const updatedIsLoggedIn = getParseItems('user-token');
      setIsLoggedIn(updatedIsLoggedIn);
      navigate("/login")
  }
  console.log(isLoggedIn)
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
      <div className='menuItem'>
        <UilSignOutAlt onClick={Logout}/>
      </div>
      </div>
    </div>
  )
}

export default Sidebar