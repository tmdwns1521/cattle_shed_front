<template>
 <footer class="footer">
        <div>
            <h1><a href="/">오늘부터 마케팅</a></h1>
        </div>
        <div>
            <p>대표 민경재</p>
            <p>상호 엔에스엠(NSM)</p>
            <p>사업자등록번호 417-16-97188</p>
            <p>주소 서울시 영등포구 경인로 775, 1동 215호(에이스하이테크시티)</p>
            <p>© 오늘부터 마케팅. All rights reserved.</p>
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
