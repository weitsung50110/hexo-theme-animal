## hexo_theme_basic
This is a very basic theme, but it already have lots of functions.

Visit preview site: [瀏覽網站](https://weitsung50110.github.io/hexo-theme-animal-site/)

https://weitsung50110.github.io/hexo-theme-animal-site/

https://github.com/weitsung50110/hexo-theme-animal-site

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

## 重點 - 需要設定網站的 _config.yml
**本地測試使用**

url請放你 localhost 的網址

    # URL
    url: http://localhost:4000
  
**上架到github page**

url請放你github page 的網址

    # URL
    url: https://weitsung50110.github.io/hexo_theme_basic/demo
    

主題選你創的名稱

    # Extensions
    theme: hexo-theme-animal

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

## 加入文章搜尋功能 Search function
需要安裝 `hexo-generator-searchdb` 插件，這個插件可以生成一個 `.json` 檔案作為搜尋資料庫

        npm install hexo-generator-searchdb --save

打開你的 Hexo 根目錄下的 `_config.yml`，加入以下配置來啟用 JSON 格式的搜尋資料：

        search:
          path: search.json
          field: post
          content: true

* `path: search.json` 指定生成 `.json` 檔案。
* `field: post` 指定只索引文章。如果你還想要索引頁面，將它改為 `all`。
* `content: true` 指定是否包括文章的內容。若只需要標題和摘要，可將其設為 `false`。

在`/source/js/search.js`中有一個，路徑記得要修改~ 因為我的專案名字是在`hexo-theme-animal-site`，所以需要加上/hexo-theme-animal-site才能夠抓到。<br>
hexo-theme-animal-site是我自己設定的專案名字，你需要根據你創建的專案名字來進行更改。

        // 設置 JSON 文件的路徑
        const searchDataUrl = '/hexo-theme-animal-site/search.json';

若沒有改的話會出現以下錯誤

        GET https://weitsung50110.github.io/search.json 404 (Not Found)
        (anonymous) @ search.js:9
        search.js:54 搜尋資料載入錯誤: Error: 網絡錯誤，無法加載 search.json
            at search.js:12:13
        (anonymous) @ search.js:54
        Promise.catch
        (anonymous) @ search.js:54

因為預設會從`https://weitsung50110.github.io`抓取search.json，但我是在repo中架網站，所以路徑會變成`https://weitsung50110.github.io/hexo-theme-animal-site/search.json`。
可以自己輸入`https://weitsung50110.github.io/hexo-theme-animal-site/search.json`之類的網址去看看會不會出現.json檔案!!
