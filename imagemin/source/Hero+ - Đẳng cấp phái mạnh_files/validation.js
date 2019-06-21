document.addEventListener("DOMContentLoaded", function (){
	
	function validate(){
			var phone = this.elements.phone.value;
			var name = this.elements.name.value;
			if (phone.length > 9 && phone.length < 13 && name.length > 2 ){
				this.submit();}
			else{ event.preventDefault();
			alert("It is necessary to fill the form")};
		}

var forms = document.getElementsByTagName('form');
    for (let i = 0; i < forms.length; i++){
		var buttonSubmit = forms[i].getElementsByClassName('js_submit');
		var context = forms[i];
		buttonSubmit[0].onclick = validate.bind(context);
	};

});