import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ title, desc }) {
  if (!title) {
    return null;
  }
  return (
    <div data-test="ListItemComponent">
      <h2 data-test="listItemTitle">{title}</h2>
      <div data-test="listItemDesc">{desc}</div>
    </div>
  );
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default ListItem;
