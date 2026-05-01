// Example demonstrating Optional Chaining (?.) and Nullish Coalescing (??)

const user = {
  id: 101,
  profile: {
    name: "Asha",
    settings: {
      theme: null,
      language: "en"
    }
  }
};

// ❌ Traditional way (can throw error if profile/settings is missing)
try {
  console.log(user.profile.settings.theme);
} catch (e) {
  console.log("Error accessing theme:", e.message);
}

// ✅ Modern way with Optional Chaining (?.)
console.log(user?.profile?.settings?.theme); // null
console.log(user?.profile?.settings?.mode);  // undefined (no error)

// ✅ Nullish Coalescing (??)
// If theme is null or undefined, default to 'light'
const theme = user?.profile?.settings?.theme ?? "light";
console.log("Theme:", theme); // light

// ✅ Combine both
const language = user?.profile?.settings?.language ?? "en-US";
console.log("Language:", language); // en



// Explanation:

// 1-    ?. → optional chaining checks each step before accessing.

// user?.profile?.settings?.mode → returns undefined instead of throwing "Cannot read property 'mode' of undefined".


// 2-   ?? → nullish coalescing only applies default if the value is null or undefined (not falsy like 0 or "").

// theme ?? "light" → since theme is null, result is "light".

// 👉 Together, they make code safer and cleaner when working with APIs or complex objects.