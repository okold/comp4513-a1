(this["webpackJsonpcomp4513-a1"]=this["webpackJsonpcomp4513-a1"]||[]).push([[0],{22:function(t,e,n){},24:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),c=n(11),i=n.n(c),r=(n(22),n(10)),o=n.n(r),l=n(12),d=n(16),j=n(13),b=n(14),h=n(5),u=n(17),O=n(15),p=n(4),x=n(2),f=(n(24),n(0)),v=function(t){return Object(f.jsxs)("div",{id:"header",children:[Object(f.jsx)(p.b,{to:"/comp4513-a1/",children:"Logo"}),Object(f.jsx)("button",{children:"About"})]})},g=(n(26),function(t){return Object(f.jsx)("div",{id:"fav-list",children:"FAV LIST"})}),y=(n(27),function(t){return Object(f.jsx)("div",{id:"filters",children:"FILTERS"})}),m=(n(28),function(t){return Object(f.jsxs)("div",{id:"play-list",children:[Object(f.jsx)("table",{id:"play-header",children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Title"}),Object(f.jsx)("td",{children:"Year"}),Object(f.jsx)("td",{}),Object(f.jsx)("td",{})]})}),Object(f.jsx)("table",{id:"play-data",children:t.getPlayList().map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.title}),Object(f.jsx)("td",{children:e.likelyDate}),Object(f.jsx)("td",{onClick:function(n){return t.addToFavs(e)},children:"HRT"}),Object(f.jsx)("td",{children:"View"})]})}))})]})}),L=(n(29),function(t){return Object(f.jsxs)("div",{id:"play-browser",children:[Object(f.jsx)(v,{}),Object(f.jsx)(g,{}),Object(f.jsx)(y,{}),Object(f.jsx)(m,{addToFavs:t.addToFavs,getPlayList:t.getPlayList})]})}),k=(n(30),function(t){return Object(f.jsx)("div",{id:"fill",children:Object(f.jsxs)("div",{id:"home-box",children:[Object(f.jsx)("h2",{children:"Play Browser"}),t.isLoading()&&Object(f.jsx)("img",{src:"spinner.gif",alt:"loading"}),!t.isLoading()&&Object(f.jsxs)("form",{children:[Object(f.jsx)("label",{children:"Title"}),Object(f.jsx)("input",{}),Object(f.jsx)(p.b,{to:"/comp4513-a1/browse",className:"link-btn",children:"Search Plays"}),Object(f.jsx)(p.b,{to:"/comp4513-a1/browse",className:"link-btn",children:"View All"})]}),Object(f.jsxs)("p",{children:["Image: ",Object(f.jsx)("a",{href:"https://unsplash.com/photos/nz-UtZz81fI",children:"Unsplash"})," | Spinner: ",Object(f.jsx)("a",{href:"https://icons8.com/preloaders/en/circular",children:"Preloaders.net"})]})]})})}),F=(n(31),function(t){Object(u.a)(n,t);var e=Object(O.a)(n);function n(t){var s;return Object(j.a)(this,n),(s=e.call(this,t)).state={plays:[],loading:!0,favs:[]},s.isLoading=s.isLoading.bind(Object(h.a)(s)),s.addToFavs=s.addToFavs.bind(Object(h.a)(s)),s.getPlayList=s.getPlayList.bind(Object(h.a)(s)),s.getFavList=s.getFavList.bind(Object(h.a)(s)),s}return Object(b.a)(n,[{key:"addToFavs",value:function(t){var e=Object(d.a)(this.state.favs);return console.log(e),e.push(t),this.setState({favs:e}),null}},{key:"getFavList",value:function(){return this.state.favs}},{key:"getPlayList",value:function(){return this.state.plays}},{key:"isLoading",value:function(){return!!this.state.loading}},{key:"componentDidMount",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(e=localStorage.getItem("shakespeare_data"))){t.next=6;break}e=JSON.parse(e),t.next=14;break;case 6:return t.next=8,fetch("https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php");case 8:return n=t.sent,t.next=11,n.json();case 11:(e=t.sent).sort((function(t,e){return e.title-t.title})),localStorage.setItem("shakespeare_data",JSON.stringify(e));case 14:this.setState({plays:e}),this.setState({loading:!1}),console.log(e),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(0),console.error("Oh God");case 22:case"end":return t.stop()}}),t,this,[[0,19]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsx)(p.a,{children:Object(f.jsxs)(x.c,{children:[Object(f.jsx)(x.a,{path:"/comp4513-a1",element:Object(f.jsx)(k,{isLoading:this.isLoading})}),Object(f.jsx)(x.a,{path:"/comp4513-a1/browse",element:Object(f.jsx)(L,{addToFavs:this.addToFavs,getPlayList:this.getPlayList})})]})})}}]),n}(a.a.Component)),w=F,T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),s(t),a(t),c(t),i(t)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),T()}},[[32,1,2]]]);
//# sourceMappingURL=main.ec014af9.chunk.js.map