module.exports = function(app) {
  app.get("/chats", function(req, res) {
    console.log("recebida a requisicao na chats na porta 3000");
    res.send("OK");
  });

  app.post("/create-chat", function(req, res) {
    var chat = req.body;

    var date = new Date();
    var timestamp = date.getTime();

    chat.date = timestamp;

    console.log("Processing new chat:");
    console.log(chat);

    var connection = app.db.connectionFactory;

    var chatDao = new app.services.ChatDao(connection);

    chatDao.salva(chat, function(error, resultado) {
      console.log("Chat criado com sucesso");
    });

    res.json(chat);
  });

  app.post("/create-msg", function(req, res) {
    var msg = req.body;

    var date = new Date();
    var timestamp = date.getTime();

    msg.date = timestamp;

    console.log("Processing new msg:");
    console.log(msg);

    var connection = app.db.connectionFactory;

    var msgDao = new app.services.MessageDao(connection);

    msgDao.salva(msg, function(error, resultado) {
      console.log("Mensagem criada com sucesso");
    });

    // res.send("Cheguei no msg")
    res.json(msg);
  });
};
