/*************************************

项目名称：彩云天气-净化/部分SVIP
下载地址：https://t.cn/A66d95hV
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js
^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

[mitm]
hostname = *.cyapi.cn, adx.sogaha.cn

*************************************/


var chxm1023 = JSON.parse($response.body);
const vip = '/vip_info';
const adhf = '/activity';
const user = '(user|visitors)';

if ($request.url.indexOf(vip) != -1){
    chxm1023.vip = {
    "expires_time" : "4092599349",
    "is_auto_renewal" : true
  };
    chxm1023.svip = {
    "expires_time" : "4092599349",
    "is_auto_renewal" : true
  };
}

if ($request.url.indexOf(adhf) != -1){
    chxm1023.activities = [];
}

if ($request.url.indexOf('user') != -1){
    chxm1023.result.ranking_above = 99;
    chxm1023.result.is_vip = true;
    chxm1023.result.vip_expired_at = 4092599349;
    chxm1023.result.svip_given = 9999;
    chxm1023.result.is_xy_vip = true;
    chxm1023.result.xy_svip_expire = 4092599349; 
    chxm1023.result.wt.vip = {
        "auto_renewal_type" : "",
        "expired_at" : 0,
        "enabled" : true,
        "svip_apple_expired_at" : 4092599349,
        "is_auto_renewal" : true,
        "svip_expired_at" : 4092599349,
        "svip_auto_renewal_type" : ""
      };
    chxm1023.result.wt.svip_given = 9999;
    chxm1023.result.wt.ranking_above = 99;
    chxm1023.result.is_phone_verified = true;
    chxm1023.result.phone_num = "13145200000";
    chxm1023.result.vip_take_effect = 1;
    chxm1023.result.is_primary = true;
    chxm1023.result.xy_vip_expire = 4092599349;
    chxm1023.result.svip_expired_at = 4092599349;
    chxm1023.result.svip_take_effect = 1;
    chxm1023.result.vip_type = "s";
}

$done({ body: JSON.stringify(chxm1023)});
