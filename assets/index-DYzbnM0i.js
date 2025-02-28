import{g as D,p as O,i as ue,u as Re,a as X,m as Ne,b as U,c as s,w as T,v as fe,V as Ae,R as ze,d as me,e as qe,f as j,h as Ge,I as de,r as De,j as ve,k as Oe,l as He,n as We,o as Fe,q as K,s as Ue,t as Xe,x as Ke,y as Ye,z as Ze,A as Je,B as Qe,C as P,D as et,E as tt,F as st,G as pe,H as Y,J as se,K as nt,L as at,M as lt,N as w,O as ot,P as it,Q as u,S as i,T as m,U as v,W as a,X as N,Y as p,Z as I,_ as c,$ as dt,a0 as A,a1 as Q,a2 as z,a3 as M,a4 as rt,a5 as ct,a6 as ut,a7 as ft,a8 as mt,a9 as vt,aa as q}from"./index-DshUQydS.js";const pt="/assets/feat-timeline2-DtG4e7bT.png",gt="/assets/feat-folder-CniXAkwG.png",yt="/assets/feat-watch-B7f8trAc.png",ht="/assets/feat-privacy-CfFsnxdC.png",xt="/assets/feat-unlimited-Bny5W_gL.png",F=Symbol.for("vuetify:v-expansion-panel"),ge=O({...U(),...Ne()},"VExpansionPanelText"),ee=D()({name:"VExpansionPanelText",props:ge(),setup(e,f){let{slots:n}=f;const t=ue(F);if(!t)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:d,onAfterLeave:g}=Re(e,t.isSelected);return X(()=>s(Ae,{onAfterLeave:g},{default:()=>{var h;return[T(s("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&d.value&&s("div",{class:"v-expansion-panel-text__wrapper"},[(h=n.default)==null?void 0:h.call(n)])]),[[fe,t.isSelected.value]])]}})),{}}}),ye=O({color:String,expandIcon:{type:de,default:"$expand"},collapseIcon:{type:de,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...U(),...Ge()},"VExpansionPanelTitle"),te=D()({name:"VExpansionPanelTitle",directives:{Ripple:ze},props:ye(),setup(e,f){let{slots:n}=f;const t=ue(F);if(!t)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:d,backgroundColorStyles:g}=me(e,"color"),{dimensionStyles:h}=qe(e),y=j(()=>({collapseIcon:e.collapseIcon,disabled:t.disabled.value,expanded:t.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),_=j(()=>t.isSelected.value?e.collapseIcon:e.expandIcon);return X(()=>{var S;return T(s("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":t.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},d.value,e.class],style:[g.value,h.value,e.style],type:"button",tabindex:t.disabled.value?-1:void 0,disabled:t.disabled.value,"aria-expanded":t.isSelected.value,onClick:e.readonly?void 0:t.toggle},[s("span",{class:"v-expansion-panel-title__overlay"},null),(S=n.default)==null?void 0:S.call(n,y.value),!e.hideActions&&s(ve,{defaults:{VIcon:{icon:_.value}}},{default:()=>{var $;return[s("span",{class:"v-expansion-panel-title__icon"},[(($=n.actions)==null?void 0:$.call(n,y.value))??s(Oe,null,null)])]}})]),[[De("ripple"),e.ripple]])}),{}}}),he=O({title:String,text:String,bgColor:String,...Ke(),...Xe(),...Ue(),...K(),...ye(),...ge()},"VExpansionPanel"),bt=D()({name:"VExpansionPanel",props:he(),emits:{"group:selected":e=>!0},setup(e,f){let{slots:n}=f;const t=He(e,F),{backgroundColorClasses:d,backgroundColorStyles:g}=me(e,"bgColor"),{elevationClasses:h}=We(e),{roundedClasses:y}=Fe(e),_=j(()=>(t==null?void 0:t.disabled.value)||e.disabled),S=j(()=>t.group.items.value.reduce((x,b,V)=>(t.group.selected.value.includes(b.id)&&x.push(V),x),[])),$=j(()=>{const x=t.group.items.value.findIndex(b=>b.id===t.id);return!t.isSelected.value&&S.value.some(b=>b-x===1)}),B=j(()=>{const x=t.group.items.value.findIndex(b=>b.id===t.id);return!t.isSelected.value&&S.value.some(b=>b-x===-1)});return Ye(F,t),X(()=>{const x=!!(n.text||e.text),b=!!(n.title||e.title),V=te.filterProps(e),L=ee.filterProps(e);return s(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":t.isSelected.value,"v-expansion-panel--before-active":$.value,"v-expansion-panel--after-active":B.value,"v-expansion-panel--disabled":_.value},y.value,d.value,e.class],style:[g.value,e.style]},{default:()=>[s("div",{class:["v-expansion-panel__shadow",...h.value]},null),s(ve,{defaults:{VExpansionPanelTitle:{...V},VExpansionPanelText:{...L}}},{default:()=>{var E;return[b&&s(te,{key:"title"},{default:()=>[n.title?n.title():e.title]}),x&&s(ee,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(E=n.default)==null?void 0:E.call(n)]}})]})}),{groupItem:t}}}),wt=["default","accordion","inset","popout"],kt=O({flat:Boolean,...st(),...tt(he(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...et(),...U(),...K(),variant:{type:String,default:"default",validator:e=>wt.includes(e)}},"VExpansionPanels"),_t=D()({name:"VExpansionPanels",props:kt(),emits:{"update:modelValue":e=>!0},setup(e,f){let{slots:n}=f;const{next:t,prev:d}=Ze(e,F),{themeClasses:g}=Je(e),h=j(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return Qe({VExpansionPanel:{bgColor:P(e,"bgColor"),collapseIcon:P(e,"collapseIcon"),color:P(e,"color"),eager:P(e,"eager"),elevation:P(e,"elevation"),expandIcon:P(e,"expandIcon"),focusable:P(e,"focusable"),hideActions:P(e,"hideActions"),readonly:P(e,"readonly"),ripple:P(e,"ripple"),rounded:P(e,"rounded"),static:P(e,"static")}}),X(()=>s(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},g.value,h.value,e.class],style:e.style},{default:()=>{var y;return[(y=n.default)==null?void 0:y.call(n,{prev:d,next:t})]}})),{next:t,prev:d}}}),xe=Y.reduce((e,f)=>(e[f]={type:[Boolean,String,Number],default:!1},e),{}),be=Y.reduce((e,f)=>{const n="offset"+se(f);return e[n]={type:[String,Number],default:null},e},{}),we=Y.reduce((e,f)=>{const n="order"+se(f);return e[n]={type:[String,Number],default:null},e},{}),re={col:Object.keys(xe),offset:Object.keys(be),order:Object.keys(we)};function St(e,f,n){let t=e;if(!(n==null||n===!1)){if(f){const d=f.replace(e,"");t+=`-${d}`}return e==="col"&&(t="v-"+t),e==="col"&&(n===""||n===!0)||(t+=`-${n}`),t.toLowerCase()}}const Ct=["auto","start","end","center","baseline","stretch"],Pt=O({cols:{type:[Boolean,String,Number],default:!1},...xe,offset:{type:[String,Number],default:null},...be,order:{type:[String,Number],default:null},...we,alignSelf:{type:String,default:null,validator:e=>Ct.includes(e)},...U(),...K()},"VCol"),C=D()({name:"VCol",props:Pt(),setup(e,f){let{slots:n}=f;const t=j(()=>{const d=[];let g;for(g in re)re[g].forEach(y=>{const _=e[y],S=St(g,y,_);S&&d.push(S)});const h=d.some(y=>y.startsWith("v-col-"));return d.push({"v-col":!h||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),d});return()=>{var d;return pe(e.tag,{class:[t.value,e.class],style:e.style},(d=n.default)==null?void 0:d.call(n))}}}),ne=["start","end","center"],ke=["space-between","space-around","space-evenly"];function ae(e,f){return Y.reduce((n,t)=>{const d=e+se(t);return n[d]=f(),n},{})}const $t=[...ne,"baseline","stretch"],_e=e=>$t.includes(e),Se=ae("align",()=>({type:String,default:null,validator:_e})),Vt=[...ne,...ke],Ce=e=>Vt.includes(e),Pe=ae("justify",()=>({type:String,default:null,validator:Ce})),Tt=[...ne,...ke,"stretch"],$e=e=>Tt.includes(e),Ve=ae("alignContent",()=>({type:String,default:null,validator:$e})),ce={align:Object.keys(Se),justify:Object.keys(Pe),alignContent:Object.keys(Ve)},jt={align:"align",justify:"justify",alignContent:"align-content"};function Et(e,f,n){let t=jt[e];if(n!=null){if(f){const d=f.replace(e,"");t+=`-${d}`}return t+=`-${n}`,t.toLowerCase()}}const It=O({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_e},...Se,justify:{type:String,default:null,validator:Ce},...Pe,alignContent:{type:String,default:null,validator:$e},...Ve,...U(),...K()},"VRow"),G=D()({name:"VRow",props:It(),setup(e,f){let{slots:n}=f;const t=j(()=>{const d=[];let g;for(g in ce)ce[g].forEach(h=>{const y=e[h],_=Et(g,h,y);_&&d.push(_)});return d.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),d});return()=>{var d;return pe(e.tag,{class:["v-row",t.value,e.class],style:e.style},(d=n.default)==null?void 0:d.call(n))}}}),Lt={class:"d-flex flex-column align-center position-relative px-16",style:{"min-height":"calc(100vh - 64px)"}},Mt={key:0,class:"w-100 text-h2 font-weight-bold d-flex align-center",style:{color:"#585858"}},Bt={key:0,class:"w-100 text-subtitle-1 mt-16 mb-5",style:{color:"#333","line-height":"1.6","font-size":"1.4rem !important"}},Rt=["innerHTML"],Nt=["innerHTML"],At={class:"w-100 h-100 d-flex align-center justify-center",style:{position:"relative","max-width":"100%",overflow:"hidden","border-radius":"12px"}},zt={key:0,class:"w-100 h-100 d-flex d-flex justify-center",style:{gap:"0 10px"}},qt={key:0,class:"d-flex justify-center",style:{height:"60px",margin:"60px 0",position:"sticky",top:"24px","z-index":"9999","font-weight":"500","font-size":"16px"}},Gt={class:"h-100 py-1 d-flex align-center elevation-1",style:{background:"#f1f3f4","border-radius":"100px",gap:"0 50px",padding:"0 100px"}},Dt={key:0,class:"w-100 text-h2 mb-16"},Ot={key:0,class:"w-100 text-h6 pl-4 mb-4"},Ht={key:0,class:"w-100 text-body-1 pl-4"},Wt={key:0,class:"w-100 text-h2 mb-16"},Ft={key:0,class:"w-100 text-h6 pl-4 mb-4"},Ut={key:0,class:"w-100 text-body-1 pl-4"},Xt={key:0,class:"w-100 text-h2 mb-16"},Kt={key:0,class:"w-100 text-h6 pl-4 mb-4"},Yt={key:0,class:"w-100 text-body-1 pl-4"},Zt={key:0,class:"w-100 text-h2 mb-16"},Jt={key:0,class:"w-100 text-h5 mb-4"},Qt={key:0,class:"w-100 text-body-1"},es={key:0,class:"w-100 text-h2 mb-16"},ts={key:0,class:"w-100 text-h6 pl-4 mb-4"},ss={key:0,class:"w-100 text-body-1 pl-4"},ns={style:{"max-width":"1296px",width:"100%"}},as=["innerHTML"],os=nt({__name:"index",setup(e){const f=at(),n=lt(),t=w("tab"),d=w(null),g=w(0),h=w(null),y=w(null),_=w(null),S=w(null),$=w(null),B=w(null),x=w(!1),b=w(!1),V=w(!1),L=w(!1),E=w(!1),H=w(!1),le=w(!1),Te=w(9);ot(()=>{window.addEventListener("scroll",Z),window.addEventListener("resize",J),Z(),J()}),it(()=>{window.removeEventListener("scroll",Z),window.removeEventListener("resize",J)});const Z=()=>{const l=h.value,o=y.value,r=_.value,k=S.value,oe=$.value,ie=B.value;if(!l||!o||!r||!ie||!k||!oe)return;const je=l.getBoundingClientRect().top,Ee=o.getBoundingClientRect().top,Ie=r.getBoundingClientRect().top,Le=k.getBoundingClientRect().top,Me=oe.getBoundingClientRect().top,Be=ie.getBoundingClientRect().top,R=window.innerHeight;Be<R/2?t.value="faq":Me<R/2?t.value="unlimited":Le<R/2?t.value="privacy":Ie<R/2?t.value="watchMode":Ee<R/2?t.value="folders":je<R/2?t.value="timeline":t.value="tab"},W=l=>{if(l==="timeline"){if(h.value){const r=h.value;window.scrollTo({top:r.offsetTop-120,behavior:"smooth"})}}else if(l==="folders"){if(y.value){const r=y.value;window.scrollTo({top:r.offsetTop-120,behavior:"smooth"})}}else if(l==="watchMode"){if(_.value){const r=_.value;window.scrollTo({top:r.offsetTop-120,behavior:"smooth"})}}else if(l==="privacy"){if(S.value){const r=S.value;window.scrollTo({top:r.offsetTop-120,behavior:"smooth"})}}else if(l==="unlimited"){if($.value){const r=$.value;window.scrollTo({top:r.offsetTop-120,behavior:"smooth"})}}else if(l==="faq"&&B.value){const r=B.value;window.scrollTo({top:r.offsetTop-120,behavior:"smooth"})}},J=()=>{if(d.value){const l=d.value.offsetWidth;g.value=l/675*380}};return(l,o)=>(i(),u(Q,null,[T((i(),u("div",Lt,[s(G,{style:{"max-width":"1296px",width:"100%",margin:"0",padding:"80px 0 0 0"}},{default:a(()=>[s(C,{cols:"5",class:"d-flex flex-column justify-center align-start"},{default:a(()=>[s(p,{name:"fade"},{default:a(()=>[x.value?(i(),u("div",Mt,[I(c(l.$t("message.home.WhatIs"))+"  ",1),o[8]||(o[8]=v("img",{src:dt,style:{height:"3.75rem",padding:"8px 0"}},null,-1))])):m("",!0)]),_:1}),s(p,{name:"fade"},{default:a(()=>[x.value?(i(),u("div",Bt,[v("div",{class:"mb-4",innerHTML:l.$t("message.home.slogan1")},null,8,Rt),v("div",{style:{opacity:"0.7"},innerHTML:l.$t("message.home.slogan2")},null,8,Nt)])):m("",!0)]),_:1}),A(n).osType==="Windows"||A(n).osType==="MacOS"?(i(),u(Q,{key:0},[s(p,{name:"fade"},{default:a(()=>[x.value?(i(),N(z,{key:0,class:"text-none mt-10",rounded:"lg",style:{"box-shadow":"0 4px 8px rgba(0, 0, 0, 0.2)"},size:"x-large",color:"primary",onClick:o[0]||(o[0]=r=>le.value=!0)},{default:a(()=>[I(c(l.$t("message.Download"))+" "+c(A(n).osType)+" "+c(l.$t("message.home.installer")),1)]),_:1})):m("",!0)]),_:1}),s(p,{name:"fade"},{default:a(()=>[x.value?T((i(),N(z,{key:0,class:"text-none text-decoration-underline ml-1 px-0 mt-2",rounded:"lg",variant:"text"},{default:a(()=>[I(c(l.$t("message.home.mirror")),1)]),_:1},512)),[[fe,le.value]]):m("",!0)]),_:1}),s(p,{name:"fade"},{default:a(()=>[x.value?(i(),N(z,{key:0,class:"text-none text-decoration-underline ml-1 mt-2 px-0",rounded:"lg",variant:"text",onClick:o[1]||(o[1]=r=>A(f).push("/download"))},{default:a(()=>[I(c(l.$t("message.home.otherPlatform")),1)]),_:1})):m("",!0)]),_:1})],64)):(i(),N(p,{key:1,name:"fade"},{default:a(()=>[x.value?(i(),N(z,{key:0,class:"text-none mt-10",rounded:"lg",style:{"box-shadow":"0 4px 8px rgba(0, 0, 0, 0.2)"},size:"x-large",color:"primary",onClick:o[2]||(o[2]=r=>A(f).push("/download"))},{default:a(()=>[I(c(l.$t("message.home.otherPlatform")),1)]),_:1})):m("",!0)]),_:1}))]),_:1}),s(C,{cols:"7",class:"d-flex justify-center align-center"},{default:a(()=>[v("div",At,[A(n).isInChina?(i(),u("iframe",{key:0,ref_key:"iframeRef",ref:d,width:"100%",src:"//www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=114052672001076&bvid=BV1frAmecEWV&cid=28538372663&p=1&autoplay=1&mute=1&loop=1&fjw=0&danmaku=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",style:M([{"border-radius":"12px"},{height:`${g.value}px`}])},null,4)):(i(),u("iframe",{key:1,ref_key:"iframeRef",ref:d,width:"100%",src:"https://www.youtube-nocookie.com/embed/dYhuX00XZNw?autoplay=1&mute=1&loop=1&playlist=dYhuX00XZNw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",style:M([{"border-radius":"12px"},{height:`${g.value}px`}])},null,4))])]),_:1}),s(C,{cols:"12"},{default:a(()=>[s(p,{name:"fade"},{default:a(()=>[x.value?(i(),u("div",zt,[s(z,{class:"text-none",rounded:"lg",variant:"text",size:"x-large"},{default:a(()=>[o[9]||(o[9]=v("img",{src:rt,class:"mr-2"},null,-1)),I(" "+c(l.$t("message.home.join"))+" "+c(l.$t("message.feedback.Discord")),1)]),_:1}),s(ct,{"open-on-hover":""},{activator:a(r=>[s(z,ft({class:"text-none",rounded:"lg",variant:"text"},r.props,{size:"x-large"}),{default:a(()=>[o[10]||(o[10]=v("img",{src:mt,class:"mr-2"},null,-1)),I(" "+c(l.$t("message.home.join"))+" "+c(l.$t("message.feedback.Wechat")),1)]),_:2},1040)]),default:a(()=>[o[11]||(o[11]=v("div",null,[v("img",{src:ut,width:"200"})],-1))]),_:1})])):m("",!0)]),_:1})]),_:1})]),_:1})])),[[q,{handler:(r,k)=>{x.value=k[0].intersectionRatio>=.5||x.value},options:{threshold:[0,.5,1]}}]]),t.value!=="faq"?(i(),u("div",qt,[v("div",Gt,[v("div",{class:"d-flex align-center justify-center cursor-pointer",style:M([{height:"48px",color:"#000",transition:"all 0.3s ease"},{opacity:t.value==="timeline"||t.value==="tab"?1:.5}]),onClick:o[3]||(o[3]=r=>W("timeline"))},c(l.$t("message.home.section.timeline.title")),5),v("div",{class:"d-flex align-center justify-center cursor-pointer",style:M([{height:"48px",color:"#000",transition:"all 0.3s ease"},{opacity:t.value==="folders"||t.value==="tab"?1:.5}]),onClick:o[4]||(o[4]=r=>W("folders"))},c(l.$t("message.home.section.folders.title")),5),v("div",{class:"d-flex align-center justify-center cursor-pointer",style:M([{height:"48px",color:"#000",transition:"all 0.3s ease"},{opacity:t.value==="watchMode"||t.value==="tab"?1:.5}]),onClick:o[5]||(o[5]=r=>W("watchMode"))},c(l.$t("message.home.section.watchMode.title")),5),v("div",{class:"d-flex align-center justify-center cursor-pointer",style:M([{height:"48px",color:"#000",transition:"all 0.3s ease"},{opacity:t.value==="privacy"||t.value==="tab"?1:.5}]),onClick:o[6]||(o[6]=r=>W("privacy"))},c(l.$t("message.home.section.privacy.title")),5),v("div",{class:"d-flex align-center justify-center cursor-pointer",style:M([{height:"48px",color:"#000",transition:"all 0.3s ease"},{opacity:t.value==="unlimited"||t.value==="tab"?1:.5}]),onClick:o[7]||(o[7]=r=>W("unlimited"))},c(l.$t("message.home.section.unlimited.title")),5)])])):m("",!0),T((i(),u("div",{ref_key:"timelineSection",ref:h,class:"d-flex justify-center mb-6 px-16"},[s(G,{class:"overflow-hidden ma-0 pa-0",style:{"max-width":"1296px",width:"100%",background:"#ede7f6","border-radius":"30px"}},{default:a(()=>[s(C,{cols:"6",style:{padding:"24px 95px 24px 79px"},class:"d-flex flex-column justify-center align-center"},{default:a(()=>[s(p,{name:"fade"},{default:a(()=>[b.value?(i(),u("div",Dt,c(l.$t("message.home.section.timeline.title")),1)):m("",!0)]),_:1}),s(p,{name:"fade"},{default:a(()=>[b.value?(i(),u("div",Ot,c(l.$t("message.home.section.timeline.subtitle")),1)):m("",!0)]),_:1}),s(p,{name:"fade"},{default:a(()=>[b.value?(i(),u("div",Ht,c(l.$t("message.home.section.timeline.content")),1)):m("",!0)]),_:1})]),_:1}),s(C,{cols:"6",class:"overflow-hidden ma-0",style:{padding:"80px"}},{default:a(()=>o[12]||(o[12]=[v("img",{src:pt,style:{width:"100%",height:"100%","border-radius":"30px"}},null,-1)])),_:1})]),_:1})])),[[q,{handler:(r,k)=>{b.value=k[0].intersectionRatio>=.5||b.value},options:{threshold:[0,.5,1]}}]]),T((i(),u("div",{ref_key:"foldersSection",ref:y,class:"d-flex justify-center mb-6 px-16"},[s(G,{class:"overflow-hidden ma-0 pa-0",style:{"max-width":"1296px",width:"100%",background:"#fbe9e7","border-radius":"30px"}},{default:a(()=>[s(C,{cols:"6",class:"overflow-hidden ma-0",style:{padding:"80px"}},{default:a(()=>o[13]||(o[13]=[v("img",{src:gt,style:{width:"100%",height:"100%","border-radius":"30px"}},null,-1)])),_:1}),s(C,{cols:"6",style:{padding:"24px 95px 24px 79px"},class:"d-flex flex-column justify-center align-center"},{default:a(()=>[s(p,{name:"fade"},{default:a(()=>[V.value?(i(),u("div",Wt,c(l.$t("message.home.section.folders.title")),1)):m("",!0)]),_:1}),s(p,{name:"fade"},{default:a(()=>[V.value?(i(),u("div",Ft,c(l.$t("message.home.section.folders.subtitle")),1)):m("",!0)]),_:1}),s(p,{name:"fade"},{default:a(()=>[V.value?(i(),u("div",Ut,c(l.$t("message.home.section.folders.content")),1)):m("",!0)]),_:1})]),_:1})]),_:1})])),[[q,{handler:(r,k)=>{V.value=k[0].intersectionRatio>=.5||V.value},options:{threshold:[0,.5,1]}}]]),T((i(),u("div",{ref_key:"watchModeSection",ref:_,class:"d-flex justify-center mb-6 px-16"},[s(G,{class:"overflow-hidden ma-0 pa-0",style:{"max-width":"1296px",width:"100%",background:"#e0f7fa","border-radius":"30px"}},{default:a(()=>[s(C,{cols:"6",style:{padding:"24px 95px 24px 79px"},class:"d-flex flex-column justify-center align-center"},{default:a(()=>[s(p,{name:"fade"},{default:a(()=>[L.value?(i(),u("div",Xt,c(l.$t("message.home.section.watchMode.title")),1)):m("",!0)]),_:1}),s(p,{name:"fade"},{default:a(()=>[L.value?(i(),u("div",Kt,c(l.$t("message.home.section.watchMode.subtitle")),1)):m("",!0)]),_:1}),s(p,{name:"fade"},{default:a(()=>[L.value?(i(),u("div",Yt,c(l.$t("message.home.section.watchMode.content")),1)):m("",!0)]),_:1})]),_:1}),s(C,{cols:"6",class:"overflow-hidden ma-0",style:{padding:"80px"}},{default:a(()=>o[14]||(o[14]=[v("img",{src:yt,style:{width:"100%",height:"100%","border-radius":"30px"}},null,-1)])),_:1})]),_:1})])),[[q,{handler:(r,k)=>{L.value=k[0].intersectionRatio>=.5||L.value},options:{threshold:[0,.5,1]}}]]),T((i(),u("div",{ref_key:"privacySection",ref:S,class:"d-flex justify-center mb-6 px-16"},[s(G,{class:"overflow-hidden ma-0 pa-0",style:{"max-width":"1296px",width:"100%",background:"#e8eaf6","border-radius":"30px"}},{default:a(()=>[s(C,{cols:"6",class:"overflow-hidden ma-0",style:{padding:"80px"}},{default:a(()=>o[15]||(o[15]=[v("img",{src:ht,style:{width:"100%",height:"100%","border-radius":"30px"}},null,-1)])),_:1}),s(C,{cols:"6",style:{padding:"24px 95px 24px 79px"},class:"d-flex flex-column justify-center align-center"},{default:a(()=>[s(p,{name:"fade"},{default:a(()=>[E.value?(i(),u("div",Zt,c(l.$t("message.home.section.privacy.title")),1)):m("",!0)]),_:1}),s(p,{name:"fade"},{default:a(()=>[E.value?(i(),u("div",Jt,c(l.$t("message.home.section.privacy.subtitle")),1)):m("",!0)]),_:1}),s(p,{name:"fade"},{default:a(()=>[E.value?(i(),u("div",Qt,c(l.$t("message.home.section.privacy.content")),1)):m("",!0)]),_:1})]),_:1})]),_:1})])),[[q,{handler:(r,k)=>{E.value=k[0].intersectionRatio>=.5||E.value},options:{threshold:[0,.5,1]}}]]),T((i(),u("div",{ref_key:"unlimitedSection",ref:$,class:"d-flex justify-center mb-6 px-16"},[s(G,{class:"overflow-hidden ma-0 pa-0",style:{"max-width":"1296px",width:"100%",background:"#f1f8e9","border-radius":"30px"}},{default:a(()=>[s(C,{cols:"6",style:{padding:"24px 95px 24px 79px"},class:"d-flex flex-column justify-center align-center"},{default:a(()=>[s(p,{name:"fade"},{default:a(()=>[H.value?(i(),u("div",es,c(l.$t("message.home.section.unlimited.title")),1)):m("",!0)]),_:1}),s(p,{name:"fade"},{default:a(()=>[H.value?(i(),u("div",ts,c(l.$t("message.home.section.unlimited.subtitle")),1)):m("",!0)]),_:1}),s(p,{name:"fade"},{default:a(()=>[H.value?(i(),u("div",ss,c(l.$t("message.home.section.unlimited.content")),1)):m("",!0)]),_:1})]),_:1}),s(C,{cols:"6",class:"overflow-hidden ma-0",style:{padding:"80px"}},{default:a(()=>o[16]||(o[16]=[v("img",{src:xt,style:{width:"100%",height:"100%","border-radius":"30px"}},null,-1)])),_:1})]),_:1})])),[[q,{handler:(r,k)=>{H.value=k[0].intersectionRatio>=.5||H.value},options:{threshold:[0,.5,1]}}]]),v("div",{ref_key:"faqSection",ref:B,class:"d-flex justify-center pb-6 px-16",style:{"margin-top":"230px","margin-bottom":"100px"}},[v("div",ns,[o[17]||(o[17]=v("div",{class:"text-h3 text-center my-16"},"FAQ",-1)),s(_t,{variant:"accordion",elevation:"0",style:{"border-right-width":"0","border-left-width":"0","border-top-width":"thin","border-bottom-width":"thin","border-color":"rgba(var(--v-border-color), var(--v-border-opacity))","border-style":"solid"}},{default:a(()=>[(i(!0),u(Q,null,vt(Te.value,r=>(i(),N(bt,{key:r,height:"73"},{default:a(()=>[s(te,{class:"text-subtitle-1 font-weight-bold",style:{"font-size":"1.3rem !important"}},{default:a(()=>[I(c(l.$t(`message.home.faq.${r}.q`)),1)]),_:2},1024),s(ee,{class:"tetx-body-1",style:{"font-size":"1.2rem !important"}},{default:a(()=>[v("div",{innerHTML:l.$t(`message.home.faq.${r}.a`)},null,8,as)]),_:2},1024)]),_:2},1024))),128))]),_:1})])],512)],64))}});export{os as default};
