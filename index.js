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
    await fetch(urlg,).then((response)=>{
        response.json();
    }).then((DATA)=>{
        return DATA.result;
})
};

document.getElementById('input-data').addEventListener('submit',async (e)=>{
    e.preventDefault();
    let nameValue= document.querySelector('#name').value;
    let scoreValue = document.querySelector('#score').value;
    console.log(nameValue+" is being added with score "+scoreValue);
    let data = {
        user: nameValue,
        score: scoreValue
    };
    let sc = await sendData(data);
    console.log(sc);
})

const displayScore = async ()=>{
    const score = await getData();
    console.log(score);
}

displayScore();
/* const mainFUnc = async ()=>{
    let data = {
        user : "haseeb",
        score: "20"
    };
    let res = await sendData(data);
    console.log(res);
}
 */