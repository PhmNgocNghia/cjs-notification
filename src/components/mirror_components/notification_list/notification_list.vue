<template>
  <div class="notification-list">
    <div class="notification-list__header">
      Thông báo
    </div>
  
    <notification_item
      class="notification-list__item"
      :href="href"
      v-for="notificationItem in notificationItems"
      :notificationItem="notificationItem"
      :key="notificationItem.id"/>

    <div class="notification-list__footer">
      <a :href="href" class="notification-list__link">
        Xem tất cả
      </a>
    </div>
  </div>
</template>

<script>
import notification_item from "../notification_item/notification_item";
export default {
  methods: {},

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
    notificationItems: {
      type: Array
    }
  }
};
</script>

<style scoped lang="scss">
$padding: 10px;

.notification-list {
  background: white;
  width: 380px;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 6px 12px rgba(0,0,0,0.175);

  &__item {
    padding: 10px 20px;
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
      text-decoration: none;
    }
  }
}
</style>
