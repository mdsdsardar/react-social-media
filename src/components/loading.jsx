const LoadingSpinner = () => {
  return (
    <center>
      <button class="btn btn-primary spinner" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm "
          aria-hidden="true"
        ></span>
        <span role="status">Loading...</span>
      </button>
    </center>
  );
};
export default LoadingSpinner;
