import elasticsearch from 'elasticsearch'

const CLIENT =  new elasticsearch.Client({ host: process.env.ES_URL || 'https://knowledge-space.org/elasticsearch'});

/* Yuck.*/
export const getEntity = (slug) => {
  return CLIENT.get({index: 'scigraph', type: 'entities', id: slug })
    .then(res => res._source )
}

export const getHits = (labels) => {
    const query = labels.map( label => `(${label})` ).join(' OR ');
    return CLIENT.search({index: '*', type: 'dataSpace',
           body: {
            size: 0,
            query: { query_string: {query} }
           }
          })
    .then( res => res.hits.total )
}
