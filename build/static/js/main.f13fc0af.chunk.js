(this["webpackJsonpbabajanyan-arsen"]=this["webpackJsonpbabajanyan-arsen"]||[]).push([[0],{108:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(65);var s=t(21),o=t(44),m=t(1),d=t(49),u=t(50);s.a.use(o.a).use(m.a).init({resources:{en:{translations:d},de:{translations:u}},fallbackLng:"en",ns:["translations"],defaultNS:"translations",interpolation:{escapeValue:!1}}),s.a.language.includes("-")&&s.a.changeLanguage(s.a.language.split("-")[0]);var E=s.a,h=t(3),b=t(4),g=t(109),p=[{key:"en",label:"EN"}],f=function(){var e=Object(m.b)().i18n;return r.a.createElement("ul",{className:"lang-switch"},p.map((function(a){var t=a.key,n=a.label;return r.a.createElement("li",{key:t},r.a.createElement("button",{className:"unstyled ".concat(e.language===t?"active":""),onClick:function(){return a=t,void e.changeLanguage(a);var a}},n))})))},v=function(){return r.a.createElement("ul",{className:"social-links"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/arsen.babajanyan.5",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"icon icon-facebook"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.youtube.com/channel/UCi-4vpJzx9gi1ERtj_EmfaA",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"icon icon-youtube"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/babajanyan_arsen/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"icon icon-insta"}))))},N=function(){var e=Object(m.b)().t,a=Object(n.useState)(!1),t=Object(b.a)(a,2),c=t[0],i=t[1];Object(n.useEffect)((function(){c?document.body.classList.add("menu-opened"):document.body.classList.remove("menu-opened")}),[c]);var l=Object(n.useCallback)((function(){i(!1)}),[]);return r.a.createElement("header",{className:"page-header"},r.a.createElement("div",{className:"header-container"},r.a.createElement("h1",null,r.a.createElement(h.b,{to:"/",onClick:l},e("ARSEN_BABAJANYAN"))),r.a.createElement("button",{className:"header-menu-toggle unstyled ".concat(c?"in":""),onClick:function(){return i(!c)}})),r.a.createElement(g.a,{in:c,timeout:{enter:2200,exit:2200},unmountOnExit:!0,classNames:"fade"},r.a.createElement("div",{className:"header-menu"},r.a.createElement("div",{className:"header-menu-backdrop",onClick:l}),r.a.createElement(f,null),r.a.createElement("ul",{className:"header-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.c,{className:"nav-link",to:"/",onClick:l,exact:!0},e("HEADER_HOME"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.c,{className:"nav-link",to:"/biography",onClick:l},e("BIOGRAPHY"))),r.a.createElement("li",{className:"nav-item has-subnav"},r.a.createElement(h.c,{className:"nav-link",to:"/library",onClick:l},e("LIBRARY")),r.a.createElement("ul",{className:"header-sub-nav"},r.a.createElement("li",null,r.a.createElement(h.c,{className:"nav-link",to:"/library/recordings",onClick:l},e("RECORDINGS"))),r.a.createElement("li",null,r.a.createElement(h.c,{className:"nav-link",to:"/library/works",onClick:l},e("WORKS"))),r.a.createElement("li",null,r.a.createElement(h.c,{className:"nav-link",to:"/library/media",onClick:l},e("MEDIA"))),r.a.createElement("li",null,r.a.createElement(h.c,{className:"nav-link",to:"/library/events",onClick:l},e("EVENTS"))))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.c,{className:"nav-link",to:"/highlights",onClick:l},e("HIGHLIGHTS")))),r.a.createElement(v,null))))},y=t(16),O=t(110),A=function(){var e="object"===typeof window,a=Object(n.useCallback)((function(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0,isMobile:e?window.innerWidth<768:void 0}}),[e]),t=Object(n.useState)(a()),r=Object(b.a)(t,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){if(!e)return!1;function t(){i(a())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[a,e]),c},w=t(19),k=t.n(w),S=function(){var e=Object(m.b)().t,a=A().isMobile,t=e("HOME_HERO_CAPTION").split("");return r.a.createElement(k.a,{className:"section-hero home-section-hero"},!a&&r.a.createElement(f,null),r.a.createElement("div",{className:"section-caption",onClick:function(){document.querySelector(".header-menu-toggle").click()}},t.map((function(e,a){return r.a.createElement("span",{key:a},e)}))),!a&&r.a.createElement(v,null))},R=t(20),C=t.n(R),T=[{date:"March 16, 2020",title:{en:"Studio concert of the saxophone class Prof. Koryun Asatryan",hy:"arm goodbye, bird",ru:"rus goodbye, bird"},desc:{en:"The premiere of Arsen Babajanyan's new piece. <br> Munich, Gasteig, Small concert hall. <br>Entry is Free.",hy:"Arm Lorem ipsum dolor sit amet, consectetil adipiscing elit, sed do eiusmod tempoal incididunt ut labore et dolore magna ala.",ru:"Rus Lorem ipsum dolor sit amet, consectetil adipiscing elit, sed do eiusmod tempoal incididunt ut labore et dolore magna ala."},url:"https://website.musikhochschule-muenchen.de/de/index.php?option=com_content&task=view&id=1411&Itemid=602&GID=0x2f58df5155ca468093cdae340d4bc5b1&TGID=0xdae1127cbca349f8a7650468351fedbb&fbclid=IwAR23KXEbXRBphfhp8r7JbePqG4vag5wgAEZJOvosJ5CfNcrEiINJeakWxO8"},{date:"March 22, 2020",title:{en:"Odeon Concert: \xbbVariet\xe9\xab\n",hy:"arm goodbye, bird",ru:"rus goodbye, bird"},desc:{en:"Performance of Arsen Babajanyan's new piece. Performers: Koryun Asatryan (saxophon) and HMTM students. <br> Munich | All Saints' Court Church\n",hy:"Arm Lorem ipsum dolor sit amet, consectetil adipiscing elit, sed do eiusmod tempoal incididunt ut labore et dolore magna ala.",ru:"Rus Lorem ipsum dolor sit amet, consectetil adipiscing elit, sed do eiusmod tempoal incididunt ut labore et dolore magna ala."},url:"https://website.musikhochschule-muenchen.de/de/index.php?option=com_content&task=view&id=1411&Itemid=602&GID=0x2f58df5155ca468093cdae340d4bc5b1&TGID=0xdae1127cbca349f8a7650468351fedbb&fbclid=IwAR23KXEbXRBphfhp8r7JbePqG4vag5wgAEZJOvosJ5CfNcrEiINJeakWxO8"},{date:"2020",title:{en:"Goodbye, Bird Opera",hy:"arm goodbye, bird",ru:"rus goodbye, bird"},desc:{en:"The premiere of Goodbye, Bird opera is expecting at the end of 2020 in Munich!",hy:"Arm Lorem ipsum dolor sit amet, consectetil adipiscing elit, sed do eiusmod tempoal incididunt ut labore et dolore magna ala.",ru:"Rus Lorem ipsum dolor sit amet, consectetil adipiscing elit, sed do eiusmod tempoal incididunt ut labore et dolore magna ala."},url:"https://www.facebook.com/Goodbye-Bird-Opera-351535078801614/?ref=bookmarks"}],j=function(e,a){for(var t=[],n=0;n<e.length;n++){var r=t[t.length-1];r&&r.length!==a?r.push(e[n]):t.push([e[n]])}return t},_=t(28),I=t.n(_),H=(t(99),t(100),function(){var e=Object(m.b)().t,a=A().isMobile,t=j(T,a?1:3),n={dots:!a,infinite:!1,arrows:!1,speed:1e3,fade:!0,slidesToShow:1,slidesToScroll:1,appendDots:function(e){return r.a.createElement("div",{className:"slider-paging"},r.a.createElement("ul",null," ",e," "))},customPaging:function(e){return r.a.createElement("div",{className:"paging-item"},e+1)}};return r.a.createElement("section",{className:"upcoming-concerts-section section-light"},r.a.createElement("h2",{className:"section-title"},e("UPCOMING_CONCERTS")),r.a.createElement("div",{className:"slider-container"},r.a.createElement(C.a,n,t.map((function(a,t){return r.a.createElement("div",{className:"slider-item",key:t},a.map((function(a,t){return r.a.createElement("div",{className:"slide-article",key:t},r.a.createElement("div",{className:"article-body"},r.a.createElement("span",{className:"article-date"},a.date),r.a.createElement("h5",{className:"article-title"},a.title[E.language]),r.a.createElement("p",{className:"article-desc-short",dangerouslySetInnerHTML:{__html:a.desc[E.language]}}),r.a.createElement("div",{className:"article-action-wrapper"},r.a.createElement("a",{href:a.url,className:"article-action",target:"_blank",rel:"noopener noreferrer"},e("DETAILS")))))})))})))))}),L=[{date:"2019-10-28",thumb:"/gallery/highlights/3.jpg",title:{en:"Cit\xe9 Internationale des Arts",hy:"arm dolor sit amet",ru:"rus dolor sit amet"},desc:{en:"Arsen Babajanyan's 6-month scholarship-residence in Paris ended up with a small portrait concert at Cit\xe9 Internationale des Arts!",hy:"Arm Lorem ipsum dolor sit amet, consecteti adipiscing elit, sed do eiusmod.",ru:"Rus Lorem ipsum dolor sit amet, consecteti adipiscing elit, sed do eiusmod."},url:"https://www.citedesartsparis.net/fr/concert-arsen-babajanyan--portrait-of-composer"},{date:"2019-04-17",thumb:"/gallery/highlights/2.jpg",title:{en:"UTRECHT, CARAVAGGIO UND EUROPA",hy:"Die Kreuzigung Christi",ru:"Die Kreuzigung Christi"},desc:{en:'Arsen Babajanyan composed music for 11 pictures from the gorgeous exhibition "UTRECHT CARAVAGGIO AND EUROPE" organized by Alte Pinakothek, Munich',hy:"Arm Lorem ipsum dolor sit amet, consecteti adipiscing elit, sed do eiusmod.",ru:"Rus Lorem ipsum dolor sit amet, consecteti adipiscing elit, sed do eiusmod."},url:"https://www.pinakothek.de/caravaggisti"},{date:"2019-04-06",thumb:"/gallery/highlights/1.jpg",title:{en:"Goodbye, bird - opera",hy:"arm goodbye, bird",ru:"rus goodbye, bird"},desc:{en:'Composer Arsen Babajanyan, writer Aram Pachyan, choreographer Ljuba Avvakumova and animator Eva Muradyan have banded together around the creation of "Goodbye, Bird" chamber opera. ',hy:"Arm Lorem ipsum dolor sit amet, consecteti adipiscing elit, sed do eiusmod.",ru:"Rus Lorem ipsum dolor sit amet, consecteti adipiscing elit, sed do eiusmod."},url:"https://www.facebook.com/pg/Goodbye-Bird-Opera-351535078801614/about/?ref=page_internal"}],B=function(e){var a=e.src,t=e.alt,n=void 0===t?"":t;return r.a.createElement("picture",null,r.a.createElement("source",{srcSet:"".concat(a,".webp"),type:"image/webp"}),r.a.createElement("source",{srcSet:a,type:"image/jpeg"}),r.a.createElement("img",{src:a,alt:n}))},M=r.a.memo((function(e){var a=e.data,t=e.onClick,n=Object(m.b)().t;return r.a.createElement("a",{href:a.url,target:"_blank",className:"slide-article media-article",rel:"noopener noreferrer"},r.a.createElement("h5",{className:"article-title"},r.a.createElement("span",null,a.title[E.language])),r.a.createElement("div",{className:"article-thumb",onClick:function(e){t&&a.images&&a.images.length&&(e.preventDefault(),t(a.images))}},r.a.createElement(B,{src:""+a.thumb,alt:""})),r.a.createElement("div",{className:"article-body"},!!a.date&&r.a.createElement("span",{className:"article-date"},function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MMMM DD. YYYY",t=I()(e).locale("hy"===E.language?"hy-am":"ru"===E.language?"ru":"en");return t.format(a)}(a.date)),r.a.createElement("p",{className:"article-desc-short",dangerouslySetInnerHTML:{__html:a.desc[E.language]}}),r.a.createElement("div",{className:"article-action-wrapper-media"},r.a.createElement("a",{href:a.url,className:"article-action",target:"_blank",rel:"noopener noreferrer"},n("MORE")))))})),D=function(){var e=A().isMobile,a=j(L,e?1:3),t=Object(m.b)().t,n={dots:!e,infinite:!1,arrows:!1,speed:1e3,fade:!0,slidesToShow:1,slidesToScroll:1,appendDots:function(e){return r.a.createElement("div",{className:"slider-paging"},r.a.createElement("ul",null," ",e," "))},customPaging:function(e){return r.a.createElement("div",{className:"paging-item"},e+1)}};return r.a.createElement("section",{className:"highlights-section"},r.a.createElement("h2",{className:"section-title"},t("HIGHLIGHTS")),r.a.createElement("div",{className:"slider-container"},r.a.createElement(C.a,Object.assign({className:"concerts-slider"},n),a.map((function(e,a){return r.a.createElement("div",{className:"slider-item",key:a},e.map((function(e,a){return r.a.createElement(M,{key:a,data:e})})))})))))},x=function(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),r.a.createElement("div",{className:"home-page-content"},r.a.createElement(S,null),r.a.createElement(D,null),r.a.createElement(H,null))},G=t(53),P=t.n(G),Y=function(){var e=Object(m.b)().t;return r.a.createElement(k.a,{className:"section-hero bio-section-hero"},r.a.createElement("div",{className:"section-title"},e("BIOGRAPHY")),r.a.createElement("div",{className:"section-caption"},r.a.createElement("h1",{dangerouslySetInnerHTML:{__html:e("BIO_HERO_TITLE")}}),r.a.createElement("p",{className:"hero-section-desc"},e("BIO_HERO_DESC"))),r.a.createElement("div",{className:"section-image",style:{backgroundImage:"url(".concat(P.a,")")}}),r.a.createElement(v,null))},W=t(54),J=t.n(W),U=t(55),K=t.n(U),z=t(56),V=t.n(z),X=t(57),F=t.n(X),q=t(58),Z=t.n(q),$=function(){var e=Object(n.useState)(null),a=Object(b.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.useEffect)((function(){fetch("/db/bio.json").then((function(e){return e.json()})).then(c)}),[]);var i=E.language;return r.a.createElement("div",{className:"home-page-content"},r.a.createElement(Y,null),t?r.a.createElement("section",{className:"section-light bio-items-section"},r.a.createElement("div",{className:"bio-items"},r.a.createElement("div",{className:"bio-item"},r.a.createElement("div",{className:"item-number"},"01"),r.a.createElement("div",{className:"item-title"},t.composer.title[i]),r.a.createElement("div",{className:"item-content-wrapper"},r.a.createElement("div",{className:"item-content",dangerouslySetInnerHTML:{__html:t.composer.content[i]}})),r.a.createElement("div",{className:"item-image-wrapper top-left"},r.a.createElement("img",{src:J.a,className:"item-image",alt:"composer"}))),r.a.createElement("div",{className:"bio-item item-inverse"},r.a.createElement("div",{className:"item-number"},"02"),r.a.createElement("div",{className:"item-title"},t.education.title[i]),r.a.createElement("div",{className:"item-image-wrapper top-right"},r.a.createElement("img",{src:K.a,className:"item-image",alt:"education"})),r.a.createElement("div",{className:"item-content-wrapper"},r.a.createElement("div",{className:"item-content"},r.a.createElement("ul",{className:"educations"},t.education.content.map((function(e,a){var t=e.year,n=e.desc;return r.a.createElement("li",{key:a},r.a.createElement("div",{className:"item-year"},t),r.a.createElement("div",{className:"item-desc",dangerouslySetInnerHTML:{__html:n[i]}}))})))))),r.a.createElement("div",{className:"bio-item"},r.a.createElement("div",{className:"item-number"},"03"),r.a.createElement("div",{className:"item-title"},t.honorsPrizes.title[i]),r.a.createElement("div",{className:"item-content-wrapper"},r.a.createElement("div",{className:"item-content",dangerouslySetInnerHTML:{__html:t.honorsPrizes.content[i]}})),r.a.createElement("div",{className:"item-image-wrapper  top-left"},r.a.createElement("img",{src:F.a,className:"item-image",alt:"honorsPrizes"}))),r.a.createElement("div",{className:"bio-item item-inverse"},r.a.createElement("div",{className:"item-number"},"04"),r.a.createElement("div",{className:"item-title"},t.artsAmbassador.title[i]),r.a.createElement("div",{className:"item-image-wrapper top-right"},r.a.createElement("img",{src:V.a,className:"item-image",alt:"artsAmbassador"})),r.a.createElement("div",{className:"item-content-wrapper"},r.a.createElement("div",{className:"item-content",dangerouslySetInnerHTML:{__html:t.artsAmbassador.content[i]}}))),r.a.createElement("div",{className:"bio-item"},r.a.createElement("div",{className:"item-number"},"05"),r.a.createElement("div",{className:"item-title"},t.socialActivity.title[i]),r.a.createElement("div",{className:"item-content-wrapper"},r.a.createElement("div",{className:"item-content",dangerouslySetInnerHTML:{__html:t.socialActivity.content[i]}})),r.a.createElement("div",{className:"item-image-wrapper top-left"},r.a.createElement("img",{src:Z.a,className:"item-image",alt:"socialActivity"}))))):"loading...")},Q=function(){var e=Object(m.b)().t;return r.a.createElement(k.a,{className:"section-hero library-section-hero"},r.a.createElement("div",{className:"section-title"},e("LIBRARY")),r.a.createElement(v,null))},ee=t(29),ae=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){fetch("/db/library-recordings.json").then((function(e){return e.json()})).then(c)}),[]),r.a.createElement("div",{className:"recordings-content-container fadeIn"},r.a.createElement("ul",{className:"types-filter"}),r.a.createElement("ul",{className:"recordings"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"recording-item"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"line-recordings"}),r.a.createElement("div",{className:"recording-item-inner"},!!e.thumb&&r.a.createElement("div",{style:{backgroundImage:"url(".concat(""+e.thumb,")")},className:"recording-item-thumb"},r.a.createElement("i",{className:"icon icon-".concat(e.type.toLowerCase()),style:{position:"relative",display:"block",paddingLeft:"0.5rem",paddingBottom:"0.5rem",color:"#d6001a",fontSize:"1.5rem"}})),r.a.createElement("div",{className:"recording-item-content"},r.a.createElement("div",{className:"item-name"},e.name[E.language]),r.a.createElement("div",{className:"item-desc",dangerouslySetInnerHTML:{__html:e.desc[E.language]}})))))}))))},te=["ORCHESTRA","ENSAMBLE","CHAMBER","CYCLES","SOLO","OTHER"],ne=function(){var e=Object(m.b)().t,a=Object(n.useState)(te[0]),t=Object(b.a)(a,2),c=t[0],i=t[1],l=Object(n.useState)([]),s=Object(b.a)(l,2),o=s[0],d=s[1];Object(n.useEffect)((function(){var e=document.querySelector(".page-header");ee.animateScroll.scrollTo(window.innerHeight-e.offsetHeight+1)}),[c]),Object(n.useEffect)((function(){fetch("/db/library-works.json").then((function(e){return e.json()})).then(d)}),[]);var u=Object(n.useMemo)((function(){return o.filter((function(e){return e.type===c}))}),[o,c]);return r.a.createElement("div",{className:"recordings-content-container fadeIn"},r.a.createElement("ul",{className:"types-filter"},te.map((function(a){return r.a.createElement("li",{key:a},r.a.createElement("button",{className:"unstyled ".concat(a===c?"active":""),onClick:function(){return i(a)}},e(a)))}))),r.a.createElement("ul",{className:"recordings"},u.map((function(e){return r.a.createElement("li",{key:e.id,className:"recording-item"},r.a.createElement("div",{className:"line-recordings"}),r.a.createElement("div",{className:"item-name-works"},e.name[E.language]),r.a.createElement("div",{className:"item-desc-works"},e.desc[E.language]))}))))},re=r.a.memo((function(e){var a=e.data,t=e.onClick,n=Object(m.b)().t;return r.a.createElement("a",{href:a.url,target:"_blank",className:"slide-article media-article",rel:"noopener noreferrer"},r.a.createElement("h5",{className:"article-title-line-media"},r.a.createElement("i",{className:"icon icon-".concat(a.type.toLowerCase())})),r.a.createElement("div",{className:"article-thumb-media",onClick:function(e){t&&a.images&&a.images.length&&(e.preventDefault(),t(a.images))}},r.a.createElement(B,{src:""+a.thumb,alt:""})),r.a.createElement("div",{className:"article-body-media"},r.a.createElement("h5",{className:"article-title-media"},r.a.createElement("span",null,a.title[E.language])),r.a.createElement("p",{className:"article-desc",dangerouslySetInnerHTML:{__html:a.desc[E.language]}}),r.a.createElement("div",{className:"article-action-wrapper-media"},r.a.createElement("a",{href:a.url,className:"article-action",target:"_blank",rel:"noopener noreferrer"},n("DETAILS")))))})),ce=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){fetch("/db/library-media.json").then((function(e){return e.json()})).then(c)}),[]),r.a.createElement("div",{className:"library-content-container fadeIn"},t.map((function(e,a){return r.a.createElement(re,{data:e,key:a})})))},ie=r.a.memo((function(e){var a=e.data,t=e.onClick,n=Object(m.b)().t;return r.a.createElement("a",{href:a.url,target:"_blank",className:"slide-article media-article",rel:"noopener noreferrer"},r.a.createElement("h5",{className:"article-title"},r.a.createElement("span",null,a.title[E.language])),r.a.createElement("div",{className:"article-thumb",onClick:function(e){t&&a.images&&a.images.length&&(e.preventDefault(),t(a.images))}},r.a.createElement(B,{src:""+a.thumb,alt:""})),r.a.createElement("div",{className:"article-body"},r.a.createElement("p",{className:"article-desc",dangerouslySetInnerHTML:{__html:a.desc[E.language]}}),r.a.createElement("div",{className:"article-action-wrapper-media"},r.a.createElement("a",{href:a.url,className:"article-action",target:"_blank",rel:"noopener noreferrer"},n("DETAILS")))))})),le=r.a.memo((function(e){var a=e.items,t=void 0===a?[]:a,n=e.toggle,c=e.isVisible,i={customPaging:function(e){return r.a.createElement("span",{key:e},r.a.createElement(B,{src:""+t[e].path,alt:""}))},dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};return r.a.createElement(g.a,{in:c,timeout:{enter:2e3,exit:2e3},unmountOnExit:!0,classNames:"fade"},r.a.createElement("div",{className:"media-modal"},r.a.createElement("span",{className:"close",onClick:function(){return n()}}),r.a.createElement(C.a,i,t.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(B,{src:""+e.path,alt:""}))})))))})),se=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)([]),l=Object(b.a)(i,2),s=l[0],o=l[1],m=Object(n.useState)(!1),d=Object(b.a)(m,2),u=d[0],E=d[1];Object(n.useEffect)((function(){fetch("/db/library-events.json").then((function(e){return e.json()})).then(c)}),[]);var h=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];E((function(e){return!e})),e.length?o(e):setTimeout((function(){o([])}),2001)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"library-content-container fadeIn ".concat(s.length?"pointer-events-none":"")},t.map((function(e,a){return r.a.createElement(ie,{data:e,key:a,onClick:h})}))),r.a.createElement(le,{items:s,toggle:h,isVisible:u}))},oe=function(){var e=Object(n.useRef)(null),a=Object(m.b)().t;return Object(n.useEffect)((function(){var a=window.innerHeight;window.onresize=function(){a=window.innerHeight};var t=function(t){var n=e.current,r=n.offsetHeight;n.offsetTop+r>=a+1?e.current.classList.add("pined"):e.current.classList.remove("pined")};return document.addEventListener("scroll",t),function(){document.removeEventListener("scroll",t)}}),[]),r.a.createElement("ul",{className:"library-nav",ref:e},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.c,{className:"nav-link",to:"/library/recordings"},a("RECORDINGS"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.c,{className:"nav-link",to:"/library/works"},a("WORKS"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.c,{className:"nav-link",to:"/library/media"},a("MEDIA"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.c,{className:"nav-link",to:"/library/events"},a("EVENTS"))))},me=function(e){var a=e.history;return Object(n.useEffect)((function(){if(a.location.pathname.includes("/library/")){var e=document.querySelector(".page-header");ee.animateScroll.scrollTo(window.innerHeight-e.offsetHeight+1)}}),[a.location.pathname]),r.a.createElement("div",{className:"library-page-content"},r.a.createElement(Q,null),r.a.createElement(oe,null),r.a.createElement("div",{className:"library-content-items"},r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/library/recordings",component:ae}),r.a.createElement(y.b,{exact:!0,path:"/library/works",component:ne}),r.a.createElement(y.b,{exact:!0,path:"/library/media",component:ce}),r.a.createElement(y.b,{exact:!0,path:"/library/events",component:se}))))},de=function(){var e=Object(m.b)().t;return r.a.createElement("footer",{className:"page-footer"},r.a.createElement("span",null,e("FOOTER_TEXT_1")),r.a.createElement(v,null),r.a.createElement("span",null,"\xa9 ",e("FOOTER_TEXT_2")))},ue=function(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),r.a.createElement("div",{className:"contacts-page-content"},r.a.createElement(D,null))},Ee=function(e){var a=e.pathname,t=e.key,n=a.split("/");return n.length>2?n[0]:t},he=Object(y.g)((function(e){var a=e.location;return r.a.createElement(O.a,{className:"transition-group"},r.a.createElement(g.a,{key:Ee(a),timeout:{enter:800,exit:800},classNames:"page-animate"},r.a.createElement("div",{className:"page-content"},r.a.createElement(y.d,{location:a},r.a.createElement(y.b,{exact:!0,path:"/",component:x}),r.a.createElement(y.b,{exact:!0,path:"/biography",component:$}),r.a.createElement(y.b,{exact:!0,path:"/highlights",component:ue}),r.a.createElement(y.b,{path:"/library",component:me}),r.a.createElement(y.a,{to:"/"})),r.a.createElement(de,null))))})),be=function(){return r.a.createElement(h.a,null,r.a.createElement(N,null),r.a.createElement(he,null))},ge=document.getElementById("root");ge.hasChildNodes()?Object(c.hydrate)(r.a.createElement(be,null),ge):Object(c.render)(r.a.createElement(be,null),ge),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");i?(!function(e,a){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(a,e)}))}}()},49:function(e){e.exports=JSON.parse('{"HEADER_HOME":"Home","ARSEN_BABAJANYAN":"Arsen Babajanyan","HOME_HERO_CAPTION":"ARSENBABAJANYAN","UPCOMING_CONCERTS":"Upcoming Concerts","DETAILS":"Details","HIGHLIGHTS":"Highlights","CONTACTS":"Contacts","CONTACT_ADDRESS":"Delpstrasse 31, 80802, Munich Germany","FOOTER_TEXT_1":"Designed By Lilit Smbatyan","FOOTER_TEXT_2":"2020 All Rights Resserved","BIOGRAPHY":"Biography","BIO_HERO_TITLE":"ARSEN <br /> BABAJANYAN","BIO_HERO_DESC":"Munich based Armenian Composer, whose musical path has been started from childhood. \\nThough the main stream of his activity is composition, the range of Arsen Babajanyan\'s interests are really wide and all the branches of art are involved. This fact is clearly reflected in all his undertakings.","LIBRARY":"Library","ORCHESTRA":"Orchestra","ENSAMBLE":"Ensamble","CHAMBER":"Chamber","CYCLES":"Cycles","SOLO":"Solo","OTHER":"Other","RECORDINGS":"Recordings","WORKS":"Works","MEDIA":"Media","EVENTS":"Events","PUBLISHED_WORKS":"Published Works","MORE":"Read More"}')},50:function(e){e.exports=JSON.parse('{"HEADER_HOME":"Home","ARSEN_BABAJANYAN":"Arsen Babajanyan","HOME_HERO_CAPTION":"ARSENBABAJANYAN","UPCOMING_CONCERTS":"Upcoming Concerts","DETAILS":"Details","HIGHLIGHTS":"Highlights","CONTACTS":"Contacts","CONTACT_ADDRESS":"Delpstrasse 31, 80802, Munich Germany","FOOTER_TEXT_1":"Designed By Lilit Smbatyan","FOOTER_TEXT_2":"2020 All Rights Resserved","BIOGRAPHY":"Biography","BIO_HERO_TITLE":"ARSEN <br /> BABAJANYAN","BIO_HERO_DESC":"Munich based Armenian Composer, whose musical path has been started from childhood. \\nThough the main stream of his activity is composition, the range of Arsen\'s interests are really wide and all the branches of art are involved. This fact is clearly reflected in all his undertakings.","LIBRARY":"Library","ORCHESTRA":"Orchestra","ENSAMBLE":"Ensamble","CHAMBER":"Chamber","CYCLES":"Cycles","SOLO":"Solo","OTHER":"Other","RECORDINGS":"Recordings","WORKS":"Works","MEDIA":"Media","EVENTS":"Events","PUBLISHED_WORKS":"Published Works"}')},53:function(e,a,t){e.exports=t.p+"static/media/bio-5@2x.95b3ac3e.jpg"},54:function(e,a,t){e.exports=t.p+"static/media/bio-2@2x.8b5e2dac.jpg"},55:function(e,a,t){e.exports=t.p+"static/media/bio-3@2x.2d16ba99.jpg"},56:function(e,a,t){e.exports=t.p+"static/media/bio-6@2x.030a6f70.jpg"},57:function(e,a,t){e.exports=t.p+"static/media/bio-1@2x.195a9873.jpg"},58:function(e,a,t){e.exports=t.p+"static/media/bio-4@2x.7f5f23d6.jpg"},60:function(e,a,t){e.exports=t(108)},65:function(e,a,t){}},[[60,1,2]]]);
//# sourceMappingURL=main.f13fc0af.chunk.js.map