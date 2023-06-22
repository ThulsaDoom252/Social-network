import React from 'react';

const WallNavbar = ({0: activeBlock, 1: handleClick}) => {
    return (
        <div className={"profile-page-navBar-container"}>
            <button onClick={() => handleClick("Posts")}
                    className={activeBlock === "Posts" ? "profile-navbar-item-active" : "profile-navbar-item"}>Posts
            </button>
            <button
                disabled={true}
                onClick={() => handleClick("Media")}
                className={activeBlock === "Media" ? "profile-navbar-item-active" : "profile-navbar-item"}>Media
            </button>
            <button onClick={() => handleClick("Likes")}
                    disabled={true}
                    className={activeBlock === "Likes" ? "profile-navbar-item-active" : "profile-navbar-item"}>Likes
            </button>
            <button onClick={() => handleClick("Replies")}
                    disabled={true}
                    className={activeBlock === "Replies" ? "profile-navbar-item-active" : "profile-navbar-item"}>Replies
            </button>
        </div>
    );
}

export default WallNavbar;