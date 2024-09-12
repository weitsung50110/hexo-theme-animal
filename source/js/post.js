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