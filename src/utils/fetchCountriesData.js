const fetchCountriesData = async (url) => {
try {
    const finalUrl = 'https://restcountries.com/v3.1/' +  String(url); 
    const response = await fetch(finalUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }
    const data = await response.json();
    data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    return data;
  } catch (error) {
    return { error: error.message };
  }
}

export default fetchCountriesData;