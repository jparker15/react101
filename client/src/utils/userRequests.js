const {default:axios} = require("axios");
const baseURL = "http://localhost:3333";


module.exports = {
    loginReq: (form) =>{
        const reqBody = {};
        let missingInput = [];

        for (const input of form){
            const val = input.value;

            if(val !== ""){
                reqBody[input.name] = val
            }
        
            else{
                missingInput.push(input.name)
            }
        }
        //front end validation needed:
        // all fildes are present
        if(missingInput.length > 0){
            const misMsg = missingInput.map(input =>{
                return alert(`${input} is required`)
            });
            return alert(misMsg)
            
        }
        // lengths of inputs match schema
        
        // 

        const loginURL = `${baseURL}/user/login`;

        // const reqData ={
        //     headers:{
        //         Accept : "application/json",
        //          "Content-Type":"application/json",
        //          "Access-Control-Allow-Origin":"*"
        //     },
        //     method: "PUT",
        //     data: JSON.stringify(reqBody)
        // };

        axios.put(loginURL, reqBody)
        .then( res =>{
            console.log("res:",res);

        })
        .catch( err =>{
            if (err){
                console.log(err);
            }
        })
        console.log(reqBody)
    }
    ,
    registReq: (form) =>{
        console.log("test log of form",form);

        const reqBody = {};
        let missInput = [];

        for (const input of form) {
            const val = input.value;

            if(val !== ""){
                reqBody[input.name] = val
            }else{
                missInput.push(input.name)
            }
        }

        if(missInput.length > 0){
            const misMsg = missInput.map((input)=>{return alert(`${input} is required`)})

            return alert(misMsg);
        }

        const registURL = `${baseURL}/user/register`;

        // const reqData = {
        //     headers:{
        //         Accept:"application/json",
        //         "Content-Type":"applicaiton/json",
        //         "Access-Control-Allow-Origin":"*"
        //     },
        //     method:"POST",
        //     data: JSON.stringify(reqBody)
        // };

        axios.post(registURL, reqBody)
        .then(res =>{
            console.log(res)
        })
        .catch( err=>{
            if(err){
                console.log(err);
            }
        })
        console.log(reqBody);


    }
}