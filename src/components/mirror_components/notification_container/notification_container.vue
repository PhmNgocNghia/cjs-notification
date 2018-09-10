<template>
  <div class="notification">
    <notification_bell
      @click="toggleNotificationList"
      :isToggle="isShowNotificationList"
      :notificationCount="notificationCount"
    />
    
    <notification_list
      @lazyLoad="notificationListOnLazyLoad"
      v-if="isShowNotificationList"
      class="notification__list"
      :notificationItems="notificationData.results"
      :href="href"
      :next="notificationData.next"
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
    // concatNotificationData (notificationData) {
    //   this.next = notificationData.next
    //   this.notificationItems = this.notificationItems.concat(notificationData.results)
    // },

    notificationListOnLazyLoad(next) {
      /**
       * this will be emmited if next provided
       * param: next... resolve outside due to system heavily couple clouldjetAjax
       *
       * @event lazyLoad
       * @type {string}
       */
      this.$emit("lazyLoad", next);
    },

    toggleNotificationList() {
      this.isShowNotificationList = !this.isShowNotificationList;

      /**
       * Emmit markAsRead
       * Params: unread_list
       */
      if (this.notificationCount > 0) {
        this.$emit('markAsRead', this.notificationData.unread_list)      
        this.notificationCount = 0;
      }
    }
  },

  created() {
    /**
     * Vue doesn't allow to edit props
     */
    this.notificationCount = this.notificationData.unread_list.length
  },
  data() {
    return {
      isShowNotificationList: false,
      notificationCount: 0
    };
  },

  props: {
    /**
     * Pass anything the api return in results
     * into this. will format data automatically
     */
    notificationData: {
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
