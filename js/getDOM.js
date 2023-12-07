import { getData } from "./fetch";

const scorecard = document.querySelector('.leaderboard');

const render = async ()=>{
    scorecard.innerHTML = '';
    const data = await getData();
    const list = data.map((item)=>{
        const listItem = `<li class=""><p>${item.user}:</p> <p>${item.score}</p></li>`;
        return listItem;
    });
    scorecard.innerHTML = list.join('');
    
}