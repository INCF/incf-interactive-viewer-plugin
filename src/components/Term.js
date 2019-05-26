import React from "react";
import Slug from './Slug';

export const Term = ({label, links}) => (
  <div className="list-group-item active">
    <h4 className='list-graoup-item-heading'>{label}</h4>
    <ul>{ links.map( (link,i) => <Slug key={i} link={link} /> ) }</ul>
  </div>
)
