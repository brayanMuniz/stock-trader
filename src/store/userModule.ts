import { ActionTree } from "vuex";
import { GetterTree } from "vuex";
import { MutationTree } from "vuex";

// State Tree
const state: UserState = {
  userUid: null,
  userData: null,
  userProfilePictureUrl: null,
};

const getters: GetterTree<any, any> = {
  getUserUid(state) {
    return state.userUid;
  },
  getMyUserData(state) {
    return state.userData;
  },
  getMyProfilePictureURL(state) {
    return state.userProfilePictureUrl;
  },
};

const mutations: MutationTree<any> = {
  updateUserUid(state, newUid: string | null) {
    state.userUid = newUid;
  },
  updateMyData(state, myData: Portfolio | null) {
    state.userData = myData;
  },
  updateProfilePictureURL(state, newProfilePictureURL: string) {
    state.userProfilePictureUrl = newProfilePictureURL;
  },
};
const actions: ActionTree<any, any> = {};

// Exports
export default {
  actions,
  mutations,
  getters,
  state,
};

// Interfaces
interface UserState {
  userUid: string | null;
  userData: Portfolio | null;
  userProfilePictureUrl: string | null;
}

export interface Portfolio {
  name: string;
  currentFunds: number;
}
