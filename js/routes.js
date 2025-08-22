export default {
    home: {
        path: '/home',
        controller: 'homeController'
    },
    chuckJoke: {
        path: '/chuck',
        controller: 'chuckNorrisController'
    },
    chuckCategories: {
        path: '/norris',
        controller: 'categoriesController'
    },
    excuses: {
        path: '/sorry-not-sorry',
        controller: 'excusesController'
    },
    superHero: {
        path: '/superHero',
        controller: 'superHeroController'
    },
    heroDex: {
        path: '/heroDex',
        controller: 'heroDexController'
    },
    currentPath: {
        path: '',
        controller: ''
    },
};
