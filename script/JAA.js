$(document).ready(function(){
            
            
            $("body").fadeIn(400, function(){
                $("#JAA_txt").fadeIn(function(){
                    $("#button_about").fadeIn(function(){
                        $("#button_members").fadeIn(function(){
                            $("#button_loctim").fadeIn(function(){
                                $("#button_sched").fadeIn(function(){
                                    $("#button_gal").fadeIn(function(){
                                        $("#button_con").fadeIn(function(){
                                            $("#terminal_contents").fadeIn()
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
            
            $("#JAA_txt").click(function(){
                location.reload()
            })
            
            $("#button_about").click(function(){
                $("#terminal_members, #terminal_gallery, #terminal_loctim, #terminal_schedule, #terminal_contact, #terminal_start").fadeOut(function(){
                    $("#terminal_about").fadeIn()
                })
            })
            
            $("#button_members").click(function(){
                $("#terminal_gallery, #terminal_loctim, #terminal_schedule, #terminal_contact, #terminal_about, #terminal_start").fadeOut(function(){
                    $("#terminal_members").fadeIn()
                })
            })
            
            $("#button_loctim").click(function(){
                $("#terminal_about, #terminal_members, #terminal_gallery, #terminal_schedule, #terminal_contact, #terminal_start").fadeOut(function(){
                    $("#terminal_loctim").fadeIn()
                })
            })
            
            $("#button_sched").click(function(){
                $("#terminal_about, #terminal_members, #terminal_gallery, #terminal_loctim, #terminal_contact, #terminal_start").fadeOut(function(){
                    $("#terminal_schedule").fadeIn()
                })
            })
            
            $("#button_gal").click(function(){
                $("#terminal_about, #terminal_members, #terminal_loctim, #terminal_schedule, #terminal_contact, #terminal_start").fadeOut(function(){
                    $("#terminal_gallery").fadeIn()
                })
            })
            
            $("#button_con").click(function(){
                $("#terminal_about, #terminal_members, #terminal_gallery, #terminal_schedule, #terminal_loctim, #terminal_start").fadeOut(function(){
                    $("#terminal_contact").fadeIn()
                })
            })
            
            var myIndex = 0;
            carousel();

            function carousel() {
                var i;
                var x = document.getElementsByClassName("mySlides");
                for (i = 0; i < x.length; i++) {
                   x[i].style.display = "none";  
                }
                myIndex++;
                if (myIndex > x.length) {myIndex = 1}    
                x[myIndex-1].style.display = "block";  
                setTimeout(carousel, 2000); // Change image every 2 seconds

            }
})