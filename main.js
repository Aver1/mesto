(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._settings=e}var n,r;return n=t,(r=[{key:"_showError",value:function(e){e.classList.add(this._settings.inputErrorClass),this._errorTarget.textContent=this._errorText}},{key:"_hideError",value:function(e){e.classList.remove(this._settings.inputErrorClass),this._errorTarget.textContent=""}},{key:"resetSubmitButton",value:function(){this._button.setAttribute("disabled",!0),this._button.classList.add(this._settings.inactiveButtonClass)}},{key:"enableButton",value:function(){this._button.removeAttribute("disabled"),this._button.classList.remove(this._settings.inactiveButtonClass)}},{key:"_toggleButton",value:function(){this._form.checkValidity()?this.enableButton():this.resetSubmitButton()}},{key:"_validateInput",value:function(e){this._errorTarget=this._form.querySelector(".".concat(e.id,"-error"));var t=e.validity.valid;this._errorText=e.validationMessage,t?this._hideError(e):this._showError(e)}},{key:"cleanErrorMessages",value:function(){var e=this;this._form.querySelectorAll(".popup__input-error").forEach((function(e){e.textContent=""})),this._form.querySelectorAll(".popup__input").forEach((function(t){t.value="",t.classList.contains("popup__input_type_error")&&e._hideError(t)}))}},{key:"enableValidation",value:function(){var e=this;this._button=this._form.querySelector(this._settings.submitButtonSelector),this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._form.querySelectorAll(this._settings.inputSelector).forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t),e._toggleButton()})),e._toggleButton()}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_type_disabled",inputErrorClass:"popup__input_type_error"},r=(document.querySelector(".popup_type_image"),document.querySelector(".popup__card-image"),document.querySelector(".popup__image-caption"),document.querySelector(".cards"),document.querySelector(".profile__avatar"),document.querySelector(".popup_type_edit")),o=document.querySelector(".popup_type_add"),i=document.querySelector(".popup_type_avatar"),a=document.querySelector(".profile__edit-btn"),u=document.querySelector(".profile__add-btn"),c=document.querySelector(".profile__avatar-edit-btn"),s=r.querySelector(".popup__form"),l=document.querySelector(".popup__input_type_name"),p=document.querySelector(".popup__input_type_about"),f=o.querySelector(".popup__form"),d=i.querySelector(".popup__form");function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(){function e(t,n,r,o,i){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,"_fillLike",(function(){a._likeButton.classList.add("card__like_active")})),h(this,"_deleteFillLike",(function(){a._likeButton.classList.remove("card__like_active")})),h(this,"deleteCard",(function(){a._cardElement.remove()})),h(this,"addCard",(function(){return a._cardElement=a._TemplateSelector.querySelector(".card").cloneNode(!0),a._setEventListeners(),a._cardImage.src=a._link,a._cardImage.alt=a._name,a._cardElement.querySelector(".card__title").textContent=a._name,a.setCardLikes(a._likes),a._userId!==a._ownerId&&(a._deleteButton.style.display="none"),a._cardElement})),this._TemplateSelector=document.querySelector(n).content,this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t.id,this._userId=t.userId,this._ownerId=t.ownerId,this._handlePreviewInspector=r,this._handleDeleteClick=o,this._handleLikeClick=i}var t,n;return t=e,n=[{key:"isLiked",value:function(){var e=this,t=this._likes.find((function(t){return t._id===e._userId}));return t}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton=this._cardElement.querySelector(".card__like"),this._likeButton.addEventListener("click",(function(){e._handleLikeClick(e._id)})),this._deleteButton=this._cardElement.querySelector(".card__delete"),this._deleteButton.addEventListener("click",(function(){e._handleDeleteClick(e._id)})),this._cardImage=this._cardElement.querySelector(".card__image"),this._cardImage.addEventListener("click",(function(){e._handlePreviewInspector(e._name,e._link)}))}},{key:"setCardLikes",value:function(e){this._likes=e,this._cardElement.querySelector(".card__like-count").textContent=this._likes.length,this.isLiked()?this._fillLike():this._deleteFillLike()}}],n&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close-btn")&&e.close()}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function C(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._button=n._popup.querySelector(".popup__save-btn"),n._initialButtonText=n._button.textContent,n._handleFormSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._inputs=n._form.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputs.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"changeSubmitHander",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;S(L(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._button.textContent="Сохранение...",e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){this._button.textContent=this._initialButtonText,S(L(a.prototype),"close",this).call(this),this._form.reset()}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(k);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function x(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__card-image"),t._text=t._popup.querySelector(".popup__image-caption"),t}return t=a,(n=[{key:"open",value:function(e,t){I(U(a.prototype),"open",this).call(this),this._image.src=t,this._image.alt=e,this._text.textContent=e}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(k);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userData={name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F,M=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-37",headers:{authorization:"209dd873-ade0-4499-aea4-c00b7a61ed12","Content-Type":"application/json"}});M.getProfile().then((function(e){z.setUserInfo({name:e.name,about:e.about}),z.setUserAvatar(e),F=e._id})),M.getInitialCards().then((function(e){e.forEach((function(e){var t=G({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:F,ownerId:e.owner._id});Y.addItem(t)}))}));var H=new t(n,s),N=new t(n,f),J=new t(n,d);H.enableValidation(),N.enableValidation(),J.enableValidation();var z=new D({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__avatar"});function G(e){var t=new y(e,"#card-template",W,(function(e){Z.open(),Z.changeSubmitHander((function(){M.deleteCard(e).then((function(e){t.deleteCard(),Z.close(),console.log(e)}))}))}),(function(e){t.isLiked()?M.deleteLike(e).then((function(e){t.setCardLikes(e.likes)})):M.addLike(e).then((function(e){t.setCardLikes(e.likes)}))}));return t.addCard()}var K=new O(".popup_type_edit",(function(e){M.editProfile(e["popup-name"],e["popup-about"]).then((function(e){z.setUserInfo(e)})).finally((function(){K.close()}))}));K.setEventListeners();var Q=new R(".popup_type_image");function W(e,t){Q.open(e,t),Q.setEventListeners()}var X=new O(".popup_type_add",(function(e){M.addCard(e["popup-name"],e["popup-link"]).then((function(e){Y.addItem(G(e))})).finally((function(){X.close()}))}));X.setEventListeners();var Y=new m({items:[],renderer:function(e){Y.addItem(G(e))}},".cards");Y.renderItems();var Z=new O(".popup_type_card-delete-confirm",(function(){}));Z.setEventListeners();var $=new O(".popup_type_avatar",(function(e){M.updateAvatar(e["popup-link"]).then((function(e){z.setUserAvatar(e)})).finally((function(){$.close()}))}));$.setEventListeners(),a.addEventListener("click",(function(){var e;K.open(),H.cleanErrorMessages(),e=z.getUserInfo(),l.value=e.name,p.value=e.about,H.enableButton()})),u.addEventListener("click",(function(){X.open(),N.cleanErrorMessages(),N.resetSubmitButton()})),c.addEventListener("click",(function(){$.open(),J.cleanErrorMessages(),J.resetSubmitButton()}))})();