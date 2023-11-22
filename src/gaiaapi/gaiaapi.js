export async function getSensorData() {
  try {
    console.log("Fetching...");
    const response = await fetch('http://192.168.40.152:8080/api/csv', {
      mode: 'no-cors',
    });
    console.log("Response: ", response);
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
