
const getCurrentUser = () => {
  return {
    name: 'someone',
    uid: 'john@doe.com',
    company: { uid: 'somecompanyuid' }
  };
}

export { getCurrentUser };