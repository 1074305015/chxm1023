/*************************************

项目名称：靓机汇
下载地址：https://t.cn/A6NMLjKA
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
# 解锁会员信息
^https?:\/\/guapi\.liangjihui\.com\/front\/(quote\/look.+|user\/memberInfo) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/liangjihui.js
# 屏蔽顶部滚屏
^https:\/\/ljh\.dianxiaoman\.com\/ljh\/api\/home\/getHomeList url reject

[mitm]
hostname = guapi.liangjihui.com, ljh.dianxiaoman.com

*************************************/


var chxm1023 = JSON.parse($response.body);

  chxm1023.data.is_pay = true;
  chxm1023.data.experience_card = true;
  chxm1023.data.is_member = true;
  chxm1023.data.end_time = 4092599349;
  chxm1023.data.is_see = true;

$done({body : JSON.stringify(chxm1023)});