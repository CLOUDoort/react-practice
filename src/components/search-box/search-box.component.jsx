import './search-box.styles.css'

import { Component } from "react";

class SearchBox extends Component {
    render() {
        const { onChangeHandler, placehoder , className} = this.props
        return (
            <input className={`search-box ${className}`} type='search' placeholder={placehoder} onChange={onChangeHandler} />
        )
    }
}

export default SearchBox