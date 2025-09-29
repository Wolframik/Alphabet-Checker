document.addEventListener("DOMContentLoaded", () => 
{
  const textarea = document.getElementById("TextArea");

    textarea.addEventListener("input", () => 
    {
        console.log("Textarea updated:", textarea.value);
        CheckAlphabet(textarea.value);
    });
});

function CheckAlphabet(text)
{
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const seen = new Set();

  for (const char of text.toLowerCase()) 
    {
        if (alphabet.includes(char)) 
        {
            seen.add(char);
        }
    }

  // Find missing letters
  const missing = [...alphabet].filter(letter => !seen.has(letter));

  const p = document.getElementById("alphabet");
  p.textContent = missing.join('');

}