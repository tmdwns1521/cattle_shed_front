<template>
    <section class="number-page">
        <div class="tbox1">
            <table class="NumTable1">
                <thead>
                    <tr>
                        <th class="thRadiusL">ID</th>
                        <th class="thRadiusR">PWD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" style="width: 150px;"></td>
                        <td><input type="text" style="width: 174px;"></td>
                    </tr>
                    <tr>
                        <td>KingJeb</td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>KingJeb</td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>KingJeb</td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>KingJeb</td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>KingJeb</td>
                        <td>123123</td>
                    </tr>
                </tbody>
            </table>
            <div class="PMbtnBox">
                <input type="button" value="+"><br>
                <input type="button" value="-">
            </div>
        </div>
    <!-- <input type="button" value="+">
    <input type="button" value="-"> -->

    <div class="tbox2">
        <input type="button" value="파일 저장">
        <table class="NumTable2">
            <thead>
                <tr>
                    <th colspan="2" class="thRadiusL lookup">번호</th>
                    <th class="thRadiusR phoneNum">{{this.onNumberCount.toLocaleString()}}</th>
                </tr>
                <tr> 
                    <th>번호</th>
                    <th>ID</th>
                    <th>전화번호</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item,i) in onNumber">
                    <div></div>
                    <tr>
                        <td>{{(i+1)}}</td>
                        <td>{{item.blog_id}}</td>
                        <td>{{item.Number}}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>

    <div class="tbox2 NoNum">
        <table class="NumTable2">
            <thead>
                <tr>
                    <th colspan="2" class="thRadiusL lookup">조회완료</th>
                    <th class="thRadiusR phoneNum">{{this.finishdata.toLocaleString()}}/{{this.allCount.toLocaleString()}}</th>
                </tr>
                <tr> 
                    <th>번호</th>
                    <th>ID</th>
                    <th>전화번호</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item,i) in finishIds">
                    <div></div>
                    <tr>
                        <td>{{(i+1)}}</td>
                        <td>{{item.blog_id}}</td>
                    </tr>
                </template>

            </tbody>
        </table>
    </div>


    <div class="tbox3">    
        <table class="NumTable3">
            <input type="text">
            <input type="button" value="저장">
            <thead>
                <tr>
                    <th class="thRadiusL">조회예정</th>
                    <th class="thRadiusR">{{this.readyNumberCount.toLocaleString()}}</th>
                </tr>
                <tr>
                    <th>번호</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item,i) in readyNumber">
                    <div></div>
                    <tr>
                        <td>{{(i+1)}}</td>
                        <td>{{item.blog_id}}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</section>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import { mapGetters } from 'vuex';
export default {
  name: "Number",
  components: { Tabs },
  computed: {
    ...mapGetters({
        readyNumber: `readyNumber`,
        readyNumberCount: `readyNumberCount`,
        onNumber: `onNumber`,
        onNumberCount: `onNumberCount`,
        finishIds: `finishIds`,
        finishdata: `finishdata`,
        allCount: `allCount`,
    }),
  },
  async created() {
    await this.$store.dispatch(`getreadyNumber`);
    await this.$store.dispatch(`getonNumber`);
    await this.$store.dispatch(`getfinishIds`);
  }
}
</script>
