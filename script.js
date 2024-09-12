document.querySelector('button').addEventListener('click', calculateAge);

function calculateAge() {
    const dateInput = document.getElementById('date').value;
    const resultDiv = document.getElementById('result');

    // Check if the input is empty
    if (!dateInput) {
        resultDiv.textContent = 'Please enter your date of birth.';
        resultDiv.style.color = 'red';
        return;
    }

    const birthDate = new Date(dateInput);
    const currentDate = new Date();

    // Check if the birthday is in the future
    if (birthDate > currentDate) {
        resultDiv.textContent = 'Date of birth cannot be in the future.';
        resultDiv.style.color = 'red';
        return;
    }

    // Calculate age in years, months, and days
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    // Adjust months and days calculation if the birthday hasn't occurred yet this year
    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    resultDiv.style.color = '#333';
    resultDiv.innerHTML = `You are <span class="highlight">${years}</span> years, 
                           <span class="highlight">${months}</span> months, and 
                           <span class="highlight">${days}</span> days old.`;
}




