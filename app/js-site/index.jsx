var GreetingMessege=React.createClass({
   render:function () {
       var name=this.props.name;
       var message=this.props.message;
       return(
           <div>
               <h1>Hello {name}</h1>
               <p>{message}</p>
           </div>
       )
   }
});
var GreetingForm=React.createClass({
    mySubmitForm:function (e) {
        e.preventDefault();
        var updates={};
        var name=this.refs.name.value;
        var message=this.refs.message.value;
        if(name.length>0){
            this.refs.name.value='';
            updates.name=name;
        }
        if(message.length>0){
            this.refs.message.value='';
            updates.message=message;
        }
        this.props.myNewName(updates);

    },
   render:function () {
       return(
           <div>
               <form onSubmit={this.mySubmitForm} >
                   <input type="text" ref="name"/><br/>
                   <textarea name="textarea" ref="message" >

                   </textarea>
                   <br/>
                   <button>Set Name</button>
               </form>
           </div>
       )
   }
});
var Greeting=React.createClass({
    getDefaultProps:function () {
      return{name:'React',
          message:'I like using React!!!'};

    },
    getInitialState:function () {
      return{
          name:this.props.name,
          message:this.props.message
      };
    },
    onMyClick:function (updates) {
        this.setState(updates)
    },
    render:function(){
        // var name=this.props.name;
        var name=this.state.name;
        var message=this.state.message;
        return(
            <div>
                <GreetingMessege  message={message} name={name}/>
                <GreetingForm  myNewName={this.onMyClick} />
            </div>
        )
    }
});
ReactDOM.render(
  <Greeting />,
  document.getElementById('app')
);
