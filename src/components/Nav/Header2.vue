<template>
    <div>
      <TopBanner :show="topBanner" class="topBanner" />
      <header class="shadow-sm position-relative" >
        <div class="header2">
          <div class="d-flex logoCenter">
            <div class="adminIstrator"><span>ADMIN</span>ISTRATOR</div>
            <nav class="left-nav">
              <b-navbar-nav>
                <b-nav-item class="navList"> <span>매주관리</span>
                    <ul>
                      <b-nav-item to="/manage/sales" :class="path.includes('/sales') ? 'active' : ''"> <!-- ? v-if="$store.getters.isSuper" 관리자만 볼수 있게 해주는 코드-->
                         <span>매출관리</span>
                      </b-nav-item>

                      <b-nav-item to="/manage/order" :class="path.includes('/order') ? 'active' : ''">
                        <span>주문관리</span>
                      </b-nav-item>
                    </ul>
                </b-nav-item>
                
                <b-nav-item to="/manage/number" :class="path.includes('/number') ? 'active' : ''">
                  <span>번호관리</span>
                </b-nav-item>

                <b-nav-item to="/manage/email" :class="path.includes('/email') ? 'active' : ''">
                  <span>메일발송</span>
                </b-nav-item>

                <b-nav-item to="/manage/manus" :class="path.includes('/manus') ? 'active' : ''">
                  <span>원고작성</span>
                </b-nav-item>


                <b-nav-item class="navList"> <span>문의데이터</span>
                    <ul>
                      <b-nav-item to="/manage/questionData" :class="path.includes('/questionData') ? 'active' : ''"> <!-- ? v-if="$store.getters.isSuper" 관리자만 볼수 있게 해주는 코드-->
                         <span>CPA DB</span>
                      </b-nav-item>

                      <b-nav-item to="/manage/userDB" :class="path.includes('/userDB') ? 'active' : ''">
                        <span>사용자 DB</span>
                      </b-nav-item>
                    </ul>
                </b-nav-item>

                </b-navbar-nav>
              </nav>
            <b-nav-item-dropdown right v-if="$store.getters.isLogin" class="Azone" style="list-style: none;">
              <template #button-content>
                <div style="line-height: 50px;">
                  <span style="color: white;">{{ $store.state.serviceId }}</span>
                </div>
                <div style="line-height: 50px;">
                  <a href="/" @click="logout()">로그아웃</a>
                </div>
              </template>
            </b-nav-item-dropdown>
            <!-- <b-nav-item-dropdown right>
              <template #button-content>
                <b-avatar></b-avatar>
                <span>회원이름</span>
              </template>
              <b-dropdown-item href="/manage">관리페이지</b-dropdown-item>
              <b-dropdown-item href="#">로그아웃</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </div>
        </div>
      </header>
    </div>
  </template>
  
  <script>
  import TopBanner from "@/components/Banner/TopBanner.vue";

  
  export default {
    name: "Header",
    components: { TopBanner },
    props: {
      topBanner: Boolean,
    },
    methods: {
      logout() {
        this.$store.dispatch("logout");
      },
    },
      computed: {
        path() {
          return this.$route.path;
        },
      },
  };

  
  
  
  </script>
  
  <style></style>