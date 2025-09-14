export class DataSource{
  async getUserData(){
    const response = await fetch('https://someBackendThatDoesNotExistYest');

    //We don't really know yet the contract of the response
    const fullData = await response.json();
  
    //Guessing response strcuture
    return {
      name: fullData.name,
      id: fullData.identifier
    }
  }
}