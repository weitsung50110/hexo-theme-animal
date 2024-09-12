// scripts.js
document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.getElementById('open-btn');
  const closeBtn = document.getElementById('close-btn');
  // const mainContent = document.getElementById('main-content');
  const bodyElement = document.querySelector('body');

  // 檢查是否在桌面模式
    function isDesktop() {
        return window.innerWidth >= 768;
    }

    function updateLayout() {
        if (isDesktop()) {
            // 在桌面模式下，推動主內容區域
            bodyElement.style.marginLeft = sidebar.style.left === '0px' ? '250px' : '0';
        } else {
            // 在手機模式下，確保主內容區域不變
            bodyElement.style.marginLeft = '0';
        }
    }


    
    // 檢查是否存在特定元素來決定是否顯示側邊欄
    function shouldShowSidebar() {
        return document.getElementById('home') !== null;
    }

    if (isDesktop() && shouldShowSidebar()) {
        // 在桌面模式下，推動主內容區域
        sidebar.style.left = '0'; // 顯示側邊欄
        bodyElement.style.marginLeft = sidebar.style.left === '0px' ? '250px' : '0';
    } 




    openBtn.addEventListener('click', function() {
        sidebar.style.left = '0'; // 顯示側邊欄
        if (isDesktop()) {
            bodyElement.style.marginLeft = '250px'; // 推動主內容區域
        }
    });

    closeBtn.addEventListener('click', function() {
        sidebar.style.left = '-250px'; // 隱藏側邊欄
        updateLayout(); // 更新主內容區域的 margin-left
    });

    // 當視窗大小改變時更新布局
    window.addEventListener('resize', updateLayout);
});
