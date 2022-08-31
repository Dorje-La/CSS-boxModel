"user strict";

//const url = "https://api.github.com/users/Dorje-La";

// const response = fetch(url);

// response.then(
//     function(){
//     console.log("running");
// });

// response.catch(function(){
//     console.log("Error");
// });

// const response = fetch(url)
//     .then(()=>{
//         console.log("running");
//     })
//     .catch(()=>{
//         console.log("Error");
//     })
//     ;

    // const response = fetch(url)
    // .then(()=>console.log("running"))
    // .catch(()=>console.log("Error"))
    
    // const obj = {
    //     login : "11",
    //     "login-id" :"1234",
    // };

    // console.log(obj);

    // const response = fetch(url)
    // .then((response)=> response.json())
    // .then((data)=>console.log(data))
    // .catch(()=> console.log("Error"));

    // //console.log("Start Response");
    // const response = fetch(url)  // asynchronous code
    // .then((response)=>
    //     //console.log("First then");
    //     response.json()
    // )
    // .then((data)=>
    //     //console.log("Second then");
    //     console.log(data)   //asychronous code
    // )
    // .catch((e)=> console.log(e));
    //console.log("Response Ended");

    //console.log("Start Fetchhicg");

    // (async() => {
    //     const res =  await fetch(url);
    //     // console.log("fetch running");
    //      const data = await res.json();
    //      console.log(data);
    //  })();


    //console.log("Fetching Ended");

    const url = "https://api.github.com/users/";
    const usernameInput = "Dorje-La"

    const fetchProfile = async() => {
        try{
         const res =  await fetch(`${url}${usernameInput}`);
         const data = await res.json();

         if(data){
            console.log("running");
            console.log(data);
         }else{
            console.log(error.message);
         }
        }catch(error){
            console.log(data);
        }
     };

    fetchProfile();

    const fetchrepos = async() =>{
        try{
            const res = await fetch(`${url}${usernameInput}/repos`);
            const data = await res.json();
            console.log(data);
        }catch(error){
            console.log(error);
        }
    };
    fetchrepos();