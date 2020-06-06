import React from 'react';

// import './CollectionPreview.styles';
import './CollectionPreview.styles.scss';

const CollectionPreview = (props) => {
  const { title, items } = props;
  const itemsList = items
    .filter((item, idx) => idx < 4)
    .map((item) => <div key={item.id}>{item.name}</div>);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{itemsList}</div>
    </div>
  );
};

export default CollectionPreview;
