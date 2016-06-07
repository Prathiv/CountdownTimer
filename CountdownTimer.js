
function anon()
    {


        var deadline = document.getElementById("deadline").value;
        var currenttime=new Date();
        var eventname=document.getElementById("eventname").value;


        if(isNaN(Date.parse(deadline)))
        {
            alert("Please enter a VALID FUTURE DATE and TIME to launch Timer");
        }

        else
        {

            var runningTimer = setInterval(time_checker,1000);
            function time_checker()
            {


                var currenttime=new Date();
                document.getElementById("eventdetails").style.display= "none";
                document.getElementById("timer").style.display = "block";
                var timeinms=(Date.parse(deadline)-Date.parse(currenttime));

                if(timeinms>0)
                    {
                        var timeRemaining=
                        {
                            minutes: Math.floor( (timeinms/1000/60) % 60 ),
                            seconds: Math.floor( (timeinms/1000) % 60 ),
                            hours: Math.floor( (timeinms/(1000*60*60)) % 24 ),
                            days: Math.floor(timeinms/(1000*60*60*24))
                        };

                        document.getElementById("days").innerHTML = timeRemaining.days;
                        document.getElementById("hours").innerHTML = timeRemaining.hours;
                        document.getElementById("minutes").innerHTML = timeRemaining.minutes;
                        document.getElementById("seconds").innerHTML = timeRemaining.seconds;

                    }

                else
                    {
                        clearInterval(runningTimer);
                        document.getElementById("timer").style.display = "none";
                        document.getElementById("timeup").style.display = "block";
                        var TimeUp= "EVENT "+eventname+" has been LAUNCHED!!!";
                        document.getElementById("timeup").innerHTML= TimeUp;
                    }


            }

        }


    }

function reset()
{
    location.reload();
}
