export default function TagPreview() {
  const tagSelect = document.querySelector('#tag');
  const tagPreview = document.querySelector('#tag-preview');

  const tagColors = {
    Technology: 'steelblue',
    Software: 'coral',
    Business: 'green',
    Health: 'red',
    Education: 'purple',
    Inventions: 'orange',
  };

  tagSelect.addEventListener('change', () => {
    const selectedTag = tagSelect.value;

    if (!selectedTag) {
      tagPreview.style.display = 'none';
      return;
    }

    tagPreview.textContent = selectedTag;
    tagPreview.style.backgroundColor = tagColors[selectedTag];
    tagPreview.style.color = '#fff';
    tagPreview.style.display = 'block';
  });
}
