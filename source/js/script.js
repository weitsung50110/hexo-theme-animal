
document.addEventListener('DOMContentLoaded', function () {
  const navMenu = document.querySelector('.nav-menu');
  const menuButton = document.querySelector('.menu-button');

  // 點擊下拉菜單按鈕顯示/隱藏菜單
  menuButton.addEventListener('click', (event) => {
    event.stopPropagation(); // 阻止事件冒泡
    navMenu.classList.toggle('show'); // 切換顯示狀態
  });

  // 點擊其他地方隱藏下拉菜單
  document.addEventListener('click', () => {
    navMenu.classList.remove('show'); // 隱藏選單
  });
  

  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  menuToggle.addEventListener('click', function() {
    // 切換菜單的顯示狀態
    mobileNav.classList.toggle('active');
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

  // 當頁面滾動時顯示/隱藏按鈕
  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) { // 當滾動超過 300px 顯示按鈕
          scrollToTopBtn.style.display = 'block';
      } else {
          scrollToTopBtn.style.display = 'none';
      }
  });

  // 當點擊按鈕時，滾動到頁面頂部
  scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});


//cursor滑鼠的特效
document.addEventListener('mousemove', function(e) {
  const cursorEffect = document.getElementById('cursor-effect');
  const scrollbarWidth = 12; // 根據你的滾動條寬度設置
  const proximityToBottom = 50; // 接近底部的距離閾值

  // 檢查滑鼠是否在滾動條範圍內
  const isOverScrollbar = (e.pageX > window.innerWidth - scrollbarWidth - 50);
  // 檢查滑鼠是否接近網頁底部
  const isNearBottom = (window.innerHeight - e.pageY < proximityToBottom);

  if (isOverScrollbar || isNearBottom) {
    cursorEffect.style.opacity = 0; // 隱藏特效
  } else {
    cursorEffect.style.left = (e.pageX + 3) + 'px'; // 向右偏移 3 像素
    cursorEffect.style.top = (e.pageY + 10) + 'px'; // 向下偏移 10 像素
    cursorEffect.style.opacity = 1; // 顯示特效
  }
});

// 當滑鼠移開時隱藏特效
document.addEventListener('mouseleave', function() {
  const cursorEffect = document.getElementById('cursor-effect');
  cursorEffect.style.opacity = 0; // 隱藏特效
});
