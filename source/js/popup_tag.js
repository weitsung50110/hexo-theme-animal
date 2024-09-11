
document.addEventListener('DOMContentLoaded', function () {
  // 取得切換按鈕、彈跳視窗和關閉按鈕
  const modal = document.querySelector('#modal');
  const closeButton = document.querySelector('#closeButton');
  const tag_toggleButton = document.querySelector('#tag_toggleButton');

  // 顯示彈跳視窗
  tag_toggleButton.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  // 關閉彈跳視窗
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // 點擊彈跳視窗外部關閉彈跳視窗
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
