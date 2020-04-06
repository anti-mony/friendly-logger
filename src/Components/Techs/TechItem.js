import React from "react";
import PropTypes from "prop-types";
import M from "materialize-css";

import { connect } from "react-redux";
import { deleteTech } from "../../Actions/techActions";

const TechItem = ({ tech: { firstName, lastName, id }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: `${firstName} ${lastName} Deleted` });
  };

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
