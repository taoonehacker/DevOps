(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[816],{

/***/ "./node_modules/@angular/common/locales/gv.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/locales/gv.js ***!
  \****************************************************/
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
        if (v === 0 && i % 10 === 1)
            return 1;
        if (v === 0 && i % 10 === 2)
            return 2;
        if (v === 0 &&
            (i % 100 === 0 || i % 100 === 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80))
            return 3;
        if (!(v === 0))
            return 4;
        return 5;
    }
    exports.default = [
        'gv', [['a.m.', 'p.m.'], u, u], u,
        [
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'], ['Jed', 'Jel', 'Jem', 'Jerc', 'Jerd', 'Jeh', 'Jes'],
            ['Jedoonee', 'Jelhein', 'Jemayrt', 'Jercean', 'Jerdein', 'Jeheiney', 'Jesarn'],
            ['Jed', 'Jel', 'Jem', 'Jerc', 'Jerd', 'Jeh', 'Jes']
        ],
        u,
        [
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            [
                'J-guer', 'T-arree', 'Mayrnt', 'Avrril', 'Boaldyn', 'M-souree', 'J-souree', 'Luanistyn',
                'M-fouyir', 'J-fouyir', 'M-Houney', 'M-Nollick'
            ],
            [
                'Jerrey-geuree', 'Toshiaght-arree', 'Mayrnt', 'Averil', 'Boaldyn', 'Mean-souree',
                'Jerrey-souree', 'Luanistyn', 'Mean-fouyir', 'Jerrey-fouyir', 'Mee Houney', 'Mee ny Nollick'
            ]
        ],
        u, [['RC', 'AD'], u, u], 1, [6, 0], ['y-MM-dd', 'y MMM d', 'y MMMM d', 'y MMMM d, EEEE'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1} {0}', u, u, u],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'], '£', 'GBP',
        { 'JPY': ['JP¥', '¥'], 'USD': ['US$', '$'] }, plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3YuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9jb21tb24vbG9jYWxlcy9ndi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDUCxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxDQUFDO1lBQ3pGLE9BQU8sQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDakM7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3hGLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDO1lBQzlFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1NBQ3BEO1FBQ0QsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztZQUMvRDtnQkFDRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVztnQkFDdkYsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVzthQUNoRDtZQUNEO2dCQUNFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxhQUFhO2dCQUNoRixlQUFlLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGdCQUFnQjthQUM3RjtTQUNGO1FBQ0QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixDQUFDO1FBQ3hGLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztRQUM5RCxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLO1FBQ3ZELEVBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBQyxFQUFFLE1BQU07S0FDbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpLCB2ID0gbi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJykubGVuZ3RoO1xuICBpZiAodiA9PT0gMCAmJiBpICUgMTAgPT09IDEpIHJldHVybiAxO1xuICBpZiAodiA9PT0gMCAmJiBpICUgMTAgPT09IDIpIHJldHVybiAyO1xuICBpZiAodiA9PT0gMCAmJlxuICAgICAgKGkgJSAxMDAgPT09IDAgfHwgaSAlIDEwMCA9PT0gMjAgfHwgaSAlIDEwMCA9PT0gNDAgfHwgaSAlIDEwMCA9PT0gNjAgfHwgaSAlIDEwMCA9PT0gODApKVxuICAgIHJldHVybiAzO1xuICBpZiAoISh2ID09PSAwKSkgcmV0dXJuIDQ7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdndicsIFtbJ2EubS4nLCAncC5tLiddLCB1LCB1XSwgdSxcbiAgW1xuICAgIFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLCBbJ0plZCcsICdKZWwnLCAnSmVtJywgJ0plcmMnLCAnSmVyZCcsICdKZWgnLCAnSmVzJ10sXG4gICAgWydKZWRvb25lZScsICdKZWxoZWluJywgJ0plbWF5cnQnLCAnSmVyY2VhbicsICdKZXJkZWluJywgJ0plaGVpbmV5JywgJ0plc2FybiddLFxuICAgIFsnSmVkJywgJ0plbCcsICdKZW0nLCAnSmVyYycsICdKZXJkJywgJ0plaCcsICdKZXMnXVxuICBdLFxuICB1LFxuICBbXG4gICAgWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMiddLFxuICAgIFtcbiAgICAgICdKLWd1ZXInLCAnVC1hcnJlZScsICdNYXlybnQnLCAnQXZycmlsJywgJ0JvYWxkeW4nLCAnTS1zb3VyZWUnLCAnSi1zb3VyZWUnLCAnTHVhbmlzdHluJyxcbiAgICAgICdNLWZvdXlpcicsICdKLWZvdXlpcicsICdNLUhvdW5leScsICdNLU5vbGxpY2snXG4gICAgXSxcbiAgICBbXG4gICAgICAnSmVycmV5LWdldXJlZScsICdUb3NoaWFnaHQtYXJyZWUnLCAnTWF5cm50JywgJ0F2ZXJpbCcsICdCb2FsZHluJywgJ01lYW4tc291cmVlJyxcbiAgICAgICdKZXJyZXktc291cmVlJywgJ0x1YW5pc3R5bicsICdNZWFuLWZvdXlpcicsICdKZXJyZXktZm91eWlyJywgJ01lZSBIb3VuZXknLCAnTWVlIG55IE5vbGxpY2snXG4gICAgXVxuICBdLFxuICB1LCBbWydSQycsICdBRCddLCB1LCB1XSwgMSwgWzYsIDBdLCBbJ3ktTU0tZGQnLCAneSBNTU0gZCcsICd5IE1NTU0gZCcsICd5IE1NTU0gZCwgRUVFRSddLFxuICBbJ0hIOm1tJywgJ0hIOm1tOnNzJywgJ0hIOm1tOnNzIHonLCAnSEg6bW06c3Mgenp6eiddLCBbJ3sxfSB7MH0nLCB1LCB1LCB1XSxcbiAgWycuJywgJywnLCAnOycsICclJywgJysnLCAnLScsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzAlJywgJ8KkIywjIzAuMDAnLCAnI0UwJ10sICfCoycsICdHQlAnLFxuICB7J0pQWSc6IFsnSlDCpScsICfCpSddLCAnVVNEJzogWydVUyQnLCAnJCddfSwgcGx1cmFsXG5dO1xuIl19

/***/ })

}]);
//# sourceMappingURL=816.js.map