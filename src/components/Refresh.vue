<template>
</template>

<script>
export default {
    data() {
        this.$router.replace({path:"unhandleresumes", query:{jobid: this.$route.query.jobid}})
        return {

        }
    }
}
</script>

<style>
</style>