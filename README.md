# A propos
Projet 14 - Faites passer une librairie jQuery vers React
- Société financière WealthHealth


### Fonction
- Développeur web
✅
❌

### Details du projet
Ancienne application qui utilise jQuery côté front end ce qui entraîne des bugs et augmentation des plaintes en interne. Convertir HRnet en React, les gros problèmes pour les utilisateurs sont les sélecteurs de date, les fenêtres modales, les menus déroulants et les tableaux (plugins jQuery très lents), il faut donc créer nos propre composants React (meilleur performances et stabilité). 

### Objectif
- Nouvelle versions des pages "Create Employee" et "Employee List"
- Ajouter un système de gestion d'état (aujourdh'hui on utilise un stockage local)
- S'assurer que tout est cohérent au niveau du style (quelque chose de plus moderne)
- Tester le code React avec des tests unitaires (un seul néccésaires par componsant)
- Conversions des plugins jQuery en React (date, modal, menu déroulants, tables de données)
- Tests audits de perfomance LightHouse (temps de chargements des pages, appels réseau)

### Ressource
- [Repo HRnet actuel](https://github.com/OpenClassrooms-Student-Center/P12_Front-end)
- [Issue sur les sélecteurs de date](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/1)
- [Issue sur les tableaux](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/2)
- [Issues de fenêtres modales](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/3)
- [Issue sur menus déroulants](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/4)

Voici la liste des plugins jQuery actuellement utilisés qui doivent être convertis : 
[Plugin de sélection de date](https://github.com/xdan/datetimepicker)
[Plugin de fenêtre modale - jQuery.modal.js](https://github.com/kylefox/jquery-modal)
[Menus déroulants](https://github.com/jquery/jquery-ui/blob/master/ui/widgets/selectmenu.js)
[Plugin pour les tables de données](https://github.com/DataTables/DataTables)


[LightHouse](https://developers.google.com/web/tools/lighthouse/)
[hackernoon](https://hackernoon.com/creating-a-library-of-react-components-using-create-react-app-without-ejecting-d182df690c6b)

### Contraintes techniques
- 0% de Jquery sauf les calls Ajax legacy, 100% de React
- Code Robuste / Lisible
- Version moderne (ES6 ou supérieure) de JavaScript
- Validation W3C sans erreur
- Perfomance amélioré

### Livrable
- Un lien du repo GitHub contenant le code source du plugin Jquery converti en ReactJS
- Un lien vers la bibilothèque React convertie plubliée sur npm ou GitHub Packages dans le README
- Un second repo Github contenant le code source de l'application HRnet converti en React
- Un rapport de perfomance LightHouse de HRnet fonctionnant avant et après conversion de la biblothèque au format JSON.

### Technlogies
HTML, CSS, SASS, Javascript, Jquery, NodeJS, React, Github, Heroku, API, GitHub Packages

### Hébergement
> Heroku
[#Projet 13 - Argent Bank](https://google.fr/)

### Author
[Alexis GRIMONPREZ](grimonprez-alexis.herokuapp.com)

### Version
1.0.0