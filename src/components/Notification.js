import React from 'react';

// The Notification component handles the display of a notification message in the Hangman game.
const Notification = ({ showNotification }) => {
  return (
    // The notification-container div has its class dynamically set based on the value of showNotification prop.
    // If showNotification is true, the 'show' class is added, which makes the notification visible on the screen.
    // If showNotification is false, no additional class is added, and the notification remains hidden.
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Letter already entered - please try a different one!</p>
    </div>
  );
};

export default Notification;
