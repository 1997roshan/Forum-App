<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
export default {
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  methods: {
    redableDates() {
      return dayjs.unix(this.timestamp).fromNow()
    },
    hoveringDates() {
      return dayjs.unix(this.timestamp).format('llll')
    }
  }
}
</script>
<template>
  <span :title="hoveringDates(timestamp)">
    {{ redableDates(timestamp) }}
  </span>
</template>
