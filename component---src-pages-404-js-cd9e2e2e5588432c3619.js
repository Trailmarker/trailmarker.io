(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),i=(t("wcMv"),t("Wbzz")),r=function(e){return l.a.createElement("header",{id:"header",className:"alt"},l.a.createElement(i.Link,{to:"/",className:"logo"},l.a.createElement("strong",null,"Trailmarker")),l.a.createElement("nav",null,l.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))},c=function(e){return l.a.createElement("nav",{id:"menu"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement(i.Link,{onClick:e.onToggleMenu,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(i.Link,{onClick:e.onToggleMenu,to:"/site"},"About trailmarker.io")))),l.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))},s=function(e){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"inner"},l.a.createElement("section",null,l.a.createElement("form",{method:"post",action:"https://getsimpleform.com/messages?form_api_token=b338fce2988a01722ff17de40dcaad8d"},l.a.createElement("input",{type:"hidden",name:"redirect_to",value:"https://trailmarker.io/thank-you"}),l.a.createElement("div",{className:"field half first"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",name:"name",id:"name"})),l.a.createElement("div",{className:"field half"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"text",name:"email",id:"email"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{name:"message",id:"message",rows:"6"})),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),l.a.createElement("li",null,l.a.createElement("input",{type:"reset",value:"Clear"}))))),l.a.createElement("section",{className:"split"},l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-envelope"}),l.a.createElement("h3",null,"Email"),l.a.createElement("a",{href:"#"},"info@trailmarker.io"))),l.a.createElement("section",null,l.a.createElement("div",{className:"contact-method"},l.a.createElement("span",{className:"icon alt fa-phone"}),l.a.createElement("h3",null,"Phone"),l.a.createElement("span",null,"+61 434 929 287"))))))},m=function(e){return l.a.createElement("footer",{id:"footer"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/Trailmarker","aria-label":"GitHub",className:"icon alt fa-github"},l.a.createElement("span",{className:"label"},"GitHub"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/tflynch/","aria-label":"LinkedIn",className:"icon alt fa-linkedin"},l.a.createElement("span",{className:"label"},"LinkedIn")))),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"© Trailmarker 2020"),l.a.createElement("li",null,"This site is developed and maintained on Larrakia country."))))};var o=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var i=n.prototype;return i.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100)},i.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},i.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},i.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},l.a.createElement("div",{id:"wrapper"},l.a.createElement(r,{onToggleMenu:this.handleToggleMenu}),e,l.a.createElement(s,null),l.a.createElement(m,null)),l.a.createElement(c,{onToggleMenu:this.handleToggleMenu}))},n}(l.a.Component);a.a=o},w2l6:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),i=t("Bl7J");a.default=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{id:"main",className:"alt"},l.a.createElement("section",{id:"one"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",null,"Not found"),l.a.createElement("p",null,"The route or page you referenced doesn't seem to be here.")))))}},wcMv:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-404-js-cd9e2e2e5588432c3619.js.map