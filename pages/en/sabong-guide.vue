<template>
  <div>
    <h1>Sabong Sewing Guide</h1>
    <div v-html="content" />
  </div>
</template>

<script>
import pageText from '@/assets/content/en/sabong.md'

export default {
  async asyncData(context) {
    const a = await context.app.$mdParse(pageText)
    return {
      content: a.html
    }
  }
}
</script>
