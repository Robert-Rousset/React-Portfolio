(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(5),r=c.n(s),i=(c(4),c(2)),n=c(0);function o(e){var t=e.currentPage,c=e.handlePageChange;return Object(n.jsxs)("aside",{className:"navbar",children:[Object(n.jsx)("a",{href:"#AboutMe",onClick:function(){return c("AboutMe")},children:Object(n.jsx)("button",{className:"button",id:"AboutMe"===t?"active":"",children:"About Me"})}),Object(n.jsx)("a",{href:"#Projects",onClick:function(){return c("Projects")},children:Object(n.jsx)("button",{className:"button",id:"Projects"===t?"active":"",children:"My Work"})}),Object(n.jsx)("a",{href:"#Contact",onClick:function(){return c("Contact")},children:Object(n.jsx)("button",{className:"button",id:"Contact"===t?"active":"",children:"Contact"})})]})}var b=function(e){var t=e.currentPage,c=e.handlePageChange;return Object(n.jsx)("div",{children:Object(n.jsxs)("header",{className:"string"===typeof t?"shrink-header":"header",children:[Object(n.jsx)("h1",{className:"string"===typeof t?"shrink-h1":"",children:"Robert Rousset"}),Object(n.jsx)(o,{currentPage:t,handlePageChange:c})]})})},j=c.p+"static/media/profile-pic.075a0b81.jpg",h=c.p+"static/media/Web-Development-Resume.62ebdbd9.pdf";function d(){return Object(n.jsxs)("section",{id:"aboutme",children:[Object(n.jsx)("h2",{children:"About Me"}),Object(n.jsxs)("article",{className:"aboutme",children:[Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("div",{className:"bio",children:Object(n.jsx)("p",{children:"Hey my name is Rob and im studying to be a Web Developer. Throughout my course I have learnt the fundamentals of HTML, CSS and Javascript. These skills have made me a proficient Web Developer and a very capable software designer. My Hobbies include Music, Video Games, Art, Snowboarding and Coding!"})})}),Object(n.jsx)("figure",{children:Object(n.jsx)("img",{class:"profilePic",src:j,alt:"Image of me (Robert Rousset)"})})]}),Object(n.jsx)("div",{id:"resume",children:Object(n.jsx)("a",{href:h,target:"_blank",children:Object(n.jsx)("button",{className:"resume",children:"Resume"})})})]})}var l=c.p+"static/media/tech-blog.4ed82f0d.png",u=c.p+"static/media/headquarters.cfcc9113.png",m=c.p+"static/media/project1-homepage.d8f8a8a7.png",p=c.p+"static/media/weather-dashboard.214dbf15.png",g=c.p+"static/media/team-profile-gen.2a03ce7b.png",O=c.p+"static/media/budget-tracker.f1f43d56.png",x=c.p+"static/media/github2.f41fb6db.png";function f(){var e=Object(a.useState)(1),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)("Tech Blog"),o=Object(i.a)(r,2),b=o[0],j=o[1],h=Object(a.useState)(l),d=Object(i.a)(h,2),f=d[0],k=d[1],v=Object(a.useState)("Image of the Tech Blog create post page"),R=Object(i.a)(v,2),N=R[0],M=R[1],w=Object(a.useState)("https://bobbies-tech-blog.herokuapp.com/"),C=Object(i.a)(w,2),P=C[0],y=C[1],T=Object(a.useState)("https://github.com/Robert-Rousset/Tech-Blog"),B=Object(i.a)(T,2),I=B[0],S=B[1];var A=function(){0===c&&(j("Tech Blog"),k(l),M("Image of the Tech Blog create post page"),y("https://bobbies-tech-blog.herokuapp.com/"),S("https://github.com/Robert-Rousset/Tech-Blog")),1===c&&(j("Headquarters"),k(u),M("Image of the Headquarters landing page"),y("https://safe-beach-27101.herokuapp.com/"),S("https://github.com/Robert-Rousset/headquarters")),2===c&&(j("MMM Farm Online Store"),k(m),M("Image of my Project 1 application"),y("https://robert-rousset.github.io/MMM-Farm-App/"),S("https://github.com/Robert-Rousset/MMM-Farm-App")),3===c&&(j("Weather Dashboard"),k(p),M("Image of my Weather Dashboard application"),y("https://robert-rousset.github.io/Weather-Dashboard/"),S("https://github.com/Robert-Rousset/Weather-Dashboard")),4===c&&(j("Team Profile Generator"),k(g),M("Image of the Generated Team Profile"),y("https://robert-rousset.github.io/Team-Profile-Generator/"),S("https://github.com/Robert-Rousset/Team-Profile-Generator")),5===c&&(j("Budget Tracker App"),k(O),M("Image of my Budget Tracker application"),y("https://bobs-budgets.herokuapp.com/"),S("https://github.com/Robert-Rousset/Budget-Tracker"))};return Object(n.jsxs)("section",{id:"work",children:[Object(n.jsx)("h2",{children:"My Work"}),Object(n.jsxs)("article",{className:"work",children:[Object(n.jsx)("div",{className:"next",children:Object(n.jsx)("button",{className:"button1",onClick:function(){s(c<=0?5:c-1),A()},children:"<"})}),Object(n.jsx)("div",{className:"work-container",children:Object(n.jsxs)("div",{className:"workCard",children:[Object(n.jsx)("img",{className:"projectImage",src:f,alt:N}),Object(n.jsx)("a",{className:"overlay",href:P,target:"_blank",style:{textDecoration:"none"},children:Object(n.jsxs)("p",{className:"project-text",children:[b,Object(n.jsx)("a",{href:I,target:"_blank",children:Object(n.jsx)("img",{src:x,className:"github"})})]})})]})}),Object(n.jsx)("div",{className:"next",children:Object(n.jsx)("button",{className:"button1",onClick:function(){s(c>=5?0:c+1),A()},children:">"})})]})]})}var k=c.p+"static/media/phone.25b1b9dd.png",v=c.p+"static/media/email.c247dc26.png",R=c.p+"static/media/github.98d7d7a7.png",N=c.p+"static/media/linkedin.5800310d.png";function M(){return Object(n.jsxs)("section",{id:"contact",children:[Object(n.jsx)("h2",{children:"Contact Me"}),Object(n.jsxs)("article",{className:"contact",children:[Object(n.jsxs)("div",{className:"contactImgBox",children:[Object(n.jsx)("img",{src:k}),Object(n.jsx)("a",{href:"https://www.gmail.com",target:"_blank",children:Object(n.jsx)("img",{src:v})}),Object(n.jsx)("a",{href:"https://github.com/Robert-Rousset",target:"_blank",children:Object(n.jsx)("img",{src:R})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/robert-rousset-3a8300193/",target:"_blank",children:Object(n.jsx)("img",{src:N})})]}),Object(n.jsxs)("div",{className:"contactBox",children:[Object(n.jsx)("p",{children:"0499992840"}),Object(n.jsx)("p",{children:Object(n.jsx)("a",{href:"https://www.gmail.com",target:"_blank",children:"robertrousset94@gmail.com"})}),Object(n.jsx)("p",{children:Object(n.jsx)("a",{href:"https://github.com/Robert-Rousset",target:"_blank",children:"github.com"})}),Object(n.jsx)("p",{children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/robert-rousset-3a8300193/",target:"_blank",children:"linkedin.com"})})]})]})]})}function w(){return Object(n.jsxs)("footer",{children:[Object(n.jsx)("h3",{children:"Made by Rob"}),Object(n.jsx)("p",{children:"\xa9 2020 Rob Design"})]})}var C=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{currentPage:c,handlePageChange:function(e){return s(e)}}),"AboutMe"===c?Object(n.jsxs)("div",{children:[Object(n.jsx)(d,{}),Object(n.jsx)(w,{})]}):"Projects"===c?Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{}),Object(n.jsx)(w,{})]}):"Contact"===c?Object(n.jsxs)("div",{children:[Object(n.jsx)(M,{}),Object(n.jsx)(w,{})]}):void 0]})};r.a.render(Object(n.jsx)(C,{}),document.getElementById("root"))},4:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.38d317f2.chunk.js.map