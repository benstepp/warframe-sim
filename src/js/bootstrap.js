import Application from './application'
import WarframeSimulator from './warframe_simulator'

document.addEventListener('DOMContentLoaded', init)

function init() {
  const app = new Application
  const build = new WarframeSimulator.Build()
  console.log(app)
}
