(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},26:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},31:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}},53:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(22),o=a.n(c),i=(a(31),a(13)),l=a(4),s=a(7),u=a(23),m=a.n(u),h=(a(53),a(54),a(24)),b=a.n(h);var j=function(e,t){var a="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("23262406-c7298f4dbbc93d98b496e6608","&image_type=photo&orientation=horizontal&per_page=12");return b.a.get(a).then((function(e){return e}))},g=a(5),d=a.n(g),f=a(1);function S(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(l.a)(a,2),c=n[0],o=n[1];return Object(f.jsx)("header",{className:d.a.Searchbar,children:Object(f.jsxs)("form",{className:d.a.SearchForm,onSubmit:function(e){e.preventDefault(),""===c.trim()?s.Notify.warning("Search field is empty."):t({image:c,page:1,hits:0})},children:[Object(f.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(f.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(f.jsx)("input",{className:d.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.target.value)}})]})})}var O=a(25),p=a.n(O);function y(e){var t=e.children;return Object(f.jsx)("ul",{className:p.a.ImageGallery,children:t})}var _=a(11),v=a.n(_);function x(e){var t=e.imageGallery,a=e.toogleModal,r=e.writeSrcState;return 0!==t.length&&t.map((function(e){return Object(f.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(f.jsx)("img",{src:e.webformatURL,alt:e.tags,className:v.a.ImageGalleryItemImage,onClick:function(){return t=e.largeImageURL,r(t),void a(!0);var t}})},e.id)}))}var I=a(26),w=a.n(I);function N(e){var t=e.onSubmit,a=e.currentPage;return 0!==e.totalHits&&Object(f.jsx)("button",{type:"submit",className:w.a.Button,onClick:function(e){e.preventDefault(),t({page:a+1,hits:0})},children:"Load more"})}var G=a(12),F=a.n(G);function B(e){var t=e.modalSrc,a=e.toogleModal;Object(r.useEffect)((function(){var e=function(e){"Escape"===e.code&&a(!1)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return Object(f.jsx)("div",{className:F.a.Overlay,onClick:function(e){e.target===e.currentTarget&&a(!1)},children:Object(f.jsx)("div",{className:F.a.Modal,children:Object(f.jsx)("img",{src:t,alt:""})})})}function k(e){var t=Object(r.useState)([]),a=Object(l.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)(""),u=Object(l.a)(o,2),h=u[0],b=u[1],g=Object(r.useState)(1),d=Object(l.a)(g,2),O=d[0],p=d[1],_=Object(r.useState)(!1),v=Object(l.a)(_,2),I=v[0],w=v[1],G=Object(r.useState)(0),F=Object(l.a)(G,2),k=F[0],M=F[1],L=Object(r.useState)(!1),E=Object(l.a)(L,2),C=E[0],H=E[1],P=Object(r.useState)(""),D=Object(l.a)(P,2),R=D[0],T=D[1];Object(r.useEffect)((function(){h&&(J(!0),j(h,O).then((function(e){0===e.data.hits.length&&s.Notify.failure("Sorry, there are no images matching your search query. Please try again."),c((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.data.hits))})),M((function(t){return t+e.data.hits.length})),k>=e.data.totalHits&&M(0),q()})).catch((function(e){s.Notify.failure("Sorry, there are no images matching your search query. Please try again.")})).finally((function(){return J(!1)})))}),[h,O]);var q=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},A=function(e){e.image?(c([]),b(e.image),p(e.page),M(e.hits)):(p(e.page),M(e.hits))},J=function(e){return w(e)},U=function(e){H(e)};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(S,{onSubmit:A}),Object(f.jsx)(y,{children:Object(f.jsx)(x,{imageGallery:n,toogleModal:U,writeSrcState:function(e){T(e)}})}),I&&Object(f.jsx)(m.a,{type:"Audio",color:"#3f51b5",height:80,width:80,timeout:500,className:"Loader"}),Object(f.jsx)(N,{totalHits:k,onSubmit:A,currentPage:O}),C&&Object(f.jsx)(B,{modalSrc:R,toogleModal:U})]})}o.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.1958941d.chunk.js.map