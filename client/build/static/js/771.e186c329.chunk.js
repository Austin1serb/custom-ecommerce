"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[771],{2771:(t,e,n)=>{n.r(e),n.d(e,{default:()=>C});n(8594);var a=n(2791),o=n(1889),r=n(6029),i=n(7047),s=n(5351),c=n(4070),l=n(890),d=n(7391),h=n(3466),u=n(3400),p=n(3239),g=n(4294),m=n(5294),f=n(6679),x=n(7689),b=n(1087),v=n(184);const w=a.lazy((()=>Promise.all([n.e(11),n.e(95)]).then(n.bind(n,2095)))),Z=t=>{let{count:e}=t;return Array.from({length:e}).map(((t,e)=>(0,v.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,v.jsxs)(r.Z,{sx:{border:".1px solid #ccc",borderRadius:"1px",py:"20px",display:"flex",flexDirection:"column",alignItems:"center",height:"321px",width:"335px",justifyContent:"space-between"},children:[(0,v.jsx)(i.Z,{variant:"rectangular",width:"100%",height:150}),(0,v.jsx)(i.Z,{variant:"text",width:"80%",height:24}),(0,v.jsx)(i.Z,{variant:"text",width:"60%",height:20}),(0,v.jsx)(i.Z,{variant:"text",width:"80%",height:20}),(0,v.jsx)(i.Z,{variant:"text",width:"30%",height:24})]})},e)))},C=()=>{(0,a.useEffect)((()=>{document.title="Shop at Herba Natural - Explore Koi, Beezbee, Wyld Products and More",document.querySelector('meta[name="description"]').setAttribute("content","Browse Herba Natural's online store for the finest CBD products. Featuring brands like Koi, Beezbee, and Wyld with a variety of CBD oils, edibles, and topicals.")}),[]);const[t,e]=(0,a.useState)([]),[n,i]=(0,a.useState)(""),[C,j]=(0,a.useState)(!1),[S,y]=(0,a.useState)(null),[k,z]=(0,a.useState)(!1),[R,E]=(0,a.useState)(1),[N,P]=(0,a.useState)(!1),F=12,{addToCart:B}=(0,f.j)(),[T,W]=(0,a.useState)(0),A=(0,x.TH)(),D=new URLSearchParams(A.search),[M,H]=(0,a.useState)(""),[L,U]=(0,a.useState)(!1),[I,_]=(0,a.useState)(!1),X=(0,a.useCallback)((t=>{_(!0);const n=D.get("filter")||"";H(n);const a="http://localhost:8000/api/product/search?term=".concat(encodeURIComponent(t),"&filter=").concat(M,"&pageSize=").concat(F);m.Z.get(a).then((t=>{W(t.data.totalProducts),e(t.data.products),console.log(T),console.log(t.data.products),_(!1)})).catch((t=>{console.error("Error fetching search results:",t),_(!1)}))}),[F,M]);(0,a.useEffect)((()=>{let t,e;return n?(_(!0),e=setTimeout((()=>{_(!1)}),500),t=setTimeout((()=>{X(n)}),500)):_(!1),()=>{clearTimeout(t),clearTimeout(e)}}),[n,X,500]),(0,a.useEffect)((()=>{U(!0)}),[]);const O=t=>{z(!0),m.Z.get(t).then((t=>{e((e=>[...e,...t.data.products])),E((t=>t+1)),W(t.data.totalProducts),z(!1),P(!1)})).catch((t=>{console.error("There was an error fetching the products:",t),z(!1),P(!1)}))};(0,a.useEffect)((()=>{const t=D.get("filter")||"";H(t),e([]),i(""),E(1);const n="http://localhost:8000/api/product/paginate/?page=1&pageSize=".concat(F,"&filter=").concat(t);O(n)}),[A.search]);const q=(0,a.useCallback)((()=>{if(document.documentElement.offsetHeight-(window.innerHeight+document.documentElement.scrollTop)<800&&t.length<T&&!N){console.log("fetching"),P(!0);const n="http://localhost:8000/api/product/paginate/?page=".concat(R,"&pageSize=").concat(F,"&filter=").concat(M);m.Z.get(n).then((n=>{const a=n.data.products.filter((e=>!t.some((t=>t._id===e._id))));e((t=>[...t,...a])),E((t=>t+1)),P(!1)})).catch((t=>{console.error("There was an error fetching more products:",t),P(!1)}))}}),[N,R,F,t.length,T]);(0,a.useEffect)((()=>(window.addEventListener("scroll",q),()=>{window.removeEventListener("scroll",q)})),[q,M]);const K={border:".1px solid #ccc",borderRadius:"5px",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"column",alignItems:"center",height:"300px",justifyContent:"space-between"};return(0,v.jsxs)(r.Z,{className:"shop",sx:{padding:"20px",mt:10},children:[(0,v.jsx)(s.Z,{open:L,autoHideDuration:6e3,sx:{mt:10},onClose:()=>U(!1),anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,v.jsx)(c.Z,{onClose:()=>U(!1),sx:{width:"100%"},children:"Enjoy free shipping on all orders over $50!"})}),(0,v.jsxs)(r.Z,{sx:{mb:4},children:[(0,v.jsx)(b.rU,{to:"/shop",style:{textDecoration:"none"},children:(0,v.jsx)(l.Z,{variant:"body1",component:"h1",children:"SHOP"})}),M&&(0,v.jsxs)("div",{style:{marginLeft:"10px"},children:[(0,v.jsxs)(l.Z,{variant:"body1",component:"span",children:[" "," > "," "]}),(0,v.jsx)(b.rU,{to:"/shop?filter=".concat(M),style:{textDecoration:"none"},children:(0,v.jsx)(l.Z,{variant:"body1",component:"span",children:M.toUpperCase()})})]})]}),(0,v.jsx)(r.Z,{mb:4,children:(0,v.jsx)(d.Z,{name:"searchBar",autoCorrect:"false",autoComplete:"off",autoCapitalize:"off",id:"searchBar",InputProps:{startAdornment:(0,v.jsx)(h.Z,{position:"start",children:(0,v.jsx)(u.Z,{name:"magnifying-icon",id:"magnifying-icon","aria-label":"magnifying-icon",sx:{transition:"opacity 0.3s"},children:I?(0,v.jsx)(p.Z,{size:25}):(0,v.jsx)("svg",{name:"magnifying-icon-svg",id:"magnifying-icon-svg","aria-label":"magnifying-icon-svg",fill:"#0F75E0",xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 512 512",children:(0,v.jsx)("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"})})})})},label:"Search ".concat(M?M.toUpperCase():"Products"),variant:"outlined",value:n,onChange:t=>{const n=t.target.value;i(n),n||(()=>{E(1),e([]),P(!1);const t=D.get("filter")||"";H(t),O("http://localhost:8000/api/product/paginate/?page=1&pageSize=".concat(F,"&filter=").concat(M))})()},fullWidth:!0})}),k?(0,v.jsx)(o.ZP,{container:!0,spacing:3,children:(0,v.jsx)(Z,{count:F})}):(0,v.jsxs)(o.ZP,{container:!0,spacing:3,children:[t&&0===t.length?(0,v.jsx)(l.Z,{ml:5,variant:"h5",children:"No products found"}):null,t.map(((t,e)=>(0,v.jsx)(o.ZP,{item:!0,xs:12,sm:6,md:4,style:{animationDelay:"".concat(.2*e,"s")},className:"product-slide-in-shop",children:(0,v.jsxs)("div",{style:K,children:[(0,v.jsx)("img",{className:"shop-img",src:"".concat(t.imgSource[0].url),alt:t.name,height:"150",width:"150"}),(0,v.jsx)(l.Z,{sx:{fontWeight:100,fontSize:14},className:"shop-name",mt:2,children:t.name}),(0,v.jsx)(l.Z,{variant:"subtitle1",className:"shop-brand",sx:{fontSize:12,fontWeight:100,color:"black"},children:t.brand}),(0,v.jsxs)(l.Z,{variant:"subtitle2",sx:{fontWeight:100,fontSize:16},className:"shop-price",children:["$",t.price.toFixed(2)]}),(0,v.jsxs)(r.Z,{className:"shop-button-container",children:[(0,v.jsx)(g.Z,{variant:"outlined",className:"shop-button-cart",sx:{border:1,borderRadius:0,letterSpacing:2,fontSize:12,color:"white",backgroundColor:"#283047",borderColor:"#283047",borderWidth:1.5,transition:"all 0.3s","&:hover":{backgroundColor:"#FE6F49",color:"white",borderColor:"#FE6F49",transform:"scale(1.05)"}},onClick:()=>B(t),children:"Add to Cart"}),(0,v.jsx)(g.Z,{variant:"outlined",className:"shop-button-view",sx:{border:1,borderRadius:0,letterSpacing:2,fontSize:12,color:"#283047",backgroundColor:"white",borderColor:"#283047",borderWidth:1.5,transition:"all 0.3s","&:hover":{backgroundColor:"#283047",color:"white",transform:"scale(1.05)"}},onClick:()=>{y(t._id),j(!0)},children:"Quick View"})]})]})},t._id))),N&&(0,v.jsx)(p.Z,{})]}),(0,v.jsx)(w,{productId:S,open:C,handleClose:()=>j(!1),products:t,getRelatedProducts:e=>t.filter((t=>t.categories.some((t=>e.includes(t))))).slice(0,3)})]})}},7047:(t,e,n)=>{n.d(e,{Z:()=>P});var a=n(168),o=n(3366),r=n(7462),i=n(2791),s=n(3733),c=n(2554),l=n(4419);function d(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function h(t){return parseFloat(t)}var u=n(2065),p=n(6934),g=n(1402),m=n(5878),f=n(1217);function x(t){return(0,f.Z)("MuiSkeleton",t)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var b,v,w,Z,C=n(184);const j=["animation","className","component","height","style","variant","width"];let S,y,k,z;const R=(0,c.F4)(S||(S=b||(b=(0,a.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),E=(0,c.F4)(y||(y=v||(v=(0,a.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),N=(0,p.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((t=>{let{theme:e,ownerState:n}=t;const a=d(e.shape.borderRadius)||"px",o=h(e.shape.borderRadius);return(0,r.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,u.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(o).concat(a,"/").concat(Math.round(o/.6*10)/10).concat(a),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(e.vars||e).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(t=>{let{ownerState:e}=t;return"pulse"===e.animation&&(0,c.iv)(k||(k=w||(w=(0,a.Z)(["\n      animation: "," 2s ease-in-out 0.5s infinite;\n    "]))),R)}),(t=>{let{ownerState:e,theme:n}=t;return"wave"===e.animation&&(0,c.iv)(z||(z=Z||(Z=(0,a.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 2s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),E,(n.vars||n).palette.action.hover)})),P=i.forwardRef((function(t,e){const n=(0,g.Z)({props:t,name:"MuiSkeleton"}),{animation:a="pulse",className:i,component:c="span",height:d,style:h,variant:u="text",width:p}=n,m=(0,o.Z)(n,j),f=(0,r.Z)({},n,{animation:a,component:c,variant:u,hasChildren:Boolean(m.children)}),b=(t=>{const{classes:e,variant:n,animation:a,hasChildren:o,width:r,height:i}=t,s={root:["root",n,a,o&&"withChildren",o&&!r&&"fitContent",o&&!i&&"heightAuto"]};return(0,l.Z)(s,x,e)})(f);return(0,C.jsx)(N,(0,r.Z)({as:c,ref:e,className:(0,s.Z)(b.root,i),ownerState:f},m,{style:(0,r.Z)({width:p,height:d},h)}))}))},8594:()=>{}}]);
//# sourceMappingURL=771.e186c329.chunk.js.map