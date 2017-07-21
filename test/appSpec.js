describe('ngMinimalGrid', function () {

  var app = angular.module('testGridApp', [
    'ngMinimalGrid'
  ])

  var $compile,
    $rootScope,
    element,
    gridScope;

  function get100Rows() {
    var rows = []
    for (var x = 0; x < 100; x++) {
      rows.push(
        { name: 'John ' + x, lastName: 'Doe', age: x }
      )
    }
    return rows
  }

  function asyncGet100Rows(callback) {
    setTimeout(function () {
      var rows = get100Rows()
      callback(rows)
    }, 1000)
  }

  describe('provider', function () {

    describe('No rows (custom provider conf)', function () {

      // Load the app module, which contains the directive
      beforeEach(angular.mock.module('testGridApp'));

      // Store references to $rootScope and $compile
      // so they are available to all tests in this describe block
      beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_, _minimalGridConfig_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
        minimalGridConfig = _minimalGridConfig_;
      }))

      beforeEach(function () {
        $scope.columns = [
          { key: 'name', title: 'Name' },
          { key: 'lastName', title: 'Last Name' },
          { key: 'age', title: 'Age' }
        ]
        $scope.rows = []

        // Compile a piece of HTML containing the directive
        element = $compile(`
          <minimal-grid 
            columns="columns" 
            rows="rows"
          ></minimal-grid>`)($scope);

        gridScope = element.isolateScope()
      })

      it('Should contain "Mostrando %1 à %2 de %3 resultados"', function () {
        minimalGridConfig.setStatsMessage("Mostrando %1 à %2 de %3 resultados")
        expect(minimalGridConfig.statsMessage).toEqual('Mostrando %1 à %2 de %3 resultados')
      })

      it('Should contain "Primeiro"', function () {
        minimalGridConfig.setFirstLabel('Primeiro')
        expect(minimalGridConfig.firstButtonLabel).toEqual('Primeiro')
      })

      it('Should contain "Último"', function () {
        minimalGridConfig.setLastLabel('Último')
        expect(minimalGridConfig.lastButtonLabel).toEqual('Último')
      })
    })

    describe('Filling 100 rows (custom provider conf)', function () {
      // Load the app module, which contains the directive
      beforeEach(angular.mock.module('testGridApp'));

      // Store references to $rootScope and $compile
      // so they are available to all tests in this describe block
      beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_, _minimalGridConfig_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
        minimalGridConfig = _minimalGridConfig_;
      }))

      beforeEach(function () {
        $scope.columns = [
          { key: 'name', title: 'Name' },
          { key: 'lastName', title: 'Last Name' },
          { key: 'age', title: 'Age' }
        ]
        $scope.rows = get100Rows()

        // Compile a piece of HTML containing the directive
        element = $compile(`
          <minimal-grid 
            columns="columns" 
            rows="rows"
          ></minimal-grid>`)($scope);

        gridScope = element.isolateScope()
      })

      it('Should contain "Mostrando %1 à %2 de %3 resultados"', function () {
        minimalGridConfig.setStatsMessage("Mostrando %1 à %2 de %3 resultados")
        expect(minimalGridConfig.statsMessage).toEqual('Mostrando %1 à %2 de %3 resultados')
      })

      it('Should contain "Primeiro"', function () {
        minimalGridConfig.setFirstLabel('Primeiro')
        expect(minimalGridConfig.firstButtonLabel).toEqual('Primeiro')
      })

      it('Should contain "Último"', function () {
        minimalGridConfig.setLastLabel('Último')
        expect(minimalGridConfig.lastButtonLabel).toEqual('Último')
      })
    })

    describe('No rows (default provider conf)', function () {
      
      // Load the app module, which contains the directive
      beforeEach(angular.mock.module('testGridApp'));

      // Store references to $rootScope and $compile
      // so they are available to all tests in this describe block
      beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_, _minimalGridConfig_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
        minimalGridConfig = _minimalGridConfig_;
      }))
      
      beforeEach(function () {
        $scope.columns = [
          { key: 'name', title: 'Name' },
          { key: 'lastName', title: 'Last Name' },
          { key: 'age', title: 'Age' }
        ]
        $scope.rows = []

        // Compile a piece of HTML containing the directive
        element = $compile(`
          <minimal-grid 
            columns="columns" 
            rows="rows"
          ></minimal-grid>`)($scope);

        gridScope = element.isolateScope()
      })

      it('Should contain "Showing %1 to %2 of %3 results"', function () {
        expect(minimalGridConfig.statsMessage).toEqual('Showing %1 to %2 of %3 results')
      })

      it('Should contain "First"', function () {
        expect(minimalGridConfig.firstButtonLabel).toEqual('First')
      })

      it('Should contain "Last"', function () {
        expect(minimalGridConfig.lastButtonLabel).toEqual('Last')
      })
    })

    describe('Filling 100 rows (default provider conf)', function () {
      // Load the app module, which contains the directive
      beforeEach(angular.mock.module('testGridApp'));

      // Store references to $rootScope and $compile
      // so they are available to all tests in this describe block
      beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_, _minimalGridConfig_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
        minimalGridConfig = _minimalGridConfig_;
      }))

      beforeEach(function () {
        $scope.columns = [
          { key: 'name', title: 'Name' },
          { key: 'lastName', title: 'Last Name' },
          { key: 'age', title: 'Age' }
        ]
        $scope.rows = get100Rows()

        // Compile a piece of HTML containing the directive
        element = $compile(`
          <minimal-grid 
            columns="columns" 
            rows="rows"
          ></minimal-grid>`)($scope);

        gridScope = element.isolateScope()
      })

      it('Should contain "Showing %1 to %2 of %3 results"', function () {
        expect(minimalGridConfig.statsMessage).toEqual('Showing %1 to %2 of %3 results')
      })

      it('Should contain "First"', function () {
        expect(minimalGridConfig.firstButtonLabel).toEqual('First')
      })

      it('Should contain "Last"', function () {
        expect(minimalGridConfig.lastButtonLabel).toEqual('Last')
      })
    })

  })

  describe('general', function () {

    describe('when pagination max < total number of rows', function () {
      // Load the app module, which contains the directive
      beforeEach(angular.mock.module('testGridApp'));

      // Store references to $rootScope and $compile
      // so they are available to all tests in this describe block
      beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_, _minimalGridConfig_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
        minimalGridConfig = _minimalGridConfig_;
      }))

      beforeEach(function () {
        $scope.columns = [
          { key: 'name', title: 'Name' },
          { key: 'lastName', title: 'Last Name' },
          { key: 'age', title: 'Age' }
        ]
        $scope.rows = []
        $scope.totalRows = 0
        $scope.paginationMax = 20
        $scope.paginationRange = 4

        // Compile a piece of HTML containing the directive
        element = $compile(`
          <minimal-grid 
            columns="columns" 
            rows="rows"
            total-rows="totalRows"
            pagination-max="paginationMax"
            pagination-range="paginationRange"
          ></minimal-grid>`)($scope);

        gridScope = element.isolateScope()
      })

      it('Check that the compiled element contains the templated content', function () {
        expect(element).toBeDefined()
      });

      it('Check that the number of compiled columns is equal the templated content', function () {
        expect(gridScope.columns.length).toEqual($scope.columns.length)
      });

      it('Check that the number of compiled rows is equal the templated content', function () {
        expect(gridScope.rows.length).toEqual($scope.rows.length)
      });

      it('Check that the number of compiled total of rows is equal the templated content', function () {
        expect(gridScope.totalRows).toEqual($scope.totalRows)
      });

      it('Check that the number of compiled pagination max is equal the templated content', function () {
        expect(gridScope.pages.max).toEqual($scope.paginationMax)
      });

      it('Check that the number of compiled pagination range is equal the templated content', function () {
        expect(gridScope.pages.range).toEqual($scope.paginationRange)
      });

      it('Filling 100 rows async way check that rows number respect the templated pagination size', function (done) {

        asyncGet100Rows(function (rows) {
          $scope.rows = rows
          $scope.totalRows = rows.length
          $scope.$digest();
          var tdRowsLength = element.find('td').length
          var fraction = (tdRowsLength / gridScope.columns.length)
          expect((tdRowsLength / gridScope.columns.length)).toEqual($scope.paginationMax)
          done();
        })
      });

    });

    describe('when pagination max > total number of rows', function () {
      // Load the app module, which contains the directive
      beforeEach(angular.mock.module('testGridApp'));

      // Store references to $rootScope and $compile
      // so they are available to all tests in this describe block
      beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
      }))

      beforeEach(function () {
        $scope.columns = [
          { key: 'name', title: 'Name' },
          { key: 'lastName', title: 'Last Name' },
          { key: 'age', title: 'Age' }
        ]
        $scope.rows = []
        $scope.totalRows = 0
        $scope.paginationMax = 1000
        $scope.paginationRange = 6

        // Compile a piece of HTML containing the directive
        element = $compile(`
          <minimal-grid 
            columns="columns" 
            rows="rows"
            total-rows="totalRows"
            pagination-max="paginationMax"
            pagination-range="paginationRange"
          ></minimal-grid>`)($scope);

        gridScope = element.isolateScope()
      })

      it('Check that the compiled element contains the templated content', function () {
        expect(element).toBeDefined()
      });

      it('Check that the number of compiled columns is equal the templated content', function () {
        expect(gridScope.columns.length).toEqual($scope.columns.length)
      });

      it('Check that the number of compiled rows is equal the templated content', function () {
        expect(gridScope.rows.length).toEqual($scope.rows.length)
      });

      it('Check that the number of compiled total of rows is equal the templated content', function () {
        expect(gridScope.totalRows).toEqual($scope.totalRows)
      });

      it('Check that the number of compiled pagination max is equal the templated content', function () {
        expect(gridScope.pages.max).toEqual($scope.paginationMax)
      });

      it('Check that the number of compiled pagination range is equal the templated content', function () {
        expect(gridScope.pages.range).toEqual($scope.paginationRange)
      });

      it('Filling 100 rows async way check that rows number respect the templated pagination size', function (done) {

        asyncGet100Rows(function (rows) {
          $scope.rows = rows
          $scope.totalRows = rows.length
          $scope.$digest();
          var tdRowsLength = element.find('td').length
          expect(tdRowsLength).toEqual(rows.length * gridScope.columns.length)
          done();
        })
      });
    });

  });

  describe('scope', function () {
    // Load the app module, which contains the directive
    beforeEach(angular.mock.module('testGridApp'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_) {
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $compile = _$compile_;
      $scope = _$rootScope_.$new();
    }))

    beforeEach(function () {
      $scope.columns = [
        { key: 'name', title: 'Name' },
        { key: 'lastName', title: 'Last Name' },
        { key: 'age', title: 'Age' }
      ]
      $scope.rows = []
      $scope.fnOrderBy = function (orderBy) {
        console.log('fnOrderBy')
      }
    })

    it('columns not defined expected error "minimalGrid error: columns must be an Array"', function () {
      expect(function () {
        element = $compile(`
          <minimal-grid 
            rows="rows"
          ></minimal-grid>`)($scope);
      }).toThrowError('minimalGrid error: columns must be an Array')
    });

    it('rows not defined expected error "minimalGrid error: rows must be an Array"', function () {
      expect(function () {
        element = $compile(`
          <minimal-grid 
            columns="columns"
          ></minimal-grid>`)($scope);
      }).toThrowError('minimalGrid error: rows must be an Array')
    });

    it('pagination-max assigned String expected error "minimalGrid error: pagination-max must be a Number"', function () {
      expect(function () {
        element = $compile(`
          <minimal-grid 
            columns="columns"
            rows="rows"
            pagination-max="'10'"
          ></minimal-grid>`)($scope);
      }).toThrowError('minimalGrid error: pagination-max must be a Number')
    });

    it('pagination-range assigned String expected error "minimalGrid error: pagination-range must be a Number"', function () {
      expect(function () {
        element = $compile(`
          <minimal-grid 
            columns="columns"
            rows="rows"
            pagination-range="'10'"
          ></minimal-grid>`)($scope);
      }).toThrowError('minimalGrid error: pagination-range must be a Number')
    });

    it('pagination-max assigned Array expected error "minimalGrid error: pagination-max must be a Number"', function () {
      expect(function () {
        element = $compile(`
          <minimal-grid 
            columns="columns"
            rows="rows"
            pagination-max="[]"
          ></minimal-grid>`)($scope);
      }).toThrowError('minimalGrid error: pagination-max must be a Number')
    });

    it('pagination-range assigned Array expected error "minimalGrid error: pagination-range must be a Number"', function () {
      expect(function () {
        element = $compile(`
          <minimal-grid 
            columns="columns"
            rows="rows"
            pagination-range="[]"
          ></minimal-grid>`)($scope);
      }).toThrowError('minimalGrid error: pagination-range must be a Number')
    });

    it('pagination-range assigned Array expected error "minimalGrid error: pagination-range must be a Number"', function () {
      expect(function () {
        element = $compile(`
          <minimal-grid 
            columns="columns"
            rows="rows"
            pagination-range="[]"
          ></minimal-grid>`)($scope);
      }).toThrowError('minimalGrid error: pagination-range must be a Number')
    });

    it('on-change-order-by assigned String expected error "minimalGrid error: on-change-order-by must be a Function"', function () {
      element = $compile(`
        <minimal-grid 
          columns="columns"
          rows="rows"
          on-change-order-by="fnOrderBy(orderBy)"
        ></minimal-grid>`)($scope);
      
      $scope.$digest()
      gridScope.$digest()
      gridScope = element.isolateScope()
      console.log(angular.mock.dump(gridScope))
      console.log(angular.mock.dump(gridScope))
    });

  });

});