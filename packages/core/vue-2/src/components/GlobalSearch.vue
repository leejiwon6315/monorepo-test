<template>
  <div class="app-header-search">
    <input
      ref="searchForm"
      v-model="searchKeyword"
      :placeholder="placeholder"
      type="text"
      @input="onSearch($event)"
      @keydown.enter="toSearch"
      @click="handleInsideClick"
      @focus="focus"
      @blur="blur"
    />
    <base-svg
      v-if="searchIconPath"
      class="search icon-arrow-search"
      :name="searchIconPath"
      @click="[toSearch()]"
    />
  </div>
</template>

<script lang="ts">
import BaseSvg from "./BaseSvg.vue";
export default {
  name: "GlobalSearch",
  data() {
    return {
      searchKeyword: "",
      tmpSearchKeyword: "",
      searchResult: {},
      postList: [],
      draftList: [],
      employeeList: [],
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "통합검색",
    },
    redirectURL: {
      type: String,
      default: "",
    },
    onSearch: {
      type: Function,
      default: () => {},
    },
    searchIconPath: {
      type: String,
    },
  },
  components: {
    BaseSvg,
  },
  computed: {
    searchForm() {
      return this.$refs.searchForm;
    },
  },
  watch: {
    searchKeyword(nv) {
      this.searchKeyword = nv.replace(/\\/g, "");
    },
  },
  mounted: function () {
    let _ele = this.$refs.searchForm;
    _ele.blur();
  },
  methods: {
    focus() {
      this.searchForm.classList.add("focused");
    },
    blur() {
      this.searchForm.classList.remove("focused");
    },
    handleInsideClick() {
      this.searchKeyword = this.tmpSearchKeyword || "";
    },
    toSearch() {
      if (this.searchKeyword.length <= 1) return;
      window.location.href = this.redirectURL;
      this.searchKeyword = "";
    },
  },
};
</script>

<style lang="scss">
@mixin placeholder {
  ::-webkit-input-placeholder {
    @content;
  }
  :-moz-placeholder {
    @content;
  }
  ::-moz-placeholder {
    @content;
  }
  :-ms-input-placeholder {
    @content;
  }
}

.app-header-search {
  width: 300px;
  font-size: $--font-size-base;
  position: relative;
  border: 0;

  input[type="text"] {
    border: 0;
    width: 100%;
    max-width: 300px;
    height: 35px;
    padding: 11px 50px 11px 18px;
    border-radius: 15px;
    background: $core-warm-gray-100;

    &:focus {
      outline: none;
    }

    transition:
      background 100ms ease-in,
      width 100ms ease-out;

    &.focused {
      background: rgba(255, 255, 255, 1);
      border: 1px solid transparent;
      -webkit-box-shadow:
        0 1px 1px 0 rgba(65, 69, 73, 0.3),
        0 1px 3px 1px rgba(65, 69, 73, 0.15);
      box-shadow:
        0 1px 1px 0 rgba(65, 69, 73, 0.3),
        0 1px 3px 1px rgba(65, 69, 73, 0.15);
    }
  }

  .search {
    position: absolute;
    margin: auto;
    top: 7px;
    right: 15px;
    border-width: 0;
    cursor: pointer;
  }

  .dropdown-menu {
    line-height: 20px;
    padding: 20px;
    border-bottom: 1px solid $--border-color-light;
    color: $--color-text-regular;
  }
}
</style>
