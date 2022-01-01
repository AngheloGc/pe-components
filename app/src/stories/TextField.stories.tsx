import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextField } from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TextField',
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TextField>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />

export const HasLabel = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HasLabel.args = {
  label: 'Label',
  defaultValue: 'Texto',
}

export const IsDisabled = Template.bind({})
IsDisabled.args = {
  disabled: true,
  defaultValue: 'Texto',
}

export const Large = Template.bind({})
Large.args = {
  inputSize: 'large',
  defaultValue: 'Texto',
}

export const WithError = Template.bind({})
WithError.args = {
  label: 'Label',
  error: 'Valor inválido',
  defaultValue: 'Texto',
  inputSize: 'large',
}

export const WithPattern = Template.bind({})
WithPattern.args = {
  label: 'Label',
  pattern: 'onlyNumbers',
  defaultValue: 'Texto',
  inputSize: 'large',
}