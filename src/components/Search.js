import React from "react";

const Search = props => (
    <>
        <form onSubmit={props.handleSubmit}>
            <div className="input-group mt-3 w-100">
                <input
                    type="text"
                    value={props.location}
                    className="form-control"
                    placeholder="Ex. Bangsue"
                    aria-label="Location"
                    aria-describedby="button-addon2"
                    onChange={props.handleChange}
                />
                <div className="input-group-append">
                <button className="btn btn-primary" type="submit" id="button-addon2">
                    Search
                </button>
                </div>
            </div>
        </form>
    </>
);

export default Search;
