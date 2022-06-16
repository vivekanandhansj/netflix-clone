import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

import React from 'react';


export default function Watch() {
  const video ="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/HdkCGEJGDkdozo38e/videoblocks-glitch_reel_slideshow_rwj-x2yju__p__8a708a2e0ee23c11dca76ccba59f0719__P360.mp4";
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video 
      className ="video" autoPlay controls
       src={video}
    />
    </div>
  );
}