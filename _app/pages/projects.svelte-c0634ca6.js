import{S as w,i as C,s as J,e as v,t as x,k as y,c as m,a as j,g as k,d as i,n as E,f as P,D as n,E as b,J as K,b as z,K as A}from"../chunks/vendor-0f94f40a.js";var D=[{title:"project 1",type:" client",description:" i am project one"},{title:"project 2",type:" highlight",description:" i am project two"},{title:"project 3",type:" personal",description:" i am project three"},{title:"project 4",type:" personal",description:" i am project four"}];function V(h,l,o){const c=h.slice();return c[0]=l[o].title,c[1]=l[o].type,c[2]=l[o].description,c}function $(h){let l,o,c=h[0]+"",f,_,s,a=h[1]+"",t,r,e,d=h[2]+"",u,H;return{c(){l=v("div"),o=v("h2"),f=x(c),_=y(),s=v("p"),t=x(a),r=y(),e=v("p"),u=x(d),H=y()},l(g){l=m(g,"DIV",{});var p=j(l);o=m(p,"H2",{});var q=j(o);f=k(q,c),q.forEach(i),_=E(p),s=m(p,"P",{});var I=j(s);t=k(I,a),I.forEach(i),r=E(p),e=m(p,"P",{});var S=j(e);u=k(S,d),S.forEach(i),H=E(p),p.forEach(i)},m(g,p){P(g,l,p),n(l,o),n(o,f),n(l,_),n(l,s),n(s,t),n(l,r),n(l,e),n(e,u),n(l,H)},p:b,d(g){g&&i(l)}}}function B(h){let l,o,c,f,_,s=D,a=[];for(let t=0;t<s.length;t+=1)a[t]=$(V(h,s,t));return{c(){l=y(),o=v("div"),c=v("h1"),f=x("Hello"),_=y();for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){K('[data-svelte="svelte-5oeyam"]',document.head).forEach(i),l=E(t),o=m(t,"DIV",{class:!0});var e=j(o);c=m(e,"H1",{});var d=j(c);f=k(d,"Hello"),d.forEach(i),_=E(e);for(let u=0;u<a.length;u+=1)a[u].l(e);e.forEach(i),this.h()},h(){document.title="Projects",z(o,"class","content")},m(t,r){P(t,l,r),P(t,o,r),n(o,c),n(c,f),n(o,_);for(let e=0;e<a.length;e+=1)a[e].m(o,null)},p(t,[r]){if(r&0){s=D;let e;for(e=0;e<s.length;e+=1){const d=V(t,s,e);a[e]?a[e].p(d,r):(a[e]=$(d),a[e].c(),a[e].m(o,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=s.length}},i:b,o:b,d(t){t&&i(l),t&&i(o),A(a,t)}}}function F(h){return console.log(D),[]}class L extends w{constructor(l){super();C(this,l,F,B,J,{})}}export{L as default};
