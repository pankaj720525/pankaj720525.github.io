<template>
    <div class="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg">
      <h2 class="text-2xl font-bold mb-4 text-center dark:text-white text-xl">Feedback Form</h2>
  
      <form @submit.prevent="submitFeedback">
        <!-- Name -->
        <div class="mb-4">
          <label class="block font-medium text-sm dark:text-white">Name</label>
          <input v-model="form.name" type="text" class="w-full p-2 border rounded dark:bg-gray-900 dark:text-white" required />
        </div>
  
        <!-- Email -->
        <div class="mb-4">
          <label class="block font-medium text-sm dark:text-white">Email</label>
          <input v-model="form.email" type="email" class="w-full p-2 border rounded dark:bg-gray-900 dark:text-white" required />
        </div>
  
        <!-- Description -->
        <div class="mb-4">
          <label class="block font-medium text-sm dark:text-white">Description</label>
          <textarea v-model="form.description" class="w-full p-2 border rounded h-28 dark:text-white dark:bg-gray-900" required maxlength="1000"></textarea>
          <p class="text-sm text-gray-500 dark:text-white">{{ form.description.length }}/1000</p>
        </div>
  
        <!-- hCaptcha -->
        <div class="mb-4">
          <h-captcha 
            sitekey="8cf896e2-1588-47ca-9d9c-ebcaa7c8814a" 
            @verify="onCaptchaVerified">
          </h-captcha>
        </div>
  
        <!-- Submit Button -->
        <button 
          type="submit" 
          class="bg-blue-500 text-white px-4 py-2 rounded"
          :disabled="!captchaToken">
          Submit
        </button>
      </form>
  
      <p v-if="message" class="mt-4 text-green-500">{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import axios from "axios";
  import HCaptcha from "@hcaptcha/vue3-hcaptcha";
  
  const form = ref({
    name: "",
    email: "",
    description: "",
  });
  
  const captchaToken = ref(null);
  const message = ref("");
  
  
  const onCaptchaVerified = (token) => {
    captchaToken.value = token;
  };
  
  const submitFeedback = async () => {
    if (!captchaToken.value) {
      alert("Please complete the captcha!");
      return;
    }
  
    message.value = "Feedback submitted successfully.";
    form.value = { name: "", email: "", description: "" };
    return;
    try {
      const response = await axios.post("http://localhost:3000/submit-feedback", {
        ...form.value,
        captcha: captchaToken.value,
      });
  
      message.value = response.data.message;
      form.value = { name: "", email: "", description: "" };
    } catch (error) {
      message.value = "Error submitting feedback.";
    }
  };
  </script>
  
  <style scoped>
    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
  </style>
  