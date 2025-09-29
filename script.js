document.addEventListener("DOMContentLoaded", () => 
{
  const textarea = document.getElementById("TextArea");

    textarea.addEventListener("input", () => 
    {
        const value = textarea.value;
        console.log("Textarea updated:", textarea.value);


    });

});