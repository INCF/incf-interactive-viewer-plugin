import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

/**
 * Normally, you would need to wrap any reference to DOM element in a setTimeout function call,
 * as template is rendered after script is parsed and executed.
 * wrapping the function call in a Promise achieve the same effect
 */
window.interactiveViewer.pluginControl.loadExternalLibraries(['react@16', 'reactdom@16'])
  .then(() => {
    const app = ReactDOM.render(<App />, document.getElementById('org-incf-kspace-container')) 
    window.interactiveViewer.pluginControl[PLUGIN_NAME].onShutdown(() => {
      window.interactiveViewer.pluginControl.unloadExternalLibraries(['react@16', '@reactdom@16'])
    })
  })
.catch(console.error)
