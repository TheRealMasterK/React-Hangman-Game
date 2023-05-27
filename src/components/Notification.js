import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    //This Component interacts with App.js and helper.js. it sets the class of 
    //the notification-container div based on the value of showNotification.
    //If showNotification is true, then the class show will be added to the div, 
    //and if showNotification is false, an empty string will be added to the div.
    // It shows a notification if the user enters a letter they previously entered 
    //The CSS is updated bring the notification visible on screen for 2 seconds
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Letter already entered - try again!</p>
    </div>
  )
}

export default Notification
