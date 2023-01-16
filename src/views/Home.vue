<template>
  <div>
  <section class="main_1">
        <header>
            <h1><a href="/">오늘부터 마케팅</a></h1>
        </header>
        <div>
            <h2>370만 소상공인을 위한 솔루션</h2>
   <input type="button" value="문의하기" onclick="window.scrollTo(1350,1350);"  >
        </div>
    </section>

    <div class="main_2">
        <img src="@/assets/images/main_2.png" alt="마케팅 솔루션 이미지">
    </div>

    <section class="main_3">
        <div>
            <div>
                <p>검색하는 잠재고객에게 매장을 알리고<br>
                    리뷰/후기를 노출해 가게의 신뢰도를 높여보세요.</p>
                <h2>퍼포먼스 마케팅이 궁금하신가요?<br>
                    언제든지 문의 주세요.</h2>
                <p>브랜드의 성장 가능성을 열고,<br>
                    매출 상승의 가속화를직접 경험하세요.</p>
            </div>
            <div>
                <span>상위노출 효과를 직접 경험하세요!</span> <img src="@/assets/images/don.png">
                <form>
                    <input type="text" placeholder="이름">
                    <input type="tel" placeholder="전화번호">
                    <input type="text" placeholder="업체명">

                    <input type="checkbox" name="" id="checkbox">
                    <label for="checkbox">개인정보 수집 이용 및 마케팅 활용 전체 동의</label>

                    <input type="button" value="무료상담 신청하기">
                </form>
            </div>
        </div>
    </section>
    
    <div class="kakaobg">
        <div class="main_4">
            <div><img src="@/assets/images/main_kakao1.png" alt=""></div>
            <div class="bxslider">
                <div><img src="@/assets/images/kakaotalk_img1.png" alt="kakaotalk_img1"></div>
                <div> <img src="@/assets/images/kakaotalk_img2.png" alt="kakaotalk_img2"></div>
                <div><img src="@/assets/images/kakaotalk_img3.png" alt="kakaotalk_img3"></div>
                <div><img src="@/assets/images/kakaotalk_img4.png" alt="kakaotalk_img4"></div> 
            </div>
        </div>
    </div>

    <div class="reV">
        <div class="reviewbox">
            <img src="@/assets/images/main_reV.png" alt="">
        </div>
    </div>

    <section class="main_5">
        <div>
            <ul class="bxslider">
                <li><img src="@/assets/images/main_3.png" alt=""></li>
                <li><img src="@/assets/images/main_4.png" alt=""></li>
                <li><img src="@/assets/images/2_slider1.png" alt=""></li>
                <li><img src="@/assets/images/2_slider2.png" alt=""></li>
                <li><img src="@/assets/images/2_slider3.png" alt=""></li>
                <li><img src="@/assets/images/2_slider4.png" alt=""></li>
                <li><img src="@/assets/images/2_slider5.png" alt=""></li>
                <li><img src="@/assets/images/2_slider6.png" alt=""></li>
                <li><img src="@/assets/images/2_slider7.png" alt=""></li>
                <li><img src="@/assets/images/2_slider8.png" alt=""></li>
                <li><img src="@/assets/images/2_slider9.png" alt=""></li>
                <li><img src="@/assets/images/2_slider10.png" alt=""></li>
                <li><img src="@/assets/images/2_slider11.png" alt=""></li>
                <li><img src="@/assets/images/2_slider12.png" alt=""></li>
            </ul>
        </div>
    </section>
    
    <div class="blogimgBox">
        <img src="@/assets/images/main_5.png" alt="">
    </div>
    </div>
</template>

<script>
import BottomBanner from "@/components/Banner/BottomBanner.vue";
import Check from "@/components/Modal/Check.vue";
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
import "../assets/style/import.css";

export default {
  name: "Home",
  components: { BottomBanner, Check, Slick },
  data() {
    return {
      main3: {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
      activeBtn: "btn1",
      activeBtn2: "btn1",
      input: {
        name: null,
        phone: null,
        company: null,
        place: null,
      },
      check: [],
      disabled: false,
    };
  },
  mounted(){
    $(document).ready(function(){
      $('.bxslider').bxSlider({
        auto: true,
        mode: 'horizontal',
        speed: 300,
        pause: 1000,
        slideWidth: 550
      })
    })
  },
  methods: {
    goToTop() {
      window.scrollTo(0, 0);
    },
    async submit() {
      const name = document.getElementById('name-input').value;
      const company = document.getElementById('company-input').value;
      const place = document.getElementById('place-input').value;
      const tel = document.getElementById('tel-input').value;
      const data = {
        name,
        company,
        place,
        tel
      }
      const result = await this.$axios.post(
          "http://49.247.32.231:5000/api/Maketingdbs",
          data
      );
      alert("상담 신청이 완료 되었습니다.")
      location.reload();
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    upDown() {
      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, 1000);
    },
  },
  watch: {
    check(n, o) {
      if (o.length == 0) {
        this.$bvModal.show("check");
      }
    },
  },
};
</script>

