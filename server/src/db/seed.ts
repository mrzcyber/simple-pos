import {auth} from "../lib/auth.js";

async function seed(){
    const result = await auth.api.signUpEmail({
        body:{
            name: "reza", 
            email: "reza@gmail.com",
            password: "password"
        }
    });
    console.log(result);
}

seed();



