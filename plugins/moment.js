// DOC: https://juejin.cn/post/6904916344731336718

import Vue from 'vue'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
import 'moment/locale/zh-tw'

const moment = extendMoment(Moment)

Vue.prototype.$moment = moment
