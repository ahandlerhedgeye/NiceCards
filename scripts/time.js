module.exports = {
    timeGreeting: function() {
        let d = new Date();
        let time = d.getHours();

        if (time < 12) {
            return "Good Morning"
        } else {
            return "Good Afternoon"
        }
    }
}
