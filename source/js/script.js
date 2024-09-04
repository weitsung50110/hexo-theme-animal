
document.addEventListener('DOMContentLoaded', function () {
  // 取得下拉菜單和切換按鈕
  const navMenu = document.querySelector('.nav-menu');
  const menuButton = document.querySelector('.menu-button');

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
  

  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  menuToggle.addEventListener('click', function() {
    // 切換菜單的顯示狀態
    mobileNav.classList.toggle('active');
  });
});
