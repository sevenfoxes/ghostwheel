// ghostwheel plugin example
// a plugin is a folder that exports stuff other than components,


// optional: config
// you can alter your plugin structure by exporting a config variable

export const config = {
  root: './plugin', // change where the plugin is
  install: 'git clone git@github.com:sevenfoxes/ghostwheel-amber.git' // plugin strategy is completely up to you, the install command is what you need to ensure the plugin is installed. If not provided, npm install is assumed adequate
}
