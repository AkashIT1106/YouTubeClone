import React from "react";
import "./Subscribe.css";
import { BsYoutube } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

export default function PremiumSubscription() {
  return (
    <div className="premium-container">
      <div className="premium-header">
        <BsYoutube className="yt-icon" />
        <h1 style={{color: 'white'}}>YouTube Premium</h1>
        <p>Enjoy YouTube without interruptions</p>
      </div>

      <div className="premium-features">

        <div className="feature-card">
          <FaCheckCircle className="tick" />
          <h3>Ad-free videos</h3>
          <p>Watch all videos without ads.</p>
        </div>

        <div className="feature-card">
          <FaCheckCircle className="tick" />
          <h3>Download videos</h3>
          <p>Save videos to watch offline.</p>
        </div>

        <div className="feature-card">
          <FaCheckCircle className="tick" />
          <h3>Play in background</h3>
          <p>Keep videos playing when screen is off.</p>
        </div>

        <div className="feature-card">
          <FaCheckCircle className="tick" />
          <h3>YouTube Music Premium</h3>
          <p>Ad-free, offline & background listening.</p>
        </div>

      </div>

      <h2 className="plans-title">Choose Your Plan</h2>

      <div className="plans-box">

        <div className="plan-card">
          <h3>Individual</h3>
          <p className="price">₹129 / month</p>
          <ul>
            <li>Ad-free videos</li>
            <li>Background play</li>
            <li>Downloads</li>
            <li>YouTube Music Premium</li>
          </ul>
          <button>Get Premium</button>
        </div>

        <div className="plan-card">
          <h3>Family</h3>
          <p className="price">₹189 / month</p>
          <ul>
            <li>Up to 5 family members</li>
            <li>Ad-free experience</li>
            <li>Background play</li>
            <li>YouTube Music Premium</li>
          </ul>
          <button>Get Family Plan</button>
        </div>

        <div className="plan-card">
          <h3>Student</h3>
          <p className="price">₹79 / month</p>
          <ul>
            <li>Ad-free videos</li>
            <li>Background play</li>
            <li>Downloads</li>
            <li>YouTube Music Premium</li>
          </ul>
          <button>Get Student Plan</button>
        </div>

      </div>
    </div>
  );
}
