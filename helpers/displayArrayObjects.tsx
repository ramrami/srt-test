export const displayArrayObjects = (objArr) => {
  return arrayifyObjects(objArr).join(", ");
};
export const arrayifyObjects = (objArr) => {
  return objArr.map((e) => {
    return e.name;
  });
};
