import React from "react";
import PropTypes from "prop-types";


function Numberss( {func, id} ) {
    return (
        <div>
            <button onClick={func} class="numberClick">{id}</button>
        </div>
    )
}

Numberss.propTypes = {
    id: PropTypes.number.isRequired
};

export default Numberss;