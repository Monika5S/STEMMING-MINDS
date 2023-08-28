function SetTopic(subject) {
  //   alert(subject);
  if (window) {
    localStorage.clear();
    localStorage.setItem("subject_name", subject);
  }
}
