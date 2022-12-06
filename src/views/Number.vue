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
                        <td>A</td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>E</td>
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
                    <th colspan="2" class="thRadiusL lookup" style="width: 200px;">번호</th>
                    <th class="thRadiusR phoneNum" style="width: 220px;">{{this.onNumberCount.toLocaleString()}}</th>
                </tr>
                <tr> 
                    <th style="width: 80px;">번호</th>
                    <th style="width: 200px;">ID</th>
                    <th>전화번호</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item,i) in onNumber">
                    <div></div>
                    <tr>
                        <td style="width: 16.6%;">{{(i+1)}}</td>
                        <td style="width: 41.5%;">{{item.blog_id}}</td>
                        <td style="width: 300px;">{{item.Number}}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>

    <div class="tbox2 NoNum">
        <table class="NumTable2">
            <thead>
                <tr>
                    <th class="thRadiusL lookup" style="width: 135px;">조회완료</th>
                    <th class="thRadiusR phoneNum" style="width: 220px;">{{this.finishdata.toLocaleString()}}/{{this.allCount.toLocaleString()}}</th>
                </tr>
                <tr> 
                    <th style="width: 80px;">번호</th>
                    <th style="width: 200px;">ID</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item,i) in finishIds">
                    <div></div>
                    <tr>
                        <td style="width: 40.3%;">{{(i+1)}}</td>
                        <td style="width: 200px;">{{item.blog_id}}</td>
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
                    <th class="thRadiusL" style="width: 100px;">조회예정</th>
                    <th class="thRadiusR" style="width: 200px;">{{this.readyNumberCount.toLocaleString()}}</th>
                </tr>
                <tr>
                    <th style="width: 80px;">번호</th>
                    <th style="width: 200px;">ID</th>
                </tr>
            </thead>
            <tbody style="overflow-y: scroll; height: 795px; display:table-caption;">
                <template v-for="(item,i) in readyNumber">
                    <div></div>
                    <tr>
                        <td style="width: 35%;">{{(i+1)}}</td>
                        <td style="width: 250px;">{{item.blog_id}}</td>
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
