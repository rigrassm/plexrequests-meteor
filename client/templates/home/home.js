Template.home.events({
	'submit #home': function (event) {
		router.go('search.page');
	},
	'click [data-action=back]' : function () {
		history.back();
	}
});

Template.home.onCreated(function () {
});

Template.home.helpers({
	isLoggedOn: function () {
		if (Session.get("auth") === "true"){
			return true;
		} 
	},
});
