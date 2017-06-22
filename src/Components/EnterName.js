import React, { Component } from 'react';

class EnterName extends Component {
    render() {
        return (
            <div>
                <div className="EnterName">

                    <form>
                        <input type="text" placeholder="What's your Overwatch username?" />
                    </form>
                </div>

                <div className='EnterPlatform'>
                    <form>
                        <div className="radio">
                            <label>
                                <input type="radio" value="pc" />
                                PC
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Xbox" />
                                Xbox
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Playstation" />
                                Playstation
                            </label>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default EnterName