import React from 'react';
import noAvatar from "../common/avatarLoading.jpg"

const EmptyProfilePageTemplate = ({showMobileVersion}) => {
    const loadingAnimation = {
        height: "25px",
        background: 'linear-gradient(400deg, #ffdddd, #23211e, #fae5bb, #fce4cb)',
        backgroundSize: '200% 100%',
        animation: "loading 1s infinite"
    }

    const marginTopStyle = {marginTop: "15px"}

    return (
        <div className={"profile-page"}>
            <div className={"profile-left-part-block"}>
                <div className={"left-part-userData"}>
                    <div>
                        <span className={"left-part-block-label"}></span>
                    </div>
                    <div
                        style={loadingAnimation}
                        className={"left-part-about-block"}>
                        <span className={"left-part-block-label"}></span>
                    </div>
                </div>
            </div>
            <div className={"profile-center-part-block"}>
                <div className={"profile-bg"}></div>
                <div className={"profile-user-data-container"}>
                    <div className="profile-avatar-container">
                        <div>
                            <img className="profile-page-avatar"
                                 src={noAvatar}
                                 alt="loading..."/>
                            <p className={"profile-page-userName"} style={loadingAnimation}></p>
                            <div className="status-wrapper">
                                <div style={loadingAnimation} className="status-container">
                                </div>
                            </div>
                            <div className={"profile-contacts-block"}>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={loadingAnimation} className={"profile-data-block"}>
                        </div>
                        <div style={loadingAnimation} className={"profile-data-block"}>
                        </div>
                        <div className={"profile-data-block-about"} style={loadingAnimation}></div>
                    </div>
                </div>
                {<div style={{"display": showMobileVersion && "block", ...loadingAnimation}}
                      className={"mobile-friends-block"}>
                    <div className={"profile-mobile-friends-list"}>
                    </div>
                </div>}
                <div className={"profile-wall"}>
                    <div className={"profile-page-navBar-container"}>
                        <span style={loadingAnimation} className={"profile-navbar-item"}></span>
                        <span style={loadingAnimation} className={"profile-navbar-item"}></span>
                        <span style={loadingAnimation} className={"profile-navbar-item"}></span>
                        <span style={loadingAnimation} className={"profile-navbar-item"}></span>
                    </div>
                    <div>
                        <div>
                            <div style={loadingAnimation} className={'profile-post-container'}></div>
                            <div style={loadingAnimation} className={'profile-post-container'}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"profile-page-right-part-block"}>
                <div className={"right-part-photos-block"}>
                    <p className={"profile-page-right-part-photos-block-label"}></p>
                    <div style={{...marginTopStyle,...loadingAnimation}}></div>
                    <div style={{...marginTopStyle,...loadingAnimation}}></div>
                    <div style={{...marginTopStyle,...loadingAnimation}}></div>
                    <div style={{...marginTopStyle,...loadingAnimation}}></div>
                </div>
                <div className={"right-part-friends-block"}>
                    <div style={{...marginTopStyle, ...loadingAnimation}}
                         className={"profile-page-right-part-friend-block"}></div>
                    <div style={{...marginTopStyle, ...loadingAnimation}}
                         className={"profile-page-right-part-friend-block"}></div>
                    <div style={{...marginTopStyle, ...loadingAnimation}}
                         className={"profile-page-right-part-friend-block"}></div>
                    <div style={{...marginTopStyle, ...loadingAnimation}}
                         className={"profile-page-right-part-friend-block"}></div>
                    <div style={{...marginTopStyle, ...loadingAnimation}}
                         className={"profile-page-right-part-friend-block"}></div>
                </div>
            </div>
        </div>
    );
};

export default EmptyProfilePageTemplate;
