function ErrorPage(props) {
  return (
    <div class="flex flex-row justify-center mx-auto p-6 space-x-10">
      ERROR ERROR
      {props.children}
    </div>
  );
}

export default ErrorPage;
