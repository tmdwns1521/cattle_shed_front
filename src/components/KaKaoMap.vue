<template>
    <div id="map" style="height: 500px;"></div>
</template>

<script>

export default {
  name: "KaKaoMap", // 컴포넌트 이름 지정
  data(){
    return{ 
        map: null // 객체 설정
    };
  },
  setup() {},
  created() {},
  mounted() {
    // api 스크립트 소스 불러오기 및 지도 출력
    if (window.kakao && window.kakao.maps){
        this.loadMap();
    } else {
        this.loadScript();
    }
  },
  unmounted() {},
  methods:{ //! api 불러오기
    loadScript() {
        const script = document.createElement("script");
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=da599293d059bbfb4bb80977e9f645eb&autoload=false ";
        script.onload = () => window.kakao.maps.load(this.loadMap);

        document.head.appendChild(script);

        document.cookie="safeCookie1=foo; SameSite=Lax";
        document.cookie="safeCookie2=foo";
        document.cookie="crossCookie=bar; SameSite=None; Secure";
      },
    loadMap(){   // 맵 출력
        const container = document.getElementById("map");
        const options = {
            center: new window.kakao.maps.LatLng(37.514243, 126.898605),
            level: 3
        };
        this.map = new window.kakao.maps.Map(container, options);
        this.loadMaker();
    },
    loadMaker(){  //지정한 위치에 마커 불러오기
        const MarkerPosition = new window.kakao.maps.LatLng(37.514243, 126.898605);
        const marker = new window.kakao.maps.Marker({
            position: MarkerPosition,
        });
        marker.setMap(this.map)
        
        const iwContent = '<div style="padding:5px; text-align: center;">리뷰어</div>', // <a href="https://map.kakao.com/link/map/오늘부터 마케팅,37.514243,126.898605" target="_blank"></a>  //인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능
        iwPosition = new kakao.maps.LatLng(37.514243, 126.898605); //인포윈도우 표시 위치
        
        const infowindow = new kakao.maps.InfoWindow({
        position : iwPosition,
        content : iwContent
        });
        infowindow.open(this.map, this.marker);  
    },        
  },
};
</script>

<!-- <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=da599293d059bbfb4bb80977e9f645eb"></script> -->
<!-- <script>
  var container = document.getElementById('map');
  var options = {
    center: new kakao.maps.LatLng(37.514243, 126.898605),
    level: 3
  };

  var map = new kakao.maps.Map(container, options);

  // 마커가 표시될 위치입니다 
  var markerPosition  = new kakao.maps.LatLng(37.514243, 126.898605); 
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
  position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var iwContent = '<div style="padding:5px;">리뷰어</div>', // <a href="https://map.kakao.com/link/map/오늘부터 마케팅,37.514243,126.898605" target="_blank"></a> 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);
</script> -->