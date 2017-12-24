"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var frameModule = require("tns-core-modules/ui/frame");
var api_1 = require("./api");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        api_1.getCoins()
            .then(function (response) {
            if (response.statusCode === 200) {
                var r = response.content.toJSON();
                _this.set('coins', new observable_array_1.ObservableArray(r));
            }
        }, function (error) {
            console.log(JSON.stringify(error));
        });
        return _this;
    }
    HelloWorldModel.prototype.showMore = function (data) {
        var index = data.index;
        var coin = this.get('coins').getItem(index);
        frameModule.topmost().navigate({
            moduleName: './specific-coin/sc',
            context: coin,
            animated: true
        });
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLDRGQUEwRjtBQUMxRix1REFBeUQ7QUFDekQsNkJBQWlDO0FBR2pDO0lBQXFDLG1DQUFVO0lBSzNDO1FBQUEsWUFDSSxpQkFBTyxTQVVWO1FBVEcsY0FBUSxFQUFFO2FBQ0wsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUNWLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxrQ0FBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsQ0FBQztRQUNMLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQzs7SUFDWCxDQUFDO0lBRU0sa0NBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUMzQixVQUFVLEVBQUUsb0JBQW9CO1lBQ2hDLE9BQU8sRUFBRSxJQUFJO1lBQ2IsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUFxQyx1QkFBVSxHQTRCOUM7QUE1QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG5pbXBvcnQgeyBnZXRDb2lucyB9IGZyb20gJy4vYXBpJztcblxuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgICBwcml2YXRlIF9lcnJvcjogc3RyaW5nO1xuICAgIHByaXZhdGUgY29pbnM6IEFycmF5PGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZ2V0Q29pbnMoKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldCgnY29pbnMnLCBuZXcgT2JzZXJ2YWJsZUFycmF5KHIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93TW9yZShkYXRhKSB7IFxuICAgICAgICBsZXQgaW5kZXggPSBkYXRhLmluZGV4O1xuICAgICAgICBsZXQgY29pbiA9IHRoaXMuZ2V0KCdjb2lucycpLmdldEl0ZW0oaW5kZXgpO1xuICAgICAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJy4vc3BlY2lmaWMtY29pbi9zYycsXG4gICAgICAgICAgICBjb250ZXh0OiBjb2luLFxuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il19