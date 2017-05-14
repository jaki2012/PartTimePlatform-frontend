<template>
    <div id="container">
        <input style="display: none" type="button" value="撒金币" id="btn1" />
        <div id="mask" class="mask" v-on:click="hideMask"></div>  
        <userinfosidebar></userinfosidebar>
        <!-- end .sidebar -->
        <div class="content">
        <div class="content_l">
                <dl class="c_delivery">
                    <dt>
                        <h1 v-on:click="showMask"><em></em>我的兼职状态</h1>
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
                                <template v-for="(userjob,index) in userjobs">
                                <li>
                                    <div class="d_item">
                                        <h2 title="随便写">
                                            <a target="_blank" href="http://www.lagou.com/jobs/149594.html">
                                                <em>{{userjob.JobDetail.Title}}</em>
                                                <span>({{userjob.JobDetail.Salary}} x {{userjob.JobDetail.Day}})</span>
                                                <!--  -->
                                            </a>
                                            <span style="color:#999">[{{userjob.JobDetail.Place}}]</span> 
                                        </h2>
                                        <h4>
                                            <a target="_blank" href="http://www.lagou.com/jobs/149594.html">
                                                <em>{{userjob.AgencyName}}</em>
                                                <!--  -->
                                            </a>
                                        </h4>
                                        <div class="clear"></div>
                                        <a v-if="userjob.Tx.AgencyScore==0 && userjob.Tx.StuScore==0" title="公司名称" class="d_jobname" target="_blank">
                                                <span>申请状态：</span>{{userjob.Tx.Status}} 
                                        </a>
                                        <a v-if="userjob.Tx.AgencyScore==0 && userjob.Tx.StuScore!=0" title="公司名称" class="d_jobname" target="_blank">
                                                <span>申请状态：</span>兼职中介方已评
                                        </a>
                                        <a v-if="userjob.Tx.AgencyScore!=0 && userjob.Tx.StuScore==0" title="公司名称" class="d_jobname" target="_blank">
                                                <span>申请状态：</span>我已评价 
                                        </a>
                                        <a v-if="userjob.Tx.AgencyScore!=0 && userjob.Tx.StuScore!=0" title="公司名称" class="d_jobname" target="_blank">
                                                <span>申请状态：</span>{{userjob.Tx.Status}} 
                                        </a>
                                        <span class="d_time">{{userjob.Tx.ApplyTime}}</span>
                                        <div class="clear"></div>
                                        <div class="d_resume">
                                            使用简历：
                                            <span>
                                                                                                在线简历
                                                                                            </span>
                                        </div>
                                        <div v-if="userjob.Tx.State!=0">
                                        <a v-if="userjob.Tx.AgencyScore==0" class="btn_showprogress resume_forward" href="javascript:;" :txid="userjob.Tx.TxID" :agency="userjob.AgencyName" :jobtitle="userjob.JobDetail.Title" v-on:click="popup($event)">
                                                                                                        评价
                                                                                                <i></i></a>
                                        <a v-if="userjob.Tx.AgencyScore!=0" class="btn_showprogress" href="javascript:;" :txid="userjob.Tx.TxID" :agency="userjob.AgencyName" :jobtitle="userjob.JobDetail.Title" v-on:click="popup($event)">
                                                                                                        已评价
                                                                                                <i></i></a>
                                        </div>
                                        <div v-if="userjob.Tx.State==0">
                                        <a class="btn_showprogress" href="javascript:;" :txid="userjob.Tx.TxID" :agency="userjob.AgencyName" :jobtitle="userjob.JobDetail.Title" v-on:click="popup($event)">
                                                                                                        等待审核
                                                                                                <i></i></a>
                                        </div>
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
                                </template>
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
                                <input disabled type="text" :placeholder="evaluatingagency" id="recipients" name="recipients">
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
                            <td align="right">中介表现</td>
                            <td style="padding-bottom:0px;">
                                <input id="input-id" data-stars="10" data-symbol="★" type="number" class="rating" min=0 max=10 step=1 data-size="xs" >
                            </td>
                        </tr>
                        <tr>
                            <td align="right"></td>
                            <td style="padding-bottom:0px;">
                                <!-- 查看js源码 options.stars-->
                                <p class="hint">（提示：如果对中介提供的兼职感到满意，请打9分以上）</p>
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
        <div id="applyPending" class="popup" style="width:380px;height:180px;display:none">
            <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
            <div style="text-align:center">
            <img src="../../assets/images/跑酷 (1).png" width="20px" height="20px"></img>
            <span style="font-size:16px;vertical-align:text-bottom; color:#dd4a38">同嘉小使正在全力帮你处理结果...</span>
            </div>
        </div>

        <div id="applyFinished" class="popup" style="width:380px;height:180px;display:none">
            <div class="spinner">
                <img src="../../assets/images/成功.png" width="80px" height="80px"></img>
            </div>
            <div style="text-align:center">
            <span style="font-size:16px;vertical-align:text-bottom; color:#dd4a38">您的评价已成功提交！</span>
            </div>
        </div>
        <div id="applyFinished2" class="popup" style="width:380px;height:180px;display:none">
            <div class="spinner">
                <img src="../../assets/images/成功.png" width="80px" height="80px"></img>
            </div>
            <div style="text-align:center">
            <span style="font-size:16px;vertical-align:text-bottom; color:#dd4a38">双方互评完成！兼职收入将转入您的账户！</span>
            </div>
        </div>
        </div>
            <starratingjs></starratingjs>
    </div>
    <!-- end #container -->
</template>

<script>
function Coin(opts){
		//默认参数
		this.defaults={
			 //coinSrc:"http://gw.alicdn.com/tps/i3/TB1QJ5DGpXXXXaBXXXXuv2kGFXX-39-39.png_40x40Q50s150.jpg",     //金币图片地址
			coinSrc:"../../../static/images/bitcoin.png",     
			// audioSrc:"http://download.taobaocdn.com/freedom/26370/media/shake.mp3",	//金币音频地址
			coinWidth:50,           //金币宽度
			coinHeight:50,          //金币高度
			density:10,  // 金币个数
			time:2000
		};
		this.settings=this._extendDeep(this.defaults,opts);   //深拷贝
		this.density=this.settings.density;                   //密度，即金币个数
		this.timeLag=this.settings.time;                      //金币散落的事件间隔，数字越大表示间隔越大
		this.coinWidth=this.settings.coinWidth;               //金币宽度
		this.coinHeight=this.settings.coinHeight;             //金币高度
		this.wrapWidth=0;
		this.wrapHeight=0;
		this._init();
	}
	Coin.prototype={
		constructor:Coin,
		/**
		 * 动画初始化方法
		 * @method _init
		**/
		_init:function(){
			//初始化包括尺寸大小
			this.wrapWidth=document.documentElement.clientWidth;
			this.wrapHeight=document.documentElement.clientHeight;
			this._requestAnimationFrame();
			this._createCanvas();
			this._createAudio();
		},
		/**
		 * 对象深拷贝方法
		 * @method _extendDeep
		 * @param  {object} parent 父对象
				   {object} child  子对象
		   @return {object} child  父对象继承给子对象
		**/
		_extendDeep:function(child,parent){
			var i,
			toStr = Object.prototype.toString,
			astr = "[object Array]";
			child = child || {};
			for (i in parent) {
				if (parent.hasOwnProperty(i)) {
					if (typeof parent[i] === "object") {
						child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
						extendDeep(parent[i], child[i]);
					} else {
						child[i] = parent[i];
					}
				}
			}
			return child;
		},
		/**
		 * requestAnimationFrame做兼容
		 * @method _requestAnimationFrame
		**/
		_requestAnimationFrame:function(){
			var lastTime = 0;
			var vendors = ['webkit', 'moz'];
			for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
											  window[vendors[x] + 'CancelRequestAnimationFrame'];
			}
			if (!window.requestAnimationFrame) {
				window.requestAnimationFrame = function(callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
					var id = window.setTimeout(function() {
						callback(currTime + timeToCall);
					}, timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
			}
			if (!window.cancelAnimationFrame) {
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};
			}
		},
		/**
		 * 创建canvas画布
		 * @method _createCanvas
		**/
		_createCanvas:function(){
			var _self=this;
			this.canvas=document.createElement('canvas');
            this.canvas.setAttribute("id","coincanvas");
			this.canvas.setAttribute("data-id",Date.now());
			if(!this.canvas.getContext){
				alert("您的浏览器不支持canvas");
				return;
			}
			this.context=this.canvas.getContext('2d');
			this.canvas.width=this.wrapWidth;
			this.canvas.height=this.wrapHeight;
			var oBody=document.getElementById("mask");
			oBody.appendChild(this.canvas);
			this._createCacheCanvas();
		},
		_createCacheCanvas:function(){
			var _self=this;
			this.cacheCanvas=document.createElement('canvas');
			this.cacheContext=this.cacheCanvas.getContext('2d');
			this.cacheCanvas.width=this.wrapWidth;
			this.cacheCanvas.height=this.wrapHeight;
			this.coinImg=new Image();
			this.coinImg.src=this.settings.coinSrc;
			this.coinImg.onload=function(){
				_self._startCacheCanvasAnim();
			}
		},
		/**
		 * 执行金币绘制动画
		 * @method _startCanvasAnim
		**/
		_startCacheCanvasAnim:function(){
			var _self=this;
			var availWidth=this.cacheCanvas.width-this.coinWidth;
			var availHeight=this.cacheCanvas.height-this.coinHeight;
			//var disX=availWidth/this.density;  //每个硬币X轴的间距
			var coinRange=availWidth*this.density/(this.density+15);
			var rangeStart=(availWidth-coinRange)/2;
			var g=9.8*280;   //重力加速度
			var bPlayAudio=false;
			var coinAttrArr=[];  //存储金币下落过程中的一些属性参数
			for(var i=0;i<_self.density;i++){
				coinAttrArr[i]={
					rndX:Math.random(),                                    //存储金币开始降落x轴随机值
					rndOrder:Math.round(Math.random()*_self.timeLag/17),   //存储金币撒落顺序的一个数组
					time:0,									               //存储金币绘制的具体时间
					top:0,                                                 //存储金币绘制距离顶部的距离
					left:0,                                                //存储金币弹起后距离左边的距离
					endSpeed:0,                                            //存储金币第一次接触地面的速度
					bEnd:false,								               //存储金币是否触碰到地面
					reDownSpeed:0,                                         //存储金币弹起后重新降落的速度
					reDownHDelta:Math.random()*100+250,                    //存储金币弹起的高度参数，随机值250~350之间
					rndOffsetX:Math.random()*0.06+0.97                     //存储金币x轴的偏移量，随机值0.97~1.03之间
				}
			}
			var startTime =  Date.now();  //开始绘制前的时间
			function draw(){
				var drawStart = Date.now();  //记录重绘的结束事件
				var diff = (drawStart - startTime)/1000;  //计算每次重绘所需要的事件，单位为秒
				startTime = drawStart;   //结束事件传给开始事件
				_self.context.clearRect(0,0,_self.canvas.width,_self.canvas.height);  //清除画布，方便重绘
				_self.cacheContext.clearRect(0,0,_self.cacheCanvas.width,_self.cacheCanvas.height);  //清除画布，方便重绘
				_self.cacheContext.save();
				//根据金币个数循环绘制金币
				for(var i=0;i<_self.density;i++){
					if((coinAttrArr[i].rndOrder==0&&coinAttrArr[i].time==0)){   //如果顺序为0，表示开始下落，同时下落的初始时间为0时，赋值初始时间
						coinAttrArr[i].time=diff;
					}
					if(coinAttrArr[i].time>0){     //如果初始事件大于0，表示已经在下落过程中,则每次的初始时间递增
						coinAttrArr[i].time=coinAttrArr[i].time+diff;
					}
					if(coinAttrArr[i].rndOrder==0){  //如果顺序为0，开始下落，则开始绘制金币
						if(!coinAttrArr[i].bEnd){   //金币下落（过程一），自由落体运动
							coinAttrArr[i].top=g*Math.pow(coinAttrArr[i].time,2)/2-_self.coinHeight;   //自由落体加速度运动，求下落的高度
							//coinAttrArr[i].left=disX*coinAttrArr[i].rndX+i*disX;
							coinAttrArr[i].left=coinRange*coinAttrArr[i].rndX+rangeStart;
						}else if(coinAttrArr[i].endSpeed==0){   //金币弹起后在空中重新下落（过程三）
							coinAttrArr[i].reDownSpeed=coinAttrArr[i].reDownSpeed*1.1;
							coinAttrArr[i].top=coinAttrArr[i].top+coinAttrArr[i].reDownSpeed;
							coinAttrArr[i].left=coinAttrArr[i].left*coinAttrArr[i].rndOffsetX;
						}else{   //金币弹起（过程二）
							coinAttrArr[i].endSpeed=-Math.abs(coinAttrArr[i].endSpeed*0.96);
							if(Math.abs(coinAttrArr[i].endSpeed)<1) coinAttrArr[i].endSpeed=0;
							coinAttrArr[i].top=coinAttrArr[i].top+coinAttrArr[i].endSpeed;
							coinAttrArr[i].left=coinAttrArr[i].left*coinAttrArr[i].rndOffsetX;
						}
						//金币第一次降落超过地面时，将其高度设置和地面齐平
						if(coinAttrArr[i].top>_self.cacheCanvas.height-_self.coinHeight&&!coinAttrArr[i].bEnd){
							coinAttrArr[i].top=_self.cacheCanvas.height-_self.coinHeight;
						}
						//金币落地时，计算落地的速度
						if(coinAttrArr[i].top==_self.cacheCanvas.height-_self.coinHeight){
							coinAttrArr[i].endSpeed=g*coinAttrArr[i].time/coinAttrArr[i].reDownHDelta;
							coinAttrArr[i].reDownSpeed=coinAttrArr[i].endSpeed/10;
							coinAttrArr[i].bEnd=true;
						}
						//绘制金币
						_self.cacheContext.drawImage(_self.coinImg,coinAttrArr[i].left,coinAttrArr[i].top,_self.coinWidth,_self.coinHeight);
					}
					coinAttrArr[i].rndOrder=coinAttrArr[i].rndOrder==0?0:coinAttrArr[i].rndOrder-1;//顺序每一次重绘则递减一次，直到为0时，代表开始下落
				}
				_self.cacheContext.restore();
				_self.context.drawImage(_self.cacheCanvas,0,0,_self.canvas.width,_self.canvas.height);
				var firstH=_self._maxNum(coinAttrArr,"top");//求降落过程中高度最大的金币高度
				if(firstH>=_self.cacheCanvas.height-_self.coinHeight&&!bPlayAudio){
					_self._playAudio();
					bPlayAudio=true;
				}
				var lastH=_self._minNum(coinAttrArr,"top");//求降落过程中高度最小的金币高度
				if(lastH<=_self.cacheCanvas.height+_self.coinHeight){ //最后一个金币高度超出canvas的高度停止重绘
					window.requestAnimationFrame(draw);  //重绘，递回调用绘制方法
				}else{
					console.log("金币都撒完了");
					_self._destory();
				}
			}
			window.requestAnimationFrame(draw);  //第一次绘制
		},
		/**
		 * 求最小值
		 * @method _minNum
		 * @param   {arr}    arr  属性数组
					{string} attr 数组下的属性名称
		 * @return  {number}      返回数组下属性值最小的值
		**/
		_minNum:function(arr,attr){
			var tempArr=[];
			for(var i=0;i<arr.length;i++){
				tempArr.push(arr[i][attr]);
			}
			return tempArr.sort(function(a,b){return a-b})[0];
		},
		/**
		 * 求最大值
		 * @method _minNum
		 * @param   {arr}    arr  属性数组
					{string} attr 数组下的属性名称
		 * @return  {number}      返回数组下属性值最大的值
		**/
		_maxNum:function(arr,attr){
			var tempArr=[];
			for(var i=0;i<arr.length;i++){
				tempArr.push(arr[i][attr]);
			}
			return tempArr.sort(function(a,b){return b-a})[0];
		},
		/**
		 * 创建音频对象
		 * @method _createAudio
		**/
		_createAudio:function(){
			this.audio=document.createElement('audio');
			this.audio.setAttribute("preload","load");
			var oSource=document.createElement('source');
			oSource.setAttribute("src",this.settings.audioSrc);
			oSource.setAttribute("type","audio/mp3");
			this.audio.appendChild(oSource);
			var oBody=document.getElementById('mask');
			oBody.appendChild(this.audio);
		},
		/**
		 * 播放音频
		 * @method _playAudio
		**/
		_playAudio:function(){
			this.audio.play();
		},
		/**
		 * 销毁canvas和audio
		 * @method _destory
		**/
		_destory:function(){
			var oBody=document.getElementById('mask');
			oBody.removeChild(this.canvas);
			oBody.removeChild(this.audio);
            $("#mask").hide()
		}
	}

window.onload=function(){
    var oBtn=document.getElementById('btn1');
    init();
    // oBtn.onclick=function(){      
    //     // $("#mask").css("height",$(document).height());     
    //     // $("#mask").css("width",$(document).width());     
    //     // $("#mask").show();  
    //     var coin=new Coin();
    // }
    var SHAKE_THRESHOLD = 400;
    var last_update = 0;
    var index=0;
    var x, y , z ,last_x ,last_y ,last_z;
    x=y=z=last_x=last_y=last_z = 0
    // var x = y = z = last_x = last_y = last_z = 0;
    var w_curTime=0;
    function init() {
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', deviceMotionHandler, false);
        } else {
            alert('not support mobile event');
        }
    }
    function deviceMotionHandler(eventData) {
        var acceleration = eventData.accelerationIncludingGravity;
        var curTime = new Date().getTime();
        if ((curTime - last_update) > 100) {
            var diffTime = curTime - last_update;
            last_update = curTime;
            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;
            var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
            var delta=Math.abs(x + y + z - last_x - last_y - last_z);
            if (speed > SHAKE_THRESHOLD) {
                if((curTime-w_curTime)>2000){
                    w_curTime!=0 && new Coin({density:Math.round(delta)});
                    w_curTime=curTime;
                }
            }
            last_x = x;
            last_y = y;
            last_z = z;
        }
    }
}

import { mapState } from 'vuex';
import UserInfoSideBar from './UserInfoSideBar';
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
    name: 'userinfo',
    components: {
        'userinfosidebar': UserInfoSideBar,
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
        },
        'coinjs': {
            render(createElement) {
                return createElement(
                    'script',
                    {
                        attrs: {
                            type: 'text/javascript',
                            src: '../../../static/js/coin.js'
                        }
                    }
                )
            }
        }
    },
    data: function() {
        return {
            datanotnull: false,
            userjobs: '',
            evaluatingtxid:'',
            evaluatingagency:'',
            evaluatingjobtitle:'',
            //临时存储表单的
            tempform: null,
        }
    },
    computed: mapState({user: state => state.user}),
    mounted: function (){
        // jquery需要获取vue上下文环境
        var vuectx = this;
        $.ajax({
            url: HOST + ":" + PORT +"/tx/student/jobs?username="+this.user.name,
            type:'get',
            dataType:'json',
            success: function(data) {
                if(data.err != 0) return
                vuectx._data.userjobs = data.data;
                //将脚本加载后置，否则提前绑定了点击事件将会失效
                loadScript("../../../static/js/evaluateagency.js", function(){
                    //console.log('Actually we do nothing here')
                })
            }
        });
        var perCurrent = $(".company_center_aside .current").removeClass('current');
        var current = $(".jobinfo").find("dd:eq(0)");
        current.addClass('current');
        
    },
    methods: {
        popup: function(e) {
            //$("#currentevalu").removeAttr("id");
            //console.log(e.currentTarget)
            //$(e.currentTarget).attr("id","#currentevalu");
            this.evaluatingtxid = $(e.currentTarget).attr("txid");
            this.evaluatingagency = $(e.currentTarget).attr("agency");
            this.evaluatingjobtitle = $(e.currentTarget).attr("jobtitle");
        },
        evaluate: function() {
            
            $("#applyPending").css("display","block");
            var score = $("#input-id").val()
            var oldcontent = document.getElementById("cboxLoadedContent")
            var newcontent = document.getElementById("applyPending")
            oldcontent.innerHTML = newcontent.outerHTML;
            var vuectx = this;
            //$("#cboxClose").click();
            $.ajax({
                url: HOST + ":" + PORT +"/tx/evaluate?username="+this.user.name,
                type:'post',
                data: {
                    Score: score,
                    TxID: this.evaluatingtxid
                },
                dataType:'json',
                success: function(data) {
                    //alert("评价中介成功！")
                    if(data.data.State == 3) {
                        console.log("i am in ")
                        newcontent = document.getElementById("applyFinished2")
                        $("#applyFinished2").css("display","block");
                        oldcontent.innerHTML = newcontent.outerHTML;
                        $("#cboxClose").on("click",vuectx.test)
                    
                    } else {
                        newcontent = document.getElementById("applyFinished")
                        $("#applyFinished").css("display","block");
                        oldcontent.innerHTML = newcontent.outerHTML;
                       
                    }
                    vuectx.refreshPage();
                    //$("#cboxClose").on("click",vuectx.test);
                    //重新发送请求 更新数据 刷新数据
                    // vuectx.refreshPage();
                    // $.ajax({
                    //     url: HOST + ":" + PORT +"/tx/student/jobs?username="+vuectx.user.name,
                    //     type:'get',
                    //     dataType:'json',
                    //     success: function(data) {
                    //         if(data.err != 0) return
                    //         vuectx._data.userjobs = data.data;
                    //         //将脚本加载后置，否则提前绑定了点击事件将会失效
                    //         loadScript("../../../static/js/evaluateagency.js", function(){
                    //             //console.log('Actually we do nothing here')
                    //         })
                    //     }
                    // });
                }
            });
        },
        refreshPage: function() {
            this.$router.replace({path: '/refreshmj'})
        },
        test: function() {  
            $("#mask").css("height",$(document).height());     
            $("#mask").css("width",$(document).width());     
            $("#mask").show();  
            var coin=new Coin();
            $("#cboxClose").off("click",this.test)
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
        }, 
        showMask: function() {
            $("#mask").css("height",$(document).height());     
            $("#mask").css("width",$(document).width());     
            $("#mask").show();   
        },
        hideMask: function() {
            $("#mask").hide();  
        }
    }
}
</script>

<style scoped>
   @import '../../assets/css/style.css';
   @import '../../assets/css/popup.css';
   @import '../../assets/css/star-rating.min.css';

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
  .hint {
     color:#dd4a38;
     margin: 0 0 0 4px!important;
     font-size: 13px!important;
   }

      #applyPending {
       margin:50px auto;
   }

   #applyFinished {
       margin:50px auto;
   }

   #applyFinished2 {
       margin:50px auto;
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

    .mask {       
        position: absolute; top: 0px; 
        /* filter: alpha(opacity=60); */
        background-color: rgba(7,7,7,0.3);     
        z-index: 1002; left: 0px;     
        /*opacity:0.6; -moz-opacity:0.5;*/     
    }

    #btn1{position:absolute;z-index:1000}
	#coincanvas{
        position:absolute;top:0;left:0;
    }

</style>