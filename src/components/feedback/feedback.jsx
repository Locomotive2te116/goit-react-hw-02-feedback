export const FeedbackOptions = ({ options, handleFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          type="button"
          key={option}
          onClick={() => handleFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
