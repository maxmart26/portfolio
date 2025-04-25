  const projets = document.querySelectorAll('.projet');
  let indexActuel = 0;
  let timer = null;

  function afficherProjet(index) {
    projets.forEach(p => p.classList.remove('active'));
    projets[index].classList.add('active');
    indexActuel = index;
    mettreAJourBoutons();
  }

  function mettreAJourBoutons() {
    // Supprime la classe active de tous les boutons visibles
    const boutonsVisibles = projets[indexActuel].querySelectorAll('.boutons button');
    boutonsVisibles.forEach(b => b.classList.remove('active'));

    // Active le bon bouton
    const boutonActif = projets[indexActuel].querySelector(`.boutons button[data-index="${indexActuel}"]`);
    if (boutonActif) boutonActif.classList.add('active');
  }

  function projetSuivant() {
    let suivant = (indexActuel + 1) % projets.length;
    afficherProjet(suivant);
  }

  function lancerRotation() {
    timer = setInterval(projetSuivant, 5000);
  }

  // Ajoute les écouteurs de clic à tous les boutons
  projets.forEach((projet, i) => {
    const boutons = projet.querySelectorAll('.boutons button');
    boutons.forEach(btn => {
      btn.addEventListener('click', () => {
        clearInterval(timer);
        afficherProjet(Number(btn.dataset.index));
        lancerRotation();
      });
    });
  });

  afficherProjet(0);
  lancerRotation();
