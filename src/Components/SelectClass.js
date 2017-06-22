import React, { Component } from 'react';



class SelectClass extends Component {
    render() {
        return (
            <div>
                <div className='btn-group' data-toggle='buttons'>
                    <label className='btn btn-primary'>
                        <input type='checkbox' autoComplete='off' /> Attack
                    </label>
                    <label className='btn btn-primary'>
                        <input type='checkbox' autoComplete='off' /> Defense
                    </label>
                    <label className='btn btn-primary'>
                        <input type='checkbox' autoComplete='off' /> Tank
                    </label>
                    <label className='btn btn-primary'>
                        <input type='checkbox' autoComplete='off' /> Support
                    </label>
                </div>
            </div>
        );
    }
}

export default SelectClass





            // <div>
            //     <form>
            //         <div className="SelectClass">

            //             <div className="checkbox">
            //                 <label>
            //                     <input type="checkbox" value="Attack" />
            //                     Attack
            //                 </label>
            //             </div>
            //             <div className="checkbox">
            //                 <label>
            //                     <input type="checkbox" value="Defense" />
            //                     Defense
            //                 </label>
            //             </div>
            //             <div className="checkbox">
            //                 <label>
            //                     <input type="checkbox" value="Tank" />
            //                     Tank
            //                 </label>
            //             </div>
            //             <div className="checkbox">
            //                 <label>
            //                     <input type="checkbox" value="Healer" />
            //                     Healer
            //                 </label>
            //             </div>
            //         </div>
            //     </form>
            // </div>