# Utiliser un browser headless

![Dev-Mind](src/app/assets/img/logo_long_1400.png)

Ce projet est là pour illustrer l'article sur le même sujet sur le blog [http://javamind-fr.blogspot.fr/](http://javamind-fr.blogspot.fr/).

Si vous vous posez la question de vous passez de PhantomJS sur vos plateformes d'intégration continue, voici comment procéder pour utiliser l'émulateur de serveur X, [Xvfb](https://www.x.org/archive/X11R7.6/doc/man/man1/Xvfb.1.xhtml).

Vous trouverez dans la partie docker, le DockerFile pour construire un CentOS contenant Xvfb. Le but est de pouvoir avoir un environnement pour exécuter ce projet.

Je vous conseille de procéder de cette manière

1. Allez dans /docker
2. Lancez la commande
      `sudo docker build .`
3. Puis
     `sudo docker run -it [id_container]`
4. Vous arrivez dans le projet et vous pouvez piloter Karma et Protractor soit directement soit via Gulp. Le but est de montrer comment manipuler une webapp. Ici c'est de l'Angular JS mais ça aurait pu être n'importe quelle application nécessitant un browser headless
5. Faites un `npm install` pour installer les dépendances du projet


Regardons ce qu'il se passe si nous lançons les tests Karma via
   ```./node_modules/karma/bin/karma start```

Comme Firefox ne peut pas se lancer nous devons avoir
```
   31 05 2016 23:05:15.916:INFO [karma]: Karma v0.13.22 server started at http://localhost:9876/
   31 05 2016 23:05:15.924:INFO [launcher]: Starting browser Firefox
   31 05 2016 23:05:16.027:ERROR [launcher]: Cannot start Firefox
```

Suivez ensuite ce qui est écrit dans l'article pour configurer convenablement [Xvfb](https://www.x.org/archive/X11R7.6/doc/man/man1/Xvfb.1.xhtml).

# Versions des librairies utilisées

Les versions des librairies utiliséees sont les suivantes

 * [Node 4.2.4](https://nodejs.org)
 * [Karma 0.13.19](https://karma-runner.github.io)
 * [Protractor 3.0.0](https://angular.github.io/protractor)
 * [Jasmine 2.4.1](http://jasmine.github.io/)
 * [Angular 1.4.8](https://angularjs.org/)


