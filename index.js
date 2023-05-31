const { promisify } = require(`util`);
const writeFile = promisify(require(`fs`).writeFile);
const core = require(`@actions/core`);

const run = async () => {
  const token = core.getInput(`token`);

  try {
    if (!token.match(/^[^\n\r]*$/)) {
      throw new Error(`Invalid token: must not contain line breaks`);
    }

    await writeFile(`.npmrc`, `//npm.pkg.github.com/:_authToken=${token}\n`, { flag: `a+` });
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
