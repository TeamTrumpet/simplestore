# Simplestore API

This API is served with Basic Authentication, valid credentials are required on
all requests.

# Group Document

## Documents [/]

### Get all documents [GET]
Retrieves all the documents.

+ Response 200

            [
              {
                "id": "73a83cd0-0a13-11e5-8ec0-2393188e877f",
                "data": {
                  "name": "Wyatt",
                  "color": "blue"
                }
              },
              ...
            ]

### Create new document [POST]
Creates a new document.

+ Request (application/json)

            {
              "name": "Wyatt",
              "color": "blue"
            }

+ Response 201 (application/json)

            {
              "id": "73a83cd0-0a13-11e5-8ec0-2393188e877f",
              "data": {
                "name": "Wyatt",
                "color": "blue"
              }
            }

## Document [/{document_id}]

+ Parameters
  + document_id (string, required) ... ID of the document

### Get a document [GET]
Retrieves a document with the named `document_id`.

+ Response 200 (application/json)

            {
              "id": "73a83cd0-0a13-11e5-8ec0-2393188e877f",
              "data": {
                "name": "Wyatt",
                "color": "blue"
              }
            }

### Update a document [PUT]
Updates the data of a document with the named `document_id` with the body of the request.

+ Request (application/json)

            {
              "name": "Wyatt",
              "color": "red"
            }

+ Response 204

### Delete a document [DELETE]
Deletes a document with the named `document_id`.

+ Response 204
