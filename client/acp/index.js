define('admin/plugins/custom-fields', [], function () {
    return {
        init: function () {
            var React           = require('react'),
                CustomFieldsApp = require('./components/CustomFieldsApp.react');

            React.render(
                <CustomFieldsApp />,
                document.getElementById('manageFieldsApp')
            );
        }
    };
});
