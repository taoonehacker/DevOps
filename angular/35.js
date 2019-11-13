(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/@angular/common/locales/ast.js":
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/ast.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        return 5;
    }
    exports.default = [
        'ast', [['a', 'p'], ['AM', 'PM'], ['de la mañana', 'de la tarde']],
        [['a', 'p'], ['AM', 'PM'], ['mañana', 'tarde']],
        [
            ['D', 'L', 'M', 'M', 'X', 'V', 'S'], ['dom', 'llu', 'mar', 'mié', 'xue', 'vie', 'sáb'],
            ['domingu', 'llunes', 'martes', 'miércoles', 'xueves', 'vienres', 'sábadu'],
            ['do', 'll', 'ma', 'mi', 'xu', 'vi', 'sá']
        ],
        u,
        [
            ['X', 'F', 'M', 'A', 'M', 'X', 'X', 'A', 'S', 'O', 'P', 'A'],
            ['xin', 'feb', 'mar', 'abr', 'may', 'xun', 'xnt', 'ago', 'set', 'och', 'pay', 'avi'],
            [
                'de xineru', 'de febreru', 'de marzu', 'd’abril', 'de mayu', 'de xunu', 'de xunetu',
                'd’agostu', 'de setiembre', 'd’ochobre', 'de payares', 'd’avientu'
            ]
        ],
        [
            ['X', 'F', 'M', 'A', 'M', 'X', 'X', 'A', 'S', 'O', 'P', 'A'],
            ['Xin', 'Feb', 'Mar', 'Abr', 'May', 'Xun', 'Xnt', 'Ago', 'Set', 'Och', 'Pay', 'Avi'],
            [
                'xineru', 'febreru', 'marzu', 'abril', 'mayu', 'xunu', 'xunetu', 'agostu', 'setiembre',
                'ochobre', 'payares', 'avientu'
            ]
        ],
        [['e.C.', 'd.C.'], u, ['enantes de Cristu', 'después de Cristu']], 1, [6, 0],
        ['d/M/yy', 'd MMM y', 'd MMMM \'de\' y', 'EEEE, d MMMM \'de\' y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1} {0}', '{1}, {0}', '{1} \'a\' \'les\' {0}', u],
        [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'ND', ':'],
        ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'], '€', 'euro', {
            'BYN': [],
            'DKK': [],
            'HRK': [],
            'ISK': [],
            'NOK': [],
            'PLN': [],
            'RUR': [],
            'SEK': [],
            'THB': ['฿'],
            'TWD': ['NT$']
        },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY29tbW9uL2xvY2FsZXMvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgseUNBQXlDO0lBQ3pDLCtDQUErQztJQUUvQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsU0FBUyxNQUFNLENBQUMsQ0FBUztRQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2xGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMvQztZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdEYsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUM7WUFDM0UsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7U0FDM0M7UUFDRCxDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVELENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDcEY7Z0JBQ0UsV0FBVyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVztnQkFDbkYsVUFBVSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVc7YUFDbkU7U0FDRjtRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3BGO2dCQUNFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVztnQkFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO2FBQ2hDO1NBQ0Y7UUFDRCxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsQ0FBQztRQUNqRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQztRQUNwRCxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7UUFDN0QsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO1lBQ3pELEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7U0FDZjtRQUNELE1BQU07S0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSksIHYgPSBuLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKS5sZW5ndGg7XG4gIGlmIChpID09PSAxICYmIHYgPT09IDApIHJldHVybiAxO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnYXN0JywgW1snYScsICdwJ10sIFsnQU0nLCAnUE0nXSwgWydkZSBsYSBtYcOxYW5hJywgJ2RlIGxhIHRhcmRlJ11dLFxuICBbWydhJywgJ3AnXSwgWydBTScsICdQTSddLCBbJ21hw7FhbmEnLCAndGFyZGUnXV0sXG4gIFtcbiAgICBbJ0QnLCAnTCcsICdNJywgJ00nLCAnWCcsICdWJywgJ1MnXSwgWydkb20nLCAnbGx1JywgJ21hcicsICdtacOpJywgJ3h1ZScsICd2aWUnLCAnc8OhYiddLFxuICAgIFsnZG9taW5ndScsICdsbHVuZXMnLCAnbWFydGVzJywgJ21pw6lyY29sZXMnLCAneHVldmVzJywgJ3ZpZW5yZXMnLCAnc8OhYmFkdSddLFxuICAgIFsnZG8nLCAnbGwnLCAnbWEnLCAnbWknLCAneHUnLCAndmknLCAnc8OhJ11cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFsnWCcsICdGJywgJ00nLCAnQScsICdNJywgJ1gnLCAnWCcsICdBJywgJ1MnLCAnTycsICdQJywgJ0EnXSxcbiAgICBbJ3hpbicsICdmZWInLCAnbWFyJywgJ2FicicsICdtYXknLCAneHVuJywgJ3hudCcsICdhZ28nLCAnc2V0JywgJ29jaCcsICdwYXknLCAnYXZpJ10sXG4gICAgW1xuICAgICAgJ2RlIHhpbmVydScsICdkZSBmZWJyZXJ1JywgJ2RlIG1hcnp1JywgJ2TigJlhYnJpbCcsICdkZSBtYXl1JywgJ2RlIHh1bnUnLCAnZGUgeHVuZXR1JyxcbiAgICAgICdk4oCZYWdvc3R1JywgJ2RlIHNldGllbWJyZScsICdk4oCZb2Nob2JyZScsICdkZSBwYXlhcmVzJywgJ2TigJlhdmllbnR1J1xuICAgIF1cbiAgXSxcbiAgW1xuICAgIFsnWCcsICdGJywgJ00nLCAnQScsICdNJywgJ1gnLCAnWCcsICdBJywgJ1MnLCAnTycsICdQJywgJ0EnXSxcbiAgICBbJ1hpbicsICdGZWInLCAnTWFyJywgJ0FicicsICdNYXknLCAnWHVuJywgJ1hudCcsICdBZ28nLCAnU2V0JywgJ09jaCcsICdQYXknLCAnQXZpJ10sXG4gICAgW1xuICAgICAgJ3hpbmVydScsICdmZWJyZXJ1JywgJ21hcnp1JywgJ2FicmlsJywgJ21heXUnLCAneHVudScsICd4dW5ldHUnLCAnYWdvc3R1JywgJ3NldGllbWJyZScsXG4gICAgICAnb2Nob2JyZScsICdwYXlhcmVzJywgJ2F2aWVudHUnXG4gICAgXVxuICBdLFxuICBbWydlLkMuJywgJ2QuQy4nXSwgdSwgWydlbmFudGVzIGRlIENyaXN0dScsICdkZXNwdcOpcyBkZSBDcmlzdHUnXV0sIDEsIFs2LCAwXSxcbiAgWydkL00veXknLCAnZCBNTU0geScsICdkIE1NTU0gXFwnZGVcXCcgeScsICdFRUVFLCBkIE1NTU0gXFwnZGVcXCcgeSddLFxuICBbJ0hIOm1tJywgJ0hIOm1tOnNzJywgJ0hIOm1tOnNzIHonLCAnSEg6bW06c3Mgenp6eiddLFxuICBbJ3sxfSB7MH0nLCAnezF9LCB7MH0nLCAnezF9IFxcJ2FcXCcgXFwnbGVzXFwnIHswfScsIHVdLFxuICBbJywnLCAnLicsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdORCcsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwJScsICcjLCMjMC4wMMKgwqQnLCAnI0UwJ10sICfigqwnLCAnZXVybycsIHtcbiAgICAnQllOJzogW10sXG4gICAgJ0RLSyc6IFtdLFxuICAgICdIUksnOiBbXSxcbiAgICAnSVNLJzogW10sXG4gICAgJ05PSyc6IFtdLFxuICAgICdQTE4nOiBbXSxcbiAgICAnUlVSJzogW10sXG4gICAgJ1NFSyc6IFtdLFxuICAgICdUSEInOiBbJ+C4vyddLFxuICAgICdUV0QnOiBbJ05UJCddXG4gIH0sXG4gIHBsdXJhbFxuXTtcbiJdfQ==

/***/ })

}]);
//# sourceMappingURL=35.js.map