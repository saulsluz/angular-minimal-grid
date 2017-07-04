# angular-minimal-grid

Implementation of data grid using twitter bootstrap for angular applications.

Uses custom style of [dataTable](https://github.com/DataTables/DataTables).

### Installation

`$ bower install angular-minimal-grid`

Embed it in your HTML:

```html
<link href="./bower_components/angular-minimal-grid/dist/minimal-grid.min.css" rel="stylesheet">
<script src="./bower_components/angular-minimal-grid/dist/minimal-grid.min.js"></script>
```
Inject `angular-minimal-grid` module as a dependency into your app:

```js
var app = angular.module('app', [
  'ngMinimalGrid'
])
```

### Usage

Example of minimum usage:

```html
<minimal-grid columns="myColumns" rows="myRows"></minimal-grid>
```

In controller:

```js
$scope.myColumns = [
  { key: 'name', title: 'Name' },
  { key: 'lastName', title: 'Last Name' },
  { key: 'age', title: 'Age' }
]
$scope.myRows = [
  { name: 'John ', lastName: 'Doe', age: 30 },
  { name: 'Marie ', lastName: 'Doe', age: 28 }
]
```

That's all.

#### Nested objects

It's suportted nested objects: uses [angular's parse](https://docs.angularjs.org/api/ng/service/$parse).

```js
$scope.myColumns = [
  { key: 'person.user.name', title: 'Name' },
  { key: 'lastName', title: 'Last Name' },
  { key: 'age', title: 'Age' }
]
$scope.myRows = [
  { person: { user: { name: 'John ' } }, lastName: 'Doe', age: 1 },
  { person: { user: { name: 'Marie ' } }, lastName: 'Doe', age: 1 }
]
```

#### Custom rendering

It's suportted custom rendering of cell value: uses `onRender`

```js
$scope.myColumns = [
  { key: 'name', title: 'Name' },
  { key: 'lastName', title: 'Last Name' },
  { key: 'age', title: 'Age', onRender: function(val){
      if (val < 18) {
        return 'child'
      } else {
        return 'adult'
      }
  }}
]
$scope.myRows = [
  { name: 'John ', lastName: 'Doe', age: 1 },
  { name: 'Marie ', lastName: 'Doe', age: 1 }
]
```

#### Getting the control

Keep in mind: this implementation uses the power of callbacks to do anything by out of the grid directive.

The isolated scope binding:

```js
{
  columns: '<',
  rows: '<',
  fake: '<?',
  totalRows: '<?',
  paginationMax: '<?',
  paginationRange: '<?',
  changeOrderByCallback: '&?onChangeOrderBy',
  changePaginateCallback: '&?onChangePaginate',
  clickRowCallback: '&?onClickRow'
}
```

##### on-click-row

If you want to do somenthing when the user clicks on a row just add a binding on a click:

```html
<minimal-grid columns="myColumns" rows="myRows"
  on-click-row="myCallbackClick(row)"
  ></minimal-grid>
```

It's important to pass "row" as parameter: Uses [angular's parameter by reference](https://docs.angularjs.org/guide/directive).

##### on-change-paginate

If you want to do somenthing when the user clicks on a page number (previous or next) just add a binding on a paginate:

```html
<minimal-grid columns="myColumns" rows="myRows"
  on-change-paginate="myCallbackPaginate(pages)"
  ></minimal-grid>
```

It's important to pass "pages" as parameter: Uses [angular's parameter by reference](https://docs.angularjs.org/guide/directive).

##### on-change-order-by

If you want to do somenthing when the user clicks on a header (to change the order by) just add a binding on a order by:

```html
<minimal-grid columns="myColumns" rows="myRows"
  on-change-order-by="myCallbackOrderBy(orderby)"
  ></minimal-grid>
```

It's important to pass "orderby" as parameter: Uses [angular's parameter by reference](https://docs.angularjs.org/guide/directive).

##### fake mode

Here's the trick! Setting `fake="true"` makes the grid perform ordernation and pagination just visualy. This way it's possible to perform yourself ordenation or pagination or whatever you want. Perfect to make async calls and server things.

```html
<minimal-grid columns="myColumns" rows="myRows"
  fake="true"
  ></minimal-grid>
```

Using this mode you will need to set the row's length by setting `totalRows`

```html
<minimal-grid columns="myColumns" rows="myRows"
  fake="true"
  total-rows="myRowsLenght"
  ></minimal-grid>
```

Combine with callbacks and feel the power.

##### pagination-max

Set the max rows peer page. Default is `10`.

```html
<minimal-grid columns="myColumns" rows="myRows"
  fake="true"
  pagination-max="15"
  ></minimal-grid>
```

##### pagination-range

Set the range of number's page to show. Default is `5`.

```html
<minimal-grid columns="myColumns" rows="myRows"
  fake="true"
  pagination-range="3"
  ></minimal-grid>
```

### License

MIT License
