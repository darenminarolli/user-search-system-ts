import React from 'react'
import { useState } from 'react'
import './UserFind.css'
import NotFound from './NotFound'



const UserFind:React.FC = () => {
    const users = [
        {
          name: 'Syket',
          age: 20,
          designation: 'Software Engineer',
        },
        {
          name: 'Sakib',
          age: 25,
          designation: 'Programmer',
        },
        {
          name: 'Jamy',
          age: 30,
          designation: 'Designer',
        },
        {
          name: 'Hanif',
          age: 20,
          designation: 'UX Writer',
        },
      ];
    
    const [userList, setUserList]=useState<{name:string; age: number; designation: string;}[] | undefined>(users)
    const [text,setText]=useState('')
  
  const handleClick=()=>{
    const findUsers= userList && userList?.length>0 ?  userList?.filter(u=>u?.name === text  ) : undefined;
    

    setUserList(findUsers)
  }
    return (
    <div>
        <div className="title">
            Find
        </div>
        <div className="input_wrapper">
            <input type="text" placeholder='Search User' 
            onChange={(e)=>{setText(e.target.value); setUserList(users)}} />
            <button disabled={!text} onClick={handleClick}>Search</button>
        </div>
     <div className="body">
{userList && userList?.length===0 && (
    <div ><NotFound/></div>
)}

       {userList && userList?.length>0 && userList?.map(user=>{
        return(
            <div className="body__item">
                <h3>Name: {user?.name}</h3>
                 <p>Age: {user?.age}</p>
                 <p>Designation: {user?.designation}</p>

            </div>
        )
       })}
     </div>
     
    </div>
  )
}

export default UserFind