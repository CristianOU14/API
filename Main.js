const peticionApi = async (dep) => 
{
  const base = "https://api-colombia.com/";
  const enpoint = "api/v1/Department/";
  const url = `${base}${enpoint}`;
  try 
  {
    const response = await axios.get(url);
    const departamento = response.data.find(departamento => departamento.name === dep);
    return departamento;
  } 
  catch (err) 
  {
    console.log(err);
    return null; 
  }
};
async function printData() 
{
  const respuesta = document.getElementById('showInfo');
  const selectItem = document.getElementById('Consulta_Dep');
  const element = await peticionApi(selectItem.options[selectItem.selectedIndex].text);
  
  if (element) 
    {
      respuesta.innerHTML = 
      `
        <div id = "Info">
          <h3>Nombre: ${element.name}</h3>
          <h4>Descripcion:${element.description}</h4>
          <h3>Numero de minicipios: ${element.municipalities}</h3>
          <h3>Superficie: ${element.surface}</h3>
          <h3>Población : ${element.population}</h3>
          <h3>Prefijo de teléfono : ${element.phonePrefix}</h3>
        </div>
      `;
    } 
  else 
    {
      respuesta.innerHTML = `<h3>Departamento no encontrado</h3>`;
    }
}