<template>
    <div id="container">
        <userinfosidebar></userinfosidebar>
        <!-- end .sidebar -->
        <div class="content">
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
                                                <em>{{userjob.name}}</em>
                                                <span>（3k-4k）</span>
                                                <!--  -->
                                            </a>
                                        </h2>
                                        <h4>
                                            <a target="_blank" href="http://www.lagou.com/jobs/149594.html">
                                                <em>{{userjob.uptitle}}</em>
                                                <!--  -->
                                            </a>
                                        </h4>
                                        <div class="clear"></div>
                                        <a title="公司名称" class="d_jobname" target="_blank" href="http://www.lagou.com/c/25927.html">
                                                {{userjob.agency}} <span>[{{userjob.address}}]</span> 
                                            </a>
                                        <span class="d_time">2016-05-07 17:15</span>
                                        <div class="clear"></div>
                                        <div class="d_resume">
                                            使用简历：
                                            <span>
                                                                                                在线简历
                                                                                            </span>
                                        </div>
                                        <a class="btn_showprogress resume_forward" href="javascript:;">
                                                                                                        {{userjob.downtitle}}
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
            </div>
        
        <div style="display:none;">
        <!--转发简历弹窗-->
        <!--将结算流程放到转发简历弹窗中-->
        <div class="popup" style="width:480px;height:360px" id="forwardResume">
            <form id="forwardResumeForm" >
                <table width="100%" class="f16" style='table-layout:fixed'>
                    <tbody>
                        <tr>
                            <td width="20%" align="right">兼职中介</td>
                            <td width="80%">
                                <input disabled type="text" :placeholder="userjob.agency" id="recipients" name="recipients">
                                <span id="forwardResumeError" style="display:none" class="beError"></span>
                            </td>
                        </tr>
                        <tr>
                            <td width="20%" align="right">对应兼职</td>
                            <td width="80%">
                                <input disabled type="text" :placeholder="userjob.name" id="recipients" name="recipients">
                                <span id="forwardResumeError" style="display:none" class="beError"></span>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">中介表现</td>
                            <td style="padding-bottom:0px;">
                                <input id="input-id" data-symbol="★" type="number" class="rating" min=0 max=5 step=0.3 data-size="xs" >
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" align="right">评价</td>
                            <td>
                                <textarea style="font-size:14px;font-family: 'Hiragino Sans GB'" name="content"></textarea>
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
        </div>
            <receivedresumesjs></receivedresumesjs>
            <starratingjs></starratingjs>
    </div>
    <!-- end #container -->
</template>

<script>
import UserInfoSideBar from './UserInfoSideBar';
export default {
    name: 'userinfo',
    components: {
        'userinfosidebar': UserInfoSideBar,
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
    data: function() {
        return {
            datanotnull: false,
            userjob: ''
        }
    },
    mounted: function (){
        // jquery需要获取vue上下文环境
        var vuectx = this;
        $.ajax({
            url:"http://localhost:3000/userjobs",
            type:'get',
            dataType:'json',
            success: function(data) {
                console.log(data[0]);
                vuectx._data.datanotnull = true;
                vuectx._data.userjob = data[0];
            }
        });
        var perCurrent = $(".company_center_aside .current").removeClass('current');
        var current = $(".jobinfo").find("dd:eq(2)");
        current.addClass('current');
    },
    methods: {
        evaluate: function() {
            var vuectx = this;
            $("#cboxClose").click();
            $.ajax({
                url:"http://localhost:3000/userjobs/1",
                type:'put',
                data: {
                    name: 'Node.js高级工程师',
                    agency: '斗米兼职',
                    address: '上海',
                    uptitle:'双方已互评',
                    downtitle:'已结算',
                    downtitlehref:'nothing'
                },
                dataType:'json',
                success: function(data) {
                    alert("评价中介成功！")
                    //重新发送请求 更新数据 刷新数据
                    $.ajax({
                        url:"http://localhost:3000/userjobs",
                        type:'get',
                        dataType:'json',
                        success: function(data) {
                            console.log(data[0]);
                            vuectx._data.datanotnull = true;
                            vuectx._data.userjob = data[0];
                        }
                    });
                }
            });
        },
        edit: function() {
            var contents = document.getElementsByClassName('concre_content');
            for(var i=0; i<contents.length; i++){
                var value = contents[i].innerHTML;
                contents[i].innerHTML = "<input class='editing' type='text' value='" + value + "'/>"
            }
            //.style is not a jquery property
            $('.editing').css('font-size','15px').css('font-family','Hiragino Sans GB').css('color','#333').css('height','21px');
            $('#save').css('display','block');
            $('#edit').css('display','none');
        },
        save: function() {
            var contents = document.getElementsByClassName('editing');
            var arrObj = new Array();
            for(var i=0; i<contents.length; i++){
                var value = contents[i].value;
                var obj = document.createTextNode(value);
                contents[i].parentNode.appendChild(obj);
                arrObj[arrObj.length] = contents[i];
                console.log(value)
            }
            // contents[i]不能先执行remove 否则会导致数组索引跳级
            for(var i=0; i<arrObj.length; i++) {
                arrObj[i].remove();
            }
            $('#save').css('display','none');
            $('#edit').css('display','block');
        }
    }
}
</script>

<style scoped>
   @import '../../assets/css/style.css';
   @import '../../assets/css/popup.css';
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

   #jobForm {
       font-size: 16px;
   }

   #jobForm input{
       font-size: 16px!important;
   }

   #jobForm input {
       font-family:'Hiragino Sans GB'!important;
       font-size: 16px!important;
   }

   tr > td:nth-child(1) {
       width:25px;
   }

   tr > td:nth-child(2) {
       padding-left:30px!important;
       width:140px;
   }

  .concre_content {
      color: #019875;
      font-size: 15px;
      border-bottom: 1px dashed #e0e0e0;
      padding-bottom: 5px;
  }

  .number {
      font-family: 'Avenir';
  }
  #bottomline {
      border-bottom: 1px dashed #e0e0e0;
  }

  .bcid {
      right: 170px!important;
      top: 20px!important;
  }

  .my_delivery h4 {
      margin: 7px 0 3px 0;
      float: right;
  }

  .content {
      min-height: 550px;
  }
</style>