import { ActionTree } from "vuex";
import { GetterTree } from "vuex";
import { MutationTree } from "vuex";
const state = {
  userUid: String() || null,
};

const getters: GetterTree<any, any> = {
  getUserUid(state) {
    return state.userUid;
  },
};

const mutations: MutationTree<any> = {
  updateUserUid(state, newUid: string | null) {
    state.userUid = newUid;
  },
};
const actions: ActionTree<any, any> = {};
export default {
  actions,
  mutations,
  getters,
  state,
};
