(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{571:function(s,t,e){"use strict";e.r(t);var a=e(6),i=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"git-本地配置多个-ssh-公钥登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-本地配置多个-ssh-公钥登录"}},[s._v("#")]),s._v(" Git 本地配置多个 SSH 公钥登录")]),s._v(" "),e("h3",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),e("p",[s._v("在搭建博客的，同时需要把一个项目部署的 github 和 gitee 上，此时就需要一台电脑通过 ssh 登录多个 git 账号")]),s._v(" "),e("h3",{attrs:{id:"解决方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[s._v("#")]),s._v(" 解决方法")]),s._v(" "),e("ol",[e("li",[s._v("生成一个 github 的 ssh-key")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("ssh-keygen  -t  rsa  -C  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你的邮箱地址'")]),s._v("  -f  ~/.ssh/github_id_rsa\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("生成一个 gitee 的 ssh-key")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("ssh-keygen  -t  rsa  -C  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你的邮箱地址'")]),s._v("  -f  ~/.ssh/gitee_id_rsa\n")])])]),e("ul",[e("li",[s._v("创建 key 代码参数含义：\n"),e("ul",[e("li",[s._v("-t 指定密钥类型，默认是 rsa ，可以省略。")]),s._v(" "),e("li",[s._v("-C 设置注释文字，比如邮箱。")]),s._v(" "),e("li",[s._v("-f 指定密钥文件存储文件名。")])])])]),s._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[s._v("在目录～/.ssh 中创建一个名为 config 的文件，添加如下配置：")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("* Host值为域名或者ip(必填)；\n* HostName值为域名或者ip(非必须)；\n* User值可任意(非必须)\n\n# github\nHost github.com\nUser github\nPreferredAuthentications publickey\nIdentityFile ~/.ssh/id_rsa\n\n# gitee\nHost gitee.com\nHostName gitee.com\nUser gitee\nPreferredAuthentications publickey\nIdentityFile  ~/.ssh/gitee_id_rsa\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[e("p",[s._v("将 ssh-key 分别添加对应的 git 平台")])]),s._v(" "),e("li",[e("p",[s._v("在终端通过下面命令来测试")])])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@gitee.com\n")])])]),e("ul",[e("li",[s._v("以 gitee 为例，结果如下")])]),s._v(" "),e("img",{attrs:{src:s.$withBase("/img/115449.png")}})])}),[],!1,null,null,null);t.default=i.exports}}]);