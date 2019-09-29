import React from 'react';
import './Searchbar.css';


class Searchbar extends React.Component {
    state = {
        term: ''
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

        render() {
            return (
                <div className='search-bar ui segment'>
                    <form onSubmit={this.handleSubmit} className='ui form'>
                        <div className='field text-center'>
                            <i class="fa fa-search"></i>
                            <input onChange={this.handleChange} name='video-search' type="text" value={this.state.term} placeholder="Search here"/>
                        </div>
                    </form>
                </div>
            )
        }
    }
    export default Searchbar;
