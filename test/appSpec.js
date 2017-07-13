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

  angular.mock.module.sharedInjector()

  // Load the app module, which contains the directive
  beforeAll(angular.mock.module('testGridApp'));

  describe('provider', function () {

    describe('No rows (default provider conf)', function () {
      // Store references to $rootScope and $compile
      // so they are available to all tests in this describe block
      beforeAll(angular.mock.inject(function (_$compile_, _$rootScope_, _minimalGridConfig_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();
        minimalGridConfig = _minimalGridConfig_;
      }))

      beforeEach(function () {
        $rootScope.columns = [
          { key: 'name', title: 'Name' },
          { key: 'lastName', title: 'Last Name' },
          { key: 'age', title: 'Age' }
        ]
        $rootScope.rows = []

        // Compile a piece of HTML containing the directive
        element = $compile(`
          <minimal-grid 
            columns="columns" 
            rows="rows"
          ></minimal-grid>`)($rootScope);

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
      // Store references to $rootScope and $compile
      // so they are available to all tests in this describe block
      beforeAll(angular.mock.inject(function (_$compile_, _$rootScope_, _minimalGridConfig_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();
        minimalGridConfig = _minimalGridConfig_;
      }))

      beforeEach(function () {
        $rootScope.columns = [
          { key: 'name', title: 'Name' },
          { key: 'lastName', title: 'Last Name' },
          { key: 'age', title: 'Age' }
        ]
        $rootScope.rows = get100Rows()

        // Compile a piece of HTML containing the directive
        element = $compile(`
          <minimal-grid 
            columns="columns" 
            rows="rows"
          ></minimal-grid>`)($rootScope);

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

    describe('No rows (custom provider conf)', function () {
      // Store references to $rootScope and $compile
      // so they are available to all tests in this describe block
      beforeAll(angular.mock.inject(function (_$compile_, _$rootScope_, _minimalGridConfig_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();
        minimalGridConfig = _minimalGridConfig_;
      }))

      beforeEach(function () {
        $rootScope.columns = [
          { key: 'name', title: 'Name' },
          { key: 'lastName', title: 'Last Name' },
          { key: 'age', title: 'Age' }
        ]
        $rootScope.rows = []

        // Compile a piece of HTML containing the directive
        element = $compile(`
          <minimal-grid 
            columns="columns" 
            rows="rows"
          ></minimal-grid>`)($rootScope);

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
      // Store references to $rootScope and $compile
      // so they are available to all tests in this describe block
      beforeAll(angular.mock.inject(function (_$compile_, _$rootScope_, _minimalGridConfig_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();
        minimalGridConfig = _minimalGridConfig_;
      }))

      beforeEach(function () {
        $rootScope.columns = [
          { key: 'name', title: 'Name' },
          { key: 'lastName', title: 'Last Name' },
          { key: 'age', title: 'Age' }
        ]
        $rootScope.rows = get100Rows()

        // Compile a piece of HTML containing the directive
        element = $compile(`
          <minimal-grid 
            columns="columns" 
            rows="rows"
          ></minimal-grid>`)($rootScope);

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

  })

  describe('general', function () {

    describe('when pagination max < total number of rows', function () {
      // Store references to $rootScope and $compile
      // so they are available to all tests in this describe block
      beforeAll(angular.mock.inject(function (_$compile_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();
      }))

      beforeEach(function () {
        $rootScope.columns = [
          { key: 'name', title: 'Name' },
          { key: 'lastName', title: 'Last Name' },
          { key: 'age', title: 'Age' }
        ]
        $rootScope.rows = []
        $rootScope.totalRows = 0
        $rootScope.paginationMax = 20
        $rootScope.paginationRange = 4

        // Compile a piece of HTML containing the directive
        element = $compile(`
          <minimal-grid 
            columns="columns" 
            rows="rows"
            total-rows="totalRows"
            pagination-max="paginationMax"
            pagination-range="paginationRange"
          ></minimal-grid>`)($rootScope);

        gridScope = element.isolateScope()
      })

      it('Check that the compiled element contains the templated content', function () {
        expect(element).toBeDefined()
      });

      it('Check that the number of compiled columns is equal the templated content', function () {
        expect(gridScope.columns.length).toEqual($rootScope.columns.length)
      });

      it('Check that the number of compiled rows is equal the templated content', function () {
        expect(gridScope.rows.length).toEqual($rootScope.rows.length)
      });

      it('Check that the number of compiled total of rows is equal the templated content', function () {
        expect(gridScope.totalRows).toEqual($rootScope.totalRows)
      });

      it('Check that the number of compiled pagination max is equal the templated content', function () {
        expect(gridScope.pages.max).toEqual($rootScope.paginationMax)
      });

      it('Check that the number of compiled pagination range is equal the templated content', function () {
        expect(gridScope.pages.range).toEqual($rootScope.paginationRange)
      });

      it('Filling 100 rows async way check that rows number respect the templated pagination size', function (done) {

        asyncGet100Rows(function (rows) {
          $rootScope.rows = rows
          $rootScope.totalRows = rows.length
          $rootScope.$digest();
          var tdRowsLength = element.find('td').length
          var fraction = (tdRowsLength / gridScope.columns.length)
          expect((tdRowsLength / gridScope.columns.length)).toEqual($rootScope.paginationMax)
          done();
        })
      });

    });

    describe('when pagination max > total number of rows', function () {
      // Store references to $rootScope and $compile
      // so they are available to all tests in this describe block
      beforeAll(angular.mock.inject(function (_$compile_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();
      }))

      beforeEach(function () {
        $rootScope.columns = [
          { key: 'name', title: 'Name' },
          { key: 'lastName', title: 'Last Name' },
          { key: 'age', title: 'Age' }
        ]
        $rootScope.rows = []
        $rootScope.totalRows = 0
        $rootScope.paginationMax = 1000
        $rootScope.paginationRange = 6

        // Compile a piece of HTML containing the directive
        element = $compile(`
          <minimal-grid 
            columns="columns" 
            rows="rows"
            total-rows="totalRows"
            pagination-max="paginationMax"
            pagination-range="paginationRange"
          ></minimal-grid>`)($rootScope);

        gridScope = element.isolateScope()
      })

      it('Check that the compiled element contains the templated content', function () {
        expect(element).toBeDefined()
      });

      it('Check that the number of compiled columns is equal the templated content', function () {
        expect(gridScope.columns.length).toEqual($rootScope.columns.length)
      });

      it('Check that the number of compiled rows is equal the templated content', function () {
        expect(gridScope.rows.length).toEqual($rootScope.rows.length)
      });

      it('Check that the number of compiled total of rows is equal the templated content', function () {
        expect(gridScope.totalRows).toEqual($rootScope.totalRows)
      });

      it('Check that the number of compiled pagination max is equal the templated content', function () {
        expect(gridScope.pages.max).toEqual($rootScope.paginationMax)
      });

      it('Check that the number of compiled pagination range is equal the templated content', function () {
        expect(gridScope.pages.range).toEqual($rootScope.paginationRange)
      });

      it('Filling 100 rows async way check that rows number respect the templated pagination size', function (done) {

        asyncGet100Rows(function (rows) {
          $rootScope.rows = rows
          $rootScope.totalRows = rows.length
          $rootScope.$digest();
          var tdRowsLength = element.find('td').length
          expect(tdRowsLength).toEqual(rows.length * gridScope.columns.length)
          done();
        })
      });
    });

  });

  describe('scope', function () {
    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeAll(angular.mock.inject(function (_$compile_, _$rootScope_) {
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $compile = _$compile_;
      $rootScope = _$rootScope_.$new();
    }))

    beforeEach(function () {
      $rootScope.columns = [
        { key: 'name', title: 'Name' },
        { key: 'lastName', title: 'Last Name' },
        { key: 'age', title: 'Age' }
      ]
      $rootScope.rows = []
      $rootScope.fnOrderBy = function (orderBy) {
        
      }
    })

    it('columns not defined expected error "minimalGrid error: columns must be an Array"', function () {
      expect(function () {
        element = $compile(`
          <minimal-grid 
            rows="rows"
          ></minimal-grid>`)($rootScope);
      }).toThrowError('minimalGrid error: columns must be an Array')
    });

    it('rows not defined expected error "minimalGrid error: rows must be an Array"', function () {
      expect(function () {
        element = $compile(`
          <minimal-grid 
            columns="columns"
          ></minimal-grid>`)($rootScope);
      }).toThrowError('minimalGrid error: rows must be an Array')
    });

    it('pagination-max assigned String expected error "minimalGrid error: pagination-max must be a Number"', function () {
      expect(function () {
        element = $compile(`
          <minimal-grid 
            columns="columns"
            rows="rows"
            pagination-max="'10'"
          ></minimal-grid>`)($rootScope);
      }).toThrowError('minimalGrid error: pagination-max must be a Number')
    });

    it('pagination-range assigned String expected error "minimalGrid error: pagination-range must be a Number"', function () {
      expect(function () {
        element = $compile(`
          <minimal-grid 
            columns="columns"
            rows="rows"
            pagination-range="'10'"
          ></minimal-grid>`)($rootScope);
      }).toThrowError('minimalGrid error: pagination-range must be a Number')
    });

    it('pagination-max assigned Array expected error "minimalGrid error: pagination-max must be a Number"', function () {
      expect(function () {
        element = $compile(`
          <minimal-grid 
            columns="columns"
            rows="rows"
            pagination-max="[]"
          ></minimal-grid>`)($rootScope);
      }).toThrowError('minimalGrid error: pagination-max must be a Number')
    });

    it('pagination-range assigned Array expected error "minimalGrid error: pagination-range must be a Number"', function () {
      expect(function () {
        element = $compile(`
          <minimal-grid 
            columns="columns"
            rows="rows"
            pagination-range="[]"
          ></minimal-grid>`)($rootScope);
      }).toThrowError('minimalGrid error: pagination-range must be a Number')
    });

    it('pagination-range assigned Array expected error "minimalGrid error: pagination-range must be a Number"', function () {
      expect(function () {
        element = $compile(`
          <minimal-grid 
            columns="columns"
            rows="rows"
            pagination-range="[]"
          ></minimal-grid>`)($rootScope);
      }).toThrowError('minimalGrid error: pagination-range must be a Number')
    });

    it('on-change-order-by assigned String expected error "minimalGrid error: on-change-order-by must be a Function"', function () {
      element = $compile(`
        <minimal-grid 
          columns="columns"
          rows="rows"
          on-change-order-by="fnOrderBy(orderBy)"
        ></minimal-grid>`)($rootScope);
      $rootScope.$digest()
      console.log(element)
      //expect(function () {
      //}).toThrowError('minimalGrid error: on-change-order-by must be a Function')
    });

    //it('on-change-order-by assigned Array expected error "minimalGrid error: on-change-order-by must be a Function"', function () {
    //  expect(function () {
    //    element = $compile(`
    //      <minimal-grid 
    //        columns="columns"
    //        rows="rows"
    //        on-change-order-by="[function(){ }]"
    //      ></minimal-grid>`)($rootScope);
    //  }).toThrowError('minimalGrid error: on-change-order-by must be a Function')
    //});

    // onChangeOrderBy
    // onChangePaginate
    // onClickRow

  });

});