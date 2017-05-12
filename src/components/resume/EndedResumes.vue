<template>
<div id="container">
    <agencysidebar></agencysidebar>
    <div class="content">
        <dl class="company_center_content">
            <dt>
                <h1>
                    <em></em> 已结算申请 <span>（共1份）</span> </h1>
            </dt>
            <dd>
                <form action="haveRefuseResumes.html" method="get" id="filterForm">
                    <div class="filter_actions ">
                        <label class="checkbox">
		                        		<input type="checkbox">
		                                <i></i>
		                        	</label>
                        <span>全选</span>
                        <a id="resumeDelAll" href="javascript:;">删除</a>
                        <div id="filter_btn">筛选简历 <em></em></div>
                    </div>
                    <!-- end .filter_actions -->
                    <div class="filter_options  dn ">
                        <dl>
                            <dt>简历状态：</dt>
                            <dd>
                                <a rel="-1" class="current" href="javascript:;">不限</a>
                                <a rel="1" href="javascript:;">未阅读</a>
                                <a rel="2" href="javascript:;">已阅读</a>
                                <a rel="3" href="javascript:;">已转发</a>
                                <input type="hidden" value="-1" name="resumeStatus">
                            </dd>
                        </dl>
                        <dl>
                            <dt>简历形式：</dt>
                            <dd>
                                <a rel="-1" class="current" href="javascript:;">不限</a>
                                <a rel="0" href="javascript:;">附件简历</a>
                                <a rel="1" href="javascript:;">在线简历</a>
                                <input type="hidden" value="-1" name="resumeType">
                            </dd>
                        </dl>
                        <dl>
                            <dt>工作经验：</dt>
                            <dd>
                                <a rel="-1" class="current" href="javascript:;">不限</a>
                                <a rel="1" href="javascript:;">应届毕业生</a>
                                <a rel="2" href="javascript:;">一年以下</a>
                                <a rel="3" href="javascript:;">1-3年</a>
                                <a rel="4" href="javascript:;">3-5年</a>
                                <a rel="5" href="javascript:;">5-10年</a>
                                <a rel="6" href="javascript:;">10年以上</a>
                                <input type="hidden" value="-1" name="workExp">
                            </dd>
                        </dl>
                        <dl>
                            <dt>最低学历：</dt>
                            <dd>
                                <a rel="-1" class="current" href="javascript:;">不限</a>
                                <a rel="1" href="javascript:;">大专及以上</a>
                                <a rel="2" href="javascript:;">本科及以上</a>
                                <a rel="3" href="javascript:;">硕士及以上</a>
                                <a rel="4" href="javascript:;">博士及以上</a>
                                <input type="hidden" value="-1" name="eduExp">
                            </dd>
                        </dl>
                        <input type="hidden" value="0" name="filterStatus" id="filterStatus">
                        <input type="hidden" value="" name="positionId" id="positionId">
                    </div>
                    <!-- end .filter_options -->
                    <ul class="reset resumeLists">
                    <template v-for="job in jobs">
                    <template v-for="resume in job.Txs">
                    <li data-id="1686181" class="onlineResume">
                            <label class="checkbox">
			                                    <input type="checkbox">
			                                    <i></i>
			                                </label>
                            <div class="resumeShow">
                                <a title="预览在线简历" target="_blank" class="resumeImg" href="resumeView.html?deliverId=1686182">
                                    <img src="../../assets/images/default_headpic.png">
                                </a>
                                <div class="resumeIntro">
                                    <h3 class="unread">
                                        <a target="_blank" title="预览jason的简历" href="resumeView.html?deliverId=1686182">
			                                        				                                            {{resume.UserInfo.Username}}的简历
			                                        	</a>
                                        <em></em>
                                    </h3>
                                    <span class="fr">申请时间：{{resume.ApplyTime}}</span>
                                    <div class="jdpublisher">
                                        <span>互评结果：
				                                        	<a title="随便写" target="_blank" >中介评分:{{resume.AgencyScore}}</a>
				                                       		<a title="随便写" target="_blank" >学生评分:{{resume.StuScore}}</a>			                                        </span>
                                    </div>
                                    <div class="jdpublisher">
                                        <span>
				                                        	简历状态：<a title="随便写" target="_blank">{{resume.Status}}</a>
                                                            </span>
                                    </div>
                                    <div class="jdpublisher">
                                        <span>
				                                        	应聘职位：<a title="随便写" target="_blank" href="http://www.lagou.com/jobs/149594.html">{{job.JobDetail.Title}}</a>
				                                       						                                        </span>
                                    </div>
                                </div>
                                <div class="links">
                                    <a v-if="false" data-resumename="jason的简历" :stuname="resume.UserInfo.Username" :txid="resume.TxID" :jobtitle="job.JobDetail.Title" v-on:click="popup($event)"
                                        data-forwardcount="1" class="resume_forward">
                                                    	查看互评结果
                                                    	                                                    </a>
                                    <a class="resume_del" href="javascript:void(0)">删除</a>
                                </div>
                            </div>
                        </li>
                        </template>
                        </template>
                        <li v-if="false" data-id="1686182" class="onlineResume">
                            <label class="checkbox">
			                                    <input type="checkbox">
			                                    <i></i>
			                                </label>
                            <div class="resumeShow">
                                <a title="预览在线简历" target="_blank" class="resumeImg" href="resumeView.html?deliverId=1686182">
                                    <img src="../../assets/images/default_headpic.png">
                                </a>
                                <div class="resumeIntro">
                                    <h3 class="unread">
                                        <a target="_blank" title="预览jason的简历" href="resumeView.html?deliverId=1686182">
			                                        				                                            jason的简历
			                                        	</a>
                                        <em></em>
                                    </h3>
                                    <span class="fr">投递时间：2014-07-01 17:08</span>
                                    <div>
                                        jason / 男 / 大专 / 3年 / 广州 <br> 高级产品经理 · 上海辉硕科技有限公司 | 本科 · 北京大学
                                    </div>
                                    <div class="jdpublisher">
                                        <span>
				                                        	应聘职位：<a title="随便写" target="_blank" href="http://www.lagou.com/jobs/149594.html">随便写</a>
				                                       						                                        </span>
                                    </div>
                                </div>
                                <div class="links">
                                    <a data-resumename="jason的简历" data-positionname="随便写" data-deliverid="1686182" data-positionid="149594" data-resumekey="1ccca806e13637f7b1a4560f80f08057"
                                        data-forwardcount="1" class="resume_forward" href="javascript:void(0)">
                                                    	转发
                                                    	                                                    	<span>(1人)</span>
                                                    	                                                    </a>
                                    <a class="resume_del" href="javascript:void(0)">录用</a>
                                    <a class="resume_del" href="javascript:void(0)">删除</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- end .resumeLists -->
                </form>
            </dd>
        </dl>
        <!-- end .company_center_content -->
    </div>
    <!-- end .content -->

    <!------------------------------------- 弹窗lightbox ----------------------------------------->
    <div style="display:none;">
        <!--通知面试弹窗-->
        <div style="overflow:auto;" class="popup" id="noticeInterview">
            <form id="noticeInterviewForm">
                <table width="100%" class="f16">
                    <tbody>
                        <tr>
                            <td width="20%" align="right" class="c9">收件人 </td>
                            <td width="80%">
                                <span class="c9" id="receiveEmail"></span>
                                <input type="hidden" value="" name="email">
                            </td>
                        </tr>
                        <tr>
                            <td align="right"><span class="redstar">*</span>主题</td>
                            <td>
                                <input type="text" placeholder="公司：职位名称面试通知" name="subject">
                            </td>
                        </tr>
                        <tr>
                            <td align="right"><span class="redstar">*</span>面试时间</td>
                            <td>
                                <input type="text" id="datetimepicker" name="interTime" class="hasDatepicker">
                            </td>
                        </tr>
                        <tr>
                            <td align="right"><span class="redstar">*</span>面试地点</td>
                            <td>
                                <input type="text" name="interAdd">
                            </td>
                        </tr>
                        <tr>
                            <td align="right">联系人</td>
                            <td>
                                <input type="text" name="linkMan">
                            </td>
                        </tr>
                        <tr>
                            <td align="right"><span class="redstar">*</span>联系电话</td>
                            <td>
                                <input type="text" name="linkPhone">
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" align="right">补充内容</td>
                            <td>
                                <textarea name="content"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="submit" value="发送" class="btn">
                                <a class="emailPreview" href="javascript:;">预览</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="hidden" value="" name="name">
                <input type="hidden" value="" name="positionName">
                <input type="hidden" value="" name="companyName">
                <input type="hidden" value="" name="deliverId">
            </form>
        </div>
        <!--/#noticeInterview-->

        <!--预览通知面试弹窗-->
        <div class="popup" id="noticeInterviewPreview">
            <div class="f18">拉勾网：产品经理面试通知 </div>
            <div class="c9">发给：<span>vivi@lagou.com</span></div>
            <div id="emailText"></div>
            <input type="button" value="提交" class="btn fl">
            <a title="通知面试" class="inline fl cboxElement" href="#noticeInterview">返回修改</a>
        </div>
        <!--/#noticeInterviewPreview-->

        <!--结算及评价弹窗-->
        <div class="popup" id="payandevaluate" style="height:240px;">
            <div class="f18">拉勾网：产品经理面试通知 </div>
            <div class="c9">发给：<span>vivi@lagou.com</span></div>
            <div id="emailText"></div>
            <input type="button" value="提交" class="btn fl">
            <a title="通知面试" class="inline fl cboxElement" href="#noticeInterview">返回修改</a>
        </div>
        <!--/#payandevaluate-->

        <!--通知面试成功弹窗-->
        <div class="popup" id="noticeInterviewSuccess">
            <table width="100%" class="f16">
                <tbody>
                    <tr>
                        <td align="center" class="f16">
                            面试通知已发送成功<br> 该简历已进入“已通知面试简历”列表
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <input type="button" value="确认" class="btn">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!--/#noticeInterviewSuccess-->

        <!--转发简历弹窗-->
        <!--将结算流程放到转发简历弹窗中-->
        <div class="popup" style="width:480px;height:360px" id="forwardResume">
            <form id="forwardResumeForm" >
                <table width="100%" class="f16" style='table-layout:fixed'>
                    <tbody>
                        <tr>
                            <td width="20%" align="right">兼职者</td>
                            <td width="80%">
                                <input disabled type="text" :placeholder="evaluatinguser" id="recipients" name="recipients">
                                <span id="forwardResumeError" style="display:none" class="beError"></span>
                            </td>
                        </tr>
                        <tr>
                            <td width="20%" align="right">对应兼职</td>
                            <td width="80%">
                                <input disabled type="text" :placeholder="evaluatingjobtitle" id="recipients" name="recipients">
                                <span id="forwardResumeError" style="display:none" class="beError"></span>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">兼职表现</td>
                            <td style="padding-bottom:0px;">
                                <!-- 查看js源码 options.stars-->
                                <input id="input-id1" data-symbol="★" data-stars="10" type="number" class="rating" min=0 max=10 step=1 data-size="xs" >
                            </td>
                        </tr><tr>
                            <td align="right"></td>
                            <td style="padding-bottom:0px;">
                                <!-- 查看js源码 options.stars-->
                                <p class="hint">（提示：如果兼职学生表现优秀，请打9分以上）</p>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" align="right">评价</td>
                            <td>
                                <textarea style="font-size:14px; font-family:'Hiragino Sans GB'" name="content"></textarea>
                                <span style="display:none;" class="beError error"></span>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="submit" v-on:click="evaluate" value="发送" class="btn">
                                <a class="emial_cancel" href="javascript:;">取消</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="hidden" value="" name="resumeKey">
                <input type="hidden" value="" name="positionId">
                <input type="hidden" value="" name="deliverId">
            </form>
        </div>
        <!--/#forwardResume-->

        <!--转发简历成功弹窗-->
        <div class="popup" id="forwardResumeSuccess">
            <table width="100%" class="f16">
                <tbody>
                    <tr>
                        <td align="center" class="f16">简历已转发成功 </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <input type="button" value="确认" class="btn">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!--/#forwardResumeSuccess-->

        <!--确认不合适弹窗-->
        <div style="height:400px;" class="popup" id="confirmRefuse">
            <form id="refuseMailForm">
                <table width="100%">
                    <tbody>
                        <tr>
                            <td>
                                <div class="refuse_icon">
                                    <h3>确认这份简历不合适吗？</h3>
                                    <span>确认后，系统将自动发送以下内容至用户邮箱</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <textarea name="content">非常荣幸收到您的简历，在我们仔细阅读您的简历之后，却不得不很遗憾的通知您：
您的简历与该职位的定位有些不匹配，因此无法进入面试。

但您的信息已录入我司人才储备库，当有合适您的职位开放时我们将第一时间联系您，希望在未来我们有机会成为一起拼搏的同事；
再次感谢您对我们的信任，祝您早日找到满意的工作。</textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" value="确认不合适" class="btn">
                                <a class="emial_cancel" href="javascript:;">取消</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="hidden" value="" name="deliverId">
            </form>
        </div>
        <!--/#confirmRefuse-->

        <!--拒绝email成功弹窗-->
        <div class="popup" id="refuseMailSuccess">
            <table width="100%" class="f16">
                <tbody>
                    <tr>
                        <td align="center" class="f16">
                            不合适通知已发送成功<br> 该简历已进入“不合适简历”列表
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <input type="button" value="确认" class="btn">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!--/#refuseMailSuccess-->
    </div>
    <!------------------------------------- end ------------------------------------------>
    <div class="clear"></div>
    <input type="hidden" value="9421e33d3091428796fec127b07b6c5b" id="resubmitToken">
    <a rel="nofollow" title="回到顶部" id="backtop"></a>
    <popupjs></popupjs>
    <starratingjs></starratingjs>
</div>
<!-- end #container -->
</template>

<script>
import $ from 'jquery'
import AgencySidebar from './AgencySidebar'
import {mapState} from 'vuex'
function loadScript(url, callback){
    var script = document.createElement("script");
    script.type = "text/javascript";
    if(script.readyState){ // IE
        script.onreadystatechange = function(){
            if(script.readyState == "loaded" || script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    }else{ // FF, Chrome, Opera, ...
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
export default {
    name: 'create',
    data: function() {
        return {
            datanotnull: false,
            jobs: new Array(),
            resumes: '',
            amount,
            position: {
                AgencyName:'',
                Title:''
            },
            evaluatingtxid:'',
            evaluatinguser:'',
            evaluatingjobtitle:''
        }
    },
    computed: mapState({user: state => state.user}),
    methods:{
        popup: function(e) {
            //$("#currentevalu").removeAttr("id");
            //console.log(e.currentTarget)
            console.log("iamin")
            //$(e.currentTarget).attr("id","#currentevalu");
            this.evaluatingtxid = $(e.currentTarget).attr("txid");
            this.evaluatinguser = $(e.currentTarget).attr("stuname");
            this.evaluatingjobtitle = $(e.currentTarget).attr("jobtitle");
        },
        accept: function() {
            
        },
        evaluate: function() {
            $("#cboxClose").click();
            $.ajax({
                url: HOST + ":" + PORT +"/tx/evaluate?username="+this.user.name,
                type:'post',
                data: {
                    TxID: this.evaluatingtxid,
                    Score:$("#input-id1").val(),
                },
                dataType:'json',
                success: function(data) {
                    alert("评价成功！")
                    console.log(data);
                }
            });
            this._data.datanotnull = false;
        }
    },
    components: {
      'agencysidebar': AgencySidebar,
      'receivedresumesjs': {
          render(createElement) {
              return createElement(
                  'script', 
                  {
                      attrs: {
                          type: 'text/javascript',
                          src: '../../../static/js/payandevaluate.min.js'
                      }
                  }
              )
          },
      },
      'jquerydatetimepickerjs': {
          render(createElement) {
              return createElement(
                  'script', 
                  {
                      attrs: {
                          type: 'text/javascript',
                          src: '../../../static/js/jquery.ui.datetimepicker.min.js'
                      }
                  }
              )
          }
      },
      'popupjs': {
          render(createElement) {
              return createElement(
                  'script',
                  {
                      attrs: {
                          type: 'text/javascript',
                          src: '../../../static/js/popup.min.js'
                      }
                  }
              )
          }
      },
      'starratingjs': {
          render(createElement) {
              return createElement(
                  'script',
                  {
                      attrs: {
                          type: 'text/javascript',
                          src: '../../../static/js/star-rating.min.js'
                      }
                  }
              )
          }
      }
          
    },
    mounted: function() {
        $(".userinfo .current").removeClass('current');
        var perCurrent = $(".agencyinfo .current").removeClass('current');
        var current = $(".agencyinfo").find("dd:eq(3)");
        current.addClass('current');
        // jquery需要获取vue上下文环境
        var vuectx = this
        if(null != this.$route.query.jobid){
            var params = {
                JobID: this.$route.query.jobid,
                State: 3
            }
            $.ajax({
                url: HOST + ":" + PORT +"/job/query",
                type: 'get',
                data: params,
                dataType: 'json',
                success: function(data) {
                    if(data.msg !=0 ) return
                    vuectx._data.jobs.push(data.data);
                    vuectx._data.position.AgencyName = data.data.AgencyName;
                    vuectx._data.position.Title = data.data.JobDetail.Title;
                    console.log(data);
                    //将脚本加载后置，否则提前绑定了点击事件将会失效
                    loadScript("../../../static/js/payandevaluate.min.js", function(){
                        //console.log('Actually we do nothing here')
                    })
                    var temp = 0;
                    vuectx._data.jobs.forEach(function(e){
                        temp += e.Txs.length;
                    })
                    vuectx._data.amount = temp;
                }
            });
        } else {
            var params = {
                State: 3
            }
            $.ajax({
                url: HOST + ":" + PORT +"/job/agency/jobs?username="+this.user.name,
                type: 'get',
                data: params,
                dataType: 'json',
                success: function(data) {
                    if(data.msg !=0 ) return
                    vuectx._data.jobs = data.data;
                    vuectx._data.position.AgencyName = data.data[0].AgencyName;
                    vuectx._data.position.Title = data.data[0].JobDetail.Title;
                    console.log(data);
                    //将脚本加载后置，否则提前绑定了点击事件将会失效
                    loadScript("../../../static/js/payandevaluate.min.js", function(){
                        //console.log('Actually we do nothing here')
                    })
                    var temp = 0;
                    vuectx._data.jobs.forEach(function(e){
                        temp += e.Txs.length;
                    })
                    vuectx._data.amount = temp;
                }
            });
        }
        loadScript("../../../static/js/jquery.ui.datetimepicker.min.js", function(){
            //console.log('Actually we do nothing here')
        });
        $(function(){
            $('#noticeDot-1').hide();
            $('#noticeTip a.closeNT').click(function(){
                $(this).parent().hide();
            });
        });
        var index = Math.floor(Math.random() * 2);
        var ipArray = new Array('42.62.79.226','42.62.79.227');
        var url = "ws://" + ipArray[index] + ":18080/wsServlet?code=314873";
        var CallCenter = {
                init:function(url){
                    var _websocket = new WebSocket(url);
                    _websocket.onopen = function(evt) {
                        console.log("Connected to WebSocket server.");
                    };
                    _websocket.onclose = function(evt) {
                        console.log("Disconnected");
                    };
                    _websocket.onmessage = function(evt) {
                        //alert(evt.data);
                        var notice = jQuery.parseJSON(evt.data);
                        if(notice.status[0] == 0){
                            $('#noticeDot-0').hide();
                            $('#noticeTip').hide();
                            $('#noticeNo').text('').show().parent('a').attr('href',ctx+'/mycenter/delivery.html');
                            $('#noticeNoPage').text('').show().parent('a').attr('href',ctx+'/mycenter/delivery.html');
                        }else{
                            $('#noticeDot-0').show();
                            $('#noticeTip strong').text(notice.status[0]);
                            $('#noticeTip').show();
                            $('#noticeNo').text('('+notice.status[0]+')').show().parent('a').attr('href',ctx+'/mycenter/delivery.html');
                            $('#noticeNoPage').text(' ('+notice.status[0]+')').show().parent('a').attr('href',ctx+'/mycenter/delivery.html');
                        }
                        $('#noticeDot-1').hide();
                    };
                    _websocket.onerror = function(evt) {
                        console.log('Error occured: ' + evt);
                    };
                }
        };
        CallCenter.init(url);
}
}
$(function () {
    $('#weibolist .cookietxte').text('推荐本职位给好友');
    $(document).bind('cbox_complete', function () {
        hbzxJQ("#gaosutapt .pttui a").trigger("click");
        hbzxJQ("#mepingpt .pttui a").trigger("click");
    });
    $('#cboxOverlay').bind('click', function () {
        top.location.reload();
    });
    $('#colorbox').on('click', '#cboxClose', function () {
        if ($(this).siblings('#cboxLoadedContent').children('div').attr('id') == 'deliverResumesSuccess' || $(this).siblings('#cboxLoadedContent').children('div').attr('id') == 'uploadFileSuccess') {
            top.location.reload();
        }
    });
})
</script>

<style scoped>
   @import '../../assets/css/style.css';
   @import '../../assets/css/popup.css';
   @import '../../assets/css/external.min.css';
   @import '../../assets/css/star-rating.min.css';
   #cboxContent {
        overflow: visible;
    }
   #colorbox,
   #cboxOverlay,
   #cboxWrapper {
        overflow: visible;
   }
   #forwardResumeForm {
        font-family: 'Hiragino Sans GB'!important;
   }

   .hint {
     color:#dd4a38;
     margin: 0 0 0 4px!important;
     font-size: 13px!important;
   }
</style>