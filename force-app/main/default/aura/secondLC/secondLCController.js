({
	handleClick : function(component, event, helper) {
		//component.set("v.Message", "Button Clicked");
		helper.helperMethod(component, event);        
	},
    handleClick2 : function(component, event, helper) {
		//component.set("v.Message2", "Button Clicked too");
      //  var msg = event.getSource().get("v.label");
      //  component.set("v.Message2", msg);
      //  
	}, 
    
    handleClick3 : function(component, event, helper) {
        component.set("v.parentvar", "Just Chill")
    }
    
})