<template>
<div id="container">
    <agencysidebar></agencysidebar>
    <div class="content">
        <dl class="company_center_content">
            <dt>
                <h1>
                    <em></em> 有效职位 <span>（共<i style="color:#fff;font-style:normal" id="positionNumber">{{positions.length}}</i>个）</span> </h1>
            </dt>
            <dd>
                <form id="searchForm">
                    <input type="hidden" value="Publish" name="type">
                    <ul class="reset my_jobs">
                        <template v-for="position in positions">
                            <li data-id="149594">
                                <h3>
                                    <a target="_blank" title="随便写" href="http://www.lagou.com/jobs/149594.html">{{position.JobDetail.Title}}</a>
                                    <span>[{{position.JobDetail.Place}}]</span>
                                </h3>
                                <span class="receivedResumeNo"><router-link :to="{ path:'unhandleresumes', query:{jobid: position.JobID}}">应聘简历（{{position.TotalWaitCheck}}）</router-link></span>
                                <div>兼职 / 1k-2k / 1-3年 / 硕士及以上</div>
                                <div class="c9">发布时间： 2014-07-01 17:07:01</div>
                                <div class="links">
                                    <a class="job_refresh" :chartid="position.JobID" v-on:click="showapplydetail($event)" href="javascript:void(0)">刷新<span>每个职位7天内只能刷新一次</span></a>
                                    <a target="_blank" class="job_edit" href="create.html?positionId=149594">编辑</a>
                                    <a class="job_offline" href="javascript:void(0)">下线</a>
                                    <a class="job_del" href="javascript:void(0)">删除</a>
                                </div>
                                <positionChart showing=false :id="position.JobID" class="positionChart"></positionChart>
                            </li>
                        </template>
                    </ul>
                </form>
            </dd>
        </dl>
    </div>
    <!-- end .content -->
    <joblistjs></joblistjs>
    <div class="clear"></div>
    <input type="hidden" value="74fb1ce14ebf4e2495270b0fbad64704" id="resubmitToken">
    <a rel="nofollow" title="回到顶部" id="backtop"></a>
</div>
<!-- end #container -->
</template>

<script>
import { mapState } from 'vuex'
import PositionChart from './chart/PositionChart'
import AgencySidebar from './resume/AgencySidebar'

 export default {
     name: 'position',
     data: function() {
         return {
             positions: ''
         }
     },
     computed: mapState({user: state => state.user}),
     components: {
      'joblistjs': {
          render(createElement) {
              return createElement(
                  'script', 
                  {
                      attrs: {
                          type: 'text/javascript',
                          src: '../../static/js/job_list.min.js'
                      }
                  }
              )
          }
      },
      PositionChart,
      'agencysidebar': AgencySidebar
     },
     mounted: function() {
         var perCurrent = $(".company_center_aside .current").removeClass('current');
         var current = $(".positioninfo").find("dd:eq(0)");
         current.addClass('current');
         var vuectx = this;
         $.ajax({
             url: HOST + ":" + PORT +"/job/agency/jobs?username="+this.user.name,
             type: "get",
             dataType: "json",
             success: function(data) {
                 vuectx._data.positions = data.data;
             }
         })
     },
     methods :{
         showapplydetail: function(e) {
             var chartid = $(e.currentTarget).attr("chartid");
             var chart = $("#"+chartid);
             if(chart.attr("showing")=="false"){
                 chart.attr("showing","true");
                 $("#"+chartid).css("height","400px");
             } else {
                 chart.attr("showing","false");
                 $("#"+chartid).css("height","0px");
             }
             
         }
     }
 }
</script>

<style scoped>
   @import '../assets/css/style.css';
   @import '../assets/css/popup.css';
   .positionChart {
       height: 0px;
       background-color: white;
   }
</style>