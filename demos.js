const app=document.querySelector('#app');
const status=document.querySelector('#status');
const project=new URLSearchParams(location.search).get('project');
if(project==='task'){
 app.innerHTML='<h1>Focus Board</h1><p>Make room for what matters.</p><form><label>New task <input name="task" required maxlength="150" placeholder="What’s next?"></label><button>Add task</button></form><ul></ul>';
 app.querySelector('form').onsubmit=e=>{e.preventDefault();const input=e.target.elements.task;if(!input.value.trim())return;const li=document.createElement('li');const label=document.createElement('label');const check=document.createElement('input');check.type='checkbox';const text=document.createElement('span');text.textContent=' '+input.value.trim();check.onchange=()=>text.style.textDecoration=check.checked?'line-through':'none';label.append(check,text);const button=document.createElement('button');button.textContent='Remove';button.onclick=()=>li.remove();li.append(label,button);app.querySelector('ul').append(li);input.value='';input.focus();status.textContent='Task added.';};
}else if(project==='expense'){
 let total=0;app.innerHTML='<h1>Pocket Ledger</h1><p>Know where your money goes.</p><h2>Total: $<span>0.00</span></h2><form><label>Description <input name="description" required maxlength="100"></label><label>Amount ($) <input name="amount" type="number" min="0.01" max="1000000" step="0.01" required></label><button>Add expense</button></form><ul></ul>';
 app.querySelector('form').onsubmit=e=>{e.preventDefault();const desc=e.target.elements.description.value.trim();const amount=Math.round(Number(e.target.elements.amount.value)*100);if(!desc||!Number.isFinite(amount)||amount<=0)return;total+=amount;const li=document.createElement('li');const text=document.createElement('span');text.textContent=`${desc}: $${(amount/100).toFixed(2)}`;const button=document.createElement('button');button.textContent='Remove';button.onclick=()=>{total-=amount;app.querySelector('h2 span').textContent=(total/100).toFixed(2);li.remove();};li.append(text,button);app.querySelector('ul').append(li);app.querySelector('h2 span').textContent=(total/100).toFixed(2);e.target.reset();};
}else if(project==='palette'){
 app.innerHTML='<h1>Color Studio</h1><p>Generate a palette. Select a color to copy its hex code.</p><div class="swatches"></div><button id="generate">New palette ↗</button>';
 function generate(){const host=app.querySelector('.swatches');host.replaceChildren();for(let i=0;i<4;i++){const color='#'+Math.floor(Math.random()*16777216).toString(16).padStart(6,'0');const button=document.createElement('button');button.style.background=color;button.textContent=color;button.onclick=async()=>{try{await navigator.clipboard.writeText(color);status.textContent=`Copied ${color}`;}catch{status.textContent=`Copy this color: ${color}`;}};host.append(button);}}app.querySelector('#generate').onclick=generate;generate();
}else if(project==='quiz'){
 // React quiz is mounted by Vite's compiled entry; source is in src/QuizDemo.jsx.
 location.replace('./?demo=quiz');
}else{app.innerHTML='<h1>Choose a demo</h1><p>Open a project from the portfolio.</p>';}
