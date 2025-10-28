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
    goals.forEach(g=>{
        const label= document.createElement('label');
        label.className='checkbox-container';
        label.innerHTML=`<imput type="checkbox" data-id=${g.id}><span class="checkmark"></span>${g.title}`;
    })
}