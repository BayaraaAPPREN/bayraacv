(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7913:function(e,t,n){"use strict";var s=n(5696);t.default=void 0;var i,l=(i=n(7294))&&i.__esModule?i:{default:i},r=n(2199),a=n(1587),c=n(7215);var o={};function d(e,t,n,s){if(e&&r.isLocalURL(t)){e.prefetch(t,n,s).catch((function(e){0}));var i=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;o[t+"%"+n+(i?"%"+i:"")]=!0}}var m=function(e){var t,n=!1!==e.prefetch,i=a.useRouter(),m=l.default.useMemo((function(){var t=r.resolveHref(i,e.href,!0),n=s(t,2),l=n[0],a=n[1];return{href:l,as:e.as?r.resolveHref(i,e.as):a||l}}),[i,e.href,e.as]),u=m.href,h=m.as,x=e.children,f=e.replace,g=e.shallow,v=e.scroll,p=e.locale;"string"===typeof x&&(x=l.default.createElement("a",null,x));var j=(t=l.default.Children.only(x))&&"object"===typeof t&&t.ref,b=c.useIntersection({rootMargin:"200px"}),N=s(b,2),y=N[0],k=N[1],w=l.default.useCallback((function(e){y(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,y]);l.default.useEffect((function(){var e=k&&n&&r.isLocalURL(u),t="undefined"!==typeof p?p:i&&i.locale,s=o[u+"%"+h+(t?"%"+t:"")];e&&!s&&d(i,u,h,{locale:t})}),[h,u,k,p,n,i]);var E={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,s,i,l,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&r.isLocalURL(n))&&(e.preventDefault(),t[i?"replace":"push"](n,s,{shallow:l,locale:c,scroll:a}))}(e,i,u,h,f,g,v,p)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),r.isLocalURL(u)&&d(i,u,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof p?p:i&&i.locale,_=i&&i.isLocaleDomain&&r.getDomainLocale(h,M,i&&i.locales,i&&i.domainLocales);E.href=_||r.addBasePath(r.addLocale(h,M,i&&i.defaultLocale))}return l.default.cloneElement(t,E)};t.default=m},7215:function(e,t,n){"use strict";var s=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,o=e.disabled||!r,d=i.useRef(),m=i.useState(!1),u=s(m,2),h=u[0],x=u[1],f=i.useState(t?t.current:null),g=s(f,2),v=g[0],p=g[1],j=i.useCallback((function(e){d.current&&(d.current(),d.current=void 0),o||h||e&&e.tagName&&(d.current=function(e,t,n){var s=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},s=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));s?t=a.get(s):(t=a.get(n),c.push(n));if(t)return t;var i=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(n,t={id:n,observer:l,elements:i}),t}(n),i=s.id,l=s.observer,r=s.elements;return r.set(e,t),l.observe(e),function(){if(r.delete(e),l.unobserve(e),0===r.size){l.disconnect(),a.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&x(e)}),{root:v,rootMargin:n}))}),[o,v,n,h]);return i.useEffect((function(){if(!r&&!h){var e=l.requestIdleCallback((function(){return x(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[h]),i.useEffect((function(){t&&p(t.current)}),[t]),[j,h]};var i=n(7294),l=n(8065),r="undefined"!==typeof IntersectionObserver;var a=new Map,c=[]},8265:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var s=n(1664),i=n(5893);function l(){return(0,i.jsx)("div",{className:"h-full w-screen bg-slate-800 justify-center",children:(0,i.jsx)("div",{className:"sm:container sm:mx-auto justify-center ",children:(0,i.jsxs)("div",{className:" grid md:grid-cols-4 justify-center items-center gap-4",children:[(0,i.jsxs)("div",{className:" md:col-span-1 relative inline-block mt-20 bg-slate-700 h-auto rounded-lg gap-4 shadow-2xl shadow-slate-900 ",children:[(0,i.jsxs)("div",{className:"grid grid-rows-8",children:[(0,i.jsx)("div",{className:"grid grid-col justify-center items-center mt-10 hover:animate-ping",children:(0,i.jsx)("img",{className:"rounded-3xl",src:"/me.jpg",alt:"mountain",width:"250px",height:"250px"})}),(0,i.jsx)("h1",{className:"text-center font-mono text-white text-3xl m-5",children:" Bayarsuren Dev"}),(0,i.jsx)("div",{className:" rounded-3xl bg-slate-800 text-white m-2 mx-20 px-10 grid grid-col justify-center items-center hover:bg-slate-500",children:(0,i.jsx)("button",{className:"m-3",children:"Fullstack"})}),(0,i.jsx)("div",{className:"grid md:grid-col justify-center items-center m-2",children:(0,i.jsxs)("div",{className:"relative inline-block",children:[(0,i.jsx)(s.default,{href:"/https://www.facebook.com/",passHref:!0,children:(0,i.jsx)("img",{alt:"mountain",className:"inline-block cursor-pointer hover:animate-bounce",src:"https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png"})}),(0,i.jsx)("img",{alt:"mountain",className:"inline-block cursor-pointer hover:animate-bounce",src:"https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png"}),(0,i.jsx)("img",{alt:"mountain",className:"inline-block cursor-pointer hover:animate-bounce",src:"https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"})]})})]}),(0,i.jsxs)("div",{className:" grid md:grid-col justify-start items-center m-2",children:[(0,i.jsxs)("div",{className:"relative inline-block m-2",children:[(0,i.jsx)("img",{alt:"mountain",className:"ml-5 inline-block cursor-pointer hover:animate-bounce",src:"/calendar.png"}),(0,i.jsx)("h1",{className:"mx-4 inline-block text-gray-300 text-xl",children:"March 10, 2001"})]}),(0,i.jsxs)("div",{className:"relative inline-block m-2",children:[(0,i.jsx)("img",{alt:"mountain",className:"ml-4 inline-block cursor-pointer hover:animate-bounce",src:"/google-maps.png"}),(0,i.jsx)("h1",{className:"mx-4 inline-block text-gray-300 text-xl",children:"Mongolia, Ulaanbaatar"})]}),(0,i.jsxs)("div",{className:"relative inline-block m-2",children:[(0,i.jsx)("img",{alt:"mountain",className:"ml-4 inline-block cursor-pointer hover:animate-bounce",src:"/email.png"}),(0,i.jsx)("h1",{className:"mx-4 inline-block text-gray-300 text-xl",children:"bayarsuren0310@gmail.com"})]}),(0,i.jsxs)("div",{className:"relative inline-block m-2",children:[(0,i.jsx)("img",{alt:"mountain",className:"ml-4 inline-block cursor-pointer hover:animate-bounce",src:"/telephone.png"}),(0,i.jsx)("h1",{className:"mx-4 inline-block text-gray-300 text-xl",children:"80666605"})]}),(0,i.jsxs)("div",{className:"relative inline-block m-2",children:[(0,i.jsx)("img",{alt:"mountain",className:"ml-4 inline-block cursor-pointer hover:animate-bounce",src:"/github.png"}),(0,i.jsx)("h1",{className:"mx-4 inline-block text-gray-300 text-xl",children:"Bayraa_Appren"})]})]}),(0,i.jsx)("div",{className:"grid md:grid-col justify-center items-center m-2",children:(0,i.jsxs)("button",{className:"border-2 border-white px-20 py-3 m-5 relative inline-block text-white text-l rounded-2xl bg-blue-600 shadow-lg hover:animate-pulse shadow-blue-300",children:[(0,i.jsx)("img",{alt:"jjjj",className:"inline-block mr-2",src:"https://img.icons8.com/material-rounded/24/ffffff/download--v1.png"}),"Download CV"]})})]}),(0,i.jsx)("div",{className:" md:col-span-3 relative inline-block mt-20 bg-slate-700 rounded-lg mb-10",children:(0,i.jsxs)("div",{className:"grid grid-rows-1",children:[(0,i.jsx)("div",{className:"grid grid-col justify-end",children:(0,i.jsxs)("div",{className:"text-slate-300 font-mono p-5 text-2xl cursor-pointer border-2 border-white rounded-3xl bg-blue-600 shadow-lg shadow-blue-700",children:[(0,i.jsx)("h1",{className:"inline-block mx-8 hover:text-white",children:"About"}),(0,i.jsx)(s.default,{href:"/About",passHref:!0,children:(0,i.jsx)("h1",{className:"inline-block mx-8 hover:text-white",children:"Resume"})}),(0,i.jsx)("h1",{className:"inline-block mx-8 hover:text-white",children:"Blog"}),(0,i.jsx)("h1",{className:"inline-block mx-8 hover:text-white",children:"Haha"}),(0,i.jsx)("h1",{className:"inline-block mx-8 hover:text-white",children:"Hehe"})]})}),(0,i.jsxs)("div",{className:"grid grid-col justify-start",children:[(0,i.jsx)("div",{className:"mx-6 p-4 text-xl font-mono text-white",children:(0,i.jsx)("h1",{children:"About Me"})}),(0,i.jsx)("div",{className:"mx-8 p-4 text-slate-300 text-l font-mono",children:(0,i.jsxs)("p",{children:["\u041d\u0430\u043c\u0430\u0439\u0433 \u0411\u0430\u044f\u0440\u0441\u04af\u0440\u044d\u043d \u0433\u044d\u0434\u044d\u0433 \u0431\u0438 21 \u043d\u0430\u0441\u0442\u0430\u0439. \u0411\u0438 2008 \u043e\u043d\u0434 \u0415\u0411\u0421-102-\u0440 \u0441\u0443\u0440\u0433\u0443\u0443\u043b\u044c\u0434 1\u0440 \u0430\u043d\u0433\u0438\u0434 \u044d\u043b\u0441\u044d\u0436 \u043e\u0440\u043e\u043e\u0434 2019 \u043e\u043d\u0434 \u0442\u04e9\u0433\u0441\u0441\u04e9\u043d \u0431\u0438\u043b\u044d\u044d. \u0422\u04e9\u0433\u0441\u04e9\u04e9\u0434 \u041c\u041e\u041d\u0413\u041e\u041b \u0423\u041b\u0421\u042b\u041d \u0418\u0425 \u0421\u0423\u0420\u0413\u0423\u0423\u041b\u0418\u0419\u041d \u041c\u044d\u0434\u044d\u044d\u043b\u044d\u043b \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439\u043d \u0430\u043d\u0433\u0438\u0434 \u0441\u0443\u0440\u0430\u043b\u0446\u0430\u0436 \u0431\u0430\u0439\u043d\u0430.",(0,i.jsx)("p",{className:"mt-6",children:"10 \u0436\u0438\u043b\u0434\u044d\u044d \u0433\u043e\u043b\u0434\u0443\u0443 \u0441\u043f\u043e\u0440\u0442\u043e\u043e\u0440 \u0445\u0438\u0447\u044d\u044d\u043b\u043b\u044d\u0445 \u0441\u043e\u043d\u0438\u0440\u0445\u043e\u043b\u0442\u043e\u0439 \u04e9\u04e9\u0440\u0438\u0439\u043d \u0430\u0432\u044c\u044f\u0430\u0441 \u0447\u0430\u0434\u0432\u0430\u0440\u044b\u0433 \u0431\u0430\u0439\u043d\u0433\u0430 \u0438\u0440\u044d\u043b\u0445\u0438\u0439\u043b\u044d\u0434\u044d\u0433 \u0431\u0430\u0439\u0441\u0430\u043d."})]})}),(0,i.jsx)("div",{className:"mx-6 p-4 text-xl font-mono text-white",children:(0,i.jsx)("h1",{children:"Whats I am doing"})}),(0,i.jsx)("div",{className:"grid grid-col justify-center items-center ",children:(0,i.jsxs)("div",{className:"relative inline-block",children:[(0,i.jsx)("div",{className:" inline-block",children:(0,i.jsxs)("div",{className:"bg-slate-800 p-10 m-5 rounded-lg hover:animate-bounce cursor-pointer w-96",children:[(0,i.jsx)("div",{className:"inline-block mr-5",children:(0,i.jsx)("img",{alt:"mountain",className:"",src:"/television.png"})}),(0,i.jsxs)("div",{className:"inline-block items-start",children:[(0,i.jsx)("h1",{className:"text-gray-200 font-mono text-lg",children:"Web Design"}),(0,i.jsx)("h1",{className:"text-gray-400 font-mono text-l ",children:"Vue js vuetify"}),(0,i.jsx)("h1",{className:"text-gray-400 font-mono text-l",children:"React Next js"})]})]})}),(0,i.jsx)("div",{className:" inline-block",children:(0,i.jsxs)("div",{className:"bg-slate-800 p-10 m-5 rounded-lg hover:animate-bounce cursor-pointer  w-96",children:[(0,i.jsx)("div",{className:"inline-block mr-5",children:(0,i.jsx)("img",{alt:"mountain",className:"",src:"/smartphone.png"})}),(0,i.jsxs)("div",{className:"inline-block items-start",children:[(0,i.jsx)("h1",{className:"text-gray-200 font-mono text-lg",children:"Mobile App"}),(0,i.jsx)("h1",{className:"text-gray-400 font-mono text-l ",children:"React native"}),(0,i.jsx)("h1",{className:"text-gray-400 font-mono text-l",children:"Flutter"})]})]})})]})})]}),(0,i.jsx)("div",{className:"grid grid-col justify-start",children:(0,i.jsx)("div",{className:"mx-6 p-4 text-xl font-mono text-white",children:(0,i.jsx)("h1",{children:"Education"})})}),(0,i.jsxs)("div",{className:"grid grid-col justify-start pb-4",children:[(0,i.jsx)("h1",{className:"text-center text-slate-300 ml-8",children:"- Completed secondary education in 2019 in 127 schools Ulaanbaatar, Mongolia"}),(0,i.jsx)("h1",{className:"text-center text-slate-300 ml-10",children:"- Graduated from Apprentice.mn program training in 2021 Ulaanbaatar, Mongolia"})]}),(0,i.jsx)("div",{className:"grid grid-col justify-start",children:(0,i.jsx)("div",{className:"mx-6 p-4 text-xl font-mono text-white",children:(0,i.jsx)("h1",{children:"Experience"})})}),(0,i.jsxs)("div",{className:"grid grid-col justify-start mx-10 pb-4 cursor-pointer",children:[(0,i.jsx)("h1",{className:" text-slate-300",children:"* Web developer 04/2021 to 03/2022"}),(0,i.jsx)("h1",{className:" text-slate-300 ml-10",children:"+ sslingo.mn English Learning Center website development "}),(0,i.jsx)("h1",{className:" text-slate-300 ml-10",children:"+ ariuguncargo.mn distribution site"}),(0,i.jsx)("h1",{className:" text-slate-300 ml-10",children:"+ eejii.org Junior development"})]})]})})]})})})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8265)}])},1664:function(e,t,n){e.exports=n(7913)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);