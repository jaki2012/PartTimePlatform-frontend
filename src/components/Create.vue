<template>
    <div id="container">
        <div class="sidebar">
            <a class="btn_create" href="create.html">发布新职位</a>
            <dl class="company_center_aside">
                <dt>我收到的简历</dt>
                <dd>
                    <a href="">待处理简历</a>
                </dd>
                <dd>
                    <a href="canInterviewResumes.html">待定简历</a>
                </dd>
                <dd>
                    <a href="haveNoticeResumes.html">已审核通过简历</a>
                </dd>
                <dd>
                    <a href="haveRefuseResumes.html">不合适简历</a>
                </dd>
                <dd class="btm">
                    <a href="autoFilterResumes.html">自动过滤简历</a>
                </dd>
            </dl>
            <dl class="company_center_aside">
                <dt>我发布的职位</dt>
                <dd>
                    <a href="positions.html">有效职位</a>
                </dd>
                <dd>
                    <a href="positions.html">已下线职位</a>
                </dd>
            </dl>
            <div class="subscribe_side mt20">
                <div class="f14">想收到更多更好的简历？</div>
                <div class="f18 mb10">就用拉勾招聘加速助手 </div>
                <div>咨询：<a class="f16" href="mailto:jessica@lagou.com">jessica@lagou.com</a></div>
                <div class="f18 ti2em">010-57286512</div>
            </div>
            <div class="subscribe_side mt20">
                <div class="f14">加入互联网HR交流群</div>
                <div class="f18 mb10">跟同行聊聊</div>
                <div class="f24">338167634</div>
            </div>
        </div>
        <!-- end .sidebar -->
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
                                    <td width="25"><span class="redstar">*</span></td>
                                    <td width="85">职位类别</td>
                                    <td>
                                        <input type="hidden" id="positionType" value="" name="positionType">
                                        <input type="button" value="请选择职位类别" id="select_category" class="selectr selectr_380">
                                        <div class="dn" id="box_job" style="display: none;">
                                            <dl>
                                                <dt>技术</dt>
                                                <dd>
                                                    <ul class="reset job_main">
                                                        <li>
                                                            <span>后端开发</span>
                                                            <ul class="reset job_sub dn">
                                                                <li>Java</li>
                                                                <li>C++</li>
                                                                <li>PHP</li>
                                                                <li>数据挖掘</li>
                                                                <li>C</li>
                                                                <li>C#</li>
                                                                <li>.NET</li>
                                                                <li>Hadoop</li>
                                                                <li>Python</li>
                                                                <li>Delphi</li>
                                                                <li>VB</li>
                                                                <li>Perl</li>
                                                                <li>Ruby</li>
                                                                <li>Node.js</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>移动开发</span>
                                                            <ul class="reset job_sub dn" style="margin-left: -160px;">
                                                                <li>HTML5</li>
                                                                <li>Android</li>
                                                                <li>iOS</li>
                                                                <li>WP</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>前端开发</span>
                                                            <ul class="reset job_sub dn" style="margin-left: -310px;">
                                                                <li>web前端</li>
                                                                <li>Flash</li>
                                                                <li>html5</li>
                                                                <li>JavaScript</li>
                                                                <li>U3D</li>
                                                                <li>COCOS2D-X</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>测试</span>
                                                            <ul class="reset job_sub dn">
                                                                <li>测试工程师</li>
                                                                <li>自动化测试</li>
                                                                <li>功能测试</li>
                                                                <li>性能测试</li>
                                                                <li>测试开发</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>运维</span>
                                                            <ul class="reset job_sub dn" style="margin-left: -160px;">
                                                                <li>运维工程师</li>
                                                                <li>运维开发工程师</li>
                                                                <li>网络工程师</li>
                                                                <li>系统工程师</li>
                                                                <li>IT支持</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>DBA</span>
                                                            <ul class="reset job_sub dn" style="margin-left: -310px;">
                                                                <li>MySQL</li>
                                                                <li>SQLServer</li>
                                                                <li>Oracle</li>
                                                                <li>DB2</li>
                                                                <li>MongoDB</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>项目管理</span>
                                                            <ul class="reset job_sub dn">
                                                                <li>项目经理</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>高端技术职位</span>
                                                            <ul class="reset job_sub dn" style="margin-left: -160px;">
                                                                <li>技术经理</li>
                                                                <li>技术总监</li>
                                                                <li>测试经理</li>
                                                                <li>架构师</li>
                                                                <li>CTO</li>
                                                                <li>运维总监</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>产品</dt>
                                                <dd>
                                                    <ul class="reset job_main">
                                                        <li>
                                                            <span>产品经理</span>
                                                            <ul class="reset job_sub dn">
                                                                <li>产品经理</li>
                                                                <li>网页产品经理</li>
                                                                <li>移动产品经理</li>
                                                                <li>产品助理</li>
                                                                <li>数据产品经理</li>
                                                                <li>电商产品经理</li>
                                                                <li>游戏策划</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>产品设计师</span>
                                                            <ul class="reset job_sub dn" style="margin-left: -160px;">
                                                                <li>网页产品设计师</li>
                                                                <li>无线产品设计师</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>高端产品职位</span>
                                                            <ul class="reset job_sub dn" style="margin-left: -310px;">
                                                                <li>产品部经理</li>
                                                                <li>产品总监</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>设计</dt>
                                                <dd>
                                                    <ul class="reset job_main">
                                                        <li>
                                                            <span>视觉设计</span>
                                                            <ul class="reset job_sub dn">
                                                                <li>视觉设计师</li>
                                                                <li>网页设计师</li>
                                                                <li>Flash设计师</li>
                                                                <li>APP设计师</li>
                                                                <li>UI设计师</li>
                                                                <li>平面设计师</li>
                                                                <li>美术设计师（2D/3D）</li>
                                                                <li>广告设计师</li>
                                                                <li>多媒体设计师</li>
                                                                <li>原画师</li>
                                                                <li>游戏特效</li>
                                                                <li>游戏界面设计师</li>
                                                                <li>游戏场景</li>
                                                                <li>游戏角色</li>
                                                                <li>游戏动作</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>交互设计</span>
                                                            <ul class="reset job_sub dn" style="margin-left: -160px;">
                                                                <li>交互设计师</li>
                                                                <li>无线交互设计师</li>
                                                                <li>网页交互设计师</li>
                                                                <li>硬件交互设计师</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>用户研究</span>
                                                            <ul class="reset job_sub dn" style="margin-left: -310px;">
                                                                <li>数据分析师</li>
                                                                <li>用户研究员</li>
                                                                <li>游戏数值策划</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>高端设计职位</span>
                                                            <ul class="reset job_sub dn">
                                                                <li>设计经理/主管</li>
                                                                <li>设计总监</li>
                                                                <li>视觉设计经理/主管</li>
                                                                <li>视觉设计总监</li>
                                                                <li>交互设计经理/主管</li>
                                                                <li>交互设计总监</li>
                                                                <li>用户研究经理/主管</li>
                                                                <li>用户研究总监</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>运营</dt>
                                                <dd>
                                                    <ul class="reset job_main">
                                                        <li>
                                                            <span>运营</span>
                                                            <ul class="reset job_sub dn">
                                                                <li>用户运营</li>
                                                                <li>产品运营</li>
                                                                <li>数据运营</li>
                                                                <li>内容运营</li>
                                                                <li>活动运营</li>
                                                                <li>商家运营</li>
                                                                <li>品类运营</li>
                                                                <li>游戏运营</li>
                                                                <li>网络推广</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>编辑</span>
                                                            <ul class="reset job_sub dn" style="margin-left: -160px;">
                                                                <li>副主编</li>
                                                                <li>内容编辑</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>客服</span>
                                                            <ul class="reset job_sub dn" style="margin-left: -310px;">
                                                                <li>售前咨询</li>
                                                                <li>售后客服</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>高端运营职位</span>
                                                            <ul class="reset job_sub dn">
                                                                <li>主编</li>
                                                                <li>运营总监</li>
                                                                <li>COO</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>市场与销售</dt>
                                                <dd>
                                                    <ul class="reset job_main">
                                                        <li>
                                                            <span>市场/营销</span>
                                                            <ul class="reset job_sub dn">
                                                                <li>市场营销</li>
                                                                <li>市场策划</li>
                                                                <li>市场顾问</li>
                                                                <li>市场推广</li>
                                                                <li>SEO</li>
                                                                <li>SEM</li>
                                                                <li>商务渠道</li>
                                                                <li>商业数据分析</li>
                                                                <li>活动策划</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>公关</span>
                                                            <ul class="reset job_sub dn" style="margin-left: -160px;">
                                                                <li>媒介经理</li>
                                                                <li>广告协调</li>
                                                                <li>品牌公关</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>销售</span>
                                                            <ul class="reset job_sub dn" style="margin-left: -310px;">
                                                                <li>销售专员</li>
                                                                <li>销售经理</li>
                                                                <li>客户代表</li>
                                                                <li>大客户代表</li>
                                                                <li>BD经理</li>
                                                                <li>商务渠道</li>
                                                                <li>渠道销售</li>
                                                                <li>代理商销售</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>高端市场职位</span>
                                                            <ul class="reset job_sub dn">
                                                                <li>市场总监</li>
                                                                <li>销售总监</li>
                                                                <li>商务总监</li>
                                                                <li>CMO</li>
                                                                <li>公关总监</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>职能</dt>
                                                <dd>
                                                    <ul class="reset job_main">
                                                        <li>
                                                            <span>人力资源</span>
                                                            <ul class="reset job_sub dn">
                                                                <li>人力资源</li>
                                                                <li>招聘</li>
                                                                <li>HRBP</li>
                                                                <li>人事/HR</li>
                                                                <li>培训经理</li>
                                                                <li>薪资福利经理</li>
                                                                <li>绩效考核经理</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>行政</span>
                                                            <ul class="reset job_sub dn" style="margin-left: -160px;">
                                                                <li>助理</li>
                                                                <li>前台</li>
                                                                <li>法务</li>
                                                                <li>行政</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>财务</span>
                                                            <ul class="reset job_sub dn" style="margin-left: -310px;">
                                                                <li>会计</li>
                                                                <li>出纳</li>
                                                                <li>财务</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>高端职能职位</span>
                                                            <ul class="reset job_sub dn">
                                                                <li>行政总监/经理</li>
                                                                <li>财务总监/经理</li>
                                                                <li>HRD/HRM</li>
                                                                <li>CFO</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </dd>
                                            </dl>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="redstar">*</span></td>
                                    <td>职位名称</td>
                                    <td>
                                        <input type="text" placeholder="请输入职位名称，如：产品经理" value="" name="positionName" id="positionName">
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>所属部门</td>
                                    <td>
                                        <input type="text" placeholder="请输入所属部门" value="" name="department" id="department">
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="btm">
                            <tbody>
                                <tr>
                                    <td width="25"><span class="redstar">*</span></td>
                                    <td width="85">工作性质</td>
                                    <td>
                                        <ul class="profile_radio clearfix reset">
                                            <li>
                                                全职<em></em>
                                                <input type="radio" id="full" name="jobNature" value="全职">
                                            </li>
                                            <li>
                                                兼职<em></em>
                                                <input type="radio" id="parttime" name="jobNature" value="兼职">
                                            </li>
                                            <li>
                                                实习<em></em>
                                                <input type="radio" id="intern" name="jobNature" value="实习">
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="redstar">*</span></td>
                                    <td>月薪范围</td>
                                    <!--<h3><span>(最高月薪不能大于最低月薪的2倍)</span></h3> -->
                                    <td>
                                        <div class="salary_range">
                                            <div>
                                                <input type="text" placeholder="最低月薪" value="" id="salaryMin" name="salaryMin">
                                                <span class="unit">k</span>
                                            </div>
                                            <div>
                                                <input type="text" placeholder="最高月薪" value="" id="salaryMax" name="salaryMax">
                                                <span class="unit">k</span>
                                            </div>
                                            <span>只能输入整数，如：9</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="redstar">*</span></td>
                                    <td>工作城市</td>
                                    <td>
                                        <input type="text" placeholder="请输入工作城市，如：北京" value="上海" name="workAddress" id="workAddress">
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="btm">
                            <tbody>
                                <tr>
                                    <td width="25"><span class="redstar">*</span></td>
                                    <td width="85">工作经验</td>
                                    <td>
                                        <input type="hidden" id="experience" value="" name="workYear">
                                        <input type="button" value="请选择工作经验" id="select_experience" class="selectr selectr_380">
                                        <div class="boxUpDown boxUpDown_380 dn" id="box_experience" style="display: none;">
                                            <ul>
                                                <li>
                                                    不限
                                                </li>
                                                <li>
                                                    应届毕业生
                                                </li>
                                                <li>
                                                    1年以下
                                                </li>
                                                <li>
                                                    1-3年
                                                </li>
                                                <li>
                                                    3-5年
                                                </li>
                                                <li>
                                                    5-10年
                                                </li>
                                                <li>
                                                    10年以上
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="redstar">*</span></td>
                                    <td>学历要求</td>
                                    <!--<h3><span>(最高月薪不能大于最低月薪的2倍)</span></h3> -->
                                    <td>
                                        <input type="hidden" id="education" value="" name="education">
                                        <input type="button" value="请选择学历要求" id="select_education" class="selectr selectr_380">
                                        <div class="boxUpDown boxUpDown_380 dn" id="box_education" style="display: none;">
                                            <ul>
                                                <li>
                                                    不限
                                                </li>
                                                <li>
                                                    大专
                                                </li>
                                                <li>
                                                    本科
                                                </li>
                                                <li>
                                                    硕士
                                                </li>
                                                <li>
                                                    博士
                                                </li>
                                            </ul>
                                        </div>
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
                                    <td><span class="redstar">*</span></td>
                                    <td>职位描述</td>
                                    <td>
                                        <span class="c9 f14">(建议分条描述工作职责等。请勿输入公司邮箱、联系电话及其他外链，否则将自动删除)</span>

                                        <textarea name="positionDetail" id="positionDetail" class="tinymce" aria-hidden="true"></textarea>

                                    </td>
                                </tr>
                                <tr>
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
export default {
    name: 'create',
    data: function() {
        return {
            newJob: {
                catagory: '',
                name:'',
                department:'',
                full:'',
                parttime:'',
                internal:'',
                leastsalary:'',
                mostsalary:'',
                city:'',
                experience:'',
                background:'',
                temptation:'',
                description:'',
                address:'',
                email:''
            }
        }
    },
    components: {
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
            $.ajax({
                url:"http://localhost:3000/positions",
                type:'post',
                data: {
                    catagory: $('#select_category').val(),
                    name: $('#positionName').val(),
                    department: $('#position').val(),
                    jobnature: jobNature,
                    leastsalary: $('#salaryMin').val(),
                    mostsalary: $('#salaryMax').val(),
                    city: $('#workAddress').val(),
                    experience: $('#select_experience').val(),
                    background: $('#select_education').val(),
                    temptation: $('#positionAdvantage').val(),
                    description: positionDetail,
                    address: $('#positionAddress').val(),
                    email: $('#forwardEmail').val(),
                    releasetime: time
                },
                dataType:'json',
                success: function(data) {
                    console.log(data);
                }
            });
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