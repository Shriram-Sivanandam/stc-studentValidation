(this.webpackJsonpstcmoviebooking=this.webpackJsonpstcmoviebooking||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(21),s=n.n(c),o=(n(43),n(44),n(23)),l=n(6),i=n(61),j=n(60),u=n(26),b=n(1);var d=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(i.a,{bg:"light",expand:"lg",children:[Object(b.jsx)(i.a.Brand,{children:"Movie Booking"}),Object(b.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsxs)(j.a,{className:"mr-auto",children:[Object(b.jsx)(u.LinkContainer,{to:"/registration",children:Object(b.jsx)(j.a.Link,{children:"Student Registration"})}),Object(b.jsx)(u.LinkContainer,{to:"/parking",children:Object(b.jsx)(j.a.Link,{children:"Parking Fees"})}),Object(b.jsx)(u.LinkContainer,{to:"/tickets",children:Object(b.jsx)(j.a.Link,{children:"Buy Tickets"})})]})})]})})},h=n(10),O=n(56),m=n(62),x=n(59),v=n(57);var p=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(h.a)(c,2),o=s[0],l=s[1],i=Object(r.useState)(""),j=Object(h.a)(i,2),u=j[0],d=j[1],p=Object(r.useState)(""),g=Object(h.a)(p,2),f=g[0],C=g[1],S=Object(r.useState)(""),N=Object(h.a)(S,2),y=N[0],I=N[1],k=Object(r.useState)(""),L=Object(h.a)(k,2),T=L[0],q=L[1],_=Object(r.useState)(""),M=Object(h.a)(_,2),F=M[0],G=M[1],R=Object(r.useState)(""),Y=Object(h.a)(R,2),w=Y[0],B=Y[1];return Object(b.jsxs)(O.a,{children:[Object(b.jsx)("h1",{className:"mb-4",children:"Student Registration Form"}),F&&Object(b.jsx)(m.a,{variant:"danger",children:F}),w&&Object(b.jsx)(m.a,{variant:"success",children:w}),Object(b.jsxs)(x.a,{onSubmit:function(e){e.preventDefault();var t,r=0;/[^a-zA-Z]/.test(n)&&(G("Your name must contain only letters (Sorry Elon Musk's son)"),r++),/^\d+$/.test((t=o).slice(0,2))&&!/[^A-Z]/.test(t.slice(2,5))&&/^\d+$/.test(t.slice(5,8))&&9===t.length||(G("Invalid registration number"),0)||r++,function(e){var t=!0;if(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(e)){var n=!1,r=e.split("/");r.length>1||(G("Date is invalid"),t=!1);var a=parseInt(r[0]),c=parseInt(r[1]),s=parseInt(r[2]);(1===c||c>2)&&a>[31,28,31,30,31,30,31,31,30,31,30,31][c-1]&&(G("Invalid number of days"),t=!1),2===c&&((s%4||!(s%100))&&s%400||(n=!0),!1===n&&a>=29&&(G("Invalid number of days"),t=!1),!0===n&&a>29&&(G("Invalid number of days"),t=!1))}else G("Invalid date format"),t=!1;return t}(u)||r++,function(e){return!!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)||(G("Invalid email address"),!1)}(y)||r++,/^\d+$/.test(T)&&10===T.length||(G("Your phone number is invalid"),r++),r>0&&B(""),0===r&&(G(""),B("Your form has successfully been submitted"),console.log("Name: "+n),console.log("Reg No.: "+o),console.log("Date of birth: "+u),console.log("Name of program: "+f),console.log("Email Id: "+y),console.log("Phone number: "+T),a(""),l(""),d(""),C(""),I(""),q(""))},children:[Object(b.jsxs)(x.a.Group,{className:"form__element",children:[Object(b.jsx)(x.a.Label,{children:"Name"}),Object(b.jsx)(x.a.Control,{required:!0,placeholder:"Your Name",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(b.jsxs)(x.a.Group,{className:"form__element",children:[Object(b.jsx)(x.a.Label,{children:"Registration Number"}),Object(b.jsx)(x.a.Control,{required:!0,placeholder:"Your Registration Number",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(b.jsxs)(x.a.Group,{className:"form__element",children:[Object(b.jsx)(x.a.Label,{children:"DOB"}),Object(b.jsx)(x.a.Control,{required:!0,placeholder:"dd/mm/yyyy",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(b.jsxs)(x.a.Group,{className:"form__element",children:[Object(b.jsx)(x.a.Label,{children:"Program"}),Object(b.jsx)(x.a.Control,{required:!0,placeholder:"Your Program",value:f,onChange:function(e){return C(e.target.value)}})]}),Object(b.jsxs)(x.a.Group,{className:"form__element",children:[Object(b.jsx)(x.a.Label,{children:"Email Id"}),Object(b.jsx)(x.a.Control,{required:!0,placeholder:"Your Student Email Id",value:y,onChange:function(e){return I(e.target.value)}})]}),Object(b.jsxs)(x.a.Group,{className:"form__element",children:[Object(b.jsx)(x.a.Label,{children:"Phone Number"}),Object(b.jsx)(x.a.Control,{required:!0,placeholder:"Your Phone Number",value:T,onChange:function(e){return q(e.target.value)}})]}),Object(b.jsx)(v.a,{varient:"primary",className:"btn",type:"submit",children:"Submit"})]})]})},g=n(58);var f=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),o=Object(h.a)(s,2),l=o[0];o[1],a.a.useEffect((function(){var e=0,t=document.querySelector(".new");t.addEventListener("click",(function(){!function(){var t=prompt("Hours parked by customer"),n=i(t),r=document.querySelector(".tab"),a=document.querySelector(".total"),c=r.insertRow(1),s=c.insertCell(0),o=c.insertCell(1);s.innerHTML=t,o.innerHTML=n,alert("Your Charge: "+n),e+=n,a.innerHTML=e}()}))}));var i=function(e){(e<=0||isNaN(e))&&c("Invalid Input.");var t=0;return e>0&&(t+=2),e>3&&(t+=.5*(e-3)),t>10&&(t=10),t};return Object(b.jsxs)(O.a,{children:[Object(b.jsx)("h1",{className:"mb-4",children:"Parking Chrage Calculator"}),n&&Object(b.jsx)(m.a,{variant:"danger",children:n}),l&&Object(b.jsx)(m.a,{variant:"success",children:l}),Object(b.jsxs)(g.a,{className:"tab",bordered:!0,hover:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Hours"}),Object(b.jsx)("th",{children:"Charge"})]})}),Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Current Total"}),Object(b.jsx)("td",{className:"total",children:"0"})]})})]}),Object(b.jsx)(v.a,{className:"new",children:"Calculate Charge"})]})};var C=function(){return a.a.useEffect((function(){var e=document.querySelector(".book"),t=document.querySelector(".nameInput"),n=document.querySelector(".movieInput"),r=document.querySelector(".typeInput"),a=document.querySelector(".num"),c=function(){var e=document.querySelector(".tab"),c=function(e){return"Front Row - 50"===r.value?50*e:"Silver - 69"===r.value?69*e:"Gold - 220"===r.value?220*e:"Balcony - 420"===r.value?420*e:"VIP's Seat - 786"===r.value?786*e:void 0}(parseInt(a.value)),s=e.insertRow(1),o=s.insertCell(0),l=s.insertCell(1),i=s.insertCell(2),j=s.insertCell(3);o.innerHTML=t.value,l.innerHTML=n.value,i.innerHTML=r.value,j.innerHTML=c};e.addEventListener("click",(function(){c(),t.value="",n.value="Choose Movie",r.value="Choose Seat Type",a.value=""}))})),Object(b.jsxs)(O.a,{children:[Object(b.jsx)("h1",{className:"mb-4",children:"Book Your Tickets"}),Object(b.jsxs)(x.a,{children:[Object(b.jsxs)(x.a.Group,{className:"form__element",children:[Object(b.jsx)(x.a.Label,{children:"Name"}),Object(b.jsx)(x.a.Control,{className:"nameInput",required:!0,placeholder:"Your Name"})]}),Object(b.jsxs)(x.a.Group,{controlId:"exampleForm.ControlSelect2",children:[Object(b.jsx)(x.a.Label,{children:"Movies Avalable"}),Object(b.jsxs)(x.a.Control,{className:"movieInput",as:"select",children:[Object(b.jsx)("option",{children:"Choose Movie"}),Object(b.jsx)("option",{children:"The Josh Fight"}),Object(b.jsx)("option",{children:"37 In An Over"}),Object(b.jsx)("option",{children:"Still I Rise"}),Object(b.jsx)("option",{children:"You Know That Hurt"}),Object(b.jsx)("option",{children:"How I Ran Out Of Ideas"})]})]}),Object(b.jsxs)(x.a.Group,{controlId:"exampleForm.ControlSelect2",children:[Object(b.jsx)(x.a.Label,{children:"Select Type Of Seat"}),Object(b.jsxs)(x.a.Control,{className:"typeInput",as:"select",children:[Object(b.jsx)("option",{children:"Choose Seat Type"}),Object(b.jsx)("option",{children:"Front Row - 50"}),Object(b.jsx)("option",{children:"Silver - 69"}),Object(b.jsx)("option",{children:"Gold - 220"}),Object(b.jsx)("option",{children:"Balcony - 420"}),Object(b.jsx)("option",{children:"VIP's Seat - 786"})]})]}),Object(b.jsxs)(x.a.Group,{className:"form__element",children:[Object(b.jsx)(x.a.Label,{children:"Number Of Seats"}),Object(b.jsx)(x.a.Control,{required:!0,placeholder:"Number Of Seats",className:"num"})]})]}),Object(b.jsx)(v.a,{varient:"primary",className:"btn mb-4 book",type:"submit",children:"Book your tickets"}),Object(b.jsxs)(g.a,{className:"tab",bordered:!0,hover:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Movie"}),Object(b.jsx)("th",{children:"Ticket Type"}),Object(b.jsx)("th",{children:"Total Charge"})]})}),Object(b.jsx)("tbody",{})]})]})};var S=function(){return Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(o.BrowserRouter,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(l.g,{children:[Object(b.jsx)(l.d,{exact:!0,path:"/",component:p}),Object(b.jsx)(l.d,{path:"/registration",component:p}),Object(b.jsx)(l.d,{path:"/parking",component:f}),Object(b.jsx)(l.d,{path:"/tickets",component:C})]})]})})},N=(n(53),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))});s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),N()}},[[54,1,2]]]);
//# sourceMappingURL=main.f5398b93.chunk.js.map