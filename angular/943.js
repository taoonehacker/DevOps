(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[943],{

/***/ "./node_modules/@angular/common/locales/ro-MD.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/locales/ro-MD.js ***!
  \*******************************************************/
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
        if (!(v === 0) || n === 0 ||
            !(n === 1) && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19)
            return 3;
        return 5;
    }
    exports.default = [
        'ro-MD', [['a.m.', 'p.m.'], u, u], u,
        [
            ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S'], ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
            ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
            ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ']
        ],
        u,
        [
            ['I', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'D'],
            [
                'ian.', 'feb.', 'mar.', 'apr.', 'mai', 'iun.', 'iul.', 'aug.', 'sept.', 'oct.', 'nov.', 'dec.'
            ],
            [
                'ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie',
                'octombrie', 'noiembrie', 'decembrie'
            ]
        ],
        u, [['î.Hr.', 'd.Hr.'], u, ['înainte de Hristos', 'după Hristos']], 1, [6, 0],
        ['dd.MM.y', 'd MMM y', 'd MMMM y', 'EEEE, d MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1}, {0}', u, u, u],
        [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], 'L', 'leu moldovenesc', {
            'AUD': [u, '$'],
            'BRL': [u, 'R$'],
            'CAD': [u, '$'],
            'CNY': [u, '¥'],
            'EUR': [u, '€'],
            'GBP': [u, '£'],
            'HKD': [u, '$'],
            'ILS': [u, '₪'],
            'INR': [u, '₹'],
            'JPY': [u, '¥'],
            'KRW': [u, '₩'],
            'MDL': ['L'],
            'MXN': [u, '$'],
            'NZD': [u, '$'],
            'TWD': [u, 'NT$'],
            'USD': [u, '$'],
            'VND': [u, '₫'],
            'XCD': [u, '$']
        },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm8tTUQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9jb21tb24vbG9jYWxlcy9yby1NRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRTtZQUNoRixPQUFPLENBQUMsQ0FBQztRQUNYLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEM7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3hGLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDO1lBQ3JFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQzNDO1FBQ0QsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RDtnQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07YUFDL0Y7WUFDRDtnQkFDRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVk7Z0JBQzdGLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVzthQUN0QztTQUNGO1FBQ0QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7UUFDcEQsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDO1FBQzlELENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFO1lBQ3JFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNaLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7U0FDaEI7UUFDRCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpLCB2ID0gbi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJykubGVuZ3RoO1xuICBpZiAoaSA9PT0gMSAmJiB2ID09PSAwKSByZXR1cm4gMTtcbiAgaWYgKCEodiA9PT0gMCkgfHwgbiA9PT0gMCB8fFxuICAgICAgIShuID09PSAxKSAmJiBuICUgMTAwID09PSBNYXRoLmZsb29yKG4gJSAxMDApICYmIG4gJSAxMDAgPj0gMSAmJiBuICUgMTAwIDw9IDE5KVxuICAgIHJldHVybiAzO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAncm8tTUQnLCBbWydhLm0uJywgJ3AubS4nXSwgdSwgdV0sIHUsXG4gIFtcbiAgICBbJ0QnLCAnTCcsICdNYScsICdNaScsICdKJywgJ1YnLCAnUyddLCBbJ0R1bScsICdMdW4nLCAnTWFyJywgJ01pZScsICdKb2knLCAnVmluJywgJ1PDom0nXSxcbiAgICBbJ2R1bWluaWPEgycsICdsdW5pJywgJ21hcsibaScsICdtaWVyY3VyaScsICdqb2knLCAndmluZXJpJywgJ3PDom1ixIN0xIMnXSxcbiAgICBbJ0R1JywgJ0x1JywgJ01hJywgJ01pJywgJ0pvJywgJ1ZpJywgJ1PDoiddXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ0knLCAnRicsICdNJywgJ0EnLCAnTScsICdJJywgJ0knLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gICAgW1xuICAgICAgJ2lhbi4nLCAnZmViLicsICdtYXIuJywgJ2Fwci4nLCAnbWFpJywgJ2l1bi4nLCAnaXVsLicsICdhdWcuJywgJ3NlcHQuJywgJ29jdC4nLCAnbm92LicsICdkZWMuJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ2lhbnVhcmllJywgJ2ZlYnJ1YXJpZScsICdtYXJ0aWUnLCAnYXByaWxpZScsICdtYWknLCAnaXVuaWUnLCAnaXVsaWUnLCAnYXVndXN0JywgJ3NlcHRlbWJyaWUnLFxuICAgICAgJ29jdG9tYnJpZScsICdub2llbWJyaWUnLCAnZGVjZW1icmllJ1xuICAgIF1cbiAgXSxcbiAgdSwgW1snw64uSHIuJywgJ2QuSHIuJ10sIHUsIFsnw65uYWludGUgZGUgSHJpc3RvcycsICdkdXDEgyBIcmlzdG9zJ11dLCAxLCBbNiwgMF0sXG4gIFsnZGQuTU0ueScsICdkIE1NTSB5JywgJ2QgTU1NTSB5JywgJ0VFRUUsIGQgTU1NTSB5J10sXG4gIFsnSEg6bW0nLCAnSEg6bW06c3MnLCAnSEg6bW06c3MgeicsICdISDptbTpzcyB6enp6J10sIFsnezF9LCB7MH0nLCB1LCB1LCB1XSxcbiAgWycsJywgJy4nLCAnOycsICclJywgJysnLCAnLScsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzDCoCUnLCAnIywjIzAuMDDCoMKkJywgJyNFMCddLCAnTCcsICdsZXUgbW9sZG92ZW5lc2MnLCB7XG4gICAgJ0FVRCc6IFt1LCAnJCddLFxuICAgICdCUkwnOiBbdSwgJ1IkJ10sXG4gICAgJ0NBRCc6IFt1LCAnJCddLFxuICAgICdDTlknOiBbdSwgJ8KlJ10sXG4gICAgJ0VVUic6IFt1LCAn4oKsJ10sXG4gICAgJ0dCUCc6IFt1LCAnwqMnXSxcbiAgICAnSEtEJzogW3UsICckJ10sXG4gICAgJ0lMUyc6IFt1LCAn4oKqJ10sXG4gICAgJ0lOUic6IFt1LCAn4oK5J10sXG4gICAgJ0pQWSc6IFt1LCAnwqUnXSxcbiAgICAnS1JXJzogW3UsICfigqknXSxcbiAgICAnTURMJzogWydMJ10sXG4gICAgJ01YTic6IFt1LCAnJCddLFxuICAgICdOWkQnOiBbdSwgJyQnXSxcbiAgICAnVFdEJzogW3UsICdOVCQnXSxcbiAgICAnVVNEJzogW3UsICckJ10sXG4gICAgJ1ZORCc6IFt1LCAn4oKrJ10sXG4gICAgJ1hDRCc6IFt1LCAnJCddXG4gIH0sXG4gIHBsdXJhbFxuXTtcbiJdfQ==

/***/ })

}]);
//# sourceMappingURL=943.js.map