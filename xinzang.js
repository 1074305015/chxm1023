/*************************************

项目名称：心脏+
下载地址：https://too.st/5DK
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.995120\.cn\/mini\/api\/appleplus\/ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xinzang.js

[mitm]
hostname = api.995120.cn

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.body.data.endTime = "2099-09-09到期";
chxm1023.body.data.yearCard = {
        "status" : 1,
        "content" : "叮当猫の分享频道",
        "balanceNum" : 99999999,
        "endTime" : "2099-09-09到期",
        "balanceName" : "极速心电图（ECG）分析服务",
        "type" : 1,
        "serviceBalanceId" : 2501498
};

$done({body : JSON.stringify(chxm1023)});
