# Testing zd-Menu components

Test app demonstrating how zd- ui components can be used (unsupported feature).

# Init components
Components can be initialized with data attributes on html elements, and there are a couple of handlebar helpers available, too.

### Html data attributes
Put the data-zd-type attribute on a select. 

```<select class="mySelectHtml" data-zd-type="combo_select_menu">```

#### Tested types:
Here are some types I have tested. 

* combo_select_menu - a combobox that can be typed/searched in
* combo_select_menu - regular combobox
* tag_menu - select that let's you add tags similar to the system 'tags' field

#### Example
```
<select class="mySelectHtml" data-zd-type="combo_select_menu">
    <option value="foo">FOO</option>
    <option selected value="bar">BAR</option>
</select>
```

#### Caveats
The tag menu formatting seems a bit off. 

### Handlebar helpers
Use the zd-menu helpers 

```{{zd-menu options type="theType"}}```

where options let's you pass in an array of select option objects like 

```var options = [{ value: 'foo', label: 'FOO'},{ value: 'bar', label: 'BAR'}];```

#### Tested helpers
Seems the tag menu is missing. 

* combo_select
* combo

#### Example
```
{{zd-menu options type="combo_select" }}
{{zd-menu options type="combo" }}
```

#### Caveats
The handlebar helpers seems to have a couple a flaws

* helpers don't support the class attribute
* the 'selected' option property is not supported

To workaround the [class issue](https://github.com/joelhellman/zd_menu/issues/1), you can wrap your helper in a div like this:

 ```
<div class="mySelectHdbs">
  {{zd-menu options type="combo_select" }}
</div>`
```

To workaround the [default options issue](https://github.com/joelhellman/zd_menu/issues/2), you can change the select after the component has been initialized, e.g:

```
this.$('.mySelectHdbs > .zd-combo-selectmenu').zdComboSelectMenu('setValue', 'bar');
```

# JS Components
The zd-menu components are initialized with JavaScript. Given:

```
<select class="mySelectHtml" data-zd-type="combo_select_menu">
  <option value="foo">FOO</option>
  <option selected value="bar">BAR</option>
</select>
```

It seems to work like this:
* all data-zd-type seems to auto-initialize when this.switchTo('template') is called
* but if you dynamically insert a component like `this.$('.container').html(this.renderTemplate('comboSelect.hdbs'))`, and don't use this.switchTo to render that template, you must initialize the components manually.

**You can target each select individually:**

```
this.$('.mySelectHtml').zdComboSelectMenu();
this.$('.mySelectHtml').zdSelectMenu();
this.$('.mySelectHtml').zdTagMenu();
```

or use a more general strategy to target all zd ui components:

```
this.$('[zd-data-type]').zdComboSelectMenu();
this.$('[zd-data-type]').zdSelectMenu();
this.$('[zd-data-type]').zdTagMenu();
```

### Note on targeting selects created with handlebar helpers
Since the handlebar helpers currently doesn't support the class attribute, this syntax won't work

```
this.$('.mySelectHdbs').zdComboSelectMenu();
```

instead, we can use this syntax to interact with a specific select:

```
this.$('.mySelectHdbs > .zd-combo-selectmenu').zdComboSelectMenu();
```

# Events
To listen to events, use the zd_ui_change namespace, like this

### Listen to events
```
events: {
  'zd_ui_change':  'onSelectChanged', // targets all zd select components
  'zd_ui_change .mySelectHtml':  'onHtmlSelectChanged', // targets your component by class
  'zd_ui_change .mySelectHdbs':  'onHdbsSelectChanged' // works if you have wrapped your handlebars helper in div
}, 
onHtmlSelectChanged: function(evt, change) {
  console.log('Html select change object ', change);
},
onHdbsSelectChanged: function(evt, change) {
  console.log('Hdbs select change object ', change);
}
```

# Get and set values
For setValue, provide the 'value' component of the option. Note that you may need to use another syntax if you are using handlebar helpers and div wrap (see above). 

```
this.$('.mySelectHdbs').zdComboSelectMenu('value'); // get value
this.$('.mySelectHdbs').zdComboSelectMenu('setValue', 'bar'); // set value where 
```


### Screenshot(s)
![Screenshot](zd_menu.png?)
