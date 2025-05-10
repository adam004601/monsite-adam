<script>
  function filterCategory(category) {
    const articles = document.querySelectorAll('.article');
    articles.forEach(article => {
      if (category === 'all' || article.classList.contains(category)) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });
  }
</script>
