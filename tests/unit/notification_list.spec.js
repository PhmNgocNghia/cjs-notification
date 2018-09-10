import {
	expect
} from 'chai'

import {
	mount, shallowMount
} from '@vue/test-utils'

import notification_list from '../../src/components/mirror_components/notification_list/notification_list.vue'

describe('notification list', () => {
	const mocked5notifications = [
		{
			"actor_name": "SYSTEM CJS",
			"actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg",
			"version": "5.2.0",
			"release_date": "2018-07-31",
			"type_notification": "change_log",
			"timestamp": "2018-08-01T00:44:07.989845",
			"unread": false,
			"description": "OK",
			"id": 2490979,
			"actor_object_id": "13152"
		}, {
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
			"id": 11,
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
			"id": 10,
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
			"id": 9,
			"actor_object_id": "5"
		},
	]

	/**
		 * Create list of 5 notification
		 * Let it scroll and and check
		 */
	const wrapperWith5notificationsAndProvideNextProps = mount(notification_list, {
		propsData: {
			notificationItems: mocked5notifications,
			next: 'abc'
		}
	})

	const wrapperWith5notificationsAndNotProvideNextProps = mount(notification_list, {
		propsData: {
			notificationItems: mocked5notifications
		}
	})

	/**
	 * Call function scroll with MOCKED scroller reach bottom
	 */
	it('dispatch lazyLoad event when scroll and next props is not provide', () => {
		wrapperWith5notificationsAndProvideNextProps.vm.scroll(() => true) // Mock the behavior: it's scroll bottom
		expect(wrapperWith5notificationsAndProvideNextProps.emitted('lazyLoad')).not.to.be.undefined
	})

	it('not dispatch lazyLoad event when scroll and next props is not provide', () => {
		/**
		 * Create list of 5 notification
		 * Let it scroll and and check
		 */

		wrapperWith5notificationsAndNotProvideNextProps.vm.scroll(() => true) // Mock the behavior: it's scroll bottom
		expect(wrapperWith5notificationsAndNotProvideNextProps.emitted('scroll')).to.be.undefined
	})

	it('add notification-list__scrollable-wrapper to notification item container div when provide next props', () => {
		const notificationContainerDivWithDesireAddedClass = wrapperWith5notificationsAndProvideNextProps.find('.notification-list__scrollable-wrapper')
		expect(notificationContainerDivWithDesireAddedClass.exists()).to.be.true
	})

	it('not add notification-list__scrollable-wrapper to notification item container div when not provide next props', () => {
		const notificationContainerDivWithDesireAddedClass = wrapperWith5notificationsAndNotProvideNextProps.find('.notification-list__scrollable-wrapper')
		expect(notificationContainerDivWithDesireAddedClass.exists()).to.be.false
	})

	describe('isLazyLoadMode', () => {
		it('return false if notfication item length smaller than 5', () => {
			// Mocked
			const wrapper = shallowMount(notification_list, {
				propsData: {
					notificationItems: [{
						"actor_name": "phmngocnghia",
						"actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg",
						"version": "",
						"release_date": "",
						"type_notification": "",
						"timestamp": "2018-09-05T19:54:51.660614",
						"unread": true,
						"description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>",
						"id": 9,
						"actor_object_id": "5"
					}],
					next: null
				}
			})

			// Assert
			expect(wrapper.vm.isLazyLoadMode).to.be.false
		})

		it('return false if notification item length equal five and have no next link', () => {
			const wrapper = shallowMount(notification_list, {
				propsData: {
					notificationItems: mocked5notifications,
					next: null
				}
			})

			// Assert to be fasly such as: null, undefined
			expect(wrapper.vm.isLazyLoadMode).to.be.not.ok
		})

		it('return true notfication item length equal five and have next link', () => {
			const wrapper = shallowMount(notification_list, {
				propsData: {
					notificationItems: mocked5notifications,
					next: 'ahihi'
				}
			})

			// Assert: ok ~ truthy
			expect(wrapper.vm.isLazyLoadMode).to.be.ok
		})

		it('return true notification item length bigger than 5 and have no next link', () => {
			const wrapper = shallowMount(notification_list, {
				propsData: {
					notificationItems: [...mocked5notifications, {
						"actor_name": "phmngocnghia",
						"actor_avatar": "https://d5b9gphv82ll6.cloudfront.net/img/logo/update_icon.svg",
						"version": "",
						"release_date": "",
						"type_notification": "",
						"timestamp": "2018-09-05T19:54:51.660614",
						"unread": true,
						"description": "phmngocnghia completed KPI review. <a href='/performance/kpi-editor/emp/5/' target='blank'>Chi ti\u00ea\u0301t</a>",
						"id": 9,
						"actor_object_id": "5"
					}],
					next: null
				}
			})

			// Assert
			expect(wrapper.vm.isLazyLoadMode).to.be.true
		})
	})
})