"use server";

import {db} from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const onAuthenticatedUser  = async ()=>{
    try{
        const user  = await currentUser()
        if(!user){
                 return {status:403}
        }
        

    } catch(e){
        console.error(e)
    }
}