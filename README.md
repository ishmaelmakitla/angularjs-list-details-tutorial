# angularjs-list-details-tutorial
Tutorial code that demonstrates one of the most common use cases in Web Applications; list of items and a "details screen" for a selected item. 
### AngularJS Directives (ng-x)
The code covers the use of number of AngularJS directives..see the code!
  **ng-app** - directive that initializes an AngularJS application
  **ng-model** - directive that binds the value of HTML controls to application data (which you access as `$scope.something`).
  **ng-table** - directive that represents a [Data]table
  **ng-repeat** - directive that repeats an HTML element
  **ng-click** - directive that invokes the specified method in "methodX()" only if the button is clicked - `$scope.methodX`

### Project Folder Structure (personal preference)
The folder structure is as follows:

-. (root)

-`server.js` - this is the NodeJS server application with Express middleware

-`package.json` - the dependecies for our Node app are decribed in this document - to install them, simply run `npm install`

-`bower.json` - the dependencies for our front-end are described in here - and to install them, simply run `bower install`

-`.bowerrrc` - this config file tells bower where to install dependecies (we specify our `/public/libs')`

-`/public` - this is the root directory that contains the front-end code (html pages, templates, etc)

-`./public/views` - this is where we put our templates (ItemLists.html and ItemDetails.html)

-`/publib/libs/` - this is where bower loads all our dependencies. See here about [bower - package manager for the Web](https://bower.io/)


 ### So What Are Doing Here?
  We are displaying a list of items and when the user clicks on one of the items (icon on last column) - we open up a view of the details of the selected item. This is a very common use case and in this tutorial I am using Datatables - this provides filtering, sorting, paging -- all out of the box. This is exactly what you need when you are looking at large lists of items in your application.
  
 ### Cool, where do I sign-up?
 Well, you can clone the repository and play with the code, including customizing it for your own purpose. You can also fork the repo...whatever you choose, happy coding! 
