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

Router.route("/profile/:username",{
    name:"profile",
    controller:"ProfileController"
});

Router.route('/', function () {
  this.render('userManagement');
});

Router.route('/upload', function () {
  this.render('hello');
});

Router.route('/register', function () {
  this.render('register');
});