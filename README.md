# Next.js 15 Hydration Mismatch Bug

This repository demonstrates a common hydration mismatch error in Next.js 15 applications.  The error occurs when a dynamic value is rendered on a client-side route that differs from the value rendered on the server-side.  This can lead to unexpected behavior and visual inconsistencies.

## Problem

The `About` page renders a random number.  Since the random number is generated on both the client and server, it's highly likely they will differ, causing a hydration mismatch error.

## Solution

The solution involves ensuring that the dynamic value is either:

1. **Not rendered in the initial render:**  If possible, move the dynamic value into an effect or use it to update the UI after the initial render is complete.
2. **Deterministic:**  If the dynamic value must be rendered during the initial render, ensure it is consistently calculated both client-side and server-side (e.g., using a shared data source).