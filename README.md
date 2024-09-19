## hexo-theme-animal
This is a very basic theme, but it already have lots of functions.

Visit preview site: [瀏覽網站](https://weitsung50110.github.io/hexo-theme-animal-site/)

https://weitsung50110.github.io/hexo-theme-animal-site/

https://github.com/weitsung50110/hexo-theme-animal-site

This project use ejs as template.
### 樹狀圖
    my-blog/
    └── themes/
    └── themes/hexo-theme-animal/
            └── layout/
            ├── _partial/
            │   ├── footer.ejs
            │   ├── head.ejs
            │   ├── header.ejs
            │   ├── popup_tag.ejs
            │   ├── search-results.ejs
            │   └── sidebar.ejs
            ├── archive.ejs
            ├── category.ejs
            ├── index.ejs
            ├── layout.ejs
            ├── post.ejs
            └── tag.ejs

#### 目錄Table of Contents
- [安裝的插件版本](#安裝的插件版本)
- [如何使用主題?](#如何使用主題)
- [重點 - 需要設定在hexo根目錄的_config.yml](#重點---需要設定在hexo根目錄的_configyml)
- [可以客製化設定theme的_config.yml](#可以客製化設定theme的_configyml)
- [語言選擇](#語言選擇)
- [加入文章搜尋功能 Search function](#加入文章搜尋功能-search-function)
- [加入新的page - about](#加入新的page---about)
- [SEO - 提供 Sitemap](#SEO---提供-Sitemap)

![](https://raw.githubusercontent.com/weitsung50110/hexo-theme-animal/main/github_img/a7.png)

利用 EJS ，將共用的 HTML 代碼（如頁眉、頁腳、導航條等）抽象成單獨的模板文件，

然後在主要模板中包含這些文件。這樣可以避免在每個頁面中重複寫相同的 HTML 結構。

## 安裝的插件版本
### Node.js 版本，我裡面是安裝20.16.0版本
我也有上傳到Docker hub，有需要可以直接下載! https://hub.docker.com/repository/docker/weitsung50110/hexo-theme/tags

    docker pull weitsung50110/hexo-theme:v1.0

| REPOSITORY | TAG     | IMAGE ID      | CREATED      | SIZE  |
|------------|---------|---------------|--------------|-------|
| node       | 20.16.0 | 1a8e51cfa7a5  | 6 weeks ago  | 1.1GB |

### npm 依賴項，npm裡面還有安裝這些依賴
以下是 `npm list --depth=0` 輸出的依賴項列表：

- **Hexo 及相關插件**
  - `hexo` @7.3.0
  - `hexo-generator-archive` @2.0.0
  - `hexo-generator-category` @2.0.0
  - `hexo-generator-index` @4.0.0
  - `hexo-generator-searchdb` @1.4.1
  - `hexo-generator-tag` @2.0.0
  - `hexo-renderer-ejs` @2.0.0
  - `hexo-renderer-marked` @6.3.0
  - `hexo-renderer-stylus` @3.0.1
  - `hexo-server` @3.0.0
  - `hexo-theme-landscape` @1.0.0

- **Moment.js 及其時區支持**
  - `moment-timezone` @0.5.45

## 如何使用主題?
1. 請先把我的主題clone到本地。

        git clone https://github.com/weitsung50110/hexo-theme-animal.git

2. 並把主題放入你的部落格下面，路徑為`你的Blog`>>`themes`>>`hexo-theme-animal`
![](https://raw.githubusercontent.com/weitsung50110/hexo-theme-animal/main/github_img/a3.png)

## 重點 - 需要設定在hexo根目錄的_config.yml
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
    
## 可以客製化設定theme的_config.yml

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

## 加入新的page - about

        hexo new page "about"
        
輸入指令後會產生`index.md`，我在裡面的長相是如下，我的layout沒有再特別做一個`page.ejs`，而是直接沿用`post.ejs`。

        ---
        title: about
        date: 2024-08-08 06:12:49
        author: Weiberson
        layout: post
        ---

文章原始的hexo格式放在這個repo中，可以參考!
https://github.com/weitsung50110/hexo-theme-animal_repo

## 文章的時區設定
希望在 Hexo 的模板中顯示正確的日期時間格式，並且希望顯示特定的時區（例如台北時間）

1 確保你已經安裝了 moment-timezone

      npm install moment-timezone --save

2 修改 EJS 模板的post.ejs

      <article class="post">
        <h1><%= page.title %></h1>
        <!-- <p class="post-date"><%- __('post.date') %><%= page.date %></p> -->
        <p class="post-date"><%- __('post.date') %><%= moment(page.date).tz('Asia/Taipei').format('YYYY-MM-DD HH:mm:ss') %></p>

如果你要更改成其他的時區，更改`tz('Asia/Taipei')`就好了~

## SEO - 提供 Sitemap
使用 Hexo 的內建功能生成 Sitemap，這樣搜尋引擎更容易找到你的頁面：

    npm install hexo-generator-sitemap --save

註冊並提交你的網站至 Google Search Console，這樣可以跟蹤你的網站表現，並獲得搜尋引擎的回饋。
