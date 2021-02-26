(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(9),c=n.n(o),l=n(8),i=n(4),s=n(5),u=n(7),h=n(6),d=(n(26),n(0)),m=function(e){var t=e.loadMoreGallery;return Object(d.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})},g=(n(28),document.querySelector("#modalRoot")),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleOverlayClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e.handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(d.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(d.jsx)("div",{className:"Modal",children:this.props.children})}),g)}}]),n}(a.Component),f=(n(29),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={text:""},e.handleInputValue=function(t){e.setState({text:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.handleSubmitForm(e.state.text),e.setState({text:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.text;return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleInputValue})]})})}}]),n}(a.Component)),j=n(21),p=(n(30),function(e){var t=e.webformatURL,n=e.tags,a=e.id,r=e.handleImage;return Object(d.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return r(a)},children:Object(d.jsx)("img",{src:t,alt:n,className:"ImageGalleryItem-image"})})}),y=(n(31),function(e){var t=e.gallery,n=e.handleImage;return Object(d.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(d.jsx)(p,Object(j.a)({handleImage:n},e),e.id)}))})}),O=n(11),v=n.n(O);v.a.defaults.baseURL="https://pixabay.com/api/";var x=function(e,t){return v.a.get("?q=".concat(t,"&page=").concat(e,"&key=").concat("20057686-8e7631fb38d8b126eb420f670","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},S=n(20),w=n.n(S),I=(n(70),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={gallery:[],currentPage:1,searchQuery:"",modalOpen:!1,largeImg:"",isLoading:!1},e.handleSubmitForm=function(t){e.setState({searchQuery:t,gallery:[],currentPage:1})},e.loadMoreGallery=function(){e.setState((function(e){return{currentPage:e.currentPage+1}}))},e.handleImage=function(t){var n=e.state.gallery.find((function(e){return t===e.id}));e.setState((function(e){return{modalOpen:!e.modalOpen,largeImg:n.largeImageURL}}))},e.onCloseModal=function(){e.setState((function(e){return{modalOpen:!e.modalOpen}}))},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.state,r=a.currentPage,o=a.searchQuery,c=a.gallery,i=a.isLoading;t.searchQuery!==this.state.searchQuery&&""!==o&&(this.setState({isLoading:!i}),x(r,o).then((function(e){return n.setState((function(t){return{gallery:[].concat(Object(l.a)(c),Object(l.a)(e))}}))})).finally((function(){n.setState({isLoading:!1})}))),t.currentPage!==this.state.currentPage&&1!==this.state.currentPage&&(this.setState({isLoading:!i}),x(r,o).then((function(e){return n.setState((function(t){return{gallery:[].concat(Object(l.a)(c),Object(l.a)(e))}}))})).finally((function(){n.setState({isLoading:!1})}))),t!==this.state&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.gallery,n=e.searchQuery,a=e.modalOpen,r=e.largeImg,o=e.isLoading;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{handleSubmitForm:this.handleSubmitForm}),n.length>0&&Object(d.jsx)(y,{gallery:t,handleImage:this.handleImage}),t.length>0&&!o&&Object(d.jsx)(m,{loadMoreGallery:this.loadMoreGallery}),o&&Object(d.jsx)(w.a,{style:{textAlign:"center"},type:"Puff",color:"#00BFFF",height:100,width:100}),a&&Object(d.jsx)(b,{onClose:this.onCloseModal,children:Object(d.jsx)("img",{src:r,alt:""})})]})}}]),n}(a.Component));n(71);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.e7d4f2ea.chunk.js.map