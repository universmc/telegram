<section class="step-by-step">
    <article class="template-content">
        <div class="windows">
            <?php include 'current_step.php'; // Changez dynamiquement ce chemin en fonction de l'étape sélectionnée ?>
        </div>
        <div class="step-loader timeline">
            <!-- Boutons pour chaque étape -->
            <button onclick="loadStep(1)">Étape 1</button>
            <button onclick="loadStep(2)">Étape 2</button>
            <button onclick="loadStep(1)">Étape 1</button>
            <button onclick="loadStep(1)">Étape 1</button>
            <button onclick="loadStep(1)">Étape 1</button>
            <button onclick="loadStep(1)">Étape 1</button>
            <button onclick="loadStep(1)">Étape 1</button>
            <!-- Ajoutez d'autres boutons pour les étapes supplémentaires -->
        </div>
    </article>
</section>