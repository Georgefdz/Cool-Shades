// src/controllers/shadesController.js
exports.getIndex = (req, res) => {
    res.render('index', {
      title: 'Cool Shades'
    });
  };
  