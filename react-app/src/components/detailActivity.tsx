import React from 'react';
import '../css/App.css';

class DetailActivity extends React.Component {
    render() {
        return (
            <div id="divDetailActivity">
                <div id="headerDetailActivity" className="w100per color-AIS w3-padding header-detail border-gray-light">
                    <span className="font-bold">Detail Activity</span>
                    <span className="fa fa-caret-square-o-up font-white w3-right"></span>
                </div>
                <div id="bodyDetailActivity">
                    <div className="w3-row">
                        <div className="w3-col w50per">
                            col1
                        </div>
                        <div className="w3-col w50per">
                            col2
                        </div>
                    </div>
                </div>
            </div>
        );
    }
        
}

export default DetailActivity;