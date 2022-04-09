<template>
  <div class="basic-layout" >
    <AppNavSide/>
    <AppMain/>
  </div>
</template>

<script>
import AppNavSide from "./NavSide/NavSide"
import AppMain from "./Main/Main"
export default {
  name: "Layout",
  components : {
    AppNavSide,
    AppMain
  }
}
</script>

<style lang="scss" scoped>
.basic-layout{
  height : 100%;
  position: relative;

  .nav-side{
    width: 200px;
    position: absolute;
    height: 100%;
    background-color: #001529;
    overflow-y: auto;
  }

  .main{
    margin-left: 200px;
    height: 100%;
    overflow-y: auto;
    background-color: #eef0f3;;
  }
}

</style>
