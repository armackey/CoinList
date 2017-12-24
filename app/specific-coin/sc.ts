/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { Observable } from 'tns-core-modules/ui/frame/frame';

class SpecificCoin extends Observable {
    symbol: string;
    price: number;
    percent_change_24h: string;
    percent_change_7d: string;
    percent_change_1h: string;
    rank: number;

    constructor(private coin) {
        super();
        this.set('symbol', this.coin.symbol);
        this.set('rank', this.coin.rank);
        this.set('price', this.coin.price_usd);
        this.set('percent_change_24h', this.coin.percent_change_24h + '%');
        this.set('percent_change_7d', this.coin.percent_change_7d + '%');
        this.set('percent_change_1h', this.coin.percent_change_1h + '%');

    }
}

export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    let page = <Page>args.object;

    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    let coin = page.navigationContext;
    page.bindingContext = new SpecificCoin(coin);
}