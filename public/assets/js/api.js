const API = {
    async getLastWorkout() {
        let response;
        try {
            response = await fetch("/api/workouts");
        } catch (err) {
            console.log(err);
        }
        const json = await response.json();

        return json[json.length - 1];
    },
    async addExercise(data) {
        let id = location.search.split("=")[1];

        const response = await fetch("/api/workouts/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const json = await response.json();

        return json;
    },
    async createWorkout(data = {}) {
        const res = await fetch("/api/workout", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });

        const json = await response.json();

        return json;
    },

    async getWorkoutsInRange() {
        const response = await fetch(`/api/workouts/range`);
        const json = await response.json();

        return json;
    },
};