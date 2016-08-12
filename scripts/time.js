module.exports = {
    timeGreeting: function() {
        let d = new Date();
        let time = d.getHours();

        if (time < 12) {
            return "Good Morning"
        } else if (time >= 12 && time <= 17) {
            return "Good Afternoon"
        } else {
          return 'Good Evening'
        }
    },
    timeColor : function () {
      if(this.timeGreeting() === "Good Morning"){
        return 'yellow'
      } else if (this.timeGreeting() === 'Good Afternoon'){
        return 'orange'
      } else {
        return 'navy'
      }
    }
}
