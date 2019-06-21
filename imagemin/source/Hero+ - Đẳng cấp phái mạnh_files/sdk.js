document.addEventListener("DOMContentLoaded", function (){
	
	var domain = location.hostname.split('.').reverse()[1]+'.'+location.hostname.split('.').reverse()[0]; // get domain
	 
	function pixel() {
	  var phone = this.elements.phone.value ? this.elements.phone.value : "";
	  var name = this.elements.name.value ? this.elements.name.value : "";
	  document.cookie = 'Ikonphone='+phone+'; path=/ ; domain=.'+domain; // half-price.me
	  document.cookie = 'Ikonname='+name+'; path=/ ; domain=.'+domain; // half-price.me
	  };

	(function checkSustem(){
		if ( domain == 'half-price.me') {//sending to affise
		
			if (window.location.origin.includes('pre.half-price.me')) {
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = "//track.cpaikon.net/preland.js";
				document.getElementsByTagName('body')[0].appendChild(script);
			}

		var forms = document.getElementsByTagName('form');
		  
			for (var i = 0; i < forms.length; i++) {
				forms[i].setAttribute('action', 'http://order.half-price.me/'); //http://half-price.me/cpo/order
				forms[i].setAttribute('method', 'get');
				forms[i].addEventListener('submit', pixel);
			} // add action form
		  

		}

		
		//sending to Ikon
		else{
			const appConfigs = {
				baseUrl: 'https://order.suckhoevasacdep.life',
				apiGetCustomScript: '/scripts'
			};

			function getParameterByName(name, url) {
				if (!url) url = window.location.href;
				name = name.replace(/[\[\]]/g, "\\$&");
				var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
					results = regex.exec(url);
				if (!results) return null;
				if (!results[2]) return '';
				return decodeURIComponent(results[2].replace(/\+/g, " "));
			}

			function request(url, method, callback) {
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						if (!callback) {
							console.log('Please provide callback for request!');
						}

						// Typical action to be performed when the document is ready:
						callback(xhttp.responseText);
					}
				};
				xhttp.open(method, url, true);
				xhttp.send();
			}

			function isLandingPage() {
				return !window.location.origin.includes('pre.suckhoevasacdep.life');
			}

			function generateScriptUrl() {
				const clickId = getParameterByName('click_id');
				if (!window.pageType) {
					window.pageType = isLandingPage() ? 'landing' : 'prelanding';
				}
				
				var url = appConfigs.baseUrl + appConfigs.apiGetCustomScript + '/' + clickId + '/' + window.pageType;

				return url;
			}

			function appendScriptIntoPage(script) {
				var div = document.createElement('div');
				div.innerHTML = script;

				document.getElementsByTagName('body')[0].appendChild(div);
			}

			function startAppendScriptIntoPage() {
				const url = generateScriptUrl();

				request(url, 'GET', appendScriptIntoPage);	
			}

			function addCustomScript() {
				const url = generateScriptUrl();
				
				// Create and append script tag
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = url;

				document.getElementsByTagName('body')[0].appendChild(script);
			}

			addCustomScript();
			
			if(window.location.origin.includes('pre.suckhoevasacdep.life')){//for prelanding page change links
				var param_pixel_pre = [''];
				var pix_pre = [''];
				param_pixel_pre[0] = getParameterByName('click_id');
				param_pixel_pre[1] = getParameterByName('publisher');
				param_pixel_pre[2] = getParameterByName('offer_id');
				param_pixel_pre[3] = getParameterByName('aff_sub1');
				param_pixel_pre[4] = getParameterByName('aff_sub2');
				param_pixel_pre[5] = getParameterByName('aff_sub3');
				param_pixel_pre[6] = getParameterByName('aff_sub4');
				param_pixel_pre[7] = getParameterByName('aff_sub5');
				param_pixel_pre[8] = getParameterByName('land_name');
				param_pixel_pre[9] = getParameterByName('fb_pixel_id');
				

				if ( param_pixel_pre[8] != null) {

					for(var i = 0; i <= 9; i++){
						if ( param_pixel_pre[i] != null ) {
							pix_pre[i] = param_pixel_pre[i];
						}
						else {
							pix_pre[i] = '';
						};
					};

					var link = 'http://'+pix_pre[8]+'.suckhoevasacdep.life/?click_id='+pix_pre[0]+'&publisher='+pix_pre[1]+'&offer_id='+pix_pre[2]+'&aff_sub1='+pix_pre[3]+'&aff_sub2='+pix_pre[4]+'&aff_sub3='+pix_pre[5]+'&aff_sub4='+pix_pre[6]+'&aff_sub5='+pix_pre[7]+'fb_pixel_id'+pix_pre[9];

					var links_page = document.getElementsByTagName('a');
					for (var i = 0; i < links_page.length; i++) {
						links_page[i].setAttribute('href', link);
					};
				}
				else {
					console.log('Landing is not set, link substitution did not occur');
				};
			}
			
			var tmp = new Array();//add hide input to form
			var tmp2 = new Array();
			var param = new Array();

			var get = location.search;
			if(get != '') {
				tmp = (get.substr(1)).split('&');
				for(var i=0; i < tmp.length; i++) { 
					tmp2 = tmp[i].split('=');
					param[tmp2[0]] = tmp2[1];
					}
				}

			var forms = document.getElementsByTagName('form');
				for (var i = 0; i < forms.length; i++) {
					for (var key in param) {
						if(!(forms[i].toString().indexOf("input[name=" + key + "]") + 1)){
							var input = document.createElement("input");
								input.setAttribute("type", "hidden");
								input.setAttribute("name", key);
								input.setAttribute("value", param[key])
							
							forms[i].appendChild(input);
						}
						else {
							var oldInput = forms[i].querySelectorAll('input[name=' + key + ']');
							oldInput[0].value = param[key];
						}
					}	
				};
			
			
			
		};
	})();
});