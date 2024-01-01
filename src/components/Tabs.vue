<template>
  <b-tabs content-class="p-2" no-fade>
<!--    <b-tab title="메인" active>-->
      <div class="justify-content-between align-items-center mb-3 d-flex">
        <h2 class="fw-900 m-0">으뜸농원</h2>
        <b-button @click="openModal" style="margin-left: -500px">이번달현황</b-button>
        <Modal ref="modalRef"
          :ModificationRequired="ModificationRequired"
          :thisMonthModification="thisMonthModification"
          :thisMonthDelivery="thisMonthDelivery"
          :NotAppraise="NotAppraise"
          :vaccinationFirst="vaccinationFirst"
          :vaccinationSecond="vaccinationSecond"
        />
        <b-row class="justify-content-end align-items-center">
          <!-- 달력 검색 -->
          <b-col>
            <!-- {{ date }} -->
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-input-group class="position-relative">
                <b-form-input
                  :aria-describedby="ariaDescribedby"
                  v-model="selectedDate"
                  class="form-control"
                  type="text"
                  placeholder="월별 검색"
                  readonly
                  @click="showMonthPicker()"
                ></b-form-input>
                <month-picker
                  class="position-absolute"
                  style="z-index: 10; top: 3rem"
                  lang="ko"
                  editable-year
                  date-format="%Y년 %n"
                  no-default
                  @change="showDate"
                  v-show="monthPickerVisible"
                ></month-picker>
                <b-input-group-append>
                  <b-btn
                    @click="[clearDate(), getCurrentMonthsalesData()]"
                    variant="outline-dark"
                    style="border-radius: 0"
                    >초기화</b-btn
                  >
                </b-input-group-append>
                <b-btn
                  @click="[clearDate(), getSalesData()]"
                  variant="outline-dark"
                  >전체데이터 보기</b-btn
                >
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- 검색어 -->
          <b-col>
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-input-group>
                <b-form-input
                  id="filter-input"
                  v-model="filter"
                  :aria-describedby="ariaDescribedby"
                  type="search"
                  placeholder="검색어"
                ></b-form-input>
                <b-input-group-append>
                  <b-btn
                    @click="filter = null"
                    :disabled="!filter"
                    variant="outline-dark"
                    style="
                      border-top-left-radius: 0;
                      border-bottom-left-radius: 0;
                    "
                    >초기화</b-btn
                  >
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <b-table
        head-variant="dark"
        bordered
        responsive
        hover
        selectable
        select-mode="single"
        @row-selected="onRowSelected"
        :sticky-header="true"
        :items="liveStocks"
        :fields="fields"
        class="dataTable salesTable"
        :filter="filter"
        ref="selectableTable"
        label-sort-asc=""
        label-sort-desc=""
        label-sort-clear=""
        show-empty
        emptyFilteredText="찾으시는 검색어와 일치하는 정보가 없습니다."
        emptyText="데이터 정보가 없습니다."
      >
        <template #head()="data">
          <div @click="isEllipsis = !isEllipsis" class="cursor-pointer">
            {{ data.label }}
          </div>
        </template>
        <template #cell()="data">
          <span>
            {{ data.value ? data.value : empty }}
          </span>
        </template>

        <!-- No -->
        <template #cell(index)="row">
          {{ row.index + 1 }}
        </template>
        <!-- 성별 -->
        <template #cell(gender)="row">
          <span v-if="row.item.gender.includes('female')"> 암</span>
          <span v-else>수</span>
        </template>
        <!-- 출생일자 -->
        <template #cell(birth)="row">
          <span> {{ row.item.birth.split('T')[0] }} </span>
        </template>
        <!-- 수정예정일 -->
        <template #cell(scheduledModificationDate)="row">
          <span v-if="row.item.scheduledModificationDate"> {{ row.item.scheduledModificationDate.split('T')[0] }} </span>
        </template>
        <!-- 수정일자 -->
        <template #cell(modificationDate)="row">
          <span v-if="row.item.modificationDate"> {{ row.item.modificationDate.split('T')[0] }} </span>
        </template>
        <!-- 정액번호 -->
        <template #cell(semenNum)="row">
          <span v-if="row.item.semenNum != null && row.item.semenNum != 'NULL'"> {{ row.item.semenNum }} </span>
        </template>
        <!-- 정액번호 -->
        <template #cell(attemptsNum)="row">
          <span v-if="row.item.attemptsNum != null && row.item.attemptsNum != 'NULL'"> {{ row.item.attemptsNum }} </span>
        </template>
        <!-- 아비번호 -->
        <template #cell(fatherNumber)="row">
          <span v-if="row.item.fatherNumber != null && row.item.fatherNumber != 'NULL'"> {{ row.item.fatherNumber }} </span>
        </template>
        <!-- 감정 -->
        <template #cell(appraise)="row">
          <span v-if="row.item.appraise === false || row.item.appraise === 'false'">X</span>
          <span v-else>O</span>
        </template>
        <!-- 분만예정일 -->
        <template #cell(bornSchedule)="row">
          <span v-if="row.item.bornSchedule"> {{ row.item.bornSchedule.split('T')[0] }} </span>
        </template>
        <!-- 주사(1차) -->
        <template #cell(vaccinationFirst)="row">
          <span v-if="row.item.vaccinationFirst"> {{ row.item.vaccinationFirst.split('T')[0] }} </span>
        </template>
        <!-- 주사(2차) -->
        <template #cell(vaccinationSecond)="row">
          <span v-if="row.item.vaccinationSecond"> {{ row.item.vaccinationSecond.split('T')[0] }} </span>
        </template>
        <!-- 아비번호 -->
        <template #cell(moFatherNumber)="row">
          <span v-if="row.item.moFatherNumber != null && row.item.moFatherNumber != 'NULL'"> {{ row.item.moFatherNumber }} </span>
        </template>
        <!-- 비육 -->
        <template #cell(fattening)="row">
          <span v-if="row.item.fattening === false || row.item.fattening === 'false'">X</span>
          <span v-else>O</span>
        </template>
        <!-- 분만일자 -->
        <template #cell(deliveryDay)="row">
          <span v-if="row.item.deliveryDay"> {{ row.item.deliveryDay.split('T')[0] }} </span>
        </template>
      </b-table>
<!--    </b-tab>-->
<!--    <b-tab title="완료">완료</b-tab>-->
<!--    <b-tab title="취소">취소</b-tab>-->
<!--    <b-tab title="기타상품">기타상품</b-tab>-->
  </b-tabs>
</template>

<script>
import { MonthPicker } from "vue-month-picker";
import Modal from "@/components/Modal.vue";

export default {
  name: "Tabs",
  props: ["currentData", "liveStocks", "orderItems", "numberItems", "ModificationRequired", "thisMonthModification", "thisMonthDelivery", "NotAppraise", "vaccinationFirst", "vaccinationSecond"],
  components: {
    MonthPicker,
    Modal
  },
  data() {
    return {
      isEllipsis: false,
      fields: [
        {
          key: "index",
          label: "No",
          // isRowHeader: true,
          // sortable: true,
          variant: "secondary",
          thClass: "",
          // filterByFormatted: true,
        },
        {
          key: "fattening",
          label: "비육",
          sortable: true,
          thClass: "table-secondary",
        },
        {
          key: "entityIdentificationNumber",
          label: "개체식별번호",
          thClass: "table-secondary",
        },
        {
          key: "fatherNumber",
          label: "아비번호",
          thClass: "table-secondary",
        },
        {
          key: "parentEntityIdentificationNumber",
          label: "모 개체식별번호",
          thClass: "table-secondary",
        },
        {
          key: "moFatherNumber",
          label: "모 아비번호",
          thClass: "table-secondary",
        },
        {
          key: "gender",
          label: "성별",
          thClass: "table-secondary",
        },
        {
          key: "birthMonth",
          label: "개월령",
          sortable: true,
          thClass: "table-secondary",
        },
        {
          key: "birth",
          label: "출생일자",
          sortable: true,
          thClass: "table-secondary",
        },
        {
          key: "scheduledModificationDate",
          label: "수정예정일",
          sortable: true,
          thClass: "table-secondary",
        },
        {
          key: "modificationDate",
          label: "수정일자",
          sortable: true,
          thClass: "table-secondary",
        },
        {
          key: "semenNum",
          label: "정액번호",
          thClass: "table-secondary",
        },
        {
          key: "attemptsNum",
          label: "차수",
          sortable: true,
          thClass: "table-secondary",
        },
        {
          key: "appraise",
          label: "감정",
          sortable: true,
          thClass: "table-secondary",
        },
        {
          key: "vaccinationFirst",
          label: "주사(1차)",
          thClass: "table-secondary",
        },
        {
          key: "vaccinationSecond",
          label: "주사(2차)",
          thClass: "table-secondary",
        },
        {
          key: "bornSchedule",
          label: "분만예정일",
          sortable: true,
          thClass: "table-secondary",
        },
        {
          key: "deliveryDay",
          label: "분만일자",
          sortable: true,
          thClass: "table-secondary",
        },
      ],
      filter: "",
      empty: "",
      date: { from: null, to: null, month: null, monthIndex: null, year: null },
      selectedDate: null,
      monthPickerVisible: false,
    };
  },
  methods: {
    openModal() {
      this.$refs.modalRef.openModal(); // 모달 열기
    },
    onRowSelected(items) {
      this.$emit("onRowSelected", items);
    },
    async showDate(date) {
      this.date = date;
      this.selectedDate = this.date.year + "년 " + this.date.month;

      this.$emit("onMonthsalesData", data);
    },
    getSalesData() {
      this.$emit("getSalesData");
    },
    getCurrentMonthsalesData() {
      this.$emit("getCurrentMonthsalesData");
    },
    clearDate() {
      this.date = null;
      this.selectedDate = null;
      this.monthPickerVisible = false;
    },
    showMonthPicker() {
      this.monthPickerVisible = !this.monthPickerVisible;
    },
  },
  mounted() {},
  watch: {
    date(n, o) {
      // console.log(n, o);
      if (n) {
        // console.log(n);
        this.monthPickerVisible = false;
      }
    },
  },
};
</script>

<style scoped></style>
