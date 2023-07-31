<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-descript">
      <!-- b-button 오른쪽 위로 배치 -->
      <div class="modal-close-btn-wrapper">
        <b-button class="modal-close-btn" @click="closeModal">닫기</b-button>
      </div>

      <!-- ModificationRequired 데이터 -->
      <div class="data-container">
        <h3>13개월이상 미수정</h3>
        <ul>
          <li v-for="item in ModificationRequired" :key="item[0]">
            개체번호: {{ item[0] }} / 개월수: {{ item[1] }}
          </li>
        </ul>
      </div>

      <!-- thisMonthModification 데이터 -->
      <div class="data-container">
        <h3>이번달 수정예정일</h3>
        <ul>
          <li v-for="item in thisMonthModification" :key="item[0]">
            개체번호: {{ item[0] }} / 개월수: {{ item[1] }} / 예정일: {{ item[2] }}
          </li>
        </ul>
      </div>

      <!-- thisMonthDelivery 데이터 -->
      <div class="data-container">
        <h3>이번달 출산예정일</h3>
        <ul>
          <li v-for="item in thisMonthDelivery" :key="item[0]">
            개체번호: {{ item[0] }} / 개월수: {{ item[1] }} / 예정일: {{ item[2] }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Modal",
  props: ["ModificationRequired", "thisMonthModification", "thisMonthDelivery"],
  data() {
    return {
      isOpen: false, // 모달의 초기 상태는 닫혀있음
    };
  },
  mounted() {
    console.log(this.ModificationRequired);
    console.log(this.thisMonthModification);
    console.log(this.thisMonthDelivery);
  },
  methods: {
    openModal() {
      this.isOpen = true; // 모달 열기
    },
    closeModal() {
      this.isOpen = false; // 모달 닫기
    },
  },
};
</script>

<style>
/* 모달 스타일 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}


.modal-descript {
  /* 모달 내용의 스타일을 설정할 수 있습니다. */
  width: 90%;
  height: 850px;
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 10px;
  justify-content: space-between; /* 데이터들을 오른쪽으로 정렬하기 위해 추가 */
  flex-direction: row;
}

.modal-close-btn {
  margin-top: 10px;
}

.data-container {
  /* 데이터를 각각 오른쪽으로 정렬하여 표시하기 위해 추가 */
  flex: 1;
  margin-right: 10px;
  text-align: center;
}

.modal-close-btn-wrapper {
  /* close 버튼을 하단으로 이동시키는 스타일 추가 */
  position: absolute;
  top: 8%;
  right: 8%;
}
</style>