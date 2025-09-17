import { v4 as uuidv4 } from "uuid";
const LS_USERS = "nf_users_v1";
const LS_MOVIES = "nf_movies_v1";

const defaultUsers = [
    {
        id: uuidv4(),
        name: "Demo  Admin",
        email: "admin@example.com",
        password: "admin123",
        role: "admin",
    },
    {
        id: uuidv4(),
        name: "Demo User",
        email: "user@example.com",
        password: "user123",
        role: "user",
    },
];
const defaultMovies = [

    {
        id: uuidv4(),
        title: "The Mountain Echo",
        description: "A journey into the mysterious peaks.",
        img: "https://picsum.photos/seed/m1/600/900",
        duration: "2h 10m",
        rating: 8.2
    },
    {
        id: uuidv4(),
        title: "Midnight City",
        description: "When the city sleeps, the story wakes.",
        img: "https://picsum.photos/seed/m2/600/900",
        duration: "1h 50m",
        rating: 7.5
    },
    {
        id: uuidv4(),
        title: "Ocean of Stars",
        description: "Sci-fi adventure across galaxies.",
        img: "https://picsum.photos/seed/m3/600/900",
        duration: "2h 30m",
        rating: 8.7
    },
  {
    id: uuidv4(),
    title: "Silent Whisper",
    description: "Secrets unfold in a quiet town.",
    img: "https://picsum.photos/seed/m4/600/900",
    duration: "1h 45m",
    rating: 7.9
  },
  {
    id: uuidv4(),
    title: "Crimson Horizon",
    description: "An epic saga of war and honor.",
    img: "https://picsum.photos/seed/m5/600/900",
    duration: "2h 20m",
    rating: 8.4
  },
  {
    id: uuidv4(),
    title: "Neon Dreams",
    description: "Love and betrayal in a futuristic city.",
    img: "https://picsum.photos/seed/m6/600/900",
    duration: "1h 55m",
    rating: 7.6
  },
  {
    id: uuidv4(),
    title: "Eternal Sands",
    description: "A quest through endless deserts.",
    img: "https://picsum.photos/seed/m7/600/900",
    duration: "2h 5m",
    rating: 8.1
  },
  {
    id: uuidv4(),
    title: "Shadow of Time",
    description: "Mysteries of a forgotten era.",
    img: "https://picsum.photos/seed/m8/600/900",
    duration: "2h 15m",
    rating: 8.3
  },
  {
    id: uuidv4(),
    title: "Broken Compass",
    description: "Navigating life’s unpredictable journeys.",
    img: "https://picsum.photos/seed/m9/600/900",
    duration: "1h 40m",
    rating: 7.4
  },
  {
    id: uuidv4(),
    title: "Starlight Serenade",
    description: "Music and love across a summer night.",
    img: "https://picsum.photos/seed/m10/600/900",
    duration: "1h 50m",
    rating: 7.8
  },
  {
    id: uuidv4(),
    title: "The Last Beacon",
    description: "Survival against all odds in a post-apocalyptic world.",
    img: "https://picsum.photos/seed/m11/600/900",
    duration: "2h 25m",
    rating: 8.5
  },
  {
    id: uuidv4(),
    title: "Velvet Horizon",
    description: "Romance and mystery by the sea.",
    img: "https://picsum.photos/seed/m12/600/900",
    duration: "2h 0m",
    rating: 7.9
  },
  {
    id: uuidv4(),
    title: "Crimson Alley",
    description: "Dark secrets of the city streets.",
    img: "https://picsum.photos/seed/m13/600/900",
    duration: "1h 55m",
    rating: 8.0
  }
];

// read localStorage if not data present
function read(key, fullback) {
    const raw = localStorage.getItem(key);
    if (!raw) return fullback;
    try {
        return JSON.parse(raw);
    } catch (e) {
        return fullback;
    }
}
// write data to localStorage
function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
// intialize data in localStorage
export function initMockData() {
    if (!localStorage.getItem(LS_USERS)) write(LS_USERS, defaultUsers);
    if (!localStorage.getItem(LS_MOVIES)) write(LS_MOVIES, defaultMovies);
}

// for signup
export function signup({ name, email, password, role = "user" }) {
    const users = read(LS_USERS, []);
    if (users.find((u) => u.email === email)) {
        return { error: "Email already registered" };
    }
    const user = { id: uuidv4(), name, email, password, role };
    users.push(user);
    write(LS_USERS, users);
    return { user };
}
// for login
export function login({ email, password }) {
    const users = read(LS_USERS, []);
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
        return { error: "Invalid email or password" };
    }
    const token = btoa(user.id + ":" + Date.now());
    return { user: { id: user.id, name: user.name, email: user.email, role: user.role }, token };
}
// get all movies
export function getMovies() {
    return read(LS_MOVIES, []);
}
// add movies
export function addMovie(movie) {
    const movies = read(LS_MOVIES, []);
    const newMovie = { ...movie, id: uuidv4() };
    movies.unshift(newMovie);
    write(LS_MOVIES, movies);
    return newMovie;
}
//  update movie 
export function editMovie(updated) {
    const movies = read(LS_MOVIES, []);
    const idx = movies.findIndex((m) => m.id === updated.id);
    if (idx === -1) return { error: "Movie not found" };
    movies[idx] = { ...movies[idx], ...updated };
    write(LS_MOVIES, movies);
    return movies[idx];
}

// delete movie
export function removeMovie(id) {
    let movies = read(LS_MOVIES, []);
    movies = movies.filter((m) => m.id !== id);
    write(LS_MOVIES, movies);
    return true;
}

// book movies
export function bookMovie({ userId, movieId, seats = 1 }) {
    const booking = read("nf_bookings_v1", []);
    const newBooking = { id: uuidv4(), userId, movieId, seats, date: new Date().toISOString() };
    booking.push(newBooking);
    write("nf_bookings_v1", booking);
    return newBooking;
}

// initialize mock data
initMockData();