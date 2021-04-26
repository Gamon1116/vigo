import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// vuex에서 제공하는 인스턴스
export default new Vuex.Store({
  // 데이터 (data)
  state: {
    sooins: [
      {id : 1, text: 'buy a car', checked: false},
      {id : 2, text: 'play game', checked: false},
    ],
    users: [

    ]
  },
  //데이터 변경하려면 여기안에서만 해야함
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    ADD_SOOIN(state, value) {
      state.sooins.push({
        id: Math.random(),
        text: value,
        checked: false
      });
    },
  
    TOGGLE_SOOIN(state, { id, checked }){
      const index = state.sooins.findIndex( sooin => {
        return sooin.id === id;
      });
      state.sooins[index].checked = checked;
      },
    
    DELETE_SOOIN(state, sooinId){
      const index = state.sooins.findIndex(sooin => {
        return sooin.id == sooinId;
      });
      state.sooins.splice(index, 1);
    },
  },
  // 함수 (methods)
  actions: {
    getUsers({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        commit('SET_USERS', res.data);
      });
    },
      addSooin({ commit }, value) {
        setTimeout( function() {
          commit('ADD_SOOIN', value);
        }, 500);
      },
      toggleSooin({ commit }, payload) {
        setTimeout( function() {
          commit('TOGGLE_SOOIN', payload)
        }, 500);
      },
      deleteSooin({ commit }, sooinId) {
        setTimeout( function() {
          commit('DELETE_SOOIN', sooinId);
        }, 500);
      }
  },
  // computed
  getters: {
    numberOfCompletedSooin: state => {
      return state.sooins.filter(sooin => sooin.checked).length;
    }
  }
});
