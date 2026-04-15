import { School } from "@/src/types";

export const mockSchools: School[] = [
  {
    id: "123456",
    name: "School Name",
    address: "842 Gulf Street Rosedale, NY 11422",
  },
  {
    id: "123457",
    name: "School Name",
    address: "842 Gulf Street Rosedale, NY 11422",
  },
];

export const watchingCourse = {
  id: "1",
  title: "Lets Math Together",
  subtitle: "Chapter 1",
  image: require("@/assets/images/course_image1.png"),
  progress: 0.75,
};
