import { defineStore } from "pinia";
import { ref } from "vue";

export const useFriendStore = defineStore("friend", () => {
  // 더미 데이터
  const friendList = ref([
    {
      seq: 1,
      name: "김싸피",
      status: 0,
      categoryName: "알고리즘",
    },
    { seq: 2, name: "이싸피", status: 1, categoryName: "CS" },
    { seq: 3, name: "박싸피", status: 2, categoryName: "기획" },
  ]);

  return { friendList };
});
