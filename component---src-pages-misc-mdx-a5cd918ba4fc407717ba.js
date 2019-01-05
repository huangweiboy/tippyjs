(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m}),t.d(n,"_frontmatter",function(){return u});var a=t(85),o=t.n(a),r=t(7),s=t.n(r),c=t(0),i=t.n(c),l=t(177),p=t(175),m=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=p.a,t}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return i.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:t,components:n},i.a.createElement(l.MDXTag,{name:"h3",components:n},"Hide tooltips on scroll"),i.a.createElement(l.MDXTag,{name:"p",components:n},"In some cases it may be desirable to hide tooltips when scrolling (for example,\non touch devices)."),i.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},i.a.createElement("pre",{className:"language-js"},i.a.createElement("code",{className:"language-js"},i.a.createElement("span",{className:"token comment"},"// Basic usage"),"\n",i.a.createElement("span",{className:"token comment"},"// Note that `hideAllPoppers` won't hide a tippy if it has `hideOnClick: false`"),"\n",i.a.createElement("span",{className:"token dom variable"},"window"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token method function"},"addEventListener"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token string"},"'scroll'"),i.a.createElement("span",{className:"token punctuation"},",")," tippy",i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token access property"},"hideAllPoppers"),i.a.createElement("span",{className:"token punctuation"},")"),"\n","\n",i.a.createElement("span",{className:"token comment"},"// More control"),"\n",i.a.createElement("span",{className:"token dom variable"},"window"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token method function"},"addEventListener"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token string"},"'scroll'"),i.a.createElement("span",{className:"token punctuation"},",")," ",i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},")")," ",i.a.createElement("span",{className:"token arrow operator"},"=>")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",i.a.createElement("span",{className:"token keyword"},"const")," poppers ",i.a.createElement("span",{className:"token operator"},"=")," ",i.a.createElement("span",{className:"token class class-name"},"Array"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token module keyword"},"from"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token dom variable"},"document"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token method function"},"querySelectorAll"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token string"},"'.tippy-popper'"),i.a.createElement("span",{className:"token punctuation"},")"),i.a.createElement("span",{className:"token punctuation"},")"),"\n","  ","poppers",i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token method function"},"forEach"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token parameter"},"popper")," ",i.a.createElement("span",{className:"token arrow operator"},"=>")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",i.a.createElement("span",{className:"token comment"},"// If you pass 0 as the duration, you can make all of them hide instantly"),"\n","    ","popper",i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token access property"},"_tippy"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token method function"},"hide"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token number"},"0"),i.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},")"),"\n",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},")")))),i.a.createElement(l.MDXTag,{name:"h3",components:n},"Scrollable containers"),i.a.createElement(l.MDXTag,{name:"p",components:n},"By default, a tippy is prevented from overflowing a scrolling container (with\n",i.a.createElement("code",{className:"language-text"},"overflow")," set). If the reference element is inside, the tippy can stay stuck in\nthe container viewport while scrolling or may be positioned incorrectly in some\ncases. To solve this, you can use the following popperOptions."),i.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},i.a.createElement("pre",{className:"language-js"},i.a.createElement("code",{className:"language-js"},i.a.createElement("span",{className:"token function"},"tippy"),i.a.createElement("span",{className:"token punctuation"},"("),"ref",i.a.createElement("span",{className:"token punctuation"},",")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",i.a.createElement("span",{className:"token definition property"},"popperOptions"),i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",i.a.createElement("span",{className:"token definition property"},"modifiers"),i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ",i.a.createElement("span",{className:"token definition property"},"preventOverflow"),i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",i.a.createElement("span",{className:"token definition property"},"boundariesElement"),i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token string"},"'window'"),i.a.createElement("span",{className:"token punctuation"},","),"\n","      ",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},","),"\n","    ",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},","),"\n","  ",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},","),"\n",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},")")))),i.a.createElement(l.MDXTag,{name:"h3",components:n},"Buttons with tooltips on touch devices"),i.a.createElement(l.MDXTag,{name:"p",components:n},"A tooltip on a button is generally used to convey information before the user\ndecides to click on it. On touch devices, this isn't possible because a tap is\nrequired to show the tooltip, which will fire a click event."),i.a.createElement(l.MDXTag,{name:"p",components:n},"On iOS, a tap will show the tooltip but click events won't fire until a second\ntap. This allows the user to see the tooltip before deciding to click the\nbutton. On Android, clicking the button will show the tooltip and also fire a\nclick event."),i.a.createElement(l.MDXTag,{name:"p",components:n},"Depending on your use case, one of these will be preferred, so user agent\nchecking may be needed. If neither behavior is preferred, consider using the\ntouchHold: true option which allows the user to see the tooltip while pressing\nand holding the button, but won't fire a click event unless the click appears to\nbe intentional."),i.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},i.a.createElement("pre",{className:"language-js"},i.a.createElement("code",{className:"language-js"},i.a.createElement("span",{className:"token keyword"},"const")," button ",i.a.createElement("span",{className:"token operator"},"=")," ",i.a.createElement("span",{className:"token dom variable"},"document"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token method function"},"querySelector"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token string"},"'button'"),i.a.createElement("span",{className:"token punctuation"},")"),"\n",i.a.createElement("span",{className:"token keyword"},"const")," isIOS ",i.a.createElement("span",{className:"token operator"},"=")," ",i.a.createElement("span",{className:"token regex"},"/iPhone|iPad|iPod/"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token method function"},"test"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token dom variable"},"navigator"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token access property"},"platform"),i.a.createElement("span",{className:"token punctuation"},")"),"\n","\n",i.a.createElement("span",{className:"token comment"},"/*==================================================","\n","Make iOS behave like Android (single tap to click)","\n","==================================================*/"),"\n","button",i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token method function"},"addEventListener"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token string"},"'click'"),i.a.createElement("span",{className:"token punctuation"},",")," ",i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},")")," ",i.a.createElement("span",{className:"token arrow operator"},"=>")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",i.a.createElement("span",{className:"token comment"},"// Your logic"),"\n",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},")"),"\n",i.a.createElement("span",{className:"token function"},"tippy"),i.a.createElement("span",{className:"token punctuation"},"("),"button",i.a.createElement("span",{className:"token punctuation"},",")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",i.a.createElement("span",{className:"token function"},"onShow"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},")")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",i.a.createElement("span",{className:"token keyword"},"if")," ",i.a.createElement("span",{className:"token punctuation"},"("),"isIOS",i.a.createElement("span",{className:"token punctuation"},")")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","button",i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token method function"},"click"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},")"),"\n","    ",i.a.createElement("span",{className:"token punctuation"},"}"),"\n","  ",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},","),"\n",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},")"),"\n","\n",i.a.createElement("span",{className:"token comment"},"/*==================================================","\n","Make Android behave like iOS (double tap to click)","\n","==================================================*/"),"\n",i.a.createElement("span",{className:"token comment"},"// Useful function for dynamically determining the input type:"),"\n",i.a.createElement("span",{className:"token comment"},"// https://github.com/30-seconds/30-seconds-of-code#onuserinputchange"),"\n",i.a.createElement("span",{className:"token keyword"},"let")," isUsingTouch ",i.a.createElement("span",{className:"token operator"},"=")," ",i.a.createElement("span",{className:"token boolean"},"false"),"\n",i.a.createElement("span",{className:"token function"},"onUserInputChange"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token parameter"},"type")," ",i.a.createElement("span",{className:"token arrow operator"},"=>")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","isUsingTouch ",i.a.createElement("span",{className:"token operator"},"=")," type ",i.a.createElement("span",{className:"token operator"},"===")," ",i.a.createElement("span",{className:"token string"},"'touch'"),"\n",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},")"),"\n","\n",i.a.createElement("span",{className:"token keyword"},"const")," tip ",i.a.createElement("span",{className:"token operator"},"=")," tippy",i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token method function"},"one"),i.a.createElement("span",{className:"token punctuation"},"("),"button",i.a.createElement("span",{className:"token punctuation"},")"),"\n","button",i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token method function"},"addEventListener"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token string"},"'click'"),i.a.createElement("span",{className:"token punctuation"},",")," ",i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},")")," ",i.a.createElement("span",{className:"token arrow operator"},"=>")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",i.a.createElement("span",{className:"token keyword"},"if")," ",i.a.createElement("span",{className:"token punctuation"},"("),"isIOS ",i.a.createElement("span",{className:"token operator"},"||")," ",i.a.createElement("span",{className:"token operator"},"!"),"isUsingTouch ",i.a.createElement("span",{className:"token operator"},"?")," ",i.a.createElement("span",{className:"token boolean"},"true")," ",i.a.createElement("span",{className:"token punctuation"},":")," tip",i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token access property"},"state"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token access property"},"isShown"),i.a.createElement("span",{className:"token punctuation"},")")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",i.a.createElement("span",{className:"token comment"},"// Your logic"),"\n","  ",i.a.createElement("span",{className:"token punctuation"},"}"),"\n",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},")")))))},n}(i.a.Component),u={}},169:function(e,n,t){"use strict";t.d(n,"h",function(){return l}),t.d(n,"g",function(){return p}),t.d(n,"b",function(){return m}),t.d(n,"f",function(){return u}),t.d(n,"d",function(){return d}),t.d(n,"e",function(){return f}),t.d(n,"a",function(){return g}),t.d(n,"c",function(){return h});var a=t(85),o=t.n(a),r=(t(58),t(59),t(180),t(0)),s=t.n(r),c=t(168),i=t(37),l={xs:360,sm:576,md:768,lg:992,xl:1200},p=Object.keys(l).reduce(function(e,n){return e[n]="@media (min-width: "+l[n]+"px)",e},{}),m=(c.c.div.withConfig({displayName:"Framework__Center",componentId:"sc-1kcsy75-0"})(["text-align:center;"]),c.c.div.withConfig({displayName:"Framework__Container",componentId:"sc-1kcsy75-1"})(["position:relative;max-width:940px;padding:0 ","%;margin:0 auto;","{padding:0 25px;}","{padding:0 40px;}","{padding:0 50px;}"],function(e){return e.mobilePadding},p.sm,p.md,p.lg));m.defaultProps={mobilePadding:5},Object(c.c)(function(e){var n=e.children,t=(e.spacing,o()(e,["children","spacing"]));return s.a.createElement("div",t,n)}).withConfig({displayName:"Framework__Row",componentId:"sc-1kcsy75-2"})(["display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 -","px;"],function(e){return e.spacing}).defaultProps={spacing:15},Object(c.c)(function(e){var n=e.children,t=(e.base,e.xs,e.sm,e.md,e.lg,e.xl,e.spacing,o()(e,["children","base","xs","sm","md","lg","xl","spacing"]));return s.a.createElement("div",t,n)}).withConfig({displayName:"Framework__Col",componentId:"sc-1kcsy75-3"})(["flex:1;padding:0 ","px;"," ",";"],function(e){return e.spacing},function(e){return e.base&&Object(c.b)(["flex-basis:","%;"],function(e){return 100*e.base/12})},function(e){return["xs","sm","md","lg","xl"].filter(function(n){return e[n]}).map(function(e){return Object(c.b)(["","{flex-basis:","%;}"],p[e],function(n){return 100*n[e]/12})})}).defaultProps={spacing:15};var u=Object(c.c)(i.Link).attrs(function(e){return{activeStyle:{fontWeight:"bold",background:"linear-gradient(90deg, white, rgba(255, 255, 255, 0.001))"}}}).withConfig({displayName:"Framework__Link",componentId:"sc-1kcsy75-4"})(["color:inherit;text-decoration:none;transition:color 0.15s;"]),d=c.c.a.attrs(function(e){return{target:"_blank",rel:"noopener noreferrer"}}).withConfig({displayName:"Framework__ExternalLink",componentId:"sc-1kcsy75-5"})(["color:inherit;text-decoration:none;transition:color 0.15s;&:hover{color:#2263e5;}"]),f=c.c.div.withConfig({displayName:"Framework__Flex",componentId:"sc-1kcsy75-6"})(["display:flex;flex-wrap:wrap;justify-content:",";> div{margin-right:15px;margin-bottom:15px;flex:",";}"],function(e){return e.justify},function(e){return"even"===e.type&&1});f.defaultProps={justify:"space-between"};var g=c.c.button.withConfig({displayName:"Framework__Button",componentId:"sc-1kcsy75-7"})(["border:none;background:linear-gradient(135deg,#56c8ff,#6f99fc) no-repeat;color:white;will-change:opacity;box-shadow:0 4px 8px -1px rgba(25,80,137,0.08),0 8px 24px -2px rgba(0,128,255,0.06);font-size:17px;font-weight:600;text-shadow:0 1px 0 rgba(0,0,0,0.1);padding:8px 16px;border-radius:4px;margin-right:8px;margin-bottom:8px;transition:opacity 0.2s;&:hover{opacity:0.8;}"]),h=c.c.div.withConfig({displayName:"Framework__Demo",componentId:"sc-1kcsy75-8"})(["margin:15px 0;background:#eeeefa;padding:15px 15px 6px;border-radius:8px;"])},171:function(e){e.exports={data:{allMdx:{edges:[{node:{frontmatter:{title:"Creating Tooltips",path:"/creating-tooltips",index:2}}},{node:{frontmatter:{title:"Customizing Tooltips",path:"/customizing-tooltips",index:3}}},{node:{frontmatter:{title:"Getting Started",path:"/getting-started",index:1}}},{node:{frontmatter:{title:"HTML Content",path:"/html-content",index:9}}},{node:{frontmatter:{title:"Demo",path:"/",index:0}}},{node:{frontmatter:{title:"Methods",path:"/methods",index:6}}},{node:{frontmatter:{title:"Misc",path:"/misc",index:10}}},{node:{frontmatter:{title:"Objects",path:"/objects",index:5}}},{node:{frontmatter:{title:"Themes",path:"/themes",index:8}}},{node:{frontmatter:{title:"All Options",path:"/all-options",index:4}}},{node:{frontmatter:{title:"AJAX",path:"/ajax",index:7}}}]}}}},172:function(e,n,t){"use strict";var a=t(174),o=t(0),r=t.n(o),s=t(185),c=t.n(s),i=t(37);function l(e){var n=e.title,t=e.description,o=e.lang,s=e.meta,l=e.keywords,m=e.pageContext;return r.a.createElement(i.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description,i="Demo"===m.frontmatter.title,p=n||(i?"Tippy.js - Vanilla JS Tooltip and Popover Library":m.frontmatter.title);return r.a.createElement(c.a,{htmlAttributes:{lang:o},title:p,titleTemplate:i?null:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:p},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:p},{name:"twitter:description",content:a}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(s)})},data:a})}l.defaultProps={lang:"en",meta:[],keywords:[]},n.a=l;var p="1025518380"},173:function(e,n,t){e.exports=t.p+"static/logo-ebc385458e03fdb24af078536af88065.svg"},174:function(e){e.exports={data:{site:{siteMetadata:{title:"Tippy.js",description:"A simple, easy-to-use vanilla JavaScript library for creating tooltips and popovers to use in web sites and apps. The flat-level option API makes customizing a tooltip and popover as easy as adding a single object property or data attribute. Make tooltips follow the mouse cursor, have an arrow, change duration and delay, have custom themes and animations, HTML content, touch support, and more...",author:"@atomiks"}}}}},175:function(e,n,t){"use strict";var a=t(7),o=t.n(a),r=t(0),s=t.n(r),c=t(169),i=t(171),l=t(168),p=t(37),m=t(57),u=t(181),d=t.n(u),f=l.c.nav.withConfig({displayName:"Nav__Navbar",componentId:"sc-1ofyja1-0"})(["display:",";position:fixed;top:0;bottom:0;width:250px;border-right:1px solid rgba(0,16,64,0.08);background-clip:padding-box;padding:16px 0;background:#f7f8fc;overflow-y:auto;z-index:1;transform:",";transition:transform ",",visibility 0.2s;transition-timing-function:",";visibility:",";"],function(e){return e.isDisplayed?"block":"none"},function(e){return e.isOpen?"translate3d(0, 0, 0)":"translate3d(-100%, 0, 0)"},function(e){return e.isOpen?"0.45s":"0.3s"},function(e){return e.isOpen?"cubic-bezier(.165, .84, .44, 1)":"cubic-bezier(.77, 0, .175, 1)"},function(e){return e.isOpen?"visible":"hidden"}),g=l.c.ul.withConfig({displayName:"Nav__List",componentId:"sc-1ofyja1-1"})(["list-style:none;padding-left:0;margin:0;"]),h=l.c.li.withConfig({displayName:"Nav__ListItem",componentId:"sc-1ofyja1-2"})(["margin:0;&:not(:last-child){border-bottom:1px dotted rgba(0,16,64,0.1);}> a{display:block;padding:12px 25px;&:hover{border-bottom-color:transparent;}}"]),k=l.c.button.withConfig({displayName:"Nav__XButton",componentId:"sc-1ofyja1-3"})(["position:absolute;right:10px;background:none;border:none;color:inherit;padding:0;","{display:none;}"],c.g.lg),b=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))||this).state={isMounted:!1,windowWidth:1200,transitions:!0},n.ref=Object(r.createRef)(),n.handleResize=function(){n.setState({windowWidth:window.innerWidth,transitions:!1}),clearTimeout(n.timeout),n.timeout=setTimeout(function(){n.setState({transitions:!0})},100)},n.handleClose=function(){n.props.close()},n.handleTransitionEnd=function(){n.props.isOpen&&setTimeout(function(){n.ref.current.focus()})},n.handleBlur=function(e){e.currentTarget.contains(e.relatedTarget)||n.props.close()},n}o()(n,e);var t=n.prototype;return t.componentDidMount=function(){this.setState({isMounted:!0}),window.addEventListener("resize",this.handleResize),this.handleResize()},t.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize),clearTimeout(this.timeout)},t.render=function(){var e=this.props.isOpen,n=this.state,t=n.isMounted,a=n.windowWidth,o=n.transitions;return s.a.createElement(f,{tabIndex:"-1","aria-label":"Menu",ref:this.ref,style:{transition:o?"":"none"},isOpen:e||a>=c.h.lg,isDisplayed:t||a>=c.h.lg,onTransitionEnd:this.handleTransitionEnd,onBlur:this.handleBlur},s.a.createElement(k,{"aria-label":"Close Menu",onClick:this.handleClose},s.a.createElement(d.a,{style:{width:36,height:36}})),s.a.createElement(g,null,s.a.createElement(p.StaticQuery,{query:E,render:function(e){return Object(m.a)(e.allMdx.edges).map(function(e){var n=e.node;return s.a.createElement(h,{key:n.frontmatter.path},s.a.createElement(c.f,{to:n.frontmatter.path},n.frontmatter.title))})},data:i})))},n}(r.Component),E="4190207198",y=l.c.span.withConfig({displayName:"NavButtons__FadedText",componentId:"ii0ddk-0"})(["position:relative;top:-2px;opacity:0.4;font-size:70%;margin-right:10px;font-weight:bold;display:block;","{display:inline;}"],c.g.md),N=Object(l.c)(p.Link).withConfig({displayName:"NavButtons__NavButton",componentId:"ii0ddk-1"})(["display:block;padding:40px 25px;border:",";border-radius:4px;background:",";text-decoration:none;color:",";filter:",";font-weight:bold;transition:box-shadow 0.2s;flex:1;margin:0 10px;max-width:500px;font-size:20px;transition:all 0.1s;&:hover{border-color:inherit;border-bottom:",";filter:",";}","{font-size:24px;}"],function(e){return e["data-next"]?"none":"1px solid rgba(0, 16, 64, 0.15)"},function(e){return e["data-next"]?"linear-gradient(90deg,#f3edff,#edf5ff)":"white"},function(e){return e["data-next"]?"#2569d7":"inherit"},function(e){return e["data-next"]&&"saturate(1.15)"},function(e){return e["data-next"]&&"none"},function(e){return e["data-next"]&&"saturate(1.15) brightness(1.02)"},c.g.md);var x=function(e){var n=e.next;return s.a.createElement(c.e,{style:{marginTop:40,marginLeft:-10,marginRight:-10}},s.a.createElement(p.StaticQuery,{query:w,render:function(e){var t=Object(m.a)(e.allMdx.edges).map(function(e){return e.node}),a=t[n],o=n>1?t[n-2]:null;return s.a.createElement(s.a.Fragment,null,o&&s.a.createElement(N,{to:o.frontmatter.path},s.a.createElement(y,null,"PREV")," ",o.frontmatter.title),a&&s.a.createElement(N,{to:a.frontmatter.path,"data-next":!0},s.a.createElement(y,null,"NEXT")," ",a.frontmatter.title))},data:i}))},w="4190207198",v=t(9),O=t.n(v),j=t(173),_=t.n(j),C=t(182),M=t.n(C),T=t(183),z=t.n(T),P=t(184),I=t.n(P),S=l.c.header.withConfig({displayName:"Header__HeaderRoot",componentId:"sc-9eu2yh-0"})(["position:relative;background:linear-gradient(91deg,#f1eefc,#9dc6ff 70%,#a5bcff);padding:25px 0;text-align:center;margin-bottom:50px;"]),D=l.c.img.withConfig({displayName:"Header__Logo",componentId:"sc-9eu2yh-1"})(["width:80px;margin-bottom:10px;"]),L=l.c.h1.withConfig({displayName:"Header__Title",componentId:"sc-9eu2yh-2"})(["font-size:48px;font-weight:600;margin-top:0;margin-bottom:25px;"]),F=Object(l.c)(c.d).withConfig({displayName:"Header__ButtonLink",componentId:"sc-9eu2yh-3"})(["background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.4);padding:12px 24px;border-radius:4px;transition:all 0.15s;color:#4574c0;margin:0 10px 10px;font-weight:500;&:hover{background:white;border-bottom-color:white;box-shadow:0 8px 16px -2px rgba(0,32,128,0.25);}"]),A=l.c.button.withConfig({displayName:"Header__MenuButton",componentId:"sc-9eu2yh-4"})(["position:absolute;top:-10px;left:15px;color:inherit;font-weight:bold;border:none;background:none;text-transform:uppercase;border-radius:4px;padding:0;","{display:none;}"],c.g.lg),X={verticalAlign:-6,marginRight:10},B=O()({},X,{color:"#f88e27"}),R=O()({},X,{color:"#333"}),H={width:36,height:36};var q=function(e){var n=e.openNav;return s.a.createElement(S,null,s.a.createElement(c.b,null,s.a.createElement(A,{"aria-label":"Menu",onClick:n},s.a.createElement(I.a,{style:H})),s.a.createElement(D,{src:_.a,draggable:"false"}),s.a.createElement(L,null,"Tippy.js"),s.a.createElement(c.e,{justify:"center"},s.a.createElement(F,{href:"https://popper.js.org"},s.a.createElement(z.a,{style:B}),"Powered by Popper.js"),s.a.createElement(F,{href:"https://github.com/atomiks/tippyjs"},s.a.createElement(M.a,{style:R}),"View on GitHub"))))},U=l.c.main.withConfig({displayName:"Main",componentId:"sc-7otpyo-0"})(["","{margin-left:250px;}"],c.g.lg),W=l.c.footer.withConfig({displayName:"Footer",componentId:"sc-1xqajj9-0"})(["text-align:center;padding:25px 0;border-top:1px solid rgba(0,16,64,0.08);margin-top:50px;color:#9dacb6;font-size:85%;background:white;"]),J=t(172),Q=t(170),V=t.n(Q);function Y(){var e=V()(["\n  html {\n    box-sizing: border-box;\n    height: 100%;\n  }\n\n  *,\n  *::after,\n  *::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    color: #324b64;\n    height: 100%;\n    font-size: 17px;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  :focus:not(.focus-visible) {\n    outline: 0;\n  }\n\n  &::-moz-selection {\n    background: #a886ff;\n    color: white;\n  }\n  &::selection {\n    background: #a886ff;\n    color: white;\n  }\n  \n  a {\n    color: #0065d5;\n    text-decoration: none;\n    border-bottom: 1px solid transparent;\n    transition: border-bottom-color 0.15s;\n\n    &:hover {\n      border-bottom-color: inherit;\n    }\n  }\n\n  h1, \n  h2, \n  h3, \n  h4, \n  h5, \n  h6 {\n    margin-top: 0;\n    margin-bottom: 1rem;\n\n    > a {\n      color: inherit;\n      padding-bottom: 0.25rem;\n    }\n  }\n\n  h1 {\n    font-size: 2.488rem;\n    margin-top: 2.488rem;\n  }\n\n  h2 {\n    font-size: 2.074rem;\n    margin-top: 2.074rem;\n    border-bottom: 1px solid rgba(0, 32, 128, 0.1);\n    padding-bottom: 10px;\n    margin-bottom: 1.5rem;\n  }\n\n  h3 {\n    font-size: 1.728rem;\n    margin-top: 1.728rem;\n  }\n\n  h4 {\n    font-size: 1.44rem;\n    margin-top: 1.5rem;\n  }\n\n  h5 {\n    font-size: 1.2rem;\n  }\n\n  p, \n  li {\n    line-height: 1.6;\n    margin-top: 0.5rem;\n  }\n\n  table {\n    box-shadow: 0 0 0 1px rgba(0,32,128,0.1);\n    border-collapse: collapse;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    line-height: 1.4;\n    border-radius: 0 0 10px 10px;\n  }\n\n  table tr {\n    padding: 5px;\n\n    &:not(:last-child) {\n      border-bottom: 1px dotted rgba(0,32,128,0.1);\n    }\n  }\n\n  td:first-child code {\n    background: none;\n    font-size: 90%;\n    color: inherit;\n    padding: 0;\n  }\n\n  table th, table td {\n    padding: 16px;\n    text-align: left;\n  }\n\n  table th {\n    position: relative;\n    z-index: 1;\n    font-size: 14px;\n    text-transform: uppercase;\n    background: #eeeefa;\n    position: sticky;\n    top: 0;\n  }\n\n  @media (max-width: 1150px) {\n    table {\n      border: 0;\n      box-shadow: none;\n    }\n\n    table thead {\n      display: none;\n    }\n\n    table tr {\n      border: 1px solid rgba(0,32,128,0.1);\n      display: block;\n      margin-bottom: 10px;\n      border-radius: 10px;\n    }\n\n    table td {\n      display: block;\n\n      &:not(:last-child) {\n        border-bottom: 1px dotted rgba(0,32,128,0.1);\n      }\n    }\n\n    table td:last-child {\n      border-bottom: 0;\n    }\n\n    table td::before {\n      content: attr(data-label);\n      display: block;\n      font-weight: bold;\n      text-transform: uppercase;\n      opacity: 0.7;\n      font-size: 13px;\n      margin-bottom: 5px;\n    }\n\n    td:first-child code {\n      font-size: 100%;\n    }\n  }\n"]);return Y=function(){return e},e}var G=Object(l.a)(Y());function K(){var e=V()(["\n  .tippy-tooltip.ajax-theme {\n    position: absolute;\n    width: 200px;\n    padding: 0;\n    overflow: hidden;\n\n    img {\n      display: block;\n      max-width: 100%;\n    }\n  }\n\n  .tippy-popper[x-placement^='top'] .tippy-tooltip.ajax-theme {\n    top: auto !important;\n    bottom: 0;\n  }\n  .tippy-popper[x-placement^='bottom'] .tippy-tooltip.ajax-theme {\n    bottom: auto !important;\n    top: 0;\n  }\n\n  .tippy-tooltip.tomato-theme {\n    font-weight: bold;\n    color: yellow;\n\n    .tippy-backdrop {\n      background: tomato;\n    }\n  }\n"]);return K=function(){return e},e}var Z=Object(l.a)(K());function $(){var e=V()(["\n  code,\n  pre {\n    font-family: Menlo, Consolas, 'Liberation Mono', Courier, monospace;\n  }\n\n  code[class*='language-'],\n  pre[class*='language-'] {\n    color: #cee6ff;\n    background: none;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 2.25;\n    font-size: 90%;\n    -moz-tab-size: 2;\n    -o-tab-size: 2;\n    tab-size: 2;\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  pre[class*='language-'] {\n    padding: 16px 15px;\n    margin-top: 0;\n    margin-left: -5.55%;\n    margin-right: -5.55%;\n    background: #22223f;\n    font-size: 15px;\n    line-height: 2;\n    max-height: 650px;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n\n    [data-elastic-wrapper] {\n      display: inline-block;\n    }\n\n    "," {\n      margin-left: -25px;\n      margin-right: -25px;\n    }\n\n    "," {\n      border-radius: 8px;\n      margin-left: 0;\n      margin-right: 0;\n      padding: 16px 24px;\n      font-size: 16px;\n    }\n  }\n\n  code.language-text {\n    background: linear-gradient(90deg, #f3edff, #edf5ff);\n    color: #2569d7;\n    font-weight: bold;\n    padding: 0.2em 0.4em;\n    border-radius: 4px;\n    font-size: 85%;\n    line-height: inherit;\n  }\n\n  .token.important,\n  .token.atrule,\n  .token.keyword {\n    color: #bc90ff;\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: #7692d9;\n  }\n\n  .token.attr-name,\n  .token.selector {\n    color: #ffb07b;\n  }\n\n  .token.boolean {\n    color: #ff81d0;\n  }\n\n  .token.punctuation,\n  .token.operator,\n  .token.op,\n  .token.module {\n    color: #6ed3ff;\n  }\n\n  .token.nil {\n    color: #9b9fb0;\n  }\n\n  .token.arrow {\n    color: #c49dff;\n  }\n\n  .token.parameter {\n    color: #ffc5ff;\n  }\n\n  .token.flow {\n    color: #e99eff;\n    font-style: italic;\n  }\n\n  .token.spread {\n    font-weight: bold;\n    color: #ff7e99;\n    text-shadow: 0px 1px 6px;\n  }\n\n  .namespace {\n    opacity: 0.7;\n  }\n\n  .token.tag {\n    color: #ff6c8b;\n  }\n\n  .token.number,\n  .token.symbol,\n  .token.deleted {\n    color: #ff984b;\n  }\n\n  .token.string,\n  .language-css .token.string,\n  .token.url,\n  .token.attr-value,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #4ef2d0;\n  }\n\n  .token.entity,\n  .style .token.string {\n    color: #ecd6ba;\n    text-shadow: 0 1px 3px transparentize(#ecd6ba, 0.5);\n  }\n\n  .token.function,\n  .token.property {\n    color: #61a5ff;\n  }\n\n  .token.method {\n    color: #16c5ff;\n  }\n\n  .token.variable {\n    color: #ffad92;\n  }\n\n  .token.dom,\n  .token.class-name {\n    color: #ffd278;\n  }\n\n  .token.property.definition {\n    color: #b6e992;\n  }\n\n  .token.property.access {\n    color: #8ec1ef;\n  }\n\n  .token.regex {\n    color: #88ecff;\n  }\n\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n"]);return $=function(){return e},e}var ee=Object(l.a)($(),c.g.sm,c.g.md);var ne=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(G,null),s.a.createElement(Z,null),s.a.createElement(ee,null))},te=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))||this).state={isNavOpen:!1},n.openNav=function(){n.setState({isNavOpen:!0})},n.closeNav=function(){n.setState({isNavOpen:!1})},n}return o()(n,e),n.prototype.render=function(){var e=this.state.isNavOpen,n=this.props,t=n.children,a=n.pageContext;return s.a.createElement(s.a.Fragment,null,s.a.createElement(ne,null),s.a.createElement(J.a,{pageContext:a}),s.a.createElement(b,{isOpen:e,close:this.closeNav}),s.a.createElement(U,null,s.a.createElement(q,{openNav:this.openNav}),s.a.createElement(c.b,null,s.a.createElement("h2",null,a.frontmatter.title),t,s.a.createElement(x,{next:a.frontmatter.index+1})),s.a.createElement(W,null,"© ",(new Date).getFullYear()," - MIT License")))},n}(r.Component);n.a=te},176:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=c(t(0)),r=c(t(60)),s=c(t(1));function c(e){return e&&e.__esModule?e:{default:e}}var i=(0,r.default)({}),l=i.Provider,p=i.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,r=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return o.default.createElement(p,null,function(n){return o.default.createElement(e,a({components:t||n},r))})}};var m=function(e){var n=e.components,t=e.children;return o.default.createElement(l,{value:n},t)};m.propTypes={components:s.default.object.isRequired,children:s.default.element.isRequired},n.default=m},177:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(178);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=t(176);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},178:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),r=t(0),s=l(r),c=l(t(179)),i=t(176);function l(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},m=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.Component),o(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,o=e.props,r=void 0===o?{}:o,i=e.children,l=e.components,m=void 0===l?{}:l,u=e.Layout,d=e.layoutProps,f=m[t+"."+n]||m[n]||p[n]||n;return u?((0,c.default)(this,u),s.default.createElement(u,a({components:m},d),s.default.createElement(f,r,i))):s.default.createElement(f,r,i)}}]),n}();n.default=(0,i.withMDXComponents)(m)},179:function(e,n,t){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,s=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,p=l&&l(Object);e.exports=function e(n,t,m){if("string"!=typeof t){if(p){var u=l(t);u&&u!==p&&e(n,u,m)}var d=s(t);c&&(d=d.concat(c(t)));for(var f=0;f<d.length;++f){var g=d[f];if(!(a[g]||o[g]||m&&m[g])){var h=i(t,g);try{r(n,g,h)}catch(k){}}}return n}return n}}}]);
//# sourceMappingURL=component---src-pages-misc-mdx-a5cd918ba4fc407717ba.js.map