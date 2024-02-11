import Job from "./job";
export default function Ex() {
  return (
    <>
      <Job id={1} salary={90000} position="Senior SDE" company="Amazon" />
      <Job id={2} salary={12000} position="Junior SDE" company="Google" />
      <Job id={3} salary={10000} position="Project Manager" company="Netflix" />
    </>
  );
}
