import React from 'react';
import {getPagesArray} from "../../../utils/pages";
import MyButton from "../button/MyButton";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {pagesArray.map(p =>
                <MyButton
                    onClick={() => changePage(p)}
                    key={p}
                    style={page === p ? {background: 'blue', width: '100px'} : {background: 'aqua', width: '100px'}}
                >
                        {p}
                    </MyButton>
            )}
        </div>
    );
};

export default Pagination;