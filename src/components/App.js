import React, {Component} from "react";
import {Dataspace} from './Dataspace';

/* Each label in the atlas is mapped to a URL in kspace. Some atlas labels
 * have multiple pages they reference. */
class App extends Component {

   constructor(props) {
      super(props);
      this.state = {regions: []};
   }

  componentDidMount() {
    window.interactiveViewer.metadata.selectedRegionsBSubject
      .subscribe( array => this.setState({regions: array.map( a => a['name'] ) }) )
  }

  render() {
    const {regions} = this.state;
    return (
      <div>
          <Dataspace terms={regions} />
      </div>
    )
  }
}

export default App;
