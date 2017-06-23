import React, { Component } from 'react';



class SelectClass extends Component {
    // this.props.handleCheckbox()
    render() {
        return (
            <div>
                <div className='btn-group' data-toggle='buttons'>
                    <label className='btn btn-primary'>
                        <input type='checkbox' autoComplete='off' onChange={this.props.handleCheckbox}/> Attack
                    </label>
                    <label className='btn btn-primary'>
                        <input type='checkbox' autoComplete='off' onChange={this.props.handleCheckbox}/> Defense
                    </label>
                    <label className='btn btn-primary'>
                        <input type='checkbox' autoComplete='off' onChange={this.props.handleCheckbox}/> Tank
                    </label>
                    <label className='btn btn-primary'>
                        <input type='checkbox' autoComplete='off' onChange={this.props.handleCheckbox}/> Support
                    </label>
                </div>
            </div>
        );
    }
}

export default SelectClass





           