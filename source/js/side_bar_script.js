
document.addEventListener('DOMContentLoaded', function () {
  // 取得切換按鈕
  const toggleButton = document.querySelector('#toggleButton');
  const toggleButton2 = document.querySelector('#toggleButton2');
  const socialSidebar = document.querySelector('.social-sidebar');

  socialSidebar.style.transform = 'translateX(100%)'; // 初始隐藏社交链接侧边栏
  
  // 點擊 toggle 按鈕的行為
  toggleButton.addEventListener('click', () => {
    if (socialSidebar.style.transform === 'translateX(100%)') {
      socialSidebar.style.transform = 'translateX(0)';
    } else {
      socialSidebar.style.transform = 'translateX(100%)';
    }
  });

  toggleButton2.addEventListener('click', () => {
    if (socialSidebar.style.transform === 'translateX(100%)') {
      socialSidebar.style.transform = 'translateX(0)';
    } else {
      socialSidebar.style.transform = 'translateX(100%)';
    }
  });
});
