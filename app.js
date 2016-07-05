
(function() {

  return {
    events: {
      'app.activated' : 'onAppActivated',
      'click [data-action-add-html-template]' : 'onAddHtmlTemplate',
      'click [data-action-add-hdbs-template]' : 'onAddHdbsTemplate',
      'click [data-action-hdbs-select-set]': 'onBtnSetHdbsSelect',
      'click [data-action-hdbs-select-get]': 'onBtnGetHdbsSelect',
      'click [data-action-html-select-set]': 'onBtnSetHtmlSelect',
      'click [data-action-html-select-get]': 'onBtnGetHtmlSelect',
      'zd_ui_change .mySelectHtml':  'onHtmlSelectChanged',
      'zd_ui_change .mySelectHdbs':  'onHdbsSelectChanged'
    },
    onAppActivated: function() {
      this.options = [
        { value: 'foo', label: 'FOO'},
        { value: 'bar', label: 'BAR'}
      ];
      this.optionSelectedValue = this.options[1].value;
      this.switchTo('ticket', {options: this.options}); // will initialize zd-type automatically
    },
    onAddHtmlTemplate: function() {
      this.$('.add-html-template-wrapper').html(this.renderTemplate('_combo_select_html'));
      this.$('[data-zd-type]').zdComboSelectMenu(); // need to initialize manually
    },
    onAddHdbsTemplate: function() {
      this.$('.add-hdbs-template-wrapper').html(this.renderTemplate('_combo_select_hdbs', {
          options: this.options
      }));
      this.$('[data-zd-type]').zdComboSelectMenu();
      // need to set the selected value manually since helper doesn't support selected option
      this.$('.myAddedSelectHdbs > .zd-combo-selectmenu').zdComboSelectMenu('setValue', this.optionSelectedValue);
    },
    onBtnSetHdbsSelect: function() {
      this.$('.mySelectHdbs > .zd-combo-selectmenu').zdComboSelectMenu('setValue', 'bar');
    },
    onBtnGetHdbsSelect: function() {
      console.log('Handlebar select value is ', this.$('.mySelectHdbs > .zd-combo-selectmenu').zdComboSelectMenu('value'));
    },
    onBtnSetHtmlSelect: function() {
      this.$('.mySelectHtml').zdComboSelectMenu('setValue', 'foo');
    },
    onBtnGetHtmlSelect: function() {
      console.log('Html select value ', this.$('.mySelectHtml').zdComboSelectMenu('value'));
    },
    onHtmlSelectChanged: function(evt, change) {
      console.log('Html select change object ', change);
    },
    onHdbsSelectChanged: function(evt, change) {
      console.log('Hdbs select change object ', change);
    }
  };

}());
