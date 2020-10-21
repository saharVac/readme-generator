// CHECKING IF GITHUB USER EXISTS
const axios = require("axios")

async function userExists(username) {
  let accountExists;
  const queryUrl = `https://api.github.com/users/${username}`
  try {
    const response = await axios.get(queryUrl)
    .then( () => {accountExists = true})
    .catch( () => {accountExists = false})
  } catch (err) {
    console.log(err);
  }
  return accountExists
}

module.exports = userExists;