"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[771],{2771:function(t,n,e){e.r(n);var r=e(3433),i=e(9439),o=(e(8594),e(2791)),a=e(1889),s=e(8870),c=e(7047),l=e(5351),d=e(4070),u=e(890),h=e(7391),p=e(3466),f=e(3400),m=e(4294),g=e(5294),x=e(6679),v=e(7689),b=e(1087),w=e(184),Z=o.lazy((function(){return Promise.all([e.e(11),e.e(95)]).then(e.bind(e,2095))})),j=function(t){var n=t.count;return Array.from({length:n}).map((function(t,n){return(0,w.jsx)(a.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,w.jsxs)(s.Z,{sx:{border:".1px solid #ccc",borderRadius:"1px",py:"20px",display:"flex",flexDirection:"column",alignItems:"center",height:"321px",width:"335px",justifyContent:"space-between"},children:[(0,w.jsx)(c.Z,{variant:"rectangular",width:"100%",height:150}),(0,w.jsx)(c.Z,{variant:"text",width:"80%",height:24}),(0,w.jsx)(c.Z,{variant:"text",width:"60%",height:20}),(0,w.jsx)(c.Z,{variant:"text",width:"80%",height:20}),(0,w.jsx)(c.Z,{variant:"text",width:"30%",height:24})]})},n)}))};n.default=function(){(0,o.useEffect)((function(){document.title="Shop at Herba Naturals - Explore Koi, Beezbee, Wyld Products and More",document.querySelector('meta[name="description"]').setAttribute("content","Browse Herba Natural's online store for the finest CBD products. Featuring brands like Koi, Beezbee, and Wyld with a variety of CBD oils, edibles, and topicals.")}),[]);var t=(0,o.useState)([]),n=(0,i.Z)(t,2),e=n[0],c=n[1],C=(0,o.useState)(""),y=(0,i.Z)(C,2),S=y[0],k=y[1],R=(0,o.useState)(!1),N=(0,i.Z)(R,2),z=N[0],E=N[1],P=(0,o.useState)(null),F=(0,i.Z)(P,2),B=F[0],W=F[1],_=(0,o.useState)(!1),A=(0,i.Z)(_,2),D=A[0],L=A[1],M=(0,o.useState)(1),H=(0,i.Z)(M,2),T=H[0],I=H[1],U=(0,o.useState)(!1),X=(0,i.Z)(U,2),q=X[0],O=X[1],K=(0,x.j)().addToCart,$=(0,o.useState)(0),Q=(0,i.Z)($,2),V=Q[0],G=Q[1],J=(0,v.TH)(),Y=new URLSearchParams(J.search),tt=(0,o.useState)(""),nt=(0,i.Z)(tt,2),et=nt[0],rt=nt[1],it=(0,o.useState)(!1),ot=(0,i.Z)(it,2),at=ot[0],st=ot[1];(0,o.useEffect)((function(){st(!0)}),[]);var ct=function(t){L(!0),g.Z.get(t).then((function(t){c((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(t.data.products))})),I((function(t){return t+1})),G(t.data.totalProducts),L(!1),O(!1)})).catch((function(t){console.error("There was an error fetching the products:",t),L(!1),O(!1)}))};(0,o.useEffect)((function(){var t=Y.get("filter")||"";rt(t),c([]),I(1);var n="http://localhost:8000/api/product/paginate/?page=1&pageSize=".concat(9,"&filter=").concat(t);ct(n)}),[J.search]);var lt=(0,o.useCallback)((function(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&e.length<V&&!q&&(O(!0),g.Z.get("http://localhost:8000/api/product/paginate/?page=".concat(T,"&pageSize=").concat(9)).then((function(t){c((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(t.data.products))})),I((function(t){return t+1})),O(!1)})).catch((function(t){console.error("There was an error fetching more products:",t),O(!1)})),ct())}),[q,T,9,e.length,V]),dt=e.filter((function(t){return t.name.toLowerCase().includes(S.toLowerCase())}));(0,o.useEffect)((function(){return window.addEventListener("scroll",lt),function(){window.removeEventListener("scroll",lt)}}),[lt,et]);var ut={border:".1px solid #ccc",borderRadius:"5px",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"column",alignItems:"center",height:"300px",justifyContent:"space-between"};return(0,w.jsxs)(s.Z,{className:"shop",sx:{padding:"20px",mt:10},children:[(0,w.jsx)(l.Z,{open:at,autoHideDuration:6e3,sx:{mt:10},onClose:function(){return st(!1)},anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,w.jsx)(d.Z,{onClose:function(){return st(!1)},sx:{width:"100%"},children:"Enjoy free shipping on all orders over $50!"})}),(0,w.jsxs)(s.Z,{sx:{mb:4},children:[(0,w.jsx)(b.rU,{to:"/shop",style:{textDecoration:"none"},children:(0,w.jsx)(u.Z,{variant:"body1",component:"h1",children:"SHOP"})}),et&&(0,w.jsxs)("div",{style:{marginLeft:"10px"},children:[(0,w.jsxs)(u.Z,{variant:"body1",component:"span",children:[" "," > "," "]}),(0,w.jsx)(b.rU,{to:"/shop?filter=".concat(et),style:{textDecoration:"none"},children:(0,w.jsx)(u.Z,{variant:"body1",component:"span",children:et.toUpperCase()})})]})]}),(0,w.jsx)(s.Z,{mb:4,children:(0,w.jsx)(h.Z,{name:"searchBar",autoCorrect:"off",InputProps:{endAdornment:(0,w.jsx)(p.Z,{position:"end",children:(0,w.jsx)(f.Z,{name:"magnifying-icon",id:"magnifying-icon","aria-label":"magnifying-icon",sx:{mr:-1},children:(0,w.jsx)("svg",{name:"magnifying-icon-svg",id:"magnifying-icon-svg","aria-label":"magnifying-icon-svg",fill:"#0F75E0",xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 512 512",children:(0,w.jsx)("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"})})})})},label:"Search Products",variant:"outlined",value:S,onChange:function(t){k(t.target.value)},fullWidth:!0})}),D?(0,w.jsx)(a.ZP,{container:!0,spacing:3,children:(0,w.jsx)(j,{count:9})}):(0,w.jsxs)(a.ZP,{container:!0,spacing:3,children:[dt.map((function(t,n){return(0,w.jsx)(a.ZP,{item:!0,xs:12,sm:6,md:4,style:{animationDelay:"".concat(.2*n,"s")},className:"product-slide-in-shop",children:(0,w.jsxs)("div",{style:ut,children:[(0,w.jsx)("img",{className:"shop-img",src:"".concat(t.imgSource[0].url.replace("/upload/","/upload/c_scale,w_150,h_150,f_auto,q_auto,dpr_auto/")),alt:t.name,height:"150",width:"150"}),(0,w.jsx)(u.Z,{sx:{fontWeight:100,fontSize:14},className:"shop-name",mt:2,children:t.name}),(0,w.jsx)(u.Z,{variant:"subtitle1",className:"shop-brand",sx:{fontSize:12,fontWeight:100,color:"black"},children:t.brand}),(0,w.jsxs)(u.Z,{variant:"subtitle2",sx:{fontWeight:100,fontSize:16},className:"shop-price",children:["$",t.price.toFixed(2)]}),(0,w.jsxs)(s.Z,{className:"shop-button-container",children:[(0,w.jsx)(m.Z,{variant:"outlined",className:"shop-button-cart",sx:{border:1,borderRadius:0,letterSpacing:2,fontSize:12,color:"white",backgroundColor:"#283047",borderColor:"#283047",borderWidth:1.5,transition:"all 0.3s","&:hover":{backgroundColor:"#FE6F49",color:"white",borderColor:"#FE6F49",transform:"scale(1.05)"}},onClick:function(){return K(t)},children:"Add to Cart"}),(0,w.jsx)(m.Z,{variant:"outlined",className:"shop-button-view",sx:{border:1,borderRadius:0,letterSpacing:2,fontSize:12,color:"#283047",backgroundColor:"white",borderColor:"#283047",borderWidth:1.5,transition:"all 0.3s","&:hover":{backgroundColor:"#283047",color:"white",transform:"scale(1.05)"}},onClick:function(){W(t._id),E(!0)},children:"Quick View"})]})]})},t._id)})),(dt.length<V||q)&&(0,w.jsx)(j,{count:3})]}),(0,w.jsx)(Z,{productId:B,open:z,handleClose:function(){return E(!1)},products:e,getRelatedProducts:function(t){return e.filter((function(n){return n.categories.some((function(n){return t.includes(n)}))})).slice(0,3)}})]})}},7047:function(t,n,e){e.d(n,{Z:function(){return P}});var r=e(168),i=e(3366),o=e(7462),a=e(2791),s=e(3733),c=e(2554),l=e(4419);function d(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(t){return parseFloat(t)}var h=e(2065),p=e(6934),f=e(1402),m=e(5878),g=e(1217);function x(t){return(0,g.Z)("MuiSkeleton",t)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v,b,w,Z,j,C,y,S,k=e(184),R=["animation","className","component","height","style","variant","width"],N=(0,c.F4)(j||(j=v||(v=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),z=(0,c.F4)(C||(C=b||(b=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),E=(0,p.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(t,n){var e=t.ownerState;return[n.root,n[e.variant],!1!==e.animation&&n[e.animation],e.hasChildren&&n.withChildren,e.hasChildren&&!e.width&&n.fitContent,e.hasChildren&&!e.height&&n.heightAuto]}})((function(t){var n=t.theme,e=t.ownerState,r=d(n.shape.borderRadius)||"px",i=u(n.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:n.vars?n.vars.palette.Skeleton.bg:(0,h.Fq)(n.palette.text.primary,"light"===n.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(r,"/").concat(Math.round(i/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(n.vars||n).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(t){return"pulse"===t.ownerState.animation&&(0,c.iv)(y||(y=w||(w=(0,r.Z)(["\n      animation: "," 2s ease-in-out 0.5s infinite;\n    "]))),N)}),(function(t){var n=t.ownerState,e=t.theme;return"wave"===n.animation&&(0,c.iv)(S||(S=Z||(Z=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 2s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),z,(e.vars||e).palette.action.hover)})),P=a.forwardRef((function(t,n){var e=(0,f.Z)({props:t,name:"MuiSkeleton"}),r=e.animation,a=void 0===r?"pulse":r,c=e.className,d=e.component,u=void 0===d?"span":d,h=e.height,p=e.style,m=e.variant,g=void 0===m?"text":m,v=e.width,b=(0,i.Z)(e,R),w=(0,o.Z)({},e,{animation:a,component:u,variant:g,hasChildren:Boolean(b.children)}),Z=function(t){var n=t.classes,e=t.variant,r=t.animation,i=t.hasChildren,o=t.width,a=t.height,s={root:["root",e,r,i&&"withChildren",i&&!o&&"fitContent",i&&!a&&"heightAuto"]};return(0,l.Z)(s,x,n)}(w);return(0,k.jsx)(E,(0,o.Z)({as:u,ref:n,className:(0,s.Z)(Z.root,c),ownerState:w},b,{style:(0,o.Z)({width:v,height:h},p)}))}))},8594:function(){}}]);
//# sourceMappingURL=771.995c87ca.chunk.js.map