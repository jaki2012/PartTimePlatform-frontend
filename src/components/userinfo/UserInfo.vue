<template>
    <div id="container">
        <userinfosidebar></userinfosidebar>
        <!-- end .sidebar -->
        <div class="content">
            <dl class="company_center_content">
                <dt>
                    <h1>
                        <em></em> 个人资料
                    </h1>
                </dt>
                <dd>
                    <div class="ccc_tr">账号类别： <span>学生用户</span></div>
                    <div class="ccc_tr bcid number">智能合约id (BCID)： <span>PC9527</span></div>
                    <form action="http://www.lagou.com/corpPosition/preview.html" method="post" id="jobForm">
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
                                        <span class="concre_content" >{{user.username}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="redstar">*</span></td>
                                    <td>姓名:</td>
                                    <td>
                                        <span class="concre_content" >{{user.name}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>性别:</td>
                                    <td>
                                        <span class="concre_content">{{user.male}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>学校:</td>
                                    <td>
                                        <span class="concre_content">{{user.school}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>学号:</td>
                                    <td>
                                        <span class="concre_content number">{{user.studynumber}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>手机:</td>
                                    <td>
                                        <span class="concre_content number">{{user.telephone}}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>状态:</td>
                                    <td>
                                        <span class="concre_content">{{user.state}}</span>
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
import UserInfoSideBar from './UserInfoSideBar';
export default {
    name: 'userinfo',
    components: {
        'userinfosidebar': UserInfoSideBar
    },
    data: function() {
        return {
            user: ''
        }
    },
    created: function() {
        var userid = this.$route.query.userid;
        var vuectx = this;
        $.ajax({
            url: "http://localhost:3000/users/" + userid,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                vuectx._data.user = data;
            }
        });
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
</style>