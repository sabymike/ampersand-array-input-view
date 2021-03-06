var InputView = require('ampersand-input-view');
var assign = require('lodash.assign');

var defaultFieldTemplate = [
    '<label>',
        '<input>',
        '<div data-hook="message-container" class="message message-below message-error">',
            '<p data-hook="message-text"></p>',
        '</div>',
        '<a data-hook="remove-field">remove</a>',
    '</label>'
].join('');

module.exports = InputView.extend({
    template: defaultFieldTemplate,
    bindings: assign({
        'removable': {
            type: 'toggle',
            hook: 'remove-field'
        }
    }, InputView.prototype.bindings),
    props: {
        removable: 'boolean'
    },
    events: {
        'click [data-hook~=remove-field]': 'handleRemoveClick'
    },
    handleRemoveClick: function () {
        this.parent.removeField(this);
    }
});
