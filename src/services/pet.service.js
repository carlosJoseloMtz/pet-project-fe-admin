

const createPet = async ({ name, description, company, location }) => {
  return {
    uid: 'random-uid-0101'
  }
}

const updatePet = async ({ uid, name, description, company, location, adopted }) => {
  return {
    uid
  }
}

export { createPet, updatePet };