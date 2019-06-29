function Chat(connection) {
  this._connection = connection;
}

Chat.prototype.salva = function(chat, callback) {
  this._connection
    .collection("Chats")
    .doc()
    .set(chat);
  // .then(ref => {
  //   console.log('Added document with ID: ', ref.id);
  // });
};

module.exports = function() {
  return Chat;
};
