!function(){var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),o=0;n[o]&&n[o]!==t;)++o;return Boolean(n[o])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){document.body,document.querySelectorAll(".fix-block");var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var n=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+n+'"]').classList.add("active"),t.classList.add("active")}))})),n.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),document.addEventListener("DOMContentLoaded",(function(){var e=function(e){var t=e.target,n=t.dataset.phoneClear,o=t.dataset.phonePattern,r=o||"+7(___) ___-__-__",a=0,c=r.replace(/\D/g,""),l=e.target.value.replace(/\D/g,"");"false"!==n&&"blur"===e.type&&l.length<r.match(/([\_\d])/g).length?e.target.value="":(c.length>=l.length&&(l=c),e.target.value=r.replace(/./g,(function(e){return/[_\d]/.test(e)&&a<l.length?l.charAt(a++):a>=l.length?"":e})))},t=document.querySelectorAll("[data-phone-pattern]"),n=!0,o=!1,r=void 0,a=!0,c=!1,l=void 0;try{for(var u,i=t[Symbol.iterator]();!(a=(u=i.next()).done);a=!0){var d=u.value;try{for(var s,v=["input","blur","focus"][Symbol.iterator]();!(n=(s=v.next()).done);n=!0){var m=s.value;d.addEventListener(m,e)}}catch(e){o=!0,r=e}finally{try{n||null==v.return||v.return()}finally{if(o)throw r}}}}catch(e){c=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(c)throw l}}})),document.querySelector("select[name=night]").addEventListener("change",(function(e){var t=e.currentTarget.value;document.querySelector("input[name=total_grn]").value=t}),!1)}();
//# sourceMappingURL=hotel.54026eba.js.map
