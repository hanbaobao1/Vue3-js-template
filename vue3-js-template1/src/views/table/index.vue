<template>
  <div>
    <button @click="c">1111</button>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance} from 'vue'

export default {
  name: "table",
  setup() {
    const  { proxy } = getCurrentInstance();
    const a = ref(99)
    let person = reactive({
      page: 1,
      limit: 1,
      records:''
    })
    let c = async()=>{
      let result = await proxy.$API.dataoverview.getOverViewlList(person.page, person.limit)
      if (result.code == 200) {
        person.records = result.data.records
      }
    }
    return {
      a,
      person,
      c
    }
  }
}
</script>
