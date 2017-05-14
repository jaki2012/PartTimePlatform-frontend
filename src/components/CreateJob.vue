<template>
    <div id="container">
        <agencysidebar></agencysidebar>
        <div class="content">
            <dl class="company_center_content">
                <dt>
                    <h1>
                        <em></em> 发布新兼职
                    </h1>
                </dt>
                <dd>
                    <div class="ccc_tr">今日已发布 <span>0</span> 个兼职 还可发布 <span>5</span> 个兼职</div>
                    <form action="http://www.lagou.com/corpPosition/preview.html" method="post" id="jobForm">
                        <input type="hidden" value="" name="id">
                        <input type="hidden" value="create" name="preview">
                        <input type="hidden" value="25927" name="companyId">
                        <input type="hidden" value="c29d4a7c35314180bf3be5eb3f00048f" name="resubmitToken" style="display:none">
                        <table class="btm">
                            <tbody>
                                <tr>
                                    <td><span class="redstar">*</span></td>
                                    <td>兼职名称</td>
                                    <td>
                                        <input type="text" v-model="newJob.Title" placeholder="请输入兼职名称，如：群众演员" value="" name="positionName" id="positionName">
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="redstar">*</span></td>
                                    <td>兼职天数</td>
                                    <td>
                                        <input type="text" v-model="newJob.Day" placeholder="请输入一共需要的工作天数" value="" name="JobDay" id="JobDay">
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="redstar">*</span></td>
                                    <td>每日工时</td>
                                    <td>
                                        <input type="text" v-model="newJob.JobTime" placeholder="请输入每天的工作时间(/h)" value="" name="JobTime" id="JobTime">
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="btm">
                            <tbody>
                                <tr style="display:none">
                                    <td width="25"><span class="redstar">*</span></td>
                                    <td width="85">结算方式</td>
                                    <td>
                                        <ul class="profile_radio clearfix reset">
                                            <li >
                                                时结<em></em>
                                                <input type="radio" id="full" name="jobNature" value="全职">
                                            </li>
                                            <li>
                                                日结<em></em>
                                                <input type="radio" id="parttime" name="jobNature" value="兼职">
                                            </li>
                                            <li>
                                                月结<em></em>
                                                <input type="radio" id="intern" name="jobNature" value="实习">
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="redstar">*</span></td>
                                    <td>兼职薪资</td>
                                    <!--<h3><span>(最高月薪不能大于最低月薪的2倍)</span></h3> -->
                                    <td>
                                        <div class="salary_range">
                                            <div>
                                                <input v-model="newJob.Salary" type="text" placeholder="薪资" value="" id="salary" name="salary">
                                                <span class="unit">元</span>
                                            </div>
                                            <span>只能输入整数，如：9</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="redstar">*</span></td>
                                    <td>工作地方</td>
                                    <td>
                                        <input v-model="newJob.Place" type="text" placeholder="请输入工作地方，如：北京" value="上海" name="Place" id="Place">
                                    </td>
                                </tr>
                            </tbody>
                        </table>


                        <table class="btm">
                            <tbody>
                                <tr>
                                    <td width="25"></td>
                                    <td width="85">职位诱惑</td>
                                    <td>
                                        <input type="text" placeholder="20字描述该职位的吸引力，如：福利待遇、发展前景等" value="" name="positionAdvantage" class="input_520" id="positionAdvantage">
                                    </td>
                                </tr>
                                <tr>
                                    <td width="25"><span class="redstar">*</span></td>
                                    <td width="85">职位要求</td>
                                    <td>
                                        <input v-model="newJob.Demand" type="text" placeholder="描述该职位所需要的要求" value="" name="JobDemand" class="input_520" id="JobDemand">
                                    </td>
                                </tr
                                <tr>
                                    <td></td>
                                    <td>职位描述</td>
                                    <td>
                                        <span class="c9 f14">(建议分条描述工作职责等。请勿输入公司邮箱、联系电话及其他外链，否则将自动删除)</span>

                                        <textarea name="positionDetail" id="positionDetail" class="tinymce" aria-hidden="true"></textarea>

                                    </td>
                                </tr>
                                <tr style="display:none">
                                    <td><span class="redstar">*</span></td>
                                    <td>工作地址</td>
                                    <td>
                                        <input type="text" placeholder="请输入详细的工作地址" value="" name="positionAddress" class="input_520" id="positionAddress">
                                        <input type="hidden" value="" name="positionLng" id="lng">
                                        <input type="hidden" value="" name="positionLat" id="lat">
                                        <div class="work_place f14">我们将在职位详情页以地图方式精准呈现给用户 <a id="mapPreview" href="javascript:;">预览地图</a></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table>
                            <tbody>
                                <tr style="display:none">
                                    <td width="25"><span class="redstar">*</span></td>
                                    <td colspan="2">
                                        接收简历邮箱： <span id="receiveEmailVal">admin@admin.com</span>
                                        <input type="hidden" value="admin@admin.com" id="receiveEmail" name="email">
                                    </td>
                                </tr>
                                <tr style="display:none">
                                    <td width="25"></td>
                                    <td colspan="2">
                                        同时简历自动发送至邮箱（仅一个）
                                        <input type="text" value="" id="forwardEmail" name="forwardEmail">
                                        <!-- <span class="error" id="beError" style="display:none"></span> -->
                                    </td>
                                </tr>
                                <tr>
                                    <td width="25"></td>
                                    <td colspan="2">
                                        <input type="submit" value="预览" id="jobPreview" class="btn_32">
                                        <input type="button" value="发布" id="formSubmit" class="btn_32 resume_forward" v-on:click="submit">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </dd>
            </dl>
        </div>
        <!-- end .content -->

     <!------------------------------------- 弹窗lightbox ----------------------------------------->
    <div style="display:none;">


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
        <div class="popup" id="forwardResume" style="width:380px;height:180px;">
                <div class="spinner">
                    <div class="rect1"></div>
                    <div class="rect2"></div>
                    <div class="rect3"></div>
                    <div class="rect4"></div>
                    <div class="rect5"></div>
                </div>
                <div style="text-align:center">
                <img src="../assets/images/跑酷 (1).png" width="20px" height="20px"></img>
                <span style="font-size:16px;vertical-align:text-bottom; color:#dd4a38">同嘉小使正在全力帮你处理结果...</span>
                </div>
        </div>
        <!--/#forwardResume-->

        <div id="applyPending" class="popup" style="width:380px;height:180px;display:none">
            <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
            <div style="text-align:center">
            <img src="../assets/images/跑酷 (1).png" width="20px" height="20px"></img>
            <span style="font-size:16px;vertical-align:text-bottom; color:#dd4a38">同嘉小使正在全力帮你处理结果...</span>
            </div>
        </div>

        <div id="applyFinished" class="popup" style="width:380px;height:180px;display:none">
            <div class="spinner">
                <img src="../assets/images/成功.png" width="80px" height="80px"></img>
            </div>
            <div style="text-align:center">
            <span style="font-size:16px;vertical-align:text-bottom; color:#dd4a38">职位发布成功！进入首页查看您发布的最新职位！</span>
            </div>
        </div>

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
        <input type="hidden" value="c29d4a7c35314180bf3be5eb3f00048f " id="resubmitToken">
        <a rel="nofollow" title="回到顶部" id="backtop"></a>
        <jquerydatetimepickerjs></jquerydatetimepickerjs>
        <!-- <jobsjs></jobsjs> -->
    </div>
    <!-- end #container -->
</template>

<script>
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
import {mapState} from 'vuex'
import AgencySideBar from './resume/AgencySidebar'
export default {
    name: 'create',
    data: function() {
        return {
            newJob: {
                Title:"",
                JobTime: "",
                Place: "",
                Salary: "",
                Day: "",
                Demand: ""
            }
        }
    },
    computed: mapState({user: state => state.user}),
    components: {
      'agencysidebar': AgencySideBar,
    //   'jobsjs': {
    //       render(createElement) {
    //           return createElement(
    //               'script', 
    //               {
    //                   attrs: {
    //                       type: 'text/javascript',
    //                       src: '../../static/js/jobs.min.js'
    //                   }
    //               }
    //           )
    //       }
    //   },
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
        }
    },
    methods: {
        submit: function() {
            //获取兼职类型
            var jobNature;
            if($('input:radio[id="full"]').is(":checked")){
                jobNature = "全职"
            } else if($('input:radio[id="parttime"]').is(":checked")){
                jobNature = "兼职"
            } else {
                jobNature = "实习"
            }
            //获取职位描述
            console.log(tinymce.editors[0].getBody().innerText);
            var positionDetail = tinymce.editors[0].getBody().innerText;

            //获取时间
            var myDate = new Date();
            var time = myDate.getHours() + ":" + myDate.getMinutes();
            var vuectx = this;
            $.ajax({
                url:HOST + ":" + PORT +"/job/agency/publish?username="+this.user.name,
                type:'post',
                data: {
                    Title: this.newJob.Title,
                    JobTime: this.newJob.JobTime,
                    Day: this.newJob.Day,
                    Place: this.newJob.Place,
                    Salary: this.newJob.Salary,
                    Demand: this.newJob.Demand
                },
                dataType:'json',
                success: function(data) {
                    //alert("发布成功！即将返回首页")
                    //vuectx.jumptohome()
                    var oldcontent = document.getElementById("forwardResume")
                    var newcontent = document.getElementById("applyFinished");
                    $("#applyFinished").css("display","block")
                    oldcontent.innerHTML = newcontent.innerHTML;
                    $("#cboxClose").on("click",vuectx.test);
                }
            });
        },
        test() {
            $("#cboxClose").off("click",this.test);
            this.jumptohome();
        },
        jumptohome() {
            this.$router.replace({path: "/home"})
        }
    },
    mounted: function() {
        $(".userinfo .current").removeClass('current');
            tinymce.init({
            selector: 'textarea',
            skin: 'lightgray',
            height: 300,
            menubar: false,
            statusbar: false,
            plugins: 'code',
            toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | code| link image',
            content_css: '//www.tinymce.com/css/codepen.min.css'
        });
        loadScript("../../static/js/jquery.ui.datetimepicker.min.js", function(){
            loadScript("../../static/js/received_resumes.js", function(){
                loadScript("../../static/js/acceptpopup.js", function(){
                })
            })
        });
    }
    
}
</script>

<style scoped>
   @import '../assets/css/style.css';
   @import '../assets/css/popup.css';
   #jobForm {
       font-size: 16px;
   }

   #jobForm input {
       font-family:'Hiragino Sans GB';
       font-size: 16px!important;
   }

   .salary_range div {
       width: 180px;
   }

   .salary_range input{
       width: 120px !important;
       height: 24px;
   }

   .salary_range .unit {
       color: #fa6041;
   }

    /* 等待加载的滚动条 */
    .spinner {
    margin: 40px auto;
    width: 70px;
    height: 60px;
    text-align: center;
    font-size: 10px;
    }
    
    .spinner > div {
    background-color: #019875;
    height: 100%;
    width: 7px;
    display: inline-block;
    
    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
    }
    
    .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
    }
    
    .spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
    }
    
    .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
    }
    
    .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
    }
    
    @-webkit-keyframes stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
    20% { -webkit-transform: scaleY(1.0) }
    }
    
    @keyframes stretchdelay {
    0%, 40%, 100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
    }  20% {
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
    }
    }

</style>