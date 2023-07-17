// storage.js module
let visits = parseInt(localStorage.getItem('visits')) || 0;

export function getVisits() {
    return visits;
}

export function incrementVisits() {
    visits++;
    localStorage.setItem('visits', visits);
}
