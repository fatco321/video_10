import{o as t,c as n,r as N,n as D,a as u,b as p,w as f,d as m,e as c,f as P,g as O,u as F,h as B,T as R,i as k,F as S,t as V,j as z,k as j}from"./@vue-D5RGgVMr.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const v of i.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&s(v)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const M=""+new URL("main_pg-BgxzcobU.jpg",import.meta.url).href,$=(o,l)=>{const r=o.__vccOpts||o;for(const[s,e]of l)r[s]=e;return r},T={__name:"Button",props:{fontSize:{type:String,default:"1.4em"}},setup(o){return(l,r)=>(t(),n("button",{style:D({fontSize:o.fontSize})},[N(l.$slots,"default",{},void 0)],4))}},h=$(T,[["__scopeId","data-v-c311af29"]]),q={class:"container"},K={class:"container__bnt"},H={__name:"StartPage",emits:["start"],setup(o,{emit:l}){return(r,s)=>(t(),n("div",q,[s[2]||(s[2]=u("div",{class:"container__img"},[u("img",{src:M,alt:"Главная картинка"})],-1)),u("div",K,[p(h,{onClick:s[0]||(s[0]=e=>r.$emit("start"))},{default:f(()=>s[1]||(s[1]=[m("Начать")])),_:1})])]))}},J=$(H,[["__scopeId","data-v-38bf28e7"]]),Y=""+new URL("good-DgNWmj6F.png",import.meta.url).href,Q=""+new URL("bad-jUaHcRda.png",import.meta.url).href,W=""+new URL("verno-4-BRPhl26P.mp3",import.meta.url).href,X=""+new URL("otvet-ne-vernyi-CYKaOG5a.mp3",import.meta.url).href,Z=["src"],ee=["src"],te={class:"container"},oe={key:0,class:"container__img"},se={key:0,src:Y,alt:""},ne={key:1,src:Q,alt:""},re={class:"container__video"},ie=["src"],le={key:0,class:"container__btn"},ae={key:1,class:"container__btn"},ue={__name:"Game",props:["videoArr"],emits:["userAnswer","showResult"],setup(o,{emit:l}){const r=c(0),s=o,e=l,i=c(!1),v=c(!1),d=c(!1),_=c(!1),g=c(null),U=c(null),b=c([]),I=y=>{s.videoArr[r.value].isGood===y?(v.value=!0,g.value.currentTime=.7,g.value.play(),e("userAnswer",{index:r.value,result:!1})):(v.value=!1,U.value.play(),e("userAnswer",{index:r.value,result:!0})),d.value=!0,i.value=!1,_.value=!0},C=()=>{r.value<s.videoArr.length-1?r.value+=1:L(),_.value=!1},G=()=>{i.value=!1,d.value=!1},L=()=>{e("showResult")},x=async()=>{for(const y of s.videoArr)await new Promise((a,A)=>{const w=document.createElement("video");w.src=y.video,w.preload="auto",w.style.display="none",document.body.appendChild(w),w.addEventListener("loadeddata",()=>{a()}),w.addEventListener("error",()=>{A(new Error(`Ошибка загрузки видео: ${y.video}`))})})},E=()=>{b.value.forEach(y=>{y&&y.remove()})};return P(()=>{x()}),O(()=>{E()}),(y,a)=>(t(),n(S,null,[u("audio",{ref_key:"goodAudio",ref:g,src:F(W)},null,8,Z),u("audio",{ref_key:"badAudio",ref:U,src:F(X)},null,8,ee),u("div",te,[p(R,{name:"fade"},{default:f(()=>[d.value?(t(),n("div",oe,[v.value?(t(),n("img",se)):(t(),n("img",ne))])):B("",!0)]),_:1}),u("div",re,[u("video",{ref:"videoRefs[index]",onEnded:a[0]||(a[0]=A=>i.value=!0),onPlay:G,autoplay:"true",src:o.videoArr[r.value].video},null,40,ie)]),p(R,{name:"fade",mode:"out-in"},{default:f(()=>[i.value?(t(),n("div",le,[p(h,{"font-size":"1.2em",onClick:a[1]||(a[1]=A=>I(!0))},{default:f(()=>a[3]||(a[3]=[m("Хороший "),u("br",null,null,-1),m(" преподаватель")])),_:1}),p(h,{"font-size":"1.2em",onClick:a[2]||(a[2]=A=>I(!1))},{default:f(()=>a[4]||(a[4]=[m("Некомпетентный "),u("br",null,null,-1),m(" преподаватель")])),_:1})])):_.value?(t(),n("div",ae,[r.value===o.videoArr.length-1?(t(),k(h,{key:0,onClick:L},{default:f(()=>a[5]||(a[5]=[m("Посмотреть результат")])),_:1})):(t(),k(h,{key:1,onClick:C},{default:f(()=>a[6]||(a[6]=[m("Дальше")])),_:1}))])):B("",!0)]),_:1})])],64))}},de=$(ue,[["__scopeId","data-v-0aa1aa07"]]),ce={class:"container"},fe={key:0},me={key:0},ve={key:1},pe={key:2},_e={key:1},ye={key:2},he={key:3},we={key:4},ge={__name:"Result",props:["count"],emits:["filter"],setup(o,{emit:l}){const r=()=>{location.reload()};return(s,e)=>(t(),n(S,null,[u("div",ce,[o.count>0?(t(),n("h1",fe,[m(" ВЫ ДОПУСТИЛИ "+V(o.count)+" ",1),o.count===1?(t(),n("span",me,"ОШИБКУ")):o.count>1&&o.count<=4?(t(),n("span",ve,"ОШИБКИ")):(t(),n("span",pe,"ОШИБОК")),e[1]||(e[1]=m(" ИЗ 10 "))])):(t(),n("h1",_e,"ВЫ ОТВЕТИЛИ НА ВСЕ ВЕРНО!")),o.count<=4&&o.count>0?(t(),n("p",ye," Вы хорошо справились с заданием, но допустили немного ошибок. Вы умеете отличать компетентного преподавателя от некомпетентного. Исправьте свои ошибки, чтобы улучшить результат и закрепить свои знания. ")):o.count>4&&o.count>0?(t(),n("p",he," Похоже, вы не смогли отличить компетентного преподавателя от некомпетентного. Но вам есть к чему стремиться! Исправьте свои ошибки и улучшите свой результат. Отработаете практику и на ситуационных примерах научитесь проводить занятие по культуре безопасности ")):(t(),n("p",we," Вы отлично справились с заданием. Вы точно знаете, каким должен быть преподаватель и сможете провести тренинг самостоятельно. Пройдите тренажер заново, чтобы закрепить свои знания и еще раз отработать навыки проведения тренинга по культуре безопасности ")),o.count===0?(t(),k(h,{key:5,onClick:r},{default:f(()=>e[2]||(e[2]=[m("Начать заново")])),_:1})):(t(),k(h,{key:6,onClick:e[0]||(e[0]=i=>s.$emit("filter"))},{default:f(()=>e[3]||(e[3]=[m("Работать над ошибками")])),_:1}))]),e[4]||(e[4]=u("footer",null,null,-1))],64))}},ke=$(ge,[["__scopeId","data-v-e453a618"]]),$e=""+new URL("1-DA_we2KI.mp4",import.meta.url).href,Ae=""+new URL("2-BQlXBTUE.mp4",import.meta.url).href,Re=""+new URL("3-D6BncBnk.mp4",import.meta.url).href,Ue=""+new URL("4-mga2hE-N.mp4",import.meta.url).href,Ie=""+new URL("5-DqlgoIEB.mp4",import.meta.url).href,Le=""+new URL("6-DnpyHYCI.mp4",import.meta.url).href,Fe=""+new URL("7-846OGFVS.mp4",import.meta.url).href,Be=""+new URL("8-BuNFjCgs.mp4",import.meta.url).href,Se=""+new URL("9-BnBMJD4D.mp4",import.meta.url).href,be=""+new URL("10-DJddDkoU.mp4",import.meta.url).href,Ce={key:0},Ge={key:1},xe={key:0},Ee={key:1},Ne={__name:"App",setup(o){const l=c([{video:$e,isGood:!1,userIsFail:null},{video:Ae,isGood:!1,userIsFail:null},{video:Re,isGood:!0,userIsFail:null},{video:Ue,isGood:!0,userIsFail:null},{video:Ie,isGood:!1,userIsFail:null},{video:Le,isGood:!1,userIsFail:null},{video:Fe,isGood:!1,userIsFail:null},{video:Be,isGood:!0,userIsFail:null},{video:Se,isGood:!0,userIsFail:null},{video:be,isGood:!1,userIsFail:null}]),r=c(!1),s=c(!1),e=d=>{l.value[d.index].userIsFail=d.result},i=z(()=>l.value.filter(d=>d.userIsFail===!0).length),v=()=>{l.value=l.value.filter(d=>d.userIsFail===!0),s.value=!1};return(d,_)=>(t(),k(R,{mode:"out-in"},{default:f(()=>[r.value?(t(),n("div",Ge,[p(R,{mode:"out-in"},{default:f(()=>[s.value?(t(),n("div",Ee,[p(ke,{count:i.value,onFilter:v},null,8,["count"])])):(t(),n("div",xe,[p(de,{videoArr:l.value,onUserAnswer:e,onShowResult:_[1]||(_[1]=g=>s.value=!0)},null,8,["videoArr"])]))]),_:1})])):(t(),n("div",Ce,[p(J,{onStart:_[0]||(_[0]=g=>r.value=!0)})]))]),_:1}))}},De=$(Ne,[["__scopeId","data-v-0ca24ee6"]]);j(De).mount("#app");
//# sourceMappingURL=index-CGgLrvyq.js.map
