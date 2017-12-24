import {Observable} from 'data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import * as frameModule from "tns-core-modules/ui/frame";
import { getCoins } from './api';


export class HelloWorldModel extends Observable {

    private _error: string;
    private coins: Array<any>;

    constructor() {
        super();
        getCoins()
            .then(response => {
                if (response.statusCode === 200) {
                    var r = response.content.toJSON();
                    this.set('coins', new ObservableArray(r));
                }
            }, error => {
                console.log(JSON.stringify(error));
            });
    }

    public showMore(data) { 
        let index = data.index;
        let coin = this.get('coins').getItem(index);
        frameModule.topmost().navigate({
            moduleName: './specific-coin/sc',
            context: coin,
            animated: true
        });
    }

}