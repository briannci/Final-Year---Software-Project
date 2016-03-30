// define the (usually global) loading template
Router.configure({
    loadingTemplate:"loading"
});

// add the dataNotFound plugin, which is responsible for
// rendering the dataNotFound template if your RouteController
// data function returns a falsy value
Router.plugin("dataNotFound",{
    notFoundTemplate: "dataNotFound"
});

Router.map(function () {
    this.route('profile', {
        path: '/profile/:username',
        controller:"ProfileController",
        name:"profile"
    });
});

Router.route('/', function () {
    this.render('userManagement');
});

Router.route('profile/:username/location', function () {
    this.render('location');
});

Router.route('profile/:username/contact', function () {
    this.render('contact');
});

Router.route('profile/:screenName', function () {
    this.render('profile');
});


Router.configure({
    layoutTemplate:'layout',
    loadingTemplate: 'loading',
})

Router.route('/image', function () {
  this.render('image-profile')
});

Router.route('/register', function () {
  this.render('register')
});











