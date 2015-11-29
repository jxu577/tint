Works = new Mongo.Collection('works');


Works.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  fileId: {
    type: String
  },
  createdBy: {
    type: String,
    autoform: {
        type: "hidden",
        label: false
    },
    autoValue: function(){ return this.userId }
  },
  purchasedBy: {
    type: String,
    optional: true
  }
}));

