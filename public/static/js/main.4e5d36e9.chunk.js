(this["webpackJsonpsports-app"]=this["webpackJsonpsports-app"]||[]).push([[0],{246:function(e,a,t){e.exports=t(438)},251:function(e,a,t){},438:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),o=(t(251),t(124)),i=t(208),s=t(42),m=t(126),u=t(75),p=t(57),d=t(29),E=t(88),h=t(89),g=t(95),f=t(13),y=t(187),v=t(4),b=t(7),w=t(490),x=t(500),j=t(499),O=t(491),k=t(492),S=t(495),C=t(496),N=t(493),B=t(494),D=t(497),P=t(498),F=t(440),A=t(484),T=t(203),G=t.n(T),I=t(205),L=t.n(I),R=t(204),W=t.n(R),M=t(501),H=t(481),Y=t(482),z=t(483),J=t(188),K=t.n(J),$=t(189),q=t.n($),U=t(190),V=t.n(U),X=t(96),Q=t.n(X),Z=r.a.createElement("div",null,r.a.createElement(M.a,{button:!0},r.a.createElement(H.a,null,r.a.createElement(K.a,null)),r.a.createElement(Y.a,{primary:"Rushing"})),r.a.createElement(M.a,{button:!0},r.a.createElement(H.a,null,r.a.createElement(q.a,null)),r.a.createElement(Y.a,{primary:"Weekly Leaders"})),r.a.createElement(M.a,{button:!0},r.a.createElement(H.a,null,r.a.createElement(V.a,null)),r.a.createElement(Y.a,{primary:"About"}))),_=r.a.createElement("div",null,r.a.createElement(z.a,{inset:!0},"Saved reports"),r.a.createElement(M.a,{button:!0},r.a.createElement(H.a,null,r.a.createElement(Q.a,null)),r.a.createElement(Y.a,{primary:"Current month"})),r.a.createElement(M.a,{button:!0},r.a.createElement(H.a,null,r.a.createElement(Q.a,null)),r.a.createElement(Y.a,{primary:"Last quarter"})),r.a.createElement(M.a,{button:!0},r.a.createElement(H.a,null,r.a.createElement(Q.a,null)),r.a.createElement(Y.a,{primary:"Year-end sale"}))),ee=t(62),ae=t(51);function te(e){return r.a.createElement(u.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function ne(e,a){return{time:e,amount:a}}var re=[ne("00:00",0),ne("03:00",300),ne("06:00",600),ne("09:00",800),ne("12:00",1500),ne("15:00",2e3),ne("18:00",2400),ne("21:00",2400),ne("24:00",void 0)];function le(){var e=Object(ee.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,null,"Today"),r.a.createElement(ae.d,null,r.a.createElement(ae.c,{data:re,margin:{top:16,right:16,bottom:0,left:24}},r.a.createElement(ae.e,{dataKey:"time",stroke:e.palette.text.secondary}),r.a.createElement(ae.f,{stroke:e.palette.text.secondary},r.a.createElement(ae.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary}},"Sales ($)")),r.a.createElement(ae.b,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1}))))}var ce=t(202);function oe(e){e.preventDefault()}var ie=Object(ce.a)({depositContext:{flex:1}});function se(){var e=ie();return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,null,"Top Player"),r.a.createElement(u.a,{component:"p",variant:"h4"},"Joe Frank"),r.a.createElement(u.a,{color:"textSecondary",className:e.depositContext},"on 15 March, 2019"),r.a.createElement("div",null,r.a.createElement(A.a,{color:"primary",href:"#",onClick:oe},"View player")))}var me=t(50),ue=t.n(me),pe=t(485),de=t(489),Ee=t(488),he=t(486),ge=t(487),fe=["Rank","Player","Team","Pos","Att","Att/G","Yds","Avg","Yds/G","TD","Lng","1st","1st%","20+","40+","FUM"],ye=function(e){e.preventDefault()},ve=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(E.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={players:[]},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentWillMount",value:function(){var e,a;return ue.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue.a.awrap(fetch("/api/players"));case 2:return e=t.sent,t.next=5,ue.a.awrap(e.json());case 5:a=t.sent,console.log({resp:a}),this.setState({players:a.data});case 8:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var e=this.props.classes,a=this.state.players;return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,null,"NFL Rushing Stats"),r.a.createElement(pe.a,{size:"small"},r.a.createElement(he.a,null,r.a.createElement(ge.a,null,fe.map((function(e){return r.a.createElement(Ee.a,{key:e.id},e)})))),r.a.createElement(de.a,null,a.map((function(e){return r.a.createElement(ge.a,{key:e.id},r.a.createElement(Ee.a,null,e.rank),r.a.createElement(Ee.a,null,e.player),r.a.createElement(Ee.a,null,e.team),r.a.createElement(Ee.a,null,e.pos),r.a.createElement(Ee.a,null,e.att),r.a.createElement(Ee.a,null,e.attG),r.a.createElement(Ee.a,null,e.yds),r.a.createElement(Ee.a,null,e.avg),r.a.createElement(Ee.a,null,e.ydsG),r.a.createElement(Ee.a,null,e.td),r.a.createElement(Ee.a,null,e.lng),r.a.createElement(Ee.a,null,e.first),r.a.createElement(Ee.a,null,e.firstPer),r.a.createElement(Ee.a,null,e.twentyPlus),r.a.createElement(Ee.a,null,e.fortyPlus),r.a.createElement(Ee.a,null,e.fum))})))),r.a.createElement("div",{className:e.seeMore},r.a.createElement(A.a,{color:"primary",href:"#",onClick:ye},"See more rushing stats")))}}]),a}(n.Component),be=Object(b.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}))(ve),we=function(){return r.a.createElement(u.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(A.a,{color:"inherit",href:"https://material-ui.com/"},"amytangcodes")," ",(new Date).getFullYear(),".")},xe=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(E.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={open:!0},t.handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.state.open,t=Object(v.a)(e.paper,e.fixedHeight);return r.a.createElement("div",{className:e.root},r.a.createElement(w.a,null),r.a.createElement(O.a,{position:"absolute",className:Object(v.a)(e.appBar,a&&e.appBarShift)},r.a.createElement(k.a,{className:e.toolbar},r.a.createElement(N.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,className:Object(v.a)(e.menuButton,a&&e.menuButtonHidden)},r.a.createElement(G.a,null)),r.a.createElement(u.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"NFL Rushing Table Demo"),r.a.createElement(N.a,{color:"inherit"},r.a.createElement(B.a,{badgeContent:4,color:"secondary"},r.a.createElement(W.a,null))))),r.a.createElement(x.a,{variant:"permanent",classes:{paper:Object(v.a)(e.drawerPaper,!a&&e.drawerPaperClose)},open:a},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(N.a,{onClick:this.handleDrawerClose},r.a.createElement(L.a,null))),r.a.createElement(S.a,null,Z),r.a.createElement(C.a,null),r.a.createElement(S.a,null,_)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(D.a,{maxWidth:"lg",className:e.container},r.a.createElement(P.a,{container:!0,spacing:3},r.a.createElement(P.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(F.a,{className:t},r.a.createElement(le,null))),r.a.createElement(P.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(F.a,{className:t},r.a.createElement(se,null))),r.a.createElement(P.a,{item:!0,xs:12},r.a.createElement(F.a,{className:e.paper},r.a.createElement(be,null)))),r.a.createElement(j.a,{pt:4},r.a.createElement(we,null)))))}}]),a}(n.Component),je=Object(b.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(y.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(f.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}))(xe);function Oe(){var e=Object(o.a)(["\n  padding: 3px 2px;\n  margin-top: auto;\n"]);return Oe=function(){return e},e}function ke(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n"]);return ke=function(){return e},e}var Se=m.a.section(ke()),Ce=m.a.section(Oe());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){return r.a.createElement(Se,null,r.a.createElement(i.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:je}),r.a.createElement(s.a,{path:"/dashboard",component:je}))),r.a.createElement(Ce,null,r.a.createElement(u.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"@amytangcodes")))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[246,1,2]]]);
//# sourceMappingURL=main.4e5d36e9.chunk.js.map