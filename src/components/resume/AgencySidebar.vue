<template>
    <div class="sidebar">
        <a class="btn_create" href="create.html">发布新职位</a>
        <dl class="company_center_aside agencyinfo">
            <dt>我收到的简历</dt>
            <dd>
                <router-link to="unhandleresumes">待处理简历</router-link>
            </dd>
            <dd>
                <a href="canInterviewResumes.html">待定简历</a>
            </dd>
            <dd>
                <router-link to="acceptedresumes">已审核通过简历</router-link>
            </dd>
            <dd class="current">
                <router-link to="refusedresumes">不合适简历</router-link>
            </dd>
            <dd class="btm">
                <a href="autoFilterResumes.html">自动过滤简历</a>
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