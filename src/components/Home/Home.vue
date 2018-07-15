<template>
<div>
<Navebar></Navebar>
<!-- 主体 -->
<div class="main">
    <!-- 侧边栏 -->
    <Sidebar></Sidebar>
    <!-- 其它页面自已调整吧 -->
    <router-view></router-view>
</div>
</div>
</template>
<script>
import Sidebar from '../Sidebar/Sidebar.vue'
import Navebar from '../Navebar/Navebar.vue'
export default {
  components: {
    Sidebar,
    Navebar
  }
}
</script>
<style></style>
