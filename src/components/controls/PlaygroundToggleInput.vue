<template>
  <div class="control">
    <div class="header">
      <div class="label">{{ label }}</div>
    </div>
    
    <div class="control-grid">
      <label class="switch">
        <input type="checkbox" v-model="model" >
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();

const model = defineModel({
  required: true,
});
</script>

<style scoped>
.control {
  margin-bottom: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: .5rem;
  align-items: center;
}

.label {
  text-align: center;
  font-size: .8rem;
}

.value {
  color: var(vt-c-indigo);
  font-size: .7rem;
}

.control-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: .5rem;
  justify-items: center;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>
