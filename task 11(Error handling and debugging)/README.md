BUG #1 — Network Error Handling Issue
UserList.jsx

Problems included
No error handling, No try/catch
No loading state
Unhandled rejected promise
Crash on network failure


UG #2 — Memory Leak (useEffect Cleanup Missing)
Timer.jsx

Interval never cleared → memory leak


BUG #3 — Infinite Re-render
Counter.jsx
State update during render


BUG #4 — State Mutation Issue
CrashApp.jsx

Direct state mutation

