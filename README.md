# Angular Analytics
AngularJs directives collection

## Installation
npm install --save angular-directives

### Require to Angular
```js
import angular from 'anguar';
const application = angular.module('myApplication', [
  require('angular-analytics'),
]);
```

### Add events to DOM Elements
```html
<a ng-event="Group,Name,Label"></a>
```