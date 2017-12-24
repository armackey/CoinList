"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("tns-core-modules/ui/frame/frame");
var SpecificCoin = (function (_super) {
    __extends(SpecificCoin, _super);
    function SpecificCoin(coin) {
        var _this = _super.call(this) || this;
        _this.coin = coin;
        _this.set('symbol', _this.coin.symbol);
        _this.set('rank', _this.coin.rank);
        _this.set('price', _this.coin.price_usd);
        _this.set('percent_change_24h', _this.coin.percent_change_24h + '%');
        _this.set('percent_change_7d', _this.coin.percent_change_7d + '%');
        _this.set('percent_change_1h', _this.coin.percent_change_1h + '%');
        return _this;
    }
    return SpecificCoin;
}(frame_1.Observable));
function navigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    var coin = page.navigationContext;
    page.bindingContext = new SpecificCoin(coin);
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7RUFJRTs7QUFJRix5REFBNkQ7QUFFN0Q7SUFBMkIsZ0NBQVU7SUFRakMsc0JBQW9CLElBQUk7UUFBeEIsWUFDSSxpQkFBTyxTQVFWO1FBVG1CLFVBQUksR0FBSixJQUFJLENBQUE7UUFFcEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLEtBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNqRSxLQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLENBQUM7O0lBRXJFLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFsQkQsQ0FBMkIsa0JBQVUsR0FrQnBDO0FBRUQsc0JBQTZCLElBQWU7SUFDeEM7Ozs7TUFJRTtJQUNGLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFN0I7Ozs7Ozs7OztNQVNFO0lBQ0YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakQsQ0FBQztBQXBCRCxvQ0FvQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCBhIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIGFuIFhNTCBmaWxlIGlzIGtub3duIGFzXG5hIGNvZGUtYmVoaW5kIGZpbGUuIFRoZSBjb2RlLWJlaGluZCBpcyBhIGdyZWF0IHBsYWNlIHRvIHBsYWNlIHlvdXIgdmlld1xubG9naWMsIGFuZCB0byBzZXQgdXAgeW91ciBwYWdl4oCZcyBkYXRhIGJpbmRpbmcuXG4qL1xuXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWUnO1xuXG5jbGFzcyBTcGVjaWZpY0NvaW4gZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBzeW1ib2w6IHN0cmluZztcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIHBlcmNlbnRfY2hhbmdlXzI0aDogc3RyaW5nO1xuICAgIHBlcmNlbnRfY2hhbmdlXzdkOiBzdHJpbmc7XG4gICAgcGVyY2VudF9jaGFuZ2VfMWg6IHN0cmluZztcbiAgICByYW5rOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvaW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zZXQoJ3N5bWJvbCcsIHRoaXMuY29pbi5zeW1ib2wpO1xuICAgICAgICB0aGlzLnNldCgncmFuaycsIHRoaXMuY29pbi5yYW5rKTtcbiAgICAgICAgdGhpcy5zZXQoJ3ByaWNlJywgdGhpcy5jb2luLnByaWNlX3VzZCk7XG4gICAgICAgIHRoaXMuc2V0KCdwZXJjZW50X2NoYW5nZV8yNGgnLCB0aGlzLmNvaW4ucGVyY2VudF9jaGFuZ2VfMjRoICsgJyUnKTtcbiAgICAgICAgdGhpcy5zZXQoJ3BlcmNlbnRfY2hhbmdlXzdkJywgdGhpcy5jb2luLnBlcmNlbnRfY2hhbmdlXzdkICsgJyUnKTtcbiAgICAgICAgdGhpcy5zZXQoJ3BlcmNlbnRfY2hhbmdlXzFoJywgdGhpcy5jb2luLnBlcmNlbnRfY2hhbmdlXzFoICsgJyUnKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICAvKlxuICAgIFRoaXMgZ2V0cyBhIHJlZmVyZW5jZSB0aGlzIHBhZ2XigJlzIDxQYWdlPiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxuICAgICovXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICAgIC8qXG4gICAgQSBwYWdl4oCZcyBiaW5kaW5nQ29udGV4dCBpcyBhbiBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBwZXJmb3JtXG4gICAgZGF0YSBiaW5kaW5nIGJldHdlZW4gWE1MIG1hcmt1cCBhbmQgVHlwZVNjcmlwdCBjb2RlLiBQcm9wZXJ0aWVzXG4gICAgb24gdGhlIGJpbmRpbmdDb250ZXh0IGNhbiBiZSBhY2Nlc3NlZCB1c2luZyB0aGUge3sgfX0gc3ludGF4IGluIFhNTC5cbiAgICBJbiB0aGlzIGV4YW1wbGUsIHRoZSB7eyBtZXNzYWdlIH19IGFuZCB7eyBvblRhcCB9fSBiaW5kaW5ncyBhcmUgcmVzb2x2ZWRcbiAgICBhZ2FpbnN0IHRoZSBvYmplY3QgcmV0dXJuZWQgYnkgY3JlYXRlVmlld01vZGVsKCkuXG5cbiAgICBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgZGF0YSBiaW5kaW5nIGluIE5hdGl2ZVNjcmlwdCBhdFxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2NvcmUtY29uY2VwdHMvZGF0YS1iaW5kaW5nLlxuICAgICovXG4gICAgbGV0IGNvaW4gPSBwYWdlLm5hdmlnYXRpb25Db250ZXh0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgU3BlY2lmaWNDb2luKGNvaW4pO1xufSJdfQ==