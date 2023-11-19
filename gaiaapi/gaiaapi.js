export async function getSensorData() {
  try {
    const response = await fetch('localhost:8080/api/csv', {
      mode: 'no-cors',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseJson = await response.json();
    console.log("JSON:", responseJson);
    return responseJson; // Return the entire data object
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
