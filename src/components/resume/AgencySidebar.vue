<template>
    <div class="sidebar">
        <a class="btn_create" href="create.html">发布新职位</a>
        <dl class="company_center_aside agencyinfo">
            <dt>我收到的申请</dt>
            <dd>
                <router-link to="unhandleresumes">待处理申请</router-link>
            </dd>
            <dd>
                <router-link to="acceptedresumes">已审核通过申请</router-link>
            </dd>
            <dd class="current">
                <router-link to="refusedresumes">审核不通过申请</router-link>
            </dd>
            <dd>
                <a>已结算申请</a>
            </dd>
        </dl>
        <dl class="company_center_aside positioninfo">
            <dt>我发布的职位</dt>
            <dd>
                <router-link to="position">有效职位</router-link>
            </dd>
            <dd>
                <a href="positions.html">已下线职位</a>
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