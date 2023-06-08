<template>
  <main class="relative flex justify-center items-baseline h-screen">
    <div class="border rounded-xl shadow-lg p-4 mt-10 max-w-3xl w-full bg-white">
      <header class="flex justify-between items-center">
        <h1 class="text-3xl font-semibold">People Invited to My Party</h1>
      </header>
      <div class="flex flex-col gap-2 mt-4 items-baseline">
        <input @keypress.enter="addInvitee" v-model="name" class="w-1/2 px-4 py-1.5 border rounded" placeholder="Name..." type="text">
        <select @keypress.enter="addInvitee" v-model="gender" class="w-1/2 border px-4 py-1.5 rounded">
          <option :value="Gender.Male">Male</option>
          <option :value="Gender.Female">Female</option>
        </select>
        <InviteeCards v-for="invitee in invitees" :invitee="invitee" />
        <div>
          <p>Females = {{ count.female }}</p>
          <p>Males = {{ count.male }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import InviteeCards from '../components/InviteeCards.vue'

enum Gender {
  Male,
  Female
}

interface Invitee {
  id: Number,
  name: String,
  gender: Gender
}

const name = ref<string>('')
const gender = ref(Gender.Male)
const invitees = ref<Invitee[]>([])

const addInvitee = ():void => {
  if(!name.value) return
  invitees.value.push({
    id: Math.floor(Math.random() * 100000),
    name: name.value,
    gender: gender.value
  })

  name.value = ''
  gender.value = Gender.Male
}

const count = computed<{
  female: Number,
  male: Number
}>(() => {
  return invitees.value.reduce((countObj, invitee) => {
    if(invitee.gender === Gender.Male) {
      return {
        ...countObj,
        male: countObj.male + 1
      }
    }
    return {
      ...countObj,
      female: countObj.female + 1
    }
  }, { male: 0, female: 0 })
})
</script>