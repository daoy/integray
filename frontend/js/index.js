

function check(form) { /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                if(form.userid.value == "admin@acc.com" && form.pswrd.value == "accenture") {
                    window.open('connect1.html')/*opens the target page while Id & password matches*/
                }
                else if(form.userid.value == "user@acc.com" && form.pswrd.value == "accenture") {
                    window.open('connect1.html')/*opens the target page while Id & password matches*/
                }
                else {
                    alert("Error Password or Username")/*displays error message*/
                }
            }