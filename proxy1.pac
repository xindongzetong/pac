// http://pac.itzmx.com

var proxy = "PROXY 100ba634.all123.net:8383;";

var domains = {
  "wenku.baidu.com": 1,
  "cnki.net": 1,
};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {

    var suffix;
    var pos = host.lastIndexOf('.');
    while(1) {
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        if (pos <= 0) {
            break;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
    return direct;
}
