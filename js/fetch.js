const urlg = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/S83UAltkfWmJPSLpFDoC/scores/";

const sendData = async (data)=>{

    let options = {
        method: "POST",
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify(data)
    }

    let p = await fetch(urlg,options);
    let response = await p.json();
    return response;
};

const getData = async ()=>{
    let p = await fetch(urlg);
    let response = await p.json();
    return response.result;
}

export {sendData,getData};

