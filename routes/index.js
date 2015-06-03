var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');
var Document = require('../helpers/db').Document;

/* retrieve all docs. */
router.get('/', function(req, res, next) {
  Document.find({ _username: req.user.username }, function(err, docs) {
    if (err) {
      console.error("There was an error finding the docuemnts:", JSON.stringify(err));

      // send to error handlers
      next(err);

      return;
    }

    // send a 200 and the docs
    res.status(200).json(docs);

    return;
  });
});

/* delete all the docs */
router.delete('/', function(req, res, next) {
  Document.remove({ _username: req.user.username }, function(err) {
    if (err) {
      console.error("There was an error deleting the docuemnts:", JSON.stringify(err));

      // send to error handlers
      next(err);

      return;
    }

    // send a 204 and end
    res.status(204).end();

    return;
  });
});

/* retrieve a doc. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;

  Document.findOne({id: id, _username: req.user.username}, function(err, doc) {
    if (err) {
      console.error("There was an error finding the docuemnt:", JSON.stringify(err));

      // send to error handlers
      next(err);

      return;
    }

    // if the doc was not found
    if (!doc) {
      res.status(404).end();

      return;
    }

    // send 200 and the doc
    res.status(200).json(doc);

    return;
  });
});

/* create a doc. */
router.post('/', function(req, res, next) {
  var data = req.body;

  var doc = new Document({
    _username: req.user.username,
    id: uuid.v1(),
    data: data
  });

  doc.save(function(err, doc) {
    if (err) {
      console.error("There was an error saving the docuemnt:", JSON.stringify(err));

      // send to error handlers
      next(err);

      return;
    }

    // send 201 and the doc
    res.status(201).json(doc);

    return;
  });
});

/* update a doc. */
router.put('/:id', function(req, res, next) {
  var id = req.params.id;
  var data = req.body;

  Document.findOneAndUpdate({ id: id, _username: req.user.username }, { data: data }, function(err, doc) {
    if (err) {
      console.error("There was an error updating the docuemnt:", JSON.stringify(err));

      // send to error handlers
      next(err);

      return;
    }

    // if the doc was not found
    if (!doc) {
      res.status(404).end();

      return;
    }

    // send no content and end
    res.status(204).end();

    return;
  });
});

/* delete a doc. */
router.delete('/:id', function(req, res, next) {
  var id = req.params.id;

  Document.findOneAndRemove({ id: id, _username: req.user.username }, function(err, doc) {
    if (err) {
      console.error("There was an error deleting the docuemnt:", JSON.stringify(err));

      // send to error handlers
      next(err);

      return;
    }

    // if the doc was not found
    if (!doc) {
      res.status(404).end();

      return;
    }

    // send no content and end
    res.status(204).end();

    return;
  })
});

module.exports = router;
