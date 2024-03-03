function myFunction() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var text = body.editAsText();

  var str = "hello world";
  var split = str.split("");

  for (var i = 0; i < split.length; i++) {
    text.appendText(split[i]);
    Utilities.sleep(100); // Adjust the delay time (in milliseconds) as needed
    doc.saveAndClose(); // Save and close the document after appending each character
    doc = DocumentApp.openById(doc.getId()); // Reopen the document for further editing
    body = doc.getBody();
    text = body.editAsText();
  }
}
