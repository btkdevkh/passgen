const rangenum = document.getElementById('rangenum');
const rangenumOutput = document.getElementById('rangenum-output');
const outputGenpass = document.getElementById('output-genpass');
const generateBtn = document.getElementById('generateBtn');

const lowercaseBtn = document.getElementById('lowercase');
const uppercaseBtn = document.getElementById('uppercase');
const numericsBtn = document.getElementById('numerics');
const symbolsBtn = document.getElementById('symbols');

const alphaLowercase = "abcdefghigklmnopqrstuvwxyz";
const alphaUppercase = alphaLowercase.toUpperCase();
const alphaNumeric = "0123456789";
const symbols = "!*^_+.-&#)@([`/]";

const genertateSecureOption = (secureOption, passLength) => {
  let x = [];

  for(let i = 0; i < passLength; i++) {
    let y = Math.floor(Math.random() * secureOption.length)
    x.push(secureOption[y]);
  }

  return x.join('');  
}

const generatePassword = () => {
  const passwordLength = parseInt(rangenum.value);
  let combinedChecked = [];

  if(lowercaseBtn.checked) combinedChecked.push(alphaLowercase);
  if(uppercaseBtn.checked) combinedChecked.push(alphaUppercase);
  if(numericsBtn.checked) combinedChecked.push(alphaNumeric);
  if(symbolsBtn.checked) combinedChecked.push(symbols);

  const generatedPassword = genertateSecureOption(combinedChecked.join(''), passwordLength);

  outputGenpass.style.backgroundImage = `
    linear-gradient(
      to right top, 
      #051937, 
      #004d7a, 
      #008793, 
      #00bf72, 
      #a8eb12
    )
  `;
    
  outputGenpass.innerHTML = `
    ${generatedPassword}
    <span><i class="fas fa-clipboard" title="Copy to clipboard"></i></span>
  `;
}

window.addEventListener('load', () => {
  rangenumOutput.textContent = rangenum.value;

  rangenum.addEventListener('change', () => {
    rangenumOutput.textContent = rangenum.value;
  })

  generateBtn.addEventListener('click', () => {
    if(lowercaseBtn.checked || uppercaseBtn.checked || numericsBtn.checked || symbolsBtn.checked) {
      generatePassword();
    } else {
      outputGenpass.style.background = "#c31432";
      outputGenpass.textContent = "Secures Options Required"
    }
  })

  outputGenpass.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-clipboard')) {
      outputGenpass.style.background = "rgba(0,0,0,0.5)";
      outputGenpass.querySelector('i').className = "fas fa-clipboard-check";
      navigator.clipboard.writeText(outputGenpass.textContent.trim());
    }
  })
})
