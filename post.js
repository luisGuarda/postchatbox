	
		$(function(){
			$('#ejecutar').click(function(){
				$.ajax({
				    type: 'POST',
				    url: "https://api.us-south.apiconnect.appdomain.cloud/caja-arequipa-apic-dev/desarrollo/chatbot/message",
				    headers: { "Content-Type": "application/json", "x-ibm-client-id":"5211d0a0-594b-404f-af6c-bb154abcc631"},
				    dataType: "json",
				    data: '{"clientId":"1233456","mensaje":"hola","plataforma":"web"}',
				    success: function(data){
						console.log('success: '+data);
				}

			});
		});
			});
	
