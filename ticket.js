// a l e r t  m e s s a g e  / s u b m i t  f o r m  t i c k e t 

function message(){                                                                                         
    const fullName = document.getElementById('ticket-form-name');
    const email = document.getElementById('ticket-form-email');
    const phone = document.getElementById('ticket-form-phone');
    const form = document.getElementById('ticketform');
    const errorElement = document.getElementById('error')                      // Empty error div that updates when theres a form error 
    const success = document.getElementById('success')

    if(fullName.value === '' || email.value === '' || phone.value === ''){
        danger.style.display = 'block'                                         // displays danger alert to user interface 
    } 
    else {
        setTimeout(() => {                                                    // setTimeOut schedules function to be executed after a few m.s
            fullName.value = '';
            email.value = '';
            phone.value = '';
        }, 2000) ;

        success.style.display = 'block';                                                          
    }

    setTimeout(() => {                                                    // setTimeOut schedules function to be executed after a few m.s
        danger.style.diplay = 'none';
        success.style.display = 'none';
    }, 4000) ;
}
