const express = require('express');
export const router = express.Router();
const Message = require('../models/message');

// Ruta para obtener todos los mensajes
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener un mensaje por su ID
router.get('/:id', async (req, res) => {
  try {
    const messageId = req.params.id;
    const message = await Message.findById(messageId);
    if (!message) {
      return res.status(404).json({ message: 'Mensaje no encontrado' });
    }
    res.json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;


// Ruta para crear un nuevo mensaje
router.post('/', async (req, res) => {
  const message = new Message({
    sender: req.body.sender,
    receiver: req.body.receiver,
    content: req.body.content,
    timestamp: Date.now()
  });

  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para eliminar un mensaje
router.delete('/:id', async (req, res) => {
  try {
    const messageId = req.params.id;
    const message = await Message.findById(messageId);
    if (!message) {
      return res.status(404).json({ message: 'Mensaje no encontrado' });
    }
    await message.remove();
    res.json({ message: 'Mensaje eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
