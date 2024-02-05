<template>
    <footer>
      <p>&copy; 2023 Björn Ettelman</p>
      <ul>
        <li><a href="https://github.com/ettelman" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/bj%C3%B6rn-ettelman-3a5a3714a/" target="_blank" rel="noopener">LinkedIn</a></li>
      </ul>
    </footer>
  </template>

  <style>
footer {
  background-color: #2C3E50;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer p {
  color: white;
}

footer ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

footer ul li a {
  color: white;
  transition: color 0.3s ease;
}

footer ul li a:hover {
  color: #E74C3C;
}
@media (max-width: 900px) {
footer {
  padding: 0.1rem;
}
}
</style>