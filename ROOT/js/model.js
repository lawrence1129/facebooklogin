var viewModel = {
	firstName: ko.observable("init")
	, lastName: ko.observable("init")
	, capitalizeLastName: function(){
		var currentVal = this.lastName();
		this.lastName(currentVal.toUpperCase());
	}
};
viewModel.fullName = ko.computed(function(){
		return this.firstName() + " " + this.lastName();
	}, viewModel);

var 
ko.applyBindings(viewModel);

// var seatReservation = function(name) {
// 	this.name = name;
// }

// var viewModel = {
// 	abc="i am abc",
// seats: ko.observableArray([
// 		new seatReservation("Steve"),
// 		new seatReservation("Bert")
// 		])
// };