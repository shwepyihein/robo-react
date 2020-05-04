import React from 'react';

const SerachBox = (props)=>{
    
    const {searchChange}=props
    return(
            <div className="pa2">
                <input 
                    className='pa3 ba b--green bg-lightest-blue'
                    type='search' 
                    placeholder='search robot'
                    onChange={searchChange}
                />
            </div>
    );
}

export default SerachBox;