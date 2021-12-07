<template lang="pug">
	div
		slot(name="counter" :days="days | two_digits" :hours="hours | two_digits" :minutes="minutes | two_digits" :seconds="seconds | two_digits")
</template>

<script>

export default {
	mounted() {
    var interval = setInterval(() => {

      this.now = Math.trunc(new Date().getTime() / 1000);
      var distance = this.dateInMilliseconds - this.now;

      if (distance < 0) {
		    clearInterval(interval);
		  }
      
    },1000);
  },
  props: {
    date: {
      type: String
    }
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000)
    }
  },
  filters: {
  	two_digits: function (value) {
	    if (value < 0) {
		    return '00';
		  }
		  if (value.toString().length <= 1) {
		    return `0${value}`;
		  }
		  return value;
	  }
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    }
  }
}
	
</script>