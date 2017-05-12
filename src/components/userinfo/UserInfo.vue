<template>
    <div id="container">
        <agencysidebar v-if="user.type==1"></agencysidebar>
        <userinfosidebar v-if="user.type==0"></userinfosidebar>
        <!-- end .sidebar -->
        <div class="content">
            <dl class="company_center_content">
                <dt>
                    <h1>
                        <em></em> 个人资料
                    </h1>
                </dt>
                <dd>
                    <div class="ccc_tr">账号类别： <span>{{usertype}}</span></div>
                    <div style="display:none" class="ccc_tr bcid number">智能合约id (BCID)： <span>PC9527</span></div>
                    <form v-if="!user.detail" action="http://www.lagou.com/corpPosition/preview.html" method="post" id="jobForm">
                        <input type="hidden" value="" name="id">
                        <input type="hidden" value="create" name="preview">
                        <input type="hidden" value="25927" name="companyId">
                        <input type="hidden" value="c29d4a7c35314180bf3be5eb3f00048f" name="resubmitToken" style="display:none">
                        <table class="btm">
                            <tbody>
                                <tr>
                                    <!-- 预留距离 -->
                                    <td></td>
                                    <td>用户名:</td>
                                    <td>
                                        <span class="special_concre_content">{{user.name}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="redstar">*</span></td>
                                    <td>用户id:</td>
                                    <td>
                                        <span id="userid" class="concre_content" >{{userinfo.userid}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="redstar">*</span></td>
                                    <td>真实名字:</td>
                                    <td>
                                        <span id="realname" class="concre_content" >{{userinfo.realname}}</span>
                                    </td>
                                </tr>
                                <tr v-if="user.type==1">
                                    <td><span class="redstar">*</span></td>
                                    <td>中介名称:</td>
                                    <td>
                                        <span id="agencyname" class="concre_content" >{{userinfo.AgencyName}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>性别:</td>
                                    <td>
                                        <span id="gender" class="concre_content">{{userinfo.gender}}</span>
                                    </td>
                                </tr>
                                <tr v-if="user.type==0">
                                    <td></td>
                                    <td>学校:</td>
                                    <td>
                                        <span id="school" class="concre_content">{{userinfo.school}}</span>
                                    </td>
                                </tr>
                                <tr v-if="user.type==0">
                                    <td></td>
                                    <td>学号:</td>
                                    <td>
                                        <span id="stuid" class="concre_content number">{{userinfo.stuid}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="redstar">*</span></td>
                                    <td>手机:</td>
                                    <td>
                                        <span id="telephone" class="concre_content number">{{userinfo.telephone}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="25"></td>
                                    <td colspan="2">
                                        <input type="button" v-on:click="edit" value="完善/修改" id="edit" class="btn_32">
                                        <input type="button" v-on:click="save" value="保存信息" style="display:none" id="save" class="btn_32">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <!-- end form one -->
                    <form v-if="user.detail" action="http://www.lagou.com/corpPosition/preview.html" method="post" id="jobForm">
                        <input type="hidden" value="" name="id">
                        <input type="hidden" value="create" name="preview">
                        <input type="hidden" value="25927" name="companyId">
                        <input type="hidden" value="c29d4a7c35314180bf3be5eb3f00048f" name="resubmitToken" style="display:none">
                        <table class="btm">
                            <tbody>
                                <tr>
                                    <!-- 预留距离 -->
                                    <td></td>
                                    <td>用户名:</td>
                                    <td>
                                        <span class="concre_content number" >{{user.name}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="redstar">*</span></td>
                                    <td>用户id:</td>
                                    <td>
                                        <span class="concre_content number" >{{userinfo.UserID}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="redstar">*</span></td>
                                    <td>真实名字:</td>
                                    <td>
                                        <span class="concre_content" >{{userinfo.RealName}}</span>
                                    </td>
                                </tr>
                                <tr v-if="user.type==1">
                                    <td><span class="redstar">*</span></td>
                                    <td>中介名称:</td>
                                    <td>
                                        <span class="concre_content" >{{userinfo.AgencyName}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>性别:</td>
                                    <td>
                                        <span class="concre_content">{{userinfo.Gender}}</span>
                                    </td>
                                </tr>
                                <tr v-if="user.type==0">
                                    <td></td>
                                    <td>学校:</td>
                                    <td>
                                        <span class="concre_content">{{userinfo.School}}</span>
                                    </td>
                                </tr>
                                <tr v-if="user.type==0">
                                    <td></td>
                                    <td>学号:</td>
                                    <td>
                                        <span class="concre_content number">{{userinfo.StuID}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>手机:</td>
                                    <td>
                                        <span class="concre_content number">{{userinfo.Tele}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>当前状态码:</td>
                                    <td>
                                        <span class="concre_content">{{userinfo.Status}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="25"></td>
                                    <td colspan="2">
                                        <input type="button" v-on:click="edit" value="完善/修改" id="edit" class="btn_32">
                                        <input type="button" v-on:click="save" value="保存信息" style="display:none" id="save" class="btn_32">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </dd>
            </dl>
        </div>
    </div>
    <!-- end #container -->
</template>

<script>
import { mapState } from 'vuex'
import UserInfoSideBar from './UserInfoSideBar'
import AgencySideBar from '../resume/AgencySidebar'
export default {
    name: 'userinfo',
    components: {
        'userinfosidebar': UserInfoSideBar,
        'agencysidebar': AgencySideBar
    },
    computed: mapState({user: state=>state.user}),
    data: function() {
        return {
            //覆盖了原有数据！
            //user: ''
            usertype: '',
            userinfo: ''
        }
    },
    mounted: function() {
        this.usertype = this.user.type==0 ? "学生用户": "中介用户";
        //core.min.js 确保菜单能够正常收缩
        const corejs = document.createElement('script')
        corejs.type = 'text/javascript'
        corejs.src = '../../static/js/core.min.js'
        document.body.appendChild(corejs)
        console.log(this)
        var vuectx = this;
        if(this.user.detail){
            $.ajax({
                url: HOST + ":" + PORT +"/user/info",
                data: {
                    username: this.user.name
                },
                type: 'get',
                dataType: 'json',
                success: function(data) {
                    vuectx._data.userinfo = data.data.UserInfo
                    // 设置男女
                    vuectx._data.userinfo.Gender = data.data.UserInfo.Gender == 0? "男":"女"
                    console.log(data)
                }
            });
        }else {
            //mounted 才会有组件渲染
            $("#edit").click();
        }
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
            }
            // contents[i]不能先执行remove 否则会导致数组索引跳级
            for(var i=0; i<arrObj.length; i++) {
                arrObj[i].remove();
            }
            $('#save').css('display','none');
            $('#edit').css('display','block');
            this.updatedetail();
        },
        updatedetail: function() {
            //数据绑定不生效的原因在于动态生成了input
            var userid = $("#userid")[0].innerText
            var realname = $("#realname")[0].innerText
            var gender = $("#gender")[0].innerText == "男" ? 0 : 1
            var telephone = $("#telephone")[0].innerText
            var params;
            if(this.user.type==0) {
                var school = $("#school")[0].innerText
                var stuid = $("#stuid")[0].innerText
                params = {
                    UserID: userid,
                    RealName: realname,
                    School: school,
                    StuID: stuid,
                    Gender: gender,
                    Tele: telephone
                }
            } else {
                var agencyname = $("#agencyname")[0].innerText
                params = {
                    UserID:userid,
                    RealName: realname,
                    AgencyName: agencyname,
                    Gender: gender,
                    Tele: telephone
                }              
            }

            $.ajax({
                url: HOST + ":" + PORT +"/user/detail?username="+this.user.name,
                type: "post",
                dataType: "json",
                data: params,
                success: function(data) {
                    alert("完善个人资料成功！");
                }
            })
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

  .special_concre_content {
      color: #019875;
      font-size: 15px;
      border-bottom: 1px dashed #e0e0e0;
      padding-bottom: 5px;
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
</style>