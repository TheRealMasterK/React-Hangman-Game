import React from 'react';

// The Notification component handles the display of a notification message.
const Notification = ({ showNotification }) => {
  return (
    // The notification-container div has its class dynamically set based on the value of showNotification.
    // If showNotification is true, the 'show' class is added, which makes the notification visible on the screen.
    // If showNotification is false, no additional class is added, and the notification is hidden.
    // This component is used to show a notification when the user enters a letter they have previously entered in the game.
    // The CSS is responsible for controlling the animation and visibility of the notification, typically for a certain duration.
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Letter already entered - please try again!</p>
    </div>
  );
};

export default Notification;
