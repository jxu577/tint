
Works.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  },
  'update': function () {
    // add custom authentication code here
    return true;
  },
  'remove': function () {
    // add custom authentication code here
    return true;
  }
});

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
  }
}));


