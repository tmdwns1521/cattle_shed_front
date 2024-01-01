import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    readyNumber: null,
    readyNumberCount: null,
    onNumber: null,
    onNumberCount: null,
    finishIds: null,
    finishdata: null,
    allCount: null,
    // 
    serviceId: null,
    // name: null,
    role: null,
    token: null,
    liveStocks: [],
  },
  getters: {
    liveStocks: (state) => state.liveStocks,
    readyNumber: (state) => state.readyNumber,
    readyNumberCount: (state) => state.readyNumberCount,
    onNumber: (state) => state.onNumber,
    onNumberCount: (state) => state.onNumberCount,
    finishIds: (state) => state.finishIds,
    finishdata: (state) => state.finishdata,
    allCount: (state) => state.allCount,
    isLogin(state) {
      return state.token === null ? false : true;
    },
    isSuper(state) {
      return state.role === "A" ? true : false;
    },
  },
  mutations: {
    setreadyNumber(state, datas) {
      state.readyNumber = datas.data.dataList;
      state.readyNumberCount = datas.data.data;
    },
    setonNumber(state, datas) {
      state.onNumber = datas.data.dataList;
      state.onNumberCount = datas.data.data;
    },
    setfinishIds(state, datas) {
      state.finishIds = datas.data.dataList,
      state.finishdata = datas.data.data,
      state.allCount = datas.data.allCount
      // state.onNumber = datas.data;
      // state.onNumberCount = datas.data.length;
    },
    setToken(state, _token) {
      state.token = _token;
      localStorage.setItem("token", JSON.stringify(_token));
      axios.defaults.headers.common["Authorization"] = _token;
    },
    setServiceId(state, _serviceId) {
      state.serviceId = _serviceId;
      localStorage.setItem("serviceId", JSON.stringify(_serviceId));
    },
    setRole(state, _role) {
      state.role = _role;
      // localStorage.setItem("role", JSON.stringify(_role));
    },
    // setName(state, _name) {
    //   state.name = _name;
    //   localStorage.setItem("name", JSON.stringify(_name));
    // },
    setLiveStocks(state, data) {
      state.liveStocks = data;
    },
    logout() {
      localStorage.clear();
      axios.defaults.headers.common["Authorization"] = undefined;
      location.replace("/login");
    },
  },
  actions: {
    async getliveStock({ commit }) {
      try {
        console.log(`${process.env.VUE_APP_API_URL}/livestocks`);
        const res = await axios.get(`${process.env.VUE_APP_API_URL}/livestocks`);
        commit("setLiveStocks", res?.data);
      } catch (err) {
        console.log('API오류', err);
      }
    },
    setToken: ({ commit }, _token) => {
      commit("setToken", _token);
    },
    setServiceId: ({ commit }, _serviceId) => {
      commit("setServiceId", _serviceId);
    },
    setRole: ({ commit }, _role) => {
      commit("setRole", _role);
    },
    // setName: ({ commit }, _name) => {
    //   commit("setName", _name);
    // },
    logout: ({ commit }) => {
      commit("logout");
    },
  },
  modules: {},
});
