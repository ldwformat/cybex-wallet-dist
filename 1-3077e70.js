(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1522:
/*!*************************************************!*\
  !*** ../node_modules/bignumber.js/bignumber.js ***!
  \*************************************************/
/*! no static exports found */
/*! exports used: BigNumber, default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,n,t){var r;/*! bignumber.js v4.1.0 https://github.com/MikeMcl/bignumber.js/LICENCE */!function(i){"use strict";var o,u=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,s=Math.ceil,l=Math.floor,c=" not a boolean or binary digit",f="rounding mode",a="number type has more than 15 significant digits",h="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",g=1e14,p=14,d=9007199254740991,w=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],m=1e7,v=1e9;function N(e){var n=0|e;return e>0||e===n?n:n-1}function b(e){for(var n,t,r=1,i=e.length,o=e[0]+"";r<i;){for(n=e[r++]+"",t=p-n.length;t--;n="0"+n);o+=n}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function y(e,n){var t,r,i=e.c,o=n.c,u=e.s,s=n.s,l=e.e,c=n.e;if(!u||!s)return null;if(t=i&&!i[0],r=o&&!o[0],t||r)return t?r?0:-s:u;if(u!=s)return u;if(t=u<0,r=l==c,!i||!o)return r?0:!i^t?1:-1;if(!r)return l>c^t?1:-1;for(s=(l=i.length)<(c=o.length)?l:c,u=0;u<s;u++)if(i[u]!=o[u])return i[u]>o[u]^t?1:-1;return l==c?0:l>c^t?1:-1}function O(e,n,t){return(e=D(e))>=n&&e<=t}function R(e){return"[object Array]"==Object.prototype.toString.call(e)}function S(e,n,t){for(var r,i,o=[0],u=0,s=e.length;u<s;){for(i=o.length;i--;o[i]*=n);for(o[r=0]+=h.indexOf(e.charAt(u++));r<o.length;r++)o[r]>t-1&&(null==o[r+1]&&(o[r+1]=0),o[r+1]+=o[r]/t|0,o[r]%=t)}return o.reverse()}function A(e,n){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(n<0?"e":"e+")+n}function E(e,n){var t,r;if(n<0){for(r="0.";++n;r+="0");e=r+e}else if(++n>(t=e.length)){for(r="0",n-=t;--n;r+="0");e+=r}else n<t&&(e=e.slice(0,n)+"."+e.slice(n));return e}function D(e){return(e=parseFloat(e))<0?s(e):l(e)}(o=function e(n){var t,r,i,o,_,F,I,x,L=0,U=J.prototype,C=new J(1),M=20,T=4,k=-7,B=21,P=-1e7,q=1e7,$=!0,G=Z,z=!1,V=1,j=0,H={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0};function J(e,n){var t,i,o,s,c,f,g=this;if(!(g instanceof J))return $&&Q(26,"constructor call without new",e),new J(e,n);if(null!=n&&G(n,2,64,L,"base")){if(f=e+"",10==(n|=0))return ee(g=new J(e instanceof J?e:f),M+g.e+1,T);if((s="number"==typeof e)&&0*e!=0||!new RegExp("^-?"+(t="["+h.slice(0,n)+"]+")+"(?:\\."+t+")?$",n<37?"i":"").test(f))return r(g,f,s,n);s?(g.s=1/e<0?(f=f.slice(1),-1):1,$&&f.replace(/^0\.0*|\./,"").length>15&&Q(L,a,e),s=!1):g.s=45===f.charCodeAt(0)?(f=f.slice(1),-1):1,f=W(f,10,n,g.s)}else{if(e instanceof J)return g.s=e.s,g.e=e.e,g.c=(e=e.c)?e.slice():e,void(L=0);if((s="number"==typeof e)&&0*e==0){if(g.s=1/e<0?(e=-e,-1):1,e===~~e){for(i=0,o=e;o>=10;o/=10,i++);return g.e=i,g.c=[e],void(L=0)}f=e+""}else{if(!u.test(f=e+""))return r(g,f,s);g.s=45===f.charCodeAt(0)?(f=f.slice(1),-1):1}}for((i=f.indexOf("."))>-1&&(f=f.replace(".","")),(o=f.search(/e/i))>0?(i<0&&(i=o),i+=+f.slice(o+1),f=f.substring(0,o)):i<0&&(i=f.length),o=0;48===f.charCodeAt(o);o++);for(c=f.length;48===f.charCodeAt(--c););if(f=f.slice(o,c+1))if(c=f.length,s&&$&&c>15&&(e>d||e!==l(e))&&Q(L,a,g.s*e),(i=i-o-1)>q)g.c=g.e=null;else if(i<P)g.c=[g.e=0];else{if(g.e=i,g.c=[],o=(i+1)%p,i<0&&(o+=p),o<c){for(o&&g.c.push(+f.slice(0,o)),c-=p;o<c;)g.c.push(+f.slice(o,o+=p));f=f.slice(o),o=p-f.length}else o-=c;for(;o--;f+="0");g.c.push(+f)}else g.c=[g.e=0];L=0}function W(e,n,r,i){var o,u,s,l,c,f,a,g=e.indexOf("."),p=M,d=T;for(r<37&&(e=e.toLowerCase()),g>=0&&(s=j,j=0,e=e.replace(".",""),c=(a=new J(r)).pow(e.length-g),j=s,a.c=S(E(b(c.c),c.e),10,n),a.e=a.c.length),u=s=(f=S(e,r,n)).length;0==f[--s];f.pop());if(!f[0])return"0";if(g<0?--u:(c.c=f,c.e=u,c.s=i,f=(c=t(c,a,p,d,n)).c,l=c.r,u=c.e),g=f[o=u+p+1],s=n/2,l=l||o<0||null!=f[o+1],l=d<4?(null!=g||l)&&(0==d||d==(c.s<0?3:2)):g>s||g==s&&(4==d||l||6==d&&1&f[o-1]||d==(c.s<0?8:7)),o<1||!f[0])e=l?E("1",-p):"0";else{if(f.length=o,l)for(--n;++f[--o]>n;)f[o]=0,o||(++u,f=[1].concat(f));for(s=f.length;!f[--s];);for(g=0,e="";g<=s;e+=h.charAt(f[g++]));e=E(e,u)}return e}function X(e,n,t,r){var i,o,u,s,l;if(t=null!=t&&G(t,0,8,r,f)?0|t:T,!e.c)return e.toString();if(i=e.c[0],u=e.e,null==n)l=b(e.c),l=19==r||24==r&&u<=k?A(l,u):E(l,u);else if(o=(e=ee(new J(e),n,t)).e,s=(l=b(e.c)).length,19==r||24==r&&(n<=o||o<=k)){for(;s<n;l+="0",s++);l=A(l,o)}else if(n-=u,l=E(l,o),o+1>s){if(--n>0)for(l+=".";n--;l+="0");}else if((n+=o-s)>0)for(o+1==s&&(l+=".");n--;l+="0");return e.s<0&&i?"-"+l:l}function Y(e,n){var t,r,i=0;for(R(e[0])&&(e=e[0]),t=new J(e[0]);++i<e.length;){if(!(r=new J(e[i])).s){t=r;break}n.call(t,r)&&(t=r)}return t}function Z(e,n,t,r,i){return(e<n||e>t||e!=D(e))&&Q(r,(i||"decimal places")+(e<n||e>t?" out of range":" not an integer"),e),!0}function K(e,n,t){for(var r=1,i=n.length;!n[--i];n.pop());for(i=n[0];i>=10;i/=10,r++);return(t=r+t*p-1)>q?e.c=e.e=null:t<P?e.c=[e.e=0]:(e.e=t,e.c=n),e}function Q(e,n,t){var r=new Error(["new BigNumber","cmp","config","div","divToInt","eq","gt","gte","lt","lte","minus","mod","plus","precision","random","round","shift","times","toDigits","toExponential","toFixed","toFormat","toFraction","pow","toPrecision","toString","BigNumber"][e]+"() "+n+": "+t);throw r.name="BigNumber Error",L=0,r}function ee(e,n,t,r){var i,o,u,c,f,a,h,d=e.c,m=w;if(d){e:{for(i=1,c=d[0];c>=10;c/=10,i++);if((o=n-i)<0)o+=p,u=n,h=(f=d[a=0])/m[i-u-1]%10|0;else if((a=s((o+1)/p))>=d.length){if(!r)break e;for(;d.length<=a;d.push(0));f=h=0,i=1,u=(o%=p)-p+1}else{for(f=c=d[a],i=1;c>=10;c/=10,i++);h=(u=(o%=p)-p+i)<0?0:f/m[i-u-1]%10|0}if(r=r||n<0||null!=d[a+1]||(u<0?f:f%m[i-u-1]),r=t<4?(h||r)&&(0==t||t==(e.s<0?3:2)):h>5||5==h&&(4==t||r||6==t&&(o>0?u>0?f/m[i-u]:0:d[a-1])%10&1||t==(e.s<0?8:7)),n<1||!d[0])return d.length=0,r?(n-=e.e+1,d[0]=m[(p-n%p)%p],e.e=-n||0):d[0]=e.e=0,e;if(0==o?(d.length=a,c=1,a--):(d.length=a+1,c=m[p-o],d[a]=u>0?l(f/m[i-u]%m[u])*c:0),r)for(;;){if(0==a){for(o=1,u=d[0];u>=10;u/=10,o++);for(u=d[0]+=c,c=1;u>=10;u/=10,c++);o!=c&&(e.e++,d[0]==g&&(d[0]=1));break}if(d[a]+=c,d[a]!=g)break;d[a--]=0,c=1}for(o=d.length;0===d[--o];d.pop());}e.e>q?e.c=e.e=null:e.e<P&&(e.c=[e.e=0])}return e}return J.another=e,J.ROUND_UP=0,J.ROUND_DOWN=1,J.ROUND_CEIL=2,J.ROUND_FLOOR=3,J.ROUND_HALF_UP=4,J.ROUND_HALF_DOWN=5,J.ROUND_HALF_EVEN=6,J.ROUND_HALF_CEIL=7,J.ROUND_HALF_FLOOR=8,J.EUCLID=9,J.config=J.set=function(){var e,n,t=0,r={},i=arguments,o=i[0],u=o&&"object"==typeof o?function(){if(o.hasOwnProperty(n))return null!=(e=o[n])}:function(){if(i.length>t)return null!=(e=i[t++])};return u(n="DECIMAL_PLACES")&&G(e,0,v,2,n)&&(M=0|e),r[n]=M,u(n="ROUNDING_MODE")&&G(e,0,8,2,n)&&(T=0|e),r[n]=T,u(n="EXPONENTIAL_AT")&&(R(e)?G(e[0],-v,0,2,n)&&G(e[1],0,v,2,n)&&(k=0|e[0],B=0|e[1]):G(e,-v,v,2,n)&&(k=-(B=0|(e<0?-e:e)))),r[n]=[k,B],u(n="RANGE")&&(R(e)?G(e[0],-v,-1,2,n)&&G(e[1],1,v,2,n)&&(P=0|e[0],q=0|e[1]):G(e,-v,v,2,n)&&(0|e?P=-(q=0|(e<0?-e:e)):$&&Q(2,n+" cannot be zero",e))),r[n]=[P,q],u(n="ERRORS")&&(e===!!e||1===e||0===e?(L=0,G=($=!!e)?Z:O):$&&Q(2,n+c,e)),r[n]=$,u(n="CRYPTO")&&(!0===e||!1===e||1===e||0===e?e?!(e="undefined"==typeof crypto)&&crypto&&(crypto.getRandomValues||crypto.randomBytes)?z=!0:$?Q(2,"crypto unavailable",e?void 0:crypto):z=!1:z=!1:$&&Q(2,n+c,e)),r[n]=z,u(n="MODULO_MODE")&&G(e,0,9,2,n)&&(V=0|e),r[n]=V,u(n="POW_PRECISION")&&G(e,0,v,2,n)&&(j=0|e),r[n]=j,u(n="FORMAT")&&("object"==typeof e?H=e:$&&Q(2,n+" not an object",e)),r[n]=H,r},J.max=function(){return Y(arguments,U.lt)},J.min=function(){return Y(arguments,U.gt)},J.random=(i=9007199254740992*Math.random()&2097151?function(){return l(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var n,t,r,o,u,c=0,f=[],a=new J(C);if(e=null!=e&&G(e,0,v,14)?0|e:M,o=s(e/p),z)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(o*=2));c<o;)(u=131072*n[c]+(n[c+1]>>>11))>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),n[c]=t[0],n[c+1]=t[1]):(f.push(u%1e14),c+=2);c=o/2}else if(crypto.randomBytes){for(n=crypto.randomBytes(o*=7);c<o;)(u=281474976710656*(31&n[c])+1099511627776*n[c+1]+4294967296*n[c+2]+16777216*n[c+3]+(n[c+4]<<16)+(n[c+5]<<8)+n[c+6])>=9e15?crypto.randomBytes(7).copy(n,c):(f.push(u%1e14),c+=7);c=o/7}else z=!1,$&&Q(14,"crypto unavailable",crypto);if(!z)for(;c<o;)(u=i())<9e15&&(f[c++]=u%1e14);for(o=f[--c],e%=p,o&&e&&(u=w[p-e],f[c]=l(o/u)*u);0===f[c];f.pop(),c--);if(c<0)f=[r=0];else{for(r=-1;0===f[0];f.splice(0,1),r-=p);for(c=1,u=f[0];u>=10;u/=10,c++);c<p&&(r-=p-c)}return a.e=r,a.c=f,a}),t=function(){function e(e,n,t){var r,i,o,u,s=0,l=e.length,c=n%m,f=n/m|0;for(e=e.slice();l--;)s=((i=c*(o=e[l]%m)+(r=f*o+(u=e[l]/m|0)*c)%m*m+s)/t|0)+(r/m|0)+f*u,e[l]=i%t;return s&&(e=[s].concat(e)),e}function n(e,n,t,r){var i,o;if(t!=r)o=t>r?1:-1;else for(i=o=0;i<t;i++)if(e[i]!=n[i]){o=e[i]>n[i]?1:-1;break}return o}function t(e,n,t,r){for(var i=0;t--;)e[t]-=i,i=e[t]<n[t]?1:0,e[t]=i*r+e[t]-n[t];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(r,i,o,u,s){var c,f,a,h,d,w,m,v,b,y,O,R,S,A,E,D,_,F=r.s==i.s?1:-1,I=r.c,x=i.c;if(!(I&&I[0]&&x&&x[0]))return new J(r.s&&i.s&&(I?!x||I[0]!=x[0]:x)?I&&0==I[0]||!x?0*F:F/0:NaN);for(b=(v=new J(F)).c=[],F=o+(f=r.e-i.e)+1,s||(s=g,f=N(r.e/p)-N(i.e/p),F=F/p|0),a=0;x[a]==(I[a]||0);a++);if(x[a]>(I[a]||0)&&f--,F<0)b.push(1),h=!0;else{for(A=I.length,D=x.length,a=0,F+=2,(d=l(s/(x[0]+1)))>1&&(x=e(x,d,s),I=e(I,d,s),D=x.length,A=I.length),S=D,O=(y=I.slice(0,D)).length;O<D;y[O++]=0);_=x.slice(),_=[0].concat(_),E=x[0],x[1]>=s/2&&E++;do{if(d=0,(c=n(x,y,D,O))<0){if(R=y[0],D!=O&&(R=R*s+(y[1]||0)),(d=l(R/E))>1)for(d>=s&&(d=s-1),m=(w=e(x,d,s)).length,O=y.length;1==n(w,y,m,O);)d--,t(w,D<m?_:x,m,s),m=w.length,c=1;else 0==d&&(c=d=1),m=(w=x.slice()).length;if(m<O&&(w=[0].concat(w)),t(y,w,O,s),O=y.length,-1==c)for(;n(x,y,D,O)<1;)d++,t(y,D<O?_:x,O,s),O=y.length}else 0===c&&(d++,y=[0]);b[a++]=d,y[0]?y[O++]=I[S]||0:(y=[I[S]],O=1)}while((S++<A||null!=y[0])&&F--);h=null!=y[0],b[0]||b.splice(0,1)}if(s==g){for(a=1,F=b[0];F>=10;F/=10,a++);ee(v,o+(v.e=a+f*p-1)+1,u,h)}else v.e=f,v.r=+h;return v}}(),o=/^(-?)0([xbo])(?=\w[\w.]*$)/i,_=/^([^.]+)\.$/,F=/^\.([^.]+)$/,I=/^-?(Infinity|NaN)$/,x=/^\s*\+(?=[\w.])|^\s+|\s+$/g,r=function(e,n,t,r){var i,u=t?n:n.replace(x,"");if(I.test(u))e.s=isNaN(u)?null:u<0?-1:1;else{if(!t&&(u=u.replace(o,function(e,n,t){return i="x"==(t=t.toLowerCase())?16:"b"==t?2:8,r&&r!=i?e:n}),r&&(i=r,u=u.replace(_,"$1").replace(F,"0.$1")),n!=u))return new J(u,i);$&&Q(L,"not a"+(r?" base "+r:"")+" number",n),e.s=null}e.c=e.e=null,L=0},U.absoluteValue=U.abs=function(){var e=new J(this);return e.s<0&&(e.s=1),e},U.ceil=function(){return ee(new J(this),this.e+1,2)},U.comparedTo=U.cmp=function(e,n){return L=1,y(this,new J(e,n))},U.decimalPlaces=U.dp=function(){var e,n,t=this.c;if(!t)return null;if(e=((n=t.length-1)-N(this.e/p))*p,n=t[n])for(;n%10==0;n/=10,e--);return e<0&&(e=0),e},U.dividedBy=U.div=function(e,n){return L=3,t(this,new J(e,n),M,T)},U.dividedToIntegerBy=U.divToInt=function(e,n){return L=4,t(this,new J(e,n),0,1)},U.equals=U.eq=function(e,n){return L=5,0===y(this,new J(e,n))},U.floor=function(){return ee(new J(this),this.e+1,3)},U.greaterThan=U.gt=function(e,n){return L=6,y(this,new J(e,n))>0},U.greaterThanOrEqualTo=U.gte=function(e,n){return L=7,1===(n=y(this,new J(e,n)))||0===n},U.isFinite=function(){return!!this.c},U.isInteger=U.isInt=function(){return!!this.c&&N(this.e/p)>this.c.length-2},U.isNaN=function(){return!this.s},U.isNegative=U.isNeg=function(){return this.s<0},U.isZero=function(){return!!this.c&&0==this.c[0]},U.lessThan=U.lt=function(e,n){return L=8,y(this,new J(e,n))<0},U.lessThanOrEqualTo=U.lte=function(e,n){return L=9,-1===(n=y(this,new J(e,n)))||0===n},U.minus=U.sub=function(e,n){var t,r,i,o,u=this,s=u.s;if(L=10,n=(e=new J(e,n)).s,!s||!n)return new J(NaN);if(s!=n)return e.s=-n,u.plus(e);var l=u.e/p,c=e.e/p,f=u.c,a=e.c;if(!l||!c){if(!f||!a)return f?(e.s=-n,e):new J(a?u:NaN);if(!f[0]||!a[0])return a[0]?(e.s=-n,e):new J(f[0]?u:3==T?-0:0)}if(l=N(l),c=N(c),f=f.slice(),s=l-c){for((o=s<0)?(s=-s,i=f):(c=l,i=a),i.reverse(),n=s;n--;i.push(0));i.reverse()}else for(r=(o=(s=f.length)<(n=a.length))?s:n,s=n=0;n<r;n++)if(f[n]!=a[n]){o=f[n]<a[n];break}if(o&&(i=f,f=a,a=i,e.s=-e.s),(n=(r=a.length)-(t=f.length))>0)for(;n--;f[t++]=0);for(n=g-1;r>s;){if(f[--r]<a[r]){for(t=r;t&&!f[--t];f[t]=n);--f[t],f[r]+=g}f[r]-=a[r]}for(;0==f[0];f.splice(0,1),--c);return f[0]?K(e,f,c):(e.s=3==T?-1:1,e.c=[e.e=0],e)},U.modulo=U.mod=function(e,n){var r,i,o=this;return L=11,e=new J(e,n),!o.c||!e.s||e.c&&!e.c[0]?new J(NaN):!e.c||o.c&&!o.c[0]?new J(o):(9==V?(i=e.s,e.s=1,r=t(o,e,0,3),e.s=i,r.s*=i):r=t(o,e,0,V),o.minus(r.times(e)))},U.negated=U.neg=function(){var e=new J(this);return e.s=-e.s||null,e},U.plus=U.add=function(e,n){var t,r=this,i=r.s;if(L=12,n=(e=new J(e,n)).s,!i||!n)return new J(NaN);if(i!=n)return e.s=-n,r.minus(e);var o=r.e/p,u=e.e/p,s=r.c,l=e.c;if(!o||!u){if(!s||!l)return new J(i/0);if(!s[0]||!l[0])return l[0]?e:new J(s[0]?r:0*i)}if(o=N(o),u=N(u),s=s.slice(),i=o-u){for(i>0?(u=o,t=l):(i=-i,t=s),t.reverse();i--;t.push(0));t.reverse()}for((i=s.length)-(n=l.length)<0&&(t=l,l=s,s=t,n=i),i=0;n;)i=(s[--n]=s[n]+l[n]+i)/g|0,s[n]=g===s[n]?0:s[n]%g;return i&&(s=[i].concat(s),++u),K(e,s,u)},U.precision=U.sd=function(e){var n,t,r=this,i=r.c;if(null!=e&&e!==!!e&&1!==e&&0!==e&&($&&Q(13,"argument"+c,e),e!=!!e&&(e=null)),!i)return null;if(n=(t=i.length-1)*p+1,t=i[t]){for(;t%10==0;t/=10,n--);for(t=i[0];t>=10;t/=10,n++);}return e&&r.e+1>n&&(n=r.e+1),n},U.round=function(e,n){var t=new J(this);return(null==e||G(e,0,v,15))&&ee(t,~~e+this.e+1,null!=n&&G(n,0,8,15,f)?0|n:T),t},U.shift=function(e){var n=this;return G(e,-d,d,16,"argument")?n.times("1e"+D(e)):new J(n.c&&n.c[0]&&(e<-d||e>d)?n.s*(e<0?0:1/0):n)},U.squareRoot=U.sqrt=function(){var e,n,r,i,o,u=this,s=u.c,l=u.s,c=u.e,f=M+4,a=new J("0.5");if(1!==l||!s||!s[0])return new J(!l||l<0&&(!s||s[0])?NaN:s?u:1/0);if(0==(l=Math.sqrt(+u))||l==1/0?(((n=b(s)).length+c)%2==0&&(n+="0"),l=Math.sqrt(n),c=N((c+1)/2)-(c<0||c%2),r=new J(n=l==1/0?"1e"+c:(n=l.toExponential()).slice(0,n.indexOf("e")+1)+c)):r=new J(l+""),r.c[0])for((l=(c=r.e)+f)<3&&(l=0);;)if(o=r,r=a.times(o.plus(t(u,o,f,1))),b(o.c).slice(0,l)===(n=b(r.c)).slice(0,l)){if(r.e<c&&--l,"9999"!=(n=n.slice(l-3,l+1))&&(i||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(ee(r,r.e+M+2,1),e=!r.times(r).eq(u));break}if(!i&&(ee(o,o.e+M+2,0),o.times(o).eq(u))){r=o;break}f+=4,l+=4,i=1}return ee(r,r.e+M+1,T,e)},U.times=U.mul=function(e,n){var t,r,i,o,u,s,l,c,f,a,h,d,w,v,b,y=this,O=y.c,R=(L=17,e=new J(e,n)).c;if(!(O&&R&&O[0]&&R[0]))return!y.s||!e.s||O&&!O[0]&&!R||R&&!R[0]&&!O?e.c=e.e=e.s=null:(e.s*=y.s,O&&R?(e.c=[0],e.e=0):e.c=e.e=null),e;for(r=N(y.e/p)+N(e.e/p),e.s*=y.s,(l=O.length)<(a=R.length)&&(w=O,O=R,R=w,i=l,l=a,a=i),i=l+a,w=[];i--;w.push(0));for(v=g,b=m,i=a;--i>=0;){for(t=0,h=R[i]%b,d=R[i]/b|0,o=i+(u=l);o>i;)t=((c=h*(c=O[--u]%b)+(s=d*c+(f=O[u]/b|0)*h)%b*b+w[o]+t)/v|0)+(s/b|0)+d*f,w[o--]=c%v;w[o]=t}return t?++r:w.splice(0,1),K(e,w,r)},U.toDigits=function(e,n){var t=new J(this);return e=null!=e&&G(e,1,v,18,"precision")?0|e:null,n=null!=n&&G(n,0,8,18,f)?0|n:T,e?ee(t,e,n):t},U.toExponential=function(e,n){return X(this,null!=e&&G(e,0,v,19)?1+~~e:null,n,19)},U.toFixed=function(e,n){return X(this,null!=e&&G(e,0,v,20)?~~e+this.e+1:null,n,20)},U.toFormat=function(e,n){var t=X(this,null!=e&&G(e,0,v,21)?~~e+this.e+1:null,n,21);if(this.c){var r,i=t.split("."),o=+H.groupSize,u=+H.secondaryGroupSize,s=H.groupSeparator,l=i[0],c=i[1],f=this.s<0,a=f?l.slice(1):l,h=a.length;if(u&&(r=o,o=u,u=r,h-=r),o>0&&h>0){for(r=h%o||o,l=a.substr(0,r);r<h;r+=o)l+=s+a.substr(r,o);u>0&&(l+=s+a.slice(r)),f&&(l="-"+l)}t=c?l+H.decimalSeparator+((u=+H.fractionGroupSize)?c.replace(new RegExp("\\d{"+u+"}\\B","g"),"$&"+H.fractionGroupSeparator):c):l}return t},U.toFraction=function(e){var n,r,i,o,u,s,l,c,f,a=$,h=this,g=h.c,d=new J(C),m=r=new J(C),v=l=new J(C);if(null!=e&&($=!1,s=new J(e),$=a,(a=s.isInt())&&!s.lt(C)||($&&Q(22,"max denominator "+(a?"out of range":"not an integer"),e),e=!a&&s.c&&ee(s,s.e+1,1).gte(C)?s:null)),!g)return h.toString();for(f=b(g),o=d.e=f.length-h.e-1,d.c[0]=w[(u=o%p)<0?p+u:u],e=!e||s.cmp(d)>0?o>0?d:m:s,u=q,q=1/0,s=new J(f),l.c[0]=0;c=t(s,d,0,1),1!=(i=r.plus(c.times(v))).cmp(e);)r=v,v=i,m=l.plus(c.times(i=m)),l=i,d=s.minus(c.times(i=d)),s=i;return i=t(e.minus(r),v,0,1),l=l.plus(i.times(m)),r=r.plus(i.times(v)),l.s=m.s=h.s,n=t(m,v,o*=2,T).minus(h).abs().cmp(t(l,r,o,T).minus(h).abs())<1?[m.toString(),v.toString()]:[l.toString(),r.toString()],q=u,n},U.toNumber=function(){return+this},U.toPower=U.pow=function(e,n){var t,r,i,o=l(e<0?-e:+e),u=this;if(null!=n&&(L=23,n=new J(n)),!G(e,-d,d,23,"exponent")&&(!isFinite(e)||o>d&&(e/=0)||parseFloat(e)!=e&&!(e=NaN))||0==e)return t=Math.pow(+u,e),new J(n?t%n:t);for(n?e>1&&u.gt(C)&&u.isInt()&&n.gt(C)&&n.isInt()?u=u.mod(n):(i=n,n=null):j&&(t=s(j/p+2)),r=new J(C);;){if(o%2){if(!(r=r.times(u)).c)break;t?r.c.length>t&&(r.c.length=t):n&&(r=r.mod(n))}if(!(o=l(o/2)))break;u=u.times(u),t?u.c&&u.c.length>t&&(u.c.length=t):n&&(u=u.mod(n))}return n?r:(e<0&&(r=C.div(r)),i?r.mod(i):t?ee(r,j,T):r)},U.toPrecision=function(e,n){return X(this,null!=e&&G(e,1,v,24,"precision")?0|e:null,n,24)},U.toString=function(e){var n,t=this,r=t.s,i=t.e;return null===i?r?(n="Infinity",r<0&&(n="-"+n)):n="NaN":(n=b(t.c),n=null!=e&&G(e,2,64,25,"base")?W(E(n,i),0|e,10,r):i<=k||i>=B?A(n,i):E(n,i),r<0&&t.c[0]&&(n="-"+n)),n},U.truncated=U.trunc=function(){return ee(new J(this),this.e+1,1)},U.valueOf=U.toJSON=function(){var e,n=this,t=n.e;return null===t?n.toString():(e=b(n.c),e=t<=k||t>=B?A(e,t):E(e,t),n.s<0?"-"+e:e)},U.isBigNumber=!0,null!=n&&J.config(n),J}()).default=o.BigNumber=o,void 0===(r=function(){return o}.call(n,t,n,e))||(e.exports=r)}()}}]);