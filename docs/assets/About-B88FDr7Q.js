import{i as Y,s as R,p as X,t as A,w as Ae,r as x,a as L,u as se,c as g,o as Ve,g as st,b as w,d as it,e as rt,I as F,m as H,f as q,h as j,j as ot,k as K,l as o,V as ie,M as ct,n as ut,q as Ie,v as dt,x as vt,E as G,y as Pe,z as Le,A as Be,B as Oe,C as Te,D as ft,F as Fe,G as Me,R as gt,H as mt,J as yt,K as $e,L as je,N as ht,O as Ne,P as De,Q as Ge,S as Ee,T as bt,U as pt,W as St,X as z,Y as Se,Z as _e,_ as _t,$ as wt,a0 as we,a1 as kt,a2 as Ct,a3 as xt,a4 as At,a5 as D,a6 as Vt,a7 as $,a8 as ce,a9 as h,aa as ue,ab as de,ac as M,ad as ve,ae as Re,af as It,ag as S,ah as Q,ai as ze,aj as fe,ak as Pt,al as ke,am as Ce,an as E,ao as Lt,ap as Bt,aq as Ot,ar as Tt,as as Ft,at as Mt}from"./index-DUdjaRqH.js";const $t="/zoom-website/assets/customize_bg.png",re=Symbol.for("vuetify:list");function Ue(){const e=Y(re,{hasPrepend:R(!1),updateHasPrepend:()=>null}),s={hasPrepend:R(!1),updateHasPrepend:t=>{t&&(s.hasPrepend.value=t)}};return X(re,s),e}function He(){return Y(re,null)}const ge=e=>{const s={activate:t=>{let{id:a,value:l,activated:n}=t;return a=A(a),e&&!l&&n.size===1&&n.has(a)||(l?n.add(a):n.delete(a)),n},in:(t,a,l)=>{let n=new Set;if(t!=null)for(const i of Ae(t))n=s.activate({id:i,value:!0,activated:new Set(n),children:a,parents:l});return n},out:t=>Array.from(t)};return s},qe=e=>{const s=ge(e);return{activate:a=>{let{activated:l,id:n,...i}=a;n=A(n);const c=l.has(n)?new Set([n]):new Set;return s.activate({...i,id:n,activated:c})},in:(a,l,n)=>{let i=new Set;if(a!=null){const c=Ae(a);c.length&&(i=s.in(c.slice(0,1),l,n))}return i},out:(a,l,n)=>s.out(a,l,n)}},jt=e=>{const s=ge(e);return{activate:a=>{let{id:l,activated:n,children:i,...c}=a;return l=A(l),i.has(l)?n:s.activate({id:l,activated:n,children:i,...c})},in:s.in,out:s.out}},Nt=e=>{const s=qe(e);return{activate:a=>{let{id:l,activated:n,children:i,...c}=a;return l=A(l),i.has(l)?n:s.activate({id:l,activated:n,children:i,...c})},in:s.in,out:s.out}},Dt={open:e=>{let{id:s,value:t,opened:a,parents:l}=e;if(t){const n=new Set;n.add(s);let i=l.get(s);for(;i!=null;)n.add(i),i=l.get(i);return n}else return a.delete(s),a},select:()=>null},Ke={open:e=>{let{id:s,value:t,opened:a,parents:l}=e;if(t){let n=l.get(s);for(a.add(s);n!=null&&n!==s;)a.add(n),n=l.get(n);return a}else a.delete(s);return a},select:()=>null},Gt={open:Ke.open,select:e=>{let{id:s,value:t,opened:a,parents:l}=e;if(!t)return a;const n=[];let i=l.get(s);for(;i!=null;)n.push(i),i=l.get(i);return new Set(n)}},me=e=>{const s={select:t=>{let{id:a,value:l,selected:n}=t;if(a=A(a),e&&!l){const i=Array.from(n.entries()).reduce((c,_)=>{let[f,m]=_;return m==="on"&&c.push(f),c},[]);if(i.length===1&&i[0]===a)return n}return n.set(a,l?"on":"off"),n},in:(t,a,l)=>{let n=new Map;for(const i of t||[])n=s.select({id:i,value:!0,selected:new Map(n),children:a,parents:l});return n},out:t=>{const a=[];for(const[l,n]of t.entries())n==="on"&&a.push(l);return a}};return s},We=e=>{const s=me(e);return{select:a=>{let{selected:l,id:n,...i}=a;n=A(n);const c=l.has(n)?new Map([[n,l.get(n)]]):new Map;return s.select({...i,id:n,selected:c})},in:(a,l,n)=>{let i=new Map;return a!=null&&a.length&&(i=s.in(a.slice(0,1),l,n)),i},out:(a,l,n)=>s.out(a,l,n)}},Et=e=>{const s=me(e);return{select:a=>{let{id:l,selected:n,children:i,...c}=a;return l=A(l),i.has(l)?n:s.select({id:l,selected:n,children:i,...c})},in:s.in,out:s.out}},Rt=e=>{const s=We(e);return{select:a=>{let{id:l,selected:n,children:i,...c}=a;return l=A(l),i.has(l)?n:s.select({id:l,selected:n,children:i,...c})},in:s.in,out:s.out}},zt=e=>{const s={select:t=>{let{id:a,value:l,selected:n,children:i,parents:c}=t;a=A(a);const _=new Map(n),f=[a];for(;f.length;){const b=f.shift();n.set(b,l?"on":"off"),i.has(b)&&f.push(...i.get(b))}let m=c.get(a);for(;m;){const b=i.get(m),p=b.every(u=>n.get(u)==="on"),r=b.every(u=>!n.has(u)||n.get(u)==="off");n.set(m,p?"on":r?"off":"indeterminate"),m=c.get(m)}return e&&!l&&Array.from(n.entries()).reduce((p,r)=>{let[u,d]=r;return d==="on"&&p.push(u),p},[]).length===0?_:n},in:(t,a,l)=>{let n=new Map;for(const i of t||[])n=s.select({id:i,value:!0,selected:new Map(n),children:a,parents:l});return n},out:(t,a)=>{const l=[];for(const[n,i]of t.entries())i==="on"&&!a.has(n)&&l.push(n);return l}};return s},U=Symbol.for("vuetify:nested"),Qe={id:R(),root:{register:()=>null,unregister:()=>null,parents:x(new Map),children:x(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:x(!1),selectable:x(!1),opened:x(new Set),activated:x(new Set),selected:x(new Map),selectedValues:x([])}},Ut=L({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Ht=e=>{let s=!1;const t=x(new Map),a=x(new Map),l=se(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),n=g(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return jt(e.mandatory);case"single-leaf":return Nt(e.mandatory);case"independent":return ge(e.mandatory);case"single-independent":default:return qe(e.mandatory)}}),i=g(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Rt(e.mandatory);case"leaf":return Et(e.mandatory);case"independent":return me(e.mandatory);case"single-independent":return We(e.mandatory);case"classic":default:return zt(e.mandatory)}}),c=g(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Gt;case"single":return Dt;case"multiple":default:return Ke}}),_=se(e,"activated",e.activated,r=>n.value.in(r,t.value,a.value),r=>n.value.out(r,t.value,a.value)),f=se(e,"selected",e.selected,r=>i.value.in(r,t.value,a.value),r=>i.value.out(r,t.value,a.value));Ve(()=>{s=!0});function m(r){const u=[];let d=r;for(;d!=null;)u.unshift(d),d=a.value.get(d);return u}const b=st("nested"),p={id:R(),root:{opened:l,activatable:w(e,"activatable"),selectable:w(e,"selectable"),activated:_,selected:f,selectedValues:g(()=>{const r=[];for(const[u,d]of f.value.entries())d==="on"&&r.push(u);return r}),register:(r,u,d)=>{u&&r!==u&&a.value.set(r,u),d&&t.value.set(r,[]),u!=null&&t.value.set(u,[...t.value.get(u)||[],r])},unregister:r=>{if(s)return;t.value.delete(r);const u=a.value.get(r);if(u){const d=t.value.get(u)??[];t.value.set(u,d.filter(v=>v!==r))}a.value.delete(r)},open:(r,u,d)=>{b.emit("click:open",{id:r,value:u,path:m(r),event:d});const v=c.value.open({id:r,value:u,opened:new Set(l.value),children:t.value,parents:a.value,event:d});v&&(l.value=v)},openOnSelect:(r,u,d)=>{const v=c.value.select({id:r,value:u,selected:new Map(f.value),opened:new Set(l.value),children:t.value,parents:a.value,event:d});v&&(l.value=v)},select:(r,u,d)=>{b.emit("click:select",{id:r,value:u,path:m(r),event:d});const v=i.value.select({id:r,value:u,selected:new Map(f.value),children:t.value,parents:a.value,event:d});v&&(f.value=v),p.root.openOnSelect(r,u,d)},activate:(r,u,d)=>{if(!e.activatable)return p.root.select(r,!0,d);b.emit("click:activate",{id:r,value:u,path:m(r),event:d});const v=n.value.activate({id:r,value:u,activated:new Set(_.value),children:t.value,parents:a.value,event:d});v&&(_.value=v)},children:t,parents:a}};return X(U,p),p.root},Ye=(e,s)=>{const t=Y(U,Qe),a=Symbol(it()),l=g(()=>e.value!==void 0?e.value:a),n={...t,id:l,open:(i,c)=>t.root.open(l.value,i,c),openOnSelect:(i,c)=>t.root.openOnSelect(l.value,i,c),isOpen:g(()=>t.root.opened.value.has(l.value)),parent:g(()=>t.root.parents.value.get(l.value)),activate:(i,c)=>t.root.activate(l.value,i,c),isActivated:g(()=>t.root.activated.value.has(A(l.value))),select:(i,c)=>t.root.select(l.value,i,c),isSelected:g(()=>t.root.selected.value.get(A(l.value))==="on"),isIndeterminate:g(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:g(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,s),Ve(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),s&&X(U,n),n},qt=()=>{const e=Y(U,Qe);X(U,{...e,isGroupActivator:!0})},Kt=rt({name:"VListGroupActivator",setup(e,s){let{slots:t}=s;return qt(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),Wt=L({activeColor:String,baseColor:String,color:String,collapseIcon:{type:F,default:"$collapse"},expandIcon:{type:F,default:"$expand"},prependIcon:F,appendIcon:F,fluid:Boolean,subgroup:Boolean,title:String,value:null,...H(),...q()},"VListGroup"),xe=j()({name:"VListGroup",props:Wt(),setup(e,s){let{slots:t}=s;const{isOpen:a,open:l,id:n}=Ye(w(e,"value"),!0),i=g(()=>`v-list-group--id-${String(n.value)}`),c=He(),{isBooted:_}=ot();function f(r){r.stopPropagation(),l(!a.value,r)}const m=g(()=>({onClick:f,class:"v-list-group__header",id:i.value})),b=g(()=>a.value?e.collapseIcon:e.expandIcon),p=g(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&b.value,appendIcon:e.appendIcon||!e.subgroup&&b.value,title:e.title,value:e.value}}));return K(()=>o(e.tag,{class:["v-list-group",{"v-list-group--prepend":c==null?void 0:c.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&o(ie,{defaults:p.value},{default:()=>[o(Kt,null,{default:()=>[t.activator({props:m.value,isOpen:a.value})]})]}),o(ct,{transition:{component:ut},disabled:!_.value},{default:()=>{var r;return[Ie(o("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(r=t.default)==null?void 0:r.call(t)]),[[dt,a.value]])]}})]})),{isOpen:a}}}),Qt=L({opacity:[Number,String],...H(),...q()},"VListItemSubtitle"),Yt=j()({name:"VListItemSubtitle",props:Qt(),setup(e,s){let{slots:t}=s;return K(()=>o(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Xt=vt("v-list-item-title"),Jt=L({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:F,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:F,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:G(),onClickOnce:G(),...Pe(),...H(),...Le(),...Be(),...Oe(),...Te(),...ft(),...q(),...Fe(),...Me({variant:"text"})},"VListItem"),oe=j()({name:"VListItem",directives:{Ripple:gt},props:Jt(),emits:{click:e=>!0},setup(e,s){let{attrs:t,slots:a,emit:l}=s;const n=mt(e,t),i=g(()=>e.value===void 0?n.href.value:e.value),{activate:c,isActivated:_,select:f,isSelected:m,isIndeterminate:b,isGroupActivator:p,root:r,parent:u,openOnSelect:d}=Ye(i,!1),v=He(),I=g(()=>{var y;return e.active!==!1&&(e.active||((y=n.isActive)==null?void 0:y.value)||(r.activatable.value?_.value:m.value))}),N=g(()=>e.link!==!1&&n.isLink.value),V=g(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||!!v&&(r.selectable.value||r.activatable.value||e.value!=null))),B=g(()=>e.rounded||e.nav),O=g(()=>e.color??e.activeColor),J=g(()=>({color:I.value?O.value??e.baseColor:e.baseColor,variant:e.variant}));yt(()=>{var y;return(y=n.isActive)==null?void 0:y.value},y=>{y&&u.value!=null&&r.open(u.value,!0),y&&d(y)},{immediate:!0});const{themeClasses:Z}=$e(e),{borderClasses:ee}=je(e),{colorClasses:te,colorStyles:ae,variantClasses:P}=ht(J),{densityClasses:k}=Ne(e),{dimensionStyles:T}=De(e),{elevationClasses:Ze}=Ge(e),{roundedClasses:et}=Ee(B),tt=g(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ne=g(()=>({isActive:I.value,select:f,isSelected:m.value,isIndeterminate:b.value}));function ye(y){var W;l("click",y),V.value&&((W=n.navigate)==null||W.call(n,y),!p&&(r.activatable.value?c(!_.value,y):(r.selectable.value||e.value!=null)&&f(!m.value,y)))}function at(y){(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),ye(y))}return K(()=>{const y=N.value?"a":e.tag,W=a.title||e.title!=null,nt=a.subtitle||e.subtitle!=null,he=!!(e.appendAvatar||e.appendIcon),lt=!!(he||a.append),be=!!(e.prependAvatar||e.prependIcon),le=!!(be||a.prepend);return v==null||v.updateHasPrepend(le),e.activeColor&&bt("active-color",["color","base-color"]),Ie(o(y,{class:["v-list-item",{"v-list-item--active":I.value,"v-list-item--disabled":e.disabled,"v-list-item--link":V.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!le&&(v==null?void 0:v.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&I.value},Z.value,ee.value,te.value,k.value,Ze.value,tt.value,et.value,P.value,e.class],style:[ae.value,T.value,e.style],href:n.href.value,tabindex:V.value?v?-2:0:void 0,onClick:ye,onKeydown:V.value&&!N.value&&at},{default:()=>{var pe;return[St(V.value||I.value,"v-list-item"),le&&o("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?o(ie,{key:"prepend-defaults",disabled:!be,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var C;return[(C=a.prepend)==null?void 0:C.call(a,ne.value)]}}):o(z,null,[e.prependAvatar&&o(Se,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&o(_e,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),o("div",{class:"v-list-item__spacer"},null)]),o("div",{class:"v-list-item__content","data-no-activator":""},[W&&o(Xt,{key:"title"},{default:()=>{var C;return[((C=a.title)==null?void 0:C.call(a,{title:e.title}))??e.title]}}),nt&&o(Yt,{key:"subtitle"},{default:()=>{var C;return[((C=a.subtitle)==null?void 0:C.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(pe=a.default)==null?void 0:pe.call(a,ne.value)]),lt&&o("div",{key:"append",class:"v-list-item__append"},[a.append?o(ie,{key:"append-defaults",disabled:!he,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var C;return[(C=a.append)==null?void 0:C.call(a,ne.value)]}}):o(z,null,[e.appendIcon&&o(_e,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&o(Se,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),o("div",{class:"v-list-item__spacer"},null)])]}}),[[pt("ripple"),V.value&&e.ripple]])}),{activate:c,isActivated:_,isGroupActivator:p,isSelected:m,list:v,select:f}}}),Zt=L({color:String,inset:Boolean,sticky:Boolean,title:String,...H(),...q()},"VListSubheader"),ea=j()({name:"VListSubheader",props:Zt(),setup(e,s){let{slots:t}=s;const{textColorClasses:a,textColorStyles:l}=_t(w(e,"color"));return K(()=>{const n=!!(t.default||e.title);return o(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var i;return[n&&o("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),ta=L({items:Array,returnObject:Boolean},"VListChildren"),Xe=j()({name:"VListChildren",props:ta(),setup(e,s){let{slots:t}=s;return Ue(),()=>{var a,l;return((a=t.default)==null?void 0:a.call(t))??((l=e.items)==null?void 0:l.map(n=>{var p,r;let{children:i,props:c,type:_,raw:f}=n;if(_==="divider")return((p=t.divider)==null?void 0:p.call(t,{props:c}))??o(wt,c,null);if(_==="subheader")return((r=t.subheader)==null?void 0:r.call(t,{props:c}))??o(ea,c,null);const m={subtitle:t.subtitle?u=>{var d;return(d=t.subtitle)==null?void 0:d.call(t,{...u,item:f})}:void 0,prepend:t.prepend?u=>{var d;return(d=t.prepend)==null?void 0:d.call(t,{...u,item:f})}:void 0,append:t.append?u=>{var d;return(d=t.append)==null?void 0:d.call(t,{...u,item:f})}:void 0,title:t.title?u=>{var d;return(d=t.title)==null?void 0:d.call(t,{...u,item:f})}:void 0},b=xe.filterProps(c);return i?o(xe,we({value:c==null?void 0:c.value},b),{activator:u=>{let{props:d}=u;const v={...c,...d,value:e.returnObject?f:c.value};return t.header?t.header({props:v}):o(oe,v,m)},default:()=>o(Xe,{items:i,returnObject:e.returnObject},t)}):t.item?t.item({props:c}):o(oe,we(c,{value:e.returnObject?f:c.value}),m)}))}}}),aa=L({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:kt}},"list-items");function na(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function la(e,s){const t=D(s,e.itemType,"item"),a=na(s)?s:D(s,e.itemTitle),l=D(s,e.itemValue,void 0),n=D(s,e.itemChildren),i=e.itemProps===!0?Vt(s,["children"]):D(s,e.itemProps),c={title:a,value:l,...i};return{type:t,title:c.title,value:c.value,props:c,children:t==="item"&&n?Je(e,n):void 0,raw:s}}function Je(e,s){const t=[];for(const a of s)t.push(la(e,a));return t}function sa(e){return{items:g(()=>Je(e,e.items))}}const ia=L({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":G(),"onClick:select":G(),"onUpdate:opened":G(),...Ut({selectStrategy:"single-leaf",openStrategy:"list"}),...Pe(),...H(),...Le(),...Be(),...Oe(),itemType:{type:String,default:"type"},...aa(),...Te(),...q(),...Fe(),...Me({variant:"text"})},"VList"),ra=j()({name:"VList",props:ia(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,s){let{slots:t}=s;const{items:a}=sa(e),{themeClasses:l}=$e(e),{backgroundColorClasses:n,backgroundColorStyles:i}=Ct(w(e,"bgColor")),{borderClasses:c}=je(e),{densityClasses:_}=Ne(e),{dimensionStyles:f}=De(e),{elevationClasses:m}=Ge(e),{roundedClasses:b}=Ee(e),{children:p,open:r,parents:u,select:d}=Ht(e),v=g(()=>e.lines?`v-list--${e.lines}-line`:void 0),I=w(e,"activeColor"),N=w(e,"baseColor"),V=w(e,"color");Ue(),xt({VListGroup:{activeColor:I,baseColor:N,color:V,expandIcon:w(e,"expandIcon"),collapseIcon:w(e,"collapseIcon")},VListItem:{activeClass:w(e,"activeClass"),activeColor:I,baseColor:N,color:V,density:w(e,"density"),disabled:w(e,"disabled"),lines:w(e,"lines"),nav:w(e,"nav"),slim:w(e,"slim"),variant:w(e,"variant")}});const B=R(!1),O=x();function J(k){B.value=!0}function Z(k){B.value=!1}function ee(k){var T;!B.value&&!(k.relatedTarget&&((T=O.value)!=null&&T.contains(k.relatedTarget)))&&P()}function te(k){const T=k.target;if(!(!O.value||["INPUT","TEXTAREA"].includes(T.tagName))){if(k.key==="ArrowDown")P("next");else if(k.key==="ArrowUp")P("prev");else if(k.key==="Home")P("first");else if(k.key==="End")P("last");else return;k.preventDefault()}}function ae(k){B.value=!0}function P(k){if(O.value)return At(O.value,k)}return K(()=>o(e.tag,{ref:O,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,n.value,c.value,_.value,m.value,v.value,b.value,e.class],style:[i.value,f.value,e.style],tabindex:e.disabled||B.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:J,onFocusout:Z,onFocus:ee,onKeydown:te,onMousedown:ae},{default:()=>[o(Xe,{items:a.value,returnObject:e.returnObject},t)]})),{open:r,select:d,focus:P,children:p,parents:u}}}),oa=["src"],ca={class:"text-h6 font-weight-bold"},ua={class:"text-body-1 text-grey-darken-3"},da={__name:"CustomizeSection",setup(e){const s=[{icon:"./assets/customize.png",title:"Customize your workflow",subtitle:"Manage any process and be ready to address any challenge with total ease."},{icon:"./assets/onboarding.png",title:"Easy onboarding, fast adoption.",subtitle:"With Square getting your team on board is as simple as sending an email."},{icon:"./assets/retention.png",title:"Improve subscriber retention",subtitle:"Analyze customers by region, discounts and more and put a plan in place."}];return(t,a)=>($(),ce(fe,{class:"py-16",color:"secondary"},{default:h(()=>[o(ue,null,{default:h(()=>[o(de,{align:"center"},{default:h(()=>[o(M,{cols:"12",md:"7"},{default:h(()=>[o(ra,{"base-color":"transparent","bg-color":"transparent",class:"px-2",lines:"three",variant:"flat"},{default:h(()=>[($(),ve(z,null,Re(s,(l,n)=>o(oe,{key:l.title,class:It(["ga-5",{"bg-grey-lighten-5 elevation-5 rounded":n===0}])},{prepend:h(()=>[S("img",{src:l.icon},null,8,oa)]),title:h(()=>[S("span",ca,Q(l.title),1)]),subtitle:h(()=>[S("span",ua,Q(l.subtitle),1)]),_:2},1032,["class"])),64))]),_:1})]),_:1}),o(M,{cols:"12",md:"5"},{default:h(()=>[o(ze,{src:$t})]),_:1})]),_:1})]),_:1})]),_:1}))}},va={},fa=S("div",{class:"text-h4 font-weight-bold"}," Great pricing plans tailored to your needs. ",-1),ga=S("div",{class:"text-body-1 text-medium-emphasis mt-5"}," Quis autem velis ets reprehender net etid quiste voluptate. Utise wisi enim minim veniam, quis et stationes nets. ",-1),ma=S("div",{class:"text-h6 font-weight-bold"}," MONTHLY ",-1),ya=S("div",{class:"text-h2 font-weight-bold"}," $19 ",-1),ha=S("div",{class:"text-body-1 text-medium-emphasis"}," Per Month ",-1),ba=S("div",{class:"text-center text-body-1 text-medium-emphasis"},[E(" First two weeks free. "),S("br"),E(" Amazing features. ")],-1),pa=S("div",{class:"text-h6 font-weight-bold"}," ANNUALY ",-1),Sa=S("div",{class:"text-h2 font-weight-bold"}," $29 ",-1),_a=S("div",{class:"text-body-1 text-white"}," Per Month ",-1),wa=S("div",{class:"text-center text-body-1"},[E(" First two weeks free. "),S("br"),E(" Save 45% with this plan"),S("br"),E("Amazing features. ")],-1);function ka(e,s){return $(),ce(fe,{id:"pricing",class:"d-flex align-center py-16",color:"secondary"},{default:h(()=>[o(ue,null,{default:h(()=>[o(de,{class:"d-flex align-center"},{default:h(()=>[o(M,{cols:"12",md:"5"},{default:h(()=>[fa,ga]),_:1}),o(M,{cols:"12",md:"3"},{default:h(()=>[o(ke,{class:"pt-10 pb-5 d-flex flex-column align-center justify-center ga-5",elevation:"5"},{default:h(()=>[ma,ya,ha,o(Ce,{class:"text-body-1 font-weight-bold",color:"surface-variant",flat:"",rounded:"",text:"GET STARTED"}),ba]),_:1})]),_:1}),o(M,{cols:"12",md:"4"},{default:h(()=>[o(ke,{class:"pt-10 pb-5 d-flex flex-column align-center justify-center ga-10",color:"primary",elevation:"5"},{default:h(()=>[pa,Sa,_a,o(Ce,{class:"px-10 text-body-1",color:"accent",flat:"",height:"55",rounded:"",text:"GET IN TOUCH"}),wa]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Ca=Pt(va,[["render",ka]]),xa=S("div",{class:"text-h3 font-weight-bold mb-5 mb-12"}," Fun Facts About Our Agency ",-1),Aa={class:"text-h4 font-weight-bold mt-5"},Va={class:"text-body-1 mt-5"},Ia={__name:"FunFactsSection",setup(e){const s=[{icon:"/assets/agency/completed.png",title:"1050+",description:"Projects Completed"},{icon:"/assets/agency/heart.png",title:"217k",description:"Happy Clients"},{icon:"/assets/agency/awards.png",title:"1210",description:"Design Awards"},{icon:"/assets/agency/anchor.png",title:"2137",description:"Line Of Codes"}];return(t,a)=>($(),ce(fe,{class:"text-center pa-16",color:"accent"},{default:h(()=>[xa,o(ue,null,{default:h(()=>[o(de,{align:"center",class:"mx-15"},{default:h(()=>[($(),ve(z,null,Re(s,l=>o(M,{key:l.title,cols:"12",md:"3",sm:"6"},{default:h(()=>[o(ze,{height:"56",src:l.icon},null,8,["src"]),S("div",Aa,Q(l.title),1),S("div",Va,Q(l.description),1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}},La={__name:"About",setup(e){return(s,t)=>($(),ve(z,null,[o(Lt),o(Bt),o(da),o(Ia),o(Ot),o(Tt),o(Ft),o(Ca),o(Mt)],64))}};export{La as default};
