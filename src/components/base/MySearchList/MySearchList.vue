<!-- 搜索历史列表 组件 -->

<template>
  <div class="my-search-list" v-show="searches.length">
    <transition-group name="list" tag="ul">
      <li :key="item" class="search-item" @click="selectItem(item)" v-for="item in searches">
        <span class="text">{{item}}</span>

        <span class="icon" @click.stop="deleteOne(item)">
          <i class="icon-delete"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: {
    searches: {
      type: Array,
      default: []
    }
  },
  watch: {},
  methods: {
    // 派发 选中和删除事件
    selectItem(item) {
      this.$emit('select', item)
    },
    deleteOne(item) {
      this.$emit('delete', item)
    }
  },
  // 过滤器设计目的就是用于简单的文本转换
  filters: {},
  // 若要实现更复杂的数据变换，你应该使用计算属性
  computed: {},
  created () {},
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
@import '~@/common/scss/const.scss';
@import '~@/common/scss/mymixin.scss';

.my-search-list {
  background-color: $color-highlight-background;
  border-radius: 6px;
  .search-item {
    display: flex;
    align-items: center;
    height: 40px;
    overflow: hidden;
    &.list-enter-active, &.list-leave-active {
      transition: all 0.1s;
    }
    &.list-enter, &.list-leave-to {
      height: 0;
    }
    .text {
      flex: 1;
      color: $color-text-l;
      font-size: $font-size-medium;
      padding-left: 10px;
    }
    .icon {
      padding-right: 10px;
      @include extend-click();
      .icon-delete {
        font-size: $font-size-small;
        color: $color-text-l;
      }
    }
  }
}
</style>
