define(['jquery', 'underscore', 'backbone', 'models/user/UserModel'], function($, _, Backbone, UserModel) {
    var UserCollection = Backbone.Collection.extend({
        model: UserModel,
        url: "http://localhost:8888/CRUD-worklight-api/get_all_users.php",
        //url: "http://demo.revivalx.com/worklight/get_all_users.php",
        parse: function(data) {
            return data.users;
        }
    });
    return UserCollection;
});