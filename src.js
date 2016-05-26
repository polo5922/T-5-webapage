	$(document).ready(function() {
   		 $('#pagepiling').pagepiling({
   		 	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
   		 	 anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    		menu: '#myMenu'
   		 	});
   		$("#team").animatedModal({
                modalTarget:'modal-team',
                animatedIn:'lightSpeedIn',
                animatedOut:'bounceOutDown',
                color:'#333',
                // Callbacks
                beforeOpen: function() {
                    console.log("The animation was called");
                },           
                afterOpen: function() {
                    console.log("The animation is completed");
                }, 
                beforeClose: function() {
                    console.log("The animation was called");
                }, 
                afterClose: function() {
                    console.log("The animation is completed");
                }
            });



   	   		$("#demo03").animatedModal({
                modalTarget:'modal-03',
                animatedIn:'lightSpeedIn',
                animatedOut:'bounceOutDown',
                color:'#333',
                // Callbacks
                beforeOpen: function() {
                    console.log("The animation was called");
                },           
                afterOpen: function() {
                    console.log("The animation is completed");
                }, 
                beforeClose: function() {
                    console.log("The animation was called");
                }, 
                afterClose: function() {
                    console.log("The animation is completed");
                }
            });
   	   		$("#demo04").animatedModal({
                modalTarget:'modal-04',
                animatedIn:'lightSpeedIn',
                animatedOut:'bounceOutDown',
                color:'#333',
                // Callbacks
                beforeOpen: function() {
                    console.log("The animation was called");
                },           
                afterOpen: function() {
                    console.log("The animation is completed");
                }, 
                beforeClose: function() {
                    console.log("The animation was called");
                }, 
                afterClose: function() {
                    console.log("The animation is completed");
                }
            });
   	   		$("#contact-menu").animatedModal({
                modalTarget:'modal-contact-menu',
                animatedIn:'lightSpeedIn',
                animatedOut:'bounceOutDown',
                color:'#333',
                // Callbacks
                beforeOpen: function() {
                    console.log("The animation was called");
                },           
                afterOpen: function() {
                    console.log("The animation is completed");
                }, 
                beforeClose: function() {
                    console.log("The animation was called");
                }, 
                afterClose: function() {
                    console.log("The animation is completed");
                }
            });

});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-34160351-1']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
