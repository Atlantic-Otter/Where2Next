import React from 'react';
import {
  FacebookShareButton,

  TwitterShareButton,
  FacebookIcon,

  TwitterIcon
} from 'react-share';

const ShareButtons = () => {
  const shareUrl = window.location.href;
  const size = 40;
  return (
    <div id="share-buttons-container">
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon round size={size} />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl}>
        <TwitterIcon round size={size} />
      </TwitterShareButton>

    </div>
  );
};

export default ShareButtons;

