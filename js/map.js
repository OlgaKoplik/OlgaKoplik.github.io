function initMap() {
	var centerLatLng = new google.maps.LatLng(28.173877, -15.427772);
	var mapOptions = {
		center: centerLatLng,
		zoom: 14
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	// contentString - это переменная в которой хранится содержимое информационного окна.
	// Может содержать, как HTML-код, так и обычный текст.
	// Если используем HTML, то в этом случае у нас есть возможность стилизовать окно с помощью CSS.
	var contentString = '<div class="infowindow">' +
	                        '<h3>Golf Club</h3>' +
	                        '<p>Lorem ipsum dolor sit amet,  sed.</p>' +
	                    '</div>';
	// Создаем объект информационного окна и помещаем его в переменную infoWindow
	var infoWindow = new google.maps.InfoWindow({
		content: contentString
	});
	var marker = new google.maps.Marker({
		position: centerLatLng,
		map: map,
		title: "Текст всплывающей подсказки"
	});
	// Отслеживаем клик по нашему маркеру
	google.maps.event.addListener(marker, "click", function() {
		// infoWindow.open - показывает информационное окно.
		// Параметр map - это переменная содержащие объект карты (объявлена на 8 строке)
		// Параметр marker - это переменная содержащие объект маркера (объявлена на 23 строке)
		infoWindow.open(map, marker);
	});
	// Отслеживаем клик в любом месте карты
	google.maps.event.addListener(map, "click", function() {
		// infoWindow.close - закрываем информационное окно.
		infoWindow.close();
	});
}
google.maps.event.addDomListener(window, "load", initMap);
