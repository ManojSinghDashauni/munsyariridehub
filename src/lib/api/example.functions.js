// Example helper function, migrated to plain JS.
export async function getGreeting({ data }) {
  return {
    greeting: `Hello, ${data.name}!`,
    mode: process.env.NODE_ENV ?? "unknown",
  };
}
