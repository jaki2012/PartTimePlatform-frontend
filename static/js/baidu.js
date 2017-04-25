exports.shit = function () {
    console.log('fuck')
    //百度地图API功能
    var sMap = new BMap.Map("smallmap");
    sMap.enableScrollWheelZoom(true);

    if ($('#positionLat').val() && $('#positionLng').val()) {
        var sPoint = new BMap.Point($('#positionLng').val(), $('#positionLat').val());
        sMap.centerAndZoom(sPoint, 12);
        sMap.addOverlay(new BMap.Marker(sPoint));              // 将标注添加到地图中

    } else {
        // 创建地址解析器实例
        var sMyGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上,并调整地图视野
        sMyGeo.getPoint("武汉市武昌区螃蟹岬凤凰大厦A1-1301", function (sPoint) {
            if (sPoint) {
                sMap.centerAndZoom(sPoint, 16);
                sMap.addOverlay(new BMap.Marker(sPoint));
            }
        }, "武汉");
    }

    /*弹窗大地图*/
    var map = new BMap.Map("allmap");
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.MapTypeControl());
    map.addControl(new BMap.OverviewMapControl());
    map.enableScrollWheelZoom(true);
    // 创建地址解析器实例
    var gc = new BMap.Geocoder();
    $(function () {
        $('#mapPreview').bind('click', function () {
            $.colorbox({ inline: true, href: "#baiduMap", title: "公司地址" });
            var address = "武汉市武昌区螃蟹岬凤凰大厦A1-1301";
            var city = "武汉";
            var lat = $('#positionLat').val();
            var lng = $('#positionLng').val();
            map.setCurrentCity(city);
            map.setZoom(12);
            if (lat && lng) {
                var p = new BMap.Point(lng, lat);
                var marker = new BMap.Marker(p);  // 创建标注
                map.addOverlay(marker);              // 将标注添加到地图中
                setTimeout(function () {
                    map.centerAndZoom(p, 15);
                }, 1000);
                map.setCenter(p);
                map.setZoom(15);
                var sContent =
                    "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>" + city + "</h4>" +
                    "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>" + address + "</p>" +
                    "</div>";
                var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
                //图片加载完毕重绘infowindow
                marker.openInfoWindow(infoWindow);
            } else {
                gc.getPoint(address, function (point) {
                    if (point) {
                        var p = new BMap.Point(point.lng, point.lat);
                        var marker = new BMap.Marker(p);  // 创建标注
                        map.addOverlay(marker);              // 将标注添加到地图中
                        setTimeout(function () {
                            map.centerAndZoom(p, 15);
                        }, 1000);
                        map.setZoom(14);
                        var sContent =
                            "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>" + city + "</h4>" +
                            "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>" + address + "</p>" +
                            "</div>";
                        var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
                        //图片加载完毕重绘infowindow
                        marker.openInfoWindow(infoWindow);
                    }
                }, city);
            }
        });
    });
}