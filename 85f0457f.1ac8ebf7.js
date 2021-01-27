(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,s(s({ref:t},p),{},{components:n})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(109)),c={id:"fetch",title:"Fetch",sidebar_label:"Fetch"},s={unversionedId:"fetch",id:"fetch",isDocsHomePage:!1,title:"Fetch",description:"The Fetch API provides an interface for fetching resources (including across the network)",source:"@site/docs/fetch.md",slug:"/fetch",permalink:"/next-cli/docs/fetch",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/fetch.md",version:"current",sidebar_label:"Fetch",sidebar:"someSidebar",previous:{title:"This is Document Number 3",permalink:"/next-cli/docs/doc3"},next:{title:"Apollo GraphQL Support",permalink:"/next-cli/docs/apollo-graphql"}},i=[],p={toc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Fetch API provides an interface for fetching resources (including across the network)",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"See MDN Docs ","\u2192")),Object(a.b)("p",null,"Next.js has ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://nextjs.org/blog/next-9-4#improved-built-in-fetch-support"}),"built-in fetch support")," both in browser and node environment."),Object(a.b)("p",null,"It can be used both in your components and Next.js server-side methods."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="In your component"',title:'"In',your:!0,'component"':!0}),"export const FetchExample = () => {\n    const [error, setError] = useState(null);\n    const [isLoaded, setIsLoaded] = useState(false);\n    const [data, setData] = useState([]);\n\n    useEffect(() => {\n        fetch(API_URL)\n            .then(res => res.json())\n            .then(\n                res => {\n                    setData(res);\n                    setIsLoaded(true);\n                },\n                // Note: it's important to handle errors here\n                // instead of a catch() block so that we don't swallow\n                // exceptions from actual bugs in components.\n                err => {\n                    setIsLoaded(true);\n                    setError(err);\n                },\n            );\n    }, []);\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="Next.js getStaticProps"',title:'"Next.js','getStaticProps"':!0}),"export async function getStaticProps() {\n  // fetch no longer needs to be imported from isomorphic-unfetch\n  const res = await fetch('https://.../posts')\n  const posts = await res.json()\n\n  return {\n    props: {\n      posts\n    }\n  }\n}\n\nfunction Blog({ posts }) {\n  // Render posts...\n}\n\nexport default Blog\n")),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Consider using ",Object(a.b)("inlineCode",{parentName:"p"},"react-query")," or ",Object(a.b)("inlineCode",{parentName:"p"},"swr")," plugins to handle client-side requests.",Object(a.b)("br",{parentName:"p"}),"\n","They can be used with promise-based methods (fetch, axios..)"))))}l.isMDXComponent=!0}}]);