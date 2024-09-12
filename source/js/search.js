
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  var modal = document.getElementById('search-modal');

  // 設置 JSON 文件的路徑
  const searchDataUrl = '/hexo-theme-animal-site/search.json';
  // const searchDataUrl = '/search.json';

  // 載入 JSON 數據
  fetch(searchDataUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('網絡錯誤，無法加載 search.json');
    }
    return response.json();
  })
  .then(posts => {
    console.log(posts); // 確認 posts 的內容

    function performSearch(query) {
      searchResults.innerHTML = ''; // 清空之前的搜尋結果

      const results = posts.filter(post => {
        // 檢查 title 是否存在並且是字串
        if (post.title && typeof post.title === 'string') {
          return post.title.toLowerCase().includes(query.toLowerCase());
        }
        return false;
      });

      if (results.length === 0) {
        searchResults.innerHTML = '<p>沒有找到匹配的文章。</p>';
      } else {
        results.forEach(result => {
          const resultElement = document.createElement('div');
          resultElement.innerHTML = `<a href="${result.url}">${result.title}</a>`;
          searchResults.appendChild(resultElement);
        });
      }
    }

    document.getElementById('search-button').addEventListener('click', function() {
      const query = searchInput.value.trim();
      modal.style.display = 'flex';
      setTimeout(() => {
        modal.classList.add('show');
      }, 10); // 小延遲以觸發動畫
      if (query) {
        performSearch(query);
      }
    });
    
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        document.getElementById('search-button').click();
      }
    });

    document.getElementById('search-close').addEventListener('click', function() {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300); // 等待動畫完成後再隱藏
    });
    // 點擊彈跳視窗外部關閉彈跳視窗
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  })
  .catch(error => console.error('搜尋資料載入錯誤:', error));

});
