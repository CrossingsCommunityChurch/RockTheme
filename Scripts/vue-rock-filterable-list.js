Vue.component('vue-rock-filterable-list', {
    props: ['items', 'label', 'itemsPerPage', 'searchOptions', 'initialInput'],
    data: function() {
      return {
        filteredSearchOptions: [],
        filterInput: this.initialInput,
        page: 1,
        perPage: this.itemsPerPage,
        pages: []
      };
    },
    methods: {
      shouldRenderSuggestions (size, loading) {
        return size >= 1 && !loading
      },
      onSelected(option) {
        if (option != '') {
          this.filterInput = option.item;
        }
      },
      onInputChange(text) {
        console.log('onInputChange', this.searchOptions);
        var filteredData = this.searchOptions[0].data.filter(item => {
          return item.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });;
        this.filteredSearchOptions = [{
          data: filteredData
        }];
        this.filterInput = text;
        if (text === '') {
          this.filteredSearchOptions = [];
        }
      },
      setPages () {
        this.pages = [];
        this.page = 1;
        let numberOfPages = Math.ceil(this.filteredMessages.length / this.perPage);
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
      filteredMessages() {
        return this.items.filter(message => {
          if (!this.filterInput) return true;
          let shouldInclude = false;
          shouldInclude |= (!!message.Speaker && message.Speaker.toLowerCase().includes(this.filterInput.toLowerCase().trim()));
          shouldInclude |= (this.filterInput.toLowerCase().trim().length >= 2 && !!message.Topics && message.Topics.map(t => t.toLowerCase().trim()).filter(t => t.indexOf(this.filterInput.toLowerCase().trim()) === 0).length > 0);
          shouldInclude |= (!!message.Title && message.Title.toLowerCase().trim().includes(this.filterInput.toLowerCase().trim()));
          shouldInclude |= (!!message.Series && !!message.Series.Title && message.Series.Title.toLowerCase().trim().includes(this.filterInput.toLowerCase().trim()));
          return !!shouldInclude;
        });
      },
      displayItems () {
        return this.paginate(this.filteredMessages);
      }
    },
    watch: {
      filteredMessages () {
        this.setPages();
      },
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
                    :input-props="{id:'autosuggest__input', placeholder:'Search by Speaker, Topic, Series or Message'}"
                    :should-render-suggestions="shouldRenderSuggestions"
                    v-model="filterInput"
                    @input="onInputChange"
                    @selected="onSelected"
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