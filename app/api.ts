const config = require("./config");
const http = require("http");

export function getCoins(): Promise<any> {
    return http.request({
        url: config.url,
        method: 'GET'
    });
}