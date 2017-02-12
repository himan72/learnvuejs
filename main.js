Vue.component('task-list', {
  template: `
  <div>
  <ul>
  <task v-for="task in tasks">{{task.dec}}</task>
  </ul>
  </div>
  `,

  data(){
    return {
      tasks: [
      {dec: 'task1 description', complete: true},
      {dec: 'task2 description', complete: false},
      {dec: 'task3 description', complete: false},
      {dec: 'task4 description', complete: false},
      {dec: 'task5 description', complete: true}
      ]
    };
  }
});



Vue.component('modal', {

  props: ['buttontext', 'modaltext', 'modalid'],


  template: `
<div>
<button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#'+modalid">
{{buttontext}}
</button>

<div class="modal fade bs-example-modal-lg" tabindex="-1" :id="modalid" role="dialog" aria-labelledby="myLargeModalLabel">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      {{modaltext}}
    </div>
  </div>
</div>
</div>
`

});



Vue.component('task', {
  template: '<li><slot></slot></li>'
});

Vue.component('jumbo', {
  props: ['title', 'message'],
  template: `
  <div class="jumbotron">
  <h1>{{title}}</h1>
  <p>{{message}}</p>
  <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
</div>
`,
})



new Vue({
  el: '#root',
  data: {
    newName: '',
    names: ['Hicham', 'Ghizlane', ' Fatima Ezzahra', 'Zainab', 'AbdAllah'],
    status: false,
    danger: false,
    ttt: 'I am a button',
    seeme: true,
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
