export let log = null
if (process.env.NODE_ENV !== 'production') {
  log = console.log.bind(window.console)
}
