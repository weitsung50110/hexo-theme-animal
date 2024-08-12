## hexo_theme_basic
This is a very basic theme, but it already have lots of functions.

Visit preview site: [瀏覽網站](https://weitsung50110.github.io/hexo_theme1/)

https://weitsung50110.github.io/hexo_theme1/

https://github.com/weitsung50110/hexo_theme1

This project use ejs as template.
- index.ejs
- layout.ejs
- post.ejs
- about.ejs

![](https://raw.githubusercontent.com/weitsung50110/hexo_theme_basic/main/github_img/a2.png)

利用 EJS ，將共用的 HTML 代碼（如頁眉、頁腳、導航條等）抽象成單獨的模板文件，

然後在主要模板中包含這些文件。這樣可以避免在每個頁面中重複寫相同的 HTML 結構。

## 重點 - 需要設定網站的 _config.yml
url請放你github page 的網址

    # URL
    url: https://weitsung50110.github.io/hexo_theme_basic/demo
    root: /hexo_theme_basic/demo

主題選你創的名稱

    # Extensions
    theme: wei-theme

路徑設定 - config.root代表你根目錄的概念，像本repo的根目錄是設定 `/hexo_theme_basic/demo`

    #script
    <script src="<%- config.root %>js/script.js"></script>

    #css
    <link rel="stylesheet" href="<%- config.root %>css/style.css">  

    #選單
    <ul>
          <li><a href="<%- config.root %>/">Home</a></li>
          <li><a href="<%- config.root %>/about">About</a></li>
    </ul>
    
## 需要設定主題的 _config.yml

    # _config.yml
    name: Wei Theme
    version: 1.0.0
    author: Weiberson weitsung50110
