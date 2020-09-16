const { promisify } = require(`util`);
const readFile = promisify(require(`fs`).readFile);
const core = require(`@actions/core`);

const run = async () => {
  const token = core.getInput(`token`);

  try {
    const fileContent = await readFile(`.npmrc`);
    if (!fileContent.toString().endsWith(token))
      throw new Error(`Token not found in .npmrc file`);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
