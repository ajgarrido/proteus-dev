<template lang="pug">
  .layout__main
    .page2
      .page2__header
        section.section1
          .align
            .section1__header
              .banner
                .banner__mask
                .banner__image(:style="{ backgroundImage: 'url(' + detail.field_banner.url + ')' }")
                .banner__title
                  h2 {{ $prismic.asText(detail.field_title) }}
      .page2__main
        section.section1
          .align
            .section1__main
              .content
                prismic-rich-text(:field="detail.field_content" class="content__info")
                .content__list(v-if="detail.field_name.length > 0")
                  h3 {{ $prismic.asText(detail.field_name) }}
                  ul
                    li(v-for="(item, index) in detail.group_list_items" :key="index" class="content__item")
                      span(v-if="item.field_link_items.uid != undefined")
                        nuxt-link(tag="a" :to="`/${item.field_link_items.uid}`") {{ item.field_text_items }}
                      span(v-else) {{ item.field_text_items }}
</template>

<script>

import prismicDOM from 'prismic-dom';

export default {
  name: 'contenido-slug',
  layout: 'main',
  transition: 'page',
  head () {
    return {
      title: prismicDOM.RichText.asText(this.detail.field_title) + ' - Proteus Laboratorio',
      meta: [
          { hid: 'description', name: 'description', content: 'Proteus Laboratorio' },
          { name: 'keywords', content: 'Proteus, Laboratorio'},
      ]
    }
  },
  async asyncData({ $prismic, params, error, app }) {
    const {data} = await $prismic.api.getByUID('contenido', params.slug)
    if (data) {
      console.log("detail", data)
      return {
        detail: data
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>