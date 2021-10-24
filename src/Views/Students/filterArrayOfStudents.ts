import { StudentDataType } from "Types/App.types";

const filterArrayOfStudents = (studentsData: StudentDataType[], inputValue: string | null) => {
  if (inputValue === null) return studentsData;

  const searchKey = inputValue.toLowerCase();

  return studentsData.filter((data) => {
    if (searchKey !== "") {
      return Object.values(data).join(" ").toLowerCase().replaceAll("-", "").includes(searchKey);
    }
    return data;
  });
};

export default filterArrayOfStudents;
