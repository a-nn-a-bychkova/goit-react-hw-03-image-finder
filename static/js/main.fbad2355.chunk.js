(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,r){e.exports={item:"ImageGalleryItem_item__13wML",image:"ImageGalleryItem_image__cC2Kn"}},12:function(e,t,r){e.exports={Searchbar:"Searchbar_Searchbar__jeNhr"}},13:function(e,t,r){e.exports={ImageGallery:"ImageGallery_ImageGallery__1ljTP"}},20:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){e.exports={Button:"Button_Button__2Mvsx"}},45:function(e,t,r){e.exports={App:"App_App__btqmk"}},46:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(0),c=r.n(n),s=r(7),i=r.n(s),o=(r(20),r(3)),u=r(4),h=r(6),l=r(5),m=r(8),b=r.n(m),p=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleSearchQueryChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.searchQuery.trim())return alert("The request is empty");e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:b.a.SearchForm,children:[Object(a.jsx)("button",{type:"submit",className:b.a.button,children:Object(a.jsx)("span",{className:b.a.label,children:"Search"})}),Object(a.jsx)("input",{className:b.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleSearchQueryChange})]})}}]),r}(n.Component),j=r(12),f=r.n(j),g=function(e){var t=e.children;return Object(a.jsx)("header",{className:f.a.Searchbar,children:t})},d=r(13),y=r.n(d);var O=r(11),_=r.n(O),S=function(e){var t=e.id,r=e.smallPicture;e.largePicture;return Object(a.jsx)("li",{className:_.a.item,children:Object(a.jsx)("img",{src:r,className:_.a.image})},t)},x=r(14),v=r.n(x),Q=(r(42),r(43),function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(a.jsx)(v.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})}}]),r}(n.Component)),C=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={images:null,loading:!1,error:null},e}return Object(u.a)(r,[{key:"componentDidUpdate",value:function(e,t){var r=this;e.searchQuery!==this.props.searchQuery&&(this.setState({loading:!0,images:null}),fetch("https://pixabay.com/api/?q=".concat(this.props.searchQuery,"&page=1&key=19110749-e340c63922b3f8a4d502270f7&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(r.props.searchQuery," \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")))})).then((function(e){return r.setState({images:e})})).catch((function(e){return r.setState({error:e})})).finally((function(){return r.setState({loading:!1})})))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[this.state.error&&Object(a.jsx)("h1",{children:this.state.error.message}),this.state.loading&&Object(a.jsx)(Q,{}),this.state.images&&Object(a.jsx)("ul",{className:y.a.ImageGallery,children:this.state.images.hits.map((function(e){return Object(a.jsx)(S,{id:e.id,smallPicture:e.webformatURL,largePicture:e.largeImageURL})}))})]})}}]),r}(n.Component),F=(r(44),r(45),r(10)),w=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleFormSubmit=function(t){e.setState({searchQuery:t})},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(g,{children:Object(a.jsx)(p,{onSubmit:this.handleFormSubmit})}),this.state.searchQuery&&Object(a.jsx)(C,{searchQuery:this.state.searchQuery}),Object(a.jsx)(F.a,{})]})}}]),r}(n.Component),I=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,49)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),a(e),n(e),c(e),s(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),I()},8:function(e,t,r){e.exports={SearchForm:"Searchform_SearchForm__GUv7z",button:"Searchform_button__36XDP",label:"Searchform_label__3PmMX",input:"Searchform_input__2r4VB"}}},[[46,1,2]]]);
//# sourceMappingURL=main.fbad2355.chunk.js.map