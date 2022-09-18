import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CodeExampleComponent extends Component {
  showResult = true;
  @tracked _activeTab = undefined;

  get activeTab() {
    return this._activeTab || (this.showResult ? 'result' : 'js');
  }

  set activeTab(value) {
    this._activeTab = value;
  }

  get partialName() {
    return `snippets/${this.args.hbs.replace('.hbs', '')}`;
  }
}
