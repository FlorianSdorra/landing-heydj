import React from 'react';

class LogoSection extends React.Component{

    render(){
        // const search = <i class="fas fa-search"></i>;

        return(
            <div className="logo-section-wrapper">
                <div className="logo-circle"></div>
                <h3>lorem poporem ipsum malakia </h3>
                <div className="search-form">
                    <div className="icon-wrap">
                        
                    </div>
                    
                    <form>
                        <label>
                            <div className="search-form-input-border">
                                <i class="fas fa-search search-icon"></i>
                                <input className="search-form-input" type="text" ></input>
                            </div>
                        </label>
                    </form>
                </div>
                    
                
            </div>
        )
    }
    
}

export default LogoSection;