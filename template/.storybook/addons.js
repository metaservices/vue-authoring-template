import '@storybook/addon-options/register'
{{#isEnabled addons 'actions'}}
import '@storybook/addon-actions/register'
{{/isEnabled}}
{{#isEnabled addons 'notes'}}
import '@storybook/addon-notes/register'
{{/isEnabled}}
{{#isEnabled addons 'knobs'}}
import '@storybook/addon-knobs/register'
{{/isEnabled}}
{{#isEnabled addons 'readme'}}
import 'storybook-readme/register'
{{/isEnabled}}
