"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[4367],{4214:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=t(4848),i=t(8453);const c={},s=void 0,o={id:"javascript\u76f8\u5173/input\u4e0a\u4f20",title:"input\u4e0a\u4f20",description:"\u5c01\u88c5\u4e00\u4e2a\u4e0a\u4f20\u7c7b",source:"@site/docs/javascript\u76f8\u5173/input\u4e0a\u4f20.md",sourceDirName:"javascript\u76f8\u5173",slug:"/javascript\u76f8\u5173/input\u4e0a\u4f20",permalink:"/guohang-blog-site/docs/javascript\u76f8\u5173/input\u4e0a\u4f20",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript\u76f8\u5173/input\u4e0a\u4f20.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"XHR",permalink:"/guohang-blog-site/docs/javascript\u76f8\u5173/XHR"},next:{title:"webSorket",permalink:"/guohang-blog-site/docs/javascript\u76f8\u5173/webSorket"}},a={},l=[{value:"\u5c01\u88c5\u4e00\u4e2a\u4e0a\u4f20\u7c7b",id:"\u5c01\u88c5\u4e00\u4e2a\u4e0a\u4f20\u7c7b",level:3}];function u(n){const e={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h3,{id:"\u5c01\u88c5\u4e00\u4e2a\u4e0a\u4f20\u7c7b",children:"\u5c01\u88c5\u4e00\u4e2a\u4e0a\u4f20\u7c7b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'class fileInstance {\r\n  constructor(config) {\r\n    // \u9a8c\u8bc1config\u53c2\u6570\r\n    if (!config || typeof config.accept !== "string") {\r\n      throw new Error("Invalid configuration provided.");\r\n    }\r\n    this.accept = config.accept;\r\n    this.inputDom = null;\r\n    this.callbacks = {\r\n      change: [],\r\n    };\r\n  }\r\n\r\n  createInputElement() {\r\n    return new Promise((resolve) => {\r\n      // \u5982\u679c\u5df2\u5b58\u5728input\u5143\u7d20\uff0c\u5219\u91cd\u7528\uff0c\u5426\u5219\u521b\u5efa\u65b0\u7684\r\n      if (this.inputDom) {\r\n        this.inputDom.value = ""; // \u6e05\u7a7a\u503c\u4ee5\u5141\u8bb8\u91cd\u65b0\u9009\u62e9\u6587\u4ef6\r\n        resolve();\r\n        return;\r\n      }\r\n\r\n      const input = document.createElement("input");\r\n      input.type = "file";\r\n      input.accept = this.accept;\r\n      input.style.display = "none";\r\n\r\n      input.addEventListener("change", (e) => {\r\n        const files = e.target.files;\r\n        // \u68c0\u67e5\u662f\u5426\u6709\u6587\u4ef6\u88ab\u9009\u62e9\r\n        if (files.length > 0) {\r\n          const file = files[0];\r\n          this.callbacks.change.forEach((fn) => fn(file));\r\n        }\r\n        this.inputDom.value = ""; // \u6e05\u7a7a\u503c\u4ee5\u5141\u8bb8\u91cd\u65b0\u9009\u62e9\u6587\u4ef6\r\n      });\r\n\r\n      this.inputDom = input;\r\n      document.body.appendChild(input);\r\n      resolve();\r\n    });\r\n  }\r\n\r\n  click() {\r\n    console.log("click");\r\n    // \u786e\u4fddinputDom\u5df2\u7ecf\u521b\u5efa\r\n    this.createInputElement().then(() => {\r\n      if (this.inputDom) {\r\n        this.inputDom.click();\r\n      }\r\n    });\r\n  }\r\n\r\n  addEventListener(event, callback) {\r\n    if (this.callbacks[event]) {\r\n      this.callbacks[event].push(callback);\r\n    } else {\r\n      // \u4f7f\u7528Promise\u62d2\u7edd\u800c\u4e0d\u662f\u629b\u51fa\u9519\u8bef\uff0c\u4ee5\u63d0\u4f9b\u66f4\u7075\u6d3b\u7684\u9519\u8bef\u5904\u7406\r\n      return Promise.reject(new Error(`Event \'${event}\' is not supported.`));\r\n    }\r\n    return Promise.resolve();\r\n  }\r\n\r\n  removeInputDom() {\r\n    if (this.inputDom) {\r\n      document.body.removeChild(this.inputDom);\r\n      this.inputDom = null;\r\n      // \u8fd9\u91cc\u53ef\u4ee5\u8fdb\u4e00\u6b65\u6e05\u7406callbacks\u4e2d\u7684\u5f15\u7528\uff0c\u907f\u514d\u5185\u5b58\u6cc4\u6f0f\r\n      // \u4f8b\u5982\uff0c\u5982\u679c\u6709\u7279\u5b9a\u903b\u8f91\u6765\u89e3\u9664\u8fd9\u4e9b\u5f15\u7528\r\n    }\r\n  }\r\n\r\n  changeInputAcceptAttrs(accept) {\r\n    if (this.inputDom) {\r\n      this.inputDom.setAttribute("accept", accept);\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'const btn = document.getElementById("btn");\r\nconst FileInstance = new fileInstance({\r\n  accept: "image/*",\r\n});\r\n\r\nFileInstance.createInputElement();\r\n\r\nFileInstance.addEventListener("change", (file) => {\r\n  // console.log(file);\r\n  const fileReader = new FileReader();\r\n  fileReader.readAsDataURL(file);\r\n  fileReader.onload = (e) => {\r\n    const img = document.createElement("img");\r\n    img.src = e.target.result;\r\n    document.body.appendChild(img);\r\n  };\r\n});\r\n\r\nbtn.addEventListener("click", () => {\r\n  FileInstance.click();\r\n});\n'})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>o});var r=t(6540);const i={},c=r.createContext(i);function s(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);