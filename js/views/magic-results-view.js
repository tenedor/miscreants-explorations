(function ( ) {

var util = mcc.util;
var View = mcc.View;

var viewForResult = mcc.viewForResult = function(result) {
	// pick the appropriate view here
	//
	// then instantiate and return it
	if () {
		return new PostListResultView({
			model: result,
			otherOptions: option,
			otherOptions2: option2
		});
	} else {
		return new CommentListResultView({
			model: result
			otherOptions: option
			otherOptions2: option2
	}	


}

var PostListResultView = mcc.PostListResultView = ContentView.extend({

	className: 'post-list-results-view',

	template: _.template( ), //some stupid html string

	initialize: function() {
		this.thing = thingFromArguments
	}

	render: function() {

	}


})

var CommentListResultView = mcc.CommentListResultView = ContentView.extend({

	className: 'comment-list-results-view',

	template: _.template( ), //some stupid html string

	render: function() {

	}


})

})()
