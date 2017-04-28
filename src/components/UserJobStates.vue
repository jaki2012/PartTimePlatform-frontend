<template>
    <div id="container">
        <div class="clearfix">
            <div class="content_l">
                <dl class="c_delivery">
                    <dt>
                        <h1><em></em>我的兼职状态</h1>
                        <a class="d_refresh" href="javascript:;">刷新</a>
                    </dt>
                    <dd>
                        <div class="delivery_tabs">
                            <ul class="reset">
                                <li class="current">
                                    <a href="delivery.html?tag=-1">全部</a>
                                </li>
                                <li>
                                    <a href="#">兼职进行中</a>
                                </li>
                                <li>
                                    <a href="delivery.html?tag=1">中介互评</a>
                                </li>
                                <li>
                                    <a href="delivery.html?tag=2">已结算</a>
                                </li>
                            </ul>
                        </div>
                        <form id="deliveryForm">
                            <ul class="reset my_delivery">
                                <li>
                                    <div class="d_item">
                                        <h2 title="随便写">
                                            <a target="_blank" href="http://www.lagou.com/jobs/149594.html">
                                                <em>随便写</em>
                                                <span>（1k-2k）</span>
                                                <!--  -->
                                            </a>
                                        </h2>
                                        <h4>
                                            <a target="_blank" href="http://www.lagou.com/jobs/149594.html">
                                                <em>我已评价</em>
                                                <!--  -->
                                            </a>
                                        </h4>
                                        <div class="clear"></div>
                                        <a title="公司名称" class="d_jobname" target="_blank" href="http://www.lagou.com/c/25927.html">
                                                公司名称 <span>[上海]</span> 
                                            </a>
                                        <span class="d_time">2014-07-01 17:15</span>
                                        <div class="clear"></div>
                                        <div class="d_resume">
                                            使用简历：
                                            <span>
                                                                                                在线简历
                                                                                            </span>
                                        </div>
                                        <a class="btn_showprogress" href="javascript:;">
                                                                                                        中介互评
                                                                                                <i></i></a>
                                    </div>
                                    <div class="progress_status	dn">
                                        <ul class="status_steps">
                                            <li class="status_done status_1">1</li>
                                            <li class="status_line status_line_done"><span></span></li>
                                            <li class="status_done"><span>2</span></li>
                                            <li class="status_line status_line_done"><span></span></li>
                                            <li class="status_done"><span>3</span></li>
                                            <li class="status_line status_line_done"><span></span></li>
                                            <li class="status_done"><span>4</span></li>
                                        </ul>
                                        <ul class="status_text">
                                            <li>投递成功</li>
                                            <li class="status_text_2">简历被查看</li>
                                            <li class="status_text_3">通过初步筛选</li>
                                            <li style="margin-left: 75px;*margin-left: 60px;" class="status_text_4">不合适</li>
                                        </ul>
                                        <ul class="status_list">
                                            <li class="top">
                                                <div class="list_time"><em></em>2014-07-01 17:15</div>
                                                <div class="list_body">
                                                    简历被lixiang标记为不合适
                                                    <div>您的简历已收到，但目前您的工作经历与该职位不是很匹配，因此很抱歉地通知您无法进入面试。</div>
                                                </div>
                                            </li>
                                            <li class="bottom">
                                                <div class="list_time"><em></em>2014-07-01 17:08</div>
                                                <div class="list_body">
                                                    lixiang已成功接收你的简历 </div>
                                            </li>
                                        </ul>
                                        <a class="btn_closeprogress" href="javascript:;"></a>
                                    </div>
                                </li>
                            </ul>
                            <input type="hidden" value="-1" name="tag">
                            <input type="hidden" value="" name="r">
                        </form>
                    </dd>
                </dl>
            </div>
            <div class="content_r">
                <div class="mycenterR" id="myInfo">
                    <h2>我的信息</h2>
                    <a href="collections.html">我收藏的职位</a>
                    <br>
                    <a href="toudi.html" target="_blank">我投递的职位<span id="noticeNoPage" class="red dn">&nbsp;(0)</span></a>
                    <br>
                    <a target="_blank" href="subscribe.html">我订阅的职位</a>
                    <br>
                    <a target="_blank" href="mList.html">我的职位推荐</a>
                </div>
                <!--end #myInfo-->
                <div class="mycenterR" id="myRecommend">
                    <h2>可能适合你的职位 <i>匹配度</i></h2>
                    <ul class="reset">
                        <li>
                            <a target="_blank" href="http://www.lagou.com/jobs/22194.html">
                                <span class="f16">产品经理</span>
                                <span class="c7">广州百田</span>
                                <em>92%</em>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="http://www.lagou.com/jobs/148004.html">
                                <span class="f16">产品经理</span>
                                <span class="c7">短讯神州</span>
                                <em>92%</em>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="http://www.lagou.com/jobs/46793.html">
                                <span class="f16">产品经理</span>
                                <span class="c7">爱拍</span>
                                <em>89%</em>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="http://www.lagou.com/jobs/99307.html">
                                <span class="f16">产品经理</span>
                                <span class="c7">一彩票</span>
                                <em>88%</em>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="http://www.lagou.com/jobs/147510.html">
                                <span class="f16">产品经理</span>
                                <span class="c7">林安集团</span>
                                <em>88%</em>
                            </a>
                        </li>
                    </ul>
                    <a target="_blank" class="more" href="mList.html">更多推荐职位&gt;&gt;</a>
                </div>
                <!--end #myRecommend-->
                <div class="greybg qrcode mt20">
                    <img width="242" height="242" alt="拉勾微信公众号二维码" src="style/images/qr_delivery.png">
                    <span class="c7">扫描拉勾二维码，微信轻松搜工作</span>
                </div>
            </div>
        </div>
        <input type="hidden" id="userid" name="userid" value="314873">
        <div class="dn" id="recordPopBox">
            <dl>
                <dt>
                    评价面试体验
                    <a class="boxclose" href="javascript:;"></a>
                </dt>
                <dd>
                    <form id="recordForm">
                        <input type="hidden" value="" id="recordId">
                        <ul id="interviewResult" class="record_radio clearfix">
                            <li class="mr35">
                                已收到offer
                                <input type="radio" name="type" value="1">
                            </li>
                            <li>
                                未收到offer
                                <input type="radio" name="type" value="2">
                            </li>
                        </ul>
                        <div class="dividebtm">
                            <table>
                                <tbody>
                                    <tr>
                                        <td width="80" valign="top" align="right">面试评分：</td>
                                        <td>
                                            <ul id="recordStarSelect">
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                            <input type="hidden" id="recordStar" value="" name="recordStar">
                                            <div class="clear"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="top" align="right" class="dividebtman">面试短评：</td>
                                        <td>

                                            <input type="hidden" class="error" id="select_record_hidden" value="" name="record">
                                            <input type="text" autocomplete="off" placeholder="15字以内对面试的简单描述哦" id="select_record" class="selectr_340" maxlength="15">
                                            <div class="boxUpDownan boxUpDown_340 dn" id="box_record" style="display: none;">
                                                <ul>
                                                    <p>热门短评：</p>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="top" align="right" class="dividebtman">面试经历：</td>
                                        <td>
                                            <textarea id="interviewDesc" placeholder="记录下自己的面试经历" style="width: 320px;"></textarea>
                                            <div class="word_count">你还可以输入 <span>500</span> 字</div>
                                            <div id="showName" class="f14 c7">
                                                <label class="checkbox">
                                            <input type="checkbox">
                                            <i></i>
                                        </label> 匿名提交
                                            </div>
                                            <input type="hidden" value="" id="isShowName">
                                            <input type="hidden" value="" id="senduid">
                                            <input type="hidden" value="" id="poid">
                                            <input type="hidden" value="" id="deid">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right" colspan="2">
                                            <input type="submit" value="确认提交" class="submitRecord btn_small">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                </dd>
            </dl>
        </div>
        <!-- end #recordPopBox -->
        <div class="clear"></div>
        <input type="hidden" value="" id="resubmitToken">
        <a rel="nofollow" title="回到顶部" id="backtop" style="display: none;"></a>
    </div>
    <!-- end #container -->
</template>
<script>
export default {
    name: 'userjobstates',
    mounted: function() {
        $('.delivery_tabs li').on('click',function() {
            $('.delivery_tabs .current').removeClass('current');
            $(this).addClass('current');
        })
    }
}
</script>

<style scoped>
   @import '../assets/css/style.css';
   @import '../assets/css/popup.css';
   .my_delivery h4{
       margin: 7px 0 3px 0;
       float: right;
   }
</style>