import Vue from 'vue'
import OhVueIcon from 'oh-vue-icons/components/Icon.vue'
import { RiSunLine, RiMoonLine, RiArrowLeftSLine, RiHashtag } from 'oh-vue-icons/icons'
OhVueIcon.add([RiSunLine, RiMoonLine, RiArrowLeftSLine, RiHashtag])
Vue.component('v-icon', OhVueIcon)
