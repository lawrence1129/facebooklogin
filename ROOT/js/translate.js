var mapping = function(english, chinese) {
 	this.english = english;
 	this.chinese = chinese;
 }
 var arr =[
 			new mapping("apple", "蘋果"),
 			new mapping("banana", "香蕉")
 			];
function translate(data) {
 	var i = 0;
      for (;i <arr.length;i++)
      {
      	if(arr[i].english===data)
      		return arr[i].chinese;
      }
      return "not found";
	}
var viewModel = {
	english: ko.observable(" ")
};
viewModel.chinese = ko.computed(function(){
 		var a= this.english();
 		return translate(a);
 	}, viewModel);
ko.applyBindings(viewModel);
