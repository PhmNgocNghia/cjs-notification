Unread data
```jsx
  const mockedData = {
    "count": 10, 
    "unread_list": [
      11
    ], 
    "next": "http://localhost:8000/api/v2/notifications/3/?page=2", 
    "previous": null, 
    "results": [
      { 
        "actor_name": "phmngocnghia", 
        "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
        "version": "", 
        "release_date": "", 
        "type_notification": "", 
        "timestamp": "2018-09-05T19:54:51.660614", 
        "unread": true, 
        "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>", 
        "id": 11, 
        "actor_object_id": "5"
      }, 
      {
        "actor_name": "phmngocnghia", 
        "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
        "version": "", 
        "release_date": "", 
        "type_notification": "", 
        "timestamp": "2018-09-05T18:19:38.802793", 
        "unread": false, 
        "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>", 
        "id": 10, 
        "actor_object_id": "5"
      }, 
      {
        "actor_name": "phmngocnghia", 
        "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
        "version": "", 
        "release_date": "", 
        "type_notification": "", 
        "timestamp": "2018-09-05T18:19:29.712501", 
        "unread": false, 
        "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>", 
        "id": 9, 
        "actor_object_id": "5"
      }, 
      {
        "actor_name": "phmngocnghia", 
        "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
        "version": "", 
        "release_date": "", 
        "type_notification": "", 
        "timestamp": "2018-09-05T18:19:18.042151", 
        "unread": false, 
        "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>", 
        "id": 8, 
        "actor_object_id": "5"
      }, 
      {
        "actor_name": "phmngocnghia", 
        "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
        "version": "", 
        "release_date": "", 
        "type_notification": "", 
        "timestamp": "2018-09-05T18:14:21.850865", 
        "unread": false, 
        "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>", 
        "id": 7, 
        "actor_object_id": "5"
      }
    ]
  }

  <notification_container
    :propNotificationData="mockedData"></notification>
```

Lazy load data
```vue
  <template>
    <notification_container
    :propNotificationData="mockedData"
    @scroll="onScroll"
    ref="lazy"></notification>
  </template>

  <script>

    export default {
    methods: {
     onScroll () {
        this.$refs.lazy.concatNotificationData(this.updatedData)
      }
    },


    data () {
      return {
        updatedData: {
          "count": 10, 
          "unread_list": [
            11
          ], 
          "next": "", 
          "previous": null, 
          "results": [
            { 
              "actor_name": "phmngocnghia", 
              "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
              "version": "", 
              "release_date": "", 
              "type_notification": "", 
              "timestamp": "2018-09-05T19:54:51.660614", 
              "unread": true, 
              "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>", 
              "id": 12, 
              "actor_object_id": "5"
            }, { 
              "actor_name": "phmngocnghia", 
              "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
              "version": "", 
              "release_date": "", 
              "type_notification": "", 
              "timestamp": "2018-09-05T19:54:51.660614", 
              "unread": true, 
              "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>", 
              "id": 13, 
              "actor_object_id": "5"
            }, { 
              "actor_name": "phmngocnghia", 
              "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
              "version": "", 
              "release_date": "", 
              "type_notification": "", 
              "timestamp": "2018-09-05T19:54:51.660614", 
              "unread": true, 
              "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>", 
              "id": 14, 
              "actor_object_id": "5"
            }, 
          ]
        },

        mockedData: {
          "count": 10, 
          "unread_list": [
            11
          ], 
          "next": "http://localhost:8000/api/v2/notifications/3/?page=2", 
          "previous": null, 
          "results": [
            { 
              "actor_name": "phmngocnghia", 
              "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
              "version": "", 
              "release_date": "", 
              "type_notification": "", 
              "timestamp": "2018-09-05T19:54:51.660614", 
              "unread": true, 
              "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>", 
              "id": 11, 
              "actor_object_id": "5"
            }, 
            {
              "actor_name": "phmngocnghia", 
              "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
              "version": "", 
              "release_date": "", 
              "type_notification": "", 
              "timestamp": "2018-09-05T18:19:38.802793", 
              "unread": false, 
              "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>", 
              "id": 10, 
              "actor_object_id": "5"
            }, 
            {
              "actor_name": "phmngocnghia", 
              "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
              "version": "", 
              "release_date": "", 
              "type_notification": "", 
              "timestamp": "2018-09-05T18:19:29.712501", 
              "unread": false, 
              "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>", 
              "id": 9, 
              "actor_object_id": "5"
            }, 
            {
              "actor_name": "phmngocnghia", 
              "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
              "version": "", 
              "release_date": "", 
              "type_notification": "", 
              "timestamp": "2018-09-05T18:19:18.042151", 
              "unread": false, 
              "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>", 
              "id": 8, 
              "actor_object_id": "5"
            }, 
            {
              "actor_name": "phmngocnghia", 
              "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
              "version": "", 
              "release_date": "", 
              "type_notification": "", 
              "timestamp": "2018-09-05T18:14:21.850865", 
              "unread": false, 
              "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>", 
              "id": 7, 
              "actor_object_id": "5"
            }
          ]
        }
      }
    }
  }
  </script>

  <style scoped>
    .wrapper {
      background: blue;
    }
    .text-name {
      color: red;
    }
  </style>
```