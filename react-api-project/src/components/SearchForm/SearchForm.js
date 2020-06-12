import React from 'react';

const SearchForm = () => {
    return (
        <div>
            <p className='f3'>
                {'This API will return some awesome stuff'}
            </p>

            <div className="center">
                <div className = "form pa4 br3 shadow-5 center">
                <input className = 'f4 pa2 w-70 center' type="tex" />
                <button 
                className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                >Search</button>
                </div>


            </div>
        </div>
    );
}

export default SearchForm;

 