## hexo-theme-animal
This is a very basic theme, but it already have lots of functions.

Visit preview site: [瀏覽網站](https://weitsung50110.github.io/hexo_theme1/)

https://weitsung50110.github.io/hexo_theme1/

https://github.com/weitsung50110/hexo_theme1

This project use ejs as template.
- index.ejs
- layout.ejs
- post.ejs
- about.ejs

![](https://raw.githubusercontent.com/weitsung50110/hexo-theme-animal/main/github_img/a6.png)

利用 EJS ，將共用的 HTML 代碼（如頁眉、頁腳、導航條等）抽象成單獨的模板文件，

然後在主要模板中包含這些文件。這樣可以避免在每個頁面中重複寫相同的 HTML 結構。

## 如何使用主題?
1. 請先把我的主題clone到本地。

        git clone https://github.com/weitsung50110/hexo-theme-animal.git

2. 並把主題放入你的部落格下面，路徑為`你的Blog`>>`themes`>>`hexo-theme-animal`
![](https://raw.githubusercontent.com/weitsung50110/hexo-theme-animal/main/github_img/a3.png)

## 重點 - 需要設定在hexo根目錄的 _config.yml
**本地測試使用**

url請放你 localhost 的網址

    # URL
    url: http://localhost:4000
  
**上架到github page**

url請放你github page 的網址

    # URL
    url: url: https://weitsung50110.github.io/hexo-theme-animal-site/
    

主題選你創的名稱

    # Extensions
    theme: hexo-theme-animal

路徑設定 - config.url是你在hexo根目錄的`_config.yml`中設定的url ; 關於url_for 函數的用途：請參考我的部落格。

    #script 在footer.ejs中
    <script src="<%- url_for('js/script.js') %>"></script>

    #css 在head.ejs中
    <link rel="stylesheet" href="<%- url_for('css/main.css') %>">

    #選單 在header.ejs中
    <ul class="nav-top">
        <li><a href="<%- config.url %>/"><%- __('menu.home') %></a></li>
        <li><a href="<%- config.url %>/about"><%- __('menu.about') %></a></li>
        <li><a href="<%- config.url %>/archives"><%- __('menu.archives') %></a></li>
    
## 可以客製化設定theme的 _config.yml

    # _config.yml
    name: hexo-theme-animal
    version: 1.0.0
    
    author: Weiberson Chang (weitsung50110)
    title: Weiberson Chang Template
    
    custom:
      logo: /images/2.png
      home_intro_img: /images/1.png
      wellcome1: "歡迎來到Weiberson Chang的網站！"
      wellcome2: "在這裡你可以看到我做的模板，想更認識我也可以來我Github或Medium唷。"
    
    menu:
      GitHub1: "https://github.com/weitsung50110"
      GitHub2: "GitHub"
      Medium1: "https://medium.com/@weiberson"
      Medium2: "Medium"

這裡都可以自由更改成你想要的內容。

## 語言選擇
目前提供中文和英文

`language: cn`和`language: en`，未來可能還會增加(?) 請去網站的_config.yml進行設定。
