import Home from '.'

export default {
  title: 'Pages/Home',
  component: Home
}

const Template = (args) => ({
  components: { Home },
  template: `<Home />`
})

export const Default = Template.bind({})
