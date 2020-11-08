<template>
    <div class="uk-margin uk-card uk-card-default uk-card-body">
      <h3>
        <vk-icon icon="chevron-down" style="cursor:pointer;" @click="toggleParams(false)" v-if="form.collapse" ></vk-icon>
        <vk-icon icon="chevron-up" style="cursor:pointer;" @click="toggleParams(true)" v-if="!form.collapse" ></vk-icon>
        Parameters
      </h3>

      <div>
        <h3 class="uk-heading-line"><span>Module Number Range</span></h3>

        <vk-grid class="uk-child-width-expand@s">
            <div class="uk-form-controls">
            <label class="uk-form-label" for="form-stacked-text">from</label>
            <input class="uk-input" id="form-stacked-text" type="number" name="from" :value="config.from" @input="update" >
            </div>
            <div class="uk-form-controls">
            <label class="uk-form-label" for="form-stacked-text">to</label>
            <input class="uk-input" id="form-stacked-text" type="number" name="to" :value="config.to" @input="update">
            </div>
        </vk-grid>
      </div>

      <div v-if="form.collapse">
        <hr />
        <h3 class="uk-heading-line"><span>One Module Function Points</span></h3>

        <vk-table :data="fp">
          <vk-table-column title="Item" cell="name"></vk-table-column>
          <vk-table-column title="Monolith" cell="mono"></vk-table-column>
          <vk-table-column title="MicroServices" cell="micro"></vk-table-column>
        </vk-table>

        <h3 class="uk-heading-line"><span>System Attributes</span></h3>

        <vk-table :data="gsc">
          <vk-table-column title="Item" cell="name"></vk-table-column>
          <vk-table-column title="Monolith" cell="mono">
            <div slot-scope="{cell}">
              <input class="uk-range" type="range" :value="cell" min="0" max="5" step="1">
            </div>
          </vk-table-column>
          <vk-table-column title="MicroServices" cell="micro">
            <div slot-scope="{cell}">
              <input class="uk-range" type="range" :value="cell" min="0" max="5" step="1">
            </div>
          </vk-table-column>
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
      }
    };
  },

  computed: {
    config() {
      return this.$store.getters['data/module'];
      //return this.$store.state.data.config;
    },
    fp() {
      return this.$store.getters['data/fp'];
    },
    gsc() {
      return this.$store.getters['data/gscParams'];
    } 
  },

  methods : {
    toggleParams(flg) {
      this.form.collapse = flg;
      console.log(this.form.collapse);
    },
    update(e) {
      const data = {};
      data[e.target.name] = parseInt(e.data);
      //this.$store.commit('data/module', data);
      this.$store.dispatch('data/module', data);
    },

    recalc() {
      const data = {from: this.config.from, to: this.config.to};

      console.log('reCalc....');
      console.log(data);
    }

  }

}
</script>