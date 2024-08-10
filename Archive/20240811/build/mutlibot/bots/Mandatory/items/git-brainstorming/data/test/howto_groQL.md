# Plan de projet

Ce référentiel contient des exemples de requêtes GraphQL utilisant la syntaxe propriétaire de Groq. Pour plus d'informations sur Groq, veuillez consulter le site <https://groq.com>.

## Table des matières

- [Exemples de requêtes](#exemples-de-requêtes)
  - [Requête de base](#requête-de-base)
  - [Requête avec filtre](#requête-avec-filtre)
  - [Requête avec tri](#requête-avec-tri)
  - [Requête avec regroupement](#requête-avec-regroupement)
  - [Requête avec plage de dates](#requête-avec-plage-de-dates)
  - [Requête avec agrégation](#requête-avec-agrégation)
  - [Requête avec jointure](#requête-avec-jointure)
- [Installation](#installation)
- [Utilisation](#utilisation)
  - [Requête de base](#requête-de-base-1)
  - [Requête avec filtre](#requête-avec-filtre-1)
  - [Requête avec tri](#requête-avec-tri-1)
  - [Requête avec regroupement](#requête-avec-regroupement-1)
  - [Requête avec plage de dates](#requête-avec-plage-de-dates-1)
  - [Requête avec agrégation](#requête-avec-agrégation-1)
  - [Requête avec jointure](#requête-avec-jointure-1)
- [Licence](#licence)

## Exemples de requêtes

Les exemples de requêtes suivants montrent comment utiliser Groq pour interroger des données.

### Requête de base

La requête de base suivante récupère tous les documents d'un index nommé `exemple` :

```groq
*[_type == "exemple"]
```

### Requête avec filtre

La requête suivante récupère tous les documents de type `exemple` où le champ `published` est égal à `true` :

```groq
*[_type == "exemple" && published == true]
```

### Requête avec tri

La requête suivante récupère tous les documents de type `exemple` triés par le champ `date` dans l'ordre décroissant :

```groq
*[_type == "exemple"] | order(date desc)
```

### Requête avec regroupement

La requête suivante regroupe les documents de type `exemple` par le champ `category` :

```groq
*[_type == "exemple"] | groupBy(category)
```

### Requête avec plage de dates

La requête suivante récupère tous les documents de type `exemple` publiés entre le 1er janvier 2021 et le 31 décembre 2021 :

```groq
*[_type == "exemple" && published == true && date >= "2021-01-01" && date <= "2021-12-31"]
```

### Requête avec agrégation

La requête suivante calcule la somme des champs `price` pour tous les documents de type `exemple` :

```groq
sum(*[_type == "exemple"].price)
```

### Requête avec jointure

La requête suivante récupère tous les documents de type `exemple` et leurs commentaires associés :

```groq
*[_type == "exemple"] {
  _id,
  title,
  "comments" : *[_type == "comment" && post._ref == _id]
}
```

## Installation

Ce référentiel ne nécessite aucune installation. Vous pouvez simplement consulter les exemples de requêtes dans ce fichier.

## Utilisation

Pour utiliser ces exemples de requêtes, vous devez disposer d'un endpoint GraphQL compatible avec Groq. Vous pouvez ensuite utiliser ces requêtes dans votre client GraphQL préféré.

### Requête de base

Pour exécuter une requête de base, vous pouvez utiliser la requête suivante :

```groq
*[_type == "exemple"]
```

### Requête avec filtre

Pour exécuter une requête avec filtre, vous pouvez utiliser la requête suivante :

```groq
*[_type == "exemple" && published == true]
```

### Requête avec tri

Pour exécuter une requête avec tri, vous pouvez utiliser la requête suivante :

```groq
*[_type == "exemple"] | order(date desc)
```

### Requête avec regroupement

Pour exécuter une requête avec regroupement, vous pouvez utiliser la requête suivante :

```groq
*[_type == "exemple"] | groupBy(category)
```

### Requête avec plage de dates

Pour exécuter une requête avec plage de dates, vous pouvez utiliser la requête suivante :

```groq
*[_type == "exemple" && published == true && date >= "2021-01-01" && date <= "2021-12-31"]
```

### Requête avec agrégation

Pour exécuter une requête avec agrégation, vous pouvez utiliser la requête suivante :

```groq
sum(*[_type == "exemple"].price)
```

### Requête avec jointure

Pour exécuter une requête avec jointure, vous pouvez utiliser la requête suivante :

```groq
*[_type == "exemple"] {
  _id,
  title,
  "comments" : *[_type == "comment" && post._ref == _id]
}
```

## Licence

Ce projet est sous licence MIT. Pour plus d'informations, veuillez consulter le fichier [LICENSE](LICENSE).