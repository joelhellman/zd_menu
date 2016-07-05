
(function() {

  return {
    events: {
      'app.activated' : 'onAppActivated',
      'click [data-action-hdbs-select-set]': 'onBtnSetHdbsSelect',
      'click [data-action-hdbs-select-get]': 'onBtnGetHdbsSelect',
      'click [data-action-html-select-set]': 'onBtnSetHtmlSelect',
      'click [data-action-html-select-get]': 'onBtnGetHtmlSelect'
    },

    onAppActivated: function() {
      var options = [
        { value: 'foo', label: 'FOO'},
        { value: 'bar', label: 'BAR'}
      ];
      this.switchTo('ticket', {options: options});
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
    }

  };

}());
