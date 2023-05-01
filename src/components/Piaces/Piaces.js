const Piaces = () => {
  const position = new Array(8).fill("").map((x) => new Array(8).fill(""));

  position[0][0] = "wr";

  return (
    <div className="pieces">
      {position.map((r, rank) =>
        r.map((f, file) => (position[rank][file] ? position[rank][file] : null))
      )}
    </div>
  );
};

export default Piaces;
