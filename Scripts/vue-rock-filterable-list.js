Vue.component('vue-autosuggest', VueAutosuggest.VueAutosuggest);

Vue.component('vue-rock-filterable-list', {
    props: ['items', 'label', 'itemsPerPage', 'searchOptions', 'initialInput', 'placeHolder'],
    data() {
      return {
        filteredSearchOptions: [],
        filteredItems: this.items,
        initialText: this.initialInput,
        page: 1,
        placeHolderText: this.placeHolder,
        perPage: this.itemsPerPage,
        pages: []
      };
    },
    methods: {
      onInputChange(text) {
        if (text === '') {
          this.filteredSearchOptions = [];
        }
        else {
          this.filteredSearchOptions = [{
            data: this.searchOptions[0].data.filter(item => {
              return item.toLowerCase().indexOf(text.toLowerCase()) > -1;
            })
          }];
        }
        this.filterItems(text);
      },
      filterCallback(filtered) {
        this.filteredItems = filtered;
        this.setPages();
      },
      filterItems(searchText) {
        this.$emit('filter', this.items, searchText, this.filterCallback);
      },
      shouldRenderSuggestions (size, loading) {
        return size >= 1 && !loading
      },
      onSelected(option) {
        if (option != '') {
          this.filterItems(option.item);
        }
      },
      setPages () {
        this.pages = [];
        this.page = 1;
        let numberOfPages = Math.ceil(this.filteredItems.length / this.perPage);
        for (let index = 1; index <= numberOfPages; index++) {
          this.pages.push(index);
        }
      },
      paginate (items) {
        let page = this.page;
        let perPage = this.perPage;
        let from = 0;
        let to = (page * perPage);
        return  items.slice(from, to);
      }
    },
    computed: {
      displayItems () {
        return this.paginate(this.filteredItems);
      }
    },
    watch: {
      items () {
        console.log(`items changed with initial text ${this.initialText}`);
        this.filterItems(this.initialText ?? '');
      }
    },
    template: `
      <div class="container">
        <div class="media-filter row">
          <div class="col-md-12">
            <h2>{{ label }}</h2>
          </div>
          <div class="col-md-6 col-lg-8">
            <div class="form form-inline">
              <div class="v-dropdown-input input-group media-filter-input">
                <span class="input-group-addon"><i class="fa fa-search"></i></span>
                <vue-autosuggest
                    :suggestions="filteredSearchOptions"
                    :input-props="{id:'autosuggest__input', placeholder:placeHolderText}"
                    :should-render-suggestions="shouldRenderSuggestions"
                    v-model="initialText"
                    @selected="onSelected"
                    @input="onInputChange"
                  >
                  <template slot-scope="{suggestion}">
                    <span class="my-suggestion-item">{{ suggestion.item }}</span>
                  </template>
                </vue-autosuggest>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div role="group" aria-label="..." class="btn-group pull-right card-list-filter">
              <button type="button" class="btn btn-primary" style="outline: none;"><i class="fas fa-bars"></i></button>
              <button type="button" class="btn btn-primary active" style="outline: none;"><i class="fas fa-th"></i></button>
            </div>
          </div>
        </div>
        <div class="media-list-items">
          <div class="row flex-row flex-wrap">
            <div v-for="item in displayItems" class="col-sm-6 col-md-4">
              <slot v-bind:item="item">
              </slot>
            </div>
          </div>
          <div class="paginate-buttons text-center">
            <a class="btn btn-default" id="more" role="button" v-if="page < pages.length" @click="page++">More</a>
          </div>
        </div>
      </div>
    `
  });