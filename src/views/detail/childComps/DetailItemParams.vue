<template>
  <div v-if="Object.keys(itemParams).length !== 0">
    <!-- {{itemParams.rule.anchor}} -->
    <!-- {{itemParams.info.key}} -->
    <div v-for="(item, index) in itemParams.info.set" :key="index" class="infoSet" >
      <div class="setLeft">{{item.key}}</div>
      <div class="setRight">{{item.value}}</div>
    </div>
    <table >
      <!-- {{itemParams.info.anchor}} -->
      <!-- {{itemParams.rule.key}} -->
      <tr v-for="(tr, index) in itemParams.rule.tables[0]" :key="index" >
        <td v-for="(td, indey) in tr" :key="indey" >
          {{td}}
        </td>
      </tr>
      <p class="size-text">{{itemParams.rule.disclaimer}}</p>
    </table>
    <!-- <table v-for="(table, index) in itemParams.rule.tables" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey" >
        <td v-for="(td, indez) in tr" :key="indez" >
          {{td}}
        </td>
      </tr>
    </table> -->
  </div>
</template>

<script>
export default {
  name: 'DetailItemParams',
  props: {
    itemParams: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
  table {
    width: calc(100% - 20px);
    font-size: 14px;
    margin: 0 10px;
  }
  tr {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
  td {
    flex: 1;
    padding: 20px 0;
  }
  .size-text {
    font-size: 12px;
    line-height: 1.5;
    padding-top: 15px;
  }
  
  .infoSet {
    display: flex;
    margin: 0 10px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    font: 700 14px/2 "Microsoft YaHei";
  }
  .setLeft {
    width: 20%;
  }
  .setRight {
    flex: 1;
    color: var(--color-high-text);
  }
</style>