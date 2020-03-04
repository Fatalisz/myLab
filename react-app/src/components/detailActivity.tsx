import React from 'react';
import '../css/App.css';

class detailActivityComponent extends React.Component {
    render() {
        return (
            <div id="divDetailActivity" className="border-gray-light">
                <div id="headerDetailActivity" className="w100per color-AIS w3-padding header-detail">
                    <span className="font-bold">Detail Activity</span>
                    <span className="fa fa-caret-square-o-up font-white w3-right"></span>
                </div>
            </div>
        );
    }
        
}

export default detailActivityComponent;