document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    body.style.opacity = 0;
    body.style.transition = 'opacity 1.062s';
  
    window.onload = () => {
      body.style.opacity = 1;
    };
  });

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button.btn-outline-primary');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (!this.dataset.alertShown) {
                alert('Sign Up content coming soon!');
                this.dataset.alertShown = "true";
            }
        });
    });
}); 

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href=""], a[href="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            alert('No contents yet. Coming soon!');
        });
    });

    let genericAlertShown = false;
    const showGenericAlert = () => {
        if (!genericAlertShown) {
            alert('No contents yet. Coming soon!');
            genericAlertShown = true; 
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        document.body.addEventListener('click', function(event) {
            const target = event.target;
    
            if (target.tagName === 'BUTTON' && !target.dataset.alertShown) {
                event.preventDefault(); 
    
                 if (target.innerText === 'Contact us') {
                    alert('No contents yet. Coming soon!');
                    target.dataset.alertShown = "true";
                } else {
                    showGenericAlert();
                }
            }
        });
    });
});

