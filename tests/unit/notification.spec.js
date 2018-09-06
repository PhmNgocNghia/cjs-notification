import notification from '../../src/components/mirror_components/notification/notification.vue'
import {
  expect
} from 'chai'
import {
  shallowMount
} from '@vue/test-utils'

describe('notification component', () => {
  const mockedData = {
    "status": "OK", 
    "message": "Thao t\u00e1c \u0111\u01b0\u1ee3c th\u1ef1c thi th\u00e0nh c\u00f4ng", 
    "version": 2, 
    "data": {
      "count": 10, 
      "unread_list": [
        11
      ], 
      "next": "next page before update", 
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
    }, 
    "exception": null
  }

  const addMoreData = {
    "status": "OK", 
    "message": "Thao t\u00e1c \u0111\u01b0\u1ee3c th\u1ef1c thi th\u00e0nh c\u00f4ng", 
    "version": 2, 
    "data": {
      "count": 10, 
      "unread_list": [
        11
      ], 
      "next": "next_page_after_update", 
      "previous": null, 
      "results": [
        { 
          "actor_name": "dummy", 
          "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg", 
          "version": "", 
          "release_date": "", 
          "type_notification": "", 
          "timestamp": "2018-09-05T19:54:51.660614", 
          "unread": true, 
          "description": "added notification", 
          "id": 11, 
          "actor_object_id": "5"
        }, 
      ]
    }, 
    "exception": null
  }

  const wrapper = shallowMount(notification, {
    propsData: {
      propNotificationData: mockedData,
      href: '#'
    }
  })

  wrapper.vm.concatNotificationData(addMoreData)

  describe('concat function', () => {
    it('set next', () => {
      expect(wrapper.vm.notificationData.data.next).to.equal('next_page_after_update')
    })

    it('concat results', () => {
      expect(wrapper.vm.notificationData.data.results).to.have.length(6)
    })
  })
})