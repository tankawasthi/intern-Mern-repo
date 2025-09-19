import { create } from "zustand";

/**
 * @typedef {Object} Habit
 * @property {string} id
 * @property {string} name
 * @property {"daily"|"weekly"} frequency
 * @property {string[]} completedDates
 * @property {string} createdAt
 */

const useHabitStore = create((set) => ({
  habits: [],

  addHabit: (name, frequency) =>
    set((state) => {
      const newHabit = {
        id: crypto.randomUUID(),
        name,
        frequency,
        completedDates: [],
        createdAt: new Date().toISOString(),
      };
      return { habits: [...state.habits, newHabit] };
    }),
}));

export default useHabitStore;
