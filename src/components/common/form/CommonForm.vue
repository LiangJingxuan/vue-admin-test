<template>
<el-form :inline="inline" :model="form" ref="form" label-width="100px">
  <el-form-item v-for="item in formLabel" :key="item.model" :label="item.label">
    <el-input v-model="form[item.model]" :placeholder="`请输入${item.label}`" v-if="!item.type"></el-input>
    <el-select v-model="form[item.model]" :placeholder="`请输入${item.label}`" v-if="item.type==='select'">
      <el-option v-for="item in item.options" :key="item.model" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-switch v-model="form[item.model]" v-if="item.type==='switch'"></el-switch>
    <el-date-picker v-model="form[item.model]" type="date" v-if="item.type==='date'"></el-date-picker>
  </el-form-item>
  <el-form-item>
    <slot></slot>
  </el-form-item>
</el-form>
</template>

<script>
export default {
  name: 'CommonForm',
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    form: {
      type: Object,
      default () {
        return {}
      }
    },
    formLabel: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>

</style>
