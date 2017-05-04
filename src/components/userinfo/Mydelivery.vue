<template>
    <div id="container">
        <userinfosidebar></userinfosidebar>
        <!-- end .sidebar -->
        <div class="content">
            <div class="content_l">
                <dl class="c_delivery">
                    <dt>
                        <h1><em></em>已投递简历状态</h1>
                        <a class="d_refresh" href="javascript:;">刷新</a>
                    </dt>
                    <dd>
                        <div class="delivery_tabs">
                            <ul class="reset">
                                <li class="current">
                                    <a href="delivery.html?tag=-1">全部</a>
                                </li>
                                <li>
                                    <a href="delivery.html?tag=5">投递成功</a>
                                </li>
                                <li>
                                    <a href="delivery.html?tag=1">被查看</a>
                                </li>
                                <li>
                                    <a href="delivery.html?tag=2">通过初筛</a>
                                </li>
                                <li>
                                    <a href="delivery.html?tag=3">通知面试</a>
                                </li>
                                <li class="last">
                                    <a href="delivery.html?tag=4">不合适</a>
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
                                                                                                        不合适
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
    </div>
    <!-- end #container -->
</template>

<script>
import UserInfoSideBar from './UserInfoSideBar';
export default {
    name: 'userinfo',
    components: {
        'userinfosidebar': UserInfoSideBar
    },
    mounted: function (){
         var perCurrent = $(".company_center_aside .current").removeClass('current');
         var current = $(".jobinfo").find("dd:eq(3)");
         current.addClass('current');
    },
    methods: {
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