<template>
    <div id="container">
        <userinfosidebar></userinfosidebar>
        <div class="content">
            <dl class="company_center_content">
                <dt>
                    <h1>
                        <em></em> 信用积分
                    </h1>
                </dt>
                <dd>
                <div class="profile_box">
                <h2>信用一览</h2>
                <div id="resumeScore">
                    <div class="score fl">
                        <div style="" class="scoreVal"><span id="newestScoreTitle"> 最新信用分 </span>
                            <div id="newestScoreContent">
                                <span id="newestScore">{{newestScore}}.0</span>
                            </div>
                        </div>
                    </div>

                    <div class="which fl">
                        <div class="level">信用等级:<em style="color:#dd4a38"> 良好</em></div>
                        <div class="evaTime">评估时间:<em> 2017-04-06</em></div>
                        <span class="startbtn scorebtn"><a>晒晒分</a></span>
                        <span class="scorebtn"><a id="detailbtn" v-on:click="showscoredetail">收起来</a></span>
                    </div>
                </div>
                <!-- creditsChart -->
                <div id="creditsChart">
                    <canvas id="myChart" width="704" height="400"></canvas>
                </div>
                </div>
                <!--end #resumeScore-->
                <!-- mock信用数据 -->
                <div class="profile_box" id="basicInfo">
                    <h2>信用足迹</h2>
                    <div class="basicShow">
                    <ul class="reset resumeLists">
                        <li data-id="1686182" class="onlineResume">
                            <label class="checkbox">
			                                    <input type="checkbox">
			                                    <i></i>
			                                </label>
                            <div class="resumeShow">
                                <a title="预览在线简历" target="_blank" class="resumeImg" href="resumeView.html?deliverId=1686182">
                                    <img src="../../assets/images/logo_doumi.png">
                                </a>
                                <div class="resumeIntro">
                                    <h3 class="unread">
                                        <a target="_blank" title="预览jason的简历" href="resumeView.html?deliverId=1686182">
			                                        				                                            知名宜芝多营业员
			                                        	</a>
                                        
                                    </h3>
                                    <span class="fr">结算时间：2014-07-01 17:08</span>
                                    <div style="font-size:12px">
                                        <em style="color:#999">工作地点：</em>上海嘉定 <em style="color:#999">兼职类型：</em>服务员<br>
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
                                                    	互评信用结果：
                                                    	                                                    	<span>+3</span><span>分</span>
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
                                    <img src="../../assets/images/logo_doumi.png">
                                </a>
                                <div class="resumeIntro">
                                    <h3 class="unread">
                                        <a target="_blank" title="预览jason的简历" href="resumeView.html?deliverId=1686182">
			                                        				                                            影院检票一协助小时工日结包餐
			                                        	</a>
                                        
                                    </h3>
                                    <span class="fr">结算时间：2014-07-01 17:08</span>
                                    <div style="font-size:12px">
                                        <em style="color:#999">工作地点：</em>上海宝山 <em style="color:#999">兼职类型：</em>其他<br>
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
                                                    	互评信用结果：
                                                    	                                                    	<span>-2</span><span>分</span>
                                                    	                                                    </a>
                                    
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- end .resumeLists -->
                    </div>
                    <!-- mock信用数据 -->
                    <!--end .basicShow-->
                </div>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
import UserInfoSideBar from './UserInfoSideBar'
import { mapState } from 'vuex'
import CreditsChart from '../chart/CreditsChart'
import Chart from 'chart.js';
import CreditshistoryChart from '../chart/CreditshistoryChart'
export default {
    name: 'credits',
    components: {
        'userinfosidebar': UserInfoSideBar,
        'creditsChart': CreditsChart,
        'creditshistoryChart': CreditshistoryChart
    },
    computed: mapState({user: state => state.user}),
    data: function () {
        return {
            showing: true,
            newestScore: 0
        }
    },
    mounted: function(){
         var vuectx = this;
         $.ajax({
             url: HOST+ ":" + PORT+ "/user/score?username=" + this.user.name,
             type: "get",
             dataType: "json",
             success: function(data) {
                 vuectx.newestScore = data.data.CurrentCreditScore;
                 vuectx.drawChart();
             }
         })
         
         var perCurrent = $(".company_center_aside .current").removeClass('current');
         var current = $(".jobinfo").find("dd:eq(1)");
         current.addClass('current');
         this.showscoredetail();
         
    },
    methods: {
        drawChart: function() {
            var ctx = document.getElementById("myChart");
            //mock 信用分数据
            var mockdata = [6, 8, 7, this.newestScore];
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['2017.04.23', '2017.04.30', '2017.05.07', '2017.05.14'],
                    datasets: [{
                        label: '信用积分成长情况（最近4次兼职）',
                        fill: false,
                        lineTension:0,
                        borderColor: '#FF6666',
                        backgroundColor: '#FF6666',
                        data: mockdata,
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
        showscoredetail: function() {
            var a = document.getElementById('detailbtn');
            if(this.showing){
              a.innerText = "了解分"
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
        margin-left: 150px!important;
    }

    #line-chart {
        height:400px;
    }

    #resumeScore div.fl {
        background-color: white;
    }

    #newestScoreContent {
        /* 分数改成斜体后的修正位移 */
        margin-right:10px;  
    }

    #newestScore {
        font-size:50px;
        font-style:italic;
        color:#019875;
    }

    #newestScoreTitle {
        display:block;
        font-size:14px;
        margin-bottom:18px
    }
    

</style>