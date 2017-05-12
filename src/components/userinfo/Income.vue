<template>
    <div id="container">
        <userinfosidebar></userinfosidebar>
        <div class="content">
            <dl class="company_center_content">
                <dt>
                    <h1>
                        <em></em> 兼职收入
                    </h1>
                </dt>
                <dd>
                <div class="profile_box">
                <h2>账户总览</h2>
                <div id="resumeScore">
                    <div class="score fl">
                        <canvas height="120" width="120" id="doughnutChartCanvas" style="width: 120px; height: 120px;"></canvas>
                        <div style="" class="scoreVal"><span style="display:block;font-size:14px;margin-bottom:8px">账户余额</span><span  style="font-size:21px;color:#019875">¥694.00</span></div>
                    </div>

                    <div class="which fl">
                        <div class="buttons">
                        <span class="startbtn scorebtn"><a>余额提现</a></span>
                        <span class="scorebtn"><a>电子商城</a></span>
                        <span class="scorebtn"><a id="detailbtn" v-on:click="showscoredetail">收起来</a></span>
                        </div>
                    </div>
                </div>
                <!-- creditsChart -->
                <div id="creditsChart">
                    <canvas id="myChart" width="704" height="400"></canvas>
                </div>
                </div>
                <!--end #resumeScore-->
                <div class="profile_box" id="basicInfo">
                    <h2>收支记录</h2>
                    <div class="basicShow">
                    <ul class="reset resumeLists">
                        <li data-id="1686182" class="onlineResume">
                            <label class="checkbox">
			                                    <input type="checkbox">
			                                    <i></i>
			                                </label>
                            <div class="resumeShow resumeIntroCash">
                                <a title="预览在线简历" target="_blank" class="resumeImg" href="resumeView.html?deliverId=1686182">
                                    <img src="../../assets/images/提现 (1).png">
                                </a>
                                <div class="resumeIntro">
                                    <h3 class="unread">
                                        <a target="_blank" title="预览jason的简历" href="resumeView.html?deliverId=1686182">
			                                        				                                            现金提现：￥30
			                                        	</a>
                                        
                                    </h3>
                                    <span class="fr">结算时间：2014-07-01 17:08</span>
                                    <div style="font-size:12px">
                                        <em style="color:#999">来源兼职：</em>知名宜芝多营业员<br>
                                    </div>
                                    <div class="jdpublisher">
                                        <span>
				                                        	来源中介：<a title="随便写" target="_blank" href="http://www.lagou.com/jobs/149594.html">斗米兼职</a>
				                                       						                                        </span>
                                        <span>
				                                        	工作时间：<a title="随便写" target="_blank" href="http://www.lagou.com/jobs/149594.html">2017.04.30</a>
				                                       						                                        </span>
                                    </div>
                                </div>
                                <div class="links">
                                    <a data-resumename="jason的简历" data-positionname="随便写" data-deliverid="1686182" data-positionid="149594" data-resumekey="1ccca806e13637f7b1a4560f80f08057"
                                        data-forwardcount="1" class="resume_forward" href="javascript:void(0)">
                                                    	账户余额：
                                                    	                                                    	<span>￥</span><span>694.00</span>
                                                    	                                                    </a>
                                    
                                </div>
                            </div>
                        </li>
                        <li data-id="1686182" class="onlineResume">
                            <label class="checkbox">
			                                    <input type="checkbox">
			                                    <i></i>
			                                </label>
                            <div class="resumeShow">
                                <a title="预览在线简历" target="_blank" class="resumeImg" href="resumeView.html?deliverId=1686182">
                                    <img src="../../assets/images/收入.png">
                                </a>
                                <div class="resumeIntro">
                                    <h3 class="unread">
                                        <a target="_blank" title="预览jason的简历" href="resumeView.html?deliverId=1686182">
			                                        				                                            兼职日结收入: ￥120
			                                        	</a>
                                        
                                    </h3>
                                    <span class="fr">结算时间：2014-07-01 17:08</span>
                                    <div style="font-size:12px">
                                        <em style="color:#999">来源兼职：</em>影院检票一协助小时工日结包餐<br>
                                    </div>
                                    <div class="jdpublisher">
                                        <span>
				                                        	来源中介：<a title="随便写" target="_blank" href="http://www.lagou.com/jobs/149594.html">斗米兼职</a>
				                                       						                                        </span>
                                        <span>
				                                        	工作时间：<a title="随便写" target="_blank" href="http://www.lagou.com/jobs/149594.html">2017.05.02</a>
				                                       						                                        </span>
                                    </div>
                                </div>
                                <div class="links">
                                    <a data-resumename="jason的简历" data-positionname="随便写" data-deliverid="1686182" data-positionid="149594" data-resumekey="1ccca806e13637f7b1a4560f80f08057"
                                        data-forwardcount="1" class="resume_forward" href="javascript:void(0)">
                                                    	账户余额：
                                                    	                                                    	<span>￥</span><span>724.00</span>
                                                    	                                                    </a>
                                    
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- end .resumeLists -->
                    </div>
                    <!--end .basicShow-->
                </div>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
import UserInfoSideBar from './UserInfoSideBar'
import IncomeChart from '../chart/IncomeChart'
import Chart from 'chart.js';
export default {
    name: 'credits',
    components: {
        'userinfosidebar': UserInfoSideBar,
        'incomeChart': IncomeChart,
    },
    data: function () {
        return {
            showing: true
        }
    },
    mounted: function(){
         var perCurrent = $(".company_center_aside .current").removeClass('current');
         var current = $(".jobinfo").find("dd:eq(2)");
         current.addClass('current');
         this.showscoredetail();
         var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2017.04.10', '2017.04.17', '2017.04.24', '2017.05.01'],
                datasets: [{
                    label: '账户余额收支情况（最近一个月）',
                    fill: false,
                    lineTension:0,
                    borderColor: '#FF6666',
                    backgroundColor: '#FF6666',
                    data: [670, 604, 724, 694],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:false
                        }
                    }]
                }
            }
        });
    },
    methods: {
        showscoredetail: function() {
            var a = document.getElementById('detailbtn');
            if(this.showing){
              a.innerText = "了解收支"
              $("#myChart").hide();
              //$('#line-chart').css('height','0px');
              this.showing = !this.showing;
            } else {
              a.innerText = "收起来"
              //一开始就hide的话，会导致vue-chartjs不渲染
              $("#myChart").show();
              //$('#line-chart').css('height','400px');
              this.showing = !this.showing;
            }
            
        }
    }
}
</script>

<style scoped>
   @import '../../assets/css/style.css';
   @import '../../assets/css/popup.css';

   #resumeScore {
       margin-top: 25px;
       margin-left: 13px;
   }

   #resumeScore .fl {
       display:inline-block;
   }

   #resumeScore div.which {
       width:460px;
   }

   ul.resumeLists li{
       width: 634px;
       font-size:14px;
   }

   #resumeScore div.scoreVal {
       top:52px;
   }

   #resumeScore div.which .level{
       margin: 30px 20px 0px 150px;
       text-align: left;
    }

    #resumeScore div.which .evaTime{
       margin: 5px 20px 15px 150px;
       text-align: left;
    }

    .resumeIntro span {
        margin:-30px 0 0 0;
    }

    #resumeScore div.which a {
        display: inline-block;
        padding: 3px 10px;
    }

    .scorebtn {
        margin: 0 0 0 20px!important;
    }

    .startbtn {
        margin-left: 80px!important;
    }

    #line-chart {
        height:400px;
    }

    #resumeScore div.fl {
        background-color: white;
    }

    #resumeScore div.which div {
        margin: 60px 10px 20px 10px;
        text-align: center;
    }

    ul.resumeLists li .resumeShow img {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 10px;
    left: 10px;
    }

    .resumeIntro h3.unread {
    font-weight: 400;
}

.resumeIntroCash h3 a {
    color: #FF6666;
    font-size: 18px;
    margin-right: 10px;
}

.resumeIntroCash .links a{
    color: #FF6666
}

</style>