(this["webpackJsonpsports-app"]=this["webpackJsonpsports-app"]||[]).push([[0],{246:function(e,a,t){e.exports=t(438)},251:function(e,a,t){},438:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),o=(t(251),t(121)),i=t(207),s=t(42),m=t(123),u=t(74),p=t(49),E=t.n(p),d=t(87),h=t(40),g=t(184),f=t(185),y=t(209),v=t(13),b=t(186),w=t(4),x=t(7),j=t(490),k=t(500),O=t(499),S=t(491),N=t(492),C=t(495),B=t(496),P=t(493),D=t(494),T=t(497),F=t(498),A=t(440),G=t(484),I=t(202),L=t.n(I),R=t(204),W=t.n(R),M=t(203),H=t.n(M),Y=t(501),z=t(481),J=t(482),K=t(483),$=t(187),q=t.n($),U=t(188),V=t.n(U),X=t(189),Q=t.n(X),Z=t(93),_=t.n(Z),ee=r.a.createElement("div",null,r.a.createElement(Y.a,{button:!0},r.a.createElement(z.a,null,r.a.createElement(q.a,null)),r.a.createElement(J.a,{primary:"Rushing"})),r.a.createElement(Y.a,{button:!0},r.a.createElement(z.a,null,r.a.createElement(V.a,null)),r.a.createElement(J.a,{primary:"Weekly Leaders"})),r.a.createElement(Y.a,{button:!0},r.a.createElement(z.a,null,r.a.createElement(Q.a,null)),r.a.createElement(J.a,{primary:"About"}))),ae=r.a.createElement("div",null,r.a.createElement(K.a,{inset:!0},"Saved reports"),r.a.createElement(Y.a,{button:!0},r.a.createElement(z.a,null,r.a.createElement(_.a,null)),r.a.createElement(J.a,{primary:"Current month"})),r.a.createElement(Y.a,{button:!0},r.a.createElement(z.a,null,r.a.createElement(_.a,null)),r.a.createElement(J.a,{primary:"Last quarter"})),r.a.createElement(Y.a,{button:!0},r.a.createElement(z.a,null,r.a.createElement(_.a,null)),r.a.createElement(J.a,{primary:"Year-end sale"}))),te=t(61),ne=t(51);function re(e){return r.a.createElement(u.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function le(e,a){return{time:e,amount:a}}var ce=[le("00:00",0),le("03:00",300),le("06:00",600),le("09:00",800),le("12:00",1500),le("15:00",2e3),le("18:00",2400),le("21:00",2400),le("24:00",void 0)];function oe(){var e=Object(te.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null,"Today"),r.a.createElement(ne.d,null,r.a.createElement(ne.c,{data:ce,margin:{top:16,right:16,bottom:0,left:24}},r.a.createElement(ne.e,{dataKey:"time",stroke:e.palette.text.secondary}),r.a.createElement(ne.f,{stroke:e.palette.text.secondary},r.a.createElement(ne.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary}},"Sales ($)")),r.a.createElement(ne.b,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1}))))}var ie=t(201);function se(e){e.preventDefault()}var me=Object(ie.a)({depositContext:{flex:1}}),ue=function(e){var a=e.players,t=me(),n=a.filter((function(e){return 1===e.rank}));return console.log({players:a}),console.log(Object.values(n)),n?r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null,"Top Player"),r.a.createElement(u.a,{component:"p",variant:"h4"},n.player),r.a.createElement(u.a,{color:"textSecondary",className:t.depositContext},"on 15 March, 2019"),r.a.createElement("div",null,r.a.createElement(G.a,{color:"primary",href:"#",onClick:se},"View player"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null,"Top Player"),r.a.createElement(u.a,{color:"textSecondary",className:t.depositContext},"There is no top player"))},pe=t(485),Ee=t(489),de=t(488),he=t(486),ge=t(487),fe=["Rank","Player","Team","Pos","Att","Att/G","Yds","Avg","Yds/G","TD","Lng","1st","1st%","20+","40+","FUM"],ye=function(e){e.preventDefault()},ve=Object(ie.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}})),be=function(e){var a=e.players,t=ve();return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null,"NFL Rushing Stats"),r.a.createElement(pe.a,{size:"small"},r.a.createElement(he.a,null,r.a.createElement(ge.a,null,fe.map((function(e){return r.a.createElement(de.a,{key:e.id},e)})))),r.a.createElement(Ee.a,null,a.map((function(e){return r.a.createElement(ge.a,{key:e.id},r.a.createElement(de.a,null,e.rank),r.a.createElement(de.a,null,e.player),r.a.createElement(de.a,null,e.team),r.a.createElement(de.a,null,e.pos),r.a.createElement(de.a,null,e.att),r.a.createElement(de.a,null,e.attG),r.a.createElement(de.a,null,e.yds),r.a.createElement(de.a,null,e.avg),r.a.createElement(de.a,null,e.ydsG),r.a.createElement(de.a,null,e.td),r.a.createElement(de.a,null,e.lng),r.a.createElement(de.a,null,e.first),r.a.createElement(de.a,null,e.firstPer),r.a.createElement(de.a,null,e.twentyPlus),r.a.createElement(de.a,null,e.fortyPlus),r.a.createElement(de.a,null,e.fum))})))),r.a.createElement("div",{className:t.seeMore},r.a.createElement(G.a,{color:"primary",href:"#",onClick:ye},"See more rushing stats")))},we=function(){return r.a.createElement(u.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(G.a,{color:"inherit",href:"https://material-ui.com/"},"amytangcodes")," ",(new Date).getFullYear(),".")},xe=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={open:!0,players:[]},t.handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t}return Object(y.a)(a,e),Object(h.a)(a,[{key:"componentWillMount",value:function(){var e,a;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.awrap(fetch("/api/players"));case 2:return e=t.sent,t.next=5,E.a.awrap(e.json());case 5:a=t.sent,console.log({resp:a}),this.setState({players:a.data});case 8:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var e=this.props.classes,a=this.state.players,t=this.state.open,n=Object(w.a)(e.paper,e.fixedHeight);return r.a.createElement("div",{className:e.root},r.a.createElement(j.a,null),r.a.createElement(S.a,{position:"absolute",className:Object(w.a)(e.appBar,t&&e.appBarShift)},r.a.createElement(N.a,{className:e.toolbar},r.a.createElement(P.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,className:Object(w.a)(e.menuButton,t&&e.menuButtonHidden)},r.a.createElement(L.a,null)),r.a.createElement(u.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"NFL Rushing Table Demo"),r.a.createElement(P.a,{color:"inherit"},r.a.createElement(D.a,{badgeContent:4,color:"secondary"},r.a.createElement(H.a,null))))),r.a.createElement(k.a,{variant:"permanent",classes:{paper:Object(w.a)(e.drawerPaper,!t&&e.drawerPaperClose)},open:t},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(P.a,{onClick:this.handleDrawerClose},r.a.createElement(W.a,null))),r.a.createElement(C.a,null,ee),r.a.createElement(B.a,null),r.a.createElement(C.a,null,ae)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(T.a,{maxWidth:"lg",className:e.container},r.a.createElement(F.a,{container:!0,spacing:3},r.a.createElement(F.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(A.a,{className:n},r.a.createElement(oe,null))),r.a.createElement(F.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(A.a,{className:n},r.a.createElement(ue,{players:a}))),r.a.createElement(F.a,{item:!0,xs:12},r.a.createElement(A.a,{className:e.paper},r.a.createElement(be,{players:a})))),r.a.createElement(O.a,{pt:4},r.a.createElement(we,null)))))}}]),a}(n.Component),je=Object(x.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(b.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(v.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}))(xe);function ke(){var e=Object(o.a)(["\n  padding: 3px 2px;\n  margin-top: auto;\n"]);return ke=function(){return e},e}function Oe(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n"]);return Oe=function(){return e},e}var Se=m.a.section(Oe()),Ne=m.a.section(ke());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){return r.a.createElement(Se,null,r.a.createElement(i.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:je}),r.a.createElement(s.a,{path:"/dashboard",component:je}))),r.a.createElement(Ne,null,r.a.createElement(u.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"@amytangcodes")))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[246,1,2]]]);
//# sourceMappingURL=main.3f63275b.chunk.js.map