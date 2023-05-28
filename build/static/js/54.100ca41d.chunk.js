"use strict";(self.webpackChunkMedAir3=self.webpackChunkMedAir3||[]).push([[54],{6877:function(e,t,n){var r=n(3655),a=n(5820),i=n(2791),u=n(2622),c=n(4087),s=n(184);function l(e){var t=e.onClick;return(0,s.jsx)(r.Z.Link,{children:(0,s.jsx)(c.xu,{color:"red",onClick:function(e){return e.stopPropagation()},children:(0,s.jsx)(a.Z,{title:"Are you sure you want to delete this item?",okText:"Yes",cancelText:"No",onConfirm:t,children:(0,s.jsx)(u.Z,{})})})})}t.Z=(0,i.memo)(l)},7537:function(e,t,n){n.d(t,{Z:function(){return L}});var r=n(3433),a=n(1413),i=n(9439),u=n(5987),c=n(1041),s=n(1326),l=n(2791),o=n(4165),d=n(5861),f=n(4942),p=n(9555),x=n(1933),v=n(4488),h=n(184),m=p.Z.Option,Z=function(){var e=(0,d.Z)((0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.Z)("managers/tabs");case 2:if(null===(t=e.sent)||void 0===t||!t.data){e.next=5;break}return e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(e){var t=e.dataIndex,n=(e.title,e.inputRef),r=e.save,a=(0,x.useQuery)(["managers/tabs"],Z,{enabled:!1}),i=a.data,u=a.isLoading,s=a.refetch;return(0,h.jsx)(c.Z.Item,{style:{margin:0},name:t,children:(0,h.jsx)(p.Z,{allowClear:!0,ref:n,lazyLoad:!0,onBlur:function(){r("select")},loading:u,onFocus:s,children:null===i||void 0===i?void 0:i.map((function(e,t){return(0,h.jsx)(m,{value:JSON.stringify(e),children:e.cureTabName},e.cureTabId)}))})})},y=(0,l.memo)(b),g=p.Z.Option,j=function(e){var t=e.dataIndex,n=(e.title,e.inputRef),r=e.save;return(0,h.jsx)(c.Z.Item,{style:{margin:0},name:t,children:(0,h.jsxs)(p.Z,{allowClear:!0,ref:n,lazyLoad:!0,onBlur:function(){r("select")},children:[(0,h.jsx)(g,{value:"Tablet",children:"Tablet"}),(0,h.jsx)(g,{value:"Ampoule",children:"Ampoule"}),(0,h.jsx)(g,{value:"Drops",children:"Drops"})]})})},T=(0,l.memo)(j),k=n(9389),w=function(e){var t=e.dataIndex,n=(e.title,e.inputRef),r=e.save;return(0,h.jsx)(c.Z.Item,{name:t,children:(0,h.jsx)(k.Z,{ref:n,onPressEnter:r,onBlur:r})})},I=(0,l.memo)(w),S=function(e){var t=e.dataIndex,n=e.title,r=e.inputRef,a=e.save,i=e.inputType;return"useTabs"===t||"cureTabName"===t&&"select"===i?(0,h.jsx)(y,{dataIndex:t,title:n,inputRef:r,save:a}):"cureTabType"===t&&"select"===i?(0,h.jsx)(T,{dataIndex:t,title:n,inputRef:r,save:a}):(0,h.jsx)(I,{dataIndex:t,title:n,inputRef:r,save:a})},C=(0,l.memo)(S),N=function(e){var t=e.title,n=e.editable,r=e.children,u=e.dataIndex,c=e.record,s=e.handleSave,p=e.setShowSaveButton,x=e.form,v=e.inputType,m=(0,l.useState)(!1),Z=(0,i.Z)(m,2),b=Z[0],y=Z[1],g=(0,l.useRef)(null);(0,l.useEffect)((function(){b&&g.current.focus()}),[b]);var j=function(){p&&p(!0),y(!b),x.setFieldsValue((0,f.Z)({},u,c[u]))},T=function(){var e=(0,d.Z)((0,o.Z)().mark((function e(t){var n,r,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.validateFields();case 3:n=e.sent,Object.keys(n).includes("useTabs")&&"select"===t&&(r=JSON.parse(n.useTabs),n.useTabs=r.cureTabName,n.cureTabType=r.cureTabType),Object.keys(n).includes("cureTabName")&&"select"===t&&(i=JSON.parse(n.cureTabName),n.cureTabName=i.cureTabName,n.cureTabType=i.cureTabType),j(),s((0,a.Z)((0,a.Z)({},c),n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Save failed:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),k=r;return n&&(k=b?(0,h.jsx)(C,{dataIndex:u,title:t,inputRef:g,save:T,inputType:v}):(0,h.jsx)("div",{className:"editable-cell-value-wrap",style:{paddingRight:24,height:"35px"},onClick:j,children:r})),{childNode:k}},P=["index"],R=["title","editable","children","dataIndex","record","handleSave","setShowSaveButton","inputType"],D=l.createContext(null),q=function(e){e.index;var t=(0,u.Z)(e,P),n=c.Z.useForm(),r=(0,i.Z)(n,1)[0];return(0,h.jsx)(c.Z,{form:r,component:!1,children:(0,h.jsx)(D.Provider,{value:r,children:(0,h.jsx)("tr",(0,a.Z)({},t))})})},B=function(e){var t=e.title,n=e.editable,r=e.children,i=e.dataIndex,c=e.record,s=e.handleSave,o=e.setShowSaveButton,d=e.inputType,f=(0,u.Z)(e,R),p=(0,l.useContext)(D),x=N({title:t,editable:n,children:r,dataIndex:i,record:c,handleSave:s,setShowSaveButton:o,inputType:d,form:p}).childNode;return(0,h.jsx)("td",(0,a.Z)((0,a.Z)({},f),{},{children:x}))},O=function(e){var t=e.dataSource,n=e.setDataSource,i=e.defaultColumns,u=e.onChange,c=function(e){var i=(0,r.Z)(t),c=i.findIndex((function(t){return e.key===t.key})),s=i[c];i.splice(c,1,(0,a.Z)((0,a.Z)({},s),e)),n(i),null===u||void 0===u||u()},l={body:{row:q,cell:B}},o=null===i||void 0===i?void 0:i.map((function(e){return e.editable?(0,a.Z)((0,a.Z)({},e),{},{onCell:function(t){return{record:t,editable:e.editable,dataIndex:e.dataIndex,title:e.title,inputType:e.inputType,handleSave:c}}}):e}));return(0,h.jsx)("div",{children:(0,h.jsx)(s.Z,{size:"small",bordered:!0,scroll:{x:window.innerHeight},rowClassName:function(){return"editable-row"},components:l,dataSource:t,columns:o,pagination:!1})})},L=(0,l.memo)(O)},1054:function(e,t,n){n.r(t);var r=n(3433),a=n(1413),i=n(9439),u=n(4165),c=n(5861),s=n(2791),l=n(4087),o=n(9286),d=n(7537),f=n(131),p=n(7027),x=n(7309),v=n(4488),h=n(6877),m=n(1933),Z=n(184),b=function(){var e=(0,c.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.Z)("managers/places");case 2:if(null===(t=e.sent)||void 0===t||!t.data){e.next=6;break}return t.data.forEach((function(e){return e.Id=e.visitPlaceId})),e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.default=function(){var e=(0,s.useState)(!0),t=(0,i.Z)(e,2),n=t[0],y=t[1],g=(0,s.useState)(!1),j=(0,i.Z)(g,2),T=j[0],k=j[1],w=(0,m.useQuery)("managers/places",b),I=w.data,S=w.isFetching,C=w.refetch,N=(0,s.useState)(I||[]),P=(0,i.Z)(N,2),R=P[0],D=P[1];(0,s.useEffect)((function(){!S&&I&&D(I)}),[S]);var q=(0,s.useMemo)((function(){return[{title:"Name",dataIndex:"placeName",key:"placeName",ellipsis:!0,editable:!0,render:function(e){return(0,Z.jsx)(f.Z,{placement:"topLeft",title:e,children:e})}},{title:"City",dataIndex:"placeCity",key:"placeCity",inputType:"select",ellipsis:!0,editable:!0,render:function(e){return(0,Z.jsx)(f.Z,{placement:"topLeft",title:e,children:e})}},{title:"Country",dataIndex:"placeCountry",key:"placeCountry",inputType:"select",ellipsis:!0,editable:!0,render:function(e){return(0,Z.jsx)(f.Z,{placement:"topLeft",title:e,children:e})}},{title:"Delete",dataIndex:"delete",width:50,key:"delete",ellipsis:!0,align:"center",render:function(e,t,n){return(0,Z.jsx)(h.Z,{onClick:function(){O(t)}})}}]}),[R]),B=function(e){var t=R.filter((function(t){return t.Id!==e.Id}));D(t),p.ZP.success("Deleted")},O=function(){var e=(0,c.Z)((0,u.Z)().mark((function e(t){var n,r,a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.visitPlaceId){e.next=3;break}return e.abrupt("return",B(t));case 3:return e.next=5,(0,v.Z)("managers/places/"+n,{},"delete");case 5:"success"===(null===(r=e.sent)||void 0===r?void 0:r.data)?(p.ZP.success("Deleted!"),a=R.filter((function(e){return e.Id!==t.Id})),D(a),C()):p.ZP.warning("Something get wrong");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=(0,c.Z)((0,u.Z)().mark((function e(){var t,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(!0),t=0;case 2:if(!(t<R.length)){e.next=11;break}return n=(0,a.Z)({},R[t]),e.next=6,(0,v.Z)("managers/places",n,"post");case 6:e.sent?(p.ZP.success({content:"Saved",key:"save_manager"}),C()):p.ZP.error("Error");case 8:t++,e.next=2;break;case 11:k(!1),y(!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,Z.jsx)(l.xu,{boxShadow:"xl",p:"2",bg:"pink.100",borderRadius:"15px",children:(0,Z.jsxs)(l.xu,{display:"flex",flexDirection:"column",children:[(0,Z.jsx)(x.ZP,{disabled:n,loading:T,block:!0,onClick:L,type:"primary",children:"Save"}),(0,Z.jsx)(d.Z,{dataSource:R,setDataSource:D,defaultColumns:q,onChange:function(){y(!1)}}),(0,Z.jsx)(x.ZP,{block:!0,icon:(0,Z.jsx)(o.Z,{}),onClick:function(){var e=(new Date).getTime(),t={key:e,Id:e};D((function(e){return[].concat((0,r.Z)(e),[t])})),y(!1)},children:"New medications"})]})})}},9286:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(1413),a=n(2791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},u=n(4291),c=function(e,t){return a.createElement(u.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};c.displayName="PlusOutlined";var s=a.forwardRef(c)}}]);
//# sourceMappingURL=54.100ca41d.chunk.js.map