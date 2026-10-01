
const BB={
  get currency(){return localStorage.getItem("bb_currency")||"₹"},
  get user(){return localStorage.getItem("bb_user")||"BroBudget User"},
  get transactions(){return JSON.parse(localStorage.getItem("bb_transactions")||"[]")},
  set transactions(v){localStorage.setItem("bb_transactions",JSON.stringify(v))},
  get goals(){return JSON.parse(localStorage.getItem("bb_goals")||"[]")},
  set goals(v){localStorage.setItem("bb_goals",JSON.stringify(v))}
};
const seed=[
{id:1,name:"Salary",category:"Salary",type:"income",amount:65000,date:"2026-09-01",note:"Monthly salary"},
{id:2,name:"Rent",category:"Housing",type:"expense",amount:18000,date:"2026-09-03",note:"Monthly rent"},
{id:3,name:"Groceries",category:"Food",type:"expense",amount:4200,date:"2026-09-07",note:"Weekly groceries"},
{id:4,name:"Freelance",category:"Freelance",type:"income",amount:12000,date:"2026-09-12",note:"Design project"},
{id:5,name:"Transport",category:"Transport",type:"expense",amount:2100,date:"2026-09-15",note:"Travel"},
{id:6,name:"Shopping",category:"Shopping",type:"expense",amount:3500,date:"2026-09-20",note:"Essentials"}
];
if(!localStorage.getItem("bb_transactions"))BB.transactions=seed;
if(!localStorage.getItem("bb_goals"))BB.goals=[
{id:1,name:"Emergency Fund",target:50000,saved:28500},
{id:2,name:"New Laptop",target:80000,saved:42000}
];
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const money=n=>`${BB.currency}${Number(n||0).toLocaleString("en-IN",{maximumFractionDigits:0})}`;
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const fmtDate=d=>new Date(d+"T00:00:00").toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});
function totals(list=BB.transactions){return list.reduce((a,t)=>{t.type==="income"?a.income+=+t.amount:a.expense+=+t.amount;a.balance=a.income-a.expense;return a},{income:0,expense:0,balance:0})}
function toast(msg){const e=$("#toast");if(!e)return;e.textContent=msg;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),2200)}
function nav(){const page=location.pathname.split("/").pop()||"index.html";$$(".nav a").forEach(a=>a.classList.toggle("active",a.dataset.page===page));const u=$("#sidebarUser");if(u)u.textContent=BB.user}
function setupMobile(){const b=$("#mobileToggle"),s=$("#sidebar");if(b&&s)b.onclick=()=>s.classList.toggle("open")}
function setupModal(){
 const modal=$("#txModal"),form=$("#txForm");if(!modal||!form)return;
 $$("[data-open-modal]").forEach(b=>b.onclick=()=>modal.classList.add("show"));
 $$("[data-close-modal]").forEach(b=>b.onclick=()=>modal.classList.remove("show"));
 form.onsubmit=e=>{
  e.preventDefault();const f=new FormData(form);
  const t={id:Date.now(),name:f.get("name"),amount:+f.get("amount"),type:f.get("type"),category:f.get("category"),date:f.get("date"),note:f.get("note")};
  BB.transactions=[...BB.transactions,t];modal.classList.remove("show");form.reset();toast("Transaction added");setTimeout(()=>location.reload(),350);
 };
}
function renderKpis(){const t=totals();$$("[data-kpi]").forEach(e=>e.textContent=money(t[e.dataset.kpi]||0));const s=$("#savingRate");if(s)s.textContent=t.income?Math.round(t.balance/t.income*100)+"%":"0%"}
function renderRecent(){
 const b=$("#recentBody");if(!b)return;const a=[...BB.transactions].sort((x,y)=>y.date.localeCompare(x.date)).slice(0,6);
 b.innerHTML=a.length?a.map(t=>`<tr><td><div class="txn"><span class="tx-icon">${t.type==="income"?"↗":"↘"}</span><span><b>${esc(t.name)}</b><small class="muted" style="display:block">${esc(t.category)}</small></span></div></td><td>${fmtDate(t.date)}</td><td class="${t.type}">${t.type==="income"?"+":"-"}${money(t.amount)}</td></tr>`).join(""):'<tr><td colspan="3" class="empty">No transactions yet.</td></tr>';
}
function drawDashboard(){
 const c=$("#balanceChart");if(!c)return;const ctx=c.getContext("2d"),w=c.clientWidth,h=c.clientHeight,d=devicePixelRatio||1;c.width=w*d;c.height=h*d;ctx.scale(d,d);
 const vals=[24000,31000,28500,39000,47000,totals().balance],labs=["Apr","May","Jun","Jul","Aug","Sep"],max=Math.max(...vals)*1.2;
 ctx.clearRect(0,0,w,h);ctx.strokeStyle="rgba(148,163,184,.12)";for(let i=0;i<5;i++){let y=30+i*(h-65)/4;ctx.beginPath();ctx.moveTo(30,y);ctx.lineTo(w-15,y);ctx.stroke()}
 ctx.strokeStyle="#22d3ee";ctx.lineWidth=3;ctx.beginPath();vals.forEach((v,i)=>{let x=35+i*(w-70)/5,y=h-35-v/max*(h-70);i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.stroke();
 vals.forEach((v,i)=>{let x=35+i*(w-70)/5,y=h-35-v/max*(h-70);ctx.fillStyle="#a78bfa";ctx.beginPath();ctx.arc(x,y,4,0,7);ctx.fill();ctx.fillStyle="#8190aa";ctx.font="11px Arial";ctx.textAlign="center";ctx.fillText(labs[i],x,h-12)});
}
document.addEventListener("DOMContentLoaded",()=>{nav();setupMobile();setupModal();renderKpis();renderRecent();drawDashboard()});
window.addEventListener("resize",drawDashboard);
