
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="code/mon-site/code/test1/style.css">
</head>
<body>
  <header>
    <h1>Bienvenue sur mon premier site !</h1>
    <p>Ce site est hébergé sur GitHub Pages 🎉</p>
    <p>je suis le meilleur !!!!!</p>
  </header>

  <main>
    <section>
      <h2>À propos</h2>
      <p>Ceci est une simple page web créée avec HTML et CSS.</p>
      <p>Je suis le meilleur bande de pd!!!</p>
      <p>le site marche, shalla</p>
        <p>© 2025 - Monsite-adam</p>
        <section id="contact">
          <h2>Contact</h2>
        <form action="https://formspree.io/f/xkgrjznr" method="POST">
  <label for="nom">Nom :</label>
  <input type="text" id="nom" name="nom" required>

  <!-- Choix de la méthode de contact -->
  <label>Méthode de contact :</label><br>
  <input type="radio" id="email_option" name="contact_method" value="email" checked>
  <label for="email_option">Email</label><br>
  
  <input type="radio" id="phone_option" name="contact_method" value="telephone">
  <label for="phone_option">Numéro de téléphone</label><br>

  <!-- Champ email -->
  <div id="email_field" class="contact-field">
    <label for="email">Email :</label>
    <input type="email" id="email" name="_replyto" placeholder="Entrez votre email">
  </div>

  <!-- Champ téléphone -->
  <div id="phone_field" class="contact-field" style="display: none;">
    <label for="telephone">Numéro de téléphone :</label>
    <input type="tel" id="telephone" name="telephone" placeholder="Entrez votre numéro">
  </div>

  <!-- Zone de texte pour le message -->
  <label for="message">Message :</label>
  <textarea id="message" name="message" rows="5" placeholder="Écrivez votre message ici..." required></textarea>

  <button type="submit">Envoyer</button>
</form>

<script>
  // Script pour afficher/masquer les champs en fonction du choix
  const emailOption = document.getElementById('email_option');
  const phoneOption = document.getElementById('phone_option');
  const emailField = document.getElementById('email_field');
  const phoneField = document.getElementById('phone_field');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('telephone');

  function toggleFields() {
    if (emailOption.checked) {
      emailField.style.display = 'block';
      phoneField.style.display = 'none';
      emailInput.required = true;
      phoneInput.required = false;
    } else {
      emailField.style.display = 'none';
      phoneField.style.display = 'block';
      emailInput.required = false;
      phoneInput.required = true;
    }
  }

  emailOption.addEventListener('change', toggleFields);
  phoneOption.addEventListener('change', toggleFields);

  // Initialiser les champs correctement
  toggleFields();
</script>

