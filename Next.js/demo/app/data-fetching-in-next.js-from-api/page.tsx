import axios from "axios"; //import axios to the data fetching

// Always use async and await while fetching data in next.js as well as in react and use Axios for data fetching

async function getUserData(){
    await new Promise((r) => setTimeout(r, 5000))  //artificial delay to see the loading when its takes time to feth the data and sed it to browser
    // const respone = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
     const respone = await axios.get("http://localhost:3000/api/user")

    return respone.data;
}

export default async function dataFetch(){

    const userDetails = await getUserData();

    return(
        <div>
            hi, there
            {userDetails.email}
            {userDetails.name}
        </div>
    );
}