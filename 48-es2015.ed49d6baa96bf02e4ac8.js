(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{xPxx:function(e,t,i){"use strict";i.r(t),i.d(t,"BadgeExamplesModule",(function(){return u})),i.d(t,"BadgeOverviewExample",(function(){return p}));var a=i("fXoL"),n=i("FKr1"),s=i("u47x"),c=i("8LU1"),o=i("R1ws");let r=0;class d{}const b=Object(n.C)(d);let l=(()=>{class e extends b{constructor(e,t,i,n,s){if(super(),this._ngZone=e,this._elementRef=t,this._ariaDescriber=i,this._renderer=n,this._animationMode=s,this._hasContent=!1,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=r++,Object(a.fb)()){const e=t.nativeElement;if(e.nodeType!==e.ELEMENT_NODE)throw Error("matBadge must be attached to an element node.")}}get color(){return this._color}set color(e){this._setColor(e),this._color=e}get overlap(){return this._overlap}set overlap(e){this._overlap=Object(c.c)(e)}get description(){return this._description}set description(e){if(e!==this._description){const t=this._badgeElement;this._updateHostAriaDescription(e,this._description),this._description=e,t&&(e?t.setAttribute("aria-label",e):t.removeAttribute("aria-label"))}}get hidden(){return this._hidden}set hidden(e){this._hidden=Object(c.c)(e)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}ngOnChanges(e){const t=e.content;if(t){const e=t.currentValue;this._hasContent=null!=e&&(""+e).trim().length>0,this._updateTextContent()}}ngOnDestroy(){const e=this._badgeElement;e&&(this.description&&this._ariaDescriber.removeDescription(e,this.description),this._renderer.destroyNode&&this._renderer.destroyNode(e))}getBadgeElement(){return this._badgeElement}_updateTextContent(){return this._badgeElement?this._badgeElement.textContent=this.content:this._badgeElement=this._createBadgeElement(),this._badgeElement}_createBadgeElement(){const e=this._renderer.createElement("span");return this._clearExistingBadges("mat-badge-content"),e.setAttribute("id","mat-badge-content-"+this._id),e.classList.add("mat-badge-content"),e.textContent=this.content,"NoopAnimations"===this._animationMode&&e.classList.add("_mat-animation-noopable"),this.description&&e.setAttribute("aria-label",this.description),this._elementRef.nativeElement.appendChild(e),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add("mat-badge-active")})}):e.classList.add("mat-badge-active"),e}_updateHostAriaDescription(e,t){const i=this._updateTextContent();t&&this._ariaDescriber.removeDescription(i,t),e&&this._ariaDescriber.describe(i,e)}_setColor(e){e!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove("mat-badge-"+this._color),e&&this._elementRef.nativeElement.classList.add("mat-badge-"+e))}_clearExistingBadges(e){const t=this._elementRef.nativeElement;let i=t.children.length;for(;i--;){const a=t.children[i];a.classList.contains(e)&&t.removeChild(a)}}}return e.\u0275fac=function(t){return new(t||e)(a.Xb(a.H),a.Xb(a.o),a.Xb(s.c),a.Xb(a.M),a.Xb(o.a,8))},e.\u0275dir=a.Sb({type:e,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,t){2&e&&a.Pb("mat-badge-overlap",t.overlap)("mat-badge-above",t.isAbove())("mat-badge-below",!t.isAbove())("mat-badge-before",!t.isAfter())("mat-badge-after",t.isAfter())("mat-badge-small","small"===t.size)("mat-badge-medium","medium"===t.size)("mat-badge-large","large"===t.size)("mat-badge-hidden",t.hidden||!t._hasContent)("mat-badge-disabled",t.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],position:["matBadgePosition","position"],size:["matBadgeSize","size"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],description:["matBadgeDescription","description"],hidden:["matBadgeHidden","hidden"],content:["matBadge","content"]},features:[a.Ib,a.Jb]}),e})(),m=(()=>{class e{}return e.\u0275mod=a.Vb({type:e}),e.\u0275inj=a.Ub({factory:function(t){return new(t||e)},imports:[[s.a,n.k],n.k]}),e})();var h=i("bTqV"),g=i("NFeN");let p=(()=>{class e{constructor(){this.hidden=!1}toggleBadgeVisibility(){this.hidden=!this.hidden}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(a.Rb)({type:e,selectors:[["badge-overview-example"]],decls:20,vars:1,consts:[["matBadge","4","matBadgeOverlap","false"],["matBadge","1","matBadgeSize","large"],["mat-raised-button","","color","primary","matBadge","8","matBadgePosition","before","matBadgeColor","accent"],["mat-raised-button","","matBadge","7",3,"matBadgeHidden","click"],["matBadge","15","matBadgeColor","warn"],[1,"cdk-visually-hidden"]],template:function(e,t){1&e&&(Object(a.dc)(0,"p"),Object(a.dc)(1,"span",0),Object(a.Rc)(2,"Text with a badge"),Object(a.cc)(),Object(a.cc)(),Object(a.dc)(3,"p"),Object(a.dc)(4,"span",1),Object(a.Rc)(5,"Text with large badge"),Object(a.cc)(),Object(a.cc)(),Object(a.dc)(6,"p"),Object(a.Rc)(7," Button with a badge on the left\n"),Object(a.dc)(8,"button",2),Object(a.Rc)(9," Action "),Object(a.cc)(),Object(a.cc)(),Object(a.dc)(10,"p"),Object(a.Rc)(11," Button toggles badge visibility\n"),Object(a.dc)(12,"button",3),Object(a.kc)("click",(function(){return t.toggleBadgeVisibility()})),Object(a.Rc)(13," Hide "),Object(a.cc)(),Object(a.cc)(),Object(a.dc)(14,"p"),Object(a.Rc)(15," Icon with a badge\n"),Object(a.dc)(16,"mat-icon",4),Object(a.Rc)(17,"home"),Object(a.cc)(),Object(a.dc)(18,"span",5),Object(a.Rc)(19," Example with a home icon with overlaid badge showing the number 15 "),Object(a.cc)(),Object(a.cc)()),2&e&&(Object(a.Lb)(12),Object(a.uc)("matBadgeHidden",t.hidden))},directives:[l,h.b,g.a],encapsulation:2}),e})(),u=(()=>{class e{}return e.\u0275mod=Object(a.Vb)({type:e}),e.\u0275inj=Object(a.Ub)({factory:function(t){return new(t||e)},imports:[[m,h.c,g.b]]}),e})()}}]);