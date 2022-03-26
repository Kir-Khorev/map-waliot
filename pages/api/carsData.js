export default async function carsData() {
    const _apiBase = 'https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json';
    const res = await fetch(_apiBase);
    if (!res.ok) {
        throw new Error(`Could not fetch, received ${res.status}`)
    }
    return await res.json()
}