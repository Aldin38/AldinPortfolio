(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/calculatorImg.1a22cd5d.png"},15:function(e,t,a){e.exports=a.p+"static/media/mobile-clouds-night.6755fd10.jpg"},19:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),o=a.n(c);a(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(2),r=a(3),s=a(5),u=a(4),m=(a(25),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"Navbar"},l.a.createElement("div",{className:"list"},l.a.createElement("ul",null,l.a.createElement("li",{className:"list-links"},l.a.createElement("button",{className:"about",onClick:this.props.click},"About")),l.a.createElement("li",{className:"list-links"},l.a.createElement("button",{className:"projects",onClick:this.props.clickPrj},"Projects")),l.a.createElement("li",{className:"list-links"},l.a.createElement("a",{href:"https://my.indeed.com/p/leq285w"},"Resume")),l.a.createElement("li",{className:"list-links"},l.a.createElement("button",{onClick:this.props.clickContact},"Contact"))),l.a.createElement("div",{className:"underline"})))}}]),a}(l.a.Component)),d=(a(26),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={input:"",submit:""},n}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"background-img"},l.a.createElement("div",{className:"headers"},l.a.createElement("h1",{className:"mainHeader"},"ALDIN  MIKARA"),l.a.createElement("h3",{className:"secondHeader"},"Portfolio site")))}}]),a}(l.a.Component)),h=(a(27),a(7)),p=a(13),b=a.n(p),k=(a(39),a(40),a(14)),f=a.n(k),E=a(15),v=a.n(E),C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"calcLink",value:function(){window.location.href="http://Aldin38.github.io/Calculator"}},{key:"calcLinkCode",value:function(){window.location.href="https://github.com/Aldin38/Calculator"}},{key:"weatherLink",value:function(){window.location.href="http://Aldin38.github.io/Weather"}},{key:"weatherLinkCode",value:function(){window.location.href="https://github.com/Aldin38/Weather"}},{key:"render",value:function(){return l.a.createElement("div",{className:"projects-main"},l.a.createElement("h2",null,"My Projects"),l.a.createElement("div",{className:"project1"},l.a.createElement("h2",null,"Calculator"),l.a.createElement("img",{className:"calc-img",src:f.a,alt:"calculator"}),l.a.createElement("div",{className:"button-wrapper"},l.a.createElement("button",{classname:"projects-buttons",onClick:this.calcLink.bind(this)},"View Project"),l.a.createElement("button",{classname:"projects-buttons",onClick:this.calcLinkCode.bind(this)},"View Code"))),l.a.createElement("div",{className:"project2"},l.a.createElement("h2",null,"Weather App"),l.a.createElement("img",{className:"calc-img",src:v.a,alt:"calculator"}),l.a.createElement("div",{className:"button-wrapper"},l.a.createElement("button",{classname:"projects-buttons",onClick:this.weatherLink.bind(this)},"View Project"),l.a.createElement("button",{classname:"projects-buttons",onClick:this.weatherLinkCode.bind(this)},"View Code"))))}}]),a}(l.a.Component);a(41);var j=function(){return l.a.createElement("div",{className:"about-content"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"Hi I\u2019m Aldin and my passion is software development and graphic design. I do both professionally but now my focus has shifted more towords web development although I am a full-stack developer I enjoy front-end more. The technologies/frameworks i work with: React.js, ReactNative, Node.js, Webpack, Redux... for the rest look in the skills section."))};a(42);var w=function(){return l.a.createElement("div",{className:"contact-content"},l.a.createElement("h2",null,"Contact"),l.a.createElement("ul",null,l.a.createElement("li",null,"E-mail:",l.a.createElement("br",null),"aldin_mikara@hotmail.com"),l.a.createElement("li",null,"Phone number: ",l.a.createElement("br",null),"+387 060 307 6561")))},y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={modalState:!1,display:""},n.handleClickAbout=n.handleClickAbout.bind(Object(h.a)(n)),n}return Object(r.a)(a,[{key:"handleClickContact",value:function(){this.setState({modalState:!0,display:l.a.createElement(w,null)})}},{key:"handleClickProjects",value:function(){this.setState({modalState:!0,display:l.a.createElement(C,null)})}},{key:"handleClickAbout",value:function(){this.setState({modalState:!0,display:l.a.createElement(j,null)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"wrapper"},l.a.createElement(m,{click:this.handleClickAbout.bind(this),clickPrj:this.handleClickProjects.bind(this),clickContact:this.handleClickContact.bind(this)}),l.a.createElement(b.a,{ariaHideApp:!1,style:{overlay:{zIndex:"502",position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"black 0.8"},content:{zIndex:"500",position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"#1A1818 solid 2px",background:"#1A1818",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"10px",outline:"none",padding:"20px"}},isOpen:this.state.modalState,shouldCloseOnOverlayClick:!0,onRequestClose:function(){return e.setState({modalState:!1})}},l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return e.setState({modalState:!1,display:""})},className:"btn btn-default"},"X"),this.state.display)))}}]),a}(l.a.Component),g=a(16);o.a.render(l.a.createElement("div",null,l.a.createElement(g.a,null,l.a.createElement("title",null,"Aldin Mikara - Portfolio")),l.a.createElement(m,null),l.a.createElement(d,null),l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b084f8fa.chunk.js.map