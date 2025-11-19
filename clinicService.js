const API_URL = "http://localhost:8080/clinicas";

export async function getClinics() {
    const response = await fetch(API_URL);
    return response.json();
}

export async function createClinic(clinic) {
    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(clinic)
    });
}
