(this["webpackJsonpcurrency-calculator"]=this["webpackJsonpcurrency-calculator"]||[]).push([[0],{11:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(6),U=n.n(a),D=(n(16),n(11),n(5)),s=n(4),i=(n(20),[["1:1","USD","USD","USD","USD","USD","USD","USD","USD","USD","D"],["USD","1:1","USD","USD","USD","USD","USD","USD","USD","USD","D"],["USD","USD","1:1","USD","USD","USD","USD","USD","USD","USD","D"],["USD","USD","USD","1:1","EUR","Inv","USD","USD","EUR","USD","EUR"],["USD","USD","USD","EUR","1:1","Inv","USD","USD","EUR","USD","EUR"],["USD","USD","USD","D","D","1:1","USD","USD","D","USD","D"],["USD","USD","USD","USD","USD","USD","1:1","USD","USD","USD","D"],["USD","USD","USD","USD","USD","USD","USD","1:1","USD","USD","Inv"],["USD","USD","USD","EUR","EUR","Inv","USD","USD","1:1","USD","EUR"],["USD","USD","USD","USD","USD","USD","USD","USD","USD","1:1","D"],["Inv","Inv","Inv","EUR","EUR","Inv","Inv","D","EUR","Inv","1:1"]]),o=["AUD","CAD","CNY","CZK","DKK","EUR","GPB","JPY","NOK","NZD","USD"],S={AUD:2,CAD:2,CNY:2,CZK:2,DKK:2,EUR:2,GPB:2,JPY:0,NOK:2,NZD:2,USD:2},u={AUDUSD:"0.8371",CADUSD:"0.8711",USDCNY:"6.1715",EURUSD:"1.2315",GBPUSD:"1.5683",NZDUSD:"0.7750",USDJPY:"119.95",EURCZK:"27.6028",EURDKK:"7.4405",EURNOK:"8.6651"},l=function e(t,n,r){switch(t){case"USD":case"EUR":var c=t,a=o.indexOf(n),U=o.indexOf(r),D=o.indexOf(c),s=i[a][D],S=i[D][U];return e(s,n,c)*e(S,c,r);case"D":return u[n+r];case"Inv":return 1/u[r+n];case"1:1":default:return 1}};function d(e,t,n){var r=o.indexOf(e),c=o.indexOf(t),a=i[r][c];return(n*l(a,e,t)).toFixed(S[t])}function j(e){return-1!==o.indexOf(e.toUpperCase())}var O=n(1);function b(){var e=new RegExp("^[A-Z,a-z]{3}$"),t=Object(s.b)(),n=Object(s.c)((function(e){return e.error})),c=Object(r.useState)(""),a=Object(D.a)(c,2),U=a[0],i=a[1],o=Object(r.useState)(""),S=Object(D.a)(o,2),u=S[0],l=S[1],b=Object(r.useState)(""),v=Object(D.a)(b,2),R=v[0],p=v[1],h=Object(r.useState)(""),x=Object(D.a)(h,2),C=x[0],E=x[1],f=function(){i(""),l(""),p("")},m=function(){E(""),t({type:"RESET"})};return Object(O.jsx)("div",{children:Object(O.jsx)("section",{className:"App-header",children:Object(O.jsxs)("div",{className:"roundCorner",children:[Object(O.jsx)("div",{className:"header",children:"Currency Converter"}),Object(O.jsxs)("div",{className:"inputContainer",children:[Object(O.jsxs)("div",{className:"inputRow",children:[Object(O.jsx)("div",{className:"label",children:"From :"}),Object(O.jsx)("div",{className:"inputAction",children:Object(O.jsx)("input",{type:"text",id:"fromCurrency",onChange:function(e){return i(e.target.value)},value:U,maxLength:"3",placeholder:"eg. USD",title:"Three letter currency code"})}),Object(O.jsx)("div",{className:"label",children:"To :"}),Object(O.jsx)("div",{className:"inputAction",children:Object(O.jsx)("input",{type:"text",id:"toCurrency",onChange:function(e){return l(e.target.value)},value:u,maxLength:"3",placeholder:"eg. AUD",title:"Three letter currency code"})})]}),Object(O.jsxs)("div",{className:"inputRow",children:[Object(O.jsx)("div",{className:"label",children:"Amount"}),Object(O.jsx)("div",{className:"inputAction",children:Object(O.jsx)("input",{type:"number",id:"amount",onChange:function(e){return p(e.target.value)},value:R,placeholder:"eg. 100.00",title:"Amount to be converted"})}),Object(O.jsx)("div",{className:"buttonContainer",children:Object(O.jsx)("button",{className:"button",onClick:function(){m(),U&&u&&R?e.test(U)&&e.test(u)?j(U)&&j(u)?E(d(U.toUpperCase(),u.toUpperCase(),R)):t({type:"RATE_ERROR",payLoad:{fromCurrency:U,toCurrency:u}}):t({type:"FORMMAT_ERROR"}):t({type:"MANDATORY_ERROR"})},children:"Convert"})}),Object(O.jsx)("div",{className:"buttonContainer",children:Object(O.jsx)("button",{className:"button",onClick:function(){f(),m()},children:"Reset"})})]})]}),C&&Object(O.jsxs)("div",{className:"result",children:["Converted Amount : ",C]}),n&&Object(O.jsx)("div",{className:"error",children:n})]})})})}var v=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(b,{})})},R=n(7),p={error:""};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORMMAT_ERROR":return{error:"Invalid Currency Code Entered !!"};case"MANDATORY_ERROR":return{error:"Kindly provide values for all fields!!"};case"RATE_ERROR":return{error:"Rate not avaialabe for ".concat(t.payLoad.fromCurrency.toUpperCase()).concat(t.payLoad.toCurrency.toUpperCase()," !!")};case"RESET":return{error:""};default:return e}},x=Object(R.b)(h);U.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(s.a,{store:x,children:Object(O.jsx)(v,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.afe0f329.chunk.js.map