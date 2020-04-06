import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../Actions/logActions";
import PropTypes from "prop-types";

const SearchBar = ({ searchLogs }) => {
  const query = useRef("");

  const onChange = (e) => {
    searchLogs(query.current.value);
  };

  return (
    <nav style={{ marginBottom: "16px" }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Logs...'
              ref={query}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
