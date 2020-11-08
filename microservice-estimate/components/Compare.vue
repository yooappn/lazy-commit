<template>
<div class="uk-margin uk-card uk-card-default uk-card-body">
    <h3>
        <vk-icon icon="chevron-down" style="cursor:pointer;" @click="toggleParams(false)" v-if="form.collapse" ></vk-icon>
        <vk-icon icon="chevron-up" style="cursor:pointer;" @click="toggleParams(true)" v-if="!form.collapse" ></vk-icon>
        Compare Points
    </h3>

    <div v-if="form.collapse">
        <h3 class="uk-heading-line"><span>Function point</span></h3>

        <vk-grid divided class="uk-child-width-expand@s">
            <div>Item1<input class="uk-input" type="text" @input="recalc();" /></div>
            <div>Item2<input class="uk-input" type="text"/></div>
        </vk-grid>

        <vk-grid divided class="uk-child-width-expand@s">
            <div>Item1</div>
            <div>Item2</div>
        </vk-grid>

        <h3 class="uk-heading-line"><span>System Attributes</span></h3>

        <vk-table :data="gsc">
          <vk-table-column title="Item" cell="name"></vk-table-column>
          <vk-table-column title="Monolith" cell="mono"></vk-table-column>
          <vk-table-column title="MicroServices" cell="micro"></vk-table-column>
        </vk-table>

    </div>
</div>
</template>

<script>

export default {

  data() {
    return {
      form: {
          collapse: false
      },
      attrs: [
          { name: 'John A. Smith', city: 'San Francisco', state: 'CA' },
          { name: 'Joan B. Jones', city: 'New York', state: 'NY' },
          { name: 'Bob C. Uncle', city: 'Los Angeles', state: 'CA' }
      ]
    };
  },

  computed: {
    config() {
      return this.$store.getters['data/config'];
    },
    gsc() {
      const v = this.$store.getters['data/gscParams'];
      console.log(v);
      return v;
    }
  },

  methods : {
    toggleParams(flg) {
      this.form.collapse = flg;
    },
    recalc() {
      const data = {from: this.config.module.from, to: this.config.module.to};

      console.log('reCalc....');
      console.log(data);
    }
  }
}
</script>