define(['jquery', 'underscore', 'backbone','collections/user/UserCollection','text!templates/list/listTemplate.html'], function($, _, Backbone,UserCollection, listTemplate) {
    var ListView = Backbone.View.extend({
        el: $("#page"),
        render: function() {
        	var that = this;
        	this.collection = new UserCollection();
        	this.collection.fetch({
               success: function(collection, response) {
                   var template = _.template(listTemplate, {
                       users: that.collection.models
                   });
                   that.$el.html(template);
               },
               error: function(collection, response) {
                   console.log("error");
               }
           });
        },
    });
    return ListView;
});