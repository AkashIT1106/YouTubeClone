import React from "react";
import "./VideoCard.css";

export default function VideoCard({ thumbnail, title, channel, views, time, channelImg }) {
  return (
    <div className="video-card">
      <img src={thumbnail} alt="Thumbnail" className="thumbnail" />
      <div className="video-info">
        <img src={channelImg} alt="Channel" className="channel-icon" />
        <div className="text-info">
          <h4>{title}</h4>
          <p className="channel-name">{channel}</p>
          <p className="views">{views} • {time}</p>
        </div>
      </div>
    </div>
  );
}
