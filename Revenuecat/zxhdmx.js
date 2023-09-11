/*************************************

项目名称：真心话大冒险
下载地址：https://t.cn/A6OXZXD6
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Revenuecat/zxhdmx.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/Revenuecat/zxhdmx.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const chxm1023 = {};
const chxm1024 = JSON.parse(typeof $response != "undefined" && $response.内容 || null);

const 名字 = "premium";
const appid = "hurtyou_199_1y";

  
if (typeof $response == "undefined") {
  删除 $request.headers["x-revenuecat-etag"];
  删除 $request.headers["X-RevenueCat-ETag"];
  chxm1023.headers = $request.headers;
} else if (chxm1024 && chxm1024.subscriber) {
  data = {
 "Author": "chxm1023",
 "Telegram" : "https://t.me/chxm1023",
 "warning": "仅供学习，禁止转载或售卖",
 "original_purchase_date": "2022-09-09T09:09:09Z",
 "purchase_date": "2022-09-09T09:09:09Z",
 "expires_date": "2099-09-09T09:09:09Z",
 "store" : "app_store",
 "ownership_type": "PURCHASED"
 };
  chxm1024.subscriber。订阅[(appid)] = data
  chxm1024.subscriber。entitlements[(名字)] = JSON.parse(JSON.stringify(data));
  chxm1024.subscriber。entitlements[(名字)]。product_identifier = (appid);
  chxm1023.内容 = JSON.stringify(chxm1024);
}

$done(chxm1023);
