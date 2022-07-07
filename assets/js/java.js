// typewrite greeting
        var app = document.getElementById('app');

        var typewriter = new Typewriter(app, {
            loop: true
        });

        typewriter.typeString("<strong style='color:orange;'>I'm Mustafa Kemal</strong>")
            .pauseFor(2500)
            .deleteAll()
            .typeString("<strong style='color:orange;'>I'm a Designer</strong>")
            .pauseFor(2500)
            .deleteAll()
            .typeString("<strong style='color:orange;'>also Developer</strong>")
            .pauseFor(2500)
            .start();

            // navbar-hover 
            window.onscroll = function() {scrollFunction()};

            function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("navbar").style.top = "0px";
            } else {
                document.getElementById("navbar").style.top = "-90px";
            }
            }

            // reveal on scroll
            window.addEventListener('scroll', reveal);
            function reveal(){
            var reveal = document.querySelectorAll('.reveal');

            for (var i=0;i<reveal.length;i++){
                var windowheight = window.innerHeight;
                var revealtop = reveal[i].getBoundingClientRect().top;
                var revealpoint = 150;

                if(revealtop < windowheight - revealpoint){
                reveal[i].classList.add('active');
                }
                else{
                reveal[i].classList.remove('active');
                }
            }
            }

        // menu item active

        // Add active class to the current button (highlight it)
        var header = document.getElementById("navbar-nav");
        var btns = header.getElementsByClassName("nav-link");
        for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
            if (current.length > 0) { 
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
            });
        }

        // emailjs

        (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init('lFcp8NbCyCbcsVH8W');
        })();

        // 

        function reset() {
            let fullname = document.getElementById("name").value="";
            let userEmail = document.getElementById("emails").value="";
            let phonenbr = document.getElementById("phonenbr").value="";
            let userMessage = document.getElementById("message").value="";
        }

        function sendmail() {
            let fullName = document.getElementById("name").value;
            let userEmail = document.getElementById("emails").value;
            let phonenbr = document.getElementById("phonenbr").value;
            let userMessage = document.getElementById("message").value;

                var contactParams = {
                    from_name: fullName,
                    email: userEmail,
                    phonenbr: phonenbr,
                    message: userMessage
                };
                
                emailjs.send('service_dzx3f2g', 'template_kcbtzdo', contactParams).then(function (res) {
                    swal("Okay", "Your Message is sent", "success"), res.status;
                })

                setTimeout(() => {
                    reset()
                }, 2000);
    
                
        }
    