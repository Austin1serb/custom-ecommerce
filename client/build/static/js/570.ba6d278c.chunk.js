(self.webpackChunkclient=self.webpackChunkclient||[]).push([[570],{6581:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var o=n(9439),r=n(2791),i=n(3239),a=n(4294),s=n(6029),u=n(4506),c=n(4942),l=n(3366),d=n(7462),p=(n(8457),n(3733)),f=n(4419),h=n(6934),m=n(1402),v=n(6125),b=n(5527);var g=r.createContext({}),x=n(4556),y=n(5878),w=n(1217);function Z(e){return(0,w.Z)("MuiAccordion",e)}var C=(0,y.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),j=n(184),S=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],N=(0,h.ZP)(b.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,c.Z)({},"& .".concat(C.region),t.region),t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((function(e){var t=e.theme,n={duration:t.transitions.duration.shortest};return(0,c.Z)((0,c.Z)({position:"relative",transition:t.transitions.create(["margin"],n),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(t.vars||t).palette.divider,transition:t.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&::before":{display:"none"}}},"&.".concat(C.expanded),{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}}),"&.".concat(C.disabled),{backgroundColor:(t.vars||t).palette.action.disabledBackground})}),(function(e){var t=e.theme,n=e.ownerState;return(0,d.Z)({},!n.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(t.vars||t).shape.borderRadius,borderBottomRightRadius:(t.vars||t).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!n.disableGutters&&(0,c.Z)({},"&.".concat(C.expanded),{margin:"16px 0"}))})),k=r.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiAccordion"}),i=n.children,a=n.className,s=n.defaultExpanded,c=void 0!==s&&s,h=n.disabled,b=void 0!==h&&h,y=n.disableGutters,w=void 0!==y&&y,C=n.expanded,k=n.onChange,B=n.square,R=void 0!==B&&B,D=n.TransitionComponent,A=void 0===D?v.Z:D,q=n.TransitionProps,I=(0,l.Z)(n,S),M=(0,x.Z)({controlled:C,default:c,name:"Accordion",state:"expanded"}),T=(0,o.Z)(M,2),z=T[0],H=T[1],P=r.useCallback((function(e){H(!z),k&&k(e,!z)}),[z,k,H]),E=r.Children.toArray(i),V=(0,u.Z)(E),G=V[0],O=V.slice(1),W=r.useMemo((function(){return{expanded:z,disabled:b,disableGutters:w,toggle:P}}),[z,b,w,P]),_=(0,d.Z)({},n,{square:R,disabled:b,disableGutters:w,expanded:z}),L=function(e){var t=e.classes,n={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return(0,f.Z)(n,Z,t)}(_);return(0,j.jsxs)(N,(0,d.Z)({className:(0,p.Z)(L.root,a),ref:t,ownerState:_,square:R},I,{children:[(0,j.jsx)(g.Provider,{value:W,children:G}),(0,j.jsx)(A,(0,d.Z)({in:z,timeout:"auto"},q,{children:(0,j.jsx)("div",{"aria-labelledby":G.props.id,id:G.props["aria-controls"],role:"region",className:L.region,children:O})}))]}))})),B=n(3701);function R(e){return(0,w.Z)("MuiAccordionSummary",e)}var D=(0,y.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),A=["children","className","expandIcon","focusVisibleClassName","onClick"],q=(0,h.ZP)(B.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t=e.theme,n=e.ownerState,o={duration:t.transitions.duration.shortest};return(0,d.Z)((0,c.Z)((0,c.Z)((0,c.Z)({display:"flex",minHeight:48,padding:t.spacing(0,2),transition:t.transitions.create(["min-height","background-color"],o)},"&.".concat(D.focusVisible),{backgroundColor:(t.vars||t).palette.action.focus}),"&.".concat(D.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity}),"&:hover:not(.".concat(D.disabled,")"),{cursor:"pointer"}),!n.disableGutters&&(0,c.Z)({},"&.".concat(D.expanded),{minHeight:64}))})),I=(0,h.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,n=e.ownerState;return(0,d.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&(0,c.Z)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(D.expanded),{margin:"20px 0"}))})),M=(0,h.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return(0,c.Z)({display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(D.expanded),{transform:"rotate(180deg)"})})),T=r.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiAccordionSummary"}),o=n.children,i=n.className,a=n.expandIcon,s=n.focusVisibleClassName,u=n.onClick,c=(0,l.Z)(n,A),h=r.useContext(g),v=h.disabled,b=void 0!==v&&v,x=h.disableGutters,y=h.expanded,w=h.toggle,Z=(0,d.Z)({},n,{expanded:y,disabled:b,disableGutters:x}),C=function(e){var t=e.classes,n=e.expanded,o=e.disabled,r=e.disableGutters,i={root:["root",n&&"expanded",o&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return(0,f.Z)(i,R,t)}(Z);return(0,j.jsxs)(q,(0,d.Z)({focusRipple:!1,disableRipple:!0,disabled:b,component:"div","aria-expanded":y,className:(0,p.Z)(C.root,i),focusVisibleClassName:(0,p.Z)(C.focusVisible,s),onClick:function(e){w&&w(e),u&&u(e)},ref:t,ownerState:Z},c,{children:[(0,j.jsx)(I,{className:C.content,ownerState:Z,children:o}),a&&(0,j.jsx)(M,{className:C.expandIconWrapper,ownerState:Z,children:a})]}))}));function z(e){return(0,w.Z)("MuiAccordionDetails",e)}(0,y.Z)("MuiAccordionDetails",["root"]);var H=["className"],P=(0,h.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),E=r.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiAccordionDetails"}),o=n.className,r=(0,l.Z)(n,H),i=n,a=function(e){var t=e.classes;return(0,f.Z)({root:["root"]},z,t)}(i);return(0,j.jsx)(P,(0,d.Z)({className:(0,p.Z)(a.root,o),ref:t,ownerState:i},r))})),V=n(1131),G=n.p+"static/media/brandIconSmall.cb911f83c040e8d98790.webp",O=n(7689),W=n(1087),_=r.lazy((function(){return Promise.all([n.e(704),n.e(889),n.e(11),n.e(433)]).then(n.bind(n,2095))})),L=function(){var e,t,n,u,c,l,d;(0,r.useEffect)((function(){document.title="About Herba Naturals - Learn More About Our CBD Journey in Kirkland",document.querySelector('meta[name="description"]').setAttribute("content","Learn about Herba Natural's mission, our high-quality CBD products, and our journey in the CBD industry in Kirkland.")}),[]);var p=(0,r.useState)([]),f=(0,o.Z)(p,2),h=f[0],m=f[1],v=(0,r.useState)(!1),b=(0,o.Z)(v,2),g=b[0],x=b[1],y=(0,r.useState)(0),w=(0,o.Z)(y,2),Z=w[0],C=w[1],S=(0,r.useState)(!1),N=(0,o.Z)(S,2),B=N[0],R=N[1],D=(0,r.useState)(null),A=(0,o.Z)(D,2),q=A[0],I=A[1],M=(0,O.TH)(),z=(0,r.useRef)(null);(0,r.useEffect)((function(){var e;null!==(e=M.state)&&void 0!==e&&e.scrollToBottom&&z.current&&z.current.scrollIntoView({behavior:"smooth"})}),[M.state,null===(e=M.state)||void 0===e?void 0:e.scrollToBottom]),(0,r.useEffect)((function(){H()}),[]);var H=function(){x(!0),fetch("http://localhost:8000/api/product/bestsellers?limit=3").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){m(e),x(!1)})).catch((function(e){console.error("Error fetching best sellers:",e),x(!1)}))},P={fontSize:"10px",padding:"15px",height:"26px"};return(0,j.jsxs)("div",{className:"about-container",children:[(0,j.jsx)("div",{style:{height:"100%",width:"100%"},children:(0,j.jsx)("img",{src:G,alt:"brand icon",height:"100%",width:"100%"})}),(0,j.jsx)("h1",{children:"About Us at Herba Naturals"}),(0,j.jsx)("p",{className:"slogan",children:'"Harmony in Every Leaf, Relish Herbs for Holistic Living"'}),(0,j.jsx)("section",{className:"introduction",children:(0,j.jsx)("p",{children:"Welcome to Herba Naturals, a sanctuary where the purity of nature meets the art of holistic wellness. Our journey began with a simple, yet profound belief: nature holds the key to harmony and well-being.  Inspired by the therapeutic virtues of CBD, we embarked on a mission to bring its natural benefits to your doorstep."})}),(0,j.jsxs)("section",{className:"philosophy",children:[(0,j.jsx)("h2",{children:"Our Philosophy"}),(0,j.jsx)("p",{children:"        At Herba Naturals, we are driven by a passion for purity and quality. We believe that true wellness emerges from products that are as close to their natural state as possible. This philosophy guides our selection of CBD products, ensuring that every item we offer is sourced from the finest, most responsible producers."})]}),(0,j.jsxs)("section",{className:"products",children:[(0,j.jsx)("h2",{children:"Our Products"}),g?(0,j.jsx)(i.Z,{}):(0,j.jsxs)("div",{className:"product-gallery",children:[(0,j.jsxs)("div",{className:"product-display",children:[(0,j.jsxs)("div",{className:"about-product-item",children:[(0,j.jsx)("img",{style:{backgroundColor:"white"},src:null===(t=h[Z])||void 0===t?void 0:t.imgSource[0].url,alt:null===(n=h[Z])||void 0===n?void 0:n.name}),(0,j.jsx)(a.Z,{variant:"outlined",sx:P,className:"dropdown-featured-button",onClick:function(){I(h[Z]._id),R(!0)},children:"Quick View"})]}),(0,j.jsxs)(s.Z,{display:{xs:"none",sm:"flex"},children:[h[Z+1]?(0,j.jsxs)("div",{className:"about-product-item",children:[(0,j.jsx)("img",{style:{backgroundColor:"white"},src:null===(u=h[Z+1])||void 0===u?void 0:u.imgSource[0].url,alt:null===(c=h[Z+1])||void 0===c?void 0:c.name}),(0,j.jsx)(a.Z,{variant:"outlined",sx:P,className:"dropdown-featured-button",onClick:function(){var e;I(null===(e=h[Z+1])||void 0===e?void 0:e._id),R(!0)},children:"Quick View"})]}):null,h[Z+2]?(0,j.jsx)("div",{className:"about-product-item",children:(0,j.jsxs)("div",{className:"about-product-item",children:[(0,j.jsx)("img",{style:{backgroundColor:"white"},src:null===(l=h[Z+2])||void 0===l?void 0:l.imgSource[0].url,alt:null===(d=h[Z+2])||void 0===d?void 0:d.name}),(0,j.jsx)(a.Z,{variant:"outlined",sx:P,className:"dropdown-featured-button",onClick:function(){var e;I(null===(e=h[Z+2])||void 0===e?void 0:e._id),R(!0)},children:"Quick View"})]})}):null]})]}),(0,j.jsxs)("div",{className:"gallery-controls",children:[(0,j.jsx)("button",{onClick:function(){C((function(e){return(e-1+h.length)%h.length}))},children:"<"}),(0,j.jsx)("span",{children:"CONTROLLS"}),(0,j.jsx)("button",{onClick:function(){C((function(e){return(e+1)%h.length}))},children:">"})]})]}),(0,j.jsx)("p",{children:"     Our shelves boast a curated collection of CBD products from three premium brands, each selected for their commitment to quality and purity. From soothing oils and balms to rejuvenating creams and edibles, every product is a testament to our dedication to your holistic well-being. As we grow, we aim to expand our range, continuously exploring new, innovative brands that align with our ethos."})]}),(0,j.jsxs)("section",{className:"promise",children:[(0,j.jsx)("h2",{children:"Our Promise"}),(0,j.jsx)("p",{children:"   At Herba Naturals, we understand that every individual's journey to wellness is unique. Our promise to you is one of unwavering commitment to excellence and education. We strive to be not just a provider of CBD products, but a trusted advisor and friend on your path to holistic living. Our knowledgeable team is always ready to guide you through our selections, ensuring you find the perfect product to harmonize your body, mind, and spirit."})]}),(0,j.jsxs)("section",{className:"join-us",children:[(0,j.jsx)("h2",{children:"Join Us"}),(0,j.jsxs)("p",{children:["         We invite you to experience the tranquil essence of Herba Naturals. Discover the harmony in every leaf, and embrace the world of holistic well-being that awaits you.   ",(0,j.jsx)(W.rU,{to:"/registration",children:"Join Us Now"})]})]}),(0,j.jsxs)("section",{className:"faq",children:[(0,j.jsx)("h2",{children:"Frequently Asked Questions"}),(0,j.jsx)("div",{className:"faq-accordion",children:[{question:"What is CBD?",answer:"CBD is a naturally occurring compound found in the hemp plant, known for its potential therapeutic properties without the psychoactive effects often associated with cannabis."},{question:"How do I choose the right CBD product?",answer:"Choosing the right CBD product depends on your wellness goals, preferred method of consumption, and any specific dietary or allergic needs you may have. Our team can help guide you to the best choice for your individual needs."},{question:"Is CBD legal?",answer:"CBD products derived from hemp containing less than 0.3% THC are legal at the federal level in the United States, but still illegal under some state laws. Check your local legislation for more information."},{question:"Can CBD products make me 'high'?",answer:"No, CBD is a non-psychoactive compound, which means it does not produce the 'high' associated with THC, a different compound found in the cannabis plant."},{question:"Are there any side effects of using CBD?",answer:"CBD is generally well-tolerated and considered safe, but some people may experience mild side effects like fatigue, changes in appetite, or gastrointestinal issues. Consult with a healthcare provider before starting any new supplement."},{question:"How should I store my CBD products?",answer:"CBD products should be stored in a cool, dry place away from direct sunlight to preserve their quality and potency."},{question:"Can I use CBD products while taking other medications?",answer:"CBD can interact with certain medications, so it's important to consult with a healthcare professional before starting to use CBD products if you are on medication."},{question:"How long does it take for CBD to work?",answer:"The onset time for CBD effects can vary depending on the method of consumption. Oils and tinctures may work within 30 minutes, while edibles can take up to two hours."},{question:"What is the difference between full-spectrum, broad-spectrum, and isolate CBD products?",answer:"Full-spectrum CBD contains all compounds found in the hemp plant, including trace amounts of THC. Broad-spectrum has most hemp compounds but no THC, while isolate is pure CBD with no other cannabinoids."},{question:"Do you provide lab reports for your products?",answer:"Yes, we believe in transparency and provide third-party lab reports for all of our products, ensuring their quality, potency, and safety."}].map((function(e,t){return(0,j.jsxs)(k,{children:[(0,j.jsx)(T,{expandIcon:(0,j.jsx)(V.Z,{}),"aria-controls":"panel".concat(t,"a-content"),id:"panel".concat(t,"a-header"),children:e.question}),(0,j.jsx)(E,{children:e.answer})]},t)}))}),(0,j.jsx)("div",{ref:z})]}),(0,j.jsx)(_,{productId:q,open:B,handleClose:function(){return R(!1)},products:h})]})}},1131:function(e,t,n){"use strict";var o=n(4836);t.Z=void 0;var r=o(n(5649)),i=n(184),a=(0,r.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=a},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=n(8610)},9259:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var o=n(7462),r=n(3366),i=n(2791),a=n(3733),s=n(4419),u=n(4036),c=n(1402),l=n(6934),d=n(5878),p=n(1217);function f(e){return(0,p.Z)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var h=n(184),m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],v=(0,l.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"inherit"!==n.color&&t["color".concat((0,u.Z)(n.color))],t["fontSize".concat((0,u.Z)(n.fontSize))]]}})((function(e){var t,n,o,r,i,a,s,u,c,l,d,p,f,h=e.theme,m=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:m.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(t=h.transitions)||null==(n=t.create)?void 0:n.call(t,"fill",{duration:null==(o=h.transitions)||null==(o=o.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(r=h.typography)||null==(i=r.pxToRem)?void 0:i.call(r,20))||"1.25rem",medium:(null==(a=h.typography)||null==(s=a.pxToRem)?void 0:s.call(a,24))||"1.5rem",large:(null==(u=h.typography)||null==(c=u.pxToRem)?void 0:c.call(u,35))||"2.1875rem"}[m.fontSize],color:null!=(l=null==(d=(h.vars||h).palette)||null==(d=d[m.color])?void 0:d.main)?l:{action:null==(p=(h.vars||h).palette)||null==(p=p.action)?void 0:p.active,disabled:null==(f=(h.vars||h).palette)||null==(f=f.action)?void 0:f.disabled,inherit:void 0}[m.color]}})),b=i.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiSvgIcon"}),l=n.children,d=n.className,p=n.color,b=void 0===p?"inherit":p,g=n.component,x=void 0===g?"svg":g,y=n.fontSize,w=void 0===y?"medium":y,Z=n.htmlColor,C=n.inheritViewBox,j=void 0!==C&&C,S=n.titleAccess,N=n.viewBox,k=void 0===N?"0 0 24 24":N,B=(0,r.Z)(n,m),R=i.isValidElement(l)&&"svg"===l.type,D=(0,o.Z)({},n,{color:b,component:x,fontSize:w,instanceFontSize:e.fontSize,inheritViewBox:j,viewBox:k,hasSvgAsChild:R}),A={};j||(A.viewBox=k);var q=function(e){var t=e.color,n=e.fontSize,o=e.classes,r={root:["root","inherit"!==t&&"color".concat((0,u.Z)(t)),"fontSize".concat((0,u.Z)(n))]};return(0,s.Z)(r,f,o)}(D);return(0,h.jsxs)(v,(0,o.Z)({as:x,className:(0,a.Z)(q.root,d),focusable:"false",color:Z,"aria-hidden":!S||void 0,role:S?"img":void 0,ref:t},A,B,R&&l.props,{ownerState:D,children:[R?l.props.children:l,S?(0,h.jsx)("title",{children:S}):null]}))}));b.muiName="SvgIcon";var g=b},1260:function(e,t,n){"use strict";var o=n(8949);t.Z=o.Z},4223:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(7462),r=n(2791),i=n(9259),a=n(184);function s(e,t){function n(n,r){return(0,a.jsx)(i.Z,(0,o.Z)({"data-testid":"".concat(t,"Icon"),ref:r},n,{children:e}))}return n.muiName=i.Z.muiName,r.memo(r.forwardRef(n))}},8610:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return a.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return u},isMuiElement:function(){return c.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return w},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return m.Z},unsupportedProp:function(){return v},useControlled:function(){return b.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return y.Z}});var o=n(5902),r=n(4036),i=n(1260),a=n(4223),s=n(3199);var u=function(e,t){return function(){return null}},c=n(9103),l=n(8301),d=n(7602);n(7462);var p=function(e,t){return function(){return null}},f=n(2971).Z,h=n(162),m=n(7384);var v=function(e,t,n,o,r){return null},b=n(4556),g=n(9683),x=n(2071),y=n(3031),w={configure:function(e){o.Z.configure(e)}}},4556:function(e,t,n){"use strict";var o=n(8637);t.Z=o.Z},7384:function(e,t,n){"use strict";var o=n(8252);t.Z=o.Z},8637:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(9439),r=n(2791);function i(e){var t=e.controlled,n=e.default,i=(e.name,e.state,r.useRef(void 0!==t).current),a=r.useState(n),s=(0,o.Z)(a,2),u=s[0],c=s[1];return[i?t:u,r.useCallback((function(e){i||c(e)}),[])]}},8252:function(e,t,n){"use strict";var o;n.d(t,{Z:function(){return u}});var r=n(9439),i=n(2791),a=0;var s=(o||(o=n.t(i,2)))["useId".toString()];function u(e){if(void 0!==s){var t=s();return null!=e?e:t}return function(e){var t=i.useState(e),n=(0,r.Z)(t,2),o=n[0],s=n[1],u=e||o;return i.useEffect((function(){null==o&&s("mui-".concat(a+=1))}),[o]),u}(e)}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=570.ba6d278c.chunk.js.map