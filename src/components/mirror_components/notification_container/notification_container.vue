<template>
  <div class="notification">
    <notification_bell
      @click="toggleNotificationList"
      :isToggle="isShowNotificationList"
      :notificationCount="notificationCount"
    />
    
    <notification_list
      @scroll="notificationListOnScroll"
      v-if="isShowNotificationList"
      class="notification__list"
      :notificationItems="notificationItems"
      :href="href"
      :next="next"
    />   
  </div>
</template>

<script>
import notificationBell from "../notification_bell/notification_bell";
import notificationList from "../notification_list/notification_list";

export default {
  components: {
    notification_bell: notificationBell,
    notification_list: notificationList
  },

  methods: {
    /**
     * Input new lazy load data here
     * Automatically assign next + concat notification
     */
    concatNotificationData (notificationData) {
      this.next = notificationData.next
      this.notificationItems = this.notificationItems.concat(notificationData.results)
    },

    notificationListOnScroll(next) {
      /**
       * this will be emmited if next provided
       * param: next... resolve outside due to system heavily couple clouldjetAjax
       *
       * @event scroll
       * @type {string}
       */
      this.$emit("scroll", next);
    },

    toggleNotificationList() {
      this.isShowNotificationList = !this.isShowNotificationList;

      /**
       * Emmit markAsRead
       * Params: unread_list
       */
      if (this.notificationCount > 0) {
        this.$emit('markAsRead', this.propNotificationData.unread_list)      
        this.notificationCount = 0;
      }
    }
  },

  created() {
    this.notificationCount = this.propNotificationData.unread_list.length

    /**
     * Set default value
     * This will be change when lazy load
     * For more description
     */
    this.notificationItems = this.propNotificationData.results;
    this.next = this.propNotificationData.next;
  },
  data() {
    return {
      isShowNotificationList: false,
      notificationCount: 0,

      /**
       * Incase concatNotifcation it will add more notifications to result
       */
      notificationItems: this.propNotificationData.results,
      
      /**
       * Incase concatNotificationm it will replace next with some thing next
       */
      next: ''
    };
  },

  props: {
    /**
     * Pass anything the api return in results
     * into this. will format data automatically
     */
    propNotificationData: {
      type: Object
    },

    /**
     * Link to show all notification
     */
    href: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
.notification {
  position: relative;
  display: flex;
  justify-content: flex-end;

  &__list {
    position: absolute;
    top: 50px;
  }
}
</style>
