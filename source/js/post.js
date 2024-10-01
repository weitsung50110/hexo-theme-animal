document.addEventListener('DOMContentLoaded', function() {
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(block => {
      const button = document.createElement('button');
      button.textContent = 'Copy';
      button.className = 'copy-button';
      block.parentElement.style.position = 'relative';
      block.parentElement.appendChild(button);

      button.addEventListener('click', () => {
          const range = document.createRange();
          range.selectNode(block);
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
          document.execCommand('copy');
          window.getSelection().removeAllRanges();
      });

      // 隱藏按鈕
      button.style.display = 'none';

      // 當 hover 時顯示按鈕
      block.parentElement.addEventListener('mouseenter', () => {
          button.style.display = 'block';
      });

      block.parentElement.addEventListener('mouseleave', () => {
          button.style.display = 'none';
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const tables = document.querySelectorAll('article table');
  tables.forEach(table => {
    const container = document.createElement('div');
    container.className = 'table-container';
    table.parentNode.insertBefore(container, table);
    container.appendChild(table);
  });
});

// 當你使用 > 符號來創建引用時，Markdown 轉換器會自動將這些內容轉換成<blockquote>標籤。
document.addEventListener("DOMContentLoaded", function() {
  const quotes = document.querySelectorAll("blockquote");
  quotes.forEach(quote => {
      quote.classList.add("custom-quote");
  });
});

//查找 pre 標籤中的文本並標記含有引號的部分，以便應用自定義的顏色和樣式。
document.addEventListener("DOMContentLoaded", function() {
const preElements = document.querySelectorAll('pre code');

preElements.forEach(pre => {
  let html = pre.innerHTML;

  // 高亮字串
  html = html.replace(/(['"])(.*?)\1/g, '<span class="highlight-string">$&</span>');

  // 高亮數字
  html = html.replace(/\b\d+(\.\d+)?\b/g, '<span class="highlight-number">$&</span>');

  // 高亮註解（示例，根據語言不同可以調整）
  html = html.replace(/(\/\/.*|\/\*[\s\S]*?\*\/)/g, '<span class="highlight-comment">$&</span>');
  html = html.replace(/#.*$/gm, '<span class="highlight-comment">$&</span>'); // 單行註解
  html = html.replace(/('''[\s\S]*?'''|"""[\s\S]*?""")/g, '<span class="highlight-comment">$&</span>'); // 多行註解
  
  // 高亮括號
  html = html.replace(/([(){}[\]])/g, '<span class="highlight-bracket">$&</span>');

  pre.innerHTML = html;
});
});
