const urlg = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IemWo1301q86738Ytc1D/scores/";

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

const scorecard = document.querySelector('.leaderboard');

const render = async ()=>{
    scorecard.innerHTML = '';
    const data = await getData();
    scorecard.innerHTML =  `<tr>
    <td class = "head">Name</td>
    <td class = "head">Score</td>
</tr>`;
    const list = data.map((item)=>{
        const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                td1.innerHTML = item.user;
                td2.innerHTML = item.score;
                td1.setAttribute('class','name');
                td2.setAttribute('class','score')
                tr.appendChild(td1);
                tr.appendChild(td2);
                scorecard.appendChild(tr);
        })
}


/* 
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
 */

document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to the buttons
    document.querySelector('#refresh').addEventListener('click', async () => { render(); });
  
    document.getElementById('input-data').addEventListener('submit', async (event) => {
      event.preventDefault();
      let nameValue= document.querySelector('#name').value;
    let scoreValue = document.querySelector('#score').value;
    console.log(nameValue+" is being added with score "+scoreValue);
    let data = {
        user: nameValue,
        score: scoreValue
    };
    let sc = await sendData(data);
    console.log(sc);
    });
  
    render();
  });
