define(['jquery', 'underscore', 'backbone', 'models/user/UserModel'], function($, _, Backbone, UserModel) {
    var UserCollection = Backbone.Collection.extend({
        model: UserModel,
        url: "data/user.json",
        parse: function(data) {
            return data.users;
        }
    });
    return UserCollection;
});