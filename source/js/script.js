document.addEventListener('DOMContentLoaded', function () {
  // 初始隐藏下拉菜单和社交链接侧边栏
  const navMenu = document.querySelector('.nav-menu');
  const socialSidebar = document.querySelector('.social-sidebar');

  navMenu.style.opacity = '0'; // 初始透明度为0，隐藏菜单
  socialSidebar.style.transform = 'translateX(100%)'; // 初始隐藏社交链接侧边栏

  // 滚动到特定部分
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // 下拉菜单
  const menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', () => {
    if (navMenu.style.opacity === '0') {
      navMenu.style.opacity = '1';
      navMenu.style.pointerEvents = 'auto'; // 显示时启用点击事件
    } else {
      navMenu.style.opacity = '0';
      navMenu.style.pointerEvents = 'none'; // 隐藏时禁用点击事件
    }
  });

  // 社交链接侧边栏
  const toggleButton = document.querySelector('#toggleButton');

  toggleButton.addEventListener('click', () => {
    if (socialSidebar.style.transform === 'translateX(100%)') {
      socialSidebar.style.transform = 'translateX(0)';
    } else {
      socialSidebar.style.transform = 'translateX(100%)';
    }
  });

});
