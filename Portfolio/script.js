document.getElementById('phone-link').addEventListener('click', function () {
    var phoneNumber = '+55 48988786569';
    
    var tempInput = document.createElement('input');
    
    tempInput.value = phoneNumber;
    
    document.body.appendChild(tempInput);
    
    tempInput.select();
    
    document.execCommand('copy');
    
    document.body.removeChild(tempInput);

    alert('Phone Number copied to clipboard.');
});
