var clear_address_results_button = document.querySelector("#clear_address_results_button");

var delivery_address_suggestions_container = document.querySelector(".address_suggestions");

var search_box = document.querySelector("#delivery_address");

clear_address_results_button.addEventListener("click", (e)=>{
	delivery_address_suggestions_container.style.border = `solid 0px black`;
	delivery_address_suggestions_container.innerHTML = ``;
	search_box.value = ``;
});

var possible_addresses = [
	"Nana Yaw Wiredu Avenue", "KNUST", "Ayigya", "Bomso", "Ayeduase",
	"Neinheim", "Kenyase"
]

search_box.addEventListener("keyup", (e)=>{
	delivery_address_suggestions_container.innerHTML = ``;

	possible_addresses.forEach((possible_address)=>{
		if(possible_address.toLowerCase().startsWith(search_box.value.toLowerCase().trim()) && search_box.value.toLowerCase().trim() !== ""){
			delivery_address_suggestions_container.innerHTML += `
				<a href="#">${possible_address}</a>	
			`
		}
	});

	if(delivery_address_suggestions_container.innerHTML == ``){
		delivery_address_suggestions_container.style.border = `solid 0px black`;
	}else{
		delivery_address_suggestions_container.style.border = `solid 1px black`;
	}
})