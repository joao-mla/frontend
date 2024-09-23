const asideStyle =
  "w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl";
const h2Style = "mb-8 font-bold uppercase md:text-xl text-stone-200";
const ulStyle = "mt-8";
const buttonStyle =
  "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
const activeButtonStyle = " text-stone-200 bg-stone-800";
const addProjectButtonStyle =
  "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";

export default function Sidebar({
  projects,
  onCreateProject,
  onSelectProject,
  selected,
}) {
  function handleClick() {
    onCreateProject({
      title: "New Project",
      description: "",
      dueDate: "",
    });
  }

  return (
    <aside className={asideStyle}>
      <h2 className={h2Style}>Your projects</h2>
      <ul className={ulStyle}>
        {projects.map((project) => {
          let style = buttonStyle;
          if (selected && selected.id === project.id)
            style += activeButtonStyle;
          return (
            <li key={project.id}>
              <button
                className={style}
                onClick={() => {
                  onSelectProject(project);
                }}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
      <button className={addProjectButtonStyle} onClick={handleClick}>
        + Add Project
      </button>
    </aside>
  );
}
