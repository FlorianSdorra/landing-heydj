import React from 'react';

const LogoSection = () =>{
    return(
        <div className="logo-section-wrapper">
            <div className="logo-circle"></div>
            <h3>lorem poporem ipsum malakia </h3>
            <form className="search-form">
                <label>
                    <div className="search-form-input-border">
                        <input className="search-form-input" type="text" placeholder="SEARCH"></input>
                    </div>
                </label>
            </form>
        </div>
    )
}

export default LogoSection;