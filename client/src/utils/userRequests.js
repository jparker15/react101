const {default:axios} = require("axios");
const baseURL = "http://localhost:3000";

module.exports = {
    loginReq: (form) =>{
        const reqBody = {};

        for (const input of form){
            const val = input.value;

            if(val !== ""){
                reqBody[input.name] = val
            }
        }

        const loginURL = `${baseURL}/user/login`;

        const reqData ={
            headers:{
                Accept : "application/json",
                 "Content-Type":"application/json",
                 "Access-Control-Allow-Origin":"*"
            },
            method: "PUT",
            data: JSON.stringify(reqBody)
        }

        axios.put(loginURL, reqData)
        .then( res =>{
            console.log(res);
        })
        .catch( err =>{
            if (err){
                console.log(err);
            }
        })
    }
    ,
    registReq: (form) =>{
        console.log("test log of form",form);
    }
}