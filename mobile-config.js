App.info({
 id: 'com.petpalapp.app',
 name: 'Brian Murphy',
 description: 'Re-unite pets with their owners',
 version: '0.2.1',
 author: 'Brian Murphy',
 email: 'briandot@hotmail.com',
 website: 'http://www.petpalapp.com'
});
App.accessRule('*');
App.setPreference('DisallowOverscroll', 'true');
// using mobile-status-bar package that uses the cordova packages
App.setPreference('StatusBarOverlaysWebView','true');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.setPreference('StatusBarStyle', 'lightcontent');
App.icons({

 // Android
 'android_ldpi': 'public/icons/icon36.png',
 'android_mdpi': 'public/icons/icon48.png',
 'android_hdpi': 'public/icons/icon72.png',
 'android_xhdpi': 'public/icons/icon96.png'
});
App.launchScreens({
 // iOS
 
 // Android
 'android_ldpi_portrait': 'resources/splash/splash200x320.png',
 'android_ldpi_landscape': 'resources/splash/splash320x200.png',
 'android_mdpi_portrait': 'resources/splash/splash320x480.png',
 'android_mdpi_landscape': 'resources/splash/splash480x320.png',
 'android_hdpi_portrait': 'resources/splash/splash480x800.png',
 'android_hdpi_landscape': 'resources/splash/splash800x480.png',
 'android_xhdpi_portrait': 'resources/splash/splash720x1280.png',
 'android_xhdpi_landscape': 'resources/splash/splash1280x720.png'
});