const Group = ({ type, id, setfun,completedTasks}) => {

  const groupHandler = (e) => {
    console.log("clicked", id);
    setfun(id);
  };

  const buttonClickHandler = (e) => {
    e.stopPropagation();
    console.log(id,e.target.value);
    setfun(id,Number(e.target.value))
  };

  return (
    <>
      <div className="card-type" onClick={groupHandler}>
        <h2>Group {id}</h2>
        {type.map((t) => {
          return (
            <button
              className={`card-type-button${completedTasks[id-1][t.id]===true ? "-completed" : ""}`}
              key={t.id}
              onClick={buttonClickHandler}
              value={t.id}
            >
              {t.type}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Group;
