// script.js

// wait for page load
document.addEventListener('DOMContentLoaded', () => {
    let socket = new WebSocket("wss://echo.websocket.org"); // create new socket connection
    let dmInput = document.getElementById('dm-id'); // get the DM text input
    let groupInput = document.getElementById('group-input'); // get the group text input
    let dmList = document.getElementById('dm-list'); // get the dm messages list
    let groupList = document.getElementById('group-list'); // get the group messages list
    socket.onopen = event => {
        document.getElementById('socket-status').innerText = "Socket is open";
        // set the status on open
      };
      socket.onclose = event => {
        document.getElementById('socket-status').innerText = "Socket is closed";
        // set the status on close
      };
       // prepare to receive socket messages
  socket.onmessage = event => {
       // parse the data
    let messageData = JSON.parse(event.data);
      // create a new HTML <li> element
      let newMessage = document.createElement('li');
       // set the <li> element's innerText to the message text
    newMessage.innerText = messageData.message;
        // if it's a group message
        if (messageData.action === 'group') {
            // append to the group list
            groupList.append(newMessage);
        } else {
            // append to the dm list
            dmList.append(newMessage);
          };
        };
         // For each input element
  Array.from(document.getElementsByTagName('input')).forEach(input => {
      		   // add a keydown event listener
    input.addEventListener('keydown', event => {
         // if it's keyCode 13 (the enter key)
      if (event.keyCode === 13) {
        // declare the message data object
        let messageData = {
          message: event.target.value,
        };
           // check the message type by looking at the input element's ID
        if (event.target.id === 'group-input') {
            messageData.action = 'group';
        } else {
            messageData.action = 'dm';
          };
                 // stringify the message and send it through the socket connection
        socket.send(JSON.stringify(messageData));
 // clear the input element
 event.target.value = '';
};
});
});
});