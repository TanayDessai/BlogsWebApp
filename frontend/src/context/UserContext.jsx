import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";

export const UserConext = createContext({})

export function UserConextProvider({children}){
    const [user,setUser]= useState(null)

    useEffect(()=>{
        getUser()
    },[])
    
    const getUser = async()=>{
        try{
            const res = await axios.get(URL+"/api/auth/refetch",{withCredentials:true})
            // console.log(res.data)
            setUser(res.data)
        }
        catch(err){
            console.log(err)
        }
    }

    return (<UserConext.Provider value={{user,setUser}}>
    {children}
    </UserConext.Provider>)
}