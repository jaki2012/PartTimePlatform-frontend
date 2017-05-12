<template>
    <div class="sidebar">
        <router-link class="btn_create" to="createjob">发布新兼职</router-link>
        <dl class="company_center_aside userinfo">
            <dt>账户基本信息</dt>
            <dd class="current">
                <router-link to="userinfo">个人资料</router-link>
            </dd>
            <dd >
                <a >修改密码</a>
            </dd>
        </dl>
        <dl class="company_center_aside agencyinfo">
            <dt>我收到的申请</dt>
            <dd>
                <router-link to="unhandleresumes">待处理申请</router-link>
            </dd>
            <dd>
                <router-link to="acceptedresumes">已审核通过申请</router-link>
            </dd>
            <dd>
                <router-link to="refusedresumes">审核不通过申请</router-link>
            </dd>
            <dd>
                <router-link to="endedresumes">已结算申请</router-link>
            </dd>
        </dl>
        <dl class="company_center_aside positioninfo">
            <dt>我发布的兼职</dt>
            <dd>
                <router-link to="position">有效兼职</router-link>
            </dd>
            <dd>
                <a>已下线兼职</a>
            </dd>
        </dl>
    </div>
    <!-- end .sidebar -->
</template>

<script>
export default {
    name: 'agencysidebar'
}
</script>

<style scoped>
</style>