import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactsComponent from './contacts.component';
import livetableFirebase from './liveFireBaseTable/index.js';


class TestContactsController {
  $onInit() {
    //console.log("on Init from TestContactsController");
    // this.innerTestController = "innerTestController";
  }

}

const contactsModule = angular.module('contacts', [
  uiRouter,
  "angularFileUpload",
  livetableFirebase,
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('contacts', {
      url: '/contacts',
      component: 'contacts'
    })
    .state('testContacts', {
      url: '/testContacts',
      component: 'testContacts'
    });
})

.component('contacts', contactsComponent)

.component('testDirective', {
  bindings: {
    myData: "<",
  },
  template: `<h1>Hello I am a test Component</h1>
      <p>This is myData = {{$ctrl.myData}}</p>`,
  controller: TestContactsController,
})

.name;

export default contactsModule;
