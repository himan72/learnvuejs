
Vue.component('task', {
  template: '<li>My Task</li>'
});




new Vue({
  el: '#root',
  data: {
    newName: '',
    names: ['Hicham', 'Ghizlane', ' Fatima Ezzahra', 'Zainab', 'AbdAllah'],
    status: false,
    danger: false,
    ttt: 'I am a button'
  },

  methods: {
    addName: function() {

    this.names.push(this.newName);
    this.newName='';

  },
  onClick: function() {

    this.status = true;

  },
  onClick2: function() {

    this.danger = true;
    this.ttt = 'I am a Danger Button';

  },
  addField: function() {

  }

  }

})
