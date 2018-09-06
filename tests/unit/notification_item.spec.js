import notificationItem from '../../src/components/mirror_components/notification_item/notification_item.vue'
import moment from 'moment'
import {
  expect
} from 'chai'
import {
  shallowMount
} from '@vue/test-utils'


describe('notification item', () => {
  describe('display time', () => {
    /**
     * Determine mock time
     */
    let defaultMockedData = {
      notificationData: {
        "actor_name": "SYSTEM CJS",
        "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg",
        "version": "5.2.0",
        "release_date": "2018-07-31",
        "type_notification": "change_log",
        "timestamp": '',
        "unread": false,
        "description": "<p>LOrem Ispum</p>",
        "id": 2490979,
        "actor_object_id": "13152"
      }
    }

    it('display time in correct format if day > 1.5', () => {
      // Minus 2 days
      let mockedTime = new Date('2015-03-25 2:30:00')
      let mockedTimeStr = mockedTime.toISOString()

      // Integrate data with wrapper
      const customMockedData = Object.assign({}, defaultMockedData, {
        notificationData: {
          timestamp: mockedTimeStr
        }
      })

      const wrapper = shallowMount(notificationItem, {
        propsData: customMockedData
      })

      // Test case
      const date = wrapper.find ('.notification-item__diffTime')
      expect(date.exists())
      expect(date.text()).to.equal('25/3/2015 at 2:30:0')
    })

    it('display day ago if day in [1, 1.5] days', () => {
      // Minus 1 days
      let mockedTime = moment().subtract(1.4, 'days').format()

      // Integrate data with wrapper
      const customMockedData = Object.assign({}, defaultMockedData, {
        notificationData: {
          timestamp: mockedTime
        }
      })

      const wrapper = shallowMount(notificationItem, {
        propsData: customMockedData
      })

      // Test case
      const date = wrapper.find('.notification-item__diffTime')
      expect(date.exists())
      expect(date.text()).to.equal('1 day ago')
    })

    it('display hour ago if hou in [1, 24] hours', () => {
      // Minus 23 hours
      let mockedTime = moment().subtract(23, 'hours').format()

      // Integrate data with wrapper
      const customMockedData = Object.assign({}, defaultMockedData, {
        notificationData: {
          timestamp: mockedTime
        }
      })

      const wrapper = shallowMount(notificationItem, {
        propsData: customMockedData
      })

      // Test case
      const date = wrapper.find('.notification-item__diffTime')
      expect(date.exists())
      expect(date.text()).to.equal('23 hours ago')
    })

    it('display minutes ago if minutes in [1, 60] minutes', () => {
      // Minus 59 minutes
      let mockedTime = moment().subtract(59, 'minutes').format()


      // Integrate data with wrapper
      const customMockedData = Object.assign({}, defaultMockedData, {
        notificationData: {
          timestamp: mockedTime
        }
      })

      const wrapper = shallowMount(notificationItem, {
        propsData: customMockedData
      })

      // Test case
      const date = wrapper.find('.notification-item__diffTime')
      expect(date.exists())
      expect(date.text()).to.equal('59 minutes ago')
    })

    it('display recent if smaller than 1 minute', () => {
      //MInus 59 seconds
      let mockedTime = moment().subtract(59, 'seconds').format()

      // Integrate data with wrapper
      const customMockedData = Object.assign({}, defaultMockedData, {
        notificationData: {
          timestamp: mockedTime
        }
      })

      const wrapper = shallowMount(notificationItem, {
        propsData: customMockedData
      })

      // Test case
      const date = wrapper.find('.notification-item__diffTime')
      expect(date.exists())
      expect(date.text()).to.equal('recent')
    })
  })

  describe('render system log notification', () => {
    const wrapper = shallowMount(notificationItem, {
      propsData: {
        notificationData: {
          "actor_name": "SYSTEM CJS",
          "actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg",
          "version": "5.2.0",
          "release_date": "2018-07-31",
          "type_notification": "change_log",
          "timestamp": "2018-08-01T00:44:07.989845",
          "unread": false,
          "description": "<p>LOrem Ispum</p>",
          "id": 2490979,
          "actor_object_id": "13152"
        }
      }
    })

    it('render actor name as Cloudjet KPI updated new version', () => {
      const actorName = wrapper.find('.notification-item__display-name')
      expect(actorName.exists()).to.be.true
      expect(actorName.text().trim()).to.equal('Cloudjet KPI updated new version:')
    })

    it('render description correct', () => {
      const description = wrapper.find('.notification-item__content-action')
      expect(description.exists()).to.be.true
      expect(description.text().trim()).to.equal('LOrem Ispum')
    })

    it('render version correct', () => {
      const version = wrapper.find('.notification-item__version')
      expect(version.exists()).to.be.true
      expect(version.text().trim()).to.equal('Version 5.2.0')
    })

    it('render release date correct', () => {
      const releaseDate = wrapper.find('.notification-item__release-date')
      expect(releaseDate.exists()).to.be.true
      expect(releaseDate.text().trim()).to.equal('updated 2018-07-31')
    })
  })

  describe('render normal notification', () => {
    const wrapper = shallowMount(notificationItem, {
      propsData: {
        notificationData: {
          "actor_name": "phmngocnghia",
          "actor_avatar": "/static/img/people/person.png",
          "version": "",
          "release_date": "",
          "type_notification": "",
          "timestamp": "2018-09-05T19:54:51.660614",
          "unread": false,
          "description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>",
          "id": 11,
          "actor_object_id": "5"
        }
      }
    })

    it('render actor name correct', () => {
      const actorName = wrapper.find('.notification-item__display-name')
      expect(actorName.exists()).to.be.true
      expect(actorName.text().trim()).to.equal('phmngocnghia:')
    })

    it('render description correct', () => {
      const description = wrapper.find('.notification-item__content-action')
      expect(description.exists()).to.be.true
      expect(description.text()).to.equal("phmngocnghia completed KPI review. Chi ti\u00ea\u0301t")
    })
  })
})