<template>
    <ul>
      <li>
        {{item.name}}

        <Item v-if="item.child && item.child.length > 0" v-for="(v,index) in item.child" :key="index" :item="v"></Item>
      </li>
    </ul>
</template>

<script>
export default {
  name: "Item",
  props : ["item"]
}
</script>

<style scoped>

</style>
