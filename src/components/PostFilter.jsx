import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                placeholder={'Search...'}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultvalue={'Select sort'}
                options={[
                    {name: 'ByName', value: 'title'},
                    {name: 'ByDescription', value: 'body'}
                ]}
            />
        </div>
    );
};

export default PostFilter;