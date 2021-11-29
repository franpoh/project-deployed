(this["webpackJsonpproject-deployed"]=this["webpackJsonpproject-deployed"]||[]).push([[0],{22:function(t,e){var s="stage",c={baseURL:"http://localhost:3000"};switch(s.toUpperCase()){case"STAGE":c.caseURL="http://stage.localhost/",console.log("staging environment");break;case"PRODUCTION":c.baseURL="http://localhost.com/",console.log("production environment")}},29:function(t,e,s){},49:function(t,e,s){},51:function(t,e,s){"use strict";s.r(e);var c=s(4),n=s.n(c),a=s(18),i=s.n(a),r=(s(29),s(2)),o=s.n(r),u=s(3),l=s(8),h=s(19),d=s(20),j=s(5),b=s(24),p=s(23),O=s(21),f=s.n(O).a.create({baseURL:"https://covid-193.p.rapidapi.com",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"f675137ff1msh8ae1e95f53ba9a4p1bb6b2jsnc4fcd0c7649b"}}),v=(s(49),s(22)),g=s.n(v),x=s(0),y=function(t){Object(b.a)(s,t);var e=Object(p.a)(s);function s(){var t;return Object(h.a)(this,s),(t=e.call(this)).getStatistics=t.getStatistics.bind(Object(j.a)(t)),t.getCountries=t.getCountries.bind(Object(j.a)(t)),t.selectCountry=t.selectCountry.bind(Object(j.a)(t)),t.state={statistics:"",cases:"",countries:[],country:"",date:""},t}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getCountries()}},{key:"getStatistics",value:function(){var t=Object(l.a)(o.a.mark((function t(e){var s,c,n,a,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),s=this.state.country,t.next=4,f.get("/statistics?country=".concat(s));case 4:c=t.sent,n="",a="",i="",200===c.status&&(n=c.data.response[0],a=n.cases,i=new Date(n.time).toLocaleString("en-UK")),this.setState(Object(u.a)(Object(u.a)({},this.state),{},{statistics:n,cases:a,date:i})),console.log("getStatistics executed");case 11:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCountries",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("/countries");case 2:e=t.sent,s=[],200===e.status&&(s=e.data.response),this.setState(Object(u.a)(Object(u.a)({},this.state),{},{countries:s})),console.log("getCountries executed");case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"selectCountry",value:function(){var t=Object(l.a)(o.a.mark((function t(e){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),s=e.target.value,this.setState(Object(u.a)(Object(u.a)({},this.state),{},{country:s})),console.log("selectCountry executed");case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.statistics,e=this.state.cases,s=this.state.countries,c=this.state.date;return Object(x.jsxs)("div",{className:"display",children:[Object(x.jsxs)("h1",{children:["Current Covid Statistics in: ",t.country]}),Object(x.jsxs)("form",{onSubmit:this.getStatistics,children:[Object(x.jsxs)("label",{children:["Select a Country:",Object(x.jsxs)("select",{className:"select",onChange:this.selectCountry,children:[Object(x.jsx)("option",{selected:!0,disabled:!0,children:"Select a Country"}),s.map((function(t){return Object(x.jsx)("option",{children:t},t)}))]})]}),Object(x.jsx)("button",{children:"Search"})]}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:["Population: ",t.population]}),Object(x.jsxs)("li",{children:["Last Updated: ",c]}),Object(x.jsx)("hr",{}),Object(x.jsxs)("li",{children:["Active Cases: ",e.active]}),Object(x.jsxs)("li",{children:["New: ",e.new]}),Object(x.jsxs)("li",{children:["Critical: ",e.critical]}),Object(x.jsxs)("li",{children:["Recovered: ",e.recovered]}),Object(x.jsxs)("li",{children:["Total: ",e.total]})]}),Object(x.jsx)("h3",{children:g.a.baseURL})]})}}]),s}(n.a.Component),C=y,m=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,52)).then((function(e){var s=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,i=e.getTTFB;s(t),c(t),n(t),a(t),i(t)}))};i.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),m()}},[[51,1,2]]]);
//# sourceMappingURL=main.9dc9b355.chunk.js.map