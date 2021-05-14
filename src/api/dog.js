export async function fetchImages (breed) {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/12`)
    const data = await res.json();
    return data.message;
}
