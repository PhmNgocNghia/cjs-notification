import {
	expect
} from 'chai'

import {
	mount
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

	const mocked1notifications = [
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
		}
	]
	/**
	 * Call function scroll with MOCKED scroller reach bottom
	 */
	it('dispatch scroll event when scroll to bottom and have 5 notification and scroller reach bottom', () => {
		/**
		 * Create list of 5 notification
		 * Let it scroll and and check
		 */
		const wrapperWith5notifications = mount(notification_list, {
			propsData: {
				notificationItems: mocked5notifications
			}
		})

		wrapperWith5notifications.vm.scroll(()=>true) // Mock the behavior: it's scroll bottom
		expect(wrapperWith5notifications.emitted('scroll')).not.to.be.undefined
	})

	it('dispatch scroll event when scroll to bottom and have 1 notification and scroller reach bottom', () => {
		/**
		 * Create list of 5 notification
		 * Let it scroll and and check
		 */
		const wrapperWith1notification = mount(notification_list, {
			propsData: {
				notificationItems: mocked1notifications
			}
		})

		wrapperWith1notification.vm.scroll(()=>true) // Mock the behavior: it's scroll bottom
		expect(wrapperWith1notification.emitted('scroll')).to.be.undefined
	})
})