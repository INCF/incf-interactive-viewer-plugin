import React from "react";
import {Term} from './Term';
import {LINK_MAP} from './constants';

const _getLinks = (term) => ( 
      LINK_MAP.get(term) || [`https://knowledge-space.org/search?q=${term}`]
)

export const Dataspace = ({terms}) => (
  <div className="list-group">
    { terms.map( (term,i) => <Term key={i} label={term} links={_getLinks(term) } /> ) }
  </div>
)
