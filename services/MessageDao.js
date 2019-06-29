function Message(connection) {
  this._connection = connection;
}

Message.prototype.salva = function(message, callback) {
  this._connection.collection("Messages").add({
    _id_user: message.id_user,
    _id_chat: message.id_chat,
    message: message.message
  });
  // .then(ref => {
  //   console.log('Added document with ID: ', ref.id);
  // });
};

module.exports = function() {
  return Message;
};
