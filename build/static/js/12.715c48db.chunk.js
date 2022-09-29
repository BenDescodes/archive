(window.webpackJsonpArchive=window.webpackJsonpArchive||[]).push([[12],{100:function(e,a,t){"use strict";var s=t(1),r=t(2),l=t(3),c=t.n(l),i=t(0),o=t.n(i),n=(t(61),t(27)),m=t.n(n),d=["as","className","type","tooltip"],u={type:m.a.string,tooltip:m.a.bool,as:m.a.elementType},f=o.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,i=e.className,n=e.type,m=void 0===n?"valid":n,u=e.tooltip,f=void 0!==u&&u,b=Object(r.a)(e,d);return o.a.createElement(l,Object(s.a)({},b,{ref:a,className:c()(i,m+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=u;var b=f,v=o.a.createContext({controlId:void 0}),p=t(12),N=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],O=o.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,m=e.className,d=e.type,u=void 0===d?"checkbox":d,f=e.isValid,b=void 0!==f&&f,O=e.isInvalid,j=void 0!==O&&O,E=e.isStatic,x=e.as,y=void 0===x?"input":x,h=Object(r.a)(e,N),w=Object(i.useContext)(v),P=w.controlId,C=w.custom?[n,"custom-control-input"]:[l,"form-check-input"],g=C[0],I=C[1];return l=Object(p.a)(g,I),o.a.createElement(y,Object(s.a)({},h,{ref:a,type:u,id:t||P,className:c()(m,l,b&&"is-valid",j&&"is-invalid",E&&"position-static")}))}));O.displayName="FormCheckInput";var j=O,E=["bsPrefix","bsCustomPrefix","className","htmlFor"],x=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,n=e.className,m=e.htmlFor,d=Object(r.a)(e,E),u=Object(i.useContext)(v),f=u.controlId,b=u.custom?[l,"custom-control-label"]:[t,"form-check-label"],N=b[0],O=b[1];return t=Object(p.a)(N,O),o.a.createElement("label",Object(s.a)({},d,{ref:a,htmlFor:m||f,className:c()(n,t)}))}));x.displayName="FormCheckLabel";var y=x,h=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],w=o.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,m=e.inline,d=void 0!==m&&m,u=e.disabled,f=void 0!==u&&u,N=e.isValid,O=void 0!==N&&N,E=e.isInvalid,x=void 0!==E&&E,w=e.feedbackTooltip,P=void 0!==w&&w,C=e.feedback,g=e.className,I=e.style,F=e.title,k=void 0===F?"":F,R=e.type,V=void 0===R?"checkbox":R,S=e.label,L=e.children,T=e.custom,M=e.as,U=void 0===M?"input":M,z=Object(r.a)(e,h),A="switch"===V||T,G=A?[n,"custom-control"]:[l,"form-check"],q=G[0],J=G[1];l=Object(p.a)(q,J);var _=Object(i.useContext)(v).controlId,B=Object(i.useMemo)((function(){return{controlId:t||_,custom:A}}),[_,A,t]),D=A||null!=S&&!1!==S&&!L,H=o.a.createElement(j,Object(s.a)({},z,{type:"switch"===V?"checkbox":V,ref:a,isValid:O,isInvalid:x,isStatic:!D,disabled:f,as:U}));return o.a.createElement(v.Provider,{value:B},o.a.createElement("div",{style:I,className:c()(g,l,A&&"custom-"+V,d&&l+"-inline")},L||o.a.createElement(o.a.Fragment,null,H,D&&o.a.createElement(y,{title:k},S),(O||x)&&o.a.createElement(b,{type:O?"valid":"invalid",tooltip:P},C))))}));w.displayName="FormCheck",w.Input=j,w.Label=y;var P=w,C=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],g=o.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,f=e.lang,b=e.as,N=void 0===b?"input":b,O=Object(r.a)(e,C),j=Object(i.useContext)(v),E=j.controlId,x=j.custom?[n,"custom-file-input"]:[l,"form-control-file"],y=x[0],h=x[1];return l=Object(p.a)(y,h),o.a.createElement(N,Object(s.a)({},O,{ref:a,id:t||E,type:"file",lang:f,className:c()(m,l,d&&"is-valid",u&&"is-invalid")}))}));g.displayName="FormFileInput";var I=g,F=["bsPrefix","bsCustomPrefix","className","htmlFor"],k=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,n=e.className,m=e.htmlFor,d=Object(r.a)(e,F),u=Object(i.useContext)(v),f=u.controlId,b=u.custom?[l,"custom-file-label"]:[t,"form-file-label"],N=b[0],O=b[1];return t=Object(p.a)(N,O),o.a.createElement("label",Object(s.a)({},d,{ref:a,htmlFor:m||f,className:c()(n,t),"data-browse":d["data-browse"]}))}));k.displayName="FormFileLabel";var R=k,V=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],S=o.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,m=e.disabled,d=void 0!==m&&m,u=e.isValid,f=void 0!==u&&u,N=e.isInvalid,O=void 0!==N&&N,j=e.feedbackTooltip,E=void 0!==j&&j,x=e.feedback,y=e.className,h=e.style,w=e.label,P=e.children,C=e.custom,g=e.lang,F=e["data-browse"],k=e.as,S=void 0===k?"div":k,L=e.inputAs,T=void 0===L?"input":L,M=Object(r.a)(e,V),U=C?[n,"custom"]:[l,"form-file"],z=U[0],A=U[1];l=Object(p.a)(z,A);var G=Object(i.useContext)(v).controlId,q=Object(i.useMemo)((function(){return{controlId:t||G,custom:C}}),[G,C,t]),J=null!=w&&!1!==w&&!P,_=o.a.createElement(I,Object(s.a)({},M,{ref:a,isValid:f,isInvalid:O,disabled:d,as:T,lang:g}));return o.a.createElement(v.Provider,{value:q},o.a.createElement(S,{style:h,className:c()(y,l,C&&"custom-file")},P||o.a.createElement(o.a.Fragment,null,C?o.a.createElement(o.a.Fragment,null,_,J&&o.a.createElement(R,{"data-browse":F},w)):o.a.createElement(o.a.Fragment,null,J&&o.a.createElement(R,null,w),_),(f||O)&&o.a.createElement(b,{type:f?"valid":"invalid",tooltip:E},x))))}));S.displayName="FormFile",S.Input=I,S.Label=R;var L=S,T=(t(62),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),M=o.a.forwardRef((function(e,a){var t,l,n=e.bsPrefix,m=e.bsCustomPrefix,d=e.type,u=e.size,f=e.htmlSize,b=e.id,N=e.className,O=e.isValid,j=void 0!==O&&O,E=e.isInvalid,x=void 0!==E&&E,y=e.plaintext,h=e.readOnly,w=e.custom,P=e.as,C=void 0===P?"input":P,g=Object(r.a)(e,T),I=Object(i.useContext)(v).controlId,F=w?[m,"custom"]:[n,"form-control"],k=F[0],R=F[1];if(n=Object(p.a)(k,R),y)(l={})[n+"-plaintext"]=!0,t=l;else if("file"===d){var V;(V={})[n+"-file"]=!0,t=V}else if("range"===d){var S;(S={})[n+"-range"]=!0,t=S}else if("select"===C&&w){var L;(L={})[n+"-select"]=!0,L[n+"-select-"+u]=u,t=L}else{var M;(M={})[n]=!0,M[n+"-"+u]=u,t=M}return o.a.createElement(C,Object(s.a)({},g,{type:d,size:f,ref:a,readOnly:h,id:b||I,className:c()(N,t,j&&"is-valid",x&&"is-invalid")}))}));M.displayName="FormControl";var U=Object.assign(M,{Feedback:b}),z=["bsPrefix","className","children","controlId","as"],A=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.children,m=e.controlId,d=e.as,u=void 0===d?"div":d,f=Object(r.a)(e,z);t=Object(p.a)(t,"form-group");var b=Object(i.useMemo)((function(){return{controlId:m}}),[m]);return o.a.createElement(v.Provider,{value:b},o.a.createElement(u,Object(s.a)({},f,{ref:a,className:c()(l,t)}),n))}));A.displayName="FormGroup";var G=A,q=["bsPrefix","className","as"],J=["xl","lg","md","sm","xs"],_=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.as,n=void 0===i?"div":i,m=Object(r.a)(e,q),d=Object(p.a)(t,"col"),u=[],f=[];return J.forEach((function(e){var a,t,s,r=m[e];if(delete m[e],"object"===typeof r&&null!=r){var l=r.span;a=void 0===l||l,t=r.offset,s=r.order}else a=r;var c="xs"!==e?"-"+e:"";a&&u.push(!0===a?""+d+c:""+d+c+"-"+a),null!=s&&f.push("order"+c+"-"+s),null!=t&&f.push("offset"+c+"-"+t)})),u.length||u.push(d),o.a.createElement(n,Object(s.a)({},m,{ref:a,className:c.a.apply(void 0,[l].concat(u,f))}))}));_.displayName="Col";var B=_,D=["as","bsPrefix","column","srOnly","className","htmlFor"],H=o.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"label":t,n=e.bsPrefix,m=e.column,d=e.srOnly,u=e.className,f=e.htmlFor,b=Object(r.a)(e,D),N=Object(i.useContext)(v).controlId;n=Object(p.a)(n,"form-label");var O="col-form-label";"string"===typeof m&&(O=O+" "+O+"-"+m);var j=c()(u,n,d&&"sr-only",m&&O);return f=f||N,m?o.a.createElement(B,Object(s.a)({ref:a,as:"label",className:j,htmlFor:f},b)):o.a.createElement(l,Object(s.a)({ref:a,className:j,htmlFor:f},b))}));H.displayName="FormLabel",H.defaultProps={column:!1,srOnly:!1};var K=H,Q=["bsPrefix","className","as","muted"],W=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.as,n=void 0===i?"small":i,m=e.muted,d=Object(r.a)(e,Q);return t=Object(p.a)(t,"form-text"),o.a.createElement(n,Object(s.a)({},d,{ref:a,className:c()(l,t,m&&"text-muted")}))}));W.displayName="FormText";var X=W,Y=o.a.forwardRef((function(e,a){return o.a.createElement(P,Object(s.a)({},e,{ref:a,type:"switch"}))}));Y.displayName="Switch",Y.Input=P.Input,Y.Label=P.Label;var Z=Y,$=/-(.)/g;var ee=["className","bsPrefix","as"],ae=function(e){return e[0].toUpperCase()+(a=e,a.replace($,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var te=["bsPrefix","inline","className","validated","as"],se=function(e,a){var t=void 0===a?{}:a,l=t.displayName,i=void 0===l?ae(e):l,n=t.Component,m=t.defaultProps,d=o.a.forwardRef((function(a,t){var l=a.className,i=a.bsPrefix,m=a.as,d=void 0===m?n||"div":m,u=Object(r.a)(a,ee),f=Object(p.a)(i,e);return o.a.createElement(d,Object(s.a)({ref:t,className:c()(l,f)},u))}));return d.defaultProps=m,d.displayName=i,d}("form-row"),re=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,i=e.className,n=e.validated,m=e.as,d=void 0===m?"form":m,u=Object(r.a)(e,te);return t=Object(p.a)(t,"form"),o.a.createElement(d,Object(s.a)({},u,{ref:a,className:c()(i,n&&"was-validated",l&&t+"-inline")}))}));re.displayName="Form",re.defaultProps={inline:!1},re.Row=se,re.Group=G,re.Control=U,re.Check=P,re.File=L,re.Switch=Z,re.Label=K,re.Text=X;a.a=re},156:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var s=t(18),r=t(41),l=t(99),c=t(0),i=t.n(c),o=t(98),n=t.n(o),m=t(100),d=t(96),u=t(21),f={nom_complet:"",password:"",confpassword:""};function b(){var e,a=Object(u.h)().token,t=Object(c.useState)(""),o=Object(l.a)(t,2),b=o[0],v=o[1],p=Object(c.useState)(""),N=Object(l.a)(p,2),O=N[0],j=N[1],E=Object(c.useState)(f),x=Object(l.a)(E,2),y=x[0],h=x[1],w=y.nom_complet,P=y.password,C=y.confpassword,g=function(e){var a=e.target,t=a.name,l=a.value;h(Object(r.a)(Object(r.a)({},y),{},Object(s.a)({},t,l)))};return Object(c.useEffect)((function(){n.a.get(d.a+"users/".concat(a)).then((function(e){h(e.data[0])})).catch((function(e){console.log(e)}))}),[]),i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"}," Utilisateur "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},"Utilisateur"),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Modifier")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 grid-margin"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title mb-5"}," ",i.a.createElement("a",{className:"btn btn-info btn-xs",href:"/users/LsUsers"},i.a.createElement("i",{className:"mdi mdi-arrow-left-bold mdi-icon"}))," \xa0Modifier mot de passe "),b&&""!=b&&i.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},b),O&&""!=O&&i.a.createElement("div",{className:"alert alert-success text-center",role:"alert"},O),i.a.createElement("form",{className:"form-sample",id:"myform",onSubmit:function(e){v(""),j(""),e.preventDefault(),n.a.put(d.a+"users/password/".concat(a),{password:P,confpassword:C}).then((function(e){e.data.erreur?v(e.data.erreur):(j(e.data.reussie),document.getElementById("myform").reset())})).catch((function(e){console.log(e)}))}},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement(m.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-2 col-form-label"},"Nom complet"),i.a.createElement("div",{className:"col-sm-10"},i.a.createElement(m.a.Control,{type:"text",disabled:!0,value:w,onChange:g})))),i.a.createElement("div",{className:"col-md-12"},i.a.createElement(m.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-2 col-form-label"},"Password"),i.a.createElement("div",{className:"col-sm-10"},i.a.createElement(m.a.Control,{type:"password",required:!0,id:"password",name:"password",value:P,onChange:g})))),i.a.createElement("div",{className:"col-md-12"},i.a.createElement(m.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-2 col-form-label"},"Confime Password"),i.a.createElement("div",{className:"col-sm-10"},i.a.createElement(m.a.Control,{type:"password",required:!0,name:"confpassword",value:C,onChange:g}))))),i.a.createElement("button",(e={type:"button"},Object(s.a)(e,"type","submit"),Object(s.a)(e,"className","btn btn-success mr-2"),e),"Modifier"),i.a.createElement("a",{className:"btn btn-danger",href:"/users/LsUsers"},"Annuler")))))))}},96:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var s="http://localhost:3001/"}}]);
//# sourceMappingURL=12.715c48db.chunk.js.map