webpackJsonp([1],{"7zck":function(t,e){},D1wS:function(t,e){},Lnan:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",[n("v-toolbar-side-icon"),t._v(" "),n("v-toolbar-title",[t._v("Visual Explain")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:"",href:"https://github.com/ssthouse"}},[n("v-avatar",{attrs:{size:"42"}},[n("img",{attrs:{src:"https://avatars3.githubusercontent.com/u/10973821?s=460&v=4"}})]),t._v(" "),n("span",{staticStyle:{"margin-left":"8px"}},[t._v("About me: ssthouse")])],1),t._v(" "),n("v-tooltip",{attrs:{bottom:""}},[n("v-btn",{attrs:{slot:"activator",flat:"",href:"https://github.com/ssthouse/visual-explain"},slot:"activator"},[n("v-avatar",{attrs:{size:"42"}},[n("img",{attrs:{src:"https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"}})]),t._v("\n        Source Code\n      ")],1),t._v(" "),n("span",{staticClass:"top-bar-tooltip"},[t._v("Welcome to fork & star "),n("br"),t._v(" ; )")])],1)],1)],1)},staticRenderFns:[]};var o={components:{"top-bar":n("VU/8")({},r,!1,function(t){n("D1wS")},null,null).exports},name:"App"},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{id:"app"}},[e("top-bar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")(o,a,!1,function(t){n("eMix")},null,null).exports,l=n("/ocq"),c=n("Zrlr"),u=n.n(c),d=n("wxAW"),h=n.n(d),p=function(){function t(e,n){u()(this,t),this.name=e,this._children=n,this.visible=!1,this.key=1e3*Math.random()}return h()(t,[{key:"addChild",value:function(t){this._children||(this._children=[]),this._children.push(t)}},{key:"filterChildren",value:function(){this._children&&(this.children=this._children.filter(function(t){return t.visible}),this.children&&this.children.forEach(function(t){return t.filterChildren()}))}},{key:"hide",value:function(t){this.name!==t?this._children&&this._children.forEach(function(e){return e.hide(t)}):this.visible=!1}},{key:"show",value:function(t){this.name!==t?this._children&&this._children.forEach(function(e){return e.show(t)}):this.visible=!0}}]),t}(),v=function(){function t(e){u()(this,t),this.rootDomNode=e}return h()(t,[{key:"restore",value:function(){this.rootDomNode.restore()}},{key:"hide",value:function(t){this.rootDomNode.hide(t)}},{key:"show",value:function(t){this.rootDomNode.show(t)}},{key:"getData",value:function(){return!1===this.rootDomNode.visible?null:(this.rootDomNode.filterChildren(),this.rootDomNode)}}]),t}(),m=new p("html",null),f=new p("body",null);m.addChild(f);var y=new p("head",null);m.addChild(y);var w=new p("title",null),x=new p("style",null);y.addChild(w),y.addChild(x);var k=new p("h1",null),g=new p("ul",null);f.addChild(k),f.addChild(g);var _=new p("li",null);g.addChild(_);var C=new v(m),b=function(){function t(e,n,i){u()(this,t),this.contentStr=e,this.stepArray=n,this.domTreeData=i,this.initData()}return h()(t,[{key:"initData",value:function(){this.rows=this.contentStr.split("\n"),this.curStep=-1}},{key:"restore",value:function(){this.curStep=-1,this.hideAll()}},{key:"hideAll",value:function(){var t=this;this.stepArray.forEach(function(e){t.domTreeData.hide(e.nodeName)})}},{key:"stepForward",value:function(){this.curStep>=this.stepArray.length-1||(this.curStep+=1,this.domTreeData.show(this.stepArray[this.curStep].nodeName))}},{key:"stepBackword",value:function(){this.curStep<=-1||(this.curStep-=1,this.domTreeData.hide(this.stepArray[this.curStep+1].nodeName))}},{key:"isLastStep",value:function(){return this.curStep>=this.stepArray.length-1}},{key:"getCurContent",value:function(){this.getCurRows().join("\n")}},{key:"getCurRows",value:function(){for(var t=0,e=0;e<=this.curStep;e++)t+=this.stepArray[e].count;return this.getAllRows().slice(0,t)}},{key:"getCurDomTreeData",value:function(){return this.domTreeData.getData()}},{key:"getAllRows",value:function(){return this.rows}}]),t}(),S=new b("<!DOCTYPE html>\n<html>\n    <head>\n      <title>Web app lifecycle</title>\n      <style>\n          #list { color: green;}\n          #second { color: red;}\n      </style>\n    </head>\n    <body>\n        <h1>head one</h1>\n        <ul id=\"list\"></ul>\n        <script>\n            var liElement = document.createElement(\"li\");\n            liElement.textContent = 'I am a li';\n            document.getElementById('list').appendChild(liElement);\n        <\/script>\n    </body>\n</html>",[{count:2,nodeName:"html"},{count:1,nodeName:"head"},{count:1,nodeName:"title"},{count:4,nodeName:"style"},{count:1,nodeName:""},{count:1,nodeName:"body"},{count:1,nodeName:"h1"},{count:1,nodeName:"ul"},{count:5,nodeName:"li"},{count:2,nodeName:""}],C),D={name:"Root",data:function(){return{yScale:null,codeView:null,domTree:null,codeSnippet:S,nodeRadius:30,nodeWidth:80,nodeHeight:140}},mounted:function(){this.domTree=this.$d3.select("#domTree"),this.codeView=this.$d3.select("#codeView"),this.linkContainer=this.$d3.select("#linkContainer"),this.circleContainer=this.$d3.select("#circleContainer"),this.textContainer=this.$d3.select("#textContainer"),window.code=this},methods:{previousStep:function(){this.codeSnippet.stepBackword(),this.updateView(this.codeSnippet.getCurRows()),this.updateDomTree()},nextStep:function(){this.codeSnippet.stepForward(),this.updateView(this.codeSnippet.getCurRows()),this.updateDomTree()},autoPlay:function(){this.clearDomTree(),this.codeSnippet.restore(),this.autoNextStep()},clearDomTree:function(){this.codeView.selectAll("*").remove(),this.linkContainer.selectAll("*").remove(),this.circleContainer.selectAll("*").remove(),this.textContainer.selectAll("*").remove()},autoNextStep:function(){var t=this;this.codeSnippet.isLastStep()||setTimeout(function(){t.nextStep(),t.autoNextStep()},1e3)},updateView:function(t){var e=this.codeView.selectAll("text").data(t);e.style("stroke","black"),e.enter().append("text").text(function(t){return t}).style("stroke","blue").style("font-family","monospace").style("stroke-width",.5).attr("x",-100).style("opacity",0).attr("xml:space","preserve").transition().attr("font-size","20px").attr("x","30").attr("y",function(t,e){return 30*(e+1)}).style("opacity",1).style("stroke","black").style("stroke-width",.5),e.exit().transition().style("stroke","red").attr("x","-100px").attr("y",0).style("opacity",0).remove()},updateDomTree:function(){if(this.codeSnippet.getCurDomTreeData()){var t=this.$d3.hierarchy(this.codeSnippet.getCurDomTreeData()),e=this.$d3.tree().nodeSize([this.nodeWidth,this.nodeHeight])(t);this.drawDomTree(e.descendants(),e.links())}else this.drawDomTree([],[])},drawDomTree:function(t,e){var n=this.domTree.style("width"),i=parseInt(n.substring(0,n.length-2))/2,r=this.linkContainer.selectAll(".link").data(e),o=this;r.enter().append("path").attr("class","link").attr("fill","transparent").attr("stroke","black").merge(r).attr("d",function(t,e){return o.$d3.linkVertical().x(function(t){return t.x+i}).y(function(t){return t.y+100}).source(function(t){return{x:t.source.x,y:t.source.y}}).target(function(){return{x:t.target.x,y:t.target.y}})(t)}),r.exit().remove();var a=this.circleContainer.selectAll("circle").data(t,function(t){return t.data.key});a.enter().append("circle").attr("class","node").attr("fill","white").attr("stroke","black").attr("r",this.nodeRadius).merge(a).transition().attr("cx",function(t){return t.x+i}).attr("cy",function(t){return t.y+100}),a.exit().remove();var s=this.textContainer.selectAll("text").data(t,function(t){return t.data.key});s.enter().append("text").attr("text-anchor","middle").attr("font-size","20px").attr("dy",".4em").merge(s).transition().attr("x",function(t){return t.x+i}).attr("y",function(t){return t.y+100}).text(function(t){return t.data.name}),s.exit().remove()}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"domRender"}},[n("div",{attrs:{id:"control-panel"}},[n("v-btn",{on:{click:function(e){t.previousStep()}}},[t._v("Previous Step")]),t._v(" "),n("v-btn",{on:{click:function(e){t.nextStep()}}},[t._v("Next Step")]),t._v(" "),n("v-btn",{on:{click:function(e){t.autoPlay()}}},[t._v("Auto play")])],1),t._v(" "),n("div",{attrs:{id:"svg-container"}},[n("svg",{attrs:{id:"codeView"}}),t._v(" "),n("svg",{attrs:{id:"domTree"}},[n("g",{attrs:{id:"linkContainer"}}),t._v(" "),n("g",{attrs:{id:"circleContainer"}}),t._v(" "),n("g",{attrs:{id:"textContainer"}})])])])},staticRenderFns:[]};var A=n("VU/8")(D,N,!1,function(t){n("Lnan")},null,null).exports,T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[this._v("Index Page")]),this._v(" "),e("v-btn",{attrs:{to:"/list/domRender"}},[this._v("Dom Render")])],1)},staticRenderFns:[]};var R=n("VU/8")({name:"Root",data:function(){return{}},mounted:function(){}},T,!1,function(t){n("zPQq")},null,null).exports;i.default.use(l.a);var E=new l.a({routes:[{path:"/",redirect:"/list"},{path:"/list",name:"index",component:R},{path:"/list/domRender",name:"domRender",component:A}]}),V=n("vwbq"),$=n("3EgV"),z=n.n($);n("7zck");i.default.use(z.a),i.default.config.productionTip=!1,i.default.prototype.$d3=V,new i.default({el:"#app",router:E,components:{App:s},template:"<App/>"})},eMix:function(t,e){},zPQq:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f8526044151d6c686599.js.map