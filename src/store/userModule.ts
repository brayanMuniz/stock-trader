import { ActionTree } from "vuex";
import { GetterTree } from "vuex";
import { MutationTree } from "vuex";
const state: UserState = {
  userUid: String() || null,
  userData: null,
};

const getters: GetterTree<any, any> = {
  getUserUid(state) {
    return state.userUid;
  },
  getMyUserData(state) {
    return state.userData;
  },
};

const mutations: MutationTree<any> = {
  updateUserUid(state, newUid: string | null) {
    state.userUid = newUid;
  },
  updateMyData(state, myData: Portfolio | null) {
    state.userData = myData;
  },
};
const actions: ActionTree<any, any> = {};
export default {
  actions,
  mutations,
  getters,
  state,
};

interface UserState {
  userUid: string | null;
  userData: Portfolio | null;
}

interface Portfolio {
  name: string;
  currentFunds: number;
}
