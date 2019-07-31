function FindProxyForURL(url, host) {
   if (shExpMatch(url,"*.google.com/*")) {
     return "PROXY 192.168.1.110:60287";
   }
      if (shExpMatch(url,"*.youtube.com/*")) {
     return "PROXY 192.168.1.110:60287";
   }
   if (isInNet(host, "10.0.0.0",  "255.0.0.0")){
     return "DIRECT";
   }
   return "DIRECT; PROXY 192.168.1.110:60287;"; 
}
