// const {default:axios} = require("axios");
const baseURL = "http://localhost:3333";

module.exports ={
    login:{
        endpoint: baseURL+"/user/login",
        method: "PUT",
        validation: (data) =>{
                return false
            }
        },

    register:{
        endpoint: baseURL+"/user/register",
        method: "POST",
        validation: (data) =>{
                return false
            }
        }
}



// module.exports = {
//     loginReq: async (values) =>{
//         const reqBody = {};
//         let missingInput = [];
//         console.log(values);
//         for (const key in values){
//             // console.log(key);
//             const val = values[key].trim();

//             if(val !== ""){
//                 reqBody[key] = val
//             }
        
//             else{
//                 missingInput.push({key:key,err:`${key} is required`})
//             }
//         }
//         //front end validation needed:
//         // all fildes are present
//         if(missingInput.length > 0){
//             const misMsg = missingInput.map(input =>{
//                 return alert(`${input} is required`)
//             });
//             return alert(misMsg)
            
//         }
//         // lengths of inputs match schema
        
//         // 

//         const loginURL = `${baseURL}/user/login`;

//         const reqData ={
//             headers:{
//                 Accept : "application/json",
//                  "Content-Type":"application/json",
//                  "Access-Control-Allow-Origin":"*"
//             },
//             method: "PUT",
//             data: JSON.stringify(reqBody)
//         };

//         const xhr = new XMLHttpRequest();

//         xhr.setRequestHeader("Content-Type", "application/json")

//         xhr.open("PUT", loginURL)

//         xhr.onload =()=>{
//             const res = JSON.parse(xhr.responseText)

//             console.log(res);
//         }

//         xhr.send(JSON.stringify(reqBody))

//         //can you extract res data 
        
//     //    return await axios.put(loginURL, reqBody)
//     //     .then( res =>{
//     //         console.log("res:",res);

//     //     })
//     //     .catch( err =>{
//     //         if (err){
//     //             console.log(err);
//     //         }
//     //     })
//     //     // console.log(reqBody)
//     }
//     ,
//     registReq: (form) =>{
//         console.log("test log of form",form);

//         const reqBody = {};
//         let missInput = [];

//         for (const input of form) {
//             const val = input.value;

//             if(val !== ""){
//                 reqBody[input.name] = val
//             }else{
//                 missInput.push(input.name)
//             }
//         }

//         if(missInput.length > 0){
//             const misMsg = missInput.map((input)=>{return alert(`${input} is required`)})

//             return alert(misMsg);
//         }

//         const registURL = `${baseURL}/user/register`;

//         // const reqData = {
//         //     headers:{
//         //         Accept:"application/json",
//         //         "Content-Type":"applicaiton/json",
//         //         "Access-Control-Allow-Origin":"*"
//         //     },
//         //     method:"POST",
//         //     data: JSON.stringify(reqBody)
//         // };

//         axios.post(registURL, reqBody)
//         .then(res =>{
//             console.log(res)
//         })
//         .catch( err=>{
//             if(err){
//                 console.log(err);
//             }
//         })
//         console.log(reqBody);


//     }
// }