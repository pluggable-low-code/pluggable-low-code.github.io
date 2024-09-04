import{r as i}from"./index-CjPfdrK1.js";import{a4 as ue,a5 as me,g as Y,u as f,C as Z,o as V,c as M,am as Q,h3 as Ie,V as Se,bC as Ce,a2 as K,bo as xe,h4 as Be,be as ye,bc as we,aY as Oe,z as He,y as ee,c2 as Te,ad as te,af as Ee,aP as oe,r as ze,aE as ne,cq as je,h5 as Me,W as ke,h6 as De,D as Pe,A as Re,bB as Ne,bl as Ae,c3 as Le,h7 as We}from"./index-CEF5Rj8z.js";var _e={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},Xe=function(o,e){return i.createElement(ue,me({},o,{ref:e,icon:_e}))},qe=i.forwardRef(Xe),Ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},Ge=function(o,e){return i.createElement(ue,me({},o,{ref:e,icon:Ve}))},re=i.forwardRef(Ge);const Fe=t=>!isNaN(parseFloat(t))&&isFinite(t),Ye=i.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}}),Ze=t=>{const{antCls:o,componentCls:e,colorText:r,footerBg:n,headerHeight:l,headerPadding:s,headerColor:d,footerPadding:a,fontSize:u,bodyBg:g,headerBg:p}=t;return{[e]:{display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:g,"&, *":{boxSizing:"border-box"},[`&${e}-has-sider`]:{flexDirection:"row",[`> ${e}, > ${e}-content`]:{width:0}},[`${e}-header, &${e}-footer`]:{flex:"0 0 auto"},"&-rtl":{direction:"rtl"}},[`${e}-header`]:{height:l,padding:s,color:d,lineHeight:f(l),background:p,[`${o}-menu`]:{lineHeight:"inherit"}},[`${e}-footer`]:{padding:a,color:r,fontSize:u,background:n},[`${e}-content`]:{flex:"auto",color:r,minHeight:0}}},ge=t=>{const{colorBgLayout:o,controlHeight:e,controlHeightLG:r,colorText:n,controlHeightSM:l,marginXXS:s,colorTextLightSolid:d,colorBgContainer:a}=t,u=r*1.25;return{colorBgHeader:"#001529",colorBgBody:o,colorBgTrigger:"#002140",bodyBg:o,headerBg:"#001529",headerHeight:e*2,headerPadding:`0 ${u}px`,headerColor:n,footerPadding:`${l}px ${u}px`,footerBg:o,siderBg:"#001529",triggerHeight:r+s*2,triggerBg:"#002140",triggerColor:d,zeroTriggerWidth:r,zeroTriggerHeight:r,lightSiderBg:a,lightTriggerBg:a,lightTriggerColor:n}},pe=[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]],gt=Y("Layout",t=>[Ze(t)],ge,{deprecatedTokens:pe}),Ke=t=>{const{componentCls:o,siderBg:e,motionDurationMid:r,motionDurationSlow:n,antCls:l,triggerHeight:s,triggerColor:d,triggerBg:a,headerHeight:u,zeroTriggerWidth:g,zeroTriggerHeight:p,borderRadius:$,lightSiderBg:h,lightTriggerColor:c,lightTriggerBg:b,bodyBg:v}=t;return{[o]:{position:"relative",minWidth:0,background:e,transition:`all ${r}, background 0s`,"&-has-trigger":{paddingBottom:s},"&-right":{order:1},[`${o}-children`]:{height:"100%",marginTop:-.1,paddingTop:.1,[`${l}-menu${l}-menu-inline-collapsed`]:{width:"auto"}},[`${o}-trigger`]:{position:"fixed",bottom:0,zIndex:1,height:s,color:d,lineHeight:f(s),textAlign:"center",background:a,cursor:"pointer",transition:`all ${r}`},"&-zero-width":{"> *":{overflow:"hidden"},[`${o}-trigger`]:{position:"absolute",top:u,insetInlineEnd:t.calc(g).mul(-1).equal(),zIndex:1,width:g,height:p,color:d,fontSize:t.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:e,borderStartStartRadius:0,borderStartEndRadius:$,borderEndEndRadius:$,borderEndStartRadius:0,cursor:"pointer",transition:`background ${n} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${n}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:t.calc(g).mul(-1).equal(),borderStartStartRadius:$,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:$}}},"&-light":{background:h,[`${o}-trigger`]:{color:c,background:b},[`${o}-zero-width-trigger`]:{color:c,background:b,border:`1px solid ${v}`,borderInlineStart:0}}}}},Ue=Y(["Layout","Sider"],t=>[Ke(t)],ge,{deprecatedTokens:pe});var Je=function(t,o){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(e[r[n]]=t[r[n]]);return e};const ie={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},U=i.createContext({}),Qe=(()=>{let t=0;return function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return t+=1,`${o}${t}`}})(),pt=i.forwardRef((t,o)=>{const{prefixCls:e,className:r,trigger:n,children:l,defaultCollapsed:s=!1,theme:d="dark",style:a={},collapsible:u=!1,reverseArrow:g=!1,width:p=200,collapsedWidth:$=80,zeroWidthTriggerStyle:h,breakpoint:c,onCollapse:b,onBreakpoint:v}=t,I=Je(t,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),{siderHook:y}=i.useContext(Ye),[x,w]=i.useState("collapsed"in t?t.collapsed:s),[H,T]=i.useState(!1);i.useEffect(()=>{"collapsed"in t&&w(t.collapsed)},[t.collapsed]);const E=(S,B)=>{"collapsed"in t||w(S),b?.(S,B)},{getPrefixCls:k}=i.useContext(Z),m=k("layout-sider",e),[z,D,j]=Ue(m),P=i.useRef();P.current=S=>{T(S.matches),v?.(S.matches),x!==S.matches&&E(S.matches,"responsive")},i.useEffect(()=>{function S(O){return P.current(O)}let B;if(typeof window<"u"){const{matchMedia:O}=window;if(O&&c&&c in ie){B=O(`screen and (max-width: ${ie[c]})`);try{B.addEventListener("change",S)}catch{B.addListener(S)}S(B)}}return()=>{try{B?.removeEventListener("change",S)}catch{B?.removeListener(S)}}},[c]),i.useEffect(()=>{const S=Qe("ant-sider-");return y.addSider(S),()=>y.removeSider(S)},[]);const C=()=>{E(!x,"clickTrigger")},N=()=>{const S=V(I,["collapsed"]),B=x?$:p,O=Fe(B)?`${B}px`:String(B),A=parseFloat(String($||0))===0?i.createElement("span",{onClick:C,className:M(`${m}-zero-width-trigger`,`${m}-zero-width-trigger-${g?"right":"left"}`),style:h},n||i.createElement(qe,null)):null,W={expanded:g?i.createElement(Q,null):i.createElement(re,null),collapsed:g?i.createElement(re,null):i.createElement(Q,null)}[x?"collapsed":"expanded"],_=n!==null?A||i.createElement("div",{className:`${m}-trigger`,onClick:C,style:{width:O}},n||W):null,fe=Object.assign(Object.assign({},a),{flex:`0 0 ${O}`,maxWidth:O,minWidth:O,width:O}),ve=M(m,`${m}-${d}`,{[`${m}-collapsed`]:!!x,[`${m}-has-trigger`]:u&&n!==null&&!A,[`${m}-below`]:!!H,[`${m}-zero-width`]:parseFloat(O)===0},r,D,j);return i.createElement("aside",Object.assign({className:ve},S,{style:fe,ref:o}),i.createElement("div",{className:`${m}-children`},l),u||H&&A?_:null)},L=i.useMemo(()=>({siderCollapsed:x}),[x]);return z(i.createElement(U.Provider,{value:L},N()))}),X=i.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});var et=function(t,o){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(e[r[n]]=t[r[n]]);return e};const be=t=>{const{prefixCls:o,className:e,dashed:r}=t,n=et(t,["prefixCls","className","dashed"]),{getPrefixCls:l}=i.useContext(Z),s=l("menu",o),d=M({[`${s}-item-divider-dashed`]:!!r},e);return i.createElement(Ie,Object.assign({className:d},n))},$e=t=>{var o;const{className:e,children:r,icon:n,title:l,danger:s}=t,{prefixCls:d,firstLevel:a,direction:u,disableMenuItemTitleTooltip:g,inlineCollapsed:p}=i.useContext(X),$=y=>{const x=r?.[0],w=i.createElement("span",{className:`${d}-title-content`},r);return(!n||i.isValidElement(r)&&r.type==="span")&&r&&y&&a&&typeof x=="string"?i.createElement("div",{className:`${d}-inline-collapsed-noicon`},x.charAt(0)):w},{siderCollapsed:h}=i.useContext(U);let c=l;typeof l>"u"?c=a?r:"":l===!1&&(c="");const b={title:c};!h&&!p&&(b.title=null,b.open=!1);const v=Se(r).length;let I=i.createElement(Ce,Object.assign({},V(t,["title","icon","danger"]),{className:M({[`${d}-item-danger`]:s,[`${d}-item-only-child`]:(n?v+1:v)===1},e),title:typeof l=="string"?l:void 0}),K(n,{className:M(i.isValidElement(n)?(o=n.props)===null||o===void 0?void 0:o.className:"",`${d}-item-icon`)}),$(p));return g||(I=i.createElement(xe,Object.assign({},b,{placement:u==="rtl"?"left":"right",overlayClassName:`${d}-inline-collapsed-tooltip`}),I)),I};var tt=function(t,o){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(e[r[n]]=t[r[n]]);return e};const q=i.createContext(null),bt=i.forwardRef((t,o)=>{const{children:e}=t,r=tt(t,["children"]),n=i.useContext(q),l=i.useMemo(()=>Object.assign(Object.assign({},n),r),[n,r.prefixCls,r.mode,r.selectable,r.rootClassName]),s=Be(e),d=ye(o,s?e.ref:null);return i.createElement(q.Provider,{value:l},i.createElement(we,{space:!0},s?i.cloneElement(e,{ref:d}):e))}),ot=t=>{const{componentCls:o,motionDurationSlow:e,horizontalLineHeight:r,colorSplit:n,lineWidth:l,lineType:s,itemPaddingInline:d}=t;return{[`${o}-horizontal`]:{lineHeight:r,border:0,borderBottom:`${f(l)} ${s} ${n}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${o}-item, ${o}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:d},[`> ${o}-item:hover,
        > ${o}-item-active,
        > ${o}-submenu ${o}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${o}-item, ${o}-submenu-title`]:{transition:[`border-color ${e}`,`background ${e}`].join(",")},[`${o}-submenu-arrow`]:{display:"none"}}}},nt=t=>{let{componentCls:o,menuArrowOffset:e,calc:r}=t;return{[`${o}-rtl`]:{direction:"rtl"},[`${o}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${o}-rtl${o}-vertical,
    ${o}-submenu-rtl ${o}-vertical`]:{[`${o}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${f(r(e).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${f(e)})`}}}}},le=t=>Object.assign({},Oe(t)),ae=(t,o)=>{const{componentCls:e,itemColor:r,itemSelectedColor:n,groupTitleColor:l,itemBg:s,subMenuItemBg:d,itemSelectedBg:a,activeBarHeight:u,activeBarWidth:g,activeBarBorderWidth:p,motionDurationSlow:$,motionEaseInOut:h,motionEaseOut:c,itemPaddingInline:b,motionDurationMid:v,itemHoverColor:I,lineType:y,colorSplit:x,itemDisabledColor:w,dangerItemColor:H,dangerItemHoverColor:T,dangerItemSelectedColor:E,dangerItemActiveBg:k,dangerItemSelectedBg:m,popupBg:z,itemHoverBg:D,itemActiveBg:j,menuSubMenuBg:P,horizontalItemSelectedColor:C,horizontalItemSelectedBg:N,horizontalItemBorderRadius:L,horizontalItemHoverBg:S}=t;return{[`${e}-${o}, ${e}-${o} > ${e}`]:{color:r,background:s,[`&${e}-root:focus-visible`]:Object.assign({},le(t)),[`${e}-item-group-title`]:{color:l},[`${e}-submenu-selected`]:{[`> ${e}-submenu-title`]:{color:n}},[`${e}-item, ${e}-submenu-title`]:{color:r,[`&:not(${e}-item-disabled):focus-visible`]:Object.assign({},le(t))},[`${e}-item-disabled, ${e}-submenu-disabled`]:{color:`${w} !important`},[`${e}-item:not(${e}-item-selected):not(${e}-submenu-selected)`]:{[`&:hover, > ${e}-submenu-title:hover`]:{color:I}},[`&:not(${e}-horizontal)`]:{[`${e}-item:not(${e}-item-selected)`]:{"&:hover":{backgroundColor:D},"&:active":{backgroundColor:j}},[`${e}-submenu-title`]:{"&:hover":{backgroundColor:D},"&:active":{backgroundColor:j}}},[`${e}-item-danger`]:{color:H,[`&${e}-item:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:T}},[`&${e}-item:active`]:{background:k}},[`${e}-item a`]:{"&, &:hover":{color:"inherit"}},[`${e}-item-selected`]:{color:n,[`&${e}-item-danger`]:{color:E},"a, a:hover":{color:"inherit"}},[`& ${e}-item-selected`]:{backgroundColor:a,[`&${e}-item-danger`]:{backgroundColor:m}},[`&${e}-submenu > ${e}`]:{backgroundColor:P},[`&${e}-popup > ${e}`]:{backgroundColor:z},[`&${e}-submenu-popup > ${e}`]:{backgroundColor:z},[`&${e}-horizontal`]:Object.assign(Object.assign({},o==="dark"?{borderBottom:0}:{}),{[`> ${e}-item, > ${e}-submenu`]:{top:p,marginTop:t.calc(p).mul(-1).equal(),marginBottom:0,borderRadius:L,"&::after":{position:"absolute",insetInline:b,bottom:0,borderBottom:`${f(u)} solid transparent`,transition:`border-color ${$} ${h}`,content:'""'},"&:hover, &-active, &-open":{background:S,"&::after":{borderBottomWidth:u,borderBottomColor:C}},"&-selected":{color:C,backgroundColor:N,"&:hover":{backgroundColor:N},"&::after":{borderBottomWidth:u,borderBottomColor:C}}}}),[`&${e}-root`]:{[`&${e}-inline, &${e}-vertical`]:{borderInlineEnd:`${f(p)} ${y} ${x}`}},[`&${e}-inline`]:{[`${e}-sub${e}-inline`]:{background:d},[`${e}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${f(g)} solid ${n}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${v} ${c}`,`opacity ${v} ${c}`].join(","),content:'""'},[`&${e}-item-danger`]:{"&::after":{borderInlineEndColor:E}}},[`${e}-selected, ${e}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${v} ${h}`,`opacity ${v} ${h}`].join(",")}}}}}},se=t=>{const{componentCls:o,itemHeight:e,itemMarginInline:r,padding:n,menuArrowSize:l,marginXS:s,itemMarginBlock:d,itemWidth:a,itemPaddingInline:u}=t,g=t.calc(l).add(n).add(s).equal();return{[`${o}-item`]:{position:"relative",overflow:"hidden"},[`${o}-item, ${o}-submenu-title`]:{height:e,lineHeight:f(e),paddingInline:u,overflow:"hidden",textOverflow:"ellipsis",marginInline:r,marginBlock:d,width:a},[`> ${o}-item,
            > ${o}-submenu > ${o}-submenu-title`]:{height:e,lineHeight:f(e)},[`${o}-item-group-list ${o}-submenu-title,
            ${o}-submenu-title`]:{paddingInlineEnd:g}}},rt=t=>{const{componentCls:o,iconCls:e,itemHeight:r,colorTextLightSolid:n,dropdownWidth:l,controlHeightLG:s,motionEaseOut:d,paddingXL:a,itemMarginInline:u,fontSizeLG:g,motionDurationFast:p,motionDurationSlow:$,paddingXS:h,boxShadowSecondary:c,collapsedWidth:b,collapsedIconSize:v}=t,I={height:r,lineHeight:f(r),listStylePosition:"inside",listStyleType:"disc"};return[{[o]:{"&-inline, &-vertical":Object.assign({[`&${o}-root`]:{boxShadow:"none"}},se(t))},[`${o}-submenu-popup`]:{[`${o}-vertical`]:Object.assign(Object.assign({},se(t)),{boxShadow:c})}},{[`${o}-submenu-popup ${o}-vertical${o}-sub`]:{minWidth:l,maxHeight:`calc(100vh - ${f(t.calc(s).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${o}-inline`]:{width:"100%",[`&${o}-root`]:{[`${o}-item, ${o}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${$}`,`background ${$}`,`padding ${p} ${d}`].join(","),[`> ${o}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${o}-sub${o}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${o}-submenu > ${o}-submenu-title`]:I,[`& ${o}-item-group-title`]:{paddingInlineStart:a}},[`${o}-item`]:I}},{[`${o}-inline-collapsed`]:{width:b,[`&${o}-root`]:{[`${o}-item, ${o}-submenu ${o}-submenu-title`]:{[`> ${o}-inline-collapsed-noicon`]:{fontSize:g,textAlign:"center"}}},[`> ${o}-item,
          > ${o}-item-group > ${o}-item-group-list > ${o}-item,
          > ${o}-item-group > ${o}-item-group-list > ${o}-submenu > ${o}-submenu-title,
          > ${o}-submenu > ${o}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${f(t.calc(g).div(2).equal())} - ${f(u)})`,textOverflow:"clip",[`
            ${o}-submenu-arrow,
            ${o}-submenu-expand-icon
          `]:{opacity:0},[`${o}-item-icon, ${e}`]:{margin:0,fontSize:v,lineHeight:f(r),"+ span":{display:"inline-block",opacity:0}}},[`${o}-item-icon, ${e}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${o}-item-icon, ${e}`]:{display:"none"},"a, a:hover":{color:n}},[`${o}-item-group-title`]:Object.assign(Object.assign({},He),{paddingInline:h})}}]},de=t=>{const{componentCls:o,motionDurationSlow:e,motionDurationMid:r,motionEaseInOut:n,motionEaseOut:l,iconCls:s,iconSize:d,iconMarginInlineEnd:a}=t;return{[`${o}-item, ${o}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${e}`,`background ${e}`,`padding calc(${e} + 0.1s) ${n}`].join(","),[`${o}-item-icon, ${s}`]:{minWidth:d,fontSize:d,transition:[`font-size ${r} ${l}`,`margin ${e} ${n}`,`color ${e}`].join(","),"+ span":{marginInlineStart:a,opacity:1,transition:[`opacity ${e} ${n}`,`margin ${e}`,`color ${e}`].join(",")}},[`${o}-item-icon`]:Object.assign({},je()),[`&${o}-item-only-child`]:{[`> ${s}, > ${o}-item-icon`]:{marginInlineEnd:0}}},[`${o}-item-disabled, ${o}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${o}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},ce=t=>{const{componentCls:o,motionDurationSlow:e,motionEaseInOut:r,borderRadius:n,menuArrowSize:l,menuArrowOffset:s}=t;return{[`${o}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:t.margin,width:l,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${e} ${r}, opacity ${e}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:t.calc(l).mul(.6).equal(),height:t.calc(l).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:n,transition:[`background ${e} ${r}`,`transform ${e} ${r}`,`top ${e} ${r}`,`color ${e} ${r}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${f(t.calc(s).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${f(s)})`}}}}},it=t=>{const{antCls:o,componentCls:e,fontSize:r,motionDurationSlow:n,motionDurationMid:l,motionEaseInOut:s,paddingXS:d,padding:a,colorSplit:u,lineWidth:g,zIndexPopup:p,borderRadiusLG:$,subMenuItemBorderRadius:h,menuArrowSize:c,menuArrowOffset:b,lineType:v,groupTitleLineHeight:I,groupTitleFontSize:y}=t;return[{"":{[e]:Object.assign(Object.assign({},oe()),{"&-hidden":{display:"none"}})},[`${e}-submenu-hidden`]:{display:"none"}},{[e]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ze(t)),oe()),{marginBottom:0,paddingInlineStart:0,fontSize:r,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${n} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${e}-item`]:{flex:"none"}},[`${e}-item, ${e}-submenu, ${e}-submenu-title`]:{borderRadius:t.itemBorderRadius},[`${e}-item-group-title`]:{padding:`${f(d)} ${f(a)}`,fontSize:y,lineHeight:I,transition:`all ${n}`},[`&-horizontal ${e}-submenu`]:{transition:[`border-color ${n} ${s}`,`background ${n} ${s}`].join(",")},[`${e}-submenu, ${e}-submenu-inline`]:{transition:[`border-color ${n} ${s}`,`background ${n} ${s}`,`padding ${l} ${s}`].join(",")},[`${e}-submenu ${e}-sub`]:{cursor:"initial",transition:[`background ${n} ${s}`,`padding ${n} ${s}`].join(",")},[`${e}-title-content`]:{display:"inline-flex",alignItems:"center",transition:`color ${n}`,"> a:first-child":{flexGrow:1},[`> ${o}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"},[`${e}-item-extra`]:{marginInlineStart:"auto",paddingInlineStart:t.padding,fontSize:t.fontSizeSM,color:t.colorTextDescription}},[`${e}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${e}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:u,borderStyle:v,borderWidth:0,borderTopWidth:g,marginBlock:g,padding:0,"&-dashed":{borderStyle:"dashed"}}}),de(t)),{[`${e}-item-group`]:{[`${e}-item-group-list`]:{margin:0,padding:0,[`${e}-item, ${e}-submenu-title`]:{paddingInline:`${f(t.calc(r).mul(2).equal())} ${f(a)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:p,borderRadius:$,boxShadow:"none",transformOrigin:"0 0",[`&${e}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${e}`]:Object.assign(Object.assign(Object.assign({borderRadius:$},de(t)),ce(t)),{[`${e}-item, ${e}-submenu > ${e}-submenu-title`]:{borderRadius:h},[`${e}-submenu-title::after`]:{transition:`transform ${n} ${s}`}})},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:t.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:t.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:t.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:t.paddingXS}}}),ce(t)),{[`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${f(b)})`},"&::after":{transform:`rotate(45deg) translateX(${f(t.calc(b).mul(-1).equal())})`}},[`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]:{transform:`translateY(${f(t.calc(c).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${f(t.calc(b).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${f(b)})`}}})},{[`${o}-layout-header`]:{[e]:{lineHeight:"inherit"}}}]},lt=t=>{var o,e,r;const{colorPrimary:n,colorError:l,colorTextDisabled:s,colorErrorBg:d,colorText:a,colorTextDescription:u,colorBgContainer:g,colorFillAlter:p,colorFillContent:$,lineWidth:h,lineWidthBold:c,controlItemBgActive:b,colorBgTextHover:v,controlHeightLG:I,lineHeight:y,colorBgElevated:x,marginXXS:w,padding:H,fontSize:T,controlHeightSM:E,fontSizeLG:k,colorTextLightSolid:m,colorErrorHover:z}=t,D=(o=t.activeBarWidth)!==null&&o!==void 0?o:0,j=(e=t.activeBarBorderWidth)!==null&&e!==void 0?e:h,P=(r=t.itemMarginInline)!==null&&r!==void 0?r:t.marginXXS,C=new ne(m).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:t.zIndexPopupBase+50,radiusItem:t.borderRadiusLG,itemBorderRadius:t.borderRadiusLG,radiusSubMenuItem:t.borderRadiusSM,subMenuItemBorderRadius:t.borderRadiusSM,colorItemText:a,itemColor:a,colorItemTextHover:a,itemHoverColor:a,colorItemTextHoverHorizontal:n,horizontalItemHoverColor:n,colorGroupTitle:u,groupTitleColor:u,colorItemTextSelected:n,itemSelectedColor:n,colorItemTextSelectedHorizontal:n,horizontalItemSelectedColor:n,colorItemBg:g,itemBg:g,colorItemBgHover:v,itemHoverBg:v,colorItemBgActive:$,itemActiveBg:b,colorSubItemBg:p,subMenuItemBg:p,colorItemBgSelected:b,itemSelectedBg:b,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:D,colorActiveBarHeight:c,activeBarHeight:c,colorActiveBarBorderSize:h,activeBarBorderWidth:j,colorItemTextDisabled:s,itemDisabledColor:s,colorDangerItemText:l,dangerItemColor:l,colorDangerItemTextHover:l,dangerItemHoverColor:l,colorDangerItemTextSelected:l,dangerItemSelectedColor:l,colorDangerItemBgActive:d,dangerItemActiveBg:d,colorDangerItemBgSelected:d,dangerItemSelectedBg:d,itemMarginInline:P,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:I,groupTitleLineHeight:y,collapsedWidth:I*2,popupBg:x,itemMarginBlock:w,itemPaddingInline:H,horizontalLineHeight:`${I*1.15}px`,iconSize:T,iconMarginInlineEnd:E-T,collapsedIconSize:k,groupTitleFontSize:T,darkItemDisabledColor:new ne(m).setAlpha(.25).toRgbString(),darkItemColor:C,darkDangerItemColor:l,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:m,darkItemSelectedBg:n,darkDangerItemSelectedBg:l,darkItemHoverBg:"transparent",darkGroupTitleColor:C,darkItemHoverColor:m,darkDangerItemHoverColor:z,darkDangerItemSelectedColor:m,darkDangerItemActiveBg:l,itemWidth:D?`calc(100% + ${j}px)`:`calc(100% - ${P*2}px)`}},at=function(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return Y("Menu",n=>{const{colorBgElevated:l,controlHeightLG:s,fontSize:d,darkItemColor:a,darkDangerItemColor:u,darkItemBg:g,darkSubMenuItemBg:p,darkItemSelectedColor:$,darkItemSelectedBg:h,darkDangerItemSelectedBg:c,darkItemHoverBg:b,darkGroupTitleColor:v,darkItemHoverColor:I,darkItemDisabledColor:y,darkDangerItemHoverColor:x,darkDangerItemSelectedColor:w,darkDangerItemActiveBg:H,popupBg:T,darkPopupBg:E}=n,k=n.calc(d).div(7).mul(5).equal(),m=ee(n,{menuArrowSize:k,menuHorizontalHeight:n.calc(s).mul(1.15).equal(),menuArrowOffset:n.calc(k).mul(.25).equal(),menuSubMenuBg:l,calc:n.calc,popupBg:T}),z=ee(m,{itemColor:a,itemHoverColor:I,groupTitleColor:v,itemSelectedColor:$,itemBg:g,popupBg:E,subMenuItemBg:p,itemActiveBg:"transparent",itemSelectedBg:h,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:b,itemDisabledColor:y,dangerItemColor:u,dangerItemHoverColor:x,dangerItemSelectedColor:w,dangerItemActiveBg:H,dangerItemSelectedBg:c,menuSubMenuBg:p,horizontalItemSelectedColor:$,horizontalItemSelectedBg:h});return[it(m),ot(m),rt(m),ae(m,"light"),ae(z,"dark"),nt(m),Te(m),te(m,"slide-up"),te(m,"slide-down"),Ee(m,"zoom-big")]},lt,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:e,unitless:{groupTitleLineHeight:!0}})(t,o)},he=t=>{var o;const{popupClassName:e,icon:r,title:n,theme:l}=t,s=i.useContext(X),{prefixCls:d,inlineCollapsed:a,theme:u}=s,g=Me();let p;if(!r)p=a&&!g.length&&n&&typeof n=="string"?i.createElement("div",{className:`${d}-inline-collapsed-noicon`},n.charAt(0)):i.createElement("span",{className:`${d}-title-content`},n);else{const c=i.isValidElement(n)&&n.type==="span";p=i.createElement(i.Fragment,null,K(r,{className:M(i.isValidElement(r)?(o=r.props)===null||o===void 0?void 0:o.className:"",`${d}-item-icon`)}),c?n:i.createElement("span",{className:`${d}-title-content`},n))}const $=i.useMemo(()=>Object.assign(Object.assign({},s),{firstLevel:!1}),[s]),[h]=ke("Menu");return i.createElement(X.Provider,{value:$},i.createElement(De,Object.assign({},V(t,["icon"]),{title:p,popupClassName:M(d,e,`${d}-${l||u}`),popupStyle:Object.assign({zIndex:h},t.popupStyle)})))};var st=function(t,o){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(e[r[n]]=t[r[n]]);return e};function F(t){return t===null||t===!1}const dt={item:$e,submenu:he,divider:be},ct=i.forwardRef((t,o)=>{var e;const r=i.useContext(q),n=r||{},{getPrefixCls:l,getPopupContainer:s,direction:d,menu:a}=i.useContext(Z),u=l(),{prefixCls:g,className:p,style:$,theme:h="light",expandIcon:c,_internalDisableMenuItemTitleTooltip:b,inlineCollapsed:v,siderCollapsed:I,rootClassName:y,mode:x,selectable:w,onClick:H,overflowedIndicatorPopupClassName:T}=t,E=st(t,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),k=V(E,["collapsedWidth"]);(e=n.validator)===null||e===void 0||e.call(n,{mode:x});const m=Pe(function(){var R;H?.apply(void 0,arguments),(R=n.onClick)===null||R===void 0||R.call(n)}),z=n.mode||x,D=w??n.selectable,j=i.useMemo(()=>I!==void 0?I:v,[v,I]),P={horizontal:{motionName:`${u}-slide-up`},inline:Le(u),other:{motionName:`${u}-zoom-big`}},C=l("menu",g||n.prefixCls),N=Re(C),[L,S,B]=at(C,N,!r),O=M(`${C}-${h}`,a?.className,p),A=i.useMemo(()=>{var R,W;if(typeof c=="function"||F(c))return c||null;if(typeof n.expandIcon=="function"||F(n.expandIcon))return n.expandIcon||null;if(typeof a?.expandIcon=="function"||F(a?.expandIcon))return a?.expandIcon||null;const _=(R=c??n?.expandIcon)!==null&&R!==void 0?R:a?.expandIcon;return K(_,{className:M(`${C}-submenu-expand-icon`,i.isValidElement(_)?(W=_.props)===null||W===void 0?void 0:W.className:void 0)})},[c,n?.expandIcon,a?.expandIcon,C]),J=i.useMemo(()=>({prefixCls:C,inlineCollapsed:j||!1,direction:d,firstLevel:!0,theme:h,mode:z,disableMenuItemTitleTooltip:b}),[C,j,d,b,h]);return L(i.createElement(q.Provider,{value:null},i.createElement(X.Provider,{value:J},i.createElement(Ne,Object.assign({getPopupContainer:s,overflowedIndicator:i.createElement(Ae,null),overflowedIndicatorPopupClassName:M(C,`${C}-${h}`,T),mode:z,selectable:D,onClick:m},k,{inlineCollapsed:j,style:Object.assign(Object.assign({},a?.style),$),className:O,prefixCls:C,direction:d,defaultMotions:P,expandIcon:A,ref:o,rootClassName:M(y,S,n.rootClassName,B,N),_internalComponents:dt})))))}),G=i.forwardRef((t,o)=>{const e=i.useRef(null),r=i.useContext(U);return i.useImperativeHandle(o,()=>({menu:e.current,focus:n=>{var l;(l=e.current)===null||l===void 0||l.focus(n)}})),i.createElement(ct,Object.assign({ref:e},t,r))});G.Item=$e;G.SubMenu=he;G.Divider=be;G.ItemGroup=We;export{Ye as L,G as M,bt as O,re as R,pt as S,U as a,gt as u};
//# sourceMappingURL=index-ATcIQZoR.js.map
