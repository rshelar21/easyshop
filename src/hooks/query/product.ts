export const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.log("error", error);
    if (error) {
      throw new Error(error.response.data.message);
    }
  }
};
