import React, { Component } from 'react';
import { Input } from 'antd';

const { Search } = Input;

class MySearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Search
                placeholder="搜索组织和项目"
                onSearch={value => alert('Search word is: ' + value)}
                style={{ width: 200 }}
            />
        );
    }
}
 
export default MySearchInput;