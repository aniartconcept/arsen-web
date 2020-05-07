import React, { useEffect } from 'react';

import HighlightsDetailComponent from "../components/HighlightsDetailComponent";

const HighlightsDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="contacts-page-content">
            <HighlightsDetailComponent />
        </div>
    );
};

export default HighlightsDetail;
