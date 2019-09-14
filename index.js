const { promisify } = require(`util`);
const exec = promisify(require(`child_process`).exec);
const core = require(`@actions/core`);

const run = async () => {
  const token = core.getInput(`token`);

  try {
    await exec(`echo "//npm.pkg.github.com/:_authToken=${token}" >> .npmrc`);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
