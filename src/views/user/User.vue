<template>
<div class="mangage">
  <div class="manage-header">
    <common-form></common-form>
  </div>
  <div class="manage-content">
    <common-table></common-table>
  </div>
</div>
</template>

<script>
import CommonForm from 'components/common/form/CommonForm'
import CommonTable from 'components/common/table/CommonTable'

export default {
  name: 'User',
  components: {
    CommonForm,
    CommonTable
  }
}
</script>

<style lang="scss" scoped>
@import url("~assets/scss/common.scss");
</style>
