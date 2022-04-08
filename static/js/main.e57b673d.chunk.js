(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{39:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){},46:function(e,t,r){},47:function(e,t,r){},48:function(e,t,r){},49:function(e,t,r){},52:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(13),c=r.n(a),s=r(10),u=r(11),i=r(19),o=r(18),l=r(14),d=r(16),b=r(20),v=r(9),p=r.n(v),j=function(e){return e>=.1?+e.toFixed(2):e<.1&&e>0?+e.toFixed(3):0===e?0:void 0},y=(p.a.string,p.a.number,function(e){return"current"===e?"converted":"current"}),U=function(e,t,r,n){!t||"click"!==e.type&&"Tab"!==e.key||e.target.getAttribute("data-element-type")!==r&&n()},f=function(e,t){return e?j(+e*t):""},h=r(12),B=r.n(h),O=r(17),m=function(){var e=Object(O.a)(B.a.mark((function e(t){var r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={"USDRUB,RUBUSD":{data:{USDRUB:"64.1824",RUBUSD:"0.0155806"},message:"rates",status:200},"USDEUR,EURUSD":{data:{USDEUR:"0.92674",EURUSD:"1.07905"},message:"rates",status:200},"USDGBP,GBPUSD":{data:{USDGBP:"0.7763",GBPUSD:"1.28841"},message:"rates",status:200},"USDBYN,BYNUSD":{data:{USDBYN:"2.20558",BYNUSD:"0.453396"},message:"rates",status:200},"RUBUSD,USDRUB":{data:{RUBUSD:"0.0155806",USDRUB:"64.1824"},message:"rates",status:200},"RUBEUR,EURRUB":{data:{RUBEUR:"0.0144437",EURRUB:"69.244"},message:"rates",status:200},"RUBGBP,GBPRUB":{data:{RUBGBP:"0.0120952",GBPRUB:"82.6773"},message:"rates",status:200},"RUBBYN,BYNRUB":{data:{RUBBYN:"0.0343642",BYNRUB:"29.1002"},message:"rates",status:200},"EURRUB,RUBEUR":{data:{EURRUB:"69.244",RUBEUR:"0.0144437"},message:"rates",status:200},"EURUSD,USDEUR":{data:{EURUSD:"1.07905",USDEUR:"0.92674"},message:"rates",status:200},"EURGBP,GBPEUR":{data:{EURGBP:"0.83767",GBPEUR:"1.19402"},message:"rates",status:200},"EURBYN,BYNEUR":{data:{EURBYN:"2.37994",BYNEUR:"0.420182"},message:"rates",status:200},"GBPRUB,RUBGBP":{data:{GBPRUB:"82.6773",RUBGBP:"0.0120952"},message:"rates",status:200},"GBPUSD,USDGBP":{data:{GBPUSD:"1.28841",USDGBP:"0.7763"},message:"rates",status:200},"GBPEUR,EURGBP":{data:{GBPEUR:"1.19402",EURGBP:"0.83767"},message:"rates",status:200},"GBPBYN,BYNGBP":{data:{GBPBYN:"2.84169",BYNGBP:"0.351973"},message:"rates",status:200},"BYNRUB,RUBBYN":{data:{BYNRUB:"29.1002",RUBBYN:"0.0343642"},message:"rates",status:200},"BYNUSD,USDBYN":{data:{BYNUSD:"0.453396",USDBYN:"2.20558"},message:"rates",status:200},"BYNEUR,EURBYN":{data:{BYNEUR:"0.420182",EURBYN:"2.37994"},message:"rates",status:200},"BYNGBP,GBPBYN":{data:{BYNGBP:"0.351973",GBPBYN:"2.84169"},message:"rates",status:200}},e.abrupt("return",new Promise((function(e){return setTimeout((function(){return e(r[t])}),100)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=Object(b.a)("formatResult"),E=new(function(){function e(){Object(s.a)(this,e),this._errorHandler=function(e){switch(e.status){case"500":throw new Error("Misspelled request");case"403":throw new Error("Invalid api-key");default:return}},Object.defineProperty(this,R,{writable:!0,value:function(e,t){return t.map((function(t){return e[t]}))}})}return Object(u.a)(e,[{key:"getCourse",value:function(e){var t=this;if(e[0]===e[1])return new Promise((function(e){return e([1,1])}));var r="".concat(e[0],",").concat(e[1]);return m(r).then((function(r){return t._errorHandler(r),Object(d.a)(t,R)[R](r.data,e)})).catch((function(e){throw e}))}},{key:"getAllCourses",value:function(e){var t=this;return function(e){var t={USD:{data:{USDRUB:"64.1824",USDEUR:"0.92674",USDGBP:"0.7763",USDBYN:"2.20558"},message:"rates",status:200},RUB:{data:{RUBUSD:"0.0155806",RUBEUR:"0.0144437",RUBGBP:"0.0120952",RUBBYN:"0.0343642"},message:"rates",status:200},EUR:{data:{EURRUB:"69.244",EURUSD:"1.07905",EURGBP:"0.83767",EURBYN:"2.37994"},message:"rates",status:200},GBP:{data:{GBPRUB:"82.6773",GBPUSD:"1.28841",GBPEUR:"1.19402",GBPBYN:"2.84169"},message:"rates",status:200},BYN:{data:{BYNRUB:"29.1002",BYNUSD:"0.453396",BYNEUR:"0.420182",BYNGBP:"0.351973"},message:"rates",status:200}};return new Promise((function(r){return setTimeout((function(){return r(t[e])}),1500)}))}(e).then((function(e){for(var r in t._errorHandler(e),e.data)e.data[r]=j(Number(e.data[r]));return e.data})).catch((function(e){throw e}))}}]),e}()),S=function(e){return{type:"SET_LIST_STATUS",payload:e}},g=function(e,t,r){return function(n,a){var c=a().currenciesTable,s=c.activeStatus,u=c.isLoading,i=c.error;n({type:"SET_TABLE_STATUSES",payload:{activeStatus:void 0!==e?e:s,isLoading:void 0!==t?t:u,error:void 0!==r?r:i}})}},N=(r(39),r(1)),x=function(){return Object(N.jsx)("div",{className:"error-indicator",children:Object(N.jsx)("p",{children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"})})},D=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(u.a)(r,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(N.jsx)(x,{}):this.props.children}}]),r}(n.Component),T=r(15),C=(r(41),function(e){var t=e.onInputChange,r=e.type,n=e.currencyValue,a=function(e){t({type:r,value:""}),e.target.blur()};return Object(N.jsxs)("div",{className:"converter__input-block",children:[Object(N.jsx)("input",{type:"text",value:n,onChange:function(e){var a=e.target.value;(a=function(e){var t,r=null===(t=e.match(/^\.|^,|[^\d.,]|[.,]\d+[.,]|([.,]{2})/gm))||void 0===t?void 0:t[0];if(r){var n=e.indexOf(r);e=e.slice(0,n)+e.slice(n+1)}"0"===e[0]&&e.length>1&&"."!==e[1]&&(e=e.slice(1));var a=e.indexOf(",");return-1!==a&&(e=e.slice(0,a)+"."+e.slice(a+1)),e}(a))!==n&&t({type:r,value:a})},maxLength:15}),Object(N.jsx)("span",{onClick:a,onKeyDown:function(e){"Enter"===e.key&&a(e)},className:"converter__input-clear",tabIndex:"0",children:"\xd7"})]})}),_=(r(42),function(e){var t=e.dataType,r=void 0===t?"":t,n=e.onClick,a=e.children,c=e.classNames,s=void 0===c?"":c;return Object(N.jsxs)("button",{"data-element-type":r,className:"selected-currency-button ".concat(s),onClick:n,children:[a,Object(N.jsx)("i",{className:"fa--converter fa fa-angle-down","data-element-type":r})]})}),P=(r(43),function(e){var t=e.children,r=e.classNames,n=void 0===r?"":r,a=e.dataType,c=void 0===a?"":a,s=e.onClick,u=void 0===s?function(){}:s,i=function(e){e.target.dataset.elementType===c&&("Enter"!==e.key&&"click"!==e.type||u(e.target.dataset.elementValue))};return Object(N.jsx)("ul",{className:"currency-list ".concat(n),onKeyDown:i,onClick:i,children:t.map((function(e,t){return Object(N.jsx)("li",{className:"currency-list-item","data-element-type":c,"data-element-value":e,tabIndex:"0",children:e},t)}))})}),Y=r(55),k=(r(44),function(e){var t=e.dataType,r=e.toggleHandler,n=e.activeStatus,a=e.currency,c=e.currencyList,s=e.currencyListClickHandler,u=void 0===s?function(){}:s;return Object(N.jsxs)("div",{className:"converter__currency-type-block",children:[Object(N.jsx)(Y.a,{in:n,timeout:200,children:function(e){return Object(N.jsx)(_,{dataType:t,onClick:r,classNames:e,children:a})}}),Object(N.jsx)(Y.a,{in:n,timeout:200,mountOnEnter:!0,unmountOnExit:!0,children:function(e){return Object(N.jsx)(P,{dataType:t,classNames:e,onClick:u,children:c})}})]})}),L=k,G=(r(45),{addCurrencyValue:function(e){return{type:"ADD_CURRENCY_VALUE",payload:e}},setListStatus:S,setCurrency:function(e){return{type:"SET_CURRENCY",payload:e}}}),w=Object(l.b)((function(e){var t=e.converter,r=e.currencyList;return{converter:{current:{value:t.current.value,currency:t.current.currency},converted:{value:t.converted.value,currency:t.converted.currency},dataType:t.dataType,listsStatus:t.listsStatus},currencyList:r}}),G)((function(e){var t=e.type,r=e.converter,n=e.setListStatus,a=e.setCurrency,c=e.fetch,s=e.addCurrencyValue,u=e.currencyList,i=function(){var e=y(t),a=Object(T.a)({},t,!r.listsStatus[t]);r.listsStatus[e]&&(a[e]=!1),n(a)},o=function(){var e=Object(O.a)(B.a.mark((function e(r){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({type:t,value:r});case 2:return e.next=4,c();case 4:i();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"converter__currency-block",children:[Object(N.jsx)(C,{onInputChange:function(e){return s(e)},currencyValue:r[t].value,type:t}),Object(N.jsx)(L,{dataType:r.dataType,toggleHandler:i,activeStatus:r.listsStatus[t],currency:r[t].currency,currencyList:u,currencyListClickHandler:o})]})})),A=(r(46),function(e){var t=e.rowTypes,r=e.fetch;return Object(N.jsx)("main",{className:"converter",children:Object(N.jsx)("div",{className:"converter__wrapper",children:t.map((function(e){var t=e.id,n=e.type;return Object(N.jsx)(w,{type:n,fetch:r},t)}))})})}),V=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).rowTypes=[{id:0,type:"current"},{id:1,type:"converted"}],e.listDisabler=function(t){var r=e.props.converter,n=r.dataType,a=r.listsStatus,c=a.current,s=a.converted;U(t,c||s,n,(function(){return e.props.setListStatus({current:!1,converted:!1})}))},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.props.fetchPairValue(),document.addEventListener("click",this.listDisabler),document.addEventListener("keyup",this.listDisabler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.listDisabler),document.removeEventListener("keyup",this.listDisabler)}},{key:"render",value:function(){var e=this.props.converter.error.status;return Object(N.jsx)(D,{children:e&&Object(N.jsx)(x,{})||Object(N.jsx)(A,{rowTypes:this.rowTypes,fetch:this.props.fetchPairValue})})}}]),r}(n.Component),I={fetchPairValue:function(){return function(e,t){var r=t().converter,n=r.current.currency,a=r.converted.currency,c=[n+a,a+n];E.getCourse(c).then((function(t){return e({type:"FETCH_PAIR_VALUE",payload:t})})).catch((function(t){return e({type:"SET_CONVERTER_ERROR",payload:{error:{status:!0,message:t.message}}})}))}},setListStatus:S},H=Object(l.b)((function(e){var t=e.converter;return{converter:{current:{currency:t.current.currency},converted:{currency:t.converted.currency},dataType:t.dataType,listsStatus:t.listsStatus,error:t.error}}}),I)(V),F=(r(47),function(e){var t=e.children;return Object(N.jsx)("div",{className:"spinner ".concat(t),children:Object(N.jsx)("div",{className:"loadingio-spinner-eclipse-p19pnm2p23",children:Object(N.jsx)("div",{className:"ldio-pnzr8yywkb",children:Object(N.jsx)("div",{})})})})}),M=r(30),J=function(e){var t=e.children;return Object(N.jsx)("tbody",{children:Object.entries(t).map((function(e,t){var r=Object(M.a)(e,2),n=r[0],a=r[1];return Object(N.jsxs)("tr",{className:"currency-table__row",children:[Object(N.jsxs)("td",{children:[n.slice(0,3),"/",n.slice(3)]}),Object(N.jsx)("td",{children:a})]},t)}))})},K=(r(48),function(e){var t=e.children,r=t.headerValues,n=t.bodyValues;return Object(N.jsx)("div",{className:"currency-table__wrapper",children:Object(N.jsxs)("table",{className:"currency-table",children:[Object(N.jsx)("thead",{children:Object(N.jsx)("tr",{className:"currency-table__row",children:r.map((function(e){var t=e.id,r=e.value;return Object(N.jsx)("th",{children:r},t)}))})}),Object(N.jsx)(J,{children:n})]})})}),W=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).spinnerClassname="currencies-table",e.tableHeaderValues=[{id:1,value:"\u0412\u0430\u043b\u044e\u0442\u0430"},{id:2,value:"\u0426\u0435\u043d\u0430"}],e.toggle=function(){return e.props.setTableStatuses(!e.props.currenciesTable.activeStatus)},e.sendCurrency=function(){var t=Object(O.a)(B.a.mark((function t(r){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.setCurrencyInTable(r);case 2:e.props.addCurrenciesValues();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.listDisabler=function(t){var r=e.props.currenciesTable,n=r.dataType,a=r.activeStatus;U(t,a,n,(function(){return e.props.setTableStatuses(!1)}))},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.props.addCurrenciesValues(),document.addEventListener("click",this.listDisabler),document.addEventListener("keyup",this.listDisabler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.listDisabler),document.removeEventListener("keyup",this.listDisabler)}},{key:"render",value:function(){var e,t=this.props,r=t.currencyList,n=t.currenciesTable,a=n.currentCurrency,c=n.values,s=n.dataType,u=n.activeStatus,i=n.isLoading,o=n.error.status,l={headerValues:this.tableHeaderValues,bodyValues:c};return o||i?i?e=Object(N.jsx)(F,{children:this.spinnerClassname}):o&&(e=Object(N.jsx)(x,{})):e=Object(N.jsx)(K,{children:l}),Object(N.jsx)(D,{children:Object(N.jsxs)("div",{className:"currency-table__component",children:[e,Object(N.jsx)(k,{dataType:s,toggleHandler:this.toggle,activeStatus:u,currency:a,currencyList:r,currencyListClickHandler:this.sendCurrency})]})})}}]),r}(n.Component),q={addCurrenciesValues:function(){return function(e,t){var r=t(),n=r.currencyList,a=r.currenciesTable.currentCurrency;g(!1,!0,{status:!1,message:null})(e,t),E.getAllCourses(a,n).then((function(t){return e({type:"ADD_CURRENCIES_VALUES",payload:t})})).catch((function(r){return g(void 0,!1,{status:!0,message:r.message})(e,t)})).finally((function(){return g(void 0,!1)(e,t)}))}},setCurrencyInTable:function(e){return{type:"SET_CURRENCY_IN_TABLE",payload:e}},setTableStatuses:g},z=Object(l.b)((function(e){return{currencyList:e.currencyList,currenciesTable:e.currenciesTable}}),q)(W),Q=r(22),X=r(4),Z=(r(49),function(){return Object(N.jsxs)("div",{className:"switch-buttons",children:[Object(N.jsx)(Q.b,{to:"/",activeClassName:"active",exact:!0,children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440"}),Object(N.jsx)(Q.b,{to:"/currencies-table",activeClassName:"active",children:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0432\u0430\u043b\u044e\u0442"})]})}),$=function(){return Object(N.jsx)(Q.a,{children:Object(N.jsxs)("div",{className:"currencies-app",children:[Object(N.jsx)(Z,{}),Object(N.jsxs)(X.d,{children:[Object(N.jsx)(X.b,{path:"/",component:H,exact:!0}),Object(N.jsx)(X.b,{path:"/currencies-table",component:z}),Object(N.jsx)(X.a,{to:"/"})]})]})})},ee=r(28),te=r(29),re=r(2),ne={current:{currency:"USD",value:1,exchangeRate:""},converted:{currency:"RUB",value:"",exchangeRate:""},listsStatus:{current:!1,converted:!1},dataType:"currency-converter-item",error:{status:!1,message:null}},ae=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"FETCH_PAIR_VALUE":var n=t.current.value,a=n?j(n*r.payload[0]):"";return Object(re.a)(Object(re.a)({},t),{},{current:Object(re.a)(Object(re.a)({},t.current),{},{exchangeRate:r.payload[0]}),converted:Object(re.a)(Object(re.a)({},t.converted),{},{value:a,exchangeRate:r.payload[1]})});case"ADD_CURRENCY_VALUE":var c=r.payload,s=c.type,u=c.value,i=y(s),o=f(u,t[s].exchangeRate);return Object(re.a)(Object(re.a)({},t),{},(e={},Object(T.a)(e,s,Object(re.a)(Object(re.a)({},t[s]),{},{value:u||""})),Object(T.a)(e,i,Object(re.a)(Object(re.a)({},t[i]),{},{value:o})),e));case"SET_CURRENCY":return Object(re.a)(Object(re.a)({},t),{},Object(T.a)({},r.payload.type,Object(re.a)(Object(re.a)({},t[r.payload.type]),{},{currency:r.payload.value})));case"SET_LIST_STATUS":return Object(re.a)(Object(re.a)({},t),{},{listsStatus:Object(re.a)(Object(re.a)({},t.listsStatus),r.payload)});case"SET_CONVERTER_ERROR":return Object(re.a)(Object(re.a)({},t),r.payload);default:return t}},ce={values:{},currentCurrency:"USD",dataType:"currency-table-item",activeStatus:!1,isLoading:!0,error:{status:!1,message:null}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CURRENCIES_VALUES":return Object(re.a)(Object(re.a)({},e),{},{values:t.payload});case"SET_CURRENCY_IN_TABLE":return Object(re.a)(Object(re.a)({},e),{},{currentCurrency:t.payload});case"SET_TABLE_STATUSES":return Object(re.a)(Object(re.a)({},e),t.payload);default:return e}},ue={currencyList:["RUB","USD","EUR","GBP","BYN"]},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;return Object(re.a)(Object(re.a)({},e),{},{converter:ae(e.converter,t),currenciesTable:se(e.currenciesTable,t)})},oe=Object(ee.b)(ie,Object(ee.a)(te.a,(function(){return function(e){return function(t){return console.log(t.type),console.log(t.payload),e(t)}}})));c.a.render(Object(N.jsx)(l.a,{store:oe,children:Object(N.jsx)($,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e57b673d.chunk.js.map