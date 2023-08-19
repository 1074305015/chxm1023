/*************************************

项目名称：刷刷题
下载地址：https://t.cn/A60szmtc
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.shuashuati\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/shuashuati.js

[mitm]
hostname = api.shuashuati.com

*************************************/


var body = $response.body;

body = body.replace(/\"state":\d+/g, '\"state":2');

body = body.replace(/\"vipToTime":\w+/g, '\"vipToTime":"2099-09-09 09:09:09"');

body = body.replace(/\"vipToTimeStr":\w+/g, '\"vipToTimeStr":"2099-09-09 09:09:09"');

body = body.replace(/\"ad":\d+/g, '\"ad":0');

body = body.replace(/\"adInfo"/g, '\"chxm1023"');

body = body.replace(/\"free":\d+/g, '\"free":1');

body = body.replace(/\"iosPay":\d+/g, '\"iosPay":2');

body = body.replace(/\"word_vip":\d+/g, '\"word_vip":2');

body = body.replace(/\"home_dou_vip":\d+/g, '\"home_dou_vip":2');

body = body.replace(/\"math_vip":\d+/g, '\"math_vip":2');

body = body.replace(/\"audit":\d+/g, '\"audit":1');

$done({body});
