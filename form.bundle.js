(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var o=t.g.document;if(!e&&o&&(o.currentScript&&(e=o.currentScript.src),!e)){var r=o.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();class e{static generateElementFromString(t){const e=document.createElement("div");if(e.innerHTML=t,e.children.length<=0||!e.firstElementChild)throw new Error("Invalid component string provided to generate an element.");const o=e.firstElementChild;return e.removeChild(o),o}static createIconComponent(t,e,o){const{path:r,viewBox:n}=t,i=`\n      <svg\n        height="${e}"\n        width="${e}"\n        xmlns="http://www.w3.org/2000/svg"\n        viewBox="${n[0]} ${n[1]} ${n[2]} ${n[3]}" \n      >\n        <path fill="${null!=o?o:"#black"}" d="${t.path}"/>\n      </svg>\n    `;return this.generateElementFromString(i)}static settingsIcon(t,e){return this.createIconComponent(this._settingsIcon,null!=t?t:this._defaultIconSize,e)}static playIcon(t,e){return this.createIconComponent(this._playIcon,null!=t?t:this._defaultIconSize,e)}static pauseIcon(t,e){return this.createIconComponent(this._pauseIcon,null!=t?t:this._defaultIconSize,e)}static resetIcon(t,e){return this.createIconComponent(this._resetIcon,null!=t?t:this._defaultIconSize,e)}static fastForwardIcon(t,e){return this.createIconComponent(this._fastForwardIcon,null!=t?t:this._defaultIconSize,e)}static fastRewindIcon(t,e){return this.createIconComponent(this._fastRewindIcon,null!=t?t:this._defaultIconSize,e)}static closeIcon(t,e){return this.createIconComponent(this._closeIcon,null!=t?t:this._defaultIconSize,e)}}e._defaultIconSize=32,e._settingsIcon={path:"m388-80-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592-206L572-80H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410-480q0-29 20.5-49.5T480-550q29 0 49.5 20.5T550-480q0 29-20.5 49.5T480-410Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715-480q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538-708l-14-112h-88l-14 112q-34 7-63.5 24T306-642l-106-46-40 72 94 69q-4 17-6.5 33.5T245-480q0 17 2.5 33.5T254-413l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z",viewBox:[0,-960,960,960]},e._playIcon={path:"M320-202v-560l440 280-440 280Z",viewBox:[0,-960,960,960]},e._pauseIcon={path:"M556.667-200v-560h170v560h-170Zm-323.334 0v-560h170v560h-170Z",viewBox:[0,-960,960,960]},e._resetIcon={path:"M480-100.001q-70.769 0-132.615-26.462-61.846-26.461-108.153-72.769-46.308-46.307-72.769-108.153Q140.001-369.231 140.001-440h45.384q0 122.692 85.961 208.654Q357.308-145.385 480-145.385t208.654-85.961Q774.615-317.308 774.615-440t-84.038-208.654q-84.039-85.961-206.731-85.961h-23.385l71.846 71.461-31.383 31.615L373.54-759.307l128.153-127.768 31.384 31L457-779.999h23q70.769 0 132.615 26.462 61.846 26.461 108.153 72.769 46.308 46.307 72.769 108.153Q819.999-510.769 819.999-440t-26.462 132.615q-26.461 61.846-72.769 108.153-46.307 46.308-108.153 72.769Q550.769-100.001 480-100.001Z",viewBox:[0,-960,960,960]},e._fastForwardIcon={path:"M134.771-267.694v-424.612L443.076-480 134.771-267.694Zm382.768 0v-424.612L825.844-480 517.539-267.694Z",viewBox:[0,-960,960,960]},e._fastRewindIcon={path:"M823.613-267.694 515.308-480l308.305-212.306v424.612Zm-378.921 0L136.387-480l308.305-212.306v424.612Z",viewBox:[0,-960,960,960]},e._closeIcon={path:"m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z",viewBox:[0,-960,960,960]};const o=e;class r{createErrorComponent(t){const e=document.createElement("li");e.classList.add("error-message");const r=document.createElement("span");r.textContent=t;const n=document.createElement("span");n.appendChild(o.closeIcon(20,"#fafafa")),n.classList.add("close");const i=document.createElement("div");i.classList.add("error-message-bar"),e.appendChild(n),e.appendChild(r),e.appendChild(i);const s={li:e,bar:i,text:t,spanContent:r,currentTransformY:0};return n.addEventListener("click",(()=>this.removeError(s))),s}pushNewError(t){const e=parseInt(getComputedStyle(t.li).height)+12;this.currentShownErrors.forEach((t=>{t.currentTransformY-=e,t.li.style.transform=`translateY(${t.currentTransformY}px)`})),this.currentShownErrors.push(t),console.log(this.currentShownErrors.length)}removeError(t){const e=this.currentShownErrors.indexOf(t);-1==e&&console.log("Index not found!"),setTimeout((()=>{t.li.style.opacity="0";const o=parseInt(getComputedStyle(t.li).height)+12;this.currentShownErrors.slice(0,e).forEach((t=>{t.currentTransformY+=o,t.li.style.transform=`translateY(${t.currentTransformY}px)`})),this.currentShownErrors.splice(e,1),setTimeout((()=>{t.li.remove()}),250)}),0)}constructor(){const t=document.querySelector("#errors-container");if(!t)throw new Error("Lista de erros não encontrada na DOM.");this.ulErrors=t,this.currentShownErrors=[]}static get instance(){return r._instance||(r._instance=new r),r._instance}showError(t){const e=this.createErrorComponent(t);this.ulErrors.appendChild(e.li),setTimeout((()=>{e.li.style.opacity="1",this.pushNewError(e);let t=100;const o=setInterval((()=>{e.bar.style.width=(t-=.25)+"%",t<=0&&(clearInterval(o),e.li.style.opacity="0",setTimeout((()=>{e.li.remove(),this.currentShownErrors.shift()}),250))}),25)}),0)}}function n(t){return"string"==typeof t&&/^.$/.test(t)}const i=t.p+"assets/tape-processing.webm",s=t.p+"assets/tape-accepting.webm",a=t.p+"assets/tape-rejecting.webm",c=t.p+"assets/tape-loop.webm",l=document.querySelector("#form-transicao");if(!l)throw new Error("Formulário de transições não identificado.");const d=document.querySelector("#form-estados-especiais");if(!d)throw new Error("Formulário de estados especiais não identificado.");const u=document.querySelector("#remover-transicao");if(!u)throw new Error("Botão de remover transição não identificado.");const h=document.querySelector("#transicoes");if(!h)throw new Error("Lista de transicoes não identificada.");const m=document.querySelector("#criar-mt");if(!m)throw new Error("Botão de criar MT não identificado.");const p=document.querySelector("#transicoes-title");if(!p)throw new Error("Span do título de transições não identificado.");const f=document.querySelector("#tape-processing-video");if(!f)throw new Error("Tag do vídeo de processamento da fita não identificado.");f.src=i;const w=document.querySelector("#tape-accepting-video");if(!w)throw new Error("Tag do vídeo de aceitação da fita não identificado.");w.src=s;const v=document.querySelector("#tape-rejecting-video");if(!v)throw new Error("Tag do vídeo de rejeição da fita não identificado.");v.src=a;const g=document.querySelector("#tape-loop-video");if(!g)throw new Error("Tag do vídeo de loop da fita não identificado.");g.src=c;const E=document.querySelector("#input-est-origem");if(!E)throw new Error("Input do estado de oriem não identificado.");const q=document.querySelector("#input-q0");if(!q)throw new Error("Input do estado inicial não identificado.");const S=document.querySelector("#input-qA");if(!S)throw new Error("Input do estado de aceitação não identificado.");const I=document.querySelector("#input-qR");if(!I)throw new Error("Input do estado de rejeição não identificado.");const y=[];let T=localStorage.getItem("default-pathname");function C(t){const[e,o,r,n,i]=t,s=document.createElement("li");s.textContent=`\n        δ(${e}, '${o}') = \n        (${r}, '${n}', ${i})`,h.appendChild(s),y.push(t)}T||(T=window.location.pathname,localStorage.setItem("default-pathname",T));const _=localStorage.getItem("entradaMT");if(_){const t=JSON.parse(_);q.value=t.q0,S.value=t.qA,I.value=t.qR,t.δ.forEach((t=>C(t)))}const x=localStorage.getItem("errors");x&&(JSON.parse(x).forEach((t=>r.instance.showError(t))),localStorage.removeItem("errors")),l.addEventListener("submit",(t=>{var e,o,i,s,a,c;try{t.preventDefault();const r=new FormData(l),d=null===(e=r.get("estado"))||void 0===e?void 0:e.toString();let u=null===(o=r.get("leitura"))||void 0===o?void 0:o.toString();const h=null===(i=r.get("estadoDestino"))||void 0===i?void 0:i.toString();let m=null===(s=r.get("escrita"))||void 0===s?void 0:s.toString();const f=null===(a=r.get("movimento"))||void 0===a?void 0:a.toString();if(u||(u=" "),m||(m=" "),!n(u)||!n(m))throw new Error("O símbolo precisa ter um e somente um caracter!");if(!d||!h)throw new Error("Insira estados de origem e destino!");if("string"!=typeof(c=f)||"Esquerda"!=c&&"Direita"!=c)throw new Error("Movimento inválido!");"As transições da sua máquina aparecerão aqui!"===p.textContent&&(p.textContent="Transições:"),C([d,u,h,m,f]),E.focus()}catch(t){r.instance.showError(t)}})),u.addEventListener("click",(()=>{var t;y.length>0&&(null===(t=h.lastElementChild)||void 0===t||t.remove(),y.pop())})),m.addEventListener("click",(()=>{var t,e,o;try{const r=new FormData(d),n=null===(t=r.get("q0"))||void 0===t?void 0:t.toString(),i=null===(e=r.get("qA"))||void 0===e?void 0:e.toString(),s=null===(o=r.get("qR"))||void 0===o?void 0:o.toString();if(!(n&&i&&s))throw new Error("Os estados especiais precisam ser definidos!");const a={δ:y,q0:n,qA:i,qR:s};localStorage.setItem("entradaMT",JSON.stringify(a)),window.location.href=T+"machine.html"}catch(t){r.instance.showError(t)}}))})();