var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shoppingListSchema = new Schema({
  title: String,
  itens: [],
  _ownerId: {type: Schema.Types.ObjectId, ref: 'User'},
  _sharedWith: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

var model = mongoose.model('ShoppingList', shoppingListSchema);

module.exports = model;
