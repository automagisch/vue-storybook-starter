import Text from '.'

export default {
  title: 'Atoms/Text',
  component: Text
}

const Template = (args) => ({
  setup() {
    return { props: args }
  },
  components: { Text },
  template: `<Text v-bind="props" />`
})

export const Default = Template.bind({})
Default.args = { text: 'My awesome text label' }
