export const selectLibrary = (libraryId) => {
  console.log(libraryId);
  return {
    type: 'select_library',
    payload: libraryId
  };
};