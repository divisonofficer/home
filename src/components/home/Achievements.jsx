const Achievements = ({ achievements }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginBottom: "4rem",
      }}
    >
      <h2 className="display-4 pb-5 text-center">{achievements.heading}</h2>
      {achievements.data.map((data, index) => {
        return (
          <div
            key={`${data.title}-${data.subtitle}-${index}`}
            style={{
              display: "flex",
              direction: "row",
              backgroundColor: index % 2 === 0 ? "#f8f9fa" : "white",
              width: "100%",
              maxWidth: "64rem",
              minHeight: "3rem",
              alignItems: "center",
              paddingTop: "1rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
            }}
          >
            <p
              className="lead"
              style={{
                flex: 3,
              }}
            >
              {data.title}
            </p>
            <p
              className="lead"
              style={{
                flex: 1,
              }}
            >
              {data.subtitle}
            </p>
            <p
              className="lead"
              style={{
                flex: 1,
              }}
            >
              {data.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Achievements;
