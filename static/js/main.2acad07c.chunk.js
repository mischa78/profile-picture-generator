(this["webpackJsonpprofile-picture-generator"]=this["webpackJsonpprofile-picture-generator"]||[]).push([[0],{22:function(e,t,a){},26:function(e,t,a){var r={"./ProfileFrame B&G Bars.png":[28,4],"./ProfileFrame Blue Bars.png":[29,5],"./ProfileFrame Green Bars.png":[30,6],"./ProfileFrame Mixed Bars.png":[31,7],"./ProfileFrame Purple.png":[32,8],"./ProfileFrame R&Y Bars.png":[33,9],"./ProfileFrame Red Bars.png":[34,10],"./ProfileFrame White Bars.png":[35,11],"./ProfileFrame Yellow Bars.png":[36,12]};function n(e){if(!a.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return a.e(t[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(r)},n.id=26,e.exports=n},27:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),c=a.n(n),s=a(11),o=a.n(s),i=a(10),u=a(9),l=a(2),f=(a(22),a(16)),b=a(5),j=a.n(b),d=a(8);var h=function(e){var t=e.onFrameChange,c=Object(n.useState)([]),s=Object(l.a)(c,2),o=s[0],i=s[1],u=Object(n.useState)(null),f=Object(l.a)(u,2),b=f[0],h=f[1];Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Promise.all(["ProfileFrame Purple","ProfileFrame Yellow Bars","ProfileFrame Red Bars","ProfileFrame Blue Bars","ProfileFrame Green Bars","ProfileFrame White Bars","ProfileFrame Mixed Bars","ProfileFrame R&Y Bars","ProfileFrame B&G Bars"].map(function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,a(26)("./".concat(t,".png"));case 3:return e.t1=e.sent,e.abrupt("return",{name:e.t0,src:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){i(e),h(e[0].src.default)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var O=Object(n.useCallback)((function(e){h(e.target.dataset.src)}),[h]);return Object(n.useEffect)((function(){t(b)}),[t,b]),Object(r.jsxs)("div",{className:"FrameChooser",children:[Object(r.jsx)("h2",{children:"Choose a frame:"}),o.map((function(e){var t=e.src.default,a=b===t;return Object(r.jsx)("img",{alt:e.name,"data-src":t,src:t,className:a?"frame choosen":"frame",onClick:O},t)}))]})},O=a(13),g=a.n(O),m=a(14),p=a.n(m);function v(e,t,a){return Math.min(Math.max(t,e),a)}var x=function(e){var t=e.onChange,a=e.background,c=e.backgroundRatio,s=e.foreground,o=Object(n.useRef)(null),i=Object(n.useRef)(null),u=Object(n.useState)(!1),f=Object(l.a)(u,2),b=f[0],j=f[1],d=Object(n.useState)(null),h=Object(l.a)(d,2),O=h[0],m=h[1],x=Object(n.useState)(null),P=Object(l.a)(x,2),w=P[0],k=P[1],F=Object(n.useState)(0),y=Object(l.a)(F,2),C=y[0],S=y[1],B=Object(n.useState)(0),M=Object(l.a)(B,2),E=M[0],D=M[1],I=Object(n.useState)(0),L=Object(l.a)(I,2),R=L[0],U=L[1],N=Object(n.useState)(0),Y=Object(l.a)(N,2),A=Y[0],T=Y[1],X=Object(n.useState)(1),G=Object(l.a)(X,2),H=G[0],W=G[1],_=Object(n.useState)(300),J=Object(l.a)(_,2),V=J[0],q=J[1],z=Object(n.useState)(300),K=Object(l.a)(z,2),Q=K[0],Z=K[1],$=Object(n.useState)(300),ee=Object(l.a)($,2),te=ee[0],ae=ee[1],re=Object(n.useState)(300),ne=Object(l.a)(re,2),ce=ne[0],se=ne[1],oe=Object(n.useState)(0),ie=Object(l.a)(oe,2),ue=ie[0],le=ie[1],fe=Object(n.useState)(0),be=Object(l.a)(fe,2),je=be[0],de=be[1],he=Object(n.useState)(0),Oe=Object(l.a)(he,2),ge=Oe[0],me=Oe[1],pe=Object(n.useState)(0),ve=Object(l.a)(pe,2),xe=ve[0],Pe=ve[1];Object(n.useEffect)((function(){t&&t({x:C,y:E,scale:H})}),[t,C,E,H]),Object(n.useEffect)((function(){if(o&&o.current){var e=o.current.offsetWidth,t=o.current.offsetHeight;se(t),ae(e);var a=1,r=1;c<1?a=1/c:c>1&&(r=1*c),q(a),Z(r)}}),[c,s]),Object(n.useEffect)((function(){var e=function(e,t,a,r,n){var c=Math.max(0,e*a-r)/2,s=Math.max(0,t*a-n)/2;return{rangeMaxX:c,rangeMinX:0-c,rangeMaxY:s,rangeMinY:0-s}}(V*te,Q*ce,H,te,ce),t=e.rangeMinX,a=e.rangeMinY,r=e.rangeMaxX,n=e.rangeMaxY;le(t),de(a),me(r),Pe(n)}),[V,Q,te,ce,H]),Object(n.useEffect)((function(){S(0),D(0),U(0),T(0),W(1)}),[a]);var we=Object(n.useCallback)((function(e){var t=1*e.target.dataset.x,a=1*e.target.dataset.y,r=v(t+e.deltaX,ue,ge),n=v(a+e.deltaY,je,xe);e.isFinal?(S(r||0),D(n||0),U(0),T(0)):(U(r-t||0),T(n-a||0))}),[ue,je,ge,xe]),ke=Object(n.useCallback)((function(e,t,a,r){e.preventDefault();var n=v(1*e.target.dataset.scale+t/200,1,8);W(n||1);var c=1*e.target.dataset.x,s=1*e.target.dataset.y;S(v(c,ue,ge)||0),D(v(s,je,xe)||0)}),[ue,je,ge,xe]);return Object(n.useEffect)((function(){if(!b&&o&&o.current){var e=o.current;e.addEventListener("mousedown",(function(e){e.preventDefault()}),!1),e.addEventListener("touchstart",(function(e){e.preventDefault()}),!1),e.addEventListener("touchend",(function(e){e.preventDefault()}),!1),e.addEventListener("touchmove",(function(e){e.preventDefault()}),!1),m(new g.a(e,{direction:"DIRECTION_ALL"})),k(p()(e)),j(!0)}}),[o,b]),Object(n.useEffect)((function(){if(O&&w&&b&&o&&o.current)return O.on("pan",we),w.wheel(ke),function(){O.off("pan",we),w.unwheel()}}),[o,we,ke,b,O,w]),Object(r.jsxs)("div",{className:"Editor",ref:o,"data-x":C,"data-y":E,"data-scale":H,children:[Object(r.jsx)("img",{src:a,ref:i,alt:"",className:"background",style:{width:100*V+"%",height:100*Q+"%",transform:"translate3d(calc(-50% + ".concat(C+R,"px), calc(-50% + ").concat(E+A,"px), 0)  scale(").concat(H,",").concat(H,")")}}),Object(r.jsx)("img",{src:s,alt:"",className:"foreground"})]})},P=a.p+"static/media/HeaderImage.1f39a672.svg",w=a(15),k=1080;var F=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),o=Object(l.a)(s,2),b=o[0],j=o[1],d=Object(n.useState)(1),O=Object(l.a)(d,2),g=O[0],m=O[1],p=Object(n.useState)(null),v=Object(l.a)(p,2),F=v[0],y=v[1],C=Object(n.useState)(0),S=Object(l.a)(C,2),B=S[0],M=S[1],E=Object(n.useState)(0),D=Object(l.a)(E,2),I=D[0],L=D[1],R=Object(n.useState)({x:0,y:0,scale:1}),U=Object(l.a)(R,2),N=U[0],Y=U[1],A=Object(n.useCallback)((function(e){c(e)}),[c]),T=Object(n.useCallback)((function(e){var t=e.x,a=e.y,r=e.scale;console.log({x:t,y:a,scale:r}),Y({x:t,y:a,scale:r})}),[]),X=Object(n.useCallback)((function(e){if(e){var t=new FileReader;t.onload=function(t){var a=new Image;a.onload=function(){var r,n;a.width<a.height?(n=a.height/a.width*k,r=k):(n=k,r=a.width/a.height*k),function(e,t){var a=new FileReader;a.onload=function(e){var a=new DataView(e.target.result);if(65496!==a.getUint16(0,!1))return t(-2);for(var r=a.byteLength,n=2;n<r;){var c=a.getUint16(n,!1);if(n+=2,65505===c){if(1165519206!==a.getUint32(n+=2,!1))return t(-1);var s=18761===a.getUint16(n+=6,!1);n+=a.getUint32(n+4,s);var o=a.getUint16(n,s);n+=2;for(var i=0;i<o;i++)if(274===a.getUint16(n+12*i,s))return t(a.getUint16(n+12*i+8,s))}else{if(65280!==(65280&c))break;n+=a.getUint16(n,!1)}}return t(-1)},a.readAsArrayBuffer(e.slice(0,65536))}(e,(function(e){var a=1;switch(e){case 2:case 3:case 4:a=n/r;break;case 5:case 6:case 7:case 8:a=r/n;break;default:a=n/r}M(r),L(n),j(t.target.result),y(e),m(a)}))},a.src=t.target.result},t.readAsDataURL(e)}}),[]),G=Object(n.useCallback)((function(e){X(e.target.files[0])}),[X]),H=Object(n.useCallback)((function(e){X(e[0])}),[X]),W=Object(n.useCallback)((function(){var e=new Image;e.onload=function(){var t=document.createElement("canvas");t.width=k,t.height=k;var r=t.getContext("2d",{alpha:!0});switch(F){case 2:r.translate(t.width,0),r.scale(-1,1);break;case 3:r.translate(t.width,t.height),r.rotate(Math.PI);break;case 4:r.translate(0,t.height),r.scale(1,-1);break;case 5:r.rotate(.5*Math.PI),r.scale(1,-1);break;case 6:r.rotate(.5*Math.PI),r.translate(0,-t.height);break;case 7:r.rotate(.5*Math.PI),r.translate(t.width,-t.height),r.scale(-1,1);break;case 8:r.rotate(-.5*Math.PI),r.translate(-t.width,0)}var n=B*N.scale,c=I*N.scale;r.drawImage(e,3.5*N.x+.5*(k-n),3.5*N.y+.5*(k-c),n,c);var s=t.toDataURL();Object(w.a)([].concat(Object(u.a)(s?[s]:[]),Object(u.a)(a?[a]:[]))).then((function(e){!function(e,t){var a=document.createElement("a");document.body.appendChild(a),a.download=e,a.href=t,a.click(),a.remove()}("volt-profile-picture.png",e)}))},e.src=b}),[b,N.x,N.y,N.scale,F,a,I,B]),_=Object(f.a)({onDrop:H,accept:"image/*",maxFiles:1,noKeyboard:!0}),J=_.isDragActive,V=_.getRootProps;return Object(r.jsxs)("div",Object(i.a)(Object(i.a)({className:"App"},V()),{},{children:[Object(r.jsx)("img",{src:P,className:"HeaderImage",alt:"Volt Logo"}),Object(r.jsx)("div",{className:J?"droparea active":"droparea",children:"Drop your photo here ..."}),Object(r.jsx)("h2",{children:"Choose your Photo:"}),Object(r.jsx)("p",{children:"It should best be a square image or your face in the middle. The photo is not saved and never leaves your computer."}),Object(r.jsxs)("label",{className:"labelButton",tabIndex:"0",style:{outline:"none"},children:[b?Object(r.jsx)("img",{src:b,alt:"Preview"}):null,Object(r.jsx)("span",{children:b?"Change Photo":"Load Photo"}),Object(r.jsx)("input",{onChange:G,type:"file",accept:"image/*",style:{display:"none"}})]}),b?Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(h,{onFrameChange:A})}):null,b&&a?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Edit your Photo:"}),Object(r.jsx)("p",{children:"Your can reposition the image and scale it. Use pinch-to-zoom or scroll to scale."}),Object(r.jsx)(x,{background:b,backgroundRatio:g,foreground:a,onChange:T}),Object(r.jsx)("button",{onClick:W,children:"Download Profile Picture"})]}):null]}))},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(F,{})}),document.getElementById("root")),y()}},[[27,1,2]]]);
//# sourceMappingURL=main.2acad07c.chunk.js.map