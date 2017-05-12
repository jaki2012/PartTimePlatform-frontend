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
                                    <td></td>
                                    <td>兼职天数</td>
                                    <td>
                                        <input type="text" v-model="newJob.Day" placeholder="请输入一共需要的工作天数" value="" name="JobDay" id="JobDay">
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
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
                                    <td width="25"><span class="redstar">*</span></td>
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
                                    <td><span class="redstar">*</span></td>
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
                                <tr>
                                    <td width="25"><span class="redstar">*</span></td>
                                    <td colspan="2">
                                        接收简历邮箱： <span id="receiveEmailVal">admin@admin.com</span>
                                        <input type="hidden" value="admin@admin.com" id="receiveEmail" name="email">
                                    </td>
                                </tr>
                                <tr>
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
                                        <input type="button" value="发布" id="formSubmit" class="btn_32" v-on:click="submit">
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
            <!--联系方式弹窗-->
            <div style="height:180px;" class="popup" id="telTip">
                <form id="telForm">
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td align="center" class="f18">留个联系方式方便我们联系你吧！</td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <input type="text" maxlength="49" placeholder="请输入你的手机号码或座机号码" name="tel">
                                    <span style="display:none;" class="error" id="telError"></span>
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <input type="submit" value="提交" class="btn">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            <!--/#telTip-->
        </div>

        <div class="clear"></div>
        <input type="hidden" value="c29d4a7c35314180bf3be5eb3f00048f " id="resubmitToken">
        <a rel="nofollow" title="回到顶部" id="backtop"></a>
        <jobsjs></jobsjs>
    </div>
    <!-- end #container -->
</template>

<script>
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
      'jobsjs': {
          render(createElement) {
              return createElement(
                  'script', 
                  {
                      attrs: {
                          type: 'text/javascript',
                          src: '../../static/js/jobs.min.js'
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
                    alert("发布成功！即将返回首页")
                    vuectx.jumptohome()
                }
            });
        },
        jumptohome() {
            this.$router.replace({path: "/home"})
        }
    },
    mounted: function() {
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


</style>