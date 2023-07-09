import CoursesBanner from "@/app/(general-space)/courses/components/courses-banner";
import CourseCard from "@/app/(general-space)/courses/components/course-card";

const CoursePage = () => {
  return (
    <>
        <CoursesBanner/>


        <div className="flex flex-wrap gap-5 justify-start mt-14">
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>

        </div>
    </>
  );
};

export default CoursePage;
