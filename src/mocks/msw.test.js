const testGet = async () => {
  const res = await fetch("http://localhost:8081/", { method: "GET" });
  const jsonData = await res.json();
  console.log(jsonData);
};

export default testGet;
