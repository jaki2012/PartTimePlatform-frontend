<template>
    <div class="sidebar">
        <router-link class="btn_create" to="home">继续搜索兼职</router-link>
        <dl class="company_center_aside userinfo">
            <dt>账户基本信息</dt>
            <dd class="current">
                <router-link to="userinfo">个人资料</router-link>
            </dd>
            <dd style="display:none">
                <router-link to="/myresume">个人简历</router-link>
            </dd>
            <dd style="display:none">
                <a href="haveNoticeResumes.html">账号绑定</a>
            </dd>
            <dd >
                <a >修改密码</a>
            </dd>

        </dl>
        <dl class="company_center_aside jobinfo">
            <dt>兼职相关</dt>
            <dd>
                <router-link to="credits">信用积分</router-link>
            </dd>
            <dd>
                <router-link to="income">收入/提现</router-link>
            </dd>
            <dd>
                <router-link to="myjobs">我的兼职</router-link>
            </dd>
        </dl>
    </div>
    <!-- end .sidebar -->  
</template>

<script>
</script>

<style>
</style>