<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Bienvenue sur mon premier site !</h1>
    <p>Ce site est hébergé sur GitHub Pages 🎉</p>
  </header>

  <main>
    <section>
      <h2>À propos</h2>
      <p>Ceci est une simple page web créée avec HTML et CSS.(par moi meme)</p>
    </section>
  </main>
            <footer>
        <p>© 2025 - Monsite-adam</p>
        <section id="contact">
          <h2>Contact</h2>
          <form action="https://formspree.io/f/xkgrjznr" method="POST">
            <label for="email">Votre email:</label>
            <input type="email" id="email" name="email" required>
            body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }
  
  header {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
  }
  
  main {
    padding: 20px;
  }
  
  footer {
    background-color: #eee;
    text-align: center;
    padding: 10px;
  }
    h1 {
    animation: fadeIn 2s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
            
            <label for="message">Votre message:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Envoyer</button>
          </form>
        </section>
      </footer>
    </section>
  </footer>
</body>
</html>
<nav>
  <ul style="list-style: none; display: flex; justify-content: center; padding: 0; background-color: #000000;">
    <li style="margin: 0 15px;"><a href="#about" style="color: white; text-decoration: none;">À propos</a></li>
    <li style="margin: 0 15px;"><a href="#contact" style="color: white; text-decoration: none;">Contact</a></li>
  </ul>
</nav>
