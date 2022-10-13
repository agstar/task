"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[80],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={slug:"/contributing/",sidebar_position:7},u="Contributing",l={unversionedId:"contributing",id:"contributing",title:"Contributing",description:"Contributions to Task are very welcome, but we ask that you read this document",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing/",permalink:"/contributing/",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"/contributing/",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Community",permalink:"/community/"},next:{title:"Releasing",permalink:"/releasing/"}},c={},d=[{value:"Before you start",id:"before-you-start",level:2},{value:"1. Setup",id:"1-setup",level:2},{value:"2. Making changes",id:"2-making-changes",level:2},{value:"Running your changes",id:"running-your-changes",level:3},{value:"Updating documentation",id:"updating-documentation",level:3},{value:"Writing tests",id:"writing-tests",level:3},{value:"3. Committing your code",id:"3-committing-your-code",level:2},{value:"4. Submitting a PR",id:"4-submitting-a-pr",level:2},{value:"FAQ",id:"faq",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"Contributions to Task are very welcome, but we ask that you read this document\nbefore submitting a PR."),(0,i.kt)("h2",{id:"before-you-start"},"Before you start"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Check existing work")," - Is there an existing PR? Are there issues discussing\nthe feature/change you want to make? Please make sure you consider/address these\ndiscussions in your work."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Backwards compatibility")," - Will your change break existing Taskfiles? It is\nmuch more likely that your change will merged if it backwards compatible. Is\nthere an approach you can take that maintains this compatibility? If not,\nconsider opening an issue first so that API changes can be discussed before you\ninvest you time into a PR.")),(0,i.kt)("h2",{id:"1-setup"},"1. Setup"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Go")," - Task is written in ",(0,i.kt)("a",{parentName:"li",href:"https://go.dev"},"Go"),". We always support the latest two major Go\nversions, so make sure your version is recent enough."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Node.js")," - ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," is used to host Task's documentation server and is\nrequired if you want to run this server locally."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Yarn")," - ",(0,i.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn")," is the Node.js package manager used by Task.")),(0,i.kt)("h2",{id:"2-making-changes"},"2. Making changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Code style")," - Try to maintain the existing code style where possible and\nensure that code is formatted by ",(0,i.kt)("inlineCode",{parentName:"li"},"gofmt"),". We use ",(0,i.kt)("inlineCode",{parentName:"li"},"golangci-lint")," in our CI to\nenforce a consistent style and best-practise. There's a ",(0,i.kt)("inlineCode",{parentName:"li"},"lint")," command in\nthe Taskfile to run this locally."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Documentation")," - Ensure that you add/update any relevant documentation. See\nthe ",(0,i.kt)("a",{parentName:"li",href:"#updating-documentation"},"updating documentation")," section below."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tests")," - Ensure that you add/update any relevant tests and that all tests\nare passing before submitting the PR. See the ",(0,i.kt)("a",{parentName:"li",href:"#writing-tests"},"writing tests"),"\nsection below.")),(0,i.kt)("h3",{id:"running-your-changes"},"Running your changes"),(0,i.kt)("p",null,"To run Task with working changes, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"go run ./cmd/task"),". To run a\ndevelopment build of task against a test Taskfile in ",(0,i.kt)("inlineCode",{parentName:"p"},"testdata"),", you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"go\nrun ./cmd/task --dir ./testdata/<my_test_dir> <task_name>"),"."),(0,i.kt)("h3",{id:"updating-documentation"},"Updating documentation"),(0,i.kt)("p",null,"Task uses ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus")," to host a documentation server. This can be setup and run\nlocally by using ",(0,i.kt)("inlineCode",{parentName:"p"},"task docs:setup")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"task docs:start")," respectively (requires\n",(0,i.kt)("inlineCode",{parentName:"p"},"nodejs")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),"). All content is written in Markdown and is located in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"docs/docs")," directory. All Markdown documents should have an 80 character line\nwrap limit."),(0,i.kt)("p",null,"When making a change, consider whether a change to the ",(0,i.kt)("a",{parentName:"p",href:"/usage/"},"Usage Guide"),"\nis necessary. This document contains descriptions and examples of how to use\nTask features. If you're adding a new feature, try to find an appropriate place\nto add a new section. If you're updating an existing feature, ensure that the\ndocumentation and any examples are up-to-date. Ensure that any examples follow\nthe ",(0,i.kt)("a",{parentName:"p",href:"/styleguide/"},"Taskfile Styleguide"),"."),(0,i.kt)("p",null,"If you added a new command/flag, ensure that you add it to the ",(0,i.kt)("a",{parentName:"p",href:"/api/"},"API\nReference"),"."),(0,i.kt)("h3",{id:"writing-tests"},"Writing tests"),(0,i.kt)("p",null,"Most of Task's test are held in the ",(0,i.kt)("inlineCode",{parentName:"p"},"task_test.go")," file in the project root and\nthis is where you'll most likely want to add new ones too. Most of these tests\nalso have a subdirectory in the ",(0,i.kt)("inlineCode",{parentName:"p"},"testdata")," directory where any Taskfiles/data\nrequired to run the tests are stored."),(0,i.kt)("p",null,"When making a changes, consider whether new tests are required. These tests\nshould ensure that the functionality you are adding will continue to work in the\nfuture. Existing tests may also need updating if you have changed Task's\nbehaviour."),(0,i.kt)("h2",{id:"3-committing-your-code"},"3. Committing your code"),(0,i.kt)("p",null,"Try to write meaningful commit messages and avoid having too many commits on\nthe PR. Most PRs should likely have a single commit (although for bigger PRs it\nmay be reasonable to split it in a few). Git squash and rebase is your friend!"),(0,i.kt)("h2",{id:"4-submitting-a-pr"},"4. Submitting a PR"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Describe your changes")," - Ensure that you provide a comprehensive\ndescription of your changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Issue/PR links")," - Link any previous work such as related issues or PRs.\nPlease describe how your changes differ to/extend this work."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples")," - Add any examples that you think are useful to demonstrate the\neffect of your changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Draft PRs")," - If your changes are incomplete, but you would like to discuss\nthem, open the PR as a draft and add a comment to start a discussion. Using\ncomments rather than the PR description allows the description to be updated\nlater while preserving any discussions.")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"I want to contribute, where do I start?")),(0,i.kt)("p",null,"Take a look at the list of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/issues"},"open issues"),". We have a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"good first issue")," label for\nsimpler issues that are ideal for first time contributions."),(0,i.kt)("p",null,"All kinds of contributions are welcome, whether its a typo fix or a shiny new\nfeature. You can also contribute by upvoting/commenting on issues, helping to\nanswer questions or contributing to other ",(0,i.kt)("a",{parentName:"p",href:"/community/"},"community projects"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"I'm stuck, where can I get help?")),(0,i.kt)("p",null,"If you have questions, feel free to ask them in the ",(0,i.kt)("inlineCode",{parentName:"p"},"#help")," channel on our\n",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/6TY36E39UK"},"Discord server"),"."),(0,i.kt)("hr",null))}m.isMDXComponent=!0}}]);