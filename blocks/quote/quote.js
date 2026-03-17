export default function decorate(block) {
  const [quoteWrapper] = block.children;
  console.log('block', block);
  console.log('quoteWrapper', quoteWrapper);
  console.log('quoteWrapper.textContent', quoteWrapper.textContent);

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);
}
