(function(w,d){zaraz.debug=(ds="")=>{document.cookie=`zarazDebug=${ds}; path=/`;location.reload()};window.zaraz._al=function(cm,cn,co){w.zaraz.listeners.push({item:cm,type:cn,callback:co});cm.addEventListener(cn,co)};zaraz.preview=(cp="")=>{document.cookie=`zarazPreview=${cp}; path=/`;location.reload()};zaraz.i=function(cP){const cQ=d.createElement("div");cQ.innerHTML=unescape(cP);const cR=cQ.querySelectorAll("script");for(let cS=0;cS<cR.length;cS++){const cT=d.createElement("script");cR[cS].innerHTML&&(cT.innerHTML=cR[cS].innerHTML);for(const cU of cR[cS].attributes)cT.setAttribute(cU.name,cU.value);d.head.appendChild(cT);cR[cS].remove()}d.body.appendChild(cQ)};zaraz.f=async function(cV,cW){const cX={credentials:"include",keepalive:!0,mode:"no-cors"};if(cW){cX.method="POST";cX.body=new URLSearchParams(cW);cX.headers={"Content-Type":"application/x-www-form-urlencoded"}}return await fetch(cV,cX)};window.zaraz._p=async bv=>new Promise((bw=>{if(bv){bv.e&&bv.e.forEach((bx=>{try{new Function(bx)()}catch(by){console.error(`Error executing script: ${bx}\n`,by)}}));Promise.allSettled((bv.f||[]).map((bz=>fetch(bz[0],bz[1]))))}bw()}));zaraz.pageVariables={};zaraz.__zcl=zaraz.__zcl||{};zaraz.track=async function(ct,cu,cv){return new Promise(((cw,cx)=>{const cy={name:ct,data:{}};for(const cz of[localStorage,sessionStorage])Object.keys(cz||{}).filter((cB=>cB.startsWith("_zaraz_"))).forEach((cA=>{try{cy.data[cA.slice(7)]=JSON.parse(cz.getItem(cA))}catch{cy.data[cA.slice(7)]=cz.getItem(cA)}}));Object.keys(zaraz.pageVariables).forEach((cC=>cy.data[cC]=JSON.parse(zaraz.pageVariables[cC])));Object.keys(zaraz.__zcl).forEach((cD=>cy.data[`__zcl_${cD}`]=zaraz.__zcl[cD]));cy.data.__zarazMCListeners=zaraz.__zarazMCListeners;
//
cy.data={...cy.data,...cu};cy.zarazData=zarazData;fetch("/cdn-cgi/zaraz/t",{credentials:"include",keepalive:!0,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(cy)}).catch((()=>{
//
return fetch("/cdn-cgi/zaraz/t",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(cy)})})).then((function(cF){zarazData._let=(new Date).getTime();cF.ok||cx();return 204!==cF.status&&cF.json()})).then((async cE=>{await zaraz._p(cE);"function"==typeof cv&&cv()})).finally((()=>cw()))}))};zaraz.set=function(cG,cH,cI){try{cH=JSON.stringify(cH)}catch(cJ){return}prefixedKey="_zaraz_"+cG;sessionStorage&&sessionStorage.removeItem(prefixedKey);localStorage&&localStorage.removeItem(prefixedKey);delete zaraz.pageVariables[cG];if(void 0!==cH){cI&&"session"==cI.scope?sessionStorage&&sessionStorage.setItem(prefixedKey,cH):cI&&"page"==cI.scope?zaraz.pageVariables[cG]=cH:localStorage&&localStorage.setItem(prefixedKey,cH);zaraz.__watchVar={key:cG,value:cH}}};for(const{m:cK,a:cL}of zarazData.q.filter((({m:cM})=>["debug","set"].includes(cM))))zaraz[cK](...cL);for(const{m:cN,a:cO}of zaraz.q)zaraz[cN](...cO);delete zaraz.q;delete zarazData.q;zaraz.fulfilTrigger=function(eu,ev,ew,ex){zaraz.__zarazTriggerMap||(zaraz.__zarazTriggerMap={});zaraz.__zarazTriggerMap[eu]||(zaraz.__zarazTriggerMap[eu]="");zaraz.__zarazTriggerMap[eu]+="*"+ev+"*";zaraz.track("__zarazEmpty",{...ew,__zarazClientTriggers:zaraz.__zarazTriggerMap[eu]},ex)};window.dataLayer=w.dataLayer||[];zaraz._processDataLayer=dB=>{for(const dC of Object.entries(dB))zaraz.set(dC[0],dC[1],{scope:"page"});if(dB.event){if(zarazData.dataLayerIgnore&&zarazData.dataLayerIgnore.includes(dB.event))return;let dD={};for(let dE of dataLayer.slice(0,dataLayer.indexOf(dB)+1))dD={...dD,...dE};delete dD.event;dB.event.startsWith("gtm.")||zaraz.track(dB.event,dD)}};const dA=w.dataLayer.push;Object.defineProperty(w.dataLayer,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...dF){let dG=dA.apply(this,dF);zaraz._processDataLayer(dF[0]);return dG}});dataLayer.forEach((dH=>zaraz._processDataLayer(dH)));zaraz._cts=()=>{zaraz._timeouts&&zaraz._timeouts.forEach((bA=>clearTimeout(bA)));zaraz._timeouts=[]};zaraz._rl=function(){w.zaraz.listeners&&w.zaraz.listeners.forEach((bB=>bB.item.removeEventListener(bB.type,bB.callback)));window.zaraz.listeners=[]};history.pushState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.pushState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.__zarazMCListeners={};zaraz.track("__zarazSPA")}),100)}};history.replaceState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.replaceState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.track("__zarazSPA")}),100)}};zaraz._c=fg=>{const{event:fh,...fi}=fg;zaraz.track(fh,{...fi,__zarazClientEvent:!0})};zaraz._syncedAttributes=["altKey","clientX","clientY","pageX","pageY","button"];zaraz.__zcl.track=!0;d.addEventListener("visibilitychange",(fI=>{zaraz._c({event:"visibilityChange",visibilityChange:[{state:d.visibilityState,timestamp:(new Date).getTime()}]},1)}));zaraz.__zcl.visibilityChange=!0;zaraz.__zarazMCListeners={"google-analytics_v4_20ac":["visibilityChange"]};zaraz._p({"e":["(function(w,d){w.zarazData.executed.push(\"Pageview\");})(window,document)","x=new XMLHttpRequest,x.withCredentials=!0,x.open(\"POST\",\"https://stats.g.doubleclick.net/g/collect?t=dc&aip=1&_r=3&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=c22f1a9d-acc9-4eee-90b8-046683fe4534&_u=KGDAAEADQAAAAC%7E&z=334978274\",!0),x.onreadystatechange=function(){if (4 == x.readyState) {const domain = x.responseText.trim();if (domain.startsWith(\"1g\") && domain.length > 2) {fetch(\"https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=c22f1a9d-acc9-4eee-90b8-046683fe4534&_u=KGDAAEADQAAAAC%7E&z=334978274&slf_rd=1\".replace(\"www.google.com\", \"www.google.\"+domain.slice(2)));}}},x.send();"],"f":[["https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=c22f1a9d-acc9-4eee-90b8-046683fe4534&_u=KGDAAEADQAAAAC%7E&z=334978274&slf_rd=1",{}]]})})(window,document);