let goal=document.getElementById('goalsInput');
let goalList=document.getElementById('goalList')
const addBtn= document.getElementById('addBtn');

let goals=[];

addBtn.addEventListener(onclick,()=>{
    const goalText = goal.value.trim();
    if(goalText==="")return;
    const newGoal={
        id:Date.now(),
        title:goalText,
        completed:false
    };
    goals.push(newGoal);
    goal.value=" ";
    renderGoals();
})
function renderGoals(){
    goalList.innerHTML='';
}