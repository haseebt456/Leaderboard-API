


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
    score.forEach(element => {
        console.log(element.user);
        console.log(element.score);        
    });
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