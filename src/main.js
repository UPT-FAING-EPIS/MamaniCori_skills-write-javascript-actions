import getJoke from "./joke.js";
import * as core from "@actions/core";

async function run() {
  try {
    const joke = await getJoke();
    console.log(joke);
    
    // Esto define la salida que otros pasos de GitHub Actions podrán usar
    core.setOutput("joke", joke);
  } catch (error) {
    // Si algo falla, notificamos a GitHub que la acción falló
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();