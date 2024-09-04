
document.addEventListener('DOMContentLoaded', function () {
  // 取得下拉菜單和切換按鈕
  const navMenu = document.querySelector('.nav-menu');
  const menuButton = document.querySelector('.menu-button');
  const toggleButton = document.querySelector('#toggleButton');
  const socialSidebar = document.querySelector('.social-sidebar');

  socialSidebar.style.transform = 'translateX(100%)'; // 初始隐藏社交链接侧边栏

  // 初始化下拉菜單狀態
  navMenu.style.opacity = '0';
  navMenu.style.pointerEvents = 'none';

  // 點擊下拉菜單按鈕顯示/隱藏菜單
  menuButton.addEventListener('click', () => {
    if (navMenu.style.opacity === '0') {
      navMenu.style.opacity = '1';
      navMenu.style.pointerEvents = 'auto'; // 顯示時啟用點擊事件
    } else {
      navMenu.style.opacity = '0';
      navMenu.style.pointerEvents = 'none'; // 隱藏時禁用點擊事件
    }
  });

  // 點擊其他地方隱藏下拉菜單
  document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.style.opacity = '0';
      navMenu.style.pointerEvents = 'none';
    }
  });

  // 點擊 toggle 按鈕的行為
  toggleButton.addEventListener('click', () => {
    if (socialSidebar.style.transform === 'translateX(100%)') {
      socialSidebar.style.transform = 'translateX(0)';
    } else {
      socialSidebar.style.transform = 'translateX(100%)';
    }
  });
});
