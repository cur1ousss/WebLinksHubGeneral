(window.webpackJsonp=window.webpackJsonp||[]).push([["CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~db0ab3e6"],{"./src/lib/timezone/index.ts":function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return i})),o.d(t,"e",(function(){return r})),o.d(t,"d",(function(){return l})),o.d(t,"f",(function(){return a})),o.d(t,"g",(function(){return d})),o.d(t,"c",(function(){return u}));o("./node_modules/core-js/modules/es6.regexp.replace.js"),o("./node_modules/core-js/modules/es6.regexp.split.js");var n=o("./src/lib/constants/index.ts"),c=o("./src/reddit/models/PostCreationForm/index.ts");const s="America/Los_Angeles",i=()=>{let e;try{e=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){}return"Asia/Calcutta"===e&&(e="Asia/Kolkata"),e||void 0},r=e=>{const t=Math.abs(e),o=t%60,n=e>0?"-":"+",c=("0"+Math.floor(t/60)).slice(-2),s=("0"+o).slice(-2);return"".concat(n).concat(c,":").concat(s)},l=(e,t)=>{const o=t||Date.now(),c={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short",hour12:!1,timeZone:e};let s="";try{s=new Intl.DateTimeFormat("en-US",c).format(new Date(o))}catch(g){return}const[i,r,l]=s.replace(", "," ").split(" "),[a,d,u]=i.trim().split("/").map(Number),[b,p,m]=r.trim().split(":").map(Number),j=Date.UTC(u,a-1,d,b,p,m),O=new Date(o).setMilliseconds(0)-j;return{abbreviation:l,offset:Math.round(O/n.cb)}},a=e=>{const t=e.slice(0,19),[o,n]=t.split("T"),[c,s,i]=o.split("-").map(Number),[r,l,a=0]=n.split(":").map(Number);return new Date(c,s-1,i,r,l,a)},d=e=>{const t=new Date(e);return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().slice(0,16)},u=e=>{if(e&&e.eventInfo){const{eventStart:t,eventEnd:o}=e.eventInfo;return{startDate:d(new Date(t*n.Bb)),endDate:d(new Date(o*n.Bb)),submitTime:c.i.Now,timezoneName:i()||s}}}},"./src/reddit/actions/postCollection/index.ts":function(e,t,o){"use strict";o("./node_modules/core-js/modules/web.dom.iterable.js");var n=o("./node_modules/react-router-redux/es/index.js"),c=o("./src/app/strings/index.ts"),s=o("./src/lib/filterQueryParams/index.ts"),i=o("./src/lib/makeActionCreator/index.ts"),r=o("./src/reddit/actions/postCollection/constants.ts"),l=o("./src/reddit/actions/toaster.ts"),a=o("./src/reddit/constants/history.ts"),d=o("./src/lib/constants/index.ts"),u=o("./src/lib/makeApiRequest/index.ts"),b=o("./src/lib/omitHeaders/index.ts"),p=o("./src/reddit/constants/headers.ts");var m=(e,t,o)=>Object(u.b)(Object(b.a)(e,[p.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/add_post_to_collection.json"),method:d.bb.POST,data:{collection_id:t,link_fullname:o}});var j=(e,t,o)=>Object(u.b)(Object(b.a)(e,[p.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/create_collection.json"),method:d.bb.POST,data:{title:t,sr_fullname:o}});var O=(e,t)=>Object(u.b)(Object(b.a)(e,[p.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/delete_collection.json"),method:d.bb.POST,data:{collection_id:t}}),g=o("./src/config.ts");var f=(e,t)=>Object(u.b)(Object(b.a)(e,[p.a]),{endpoint:"".concat(g.a.gatewayUrl,"/desktopapi/v1/subreddit_collections/").concat(t),method:d.bb.GET});var C=(e,t,o)=>Object(u.b)(Object(b.a)(e,[p.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/remove_post_in_collection.json"),method:d.bb.POST,data:{collection_id:t,link_fullname:o}});var v=(e,t,o)=>Object(u.b)(Object(b.a)(e,[p.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/update_collection_title.json"),method:d.bb.POST,data:{collection_id:t,title:o}});var x=(e,t,o)=>Object(u.b)(Object(b.a)(e,[p.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/reorder_collection.json"),method:d.bb.POST,data:{collection_id:t,link_ids:o.join(",")}});var _=(e,t,o)=>Object(u.b)(Object(b.a)(e,[p.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/update_collection_description.json"),method:d.bb.POST,data:{collection_id:t,description:o}});var I=(e,t,o)=>Object(u.b)(Object(b.a)(e,[p.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/update_collection_display_layout.json"),method:d.bb.POST,data:{collection_id:t,display_layout:o}}),E=o("./src/reddit/helpers/overlay/index.ts"),k=o("./src/reddit/helpers/path/index.ts"),y=o("./src/reddit/models/Toast/index.ts"),w=o("./src/reddit/selectors/postCollection.ts"),h=o("./src/reddit/selectors/posts.ts"),S=o("./src/reddit/selectors/subreddit.ts");o.d(t,"b",(function(){return P})),o.d(t,"e",(function(){return A})),o.d(t,"g",(function(){return N})),o.d(t,"a",(function(){return W})),o.d(t,"c",(function(){return F})),o.d(t,"h",(function(){return z})),o.d(t,"f",(function(){return Y})),o.d(t,"d",(function(){return ne}));const T=Object(i.a)(r.c),M=Object(i.a)(r.b),D=Object(i.a)(r.d),P=(e,t)=>async(o,n,c)=>{let{apiContext:s}=c;o(T());const i=await j(s(),e,t);let r;if(i.ok){const e=n().meta,t=(e=>({author:e.author_name||void 0,createdAtUTC:e.created_at_utc,description:e.description,displayLayout:e.display_layout,id:e.collection_id,lastUpdateUTC:e.last_update_utc,permalink:e.permalink,postIds:e.link_ids,primaryPostId:e.primary_link_id||void 0,subredditId:e.subreddit_id,title:e.title}))(i.body);o(D({collection:t,meta:e})),r=t}else{const e=i.error;o(M(e))}return r},U=Object(i.a)(r.f),A=e=>async(t,o,n)=>{let{apiContext:s}=n;const i=o(),r=i.postCollection.subredditToIds||{};if(Object.keys(r).length>0)return;const a=await f(s(),e);a.ok?t(U(a.body)):t(Object(l.e)({kind:y.b.Error,text:Object(c.a)(i.user.language,"error.type.generic")}))},L=Object(i.a)(r.g),N=(e,t,o)=>async(n,s,i)=>{let{apiContext:r}=i;if((await C(r(),e,t)).ok){const i=s(),r=Object(h.J)(i,{postId:t}),a=r&&r.title||"",d=Object(w.q)(i,{collectionId:e}),u=(d&&d.postIds&&d.postIds.indexOf(t)||-1)-1;if(n(L({collectionId:e,postId:t})),o&&u>=0){const t=s(),o=Object(w.q)(t,{collectionId:e}),c=o&&o.postIds&&o.postIds[u]||"",i=Object(h.J)(t,{postId:c});i&&i.permalink&&n(Object(E.a)(i.permalink))}n(Object(l.e)({kind:y.b.SuccessMod,text:Object(c.a)(i.user.language,"collection.postRemovedSuccess",{postTitle:a}),buttonText:Object(c.a)(i.user.language,"collection.undo"),buttonAction:W(e,t)}))}else{const e=s();n(Object(l.e)({kind:y.b.Error,text:Object(c.a)(e.user.language,"error.type.generic")}))}},B=Object(i.a)(r.a),K=Object(i.a)(r.t),W=(e,t)=>async(o,n,s)=>{let{apiContext:i}=s;const r=n();if((await m(i(),e,t)).ok){o(B({collectionId:e,postId:t})),o(K({collectionId:e,postId:t}));const n=Object(h.J)(r,{postId:t}),s=Object(w.q)(r,{collectionId:e}),i=s&&s.title||"";o(Object(l.e)({kind:y.b.SuccessMod,text:Object(c.a)(r.user.language,"collection.postAddedSuccess",{title:i}),buttonText:Object(c.a)(r.user.language,"collection.view"),buttonAction:Object(E.a)(n.permalink)}))}else o(Object(l.e)({kind:y.b.Error,text:Object(c.a)(r.user.language,"error.type.generic")}))},q=Object(i.a)(r.e),F=(e,t)=>async(o,i,r)=>{let{apiContext:a}=r;const d=i();if((await O(a(),e)).ok){const{url:i}=d.platform.currentPage,r=Object(w.q)(d,{collectionId:e}),a=r&&r.title||"",u=r&&r.subredditId,b=u?Object(S.c)(d,u):"/";o(q({collectionId:e,collection:r})),o(t?Object(n.c)(Object(s.a)(i,["collection"])):Object(n.b)(b)),o(Object(l.e)({kind:y.b.SuccessMod,text:Object(c.a)(d.user.language,"collection.collectionDeletedSuccess",{title:a})}))}else o(Object(l.e)({kind:y.b.Error,text:Object(c.a)(d.user.language,"error.type.generic")}))},G=Object(i.a)(r.r),J=Object(i.a)(r.n),R=Object(i.a)(r.s),z=(e,t)=>async(o,n,s)=>{let{apiContext:i}=s;o(G());const r=await v(i(),e,t);let a=!1;const d=n();if(r.ok)o(R({collectionId:e,newTitle:t})),o(Object(l.e)({kind:y.b.SuccessMod,text:Object(c.a)(d.user.language,"collection.editModal.titleUpdateSuccess")})),a=!0;else{const e=r.error;o(J(e)),o(Object(l.e)({kind:y.b.Error,text:Object(c.a)(d.user.language,"error.type.generic")}))}return a},V=Object(i.a)(r.l),Z=Object(i.a)(r.m),Q=Object(i.a)(r.k),Y=e=>async(t,o)=>{const c=o().platform.currentPage.locationState;t(!(!c||!c[a.a.IsOverlay])?Object(E.a)(e.permalink):Object(n.b)(Object(k.b)(e.permalink)))},H=Object(i.a)(r.i),X=Object(i.a)(r.j),$=Object(i.a)(r.h),ee=Object(i.a)(r.p),te=Object(i.a)(r.o),oe=Object(i.a)(r.q),ne=e=>async t=>{const o=[],{collectionId:n,description:s,displayLayout:i,postIds:r,title:a}=e;r&&o.push(t(((e,t)=>async(o,n,s)=>{let{apiContext:i}=s;o(H());const r=await x(i(),e,t);let a=!1;const d=n();return r.ok?(o(X({collectionId:e,postIds:t})),o(Object(l.e)({kind:y.b.SuccessMod,text:Object(c.a)(d.user.language,"collection.editModal.reorderCollectionSuccess")})),a=!0):(o($({error:r.error})),o(Object(l.e)({kind:y.b.Error,text:Object(c.a)(d.user.language,"error.type.generic")}))),a})(n,r))),a&&o.push(t(z(n,a))),void 0!==s&&o.push(t(((e,t)=>async(o,n,s)=>{let{apiContext:i}=s;o(V());const r=await _(i(),e,t);let a=!1;const d=n();if(r.ok)o(Z({collectionId:e,newDescription:t})),o(Object(l.e)({kind:y.b.SuccessMod,text:Object(c.a)(d.user.language,"collection.editModal.descriptionUpdateSuccess")})),a=!0;else{const e=r.error;o(Q(e)),o(Object(l.e)({kind:y.b.Error,text:Object(c.a)(d.user.language,"error.type.generic")}))}return a})(n,s))),i&&o.push(t(((e,t)=>async(o,n,s)=>{let{apiContext:i}=s;o(ee());const r=await I(i(),e,t);let a=!1;const d=n();if(r.ok)o(oe({collectionId:e,newLayout:t})),o(Object(l.e)({kind:y.b.SuccessMod,text:Object(c.a)(d.user.language,"collection.editModal.layoutUpdateSuccess")})),a=!0;else{const e=r.error;o(te(e)),o(Object(l.e)({kind:y.b.Error,text:Object(c.a)(d.user.language,"error.type.generic")}))}return a})(n,i)));let d=!0;return await Promise.all(o).then(e=>{e.forEach(e=>{e||(d=!1)})}),d}},"./src/reddit/components/ConfirmUserActionModal/index.m.less":function(e,t,o){e.exports={buttonWidth:"ogOEj4x-0BpDZWeccJwxx",ModalText:"_2YxEi97B6Nm7NCgLG6pCud",modalText:"_2YxEi97B6Nm7NCgLG6pCud"}},"./src/reddit/components/ConfirmUserActionModal/index.tsx":function(e,t,o){"use strict";var n=o("./node_modules/react/index.js"),c=o.n(n),s=o("./src/higherOrderComponents/asModal/index.tsx"),i=o("./src/reddit/components/ModalStyledComponents/index.tsx"),r=o("./src/reddit/controls/TextButton/index.tsx"),l=o("./src/reddit/i18n/utils.ts"),a=o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),d=o("./src/reddit/components/ConfirmUserActionModal/index.m.less"),u=o.n(d);const b=e=>e.preventDefault();t.a=Object(s.a)(e=>c.a.createElement(i.c,null,c.a.createElement(i.g,null,c.a.createElement(a.a,null,c.a.createElement(i.n,null,e.headerText||Object(l.c)("Confirm")),c.a.createElement(r.a,{onClick:()=>{e.onClose&&e.onClose(),e.toggleModal&&e.toggleModal()}},c.a.createElement(i.b,null)))),c.a.createElement(i.j,null,c.a.createElement(i.m,{className:u.a.ModalText},e.modalText)),c.a.createElement(i.e,null,c.a.createElement(i.a,{className:u.a.buttonWidth,onMouseDown:b,onClick:()=>{e.onCancel&&e.onCancel(),e.toggleModal&&e.toggleModal()},"data-redditstyle":!0},e.cancelActionText||Object(l.c)("Cancel")),c.a.createElement(i.r,{className:u.a.buttonWidth,onMouseDown:b,onClick:t=>{e.onConfirm(),e.toggleModal&&e.toggleModal(),e.trackClick&&e.trackClick()},"data-redditstyle":!0},e.actionText))))},"./src/reddit/helpers/trackers/postCollection.ts":function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"h",(function(){return a})),o.d(t,"g",(function(){return d})),o.d(t,"o",(function(){return u})),o.d(t,"f",(function(){return p})),o.d(t,"e",(function(){return m})),o.d(t,"n",(function(){return j})),o.d(t,"m",(function(){return O})),o.d(t,"b",(function(){return f})),o.d(t,"p",(function(){return C})),o.d(t,"c",(function(){return v})),o.d(t,"j",(function(){return x})),o.d(t,"q",(function(){return _})),o.d(t,"k",(function(){return I})),o.d(t,"l",(function(){return E})),o.d(t,"i",(function(){return k})),o.d(t,"d",(function(){return y}));var n,c,s=o("./src/reddit/constants/tracking.ts"),i=o("./src/reddit/helpers/trackers/postEvent.ts"),r=o("./src/reddit/selectors/platform.ts"),l=o("./src/reddit/selectors/telemetry.ts");!function(e){e.collection="collection",e.collectionComposer="collection_composer",e.postComposer="post_composer",e.postOverflowMenu="post_overflow_menu"}(n||(n={})),function(e){e.post="post",e.follow="follow",e.unfollow="unfollow",e.screen="screen",e.eventEducation="event_education",e.eventEducationGotIt="event_education_got_it",e.collectionEducation="collection_education",e.collectionEducationGotIt="collection_education_got_it",e.collectionCancel="cancel",e.collectionCreate="collection_create",e.collectionSelect="collection_select",e.collectionDelete="collection_delete",e.collectionEdit="collection_edit",e.collectionAddPost="collection_add_post",e.collectionRemovePost="remove_post_from_collection",e.startEvent="start_event"}(c||(c={}));const a=e=>t=>Object.assign({source:n.collection,noun:c.post},b(t,e)),d=e=>{let{postId:t,isFollowed:o}=e;return e=>Object.assign({source:n.collection,noun:o?c.unfollow:c.follow},b(e,t))},u=e=>{let{postId:t,isFollowed:o}=e;return e=>Object.assign({source:i.a.postEvent,noun:o?c.unfollow:c.follow},b(e,t))},b=(e,t)=>{const o=Object.assign({},l.defaults(e),{action:s.d.CLICK,subreddit:l.subreddit(e)});return void 0===t?o:Object.assign({},o,{post:l.post(e,t),postCollection:l.postCollectionI13nSelector(e,{postId:t}),postEvent:l.postEventI13nSelector(e,{postId:t})})},p=e=>Object.assign({},g(e),{action:s.d.VIEW,noun:c.collectionEducation}),m=e=>Object.assign({},g(e),{action:s.d.CLICK,noun:c.collectionEducationGotIt}),j=e=>Object.assign({},g(e),{action:s.d.VIEW,noun:c.eventEducation}),O=e=>Object.assign({},g(e),{action:s.d.CLICK,noun:c.eventEducationGotIt}),g=e=>Object.assign({},l.defaults(e),{subreddit:l.subreddit(e),source:n.postComposer}),f=(e,t)=>o=>Object.assign({},b(o,e),{source:t||n.postOverflowMenu,noun:c.collectionAddPost}),C=e=>t=>Object.assign({},b(t,e),{source:n.collectionComposer,noun:c.collectionRemovePost}),v=()=>e=>Object.assign({},b(e),{source:n.collectionComposer,noun:c.collectionCancel}),x=()=>e=>{const t=Object(r.o)(e)||void 0;return Object.assign({},b(e,t),{source:n.collectionComposer,noun:c.collectionCreate})},_=()=>e=>Object.assign({},b(e),{source:n.collectionComposer,noun:c.collectionSelect}),I=e=>t=>Object.assign({},l.defaults(t),{subreddit:l.subreddit(t),source:n.collectionComposer,action:s.d.CLICK,noun:c.collectionDelete,postCollection:l.postCollectionI13nByCollectionIdSelector(t,{collectionId:e})}),E=e=>t=>Object.assign({},b(t),{source:n.collectionComposer,noun:c.collectionEdit,postCollection:l.postCollectionI13nByCollectionIdSelector(t,{collectionId:e})}),k=e=>t=>Object.assign({},b(t,e),{source:n.collectionComposer,noun:c.startEvent}),y=()=>e=>{const t=Object(r.o)(e)||void 0;return Object.assign({},b(e,t),{source:n.collectionComposer,action:s.d.VIEW,noun:c.screen})}},"./src/reddit/helpers/trackers/postEvent.ts":function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"f",(function(){return m})),o.d(t,"g",(function(){return j})),o.d(t,"e",(function(){return O})),o.d(t,"b",(function(){return g})),o.d(t,"c",(function(){return f})),o.d(t,"d",(function(){return C}));var n,c=o("./src/lib/constants/index.ts"),s=o("./src/lib/eventTools/index.ts"),i=o("./src/lib/timezone/index.ts"),r=o("./src/reddit/constants/tracking.ts"),l=o("./src/reddit/models/PostCreationForm/index.ts"),a=o("./src/reddit/selectors/platform.ts"),d=o("./src/reddit/selectors/postCreations.ts"),u=o("./src/reddit/selectors/telemetry.ts"),b=o("./src/telemetry/index.ts");!function(e){e.postEvent="post_event",e.postComposer="post_composer",e.eventComposer="event_composer"}(n||(n={}));const p=e=>u.actionInfo(e,{pageType:"event_submit"}),m=e=>{Object(b.a)(Object.assign({},u.defaults(e),{source:n.postComposer,action:r.d.CLICK,noun:"event_create",subreddit:u.subreddit(e)}))},j=e=>{Object(b.a)(Object.assign({},u.defaults(e),{source:n.postComposer,action:r.d.CLICK,noun:"event_edit",subreddit:u.subreddit(e),postEvent:v(e),postComposer:x(e)}))},O=()=>e=>({source:n.eventComposer,action:r.d.VIEW,noun:r.c.SCREEN,actionInfo:p(e),postEvent:v(e)}),g=e=>t=>Object.assign({},E(t,Object(a.o)(t)),{source:n.postComposer,noun:"apply",postComposer:_(e)}),f=()=>e=>Object.assign({},E(e,Object(a.o)(e)),{noun:"cancel",actionInfo:p(e)}),C=e=>t=>Object.assign({},E(t,Object(a.o)(t)),{noun:"delete",actionInfo:p(t),postComposer:x(t),postEvent:I(e)}),v=e=>{const t=Object(d.o)(e);return t&&I(t)},x=e=>_(Object(d.o)(e)),_=e=>{return{postScheduled:!!e,submitScheduledTime:e&&e.submitTime===l.i.AtEventTime?Object(i.f)(e.startDate).getTime()/c.Bb:void 0}},I=e=>{const t=Object(i.f)(e.startDate).getTime()/c.Bb,o=Object(i.f)(e.endDate).getTime()/c.Bb;return{eventStartTimestamp:t,eventEndTimestamp:o,eventState:Object(s.e)(t,o)}},E=(e,t)=>{const o={source:n.eventComposer,action:r.d.CLICK,subreddit:u.subreddit(e)};return t?Object.assign({},o,{post:u.post(e,t),postEvent:u.postEventI13nSelector(e,{postId:t}),postCollection:u.postCollectionI13nSelector(e,{postId:t})}):o}}}]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~db0ab3e6.1facd52ebaecff549d86.js.map