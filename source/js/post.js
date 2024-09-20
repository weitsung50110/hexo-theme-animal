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
            // alert('Code copied to clipboard!');
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