

        //Function to add or remove ticket
        function ticketIncrease(ticketType, isIncrease) {
            const ticketCountNumber = makeInteger(ticketType);
            let ticketNewCount = 0;
            if (isIncrease == true && ticketCountNumber >= 0) {
                ticketNewCount = ticketCountNumber + 1;
            }
            if (isIncrease == false && ticketCountNumber > 0) {
                ticketNewCount = ticketCountNumber - 1;
            }
            document.getElementById(ticketType + "-ticket-count").value = ticketNewCount;
            calculateTotal();
        }

        // Function to make values Integer
        function makeInteger(ticketType) {
            const ticketCount = document.getElementById(ticketType + "-ticket-count").value;
            const ticketNumber = parseInt(ticketCount);
            return ticketNumber;
        }

        // Function to calculate total price
        function calculateTotal() {
            const firstClassNumber = makeInteger("first-class");
            const economyNumber = makeInteger("economy");
            //Sub-total
            const subTotal = firstClassNumber * 150 + economyNumber * 100;
            document.getElementById("sub-total").innerText = "$" + subTotal;
            //vat
            const vat = subTotal * 0.1;
            document.getElementById("vat").innerText = "$" + vat;
            //total
            document.getElementById("total").innerText = "$" + (subTotal + vat);
        }

        //To show how much tickets were booked
        function getConfirmation(){
            const firstClassNumber = makeInteger("first-class");
            const economyNumber = makeInteger("economy");
            document.getElementById("shown").style.display = "none";
            document.getElementById("hidden").style.display="block";

            document.getElementById("first-purchase").innerHTML = "You have purchased "
            + firstClassNumber
            + " first-class tickets";

            document.getElementById("economy-purchase").innerHTML = "You have purchased "
            + economyNumber
            + " economy tickets";
        }
    