import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const article = (heading, subtitle) => (
        <div className ="widgets-article">
            <div className ="article-left">
                <FiberManualRecordIcon />
            </div>

            <div className ="article-right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className ="widgets">
            <div className="widgets-header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {article("Sample news article here", "Top news - 1020 readers")}
            {article("Sample news article 2 here", "Top news - 1020 readers")}
            {article("Sample news article 3 here", "Top news - 1020 readers")}
            {article("Sample news article 4 here", "Top news - 1020 readers")}
            {article("Sample news article 5 here", "Top news - 1020 readers")}
        </div>
    )
}

export default Widgets;
