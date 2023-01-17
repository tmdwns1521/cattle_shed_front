<template>
 <footer class="footer">
      <div>
        <div>
            <h1><a href="/">오늘부터 마케팅</a></h1>
        </div>
        <div>
          <nav>
            <ul>
              <li><a href="/#one_1">서비스소개</a></li>
              <li><a href="/#one_2">성공사례</a></li>
              <li><a href="/#one_3">진행절차</a></li>
              <li><a href="/#one_5">상담신청</a></li>
              <li><a href="/#one_4">찾아오는 길</a></li>
            </ul>
          </nav>
          <p>상호 엔에스엠(NSM)</p>
          <p>사업자등록번호 417-16-97188</p>
          <p>주소 서울시 영등포구 경인로 775, 1동 215호(에이스하이테크시티)</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
