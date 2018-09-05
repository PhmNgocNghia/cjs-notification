<template>
  <div class="notification-list">
    <div class="notification-list__header">
      Thông báo
    </div>
  
    <notification_item
      class="notification-list__item"
      :href="href"
      v-for="notificationData in notificationDatas"
      :notificationData="notificationData"
      :key="notificationData.id"/>

    <div class="notification-list__footer">
      <a :href="href" class="notification-list__link">
        Xem tất cả
      </a>
    </div>
  </div>
</template>

<script>
import notification_item from '../notification_item/notification_item'
export default {
  methods: {
    
  },

  components: {
    notification_item
  },

  props: {
    /**
     * Link redirect when click "Xem tất cả"
     */
    href: {
      type: String,
      default: "#"
    },

    /**
     * Pass array object results
     * Return of API
     */
    notificationDatas: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped lang="scss">
$padding: 10px;

.notification-list {
  background: white;
  width: 380px;

  &__item {
    padding: 10px 20px
  }

  &__header {
    border-bottom: 1px solid #eee;
    color: #ababab !important;
    padding: $padding;
  }

  &__footer {
    border-top: 1px solid #eee;
    padding: $padding;
    text-align: center;
  }

  &__link {
    background: transparent;
    color: darkcyan;
    border: 0px;

    &,
    &:hover,
    &:active {
      text-decoration: none
    }
  }
}
</style>
