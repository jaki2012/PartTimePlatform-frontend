<template>
    <div id="container">
        <div class="clearfix">
            <div class="content_l">
                <dl v-if="datanotnull" class="job_detail">
                    <dt>
                        <h1 title="内容运营">
                            <em></em>
                            <div>{{job.AgencyName}}招聘</div>
                            {{job.JobDetail.Title}}
                        </h1>
                        <a style="display:none" class="inline jd_collection" title="收藏">
                        </a>
                    </dt>
                    <dd style="font-size:18px" class="job_request">
                        <span class="red">{{job.JobDetail.Salary}} x {{job.JobDetail.Day}} </span>
                        <span>每天工时：{{job.JobDetail.JobTime}} </span>
                        <span>工作地点：{{job.JobDetail.Place}}</span><br>
                        <!-- 职位标签 -->
                        <ul class="position-label clearfix">
                            <li class="labels">兼职标签1</li>
                            <li class="labels">兼职标签2</li>
                            <li class="labels">兼职标签3</li>
                            <li class="labels">兼职标签4</li>
                        </ul>
                        <div style="margin-top:0px;">{{job.PublishTime}} 发布于同嘉网</div>
                    </dd>
                    <dd class="job_bt">
                        <h3 class="description">兼职描述</h3>
                        <p style="margin-bottom:10px; line-height:30px">&nbsp;岗位要求： <br />1、{{job.JobDetail.Demand}} <br />2、良好的沟通和协调能力、人际交往能力和语言表达能力； <br />3、较强的责任心和执行力，富有工作热情和团队协作能力。</p>
                        <a v-if="!delivered" id="deliverbtn" style="margin-top:100px" href="#applyPending" title="正在投递" class="inline btn fr btn_apply" v-on:click="deliver($event)">申请兼职</a>
                        <a v-if="delivered" id="deliverbtn2" style="margin-top:100px" href="#loginFailed" title="申请失败" class="inline btn fr btn_apply">已申请</a>
                    </dd>

                    <!--<dd class="unresume">
                        <div>
                            你在同嘉还没有简历呢，你可以<a href="login.html" target="_blank" title="完善在线简历">完善在线简历</a>，也可<a class="inline"
                                href="#loginPop" title="登录">上传附件简历</a>直接投递
                        </div>
                    </dd> 
                    <div class="saoma saoma_btm">
                        <div class="dropdown_menu">
                            <div class="drop_l">
                                <img src="../assets/images/job_qr_btm.png" width="131" height="131" />
                            </div>
                            <div class="drop_r">
                                <div class="drop_title"></div>
                                <p>
                                    想知道HR在看简历嘛？<br /> 想在微信中收到面试通知？
                                    <br />
                                    <span><< 扫一扫，给你解决</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <dd>-->

                    </dd>
                </dl>
                <div id="weibolist"></div>
            </div>
            <div class="content_r">
                <dl class="job_company">
                    <dt>
                        <a href="h/c/683.html" target="_blank">
                            <img class="b2" src="../assets/images/agencylogo.png" width="80" height="80" alt="北京立方网信息技术有限公司" />
                            <div>
                                <h2 class="fl">
                                    {{agency.AgencyName}}

                                    <img src="../assets/images/valid.png" width="15" height="19" alt="同嘉认证中介" />
                                    <span class="dn">同嘉认证中介</span>

                                </h2>
                            </div>
                        </a>
                    </dt>
                    <dd>
                        <h4 class="jobs_similar_header">
                            <span>中介信息</span>
                        </h4>
                        <ul style="margin-top:10px" class="c_feature reset">
                            <li><span>发布职位</span> {{agency.JobsCount}}个</li>
                            <li><span>中介评分</span> {{agency.Score}}</li>
                            <li><span>中介用户</span> {{agency.Username}}</li>
                            <li><span>中介电话</span> {{agency.Tele}}</li>
                            <li>
                                <span>主页</span>
                                <a target="_blank" title="http://L99.com" rel="nofollow">http://{{agency.Username}}.com</a>
                            </li>
                        </ul>

                        <!--<h4>发展阶段</h4>
                        <ul class="c_feature reset">
                            <li><span>目前阶段</span> A轮</li>
                            <li><span>投资机构</span> IDG(A轮)，腾讯(A轮)</li>
                        </ul>
                        -->

                        <!--	                    	<h4>公司产品</h4>
	                        <ul class="c_feature reset">
	                        		                        		<li><span>在哪</span></li>
	                        		                        		<li><span>立方网</span></li>
	                        		                        		<li><span>立方飞鸽</span></li>
	                        		                        </ul>
                                                
                       	<h4>公司标签</h4>
                        <ul class="company_tags reset" id="hasLabels">
                        	                            	<li><span>专业主厨</span></li>
                                                        	<li><span>帅哥多</span></li>
                                                        	<li><span>扁平管理</span></li>
                                                        	<li><span>弹性工作</span></li>
                                                        	<li><span>岗位晋升</span></li>
                                                        	<li><span>领导好</span></li>
                                                       <li class="link"><a>编辑</a></li>
                        </ul>
                        <div class="clear"></div>
                        <div id="addLabel" class="addLabel dn">
                            <input type="text" class="fl" id="label" name="label" placeholder="添加自定义标签" />	
                            <input type="submit" id="add" value="贴上" />
                        </div> -->

                        <!-- <h4>工作地址</h4> -->
                        <!-- <div>武汉市武昌区螃蟹岬凤凰大厦A1-1301</div> -->
                        <!-- <div id="smallmap"></div> -->
                        <!-- <a href="javascript:;" id="mapPreview">查看完整地图</a> -->
                    </dd>
                </dl>
                <div class="jobs_similar" id="jobs_similar">
                <h4 class="jobs_similar_header">
                    <span>相似职位</span>
                </h4>
                <input value="false" id="similarPosition" type="hidden">
                <div class="jobs_similar_content" id="jobs_similar_content">
                    <div class="jobs_similar_detail" id="jobs_similar_detail" data-lg-tj-track-code="jobs_similar" data-lg-tj-track-type="1">
                        <ul class="similar_list reset">
                            <!--source=rec-->
                        </ul>
                    </div>
                </div>
                    <div class="nodata_similar_list"></div>
                </div>
                <a target="_blank" class="eventAd">
                    <img src="../assets/images/zhouyou.jpg" width="280" height="135" />
                </a>
            </div>
        </div>
        <input type="hidden" value="" name="userid" id="userid" />
        <input type="hidden" value="" name="type" id="resend_type" />
        <input type="hidden" value="140204" id="jobid" />
        <input type="hidden" value="683" id="companyid" />
        <input type="hidden" value="" id="positionLng" />
        <input type="hidden" value="" id="positionLat" />

        <div id="loginToolBar">
            <div>
                <em></em>
                <img src="../assets/images/footbar_logo.png" width="138" height="45" />
                <span class="companycount"></span>
                <span class="positioncount"></span>
                <a href="#loginPop" class="bar_login inline" title="登录"><i></i></a>
                <div class="right">
                    <a href="register.html?from=jobs_footerbar" onclick="_hmt.push(['_trackEvent', 'button', 'click', 'register'])" class="bar_register"
                        id="bar_register" target="_blank"><i></i></a>
                </div>
                <input type="hidden" id="cc" value="16064" />
                <input type="hidden" id="cp" value="96931" />
            </div>
        </div>
        <div id="tipOverlay"></div>
        <!-------------------------------------弹窗lightbox  ----------------------------------------->
        <div style="display:none;">
            <!-- 设置默认投递简历 -->
            <div id="setResume" class="popup" style="height:280px;">
                <table width="100%">
                    <tr>
                        <td class="f18 c5">请选择你要投出去的简历：</td>
                    </tr>
                    <tr>
                        <td>
                            <form id="resumeSetForm" class="resumeSetForm">
                                <label class="radio">
	            			<input type="radio" name="resumeName" class="resume1" value="1"  />
	            			在线简历：
	            				            				<span class="red">在线简历还不完善，请完善后选择投递</span>
	            				            		</label>
                                <div class="setBtns">
                                    <a href="jianli.html" target="_blank">修改</a>
                                </div>
                                <div class="clear"></div>
                                <label class="radio">
	            			<input type="radio" name="resumeName" class="resume0" value="0"  />
	            			附件简历：
	            				            				<span class="uploadedResume red">暂无附件简历</span>
	            				            		</label>
                                <div class="setBtns">
                                    <a href="h/nearBy/downloadResume" class="downloadResume dn">下载</a> <span class="dn">|</span>
                                    <a target="_blank" title="上传附件简历" class="reUpload">上传附件简历</a>

                                    <input title="支持word、pdf、ppt、txt、wps格式文件，大小不超过10M" name="newResume" id="reUploadResume1" type="file" onchange="file_check(this,'h/nearBy/updateMyResume.json','reUploadResume1')"
                                    />
                                </div>
                                <div class="clear"></div>
                                <span class="error" style="display:none;">只支持word、pdf、ppt、txt、wps格式文件，请重新上传</span>
                                <label class="bgPink">默认使用此简历直接投递，下次不再提示</label>
                                <span class="setTip error"></span>
                                <input type="submit" class="btn_profile_save btn_s" value="保存设置" />
                            </form>
                        </td>
                    </tr>
                </table>
            </div>
            <!--/#setResume-->

            <!-- 投递简历时  - 设置默认投递简历 -->
            <div id="setResumeApply" class="popup" style="height:280px;">
                <table width="100%">
                    <tr>
                        <td class="f18 c5">请选择你要投出去的简历：</td>
                    </tr>
                    <tr>
                        <td>
                            <form id="resumeSendForm" class="resumeSetForm">
                                <label class="radio">
	            			<input type="radio" name="resumeName" class="resume1" value="1"  />
	            			在线简历：
	            				            				<span class="red">在线简历还不完善，请完善后选择投递</span>
	            				            		</label>
                                <div class="setBtns">
                                    <a href="jianli.html" target="_blank">修改</a>
                                </div>
                                <div class="clear"></div>
                                <label class="radio">
	            			<input type="radio" name="resumeName" class="resume0" value="0"  />
	            			附件简历：
	            				            				<span class="uploadedResume red">暂无附件简历</span>
	            				            		</label>
                                <div class="setBtns">
                                    <a href="h/nearBy/downloadResume" class="downloadResume dn">下载</a> <span class="dn">|</span>
                                    <a target="_blank" title="上传附件简历" class="reUpload">上传附件简历</a>
                                    <input title="支持word、pdf、ppt、txt、wps格式文件，大小不超过10M" name="newResume" id="reUploadResume2" type="file" onchange="file_check(this,'h/nearBy/updateMyResume.json','reUploadResume2')"
                                    />
                                </div>
                                <div class="clear"></div>
                                <span class="error" style="display:none;">只支持word、pdf、ppt、txt、wps格式文件，请重新上传</span>
                                <label class="bgPink"><input type="checkbox" checked="checked" />默认使用此简历直接投递，下次不再提示</label>
                                <span class="setTip error"></span>
                                <input type="submit" class="btn_profile_save btn_s" value="确认投递简历" />
                            </form>
                        </td>
                    </tr>
                </table>
            </div>
            <!--/#setResumeApply-->

            <!-- 上传简历 -->
            <div id="uploadFile" class="popup">
                <table width="100%">
                    <tr>
                        <td align="center">
                            <form>
                                <a href="javascript:void(0);" class="btn_addPic">
                                    <span>选择上传文件</span>
                                    <input tabindex="3" title="支持word、pdf、ppt、txt、wps格式文件，大小不超过10M" size="3" name="newResume" id="resumeUpload" class="filePrew"
                                        type="file" onchange="file_check(this,'h/nearBy/updateMyResume.json','resumeUpload')"
                                    />
                                </a>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">支持word、pdf、ppt、txt、wps格式文件<br />文件大小需小于10M</td>
                    </tr>
                    <tr>
                        <td align="left" style="color:#dd4a38; padding-top:10px;">注：若从其它网站下载的word简历，请将文件另存为.docx格式后上传</td>
                    </tr>
                    <tr>
                        <td align="center"><img src="../assets/images/loading.gif" width="55" height="16" id="loadingImg" style="visibility: hidden;"
                                alt="loading" /></td>
                    </tr>
                </table>
            </div>
            <!--/#uploadFile-->

            <!-- 简历上传成功 -->
            <div id="uploadFileSuccess" class="popup">
                <h4>简历上传成功！</h4>
                <table width="100%">
                    <tr>
                        <td align="center">
                            <p>你可以将简历投给你中意的公司了。</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center"><a href="javascript:top.location.reload();" class="btn_s">确&nbsp;定</a></td>
                    </tr>
                </table>
            </div>
            <!--/#uploadFileSuccess-->

            <!-- 登录框 -->
            <div id="loginPop" class="popup" style="height:240px;">
                <form id="loginForm">
                    <input type="text" id="email" name="email" tabindex="1" placeholder="请输入登录邮箱地址" />
                    <input type="password" id="password" name="password" tabindex="2" placeholder="请输入密码" />
                    <span class="error" style="display:none;" id="beError"></span>
                    <label class="fl" for="remember"><input type="checkbox" id="remember" value="" checked="checked" name="autoLogin" /> 记住我</label>
                    <a href="h/reset.html" class="fr">忘记密码？</a>
                    <input type="submit" id="submitLogin" value="登 &nbsp; &nbsp; 录" />
                </form>
                <div class="login_right">
                    <div>还没有拉勾帐号？</div>
                    <a href="register.html" class="registor_now">立即注册</a>
                    <div class="login_others">使用以下帐号直接登录:</div>
                    <a href="h/ologin/auth/sina.html" target="_blank" class="icon_wb" title="使用新浪微博帐号登录"></a>
                    <a href="h/ologin/auth/qq.html" class="icon_qq" target="_blank" title="使用腾讯QQ帐号登录"></a>
                </div>
            </div>
            <!--/#loginPop-->

            <div id="loginSuccess" class="popup" style="height:240px;">
                <span>投递成功！</span>
                <div class="spinner">
                    <div class="rect1"></div>
                    <div class="rect2"></div>
                    <div class="rect3"></div>
                    <div class="rect4"></div>
                    <div class="rect5"></div>
                </div>
            </div>

            <div id="loginFailed" class="popup" style="width:380px;height:180px;">
                <div class="spinner">
                    <img src="../assets/images/失败.png" width="80px" height="80px"></img>
                </div>
                <div style="text-align:center">
                <span style="font-size:16px;vertical-align:text-bottom; color:#dd4a38">申请失败：您已提交过申请，请耐心等候</span>
                 </div>
            </div>

            <div id="applyPending" class="popup" style="width:380px;height:180px;">
                <div class="spinner">
                    <div class="rect1"></div>
                    <div class="rect2"></div>
                    <div class="rect3"></div>
                    <div class="rect4"></div>
                    <div class="rect5"></div>
                </div>
                <div style="text-align:center">
                <img src="../assets/images/跑酷 (1).png" width="20px" height="20px"></img>
                <span style="font-size:16px;vertical-align:text-bottom; color:#dd4a38">同嘉小使正在全力帮你投递申请...</span>
                </div>
            </div>

            <div id="applyFinished" class="popup" style="width:380px;height:180px;">
                <div class="spinner">
                    <img src="../assets/images/等待审核.png" width="80px" height="80px"></img>
                </div>
                <div style="text-align:center">
                <span id="alertinfo" style="font-size:16px;vertical-align:text-bottom; color:#dd4a38">您的申请已发送到相关中介审核，请耐心等待消息！</span>
                </div>
            </div>

            <div id="applyFinished2" class="popup" style="width:380px;height:180px;">
                <div class="spinner">
                    <img src="../assets/images/成功.png" width="80px" height="80px"></img>
                </div>
                <div style="text-align:center">
                <span id="alertinfo" style="font-size:16px;vertical-align:text-bottom; color:#dd4a38">由于您信用较高，申请已通过自动审核！</span>
                </div>
            </div>
            

            <div id="infoBeforeDeliverResume" class="popup" style="height:300px; overflow:visible;">
                <div class="f18">为方便所投递企业HR查阅，请确认个人信息</div>
                <form id="basicInfoForm" method="post">
                    <table width="100%">
                        <tr>
                            <td valign="middle">
                                <span class="redstar">*</span>
                            </td>
                            <td>
                                <input type="text" name="name" placeholder="姓名" />
                            </td>
                            <td valign="middle">
                                <span class="redstar">*</span>
                            </td>
                            <td>
                                <input type="hidden" name="degree" value="" id="degree" />
                                <input type="button" class="profile_select_190 profile_select_normal" id="select_degree" value="最高学历" />
                                <div id="box_degree" class="boxUpDown boxUpDown_190 dn"></div>
                            </td>
                        </tr>
                        <tr>
                            <td valign="middle">
                                <span class="redstar">*</span>
                            </td>
                            <td>
                                <input type="hidden" name="workyear" value="" id="workyear" />
                                <input type="button" class="profile_select_190 profile_select_normal" id="select_workyear" value="工作年限" />
                                <div id="box_workyear" class="boxUpDown boxUpDown_190 dn"></div>
                            </td>
                            <td valign="middle">
                                <span class="redstar">*</span>
                            </td>
                            <td>
                                <input type="hidden" name="expectCity" value="" id="expectCity" />
                                <input type="button" class="profile_select_190 profile_select_normal" id="select_expectCity" value="期望工作城市" />
                                <div id="box_expectCity" class="boxUpDown boxUpDown_596 dn"></div>
                            </td>
                        </tr>
                        <tr>
                            <td valign="middle">
                                <span class="redstar">*</span>
                            </td>
                            <td>
                                <input type="text" name="tel" placeholder="联系电话" />
                            </td>
                            <td valign="middle">
                                <span class="redstar">*</span>
                            </td>
                            <td>
                                <input type="text" name="email" placeholder="邮箱地址" />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colspan="3">
                                <input type="hidden" name="type" value="" />
                                <input type="submit" class="btn" value="确认并投递" />
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
            <!--/#infoBeforeDeliverResume-->

            <!-- 上传附件简历操作说明-重新上传 -->
            <div id="fileResumeUpload" class="popup">
                <table width="100%">
                    <tr>
                        <td>
                            <div class="f18 mb10">请上传标准格式的word简历</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="f16">
                                操作说明：<br /> 打开需要上传的文件 - 点击文件另存为 - 选择.docx - 保存
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <a class="inline btn" href="#uploadFile" title="上传附件简历">重新上传</a>
                        </td>
                    </tr>
                </table>
            </div>
            <!--/#fileResumeUpload-->

            <!-- 上传附件简历操作说明-重新上传 -->
            <div id="fileResumeUploadSize" class="popup">
                <table width="100%">
                    <tr>
                        <td>
                            <div class="f18 mb10">上传文件大小超出限制</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="f16">
                                提示：<br /> 单个附件不能超过10M，请重新选择附件简历！
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <a class="inline btn" href="#uploadFile" title="上传附件简历">重新上传</a>
                        </td>
                    </tr>
                </table>
            </div>
            <!--/#deliverResumeConfirm-->

            <!-- 投简历成功前二次确认 -->
            <div id="deliverResumeConfirm" class="popup">
                <table width="100%">
                    <tr>
                        <td class="msg">
                            <div class="f18">你的简历中：</div>
                            <div class="f16 count"><span class="f18 confirm_field">学历、工作年限、期望工作城市</span>与该职位要求不匹配，确认要投递吗？</div>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <input type="hidden" name="type" value="" />
                            <a href="javascript:sendResume(,140204,true,true);" class="btn">确认投递</a>
                            <a href="javascript:;" class="btn_s">放弃投递</a>
                            <a href="javascript:;" class="f20 edit_field">修改信息</a>
                        </td>
                    </tr>
                </table>
            </div>
            <!--/#deliverResumeConfirm-->

            <!-- 投简历成功 -->
            <div id="deliverResumesSuccess" class="popup" style="width:440px;padding-bottom:10px;">
                <table width="100%">
                    <tr class="drawGGJ">
                        <td align="center">
                            <p class="font_16 count"></p>
                            <p class="font_16 share dn">邀请好友成功注册拉勾，可提升每日投递量 &nbsp;&nbsp; <a href="h/share/invite.html" target="_blank">邀请好友>></a></p>
                        </td>
                    </tr>
                    <tr class="drawQD">
                        <td align="center"><a href="javascript:top.location.reload();" class="btn_s">确&nbsp;定</a></td>
                    </tr>
                    <tr class="weixinQR dn">
                        <td>
                            <div class="weixin">
                                <div class="qr">
                                    <img src="" width="120" height="120" />

                                    <div>[仅限本人使用]</div>
                                </div>
                                <div class="qr_text">
                                    想知道HR是否看过你的简历？<br /> 想在微信中收到面试通知？
                                    <br />
                                    <span><< 微信扫一扫，一并解决</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <!--/#deliverResumesSuccess-->

            <!-- 投递时，一个简历都没有弹窗 -->
            <div id="sendNoResume" class="popup">
                <table width="100%">
                    <tr>
                        <td class="f18 c5" align="center">你还没有可以投递的简历呢</td>
                    </tr>
                    <tr>
                        <td class="c5" align="center">请上传附件简历或填写在线简历后再投递吧~</td>
                    </tr>
                    <tr>
                        <td align="center">
                            <form>
                                <a href="javascript:void(0);" class="btn_addPic">
                                    <span>选择上传文件</span>
                                    <input title="支持word、pdf、ppt、txt、wps格式文件，大小不超过10M" size="3" name="newResume" id="resumeUpload2" class="filePrew" type="file"
                                        onchange="file_check(this,'h/nearBy/updateMyResume.json','resumeUpload2')" />
                                </a>
                            </form>
                            <a class="btn" href="jianli.html" target="_blank">完善在线简历</a>
                        </td>
                    </tr>
                </table>
            </div>
            <!--/#sendNoResume-->

            <!-- 没有简历请上传 -->
            <div id="deliverResumesNo" class="popup">
                <table width="100%">
                    <tr>
                        <td align="center">
                            <p class="font_16">你在拉勾还没有简历，请先上传一份</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <form>
                                <a href="javascript:void(0);" class="btn_addPic">
                                    <span>选择上传文件</span>
                                    <input title="支持word、pdf、ppt、txt、wps格式文件，大小不超过10M" size="3" name="newResume" id="resumeUpload1" class="filePrew" type="file"
                                        onchange="file_check(this,'h/nearBy/updateMyResume.json','resumeUpload1')" />
                                </a>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">支持word、pdf、ppt、txt、wps格式文件，大小不超过10M</td>
                    </tr>
                </table>
            </div>
            <!--/#deliverResumesNo-->

            <!--
    	激活邮箱
		登录邮箱未验证时，
	 	点击上传附件简历、申请职位、订阅职位、发布职位出现该弹窗
	-->
            <div id="activePop" class="popup" style="height:240px;">
                <h4>登录邮箱未验证</h4>
                <p>请验证你的登录邮箱以使用拉勾网的所有功能！ </p>
                <p>我们已将验证邮件发送至：
                    <a></a>，请点击邮件内的链接完成验证。</p>
                <p><a href="javascript:void(0)" id="resend">重新发送验证邮件 </a> | <a href="register.html" target="_blank"> 换个邮箱？ </a>                    </p>
            </div>
            <!--/#activePop-->

            <!--
    	激活邮箱
		验证邮件发送成功弹窗
	-->
            <div id="resend_success" class="popup">
                <p>我们已将激活邮件发送至：
                    <a></a>，请点击邮件内的链接完成验证。</p>
            </div>
            <!--/#resend_success-->

            <!--地图弹窗-->
            <div id="baiduMap" class="popup">
                <div id="allmap"></div>
            </div>
            <!--/#baiduMap-->
        </div>
        <div class="clear"></div>
        <input type="hidden" id="resubmitToken" value="6e1925fdbe7142468f154abd1d33f5a8" />
        <a id="backtop" title="回到顶部" rel="nofollow"></a>
        <jobdetailjs></jobdetailjs>
        <popupjs></popupjs>
    </div>
    <!-- end #container -->
    
</template>

<script>
import $ from 'jquery'
import { mapState } from 'vuex'
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
  name: 'jobdetail',
  data: function() {
      return {
          datanotnull: false,
          delivered: false,
          alertinfo: '',
          agency: '',
          job: '',
          jobid: this.$route.query.jobid
      }
  },
  computed: mapState({user: state => state.user}),
  //changed created to mounted防止组件提前渲染的错误
  mounted: function() {
      var vuectx = this
      console.log(this.$route.query.jobid)
      $.ajax({
          url: HOST + ":" + PORT +"/job/query?Username="+this.user.name,
          type: 'get',
          data: {
              JobID: this.jobid
          },
          dataType: 'json',
          success: function(data) {
              if(data.err !=0 ) {
                  alert("网络连接似乎出了点问题，请刷新页面重试")
                  return
              }
              vuectx._data.job = data.data;
              vuectx._data.delivered = data.data.IsApplied;
              vuectx._data.datanotnull = true;
              loadScript("../../static/js/popup.min.js",function(){

              })
          }
      });

      $.ajax({
          url: HOST + ":" + PORT +"/user/agency",
          type: 'get',
          data: {
              JobID: this.jobid
          },
          dataType: 'json',
          success: function(data) {
              if(data.msg !=0 ) return
              vuectx._data.agency = data.data;
              console.log(data.data);
          }
      });
  },
  methods: {
      deliver: function(e) {
          console.log(this);
            if(this.delivered) {
                return
            } 
            var vuectx = this;
            
            $.ajax({
                url: HOST + ":" + PORT +"/tx/apply?username="+this.user.name,
                type:'post',
                data: {
                    JobID: this.jobid
                },
                dataType:'json',
                success: function(data) {
                    vuectx._data.delivered = true;
                    var title = document.getElementById("cboxTitle");
                    title.innerText = "申请成功"
                    var oldcontent = document.getElementById("cboxLoadedContent");
                    console.log(data.data.State)
                    if(data.data.State == 0) {
                        var newcontent = document.getElementById("applyFinished");
                    } else {
                        var newcontent = document.getElementById("applyFinished2");
                    }
                    oldcontent.innerHTML = newcontent.outerHTML;

                    // 请求刷新缓存
                    $.ajax({
                        url: HOST + ":" + PORT + '/job/query?JobID=' + vuectx.jobid,
                        type: 'get',
                        dataType: 'json',
                        success: function () {
                            console.log("cache refreshed!!")
                        }
                    });
                }
            });
      },
  },
  components: {
      'baiduapi': {
          render(createElement) {
              return createElement(
                  'script', 
                  {
                      attrs: {
                          type: 'text/javascript',
                          src: 'http://api.map.baidu.com/api?v=2.0&ak=3d6a9f4b807441569414b01eecc20959'
                      }
                  }
              )
          }
      },
      'jobdetailjs': {
          render(createElement) {
              return createElement(
                  'script', 
                  {
                      attrs: {
                          type: 'text/javascript',
                          src: 'https://g.alicdn.com/dingding/dinglogin/0.0.2/ddLogin.js'
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
                          src: '../../static/js/popup.min.js'
                      }
                  }
              )
          }
      }
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
        //绑定一个已经申请过该职位的处理事件
        // $("#deliverbtn").attr("href","#loginFailed")
        if ($(this).siblings('#cboxLoadedContent').children('div').attr('id') == 'deliverResumesSuccess' || $(this).siblings('#cboxLoadedContent').children('div').attr('id') == 'uploadFileSuccess') {
            top.location.reload();
        }
    });
})
</script>

<!-- 投简历成功前填写基本信息 -->
<style scoped>
   @import '../assets/css/style.css';
   @import '../assets/css/popup.css';
   @import '../assets/css/external.min.css';
    #cboxContent {
        overflow: visible;
    }
    
    #colorbox,
    #cboxOverlay,
    #cboxWrapper {
        overflow: visible;
    }

    #deliverbtn2 {
        opacity: 0.6;
    }

    #loginToolBar {
        display: none;
    }

    #loginSuccess {
        font-family: 'Hiragino Sans GB'
    }

    #loginFailed {
        font-family: 'Hiragino Sans GB'
    }

    /* 等待加载的滚动条 */
    .spinner {
    margin: 40px auto;
    margin-bottom: 60px;
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

    .job_detail {
        /*左右内容高度修正*/
        height:670px;
    }

    .job_company dt {
        margin-bottom:0
    }
    .job_company dt h2 {
        margin: 0 0 5px 10px;
    }

    .jobs_similar_header {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 5px;
    }

    .jobs_similar_header span {
        position: relative;
        display: inline-block;
        padding: 0 10px 7px 0;
        margin-right: -4px;
        margin-bottom: -2px;
        color: #555;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
    }

    .jobs_similar_header span::after {
        content: "";
        position: absolute;
        top: 11px;
        left: 83px;
        display: inline-block;
        width: 162px;
        border-bottom: 1px solid #e8e8e8;
    }

    .nodata_similar_list {
        background: #fbfbfb url("../assets/images/nodata_similar_list.png") center center no-repeat;
        height: 150px;
    }

    .position-label {
        margin: 0 0 0 -10px;
        padding-left:0;
    }
    .labels {
        float: left;
        height: 22px;
        margin-right: 8px;
        padding: 0 10px;
        line-height: 22px;
        background-color: #fff;
        color: #70797b;
        font-size: 12px;
        border-radius: 10px;
        white-space: nowrap;
        list-style-type:none;
    }
</style>
