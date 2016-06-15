(function() {

  var app = angular.module('SPB Places', []);

  app.controller('mapMenuController', ['$scope', function($scope){
    console.log("Menu items",items);
    this.items = items;
    $scope.toggleMapLayer = function (menu_item){

      console.log(menu_item.name + ((menu_item.checked)? " unchecked": " checked"));
      menu_item.checked = !menu_item.checked && !menu_item.has_sub;

      if (menu_item.tableId){
      menu_item.layer.setMap(null);
      menu_item.layer = new google.maps.FusionTablesLayer({
        query: {
          select: menu_item.locationColumn,
          from: menu_item.tableId
        },
        map: (menu_item.checked)? map:null,
        styles: [{
          markerOptions: {
            iconName: menu_item.iconName
          }
        }]
      });
      google.maps.event.addListener(menu_item.layer, 'click', function(e) {
        $('.googft-info-window').html(
        "<div class='googft-info-window'>"+
          "<table>" +
            "<tbody>" +
              "<tr>" +
                "<td>" +
                  "<b>" +
                    e.row['Название'].value +
                  "</b><br><br>" +
                  e.row['Описание'].value +
                  "<br>"+
                  "<br>"+
                  "<b>"+
                    "Адрес: "+
                  "</b>"+
                  e.row['Адрес'].value+"<br>"+
                "</td>"+
                "<td>"+
                  "<img src='" + e.row['Фото'].value + "' width='200' height='150'>" +
                "</td>" +
              "</tr>" +
            "</tbody>" +
          "</table>" +
        "</div>");
      });
      }
    }
  }]);
})();
