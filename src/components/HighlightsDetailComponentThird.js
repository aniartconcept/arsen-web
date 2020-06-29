import React, { useEffect, useState } from 'react';
import i18n from 'locale/i18n';

import Image1 from 'assets/img/highlights/2.jpg';
import Image2 from 'assets/img/bio/bio-3@2x.jpg';
import Image3 from 'assets/img/bio/bio-6@2x.jpg';
import Image4 from 'assets/img/bio/bio-1@2x.jpg';
import Image5 from 'assets/img/bio/bio-4@2x.jpg';

const HighlightsDetailComponentThird = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //var id = this.props.match.params.id
    //console.log ("id" + id);
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/db/highlightsdetail_third.json')
            .then(res => {
                return res.json();
            })
            .then(setData);
    }, []);

    const lng = i18n.language;

    return (
        <div className="home-page-content">
            {data ? (
                <section className="section-light bio-items-section">
                    <div className="bio-items">
                        <div className="higlight-item">
                            <div className="item-title detail-item-title">{data.composer.title[lng]}</div>
                            <div className="item-content-wrapper">
                                <div className="item-content" dangerouslySetInnerHTML={{ __html: data.composer.content[lng] }}></div>
                                <ul className="highlight-social-section">
                        <li>
                        <a href="https://www.pinakothek.de/caravaggisti" target="_blank" rel="noopener noreferrer">
                        <i className="icon icon-web"></i></a>
                        </li>
                        <li>
                        <a href="https://www.youtube.com/watch?v=Bw5EZM6GIPU" target="_blank" rel="noopener noreferrer">
                        <i className="icon icon-youtube"></i>
                        </a>
                        </li>
                        </ul>
                            </div>
                            <div className="item-image-wrapper top-left">
                                <img src={Image1} className="item-image" alt="composer" />
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                'loading...'
            )}
        </div>
    );
};

export default HighlightsDetailComponentThird;
