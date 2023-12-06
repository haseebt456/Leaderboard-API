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

const addButton = document.getElementById('submit');
addButton.addEventListener('click',async ()=>{
    const nameValue= document.getElementById('name').value;
    const scoreValue = document.getElementById('score').value;
    let data = {
        name: nameValue,
        score: scoreValue
    };
    let sc = await sendData(data);
    console.log(sc);
})

const mainFUnc = async ()=>{
    let data = {
        user : "haseeb",
        score: "20"
    };
    let res = await sendData(data);
    console.log(res);
}

mainFUnc();