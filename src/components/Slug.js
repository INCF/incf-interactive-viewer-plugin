import React, {Component} from "react";
import { getEntity, getHits} from './elasticsearch';

class Slug extends Component {

   constructor(props) {
      super(props);
      this.state = {};
   }

  /* yuck */
  _getHits(entity) {
    if ( typeof entity != 'undefined' ) {
      getHits(entity.labels).then( hits => this.setState({hits}) );
    }
  }

  componentDidMount() {
    const {link} = this.props;
    
    const reg = new RegExp('[^/]+(?=/$|$)');
    const slug = reg.exec(link)[0];
    if ( typeof slug != 'undefined' ) {
      getEntity(slug).then( entity => this.setState({entity}, this._getHits(entity)) )
    }
  }


  render() {
    const {link} = this.props;
    const {entity, hits} = this.state;
    if ( typeof entity == 'undefined' || entity == null ) {
      return null; 
    } 
    const {name} = entity;
    return (
      <li className="list-group-item-text"><a href={link} className=""> {name} ({hits} datasets)</a></li>
    )
  }
}

export default Slug;
