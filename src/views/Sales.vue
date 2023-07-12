<template>
  <div class="sales-page">
    <!-- 매출관리 -->
    <div style="max-width: 1850px">
      <!-- 담당자 매출정보 -->
      <b-row class="mb-4">
        <b-col>
          <div class="text-center h-100 bg-white border p-4" style="border-radius: 10px">
            <b-row class="justify-content-between align-items-center">
              <b-col class="text-18 border-end">
                <b-card-title class="opacity-50" v-if="!currentData.manager">
                  으뜸농원
                </b-card-title>
                <b-card-title class="fw-900" v-else>
                  {{ currentData.manager }}
                </b-card-title>
              </b-col>
              <b-col class="text-18 border-end">
                <strong class="">축산현황</strong>
                <p class="opacity-50 m-0">
                  {{ allCow }}
                </p>
              </b-col>
              <b-col class="text-18 border-end">
                <strong>암소</strong>
                <p class="opacity-50 m-0">
                  {{ femaleCow }}
                </p>
              </b-col>
              <b-col class="text-18">
                <strong>수소</strong>
                <p class="opacity-50 m-0">
                  {{ maleCow }}
                </p>
              </b-col>
              <!-- <b-col class="text-18 border-end">
                <strong>취소 매출</strong>
                <p class="opacity-50 m-0">
                  <span>\</span> 0
                  
                </p>
              </b-col>
              <b-col class="text-18">
                <strong>합계</strong>
                <p class="opacity-50 m-0">
                  <span>\</span> 0
                 
                </p>
              </b-col> -->
            </b-row>
          </div>
        </b-col>
      </b-row>
      <!-- 확인/수정/등록 데이터정보 -->
      <b-row class="mb-4">
        <b-col>
          <b-table-simple small bordered fixed class="currentTable">
            <b-tbody>
              <b-tr>
                <b-th>개체식별번호</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                      @keyup="oninput_entity_identification_number()"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.entity_identification_number"
                      @keyup="oninput_entity_identification_number()"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.entity_identification_number"
                      @keyup="oninput_entity_identification_number()"
                    ></b-form-input>
                  </template>
                </b-td>
                <b-th>성별선택</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-select
                      v-else
                      v-model="genderType"
                      :disabled="!updateTag"
                    >
                      <b-form-select-option value="female"
                        >암</b-form-select-option
                      >
                      <b-form-select-option value="male"
                        >수</b-form-select-option
                      >
                    </b-form-select>
                  </template>
                  <template v-else>
                    <b-form-select v-model="genderType"
                      ><b-form-select-option value="female"
                        >암</b-form-select-option
                      >
                      <b-form-select-option value="male"
                        >수</b-form-select-option
                      ></b-form-select
                    >
                  </template>
                </b-td>
                <b-th>모 개체식별번호</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                      @keyup="oninput_parent_entity_identification_number()"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.parent_entity_identification_number"
                      @keyup="oninput_parent_entity_identification_number()"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.parent_entity_identification_number"
                      @keyup="oninput_parent_entity_identification_number()"
                    ></b-form-input>
                  </template>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>출생일자</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                      @keyup="birthFormated()"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.birth"
                      @keyup="birthFormated()"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.birth"
                      @keyup="birthFormated()"
                    ></b-form-input> </template
                ></b-td>
                <b-th>수정일자</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.modification_date"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.modification_date"
                      @keyup="modification_date_Formated()"
                    ></b-form-input>
                  </template>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>분만일자</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                      @keyup="delivery_day_Formated()"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.delivery_day"
                      @keyup="delivery_day_Formated()"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.delivery_day"
                      @keyup="delivery_day_Formated()"
                    ></b-form-input> </template
                ></b-td>
                <b-th>감정확인</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-select
                      v-else
                      v-model="appraiseType"
                      :disabled="!updateTag"
                    >
                      <b-form-select-option value=true
                        >O</b-form-select-option
                      >
                      <b-form-select-option value=false
                        >X</b-form-select-option
                      >
                    </b-form-select>
                  </template>
                  <template v-else>
                    <b-form-select v-model="appraiseType"
                      ><b-form-select-option value=true
                        >O</b-form-select-option
                      >
                      <b-form-select-option value=false
                        >X</b-form-select-option
                      ></b-form-select
                    >
                  </template>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <b-row class="justify-content-between align-items-center">
            <b-col class="text-end">
              <!-- 신규등록일 때 -->
              <template v-if="addTag == true">
                <b-btn variant="dark" class="ms-2" @click="addData()"
                  >등록완료</b-btn
                >
                <b-btn class="ms-2" variant="danger" @click="addCancel()"
                  >취소</b-btn
                >
              </template>
              <!-- 수정일 때 -->
              <template v-else-if="updateTag == true">
                <b-btn variant="dark" class="ms-2" @click="updateData()"
                  >수정완료</b-btn
                >
                <b-btn class="ms-2" variant="danger" @click="updateCancel()"
                  >취소</b-btn
                >
              </template>
              <!-- 기본 -->
              <template v-else>
                <b-btn variant="dark" class="ms-2" @click="addTag = true"
                  >신규등록</b-btn
                >
                <b-btn
                  class="ms-2"
                  @click="updateTag = true"
                  :disabled="isEmpty(currentData)"
                  >수정</b-btn
                >
                <b-btn
                  class="ms-2"
                  variant="danger"
                  :disabled="isEmpty(currentData)"
                  @click="deleteData(currentData.id)"
                  >삭제</b-btn
                >
              </template>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    <!-- {{ currentData }}
    {{ newData }} -->
    <Tabs
      @onRowSelected="onRowSelected"
      @onMonthsalesData="onMonthsalesData"
      @getCurrentMonthsalesData="getCurrentMonthsalesData"
      @getSalesData="getSalesData"
      :salesItems="salesItems"
    />
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import itmes from "core-js/stable/dom-collections";
export default {
  name: "Sales",
  components: { Tabs },
  data() {
    return {
      id: '',
      salesItems: null,
      currentData: {},
      cachedData: {},
      femaleCow: 0,
      maleCow: 0,
      allCow: 0,
      newData: {
        entity_identification_number: '',
        gender: '',
        parent_entity_identification_number: '',
        birth: '',
        modification_date: '',
        appraise: '',
        delivery_day: '',
      },
      paymentType: "card",
      appraiseType: false,
      genderType: "female",
      addTag: false,
      updateTag: false,
      empty: "",
      totalPricePredicted: null,
      totalPriceConfirm: null,
      managerPricePredicted: null,
      managerPriceConfirm: null,
    };
  },
  methods: {
    delivery_day_Formated() {
      if (this.newData.delivery_day.length !== 8) return false;
      const yearA = this.newData.delivery_day.substring(0, 4);
      const monthA = this.newData.delivery_day.substring(4, 6);
      const dayA = this.newData.delivery_day.substring(6, 8);

      // 날짜 형식 변경
      const dateData = `${yearA}.${monthA}.${dayA}`;
      const parts = dateData.split('.').map(part => part.trim());
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];

      // Create a new Date object with the parsed values
      const date = new Date(`${year}-${month}-${day} 00:00:00`);
      date.setDate(date.getDate() + 1);

      // Format the date as a string in the desired format
      this.newData.delivery_day = date.toISOString().split('T')[0];
      this.currentData.delivery_day = date.toISOString().split('T')[0];
    },
    modification_date_Formated() {
      if (this.newData.modification_date.length !== 8) return false;
      const yearA = this.newData.modification_date.substring(0, 4);
      const monthA = this.newData.modification_date.substring(4, 6);
      const dayA = this.newData.modification_date.substring(6, 8);

      // 날짜 형식 변경
      const dateData = `${yearA}.${monthA}.${dayA}`;
      const parts = dateData.split('.').map(part => part.trim());
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];

      // Create a new Date object with the parsed values
      const date = new Date(`${year}-${month}-${day} 00:00:00`);
      date.setDate(date.getDate() + 1);

      // Format the date as a string in the desired format
      this.newData.modification_date = date.toISOString().split('T')[0];
      this.currentData.modification_date = date.toISOString().split('T')[0];
    },
    birthFormated() {
      if (this.newData.birth.length !== 8) return false;
      const yearA = this.newData.birth.substring(0, 4);
      const monthA = this.newData.birth.substring(4, 6);
      const dayA = this.newData.birth.substring(6, 8);

      // 날짜 형식 변경
      const dateData = `${yearA}.${monthA}.${dayA}`;
      const parts = dateData.split('.').map(part => part.trim());
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];

      // Create a new Date object with the parsed values
      const date = new Date(`${year}-${month}-${day} 00:00:00`);
      date.setDate(date.getDate() + 1);

      // Format the date as a string in the desired format
      this.newData.birth = date.toISOString().split('T')[0];
      this.currentData.birth = date.toISOString().split('T')[0];
    },
    oninput_entity_identification_number() {
      const EIN = this.newData.entity_identification_number
            .replace(/[^0-9]/g, '')
            .replace(/^(\d{3})(\d{4})(\d{4})(\d{1})$/, `$1 $2 $3 $4`);
      const EINV = this.currentData.entity_identification_number
            .replace(/[^0-9]/g, '')
            .replace(/^(\d{3})(\d{4})(\d{4})(\d{1})$/, `$1 $2 $3 $4`);
      this.newData.entity_identification_number = EIN;
      this.currentData.entity_identification_number = EINV;
    },
    oninput_parent_entity_identification_number() {
      const PEIN = this.newData.parent_entity_identification_number
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{3})(\d{4})(\d{4})(\d{1})$/, `$1 $2 $3 $4`);
      const PEINV = this.currentData.parent_entity_identification_number
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{3})(\d{4})(\d{4})(\d{1})$/, `$1 $2 $3 $4`);
      this.newData.parent_entity_identification_number = PEIN
      this.currentData.parent_entity_identification_number = PEINV
    },
    // 삭제
    async deleteData(item) {
      this.$bvModal
        .msgBoxConfirm("기록을 삭제하시겠습니까?", {
          title: "처리기록 삭제",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "삭제",
          cancelTitle: "취소",
          footerClass: "p-2",
          centered: true,
          noCloseOnBackdrop: true,
          titleClass: "fw-900",
          footerBgVariant: "white",
        })
        .then((value) => {
          if (value) {
            // console.log(item);
            // const data =
            this.$axios
              .delete("http://49.247.39.189:5000/api/deleteData", {
                data: { id: item },
                headers: {},
              })
              .then((res) => {
                console.log(res);
                if (res.data.result === "fail") {
                  window.alert("삭제 권한 없음");
                } else {
                  window.alert("삭제 완료");
                  window.location.reload();
                }
              });
            // console.log(data);
          }
        });
    },
    // 신규등록 완료
    async addData() {
      let birth;
      let modification_date;
      let appraise;
      let gender;
      let delivery_day;
      const entity_identification_number = this.newData.entity_identification_number;
      const parent_entity_identification_number = this.newData.parent_entity_identification_number;
      if (this.newData.birth) {
        birth = this.newData.birth;
      }
      if (this.newData.modification_date) {
        modification_date = this.newData.modification_date;
      }
      if (this.newData.delivery_day) {
        delivery_day = this.newData.delivery_day;
      }
      if (this.appraiseType) {
        appraise = this.appraiseType;
      }
      if (this.genderType) {
        gender = this.genderType;
      }
      const data = {
        entity_identification_number,
        gender,
        parent_entity_identification_number,
        birth,
        modification_date,
        appraise,
        delivery_day,
      }
      await this.$axios.post('http://49.247.39.189:5000/api/createNew', data);
      // console.log(createNew);
      location.reload();
    },
    // 신규등록 취소
    addCancel() {
      this.addTag = false;
    },
    // 수정 완료
    async updateData() {
      let birth;
      let modification_date;
      let appraise;
      let gender;
      let delivery_day;
      const entity_identification_number = this.currentData.entity_identification_number;
      const parent_entity_identification_number = this.currentData.parent_entity_identification_number;
      if (this.currentData.birth) {
        birth = this.currentData.birth;
      }
      if (this.currentData.modification_date) {
        modification_date = this.currentData.modification_date;
      }
      if (this.currentData.delivery_day) {
        delivery_day = this.currentData.delivery_day;
      }
      if (this.currentData.appraise) {
        appraise = this.appraiseType;
      }
      if (this.currentData.gender) {
        gender = this.genderType;
      }
      const data = {
        id: this.currentData.id,
        entity_identification_number,
        gender,
        parent_entity_identification_number,
        birth,
        modification_date,
        appraise,
        delivery_day,
      }
      await this.$axios.post('http://49.247.39.189:5000/api/updateNew', data);
      location.reload();
      this.updateTag = false;
    },
    // 수정 취소
    updateCancel() {
      this.currentData = Object.assign({}, this.cachedData);
      this.currentData.cardData = Object.assign({}, this.cachedData.cardData);

      this.updateTag = false;
    },
    onRowSelected(items) {
      this.addTag = false;
      let item = items[0];
      this.currentData = { ...item };

      this.cachedData = Object.assign({}, this.currentData);
      this.cachedData.cardData = Object.assign({}, this.currentData.cardData);


      this.managerPricePredicted = 0;
      this.managerPriceConfirm = 0;
      const managerDataList = [];
      const managerPList = [];
      const managerCList = [];

      this.salesItems.filter((el) => {
        if (el.manager === this.currentData.manager) {
          managerDataList.push(el);
        }
      });
      for (const i of managerDataList) {
        managerPList.push(i.AmountOfPayment);
        if (i.Approved === true) {
          managerCList.push(i.AmountOfPayment);
        }
      }

      this.managerPList = managerPList;
      this.managerCList = managerCList;

      this.managerPList.forEach((item) => {
        item = parseInt(item);
        if (isNaN(item) === false) {
          this.managerPricePredicted += parseInt(item);
        }
      });
      this.managerCList.forEach((item) => {
        item = parseInt(item);
        if (isNaN(item) === false) {
          this.managerPriceConfirm += parseInt(item);
        }
      });
    },
    async getCurrentMonthsalesData() {
      const data = await this.$axios.get(
        "http://49.247.39.189:5000/api/getCattleShed"
      );
      this.onList(data);
    },
    async getSalesData() {
      const data = await this.$axios.get(
        "http://49.247.39.189:5000/api/getCattleShed"
      );
      // console.log(data.data);
      this.onList(data);
    },

    onMonthsalesData(data) {
      // console.log("onMonthsalesData", data);
      this.onList(data);
    },

    onList(data) {
      data.data.forEach(e => {
        if (e.gender === 'male') {
          this.maleCow += 1
        } else if (e.gender === 'female') {
          this.femaleCow += 1
        }
        e.edit = e.id;
        const dateA = new Date(e.birth);
        const dateB = new Date();
        const diffMSec = dateB.getTime() - dateA.getTime();
        const diffDate = Math.round((diffMSec / (24 * 60 * 60 * 1000)) / 30);
        e.birth = String(e.birth).split(' ')[0];
        if (e.modification_date !== null) {
          e.modification_date = String(e.modification_date).split(' ')[0];
        }
        if (e.modification_date !== null && e.appraise === "true") {
          const modification_date = new Date(e.modification_date);
          modification_date.setMonth(modification_date.getMonth() + 9);
          modification_date.setDate(modification_date.getDate() + 10);
          console.log(modification_date);
          e.scheduled_delivery_day = modification_date.toLocaleDateString();
        }
        if (e.delivery_day !== null){
          e.delivery_day = String(e.delivery_day).split(' ')[0];
          const delivery_day = new Date(e.delivery_day);
          delivery_day.setDate(delivery_day.getDate() + 45);
          console.log(delivery_day);
          e.scheduled_modification_date = delivery_day.toLocaleDateString();
        }
        e.month_old = diffDate + 1;
        const birth_year = parseInt(e.month_old / 12);
        const birth_month = e.month_old % 12;
        e.month_old = `${birth_year}년 ${birth_month}개월`
        e.status = '사육';
        e.gender = e.gender === 'female' ? '암' : '수';
        e.appraise = e.appraise === "false" ? 'X' : 'O';
        e.speed_dial = e.entity_identification_number.split(' ')[2];
      })
      this.allCow = data.data.length;
      const datas = data.data;
      const dataList = [];

      const totalPList = [];
      const totalCList = [];

      this.totalPricePredicted = 0;
      this.totalPriceConfirm = 0;

      for (const i of datas) {
        dataList.push(i);
        totalPList.push(i.AmountOfPayment);
        if (i.Approved === true) {
          totalCList.push(i.AmountOfPayment);
        }
      }
      this.salesItems = dataList.reverse();
      this.totalPList = totalPList;
      this.totalCList = totalCList;

      this.salesItems.forEach((el, index) => {
        this.$set(el, "index", index);
      });
      this.totalPList.forEach((item) => {
        item = parseInt(item);
        if (isNaN(item) === false) {
          this.totalPricePredicted += parseInt(item);
        }
      });
      this.totalCList.forEach((item) => {
        item = parseInt(item);
        if (isNaN(item) === false) {
          this.totalPriceConfirm += parseInt(item);
        }
      });
    },
  },
  mounted() {
    this.getCurrentMonthsalesData();
  },
  computed: {},
};
</script>

<style></style>
