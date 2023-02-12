function TaskList(){
    // property
    this.arr = [];

    // method
    
    this.addTask = function(task){
        this.arr.push(task);
    };
    
    this.deleteTask = function(task){
        this.arr.splice(task, 1);
    };
    this.timVT = function (id) {
        var index = -1;
    
        this.arr.forEach(function (task, i) {
          if (task.id === id) {
            index = i;
          }
        });
    
        return index;
      };
    
    this.xoaNV = function (id) {
        var index = this.timVT(id);
    
        if (index !== -1) {
          this.arr.splice(index, 1);
        }
    };



}