import Ember from 'ember';
import layout from '../templates/components/code-example';
const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'article',
  classNames: ['code-example'],
  showResult: true,

  activeTab: computed('showResult', function() {
    if (this.get('showResult')) {
      return 'result';
    }
    return 'js';
  }),

  partialName: computed('hbs', function() {
    return `snippets/${this.get('hbs').replace('.hbs', '')}`;
  })
});
