import classes from "./starRating.module.css";

// From ((Thumbnails + Food)) Comp+Page
function StarRating({ stars, size }) {
  const styles = {
    width: size + "px",
    height: size + "px",
    marginRight: size / 6 + "px",
  };

  function Star({ number }) {
    const halfNumber = number - 0.5;

    return stars >= number ? (
      <img
        src="data:image/jpeg;base64,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"
        style={styles}
        alt={number}
      />
    ) : stars >= halfNumber ? (
      <img
        src="data:image/png;base64,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"
        style={styles}
        alt={number}
      />
    ) : (
      <img
        src="data:image/png;base64,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"
        style={styles}
        alt={number}
      />
    );
  }

  return (
    <div className={classes.rating}>
      {[1, 2, 3, 4, 5].map((number) => (
        <Star key={number} number={number} />
      ))}
    </div>
  );
}

export default StarRating;

StarRating.defaultProps = {
  size: 18,
};