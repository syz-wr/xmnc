$(function(){
	// 百度地图API功能
	var map = new BMap.Map("allmap"); // 创建Map实例
	var poi = new BMap.Point(106.57, 29.60); //经纬度
	map.centerAndZoom(poi, 20); // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
	map.setCurrentCity("重庆"); // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

	//创建和初始化地图函数：
	function initMap() {
		addMapControl(); //向地图添加控件
	}

	//地图控件添加函数：
	function addMapControl() {
		//向地图中添加缩放控件
		var ctrl_nav = new BMap.NavigationControl({
			anchor: BMAP_ANCHOR_TOP_LEFT,
			type: BMAP_NAVIGATION_CONTROL_LARGE
		});
		map.addControl(ctrl_nav);
		//向地图中添加缩略图控件
		var ctrl_ove = new BMap.OverviewMapControl({
			anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
			isOpen: 1
		});
		map.addControl(ctrl_ove);
		//向地图中添加比例尺控件
		var ctrl_sca = new BMap.ScaleControl({
			anchor: BMAP_ANCHOR_BOTTOM_LEFT
		});
		map.addControl(ctrl_sca);
	}

	var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
		'<img src="images/xiaoniao_icon.png" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
		'我们的地址：重庆市江北区星耀天地1栋20层<br/>电话：400-101-1897（周一至周日8:30-20:00）<br/>邮箱编码：400000' +
		'</div>';
	//创建检索信息窗口对象
	var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
		title: "熊芒", //标题
		width: 290, //宽度
		height: 105, //高度
		panel: "panel", //检索结果面板
		enableAutoPan: true, //自动平移
		searchTypes: [
			BMAPLIB_TAB_TO_HERE, //到这里去
			BMAPLIB_TAB_SEARCH, //周边检索
			BMAPLIB_TAB_FROM_HERE //从这里出发
		]
	});

	var marker = new BMap.Marker(poi); //创建marker对象
	marker.addEventListener("click", function(e) {
		searchInfoWindow.open(marker);
	})
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	map.addOverlay(marker); //在地图中添加marker
	initMap(); //创建和初始化地图
})
	
	
	
	
	